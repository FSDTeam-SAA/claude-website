
import Image from "next/image";
import React from "react";

const WhatDoWeOffer = () => {

  const missionData = [
    {
      id : 1,
      img: "/assets/images/home_page/wdwo1.svg",
      title: "Specific technical and tactical data"
    },
    {
      id : 2,
      img: "/assets/images/home_page/wdwo2.svg",
      title: "Ratings for every game to measure your progression"
    },
    {
      id : 3,
      img: "/assets/images/home_page/wdwo3.svg",
      title: "Personalized highlights showcasing your key actions"
    },
    {
      id : 4,
      img: "/assets/images/home_page/wdwo4.svg",
      title: "Structured feedback from qualified evaluators"
    }

  ]
  return (
    <div className="relative container bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat h-[800px] md:h-[800px] rounded-[50px] w-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12">
      <div className="absolute left-[8%] top-[48%] md:top-[50%] -translate-y-1/2 md:left-[12%] lg:left-[15%]">
        <div className="">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal text-primary">
          What Do We Offer
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-medium text-white leading-normal mt-3">
          Everything you need to stand out as a player – all in one place.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-7 lg:gap-8 pt-10 md:pt-16 lg:pt-20">
        {
          missionData?.map((item)=>{
            return <div key={item?.id} className="bg-white rounded-[12px] border-[4px] border-primary p-4 md:p-5">
              <Image src={item?.img} alt={item?.title} width={1000} height={1000} className="w-[145px] md:w-[180px] h-[160px] object-contain mx-auto"/>
                <p className="text-center text-sm md:text-base font-medium text-[#131313] mt-3">{item?.title}</p>
            </div>
          })
        }
      </div>
      </div>
    </div>
  );
};

export default WhatDoWeOffer;
