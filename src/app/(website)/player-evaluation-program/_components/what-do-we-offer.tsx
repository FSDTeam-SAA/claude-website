
import Image from "next/image";
import React from "react";

const evaluationAreas = [
  { 
    title: "TECHNICAL", 
    side: "left", 
    img: "/assets/images/pep/wdwo1.svg" 
  },
  { 
    title: "TACTICAL", 
    side: "right", 
    img: "/assets/images/pep/wdwo2.svg" 
  },
  { 
    title: "DIETETIC", 
    side: "left", 
    img: "/assets/images/pep/wdwo3.svg" 
  },
  { 
    title: "PHYSICAL", 
    side: "right", 
    img: "/assets/images/pep/wdwo4.svg" 
  },
  { 
    title: "FAMILY & ENVIRONMENT", 
    side: "left", 
    img: "/assets/images/pep/wdwo5.svg" 
  },
  { 
    title: "PSYCHOLOGICAL / MENTAL", 
    side: "right", 
    img: "/assets/images/pep/wdwo6.svg" 
  },
];

const WhatDoWeOffer = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/pep/sm_wdwo_bg.svg')] md:bg-[url('/assets/images/pep/lg_wdwo_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[520px] md:h-[750px] py-16 md:py-7 lg:py-8 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-2 md:px-12 flex flex-col h-full">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-5 lg:mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-medium text-primary md:text-white leading-normal">
            What Do We Offer
          </h2>
          <h3 className="text-white text-base sm:text-xl md:text-3xl lg:text-4xl  font-medium mb-3 md:mb-4 tracking-tight pt-1">
            The 360° Player Evaluation
          </h3>
          <p className="text-white text-[10px] md:text-base lg:text-lg xl:text-2xl max-w-[1200px] text-left opacity-100 leading-normal font-medium px-2">
            We build a complete, multifactorial profile that sees the whole player, not just a single skill. 
            No more bias, no more random opinions. The data will show exactly where you stand.
          </p>
        </div>

        {/* Evaluation Areas Grid */}
        <div className="grid grid-cols-3 gap-x-1.5 sm:gap-x-2 md:gap-x-0 gap-y-3 sm:gap-y-4 md:gap-y-3 items-center w-full max-w-[1100px] mx-auto pt-3">
          {evaluationAreas.map((area, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-[10px] md:rounded-[25px] p-1.5 md:p-2 flex items-center shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300
                ${area.side === "left" ? "flex-row col-start-1" : "flex-row-reverse col-start-3"}
              `}
            >
              {/* Text Container */}
              <div className={`flex flex-col flex-1 px-1 md:px-2 ${area.side === "left" ? "text-left" : "text-left md:text-right"}`}>
                <span className="text-black font-medium text-[7px] sm:text-[10px] md:text-xl lg:text-2xl xl:text-3xl leading-tight uppercase">
                  {area.title}
                </span>
              </div>

              {/* Icon Container */}
              <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-14 md:h-14 lg:w-20 xl:w-32 lg:h-20 xl:h-32 relative">
                <Image
                  src={area.img}
                  alt={area.title}
                  width={250}
                  height={250}
                  className="object-contain w-auto h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDoWeOffer;
