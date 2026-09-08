"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const programFeatures = [
  { icon: "/assets/images/online_zoom_pep/icons/opep1.svg", label: "LIVE EVALUATOR" },
  { icon: "/assets/images/online_zoom_pep/icons/opep2.svg", label: "8 DIMENSIONS" },
  { icon: "/assets/images/online_zoom_pep/icons/opep3.svg", label: "SUMMARY & PREMIUM REPORT" },
];

const OnlinePlayerEvaluationProgram = () => {
  const session = useSession();
  const isLogin = Boolean(session?.data?.user?.accessToken);

  return (
    <section
      aria-labelledby="online-player-evaluation-title"
      className="relative mx-auto mt-3 aspect-[686/1216] w-[95%] max-w-[1400px] overflow-hidden rounded-[30px] bg-[url('/assets/images/online_zoom_pep/sm_opep.svg')] bg-cover bg-center bg-no-repeat sm:mt-5 sm:aspect-[1447/814] sm:rounded-[34px] sm:bg-[url('/assets/images/online_zoom_pep/lg_opep.svg')] md:mt-8 md:w-full md:rounded-[52px] lg:mt-10 lg:rounded-[62px] xl:mt-12 xl:rounded-[70px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 "
    >
      <div className="absolute inset-x-[3.7%] top-[5.1%] text-white sm:top-[18.5%] md:inset-x-[4%] md:top-[19.5%]">
        <p className="inline-block border-b border-primary pb-1 text-[13px] font-bold leading-none text-primary sm:text-[11px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
          ONLINE PLAYER EVALUATION PROGRAM
        </p>
        <h1 id="online-player-evaluation-title" className="mt-[4.5%] text-[34px] font-bold leading-[1.02] tracking-wide sm:mt-[2.5%] sm:text-[25px] md:mt-[5%] md:text-[clamp(38px,4.8vw,68px)] lg:text-[clamp(52px,4.4vw,78px)] xl:text-[86px] md:leading-[0.96]">
          Stop Waiting.<br />Get Evaluated.
        </h1>
      </div>

      <Link
        href={isLogin ? "/prices#player-evaluation-program" : "/sign-up"}
        className="absolute left-[4.2%] top-[51.8%] inline-flex items-center justify-center rounded-[5px] border-[1.5px] border-primary bg-black/10 px-4 py-2 text-[13px] font-bold leading-none text-primary shadow-[0_0_14px_rgba(16,230,7,0.45)] transition-transform hover:scale-[1.02] sm:left-[4%] sm:top-[56.5%] sm:rounded-[8px] sm:border-2 sm:text-[16px] md:top-[56.8%] md:text-[24px] lg:text-[28px] xl:text-[31px]"
      >
        BOOK YOUR CONSULTATION
        <span aria-hidden className="ml-2 text-[22px] leading-none sm:ml-3 sm:text-[30px] md:text-[38px] lg:text-[42px]">›</span>
      </Link>

      <div className="absolute left-[4.2%] top-[26%] flex items-center gap-2 whitespace-nowrap text-[6px] font-medium text-white sm:left-[4%] sm:top-[76%] sm:gap-3 sm:text-[8px] md:gap-5 md:text-[11px] lg:gap-7 lg:text-[13px] xl:text-[14px]">
        {programFeatures.map((feature, index) => (
          <React.Fragment key={feature.label}>
            {index > 0 && <span className="h-6 w-px bg-primary sm:h-10 md:h-12 lg:h-14" />}
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <Image src={feature.icon} alt="" aria-hidden width={58} height={59} className="h-7 w-7 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
              <span>{feature.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <p className="absolute left-[4.2%] top-[86.8%] text-[10px] font-medium leading-none text-white sm:left-[4%] sm:top-[92.5%] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
        AVAILABLE FOR ALL AGE CATEGORIES - <span className="text-primary">U9 TO U23.</span>
      </p>
    </section>
  );
};

export default OnlinePlayerEvaluationProgram;
