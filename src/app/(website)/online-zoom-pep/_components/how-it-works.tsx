import Image from "next/image";
import React from "react";

const steps = [
  {
    number: "01",
    title: "BOOK YOUR SESSION",
    image: "/assets/images/online_zoom_pep/hit1.svg",
    details: [
      "Choose your date and time",
      "Select your age category",
      "Confirmation within 24 hours",
    ],
  },
  {
    number: "02",
    title: "CONNECT LIVE ON ZOOM",
    image: "/assets/images/online_zoom_pep/hit2.svg",
    details: [
      "Join your scheduled live session",
      "Complete all evaluation dimensions",
    ],
  },
  {
    number: "03",
    title: "GET SUMMARY & PREMIUM REPORT",
    image: "/assets/images/online_zoom_pep/hit3.svg",
    details: [
      "Receive your personalized report",
      "Schedule your feedback session",
    ],
  },
] as const;

const HowItWorks = () => {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="relative mx-auto mt-3 aspect-[686/1216] w-[95%] max-w-[1400px] overflow-hidden rounded-[30px] bg-[url('/assets/images/online_zoom_pep/sm_ozp_hero.svg')] bg-cover bg-center bg-no-repeat md:mt-8 md:aspect-[1448/814] md:w-full md:rounded-[52px] md:bg-[url('/assets/images/online_zoom_pep/lg_opep.svg')] lg:mt-10 lg:rounded-[62px] xl:mt-12 xl:rounded-[70px]"
    >
      <header className="absolute inset-x-[4%] top-[3.3%] z-10 text-center text-white md:top-[4.2%]">
        <p className="text-[10px] font-bold tracking-[0.34em] text-primary md:text-[14px] lg:text-[16px] xl:text-[18px]">
          HOW IT WORKS
        </p>
        <h2
          id="how-it-works-title"
          className="mt-1 text-lg font-bold leading-none tracking-tight md:text-[clamp(30px,3.4vw,50px)] lg:text-[clamp(38px,3.6vw,58px)] xl:text-[62px]"
        >
          Three Steps to Your Online Evaluation.
        </h2>
        <p className="mt-1 text-[8px] font-medium leading-none md:text-[12px] lg:text-[14px] xl:text-[16px]">
          Getting evaluated has never been this accessible.
        </p>
      </header>

      <div className="absolute left-[14%] top-[13%] grid w-[72%] gap-2 md:left-[5.2%] md:top-[26%] md:w-[89.6%] md:grid-cols-3 md:gap-x-[3.5%]">
        {steps.map((step) => (
          <article
            key={step.number}
            className="relative flex aspect-[1.55] flex-col overflow-hidden rounded-[9px] border border-primary bg-black/70 text-white shadow-[0_0_12px_rgba(16,230,7,0.22)] md:aspect-[0.81] md:rounded-[14px]"
          >
            <div className="flex h-[16%] shrink-0 items-center gap-1 px-2 md:gap-1.5 md:px-3 lg:px-4">
              <span className="text-[clamp(22px,7vw,31px)] font-bold leading-none text-primary md:text-[43px] lg:text-[50px] xl:text-[58px]">
                {step.number}
              </span>
              <h3 className="text-[clamp(8px,2.5vw,11px)] font-bold leading-[1.05] md:text-[13px] lg:text-[18px] xl:text-[20px]">
                {step.title}
              </h3>
            </div>
            <Image
              src={step.image}
              alt=""
              aria-hidden
              width={481}
              height={297}
              className="block h-[58%] w-full shrink-0 object-cover object-top md:h-auto md:max-h-[58%]"
            />
            <div className="min-h-0 flex-1 space-y-1 overflow-hidden px-2 py-1.5 text-[clamp(6px,1.8vw,8px)] font-medium leading-[1.1] md:space-y-1.5 md:px-4 md:py-3 lg:px-5 lg:text-[13px] xl:text-[14px]">
              {step.details.map((detail, index) => (
                <p key={detail} className="flex items-start gap-1">
                  <span className="mt-0.5 shrink-0 text-primary">
                    {index === 0 ? "▣" : index === 1 ? "♙" : "♢"}
                  </span>
                  {detail}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="absolute bottom-[2.5%] left-0 right-0 text-center text-[11px] font-bold text-white md:bottom-[4.1%] md:text-[15px] lg:text-[17px] xl:text-[19px]">
        BOOK <span className="mx-1 text-primary">━━➤</span> CONNECT{" "}
        <span className="mx-1 text-primary">━━➤</span> REPORT
      </p>
    </section>
  );
};

export default HowItWorks;
