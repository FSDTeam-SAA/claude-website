"use client"
import Image from "next/image";
import { parseCookies } from "nookies";
import React from "react";

const COOKIE_NAME = "googtrans";

const HowOurAnalytics = () => {
    const cookie = parseCookies()[COOKIE_NAME];
    const lang = cookie?.split("/")?.[2] || "en";
  const missionData = [
    {
      id: 1,
      img: "/assets/images/home_page/hoa1.svg",
      title: "Send us your game video and team sheet",
      desc: "Upload your match footage and the team sheet so we can identify your performance.",
    },
    {
      id: 2,
      img: "/assets/images/home_page/hoa2.svg",
      title: "We analyze your performance",
      desc: "Our analysts review your game using standardized evaluation criteria.",
    },
    {
      id: 3,
      img: "/assets/images/home_page/hoa3.svg",
      title: "Receive your report and highlight within 72 hours",
      desc: "You get a full performance report and personalized highlight video – ready to share.",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[750px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-[1140px] mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold text-primary mb-8 md:mb-12 leading-tight">
          How Our Analytics Process Works
        </h1>

        <div className="flex flex-col gap-4 md:gap-5">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="flex flex-row items-center bg-transparent border-[1.5px] md:border-[3px] border-primary rounded-[15px] md:rounded-[30px] p-1 md:p-0 gap-3 md:gap-4 hover:shadow-[0_0_20px_rgba(16,230,7,0.3)] transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="bg-white rounded-[10px] md:rounded-[25px] p-[1px] flex-shrink-0 flex items-center justify-center shadow-lg">
                  <Image
                    src={item?.img}
                    alt={item?.title}
                    width={200}
                    height={200}
                    className="w-auto h-[80px] md:h-[100px] object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-grow text-left">
                  <h2 className={`${lang === "fr" ? "text-sm md:text-2xl" : lang === "es" ? "text-sm md:text-2xl lg:text-3xl" : "text-sm md:text-2xl"}   font-bold text-primary mb-1 md:mb-3`}>
                    {item?.title}
                  </h2>
                  <p className="text-white text-xs md:text-base lg:text-lg font-medium opacity-90 leading-tight">
                    {item?.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowOurAnalytics;
