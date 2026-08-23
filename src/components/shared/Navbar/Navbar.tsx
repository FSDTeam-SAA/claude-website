"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutModal from "@/components/modals/LogoutModal";
import { toast } from "sonner";
import SearchBox from "./SearchBox";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { UserProfileApiResponse } from "@/app/(player-profile)/player-profile/[id]/_components/player-data-type";
import LanguageSwitcher from "@/components/ui/language-switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [evaluationMenuOpen, setEvaluationMenuOpen] = useState(false);
  const router = useRouter();

  const session = useSession();
  const status = session?.status;
  const id = session?.data?.user?.id;
  const user = session?.data?.user;
  const hasValidUserId = Boolean(id && /^[a-f\d]{24}$/i.test(id));

  const { data } = useQuery<UserProfileApiResponse>({
    queryKey: ["user-profile", id],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/detail/${id}`,
      );
      return res.json();
    },
    enabled: status === "authenticated" && hasValidUserId,
  });

  const userId = data?.data?.user?._id;

  // Replace with your actual base URL
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleProtectedRoute = (path: string) => {
    const translationCookie = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("googtrans="));
    const language = translationCookie?.split("/").pop();
    const isTranslated = !!language && language !== "en";

    if (status !== "authenticated") {
      if (pathname === "/profile" && isTranslated) {
        window.location.assign("/sign-up");
        return;
      }
      router.push("/sign-up");
      return;
    }

    // The profile form is translated by Google Translate, which mutates its
    // DOM. A full navigation avoids React unmounting that external DOM shape.
    if (pathname === "/profile" && isTranslated) {
      window.location.assign(path);
      return;
    }

    router.push(path);
  };

  const handLogout = async () => {
    try {
      toast.success("Logout successful!");
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  const profileImg = data?.data?.user?.profileImage
    ? data?.data?.user?.profileImage
    : "/assets/images/no-user.jpg";
  return (
    <div className="sticky top-0 z-50">
      <header className="w-full border-b border-border border-gray-200 bg-white">
        <nav className="container mx-auto px-4 py-3 ">
          <div className="flex items-center justify-between gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/assets/images/logo.jpg"
                alt="logo"
                width={1000}
                height={1000}
                className="w-[202px] h-[56px] object-cover"
              />
            </Link>

            {/* Search Box - Desktop */}
            <div className="hidden lg:block flex-1 max-w-sm mx-1">
              <SearchBox baseUrl={BASE_URL} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {/* <button
                onClick={() =>
                  handleProtectedRoute("/")
                }
                className={`text-sm md:text-[15px] hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
              >
                Player Evaluation Program
              </button> */}

              <DropdownMenu modal={false}>
                <DropdownMenuTrigger
                  className={`flex items-center gap-1 text-sm md:text-[15px] hover:text-primary leading-[150%] font-normal transition-all ease-in-out duration-300 outline-none ${
                    pathname === "/" ||
                    pathname === "/u19-u23"
                      ? "border-b-[2px] border-primary text-primary"
                      : "border-0 text-[#131313]"
                  }`}
                >
                  Player Evaluation Program
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/"
                      className={`cursor-pointer ${
                        pathname === "/"
                          ? "font-medium text-primary"
                          : "text-[#131313]"
                      }`}
                    >
                      U9/U18
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/u19-u23"
                      className={`cursor-pointer ${
                        pathname === "/u19-u23"
                          ? "font-medium text-primary"
                          : "text-[#131313]"
                      }`}
                    >
                      U19/U23
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* <button
                onClick={() => handleProtectedRoute("/services")}
                className={`text-sm md:text-[15px] hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/services"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
              >
                Services
              </button> */}

              <button
                onClick={() => handleProtectedRoute("/profiles")}
                className={`text-sm md:text-[15px] hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/profiles"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
              >
                Profiles
              </button>

              <Link
                href="/data"
                className={`text-sm md:text-[15px] hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/data"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
              >
                Data
              </Link>

              <button
                onClick={() => handleProtectedRoute("/prices")}
                className={`text-sm md:text-[15px] hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/prices"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
              >
                Prices
              </button>

              <div>
                <LanguageSwitcher />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              {status === "authenticated" && user ? (
                <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                  <DropdownMenuTrigger>
                    <Image
                      src={profileImg}
                      alt="user-img"
                      width={200}
                      height={200}
                      className="w-14 h-14 rounded-full border object-contain"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-2 border-none bg-white">
                    <Link href="/profile">
                      <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                        Profile Settings
                      </DropdownMenuLabel>
                    </Link>
                    {userId && (
                      <Link href={`/player-profile/${userId}`}>
                        <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                          My Profile
                        </DropdownMenuLabel>
                      </Link>
                    )}
                    <Link href="/password-change">
                      <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                        Password Change
                      </DropdownMenuLabel>
                    </Link>
                    <DropdownMenuLabel
                      onClick={() => setLogoutModalOpen(true)}
                      className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"
                    >
                      <LogOut className="w-5 h-5 " /> Logout
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-[44px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-5 rounded-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      size="sm"
                      className="h-[44px] py-2 px-5 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] "
                    >
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-4 md:hidden flex flex-col space-y-3 pb-4">
              {/* Search Box - Mobile */}
              <div className="mb-2">
                <SearchBox baseUrl={BASE_URL} />
              </div>

              {/* <button
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  handleProtectedRoute("/");
                }}
              >
                Player Evaluation Program
              </button> */}

              <div className="flex flex-col items-start gap-2">
                <button
                  type="button"
                  onClick={() => setEvaluationMenuOpen((current) => !current)}
                  aria-expanded={evaluationMenuOpen}
                  className={`flex w-fit items-center gap-1 text-sm md:text-base hover:text-primary leading-[150%] font-normal transition-all ease-in-out duration-300 ${
                    pathname === "/" ||
                    pathname === "/u19-u23"
                      ? "border-b-[2px] border-primary text-primary"
                      : "border-0 text-[#131313]"
                  }`}
                >
                  Player Evaluation Program
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      evaluationMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {evaluationMenuOpen && (
                  <div className="ml-4 flex flex-col gap-2 border-l border-gray-200 pl-3">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={`text-sm transition-colors hover:text-primary ${
                        pathname === "/"
                          ? "font-medium text-primary"
                          : "text-[#131313]"
                      }`}
                    >
                      U9/U18
                    </Link>
                    <Link
                      href="/u19-u23"
                      onClick={() => setIsOpen(false)}
                      className={`text-sm transition-colors hover:text-primary ${
                        pathname === "/u19-u23"
                          ? "font-medium text-primary"
                          : "text-[#131313]"
                      }`}
                    >
                      U19/U23
                    </Link>
                  </div>
                )}
              </div>

              {/* <button
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/services"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  handleProtectedRoute("/services");
                }}
              >
                Services
              </button> */}

              <button
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/profiles"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  handleProtectedRoute("/profiles");
                }}
              >
                Profiles
              </button>

              <Link
                href="/data"
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/data"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
              >
                Data
              </Link>

              <button
                className={`w-fit text-sm md:text-base hover:text-primary leading-[150%] text-[#131313] font-normal transition-all ease-in-out duration-300 ${
                  pathname === "/prices"
                    ? "border-b-[2px] border-primary"
                    : "border-0"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  handleProtectedRoute("/prices");
                }}
              >
                Prices
              </button>

              {/* ✅ Language Switcher for Mobile */}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                {status === "authenticated" && user ? (
                  <DropdownMenu
                    open={mobileDropdownOpen}
                    onOpenChange={setMobileDropdownOpen}
                    modal={false}
                  >
                    <DropdownMenuTrigger>
                      <Image
                        src={user?.profileImage || "/assets/images/no-user.jpg"}
                        alt="user-img"
                        width={200}
                        height={200}
                        className="w-14 h-14 rounded-full border object-contain"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2 bg-white border-white">
                      <Link
                        href="/profile"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileDropdownOpen(false);
                        }}
                      >
                        <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                          Profile Settings
                        </DropdownMenuLabel>
                      </Link>

                      {userId && (
                        <Link
                          href={`/player-profile/${userId}`}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                        >
                          <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                            My Profile
                          </DropdownMenuLabel>
                        </Link>
                      )}
                      <Link
                        href="/password-change"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileDropdownOpen(false);
                        }}
                      >
                        <DropdownMenuLabel className="cursor-pointer text-base md:text-lg text-[#131313] leading-[120%] font-medium hover:text-primary">
                          Password Change
                        </DropdownMenuLabel>
                      </Link>
                      <DropdownMenuLabel
                        onClick={() => setLogoutModalOpen(true)}
                        className="flex items-center gap-2 cursor-pointer text-base md:text-lg text-[#B70000] leading-[120%] font-medium hover:text-red-800"
                      >
                        <LogOut className="w-5 h-5 " /> Logout
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-[40px] text-base text-[#131313] font-normal leading-[150%] border-[2px] border-[#131313] py-2 px-9 rounded-full"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/sign-up">
                      <Button
                        size="sm"
                        className="h-[40px] py-2 px-9 rounded-full bg-primary hover:bg-primary/90 text-white text-base font-normal leading-[150%] "
                      >
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {logoutModalOpen && (
        <LogoutModal
          isOpen={logoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
          onConfirm={handLogout}
        />
      )}
    </div>
  );
};

export default Navbar;
