import Image from "next/image";
import React from "react";
import { CircleCheck } from "lucide-react";

const AProgramFor = () => {
  const ecosystemData = [
    {
      id: 1,
      img: "/assets/images/pep/apf1.svg",
      title: "For Players (U9-U18)",
      features: [
        "Objective feedback on your real performance.",
        "Clarity on your strengths and development areas.",
        "A structured path to improvement.",
        "Fair, unbiased evaluation.",
      ],
    },
    {
      id: 2,
      img: "/assets/images/pep/apf2.svg",
      title: "For Parents",
      features: [
        "Objective, expert guidance to navigate your child's journey.",
        "Meaningful strategies to support them appropriately.",
        "Realistic expectations to avoid unsuitable pathways.",
      ],
    },
    {
      id: 3,
      img: "/assets/images/pep/apf3.svg",
      title: "For Clubs & Academies",
      features: [
        "Reliable and structured player profiles for better decisions.",
        "Reduced selection errors and optimized roster management.",
        "Objective data for long-term development monitoring.",
      ],
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[750px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-[1300px] mx-auto">
        <div className="w-full text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary md:text-white leading-normal">
            A Program for the Entire <br className="hidden md:block" /> Development Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 items-stretch">
          {ecosystemData.map((item, idx) => (
            <div key={item.id} className={`${idx === 2 ? "sm:col-span-2 lg:col-span-1 sm:w-1/2 sm:mx-auto lg:w-full" : "w-full"}`}>
              <EcosystemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EcosystemCard = ({ item }: { item: any }) => {
  return (
    <div className="bg-white rounded-[12px] border border-primary flex flex-col h-full shadow-2xl transition-all duration-300 hover:translate-y-[-5px]">
      {/* Top Image */}
      {/* <div className="relative w-full aspect-[16/10] rounded-[15px] md:rounded-[20px] overflow-hidden mb-4 md:mb-6">
        <Image
          src={item.img}
          alt={item.title}
          width={400}
          height={450}
          className="object-cover w-full h-[250px] border-2 border-red-500"
        />
      </div> */}
       <Image
          src={item.img}
          alt={item.title}
          width={800}
          height={550}
          className="object-cover w-full h-[190px] rounded-[24px] px-3 pt-2"
        />

      {/* Content */}
      <div className="px-4 flex flex-col h-full py-3 md:py-4 lg:py-5">
        <h3 className="text-primary  font-medium text-sm md:text-xl lg:text-2xl mb-4 leading-normal">
          {item.title}
        </h3>
        
        <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4 flex-grow">
          {item.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 md:gap-3">
              <CircleCheck className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-0.5" />
              <p className="text-black text-[11px] md:text-sm lg:text-base font-normal leading-normal">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AProgramFor;
