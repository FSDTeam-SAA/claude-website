
import Image from "next/image";
import React from "react";

const WhatDoWeOffer = () => {
  const missionData = [
    {
      id: 1,
      img: "/assets/images/home_page/wdwo1.svg",
      title: "Specific technical and tactical data",
    },
    {
      id: 2,
      img: "/assets/images/home_page/wdwo2.svg",
      title: "Ratings for every game to measure your progression",
    },
    {
      id: 3,
      img: "/assets/images/home_page/wdwo3.svg",
      title: "Personalized highlights showcasing your key actions",
    },
    {
      id: 4,
      img: "/assets/images/home_page/wdwo4.svg",
      title: "Structured Feedback from qualified evaluators",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1080px] mx-auto">
        <div className="w-full text-left mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-3 md:mb-4">
            What Do We Offer
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium opacity-90 leading-normal">
            Everything you need to stand out as a player – all in one place.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-7 w-full max-w-[1200px]">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="bg-white rounded-[30px] md:rounded-[40px] border-[3px] md:border-[4px] border-primary p-2 flex flex-col items-center justify-between h-full hover:scale-105 transition-transform duration-300 shadow-xl"
              >
              {/* <Image
                    src={item?.img}
                    alt={item?.title}
                    width={300}
                    height={300}
                    className="object-contain w-auto h-auto"
                  /> */}
                  <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-14 md:h-14 lg:w-20 xl:w-40 lg:h-20 xl:h-40 relative">
                                  <Image
                                    src={item?.img}
                                    alt={item?.title}
                                    width={250}
                                    height={250}
                                    className="object-contain w-auto h-auto"
                                  />
                                </div>
                <h3 className="text-center text-sm md:text-base lg:text-lg  font-medium text-[#131313] leading-normal py-5">
                  {item?.title}
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
