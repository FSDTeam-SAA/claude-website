"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PepWelcomePopup = () => {
  const [open, setOpen] = React.useState(true);

   const session = useSession();
   const isLogin = session?.data?.user?.accessToken;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-h-[87vh] w-[80vw] max-w-[760px] gap-0 overflow-y-auto rounded-xl border-none bg-white p-0 shadow-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&>button]:right-3 [&>button]:top-3 [&>button]:flex [&>button]:h-9 [&>button]:w-9 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-black/80 [&>button]:p-0 [&>button]:text-white [&>button]:opacity-100 [&>button]:ring-1 [&>button]:ring-white/50 hover:[&>button]:bg-black [&>button>svg]:h-5 [&>button>svg]:w-5"
        aria-describedby="pep-popup-description"
      >
        <div className="w-full">
          <Image
            src="/assets/images/pep/popup_1.svg"
            alt="Tryouts banner"
            width={1024}
            height={1536}
            className="block h-auto w-full"
            priority
          />
        </div>

        <div className="relative w-full">
          <Image
            src="/assets/images/pep/popup_2.svg"
            alt="Tryouts schedule"
            width={1024}
            height={1536}
            className="block h-auto w-full"
          />

          <div className="absolute inset-x-0 bottom-[6.5%] flex justify-center px-4">
            <Link
                 href={`${isLogin ? "/prices#combine-june" : "/sign-up"}`}
              className="inline-flex h-8 min-w-[140px] items-center justify-center rounded-full bg-primary px-6 py-1 text-sm font-semibold text-black transition-opacity hover:opacity-90 md:h-12 md:min-w-[180px] md:px-8 md:py-2 md:text-base lg:py-3"
            >
              Reserve your spot
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PepWelcomePopup;
