
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { parseCookies } from "nookies";

const COOKIE_NAME = "googtrans";

const WhyChooseAnalytic = () => {
  const [isMobile, setIsMobile] = useState(false);


      const cookie = parseCookies()[COOKIE_NAME];
        const lang = cookie?.split("/")?.[2] || "en";

        
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const desktopData = [
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

  const mobileData = [
      {
      id: 1,
      title: "Access verified performance data",
      desc: "Every stat - every match verified and in one place.",
    },
    {
      id: 2,
      title: "Receive objective ratings",
      desc: "Rated on real performance not opinions.",
    },
    {
      id: 3,
      title: "Track your career progression",
      desc: "Every season - every milestone is fully documented.",
    },
    {
      id: 4,
      title: "Build true proof of performance",
      desc: "A verified record that coaches and scouts can trust.",
    },
  ];

  const chooseData = isMobile ? mobileData : desktopData;
  const mobileBenefits = [
    {
      title: "For Players",
      desc: "Verified stats and objective ratings in one profile, building proof of performance that coaches and scouts trust.",
      icon: "/assets/images/home_page/data_sm_de/sm_why_as1.svg",
    },
    {
      title: "For Teams & Staff",
      desc: "Fair, evidence-based recruitment and bias-free evaluation, with clear tracking of each player's development.",
      icon: "/assets/images/home_page/data_sm_de/sm_why_as2.svg",
    },
    {
      title: "For Parents",
      desc: "A clear, measurable view of your child's progress, and verified data that opens doors to academies, universities, and tryouts.",
      icon: "/assets/images/home_page/data_sm_de/sm_why_as3.svg",
    },
  ];

  return (
    <>
      <section className="relative container mx-auto mt-6 flex w-[95%] min-h-[650px] flex-col justify-center overflow-hidden rounded-[30px] bg-[url('/assets/images/home_page/sm_bg.svg')] bg-cover bg-center bg-no-repeat py-6 md:hidden">
        <div className="relative z-10 w-full px-5">
          <div className="mb-10">
            <h1 className="mb-3 text-2xl font-dagger font-bold leading-normal text-primary">
              {lang === "fr" ? "Pourquoi Analytic Soccer ?" : "Why Analytic Soccer"}
            </h1>
            <p className="text-sm font-dagger font-semibold leading-normal text-white">
              Verified data that gives amateur players a professional profile, and real opportunities.
            </p>
          </div>

          <div className="space-y-4">
            {mobileBenefits.map((benefit) => {
              return (
                <article
                  key={benefit.title}
                  className="flex min-h-[110px] items-center gap-1 rounded-[20px] border-2 border-primary bg-black/20 p-2"
                >
                  <div className="h-20 w-20 shrink-0">
                    <Image
                      src={benefit.icon}
                      alt=""
                      aria-hidden="true"
                      width={194}
                      height={194}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="mb-1 text-xl font-dagger font-bold leading-tight text-primary">
                      {benefit.title}
                    </h2>
                    <p className="text-xs font-semibold leading-tight text-white">
                      {benefit.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    <div className="relative container mx-auto hidden w-[95%] md:flex md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex-col justify-center">
      <div className="relative z-10 px-2 md:px-8 lg:px-12 w-full max-w-[1200px] mx-auto">
        <div className="max-w-[1000px] mb-6 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-6 leading-tight">
            Why Choose Analytic Soccer?
          </h1>

          <p className="hidden md:block text-white text-[13px] md:text-lg font-medium leading-relaxed opacity-90">
            There is no global platform where amateur players can access verified
            performance data until now. Analytic Soccer is the first platform to
            deliver all of this, giving every amateur player the same digital
            tools and visibility used by professionals.
          </p>

          <p className="block md:hidden text-white text-[13px] font-medium leading-relaxed opacity-90">
            No platform gives amateur players a professional profile -
            visibility - and real opportunities until now!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {chooseData.map((item) => (
            <div
              key={item.id}
              className="bg-transparent border-[1.5px] md:border-[2px] border-primary rounded-[20px] md:rounded-[30px] p-3 flex flex-col gap-2 md:gap-3 hover:shadow-[0_0_15px_rgba(16,230,7,0.2)] transition-all duration-300"
            >
              <h3 className="text-primary text-sm md:text-xl font-bold font-dagger leading-tight">
                {item.title}
              </h3>

              <p className="text-white text-[11px] md:text-sm font-medium opacity-80 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default WhyChooseAnalytic;












// import React from "react";

// const WhyChooseAnalytic = () => {
//   const chooseData = [
//     {
//       id: 1,
//       title: "Access verified performance data",
//       desc: "Every stat, every match, every achievement verified and recorded in one place. No more scattered records or lost history.",
//     },
//     {
//       id: 2,
//       title: "Receive objective ratings",
//       desc: "Get rated based on real performance metrics, not opinions. Fair, transparent, and comparable across regions.",
//     },
//     {
//       id: 3,
//       title: "Track your career progression and transfer history",
//       desc: "Track your entire soccer journey. Every club, every season, every progression milestone documented.",
//     },
//     {
//       id: 4,
//       title: "Build true proof of performance",
//       desc: "Turn your evaluations into a verified record that coaches, clubs and scouts can trust. Your data speaks for itself.",
//     },
//   ];

//   return (
//     <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
//       <div className="relative z-10 px-2 md:px-8 lg:px-12 w-full max-w-[1200px] mx-auto">
//         <div className="max-w-[1000px] mb-6 md:mb-12">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-6 leading-tight">
//             Why Choose Analytic Soccer ?
//           </h1>
//           <p className="hidden md:block text-white text-[13px] md:text-lg font-medium leading-relaxed md:leading-relaxed opacity-90">
//             There is no global platform where amateur players can access verified performance data until now. Analytic Soccer is the first platform to deliver all of this, giving every amateur player the same digital tools and visibility used by professionals.
//           </p>
//            <p className="block md:hidden text-white text-[13px] md:text-lg font-medium leading-relaxed md:leading-relaxed opacity-90">
//             No platform gives amateur players a professional profile - visibility - and real opportunities until now!
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
//           {chooseData?.map((item) => {
//             return (
//               <div
//                 key={item?.id}
//                 className="bg-transparent border-[1.5px] md:border-[2px] border-primary rounded-[20px] md:rounded-[30px] p-3 md:p-3 flex flex-col gap-2 md:gap-3 hover:shadow-[0_0_15px_rgba(16,230,7,0.2)] transition-all duration-300"
//               >
//                 <h3 className="text-primary text-sm md:text-xl font-bold font-dagger leading-tight">
//                   {item?.title}
//                 </h3>
//                 <p className="text-white text-xs md:text-sm font-medium opacity-80 leading-normal">
//                   {item?.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseAnalytic;
