"use client";

import { parseCookies } from "nookies";
import React from "react";

const COOKIE_NAME = "googtrans";

const ecosystemTranslations = {
  en: {
    title: "Our Ecosystem",
    description: "Five connected steps from questionnaire to opportunity.",
    labels: ["Questionnaire", "Player Profile", "Evaluation", "Agency", "Opportunity"],
    body: [
      "MFH Global Football Agency & Analytic",
      "Soccer – two platforms, one",
      "mission: get you where you",
      "deserve to be.",
    ],
  },
  fr: {
    title: "Notre écosystème",
    description: "Cinq étapes reliées, du questionnaire à l'opportunité.",
    labels: ["Questionnaire", "Profil du joueur", "Évaluation", "Agence", "Opportunité"],
    body: [
      "MFH Global Football Agency & Analytic",
      "Soccer – deux plateformes, une",
      "mission : vous mener là où vous",
      "méritez d'être.",
    ],
  },
  es: {
    title: "Nuestro ecosistema",
    description: "Cinco pasos conectados, del cuestionario a la oportunidad.",
    labels: ["Cuestionario", "Perfil del jugador", "Evaluación", "Agencia", "Oportunidad"],
    body: [
      "MFH Global Football Agency & Analytic",
      "Soccer: dos plataformas, una",
      "misión: llevarte adonde",
      "mereces estar.",
    ],
  },
} as const;

const steps = [
  {
    id: 1,
    title: "Questionnaire",
    description:
      "We start by understanding who you are, your background, your goals, and where you want to go.",
  },
  {
    id: 2,
    title: "Player Profile",
    description:
      "Powered by Analytic Soccer your complete professional profile built on real data, not opinions.",
  },
  {
    id: 3,
    title: "Evaluation",
    description:
      "The full PEP evaluation: technical, tactical, physical, mental, nutrition and game analysis. Objective proof of your level.",
  },
  {
    id: 4,
    title: "Agency",
    description:
      "FIFA-licensed representation MFH connects you with the right clubs, trials and opportunities worldwide.",
  },
  {
    id: 5,
    title: "Opportunity",
    description:
      "Your profile, your data and your evaluation in front of the right people at the right time.",
  },
];

const FiveStepsToGuide = () => {
  return (
    <section className="relative mx-auto mt-6 flex w-[95%] max-w-[1400px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[#080b09] bg-[url('/assets/images/home_page/sm_bg.svg')] bg-cover bg-center bg-no-repeat pb-8 pt-10 text-white md:mt-8 md:w-full md:rounded-[70px] md:bg-[url('/assets/images/home_page/lg_bg.svg')] md:pb-16 md:pt-28 lg:mt-10 xl:mt-12 xl:h-[750px] xl:py-12">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-1.5 md:px-8 lg:px-12">
        <h2 className="font-dagger text-center md:text-left text-xl font-medium leading-none md:text-3xl lg:text-4xl xl:text-[43px] xl:leading-none">
          Five Steps to Guide Your Development
        </h2>

        <div className="mt-6 md:mt-[54px] grid items-center gap-9 md:mt-10 xl:grid-cols-[630px_minmax(0,1fr)] xl:gap-[34px]">
          <div className="order-1 grid grid-cols-6 gap-1.5 md:gap-3 xl:grid-cols-6 xl:gap-x-4 xl:gap-y-6">
            {steps?.map((step, index) => (
              <article
                key={step.id}
                className={`relative col-span-2 min-h-[150px] overflow-hidden rounded-[11px] bg-white p-2 text-[#0a0a0a] xl:h-[215px] xl:min-h-0 xl:px-[10px] ${
                  index === 3 ? "col-start-2 xl:col-start-2" : ""
                }`}
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-[#00ed28]" />
                <span className="font-dagger block text-2xl font-semibold leading-none md:text-[38px] xl:text-[40px]">
                  {step.id}
                </span>
                <h3 className="font-dagger mt-2 text-sm sm:text-base font-medium leading-none text-[#00dc25] md:text-[22px]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[10px] font-medium leading-[1.08] md:text-[15px] xl:text-[16px]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <EcosystemDiagram />
        </div>
      </div>
    </section>
  );
};

const EcosystemDiagram = () => {
  const cookie = parseCookies()[COOKIE_NAME];
  const language = cookie?.split("/")[2] || "en";
  const copy = ecosystemTranslations[language as keyof typeof ecosystemTranslations] ?? ecosystemTranslations.en;

  return (
    <div className="order-2 mx-auto w-full max-w-[600px] py-0 xl:max-w-[640px] xl:px-0 xl:py-0">
      <svg
        role="img"
        aria-labelledby="ecosystem-title ecosystem-description"
        className="h-auto w-full overflow-visible"
        viewBox="0 0 684 630"
        fill="none"
        style={{ fontFamily: "var(--font-dagger-square)" }}
      >
        <title id="ecosystem-title">{copy.title}</title>
        <desc id="ecosystem-description">{copy.description}</desc>
        <defs>
          <marker
            id="ecosystem-arrow"
            markerWidth="7"
            markerHeight="7"
            refX="3.5"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0 0L7 3.5L0 7Z" fill="#00ed28" />
          </marker>
        </defs>

        <g stroke="#00ed28" strokeWidth="4" strokeLinecap="round">
          <path
            d="M128 168C151 130 170 111 190 101C211 86 237 75 264 67"
            markerMid="url(#ecosystem-arrow)"
          />
          <path
            d="M421 67C450 75 477 87 502 105C526 124 544 147 559 168"
            markerMid="url(#ecosystem-arrow)"
          />
          <path
            d="M599 308C599 342 593 371 586 391C577 425 558 454 532 475"
            markerMid="url(#ecosystem-arrow)"
          />
          <path
            d="M445 550C411 562 379 567 344 567C306 567 271 562 239 550"
            markerMid="url(#ecosystem-arrow)"
          />
          <path
            d="M156 475C130 450 113 422 103 391C94 365 89 338 89 308"
            markerMid="url(#ecosystem-arrow)"
          />
        </g>

        <g stroke="#00ed28" strokeWidth="3" strokeLinecap="round">
          <path d="M342 112V154" />
          <path d="M562 240L490 264" />
          <path d="M464 489L429 434" />
          <path d="M220 489L256 434" />
          <path d="M124 240L196 264" />
          <circle cx="342" cy="308" r="143" />
        </g>

        <g fill="#00ed28">
          <path d="M342 13L368 32L358 70H326L316 32L342 13Z" />
          <path d="M598 190L624 209L614 247H582L572 209L598 190Z" />
          <path d="M486 486L512 505L502 543H470L460 505L486 486Z" />
          <path d="M198 486L224 505L214 543H182L172 505L198 486Z" />
          <path d="M86 190L112 209L102 247H70L60 209L86 190Z" />
        </g>

        <g fill="white" textAnchor="middle" fontWeight="600">
          <text x="342" y="53" fontSize="29">1</text>
          <text x="598" y="230" fontSize="29">2</text>
          <text x="486" y="526" fontSize="29">3</text>
          <text x="198" y="526" fontSize="29">4</text>
          <text x="86" y="230" fontSize="29">5</text>
        </g>

        <g fill="white" textAnchor="middle" fontSize="17" fontWeight="500">
          <text x="342" y="95">{copy.labels[0]}</text>
          <text x="598" y="278">{copy.labels[1]}</text>
          <text x="486" y="582">{copy.labels[2]}</text>
          <text x="198" y="582">{copy.labels[3]}</text>
          <text x="86" y="278">{copy.labels[4]}</text>
        </g>

        <text x="342" y="298" fill="#00ed28" textAnchor="middle" fontSize="30" fontWeight="500">
          {copy.title}
        </text>
        <text fill="white" textAnchor="middle" fontSize="14" fontWeight="500">
          <tspan x="342" y="326">{copy.body[0]}</tspan>
          <tspan x="342" y="343">{copy.body[1]}</tspan>
          <tspan x="342" y="360">{copy.body[2]}</tspan>
          <tspan x="342" y="377">{copy.body[3]}</tspan>
        </text>
      </svg>
    </div>
  );
};

export default FiveStepsToGuide;
