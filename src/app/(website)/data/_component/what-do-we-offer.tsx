import Image from "next/image";
import React from "react";

const WhatDoWeOffer = () => {
  const missionData = [
    {
      id: 1,
      img: "/assets/images/home_page/wdwo1.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_what_dwo1.svg",
      title: "Specific technical and tactical data",
    },
    {
      id: 2,
      img: "/assets/images/home_page/wdwo2.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_what_dwo2.svg",
      title: "Ratings for every game to measure your progression",
    },
    {
      id: 3,
      img: "/assets/images/home_page/wdwo3.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_what_dwo3.svg",
      title: "Personalized highlights showcasing your key actions",
    },
    {
      id: 4,
      img: "/assets/images/home_page/wdwo4.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_what_dwo4.svg",
      title: "Structured Feedback from qualified evaluators",
    },
  ];

  return (
    <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1080px] mx-auto">
        <div className="w-full text-left mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary mb-3 md:mb-4">
            What Do We Offer ?
          </h2>
          <p className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl font-medium opacity-90 leading-normal">
            Everything you need to stand out as a player, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 md:gap-6 lg:gap-7 w-full max-w-[1200px]">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="aspect-[5/7] bg-primary rounded-[clamp(22px,6vw,34px)] md:aspect-auto md:bg-white md:rounded-[40px] border-[2px] md:border-[4px] border-primary p-[3px] md:p-[1px] flex flex-col items-center h-full hover:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(16,230,7,0.35)] md:shadow-xl"
              >
                <div className="flex h-full w-full flex-col items-center rounded-[clamp(18px,5vw,28px)] bg-white pt-1 md:hidden">
                  <Image
                    src={item.smImg}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="h-[clamp(100px,31vw,150px)] w-full object-contain"
                  />
                  <h3 className="-mt-0.5 px-2 pb-3 text-center text-[clamp(0.75rem,3.2vw,1.125rem)] font-dagger font-semibold leading-tight text-[#131313]">
                    {item.id === 4 ? "Structured Feedback" : item.title}
                  </h3>
                </div>
                <Image
                  src={item?.img}
                  alt={item?.title}
                  width={200}
                  height={200}
                  className="hidden object-contain w-full h-[180px] md:block"
                />
                <h3 className="hidden text-center text-base lg:text-[17px] font-semibold text-[#131313] leading-normal md:py-5 px-2 md:block">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeOffer;
