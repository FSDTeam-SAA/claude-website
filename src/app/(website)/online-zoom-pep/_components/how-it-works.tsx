import Image from "next/image";
import {
  BarChart3,
  CalendarDays,
  FileText,
  FolderOpen,
  ShieldCheck,
  UserRound,
  Video,
} from "lucide-react";
import React from "react";

const steps = [
  {
    number: "01",
    title: "BOOK YOUR SESSION",
    sm_image: "/assets/images/online_zoom_pep/hit1.svg",
    lg_image: "/assets/images/online_zoom_pep/lg_hit1.svg",
    details: [
      { text: "Choose your date and time", icon: CalendarDays },
      { text: "Select your age category", icon: UserRound },
      { text: "Confirmation within 24 hours", icon: ShieldCheck },
    ],
  },
  {
    number: "02",
    title: "CONNECT LIVE ON ZOOM",
    sm_image: "/assets/images/online_zoom_pep/hit2.svg",
    lg_image: "/assets/images/online_zoom_pep/lg_hit2.svg",
    details: [
      { text: "Join your scheduled live session", icon: Video },
      { text: "Complete all evaluation dimensions", icon: BarChart3 },
    ],
  },
  {
    number: "03",
    title: "GET SUMMARY & PREMIUM REPORT",
    sm_image: "/assets/images/online_zoom_pep/hit3.svg",
    lg_image: "/assets/images/online_zoom_pep/lg_hit3.svg",
    details: [
      { text: "Receive your personalized report", icon: FileText },
      { text: "Schedule your feedback session", icon: FolderOpen },
    ],
  },
] as const;

const HowItWorks = () => {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="relative mx-auto mt-3 box-content aspect-[686/1216] w-[95%] max-w-[1400px] overflow-hidden rounded-[30px] bg-[url('/assets/images/online_zoom_pep/sm_ozp_hero.svg')] bg-cover bg-center bg-no-repeat pb-[250px] md:mt-8 md:box-border md:aspect-[1448/814] md:w-full md:rounded-[52px] md:bg-[url('/assets/images/online_zoom_pep/lg_opep.svg')] md:pb-0 lg:mt-10 lg:rounded-[62px] xl:mt-12 xl:rounded-[70px]"
    >
      <header className="absolute inset-x-[4%] top-[3.3%] z-10 text-center text-white md:top-[4.2%]">
        <p className="font-bold tracking-[0.34em] text-primary text-xs md:text-sm lg:text-base lg:text-lg">
          HOW IT WORKS
        </p>
        <h2
          id="how-it-works-title"
          className="mt-2 text-lg font-bold leading-none tracking-tight text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
        >
          Three Steps to Your Online Evaluation.
        </h2>
        <p className="mt-2 font-medium leading-none text-[11px] md:text-sm lg:text-base">
          Getting evaluated has never been this accessible.
        </p>
      </header>

      <div className="absolute left-[14%] top-[13%] grid w-[72%] gap-2 md:left-[5.2%] md:top-[26%] md:w-[89.6%] md:grid-cols-3 md:gap-x-[3.5%]">
        {steps.map((step) => (
          <article
            key={step.number}
            className="relative flex aspect-[1.10] flex-col overflow-hidden rounded-[9px] border border-primary bg-black/70 text-white shadow-[0_0_12px_rgba(16,230,7,0.22)] md:aspect-[0.81] md:rounded-[14px]"
          >
            <div className="flex h-[16%] shrink-0 items-center gap-1 px-2 md:gap-1.5 md:px-3 lg:px-4">
              <span className="text-[clamp(22px,7vw,31px)] font-semibold leading-none text-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {step.number}
              </span>
              <h3 className="text-[clamp(8px,2.5vw,11px)] font-medium leading-[1.05] md:text-[13px] lg:text-[18px] xl:text-[20px]">
                {step.title}
              </h3>
            </div>
            <div className="block h-[60%] w-full shrink-0 md:h-auto md:max-h-[58%]">
              <Image
                src={step.sm_image}
                alt=""
                aria-hidden
                width={481}
                height={297}
                className="block h-full w-full object-cover object-top md:hidden"
              />
              <Image
                src={step.lg_image}
                alt=""
                aria-hidden
                width={481}
                height={297}
                className="hidden h-full w-full object-cover object-top md:block"
              />
            </div>
            <div className="min-h-0 flex-1 space-y-1 overflow-hidden px-2 py-1.5 text-[clamp(6px,1.8vw,8px)] font-medium leading-[1.1] md:space-y-1.5 md:px-4 md:py-3 lg:px-5 lg:text-[13px] xl:text-[14px] -mt-1 md:-mt-0">
              {step.details.map(({ text, icon: Icon }) => (
                <p key={text} className="flex items-center gap-1 md:gap-1.5 ">
                  <Icon
                    aria-hidden
                    className="mt-0.5 h-3 w-3 shrink-0 text-primary md:h-6 md:w-6"
                    strokeWidth={1.8}
                  />
                  <span className="text-[10px] sm:text-xs md:text-sm">{text}</span>
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="absolute bottom-[1.5%] left-0 right-0 text-center font-medium text-white md:bottom-[4.1%] text-sm md:text-base lg:text-lg">
        BOOK <span className="mx-1 text-primary">━━➤</span> CONNECT{" "}
        <span className="mx-1 text-primary">━━➤</span> REPORT
      </p>
    </section>
  );
};

export default HowItWorks;
