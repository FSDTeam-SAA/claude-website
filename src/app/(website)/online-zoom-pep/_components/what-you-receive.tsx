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
  [
    <>
      STRENGTHS & <br className="block md:hidden" /> DEVELOPMENT AREAS
    </>,
    "wdwo4.svg",
  ],
  [
    <>
      Predictive insights <br className="block md:hidden" /> for your potential.
    </>,
    "wdwo3.svg",
  ],
] as const;

const WhatYouReceive = () => {
  return (
    <section
      aria-labelledby="what-you-receive-title"
      className="relative mx-auto mt-3 box-content aspect-[686/1216] w-[95%] max-w-[1400px] overflow-hidden rounded-[30px] bg-[url('/assets/images/online_zoom_pep/sm_what_you_receive.svg')] bg-cover bg-center bg-no-repeat pb-[60px] sm:mt-5 sm:box-border sm:aspect-[1221/687] sm:rounded-[34px] sm:bg-[url('/assets/images/online_zoom_pep/lg_what_you_receive.svg')] sm:pb-0 md:mt-8 md:w-full md:rounded-[52px] lg:mt-10 lg:rounded-[62px] xl:mt-12 xl:rounded-[70px]"
    >
      <header className="absolute inset-x-[4%] top-[3.2%] z-10 text-center text-white sm:top-[3.5%]">
        <p className="font-bold tracking-[0.35em] text-primary leading-normal text-xs md:text-sm lg:text-base lg:text-lg">
          WHAT YOU RECEIVE
        </p>
        <h2
          id="what-you-receive-title"
          className="py-1 md:py-0  font-semibold leading-none tracking-tight text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          Your Summary Online PEP Report.
        </h2>
        <p className="mt-[2px] font-normal md:font-medium leading-normal text-[10px] md:text-sm lg:text-base">
          A complete view of your profile - delivered within 48 hours of your live session.
        </p>
      </header>

      <div className="absolute left-[7.5%] top-[50%] grid w-[85%] grid-cols-2 gap-1.5 md:gap-2 lg:gap-3 sm:left-auto sm:right-[3.2%] sm:top-[20%] sm:w-[41.5%] ">
        {evaluationAreas.map(([title, description, icon]) => (
          <article
            key={title}
            className="flex min-h-[55px] items-center gap-1.5 rounded-[6px] border border-primary bg-black/55 p-1.4 md:p-2 text-white shadow-[0_0_8px_rgba(16,230,7,0.18)] sm:gap-1 sm:rounded-[4px] md:gap-2 lg:rounded-[6px]"
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
              <h5 className="font-bold uppercase leading-[0.95] text-primary text-xs md:text-sm lg:text-base">
                {title}
              </h5>
              <p className="mt-[2px] font-medium leading-normal text-[7px] md:text-[10px] lg:text-xs">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-[3.8%] left-[7.5%] flex w-[85%] items-center justify-between rounded-[6px] border border-primary bg-black/55 text-white sm:bottom-[3.2%] sm:left-[3.2%] sm:w-[93.6%] p-1.5 md:p-3">
        {summaryItems.map(([label, icon], index) => (
          <React.Fragment key={`${icon}-${index}`}>
            {index > 0 && (
              <span className="h-7 w-px bg-primary sm:h-8 md:h-10 lg:h-12" />
            )}
            <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
              <Image
                src={`/assets/images/pep/${icon}`}
                alt=""
                aria-hidden
                width={360}
                height={360}
                className="h-9 w-9 shrink-0 object-contain sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
              />
              <span className="max-w-full text-center font-medium leading-[1.05] text-[6px] md:text-[10px] lg:text-xs">
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
