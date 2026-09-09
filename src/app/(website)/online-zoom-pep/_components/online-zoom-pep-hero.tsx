"use client";

import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroFeatures = [
  {
    icon: "/assets/images/online_zoom_pep/icons/ozp_hero1.svg",
    label: "LIVE EVALUATION",
  },
  {
    icon: "/assets/images/online_zoom_pep/icons/ozp_hero2.svg",
    label: "8 DIMENSIONS",
  },
  {
    icon: "/assets/images/online_zoom_pep/icons/ozp_hero3.svg",
    label: "SUMMARY & PREMIUM REPORT",
  },
];

const OnlineZoomPepHero = () => {
  const session = useSession();
  const isLogin = Boolean(session?.data?.user?.accessToken);

  return (
    <section
      aria-labelledby="online-zoom-pep-title"
      className="relative mx-auto mt-3 aspect-[686/1216] w-[95%] max-w-[1400px] overflow-hidden rounded-[30px] bg-[url('/assets/images/online_zoom_pep/sm_ozp_hero.svg')] bg-cover bg-center bg-no-repeat sm:mt-5 sm:aspect-[1447/814] sm:rounded-[34px] sm:bg-[url('/assets/images/online_zoom_pep/lg_ozp_hero.svg')] md:mt-8 md:w-full md:rounded-[52px] lg:mt-10 lg:rounded-[62px] xl:mt-12 xl:rounded-[70px]"
    >
      <div className="absolute inset-x-[3.1%] top-[5.1%] text-white sm:top-[13.8%] md:inset-x-[2.9%] md:top-[14.1%]">
        <p className="inline-block border-b border-primary pb-1 font-medium md:font-bold leading-normal text-primary text-sm md:text-base lg:text-lg xl:text-xl">
          ONLINE PLAYER EVALUATION PROGRAM
        </p>
        <h1
          id="online-zoom-pep-title"
          className="mt-[4.5%] font-bold leading-tight tracking-wide sm:mt-[2.5%] md:mt-[2.3%] text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        >
          YOUR LOCATION SHOULDN'T
          <br />
          LIMIT YOUR DEVELOPMENT.
        </h1>
        <div className="mt-4 md:mt-5 lg:mt-6 max-w-[82%] font-medium leading-normal sm:max-w-[43%] md:max-w-[490px] text-xs md:text-sm lg:text-base lg:text-lg xl:text-xl">
          <p>
            The Player Evaluation Program - Now available
            <br />
            live online, anywhere in the world.
          </p>
          <p className="mt-2">
            The same PEP evaluation framework and
            <br />
            adapted to online.
          </p>
        </div>
      </div>

      <Link
        href={isLogin ? "/contact-us" : "/login"}
        className="absolute left-[4.2%] top-[76%] inline-flex h-12 md:h-14 lg:h-16 items-center justify-center rounded-[8px] border-2 border-primary bg-black/10 px-3 md:px-4 py-3 md:py-4 text-base font-medium leading-none text-primary shadow-[0_0_14px_rgba(16,230,7,0.45)] transition-transform hover:scale-[1.02] sm:left-[3.1%] sm:top-[65.5%] sm:rounded-[5px] sm:border-[1.5px] sm:text-lg md:left-[2.9%] md:top-[64.5%] md:text-xl lg:text-2xl xl:text-3xl"
      >
        BOOK YOUR CONSULTATION  <ChevronRight className="w-6 h-6 md:w-8 md:h-8"/>
      </Link>

      <div className="absolute left-[3.4%]  top-[87.9%] flex items-center gap-2 whitespace-nowrap text-[8px] font-medium text-white sm:left-[3.1%] sm:top-[82.8%] sm:gap-2 sm:text-[8px] md:left-[2.9%] md:gap-3 md:text-[10px] lg:text-[12px] xl:text-[13px]">
        {heroFeatures.map((feature, index) => (
          <React.Fragment key={feature.label}>
            {index > 0 && (
              <span className="h-5 w-px bg-primary sm:h-6 md:h-8 lg:h-9 xl:h-10" />
            )}
            <div className="flex items-center gap-1 md:gap-2">
              <Image
                src={feature.icon}
                alt=""
                aria-hidden
                width={50}
                height={49}
                className="h-6 w-6 object-contain sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9"
              />
              <span className="text-white text-[9px] md:text-sm lg:text-base">{feature?.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <p className="absolute left-[3.4%] top-[92%] font-medium leading-none text-white sm:left-[3.1%] sm:top-[92.4%] md:left-[2.9%] md:top-[92.5%] text-sm md:text-base lg:text-lg xl:text-xl">
        Report delivered within 72 hours
      </p>
    </section>
  );
};

export default OnlineZoomPepHero;
