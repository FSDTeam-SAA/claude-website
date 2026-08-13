import Image from "next/image";
import React from "react";
import { CircleCheck } from "lucide-react";

const BuildForEveryPlayer = () => {
  const ecosystemData = [
    {
      id: 1,
      img: "/assets/images/u19_u23/bfep1.png",
      title: "For Players (U19-U23)",
      features: [
        "Objective proof of your performance level.",
        "A professional profile ready to share with clubs and scouts.",
        "A clear gap analysis – what you need to reach the next level.",
      ],
    },

    
    {
      id: 2,
      img: "/assets/images/u19_u23/bfep2.png",
      title: "For Agents & Representatives",
      features: [
        "Structured, verified player profiles to present to clubs.",
        "Objective data to support transfer and trial negotiations.",
        "PEP reports as professional supporting documentation.",
        "Direct access to player database via Scouting Account."
      ],
    },
    {
      id: 3,
      img: "/assets/images/u19_u23/bfep3.png",
      title: "For Clubs & Professional Teams",
      features: [
        "Pre-screened players evaluated against professional benchmarks.",
        "Objective data to reduce trial risk and selection errors.",
        "Long-term progression data – not just a one-time snapshot.",
        "Direct pipeline access to MFH Global Football Agency network."
      ],
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[750px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-[1300px] mx-auto">
        <div className="w-full text-center mb-8 md:mb-10">
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary md:text-white leading-normal">
            Built for Every Player in the Professional Window
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
   
       <Image
          src={item.img}
          alt={item.title}
          width={800}
          height={550}
          className="object-cover w-full h-[190px] rounded-[24px] px-3 pt-2"
        />

      {/* Content */}
      <div className="px-4 flex flex-col h-full py-3 md:py-4">
        <h3 className="text-primary  font-medium text-sm md:text-xl lg:text-[22px] mb-4 leading-normal">
          {item.title}
        </h3>
        
        <ul className="flex flex-col gap-2  flex-grow">
          {item?.features?.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 md:gap-3">
              <CircleCheck className="w-4 h-4 md:w-5 md:h-5 text-black shrink-0 mt-0.5" />
              <p className="text-black text-[11px] md:text-sm xl:text-base font-normal leading-normal">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BuildForEveryPlayer;
