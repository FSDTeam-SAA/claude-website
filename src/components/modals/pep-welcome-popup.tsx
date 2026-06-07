"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogClose, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const PepWelcomePopup = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="bg-black/5 backdrop-blur-[0.5px]" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 grid w-[calc(100vw-1rem)] max-w-none -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[16px] border-0 bg-white shadow-2xl outline-none sm:w-[min(calc(100vw-2rem),420px)] sm:rounded-[18px] md:w-[min(calc(100vw-3rem),430px)] lg:w-[min(calc(100vw-4rem),460px)]"
          )}
        >
          <DialogClose className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white opacity-100 ring-1 ring-white/40 transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/40">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="aspect-[1086/1448] h-auto w-full">
            <Image
              src="/assets/images/popup/new_popup.svg"
              alt="popup"
              width={1024}
              height={836}
              priority
              className="block h-full w-full object-contain"
            />
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default PepWelcomePopup;
