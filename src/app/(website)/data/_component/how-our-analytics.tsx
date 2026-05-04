
import Image from "next/image";
import React from "react";

const HowOurAnalytics = () => {
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
    <div className="relative container bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-[1000px] mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-10 md:mb-16 leading-tight">
          How Our Analytics Process Works
        </h1>

        <div className="flex flex-col gap-4 md:gap-6">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="flex flex-row items-center bg-transparent border-[1.5px] md:border-[3px] border-primary rounded-[15px] md:rounded-[30px] p-1 md:p-0 gap-3 md:gap-6 hover:shadow-[0_0_20px_rgba(16,230,7,0.3)] transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="bg-white rounded-[10px] md:rounded-[25px] p-1 flex-shrink-0 w-[80px] h-[65px] md:w-[180px] md:h-[130px] flex items-center justify-center shadow-lg">
                  <Image
                    src={item?.img}
                    alt={item?.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-grow text-left">
                  <h2 className="text-[12px] md:text-2xl lg:text-3xl font-dagger font-bold text-primary mb-1 md:mb-3">
                    {item?.title}
                  </h2>
                  <p className="text-white text-[9px] md:text-base lg:text-lg font-medium opacity-90 leading-tight">
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
