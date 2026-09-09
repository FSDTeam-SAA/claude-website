import Image from "next/image";
import { Check, MapPin, Radio } from "lucide-react";

const options = [
  {
    mobile: "/assets/images/online_zoom_pep/sm_cye1.svg",
    desktop: "/assets/images/online_zoom_pep/lg_cye1.svg",
    alt: "PEP Online evaluation option",
    badge: "REMOTE EVALUATION",
    badgeIcon: Radio,
    title: "PEP ONLINE",
    subtitle: "LIVE VIA ZOOM",
    details: ["Available worldwide", "Tests adapted for remote delivery", "All 8 evaluation dimensions", "Summary & Premium report", "Report delivered within 72 hours"],
  },
  {
    mobile: "/assets/images/online_zoom_pep/sm_cye2.svg",
    desktop: "/assets/images/online_zoom_pep/lg_cye2.svg",
    alt: "Full PEP in-person evaluation option",
    badge: "COMPLETE EVALUATION",
    badgeIcon: MapPin,
    title: "FULL PEP",
    subtitle: "IN PERSON",
    details: ["Complete proprietary PEP test battery", "Direct on-field observation", "All 8 evaluation dimensions", "Summary & Premium report", "Report delivered within 72 hours"],
  },
] as const;

const ChooseYourEvaluation = () => {
  return (
    <section
      aria-labelledby="choose-your-evaluation-title"
      className="relative mx-auto mt-3 aspect-[686/1216] w-[95%] max-w-[1400px] overflow-hidden rounded-[30px] bg-[url('/assets/images/online_zoom_pep/sm_ozp_hero.svg')] bg-cover bg-center bg-no-repeat md:mt-8 md:aspect-[1448/814] md:w-full md:rounded-[52px] md:bg-[url('/assets/images/online_zoom_pep/lg_ozp_hero.svg')] lg:mt-10 lg:rounded-[62px] xl:mt-12 xl:rounded-[70px]"
    >
      <header className="absolute inset-x-[4%] top-[17.5%] z-10 text-center text-white md:top-[4%]">
        <div className="mx-auto flex items-center justify-center gap-2 text-[9px] font-medium text-primary md:gap-3 md:text-[12px] lg:text-[14px] xl:text-[16px] mb-4 md:mb-0">
          <span className="h-px w-12 bg-primary md:w-28 lg:w-36" />
          <span className="rounded-full border border-primary px-3 py-1 text-[7px] leading-none md:px-4 md:py-1.5 md:text-sm lg:text-base">
            CHOOSE YOUR EVALUATION
          </span>
          <span className="h-px w-12 bg-primary md:w-28 lg:w-36" />
        </div>
        <h2
          id="choose-your-evaluation-title"
          className="mt-4 font-semibold leading-none text-sm md:text-3xl lg:text-4xl xl:text-5xl"
        >
          Two Evaluation Options. Two Different Experiences.
        </h2>
        <p className="mt-1 font-medium leading-normal text-[9px] md:mt-2 md:text-sm lg:text-base">
          Choose the format that best matches your location.
        </p>
      </header>

      <div className="absolute left-[3.5%] top-[31%] grid w-[93%] grid-cols-2 gap-1.5 md:left-[4.2%] md:top-[25%] md:w-[91.6%] md:gap-x-[1.8%]">
        {options.map((option, index) => (
          <article
            key={option.desktop}
            className={`relative isolate min-w-0 overflow-hidden rounded-[10px] border-2 bg-black/40 shadow-[0_0_12px_rgba(16,230,7,0.22)] md:rounded-[14px] ${index === 0 ? "border-primary" : "border-white/70"}`}
          >
            <div className="pointer-events-none absolute inset-x-[5%] top-[5%] z-[30] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
              <p className="inline-flex items-center gap-1 rounded-full border border-primary px-2 py-1 text-[clamp(5px,1.45vw,8px)] font-bold leading-none text-primary md:gap-1.5 md:px-3 md:py-1.5 md:text-[10px] lg:text-[12px] xl:text-[13px]">
                <option.badgeIcon
                  aria-hidden
                  className="h-2.5 w-2.5 md:h-3 md:w-3"
                  strokeWidth={2.5}
                />
                {option.badge}
              </p>
              <h3 className="mt-2 text-[clamp(18px,5vw,28px)] font-bold leading-[0.9] tracking-tight md:mt-5 md:text-[clamp(28px,3vw,46px)] lg:text-[clamp(36px,3.3vw,52px)] xl:text-[58px]">
                {option.title.split(" ").map((word, wordIndex) => (
                  <span key={word} className={wordIndex > 0 ? "ml-1 text-primary" : ""}>{word}</span>
                ))}
              </h3>
              <p className="mt-1 text-[clamp(7px,1.9vw,11px)] font-bold tracking-[0.22em] md:mt-3 md:text-[12px] lg:text-[14px] xl:text-[16px]">
                {option.subtitle}
              </p>
              <span className="mt-11 block h-[2px] w-8 bg-primary md:mt-6 md:h-[3px] md:w-20 lg:w-24" />
            </div>
            <div className="pointer-events-none absolute inset-x-[2%] bottom-[3%] md:bottom-[10%] z-[30] grid grid-cols-1 text-white text-[clamp(5px,1.45vw,8px)] md:grid-cols-2 md:text-[clamp(7px,0.75vw,12px)] lg:text-[13px] xl:text-[14px]">
              <div className="space-y-1 md:border-r md:border-primary md:space-y-2 md:pr-2 lg:space-y-4 lg:pr-4">
                {option.details.map((detail, detailIndex) => (
                  <p
                    key={detail}
                    className={`flex items-center gap-1 leading-[1.05] md:gap-1.5 ${detailIndex > 2 ? "md:hidden" : ""}`}
                  >
                    <span className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-primary text-white md:h-3 md:w-3 lg:h-4 lg:w-4">
                      <Check
                        aria-hidden
                        className="h-2 w-2 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-[7px] md:text-xs lg:text-[13px]">{detail}</span>
                  </p>
                ))}
              </div>
              <div className="hidden space-y-1 md:block md:space-y-2 md:pl-2 lg:space-y-5 lg:pl-4">
                {option.details.slice(3).map((detail) => (
                  <p key={detail} className="flex items-center gap-1 leading-[1.05] md:gap-1.5">
                    <span className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-primary text-white md:h-3 md:w-3 lg:h-4 lg:w-4">
                      <Check
                        aria-hidden
                        className="h-3 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-[7px] md:text-xs lg:text-[13px]">{detail}</span>
                  </p>
                ))}
              </div>
            </div>
            <Image
              src={option.mobile}
              alt={option.alt}
              width={301}
              height={429}
              sizes="(max-width: 767px) 45vw, 45vw"
              className="relative z-0 block h-auto w-full md:hidden"
            />
            <Image
              src={option.desktop}
              alt=""
              aria-hidden
              width={632}
              height={421}
              sizes="(min-width: 768px) 45vw, 0px"
              className="relative z-0 hidden h-auto w-full md:block"
            />
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-x-0 top-[60%] z-20 h-px ${index === 0 ? "bg-primary shadow-[0_0_6px_rgba(16,230,7,0.85)]" : "bg-white/70"}`}
            />
          </article>
        ))}
      </div>

      <aside className="absolute mt-4 md:mt-0 left-[3.5%] top-[68.5%] w-[93%] rounded-[8px] border border-yellow-400 bg-black/75 px-2 py-1.5 text-yellow-300 md:left-[4.2%] md:top-[81%] md:w-[91.6%] md:rounded-[14px] md:border-2 md:px-4 md:py-3 lg:px-5 lg:py-4">
        <h3 className="font-semibold leading-none text-[9px] md:text-base lg:text-lg xl:text-xl">
          IMPORTANT INFORMATION
        </h3>
        <p className="mt-1 font-normal leading-[1.15] text-[7px] md:mt-2 md:text-xs lg:text-sm">
          PEP Online is not the complete in-person PEP assessment. Certain tests
          and protocols have been adapted for safe and effective live delivery
          through Zoom. Players who want the complete proprietary PEP test
          battery must complete the evaluation in person.
        </p>
      </aside>
    </section>
  );
};

export default ChooseYourEvaluation;
