
import React from "react";

const WhyDataMatters = () => {
  const dataCategories = [
    {
      title: "For Teams",
      items: [
        {
          label: "Objective Recruitment",
          desc: "Data makes scouting fair, efficient and evidence-based.",
        },
        {
          label: "Player Development Tracking",
          desc: "Clearly shows each player's progress and individual needs.",
        },
        {
          label: "Tactical & Performance Insights",
          desc: "Pro-level data to improve game decisions and team strategy.",
        },
      ],
    },
    {
      title: "For Staff",
      items: [
        {
          label: "Objective Evaluation",
          desc: "Consistent, bias-free player assessment every time.",
        },
        {
          label: "Performance Monitoring",
          desc: "Individualized development plans not generic training.",
        },
        {
          label: "Scouting Efficiency",
          desc: "Find the right players faster by filtering top talent.",
        },
        {
          label: "Tactical Insight",
          desc: "Deeper understanding of player impact and team dynamics.",
        },
      ],
    },
    {
      title: "For Parents",
      items: [
        {
          label: "Track Your Child's Progress",
          desc: "A clear, measurable view of development, strengths and potential.",
        },
        {
          label: "Opportunities & Exposure",
          desc: "Verified data that opens doors to academies, universities and tryouts.",
        },
        {
          label: "Transparency & Fairness",
          desc: "Objective evaluation with no favoritism or subjective opinions.",
        },
      ],
    },
  ];

  return (
    <div className="relative container bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden">
      <div className="relative z-10 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1000px] mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-4 md:mb-6 leading-tight">
            Why Data Matters
          </h1>
          <p className="text-white text-base md:text-lg font-medium opacity-90 leading-relaxed max-w-[800px]">
            Data creates fairness, clarity and opportunity for everyone in the game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {dataCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className="text-primary text-2xl md:text-3xl font-dagger font-bold mb-4 md:mb-6 px-2">
                {category.title}
              </h2>
              <div className="flex-grow border-[2px] border-primary rounded-[30px] p-6 md:p-8 bg-transparent hover:shadow-[0_0_20px_rgba(16,230,7,0.2)] transition-all duration-300">
                <div className="flex flex-col gap-6 md:gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col gap-1 md:gap-2">
                      <h3 className="text-primary text-lg md:text-xl lg:text-2xl font-bold font-dagger leading-tight">
                        {item.label}
                      </h3>
                      <p className="text-white text-sm md:text-base font-medium opacity-80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDataMatters;
