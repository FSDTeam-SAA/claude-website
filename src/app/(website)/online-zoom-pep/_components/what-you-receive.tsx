"use client";

import Image from "next/image";
import React from "react";

const evaluationAreas = [
  [
    "Technical",
    "Ball control, passing, dribbling, shooting and defending",
    "wdwo1.svg",
  ],
  [
    "Tactical",
    "Positioning, decision-making, game reading and pressing",
    "wdwo4.svg",
  ],
  ["Physical", "Speed, endurance, agility and strength", "wdwo5.svg"],
  [
    "Mental / Psychological",
    "Focus, composure, coachability and leadership",
    "wdwo6.svg",
  ],
  ["Dietetic", "Nutritional habits and performance impact", "wdwo2.svg"],
  [
    "Family & Environment",
    "Support structure and development context",
    "wdwo3.svg",
  ],
  [
    "Personal Evaluation",
    "Self-assessment, goals and self-awareness",
    "wdwo7.svg",
  ],
  ["Game Evaluation", "Completed when match footage is available", "wdwo8.svg"],
] as const;

const summaryItems = [
  ["8 DIMENSIONS", "wdwo1.svg"],
  ["ATTRIBUTE SCORES", "wdwo2.svg"],
  ["OVERALL RATING", "wdwo7.svg"],
  ["STRENGTHS & DEVELOPMENT AREAS", "wdwo4.svg"],
  ["Predictive insights for your potential.", "wdwo3.svg"],
] as const;

const WhatYouReceive = () => {
  return (
    <section
      aria-labelledby="what-you-receive-title"
      className="relative mx-auto mt-3 aspect-[686/1216] w-[95%] max-w-[1400px] overflow-hidden rounded-[30px] bg-[url('/assets/images/online_zoom_pep/sm_what_you_receive.svg')] bg-cover bg-center bg-no-repeat sm:mt-5 sm:aspect-[1221/687] sm:rounded-[34px] sm:bg-[url('/assets/images/online_zoom_pep/lg_what_you_receive.svg')] md:mt-8 md:w-full md:rounded-[52px] lg:mt-10 lg:rounded-[62px] xl:mt-12 xl:rounded-[70px]"
    >
      <header className="absolute inset-x-[4%] top-[3.2%] z-10 text-center text-white sm:top-[3.5%]">
        <p className="text-[10px] font-bold tracking-[0.35em] text-primary sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px]">
          WHAT YOU RECEIVE
        </p>
        <h2
          id="what-you-receive-title"
          className="mt-1 text-xl font-bold leading-none tracking-tight sm:text-[24px] md:text-[clamp(30px,3.3vw,50px)] lg:text-[clamp(36px,3.5vw,54px)] xl:text-[58px]"
        >
          Your Summary Online PEP Report.
        </h2>
        <p className="mt-1 text-[9px] font-medium leading-none sm:text-[9px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
          A complete view of your profile - delivered within 48 hours of your
          live session.
        </p>
      </header>

      <div className="absolute left-[7.5%] top-[47.5%] grid w-[85%] grid-cols-2 gap-x-2 gap-y-2 sm:left-auto sm:right-[3.2%] sm:top-[20%] sm:w-[41.5%] sm:gap-x-2 sm:gap-y-2 md:gap-x-3 md:gap-y-3 lg:gap-x-4 lg:gap-y-4">
        {evaluationAreas.map(([title, description, icon]) => (
          <article
            key={title}
            className="flex min-h-[55px] items-center gap-1.5 rounded-[6px] border border-primary bg-black/55 px-1.5 py-1.5 text-white shadow-[0_0_8px_rgba(16,230,7,0.18)] sm:min-h-[67px] sm:gap-1 sm:rounded-[4px] sm:px-1.5 md:min-h-[73px] md:gap-2 md:px-2 lg:min-h-[82px] lg:rounded-[6px] lg:px-3 xl:min-h-[91px]"
          >
            <Image
              src={`/assets/images/pep/${icon}`}
              alt=""
              aria-hidden
              width={360}
              height={360}
              className="h-9 w-9 shrink-0 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
            />
            <div className="min-w-0">
              <h3 className="text-[10px] font-bold uppercase leading-[0.95] text-primary sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[15px]">
                {title}
              </h3>
              <p className="mt-1 text-[7px] font-medium leading-[1.05] sm:text-[6px] md:text-[8px] lg:text-[9px] xl:text-[10px]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-[3.8%] left-[7.5%] flex w-[85%] items-center justify-between rounded-[6px] border border-primary bg-black/55 px-2 py-2 text-white sm:bottom-[3.2%] sm:left-[3.2%] sm:w-[93.6%] sm:px-3 sm:py-2 md:px-5 md:py-3 lg:py-4">
        {summaryItems.map(([label, icon], index) => (
          <React.Fragment key={label}>
            {index > 0 && (
              <span className="h-7 w-px bg-primary sm:h-8 md:h-10 lg:h-12" />
            )}
            <div className="flex min-w-0 flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
              <Image
                src={`/assets/images/pep/${icon}`}
                alt=""
                aria-hidden
                width={360}
                height={360}
                className="h-6 w-6 shrink-0 object-contain sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
              <span className="text-center text-[5px] font-medium leading-[1.05] sm:text-[5px] md:text-[7px] lg:text-[9px] xl:text-[10px]">
                {label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhatYouReceive;
