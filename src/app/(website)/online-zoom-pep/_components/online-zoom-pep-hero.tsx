
"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroFeatures = [
  { icon: "/assets/images/online_zoom_pep/icons/ozp_hero1.svg", label: "LIVE EVALUATION" },
  { icon: "/assets/images/online_zoom_pep/icons/ozp_hero2.svg", label: "8 DIMENSIONS" },
  { icon: "/assets/images/online_zoom_pep/icons/ozp_hero3.svg", label: "SUMMARY & PREMIUM REPORT" },
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
        <p className="inline-block border-b border-primary pb-1 text-[13px] font-bold leading-none text-primary sm:text-[11px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
          ONLINE PLAYER EVALUATION PROGRAM
        </p>
        <h1 id="online-zoom-pep-title" className="mt-[4.5%] text-[25px] font-bold leading-[1.08] tracking-wide sm:mt-[2.5%] sm:text-[25px] md:mt-[2.3%] md:text-[clamp(34px,4.25vw,60px)] lg:text-[clamp(42px,4.1vw,56px)] xl:text-[60px] md:leading-[1.08]">
          YOUR LOCATION SHOULDN&apos;T<br />LIMIT YOUR DEVELOPMENT.
        </h1>
        <div className="mt-[6%] max-w-[82%] text-[11px] font-medium leading-[1.15] sm:mt-[4.5%] sm:max-w-[43%] sm:text-[10px] sm:leading-[1.08] md:mt-[2.4%] md:max-w-[490px] md:text-[14px] md:leading-[1.08] lg:text-[16px] xl:text-[18px]">
          <p>The Player Evaluation Program - Now available<br />live online, anywhere in the world.</p>
          <p className="mt-[4%] sm:mt-[6%] md:mt-[5%]">The same PEP evaluation framework and<br />adapted to online.</p>
        </div>
      </div>

      <Link
        href={isLogin ? "/prices#player-evaluation-program" : "/sign-up"}
        className="absolute left-[4.2%] top-[79.8%] inline-flex h-12 md:h-14 lg:h-16 items-center justify-center rounded-[8px] border-2 border-primary bg-black/10 px-4 py-4 text-[17px] font-bold leading-none text-primary shadow-[0_0_14px_rgba(16,230,7,0.45)] transition-transform hover:scale-[1.02] sm:left-[3.1%] sm:top-[65.5%] sm:rounded-[5px] sm:border-[1.5px] sm:text-[14px] md:left-[2.9%] md:top-[64.5%] md:text-[22px] lg:text-[25px] xl:text-[28px]"
      >
        BOOK YOUR CONSULTATION
        <span aria-hidden className="ml-3 text-[28px] leading-none sm:ml-2 sm:text-[22px] md:text-[32px] lg:text-[35px] xl:text-[38px]">›</span>
      </Link>

      <div className="absolute left-[3.4%] top-[87.9%] flex items-center gap-2 whitespace-nowrap text-[8px] font-medium text-white sm:left-[3.1%] sm:top-[82.8%] sm:gap-2 sm:text-[8px] md:left-[2.9%] md:gap-3 md:text-[10px] lg:text-[12px] xl:text-[13px]">
        {heroFeatures.map((feature, index) => (
          <React.Fragment key={feature.label}>
            {index > 0 && <span className="h-7 w-px bg-primary sm:h-6 md:h-8 lg:h-9 xl:h-10" />}
            <div className="flex items-center gap-1 md:gap-2">
              <Image src={feature.icon} alt="" aria-hidden width={50} height={49} className="h-6 w-6 object-contain sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
              <span>{feature.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <p className="absolute left-[3.4%] top-[94.1%] text-[11px] font-medium leading-none text-white sm:left-[3.1%] sm:top-[92.4%] sm:text-[13px] md:left-[2.9%] md:top-[92.5%] md:text-[16px] lg:text-[18px] xl:text-[20px]">
        Report delivered within 72 hours
      </p>
    </section>
  );
};

export default OnlineZoomPepHero;
