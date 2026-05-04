
import React from "react";

const WhyChooseAnalytic = () => {
  const chooseData = [
    {
      id: 1,
      title: "Access verified performance data",
      desc: "Every stat, every match, every achievement verified and recorded in one place. No more scattered records or lost history.",
    },
    {
      id: 2,
      title: "Receive objective ratings",
      desc: "Get rated based on real performance metrics, not opinions. Fair, transparent, and comparable across regions.",
    },
    {
      id: 3,
      title: "Track your career progression and transfer history",
      desc: "Track your entire soccer journey. Every club, every season, every progression milestone documented.",
    },
    {
      id: 4,
      title: "Build true proof of performance",
      desc: "Turn your evaluations into a verified record that coaches, clubs and scouts can trust. Your data speaks for itself.",
    },
  ];

  return (
    <div className="min-h-[600px] md:h-[800px] relative container bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat py-8 md:py-16 lg:py-20 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden">
      <div className="relative z-10 px-2 md:px-8 lg:px-12 mt-4 md:mt-10 lg:mt-16 xl:mt-24">
        <div className="max-w-[1000px] mb-8 md:mb-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-6 leading-tight">
            Why Choose Analytic Soccer
          </h1>
          <p className="text-white text-[11px] md:text-lg font-medium leading-relaxed md:leading-relaxed opacity-90">
            There is no global platform where amateur players can access verified performance data until now. Analytic Soccer is the first platform to deliver all of this, giving every amateur player the same digital tools and visibility used by professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {chooseData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="bg-transparent border-[1.5px] md:border-[2px] border-primary rounded-[20px] md:rounded-[30px] p-3 md:p-8 flex flex-col gap-2 md:gap-4 hover:shadow-[0_0_15px_rgba(16,230,7,0.2)] transition-all duration-300"
              >
                <h3 className="text-primary text-[12px] md:text-2xl font-bold font-dagger leading-tight">
                  {item?.title}
                </h3>
                <p className="text-white text-[10px] md:text-base font-medium opacity-80 leading-snug md:leading-normal">
                  {item?.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAnalytic;
