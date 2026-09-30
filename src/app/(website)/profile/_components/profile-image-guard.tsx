"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { UserProfileApiResponse } from "./user-data-type";

const PROFILE_SETTINGS_PATH = "/profile";

const ALLOWED_PATHS = [PROFILE_SETTINGS_PATH];

export default function ProfileImageGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const token = (session?.user as { accessToken?: string })?.accessToken;
  const role = session?.user?.role;
  const requiresProfileCompletion = role === "player" || role === "gk";

  // toast বারবার দেখানো বন্ধ করার জন্য
  const toastShownRef = useRef(false);

  const { data, isLoading, isFetching, isError } =
    useQuery<UserProfileApiResponse>({
      queryKey: ["user-profile"],
      queryFn: async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store",
          },
        );
        if (!response.ok) {
          throw new Error("Failed to load profile completion status");
        }
        return response.json();
      },
      enabled: !!token && requiresProfileCompletion,
      staleTime: 1000 * 60 * 5,
    });

  useEffect(() => {
    // auth loading হলে কিছু করবে না
    if (status === "loading") return;

    // login না থাকলে guard লাগবে না (তোমার auth route guard আলাদা থাকতে পারে)
    if (!token || !requiresProfileCompletion) return;

    // user-profile fetch loading/refreshing হলে অপেক্ষা
    if (isLoading || isFetching || isError) return;

    const isProfileCompleted = data?.data?.user?.isProfileCompleted === true;

    const isAllowed = ALLOWED_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/"),
    );

    // ✅ Profile image না থাকলে—allowed path ছাড়া অন্য কোথাও যেতে দিবে না
    if (!isProfileCompleted && !isAllowed) {
      if (!toastShownRef.current) {
        toastShownRef.current = true;
        toast.error("Please complete all required profile fields first.");
      }
      router.replace(PROFILE_SETTINGS_PATH);
    } else {
      // ✅ profileImage হয়ে গেলে আবার future toast block reset
      toastShownRef.current = false;
    }
  }, [
    pathname,
    token,
    status,
    requiresProfileCompletion,
    isLoading,
    isFetching,
    isError,
    data,
    router,
  ]);

  return <>{children}</>;
}
