"use client"

import { useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

// ✅ তোমার Profile Setting page route এখানে দাও
const PROFILE_SETTINGS_PATH = "/profile"

// ✅ যেসব পেজে Profile Image ছাড়াও ঢুকতে পারবে
const ALLOWED_PATHS = [
  PROFILE_SETTINGS_PATH,
  "/login",
  "/register",
  "/forgot-password",
]

type UserProfileApiResponse = {
  data?: {
    user?: {
      profileImage?: string | null
    }
  }
}

export default function ProfileImageGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, status } = useSession()
  const token = (session?.user as { accessToken?: string })?.accessToken

  // toast বারবার দেখানো বন্ধ করার জন্য
  const toastShownRef = useRef(false)

  const { data, isLoading, isFetching } = useQuery<UserProfileApiResponse>({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        }
      )
      return res.json()
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })

  useEffect(() => {
    // auth loading হলে কিছু করবে না
    if (status === "loading") return

    // login না থাকলে guard লাগবে না (তোমার auth route guard আলাদা থাকতে পারে)
    if (!token) return

    // user-profile fetch loading/refreshing হলে অপেক্ষা
    if (isLoading || isFetching) return

    const hasProfileImage = !!data?.data?.user?.profileImage

    const isAllowed = ALLOWED_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    )

    // ✅ Profile image না থাকলে—allowed path ছাড়া অন্য কোথাও যেতে দিবে না
    if (!hasProfileImage && !isAllowed) {
      if (!toastShownRef.current) {
        toastShownRef.current = true
        toast.error("Profile image mandatory. Please upload your profile image first.")
      }
      router.replace(PROFILE_SETTINGS_PATH)
    } else {
      // ✅ profileImage হয়ে গেলে আবার future toast block reset
      toastShownRef.current = false
    }
  }, [pathname, token, status, isLoading, isFetching, data, router])

  return <>{children}</>
}