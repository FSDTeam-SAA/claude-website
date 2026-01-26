


"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import UserTypeModal from "./user-type-modal";

interface GoogleLoginButtonProps {
  context?: "login" | "signup";
}

const GoogleLoginButton = ({ context = "login" }: GoogleLoginButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);

  console.log("button context", context)

  // ✅ Google sign-in handler
  const handleGoogleSignIn = (role?: string) => {
    setIsLoading(true);

    // Create callback URL with role parameter
    let callbackUrl = "/";

    if (role && context === "signup") {
      // For signup, pass role through callback URL
      // This will be accessible in the redirect callback
      callbackUrl = `/?google_signup_role=${role}`;

      console.log("📝 Google signup with role:", role);
      console.log("📍 Callback URL:", callbackUrl);
    }

    console.log("🚀 Starting Google OAuth with:");
    console.log("- Role:", role || "none (login)");
    console.log("- Callback URL:", callbackUrl);
    console.log("- Context:", context);

    // Start Google OAuth flow
    signIn("google", {
      callbackUrl: callbackUrl,
      redirect: true,
    });
  };

  const handleButtonClick = () => {
    if (context === "signup") {
      // Signup → open role modal
      setShowUserTypeModal(true);
    } else {
      // Login → no role needed
      handleGoogleSignIn();
    }
  };

  const handleUserTypeSelect = (type: "player" | "gk") => {
    console.log("🎯 User selected role:", type);
    setShowUserTypeModal(false);
    handleGoogleSignIn(type);
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={handleButtonClick}
        disabled={isLoading}
        className="w-full h-[45px] rounded-[16px] border-[#6C6C6C] text-[#424242] hover:bg-gray-50 transition-all"
      >
        <div className="flex items-center justify-center gap-3">
          {isLoading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-800" />
          ) : (
            <Image
              src="/assets/images/google.svg"
              alt="Google"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          )}

          <span className="text-base font-semibold text-[#131313]">
            {isLoading
              ? "Signing in..."
              : context === "signup"
                ? "Sign up with Google"
                : "Continue with Google"}
          </span>
        </div>
      </Button>

      <UserTypeModal
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
        onUserTypeSelect={handleUserTypeSelect}
      />
    </>
  );
};

export default GoogleLoginButton;


