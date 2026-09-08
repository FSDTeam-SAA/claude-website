import Image from "next/image";

const options = [
  {
    mobile: "/assets/images/online_zoom_pep/sm_cye1.svg",
    desktop: "/assets/images/online_zoom_pep/lg_cye1.svg",
    alt: "PEP Online evaluation option",
    badge: "◉  REMOTE EVALUATION",
    title: "PEP ONLINE",
    subtitle: "LIVE VIA ZOOM",
    details: ["Available worldwide", "Tests adapted for remote delivery", "All 8 evaluation dimensions", "Summary & Premium report", "Report delivered within 72 hours"],
  },
  {
    mobile: "/assets/images/online_zoom_pep/sm_cye2.svg",
    desktop: "/assets/images/online_zoom_pep/lg_cye2.svg",
    alt: "Full PEP in-person evaluation option",
    badge: "●  COMPLETE EVALUATION",
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
      <header className="absolute inset-x-[4%] top-[15.5%] z-10 text-center text-white md:top-[4%]">
        <div className="mx-auto flex items-center justify-center gap-2 text-[9px] font-bold text-primary md:gap-3 md:text-[12px] lg:text-[14px] xl:text-[16px]">
          <span className="h-px w-12 bg-primary md:w-28 lg:w-36" />
          <span className="rounded-full border border-primary px-3 py-1 leading-none md:px-4 md:py-1.5">
            CHOOSE YOUR EVALUATION
          </span>
          <span className="h-px w-12 bg-primary md:w-28 lg:w-36" />
        </div>
        <h2
          id="choose-your-evaluation-title"
          className="mt-4 text-2xl font-bold leading-none md:mt-4 md:text-3xl lg:text-4xl xl:text-5xl"
        >
          Two Evaluation Options. Two Different Experiences.
        </h2>
        <p className="mt-2 text-[9px] font-medium leading-none md:mt-2 md:text-[12px] lg:text-[15px] xl:text-[17px]">
          Choose the format that best matches your location.
        </p>
      </header>

      <div className="absolute left-[4.5%] top-[30.5%] grid w-[91%] grid-cols-2 gap-1.5 md:left-[4.2%] md:top-[25%] md:w-[91.6%] md:gap-x-[1.8%]">
        {options.map((option, index) => (
          <article
            key={option.desktop}
            className={`relative isolate min-w-0 overflow-hidden rounded-[10px] border-2 bg-black/40 shadow-[0_0_12px_rgba(16,230,7,0.22)] md:rounded-[14px] ${index === 0 ? "border-primary" : "border-white/70"}`}
          >
            <div className="pointer-events-none absolute inset-x-[6%] top-[6%] z-[30] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
              <p className="inline-flex rounded-full border border-primary px-2 py-1 text-[clamp(5px,1.45vw,8px)] font-bold leading-none text-primary md:px-3 md:py-1.5 md:text-[10px] lg:text-[12px] xl:text-[13px]">
                {option.badge}
              </p>
              <h3 className="mt-3 text-[clamp(18px,5vw,28px)] font-bold leading-[0.9] tracking-tight md:mt-5 md:text-[clamp(28px,3vw,46px)] lg:text-[clamp(36px,3.3vw,52px)] xl:text-[58px]">
                {option.title.split(" ").map((word, wordIndex) => (
                  <span key={word} className={wordIndex > 0 ? "ml-1 text-primary" : ""}>{word}</span>
                ))}
              </h3>
              <p className="mt-2 text-[clamp(7px,1.9vw,11px)] font-bold tracking-[0.22em] md:mt-3 md:text-[12px] lg:text-[14px] xl:text-[16px]">
                {option.subtitle}
              </p>
              <span className="mt-4 block h-[2px] w-12 bg-primary md:mt-6 md:h-1 md:w-20 lg:w-24" />
            </div>
            <div className="pointer-events-none absolute inset-x-[2%] bottom-[4%] z-[30] grid grid-cols-2 text-white text-[clamp(5px,1.45vw,8px)] md:text-[clamp(7px,0.75vw,12px)] lg:text-[13px] xl:text-[14px]">
              <div className="space-y-1 border-r border-primary pr-1 md:space-y-2 md:pr-2 lg:space-y-3 lg:pr-4">
                {option.details.slice(0, 3).map((detail) => (
                  <p key={detail} className="flex items-start gap-1 leading-[1.05]"><span className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-primary text-[6px] font-black leading-none text-black md:h-3 md:w-3 md:text-[8px] lg:h-4 lg:w-4">✓</span>{detail}</p>
                ))}
              </div>
              <div className="space-y-1 pl-1 md:space-y-2 md:pl-2 lg:space-y-3 lg:pl-4">
                {option.details.slice(3).map((detail) => (
                  <p key={detail} className="flex items-start gap-1 leading-[1.05]"><span className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-primary text-[6px] font-black leading-none text-black md:h-3 md:w-3 md:text-[8px] lg:h-4 lg:w-4">✓</span>{detail}</p>
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
          </article>
        ))}
      </div>

      <aside className="absolute left-[4.5%] top-[68.5%] w-[91%] rounded-[10px] border-2 border-yellow-400 bg-black/75 px-3 py-2 text-yellow-300 md:left-[4.2%] md:top-[81%] md:w-[91.6%] md:rounded-[14px] md:px-4 md:py-3 lg:px-5 lg:py-4">
        <h3 className="text-[11px] font-bold leading-none md:text-[16px] lg:text-[19px] xl:text-[21px]">
          IMPORTANT INFORMATION
        </h3>
        <p className="mt-2 text-[7px] font-medium leading-[1.2] md:mt-2 md:text-[10px] lg:text-[12px] xl:text-[14px]">
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
