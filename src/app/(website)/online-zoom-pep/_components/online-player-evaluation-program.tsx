"use client";

import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const programFeatures = [
  {
    icon: "/assets/images/online_zoom_pep/icons/opep1.svg",
    label: "LIVE EVALUATOR",
  },
  {
    icon: "/assets/images/online_zoom_pep/icons/opep2.svg",
    label: "8 DIMENSIONS",
  },
  {
    icon: "/assets/images/online_zoom_pep/icons/opep3.svg",
    label: (
      <>
        SUMMARY &
        <br className="block md:hidden" /> PREMIUM REPORT
      </>
    ),
  },
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
        <p className="inline-block border-b border-primary pb-1 font-bold leading-normal text-primary text-sm md:text-base lg:text-lg xl:text-xl">
          ONLINE PLAYER EVALUATION PROGRAM
        </p>
        <h2
          id="online-player-evaluation-title"
          className="mt-[4.5%] font-bold leading-normal tracking-wide sm:mt-[2.5%] md:mt-[5%] text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          Stop Waiting.
          <br />
          Get Evaluated.
        </h2>
      </div>

      <Link
        href={isLogin ? "/contact-us" : "/login"}
        className="absolute left-[4.2%] top-[50%] inline-flex h-11 md:h-14 lg:h-16 items-center justify-center rounded-[8px] border-2 border-primary bg-black/10 px-3 md:px-4 py-3 md:py-4 text-base font-medium leading-none text-primary shadow-[0_0_14px_rgba(16,230,7,0.45)] transition-transform hover:scale-[1.02] sm:left-[3.1%] sm:top-[55%] sm:rounded-[5px] sm:border-[1.5px] sm:text-lg md:left-[2.9%] md:top-[58%] md:text-xl lg:text-2xl xl:text-3xl"
      >
        BOOK YOUR CONSULTATION{" "}
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </Link>

      <div className="absolute left-[4.2%] top-[26%] flex items-center gap-2 whitespace-nowrap text-[6px] font-medium text-white sm:left-[4%] sm:top-[76%] sm:gap-3 sm:text-[8px] md:gap-5 md:text-[11px] lg:gap-7 lg:text-[13px] xl:text-[14px] ">
        {programFeatures.map((feature, index) => (
          <React.Fragment key={`${feature.icon}-${index}`}>
            {index > 0 && (
              <span className="h-6 w-px bg-primary sm:h-10 md:h-12 lg:h-14" />
            )}
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <Image
                src={feature.icon}
                alt=""
                aria-hidden
                width={58}
                height={59}
                className="h-7 w-7 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
              />
              <span className="text-white text-[8px] md:text-sm text-center">
                {feature?.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <p className="absolute left-[4.2%] top-[86.8%] font-medium leading-none text-white sm:left-[4%] sm:top-[92.5%] text-sm md:text-base lg:text-lg xl:text-xl">
        AVAILABLE FOR ALL AGE CATEGORIES -{" "}
        <span className="text-primary">U9 TO U23.</span>
      </p>
    </section>
  );
};

export default OnlinePlayerEvaluationProgram;
