import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const PlayerEvaluationProgramFaqContainer = () => {
  const faqSections = [
    {
      title: "ABOUT THE PROGRAM",
      items: [
        {
          id: 1,
          question: "What is the Player Evaluation Program?",
          answer: (
            <>
              The Player Evaluation Program (U9 to U18) is a long-term
              assessment program that helps players and parents understand where
              the player stands today and supports development over time through
              structured analysis and data.
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Long-term assessment — not a one-off test</li>
                <li>
                  Objective and neutral — understands where the player stands
                  today
                </li>
                <li>
                  Supports development over time through structured analysis and
                  data
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 2,
          question: "Is this a scouting or recruitment program?",
          answer:
            "No. The Player Evaluation Program does not guarantee trials, contracts, or recruitment opportunities. Its role is to provide clarity and orientation so families can make informed choices about development, training, and environment.",
        },
        {
          id: 3,
          question: "What is the objective of the program?",
          answer:
            "The objective is to guide and improve the player's development over time by providing objective evaluations that support informed decisions regarding training, progression, and career pathways.",
        },
        {
          id: 4,
          question:
            "What makes this program different from other evaluation programs?",
          answer: (
            <>
              This program is designed as a long-term development system rather
              than a short-term assessment. Unlike evaluations that rely on
              isolated sessions or subjective impressions, this approach is
              based on structured data, repeated observations, and progression
              tracking over time.
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Individual development rather than comparison with others
                </li>
                <li>
                  Context-based analysis — level, environment, competition
                </li>
                <li>Objective criteria and standardized methodology</li>
                <li>Continuous updates reflecting real progression</li>
              </ul>
            </>
          ),
        },
        {
          id: 5,
          question: "Is this program suitable for all levels?",
          answer:
            "The program is best suited for motivated players who are committed to improvement and long-term development, regardless of their current level.",
        },
      ],
    },
    {
      title: "THE EVALUATION",
      items: [
        {
          id: 6,
          question: "How is the player evaluated?",
          answer: (
            <>
              The evaluation is based on:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Technical and Physical tests</li>
                <li>Tactical assessment</li>
                <li>Psychological and Nutritional assessment</li>
                <li>Game data analysis</li>
                <li>Parental and environmental assessment</li>
              </ul>
            </>
          ),
        },
        {
          id: 7,
          question: "Where do evaluations take place?",
          answer: (
            <>
              Evaluations take place across two settings depending on the type
              of assessment:
              <br />
              <span className="font-semibold">On the field:</span> Technical
              assessment, Physical assessment
              <br />
              <span className="font-semibold">In the classroom:</span> Tactical
              assessment, Psychological & Mental assessment, Nutritional
              assessment, Parental & Environmental assessment
              <br />
              <span className="font-semibold">Remotely:</span> Game data
              analysis — conducted based on submitted game reports
            </>
          ),
        },
        {
          id: 8,
          question: "How long does the evaluation last?",
          answer:
            "The Player Evaluation Program is not a one-day or one-week assessment. It is built progressively, using multiple data points collected over time, allowing the evaluation to evolve as the player develops.",
        },
        {
          id: 9,
          question: "Is this a one-time evaluation?",
          answer:
            "No. The program is designed as a developmental process, not a single snapshot. Regular evaluations allow progress to be tracked over time.",
        },
        {
          id: 10,
          question: "Is the evaluation objective?",
          answer:
            "Yes. The evaluation is based on predefined criteria and standardized analysis to ensure fairness, consistency, and transparency.",
        },
        {
          id: 11,
          question: "Is my child compared to other players?",
          answer: (
            <>
              Not directly. The evaluation focuses on:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The player&apos;s current level</li>
                <li>
                  The context in which they play — league, competition,
                  environment
                </li>
                <li>Their individual progression</li>
              </ul>
              This avoids misleading comparisons between players from different
              regions or competitive levels.
            </>
          ),
        },
        {
          id: 12,
          question: "Can the evaluation change over time?",
          answer: (
            <>
              Yes — and it is expected to. As the player grows, trains, and
              gains experience the evaluation is updated, reflecting:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Physical maturation</li>
                <li>Tactical understanding</li>
                <li>Game intelligence</li>
                <li>Consistency</li>
              </ul>
              The evaluation is dynamic, not fixed.
            </>
          ),
        },
      ],
    },
    {
      title: "RESULTS & DEVELOPMENT",
      items: [
        {
          id: 13,
          question: "What will we receive as parents?",
          answer: (
            <>
              Parents receive:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  A clear picture of the player&apos;s current strengths and
                  weaknesses
                </li>
                <li>
                  An understanding of the player&apos;s development trajectory
                </li>
                <li>A development plan and guidance</li>
              </ul>
            </>
          ),
        },
        {
          id: 14,
          question: "What happens after the evaluation?",
          answer: (
            <>
              The player and family receive a full evaluation report covering
              all dimensions assessed. A personalized development plan is then
              created with clear objectives and priorities across three
              timeframes:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <span className="font-semibold">3-month plan</span> —
                  immediate priorities and focus areas
                </li>
                <li>
                  <span className="font-semibold">6-month plan</span> — mid-term
                  targets building on early progress
                </li>
                <li>
                  <span className="font-semibold">9-month plan</span> —
                  longer-term objectives aligned with the player&apos;s
                  development trajectory
                </li>
              </ul>
              The development plan is reviewed and updated at each subsequent
              evaluation.
            </>
          ),
        },
        {
          id: 15,
          question: "Does the evaluation label my child as good or not good?",
          answer: (
            <>
              No. The evaluation reports on:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>What is observable today</li>
                <li>What is improving</li>
                <li>What needs time or targeted work</li>
              </ul>
              Development is treated as a process, not a verdict.
            </>
          ),
        },
        {
          id: 16,
          question: "Who has access to the evaluation results?",
          answer:
            "Results are shared with the player and parents or guardians. With their consent, the evaluation profile may also be shared with clubs, agents and scouts for the purpose of player development and career opportunities.",
        },
      ],
    },
    {
      title: "FOR PLAYERS & PARENTS",
      items: [
        {
          id: 17,
          question: "At what age is the Player Evaluation Program useful?",
          answer:
            "It is useful from youth ages onward, provided expectations are realistic. For younger players the focus is on fundamentals, learning capacity and development trends rather than outcomes.",
        },
        {
          id: 18,
          question: "How does this help the player?",
          answer: (
            <>
              The program helps players:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Understand their current level objectively</li>
                <li>Identify strengths and areas for improvement</li>
                <li>
                  Make better decisions regarding training and development
                </li>
                <li>Build credibility through structured data and analysis</li>
              </ul>
            </>
          ),
        },
        {
          id: 19,
          question: "Why is this helpful for parents?",
          answer: (
            <>
              It helps parents:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Avoid emotional or unrealistic expectations</li>
                <li>Understand whether the current path makes sense</li>
                <li>Prioritize development over exposure</li>
                <li>
                  Make decisions based on information rather than hope or
                  external pressure
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 20,
          question: "What does the Player Evaluation Program not do?",
          answer: (
            <>
              It does not:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Promise professional outcomes</li>
                <li>Replace coaching or education</li>
                <li>Decide a player&apos;s future</li>
                <li>Accelerate development unnaturally</li>
              </ul>
              It supports better decisions — not shortcuts.
            </>
          ),
        },
        {
          id: 21,
          question:
            "Does the program guarantee opportunities with clubs or scouts?",
          answer:
            "No. The program does not guarantee trials, contracts, or recruitment. It provides objective information and visibility that can support opportunities, but outcomes depend on performance, consistency, and progression.",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#F4FFF4]">
      <section className="py-10 md:py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-2 tracking-wider">
              PLAYER EVALUATION PROGRAM
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-primary mb-4 h_underline inline-block pb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-[#616161] mt-4">
              Analytic Soccer &nbsp;|&nbsp; Improve Your Game &nbsp;|&nbsp; U9 –
              U18
            </p>
          </div>

          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6 border-l-4 border-primary pl-4">
                  {section.title}
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {section.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={`item-${item.id}`}
                      className="bg-white border-none rounded-none shadow-sm overflow-hidden"
                    >
                      <AccordionTrigger className="hover:no-underline py-4 px-6 text-left border-[1.5px] border-primary transition-all hover:bg-primary/5 group">
                        <div className="flex items-center gap-4 md:gap-6">
                          <div className="flex-shrink-0">
                            <Image
                              src="/assets/images/question.png"
                              alt="question"
                              width={50}
                              height={50}
                              className="w-6 h-6"
                            />
                          </div>
                          <span className="text-lg font-normal text-[#424242] leading-tight">
                            {item.id}. {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="py-5 px-8 md:px-16 text-base text-[#616161] leading-relaxed font-normal bg-white border-x-[1.5px] border-b-[1.5px] border-primary/20">
                        <div className="prose prose-sm max-w-none">
                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerEvaluationProgramFaqContainer;
