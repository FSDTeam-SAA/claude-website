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
    <div className="relative mx-auto mt-6 flex min-h-[600px] w-[95%] max-w-[1400px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[url('/assets/images/home_page/sm_bg.svg')] bg-cover bg-center bg-no-repeat py-10 md:mt-8 md:h-[750px] md:w-full md:rounded-[70px] md:bg-[url('/assets/images/home_page/lg_bg.svg')] md:py-16 lg:mt-10 lg:py-20 xl:mt-12">
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-4 md:px-8 lg:px-12">
        <div className="mb-12 w-full text-center md:mb-10">
          <h2 className="font-dagger mx-auto max-w-[440px] text-2xl font-medium leading-[1.15] text-white md:max-w-none md:text-3xl md:leading-normal lg:text-4xl xl:text-5xl">
            Built for Every Player in the Professional Window
          </h2>
        </div>

        <div className="grid grid-cols-2 items-stretch gap-2 md:gap-3 lg:grid-cols-3">
          {ecosystemData.map((item, idx) => (
            <div key={item.id} className={idx === 2 ? "col-span-2 mx-auto w-1/2 lg:col-span-1 lg:w-full" : "w-full"}>
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
    <div className="flex h-full min-h-[220px] flex-col rounded-[18px] border-2 border-primary bg-white shadow-2xl transition-all duration-300 hover:translate-y-[-5px] md:min-h-0 md:rounded-[12px] md:border">
   
       <Image
          src={item.img}
          alt={item.title}
          width={800}
          height={550}
          className="h-[100px] w-full rounded-[15px] object-cover px-1.5 pt-1.5 md:h-[150px] md:rounded-[24px] md:px-3 md:pt-2"
        />

      {/* Content */}
      <div className="flex h-auto flex-col px-2 py-2 md:px-4 md:py-3">
        <h3 className="font-dagger mb-2 text-[13px] font-medium leading-none text-primary md:mb-4 md:text-xl md:leading-normal lg:text-[22px]">
          {item.title}
        </h3>
        
        <ul className="flex flex-grow flex-col gap-1 md:gap-1">
          {item?.features?.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center gap-1 md:gap-2">
              <CircleCheck className="h-3 w-3 shrink-0 text-black md:h-5 md:w-5" />
              <p className="text-[9px] font-normal leading-[1.1] text-black md:text-sm md:leading-normal xl:text-base">
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
