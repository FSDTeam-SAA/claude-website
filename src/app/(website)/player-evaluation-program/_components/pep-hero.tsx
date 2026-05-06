"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const PepHero = () => {
  const session = useSession();
  const isLogin = session?.data?.user?.accessToken;

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/pep/sm_pep_hero.svg')] md:bg-[url('/assets/images/pep/lg_pep_hero.svg')] bg-cover bg-center bg-no-repeat min-h-[650px] md:h-[750px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-end pb-12 md:pb-0 md:justify-center">
      {/* Bottom gradient for text readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-none z-0"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 md:gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-1.5 md:w-2 h-16 md:h-32 lg:h-40 bg-primary"></div>
              <h1 className="text-[42px] md:text-6xl lg:text-8xl font-medium text-white leading-normal">
                Redefining <br /> Potential
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <h2 className="text-primary text-[18px] md:text-2xl lg:text-3xl font-medium leading-tight">
              The Player Evaluation Program:
            </h2>
            <p className="text-white text-[15px] md:text-xl lg:text-2xl font-medium leading-tight">
              A Modern Approach to Talent Development
            </p>
          </div>

          <div className="mt-2 md:mt-16 lg:mt-24">
            <Link
              href={`${isLogin ? "/prices" : "/sign-up"}`}
              className="h-12 md:h-14 inline-flex items-center justify-center rounded-full bg-primary px-12 md:px-16 text-base md:text-xl font-bold text-black transition-all hover:opacity-90 hover:scale-105 shadow-[0_0_20px_rgba(16,230,7,0.5)]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PepHero;
