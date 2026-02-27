

import Image from "next/image";
import { ReactNode } from "react";
import React from "react";

type MissionItem = {
  id: number;
  img: string;
  title: ReactNode;
};

const OurMission = () => {
  const missionData: MissionItem[] = [
    {
      id: 1,
      img: "/assets/images/mission1.png",
      title: (
      <>
        Get rated every <br /> game
      </>
    ),
    },
    {
      id: 2,
      img: "/assets/images/mission2.png",
      title: (
        <>
        Compete with <br/> teammates
        </>
      ),
    },
    {
      id: 3,
      img: "/assets/images/mission3.png",
      title: (
        <>
        Build your data <br/> identity
        </>
      ),
    },
    {
      id: 4,
      img: "/assets/images/mission4.png",
      title: (
        <>Unlock new <br/> opportunities</>
      ),
    },
  ];

  return (
    <section className='relative w-full bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/player_profile_bg.svg")] py-8 md:py-12 lg:py-16 overflow-hidden'>
      <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
      
      {/* Left background image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Image
          src="/assets/images/our-mission1.png"
          alt="Player left"
          width={350}
          height={350}
          className="object-contain h-[450px] w-auto"
        />
      </div>

      {/* Right background image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <Image
          src="/assets/images/our-mission2.png"
          alt="Player right"
          width={350}
          height={350}
          className="object-contain h-[450px] w-auto"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center ">
        <h3 className=" text-2xl md:text-3xl lg:text-4xl font-normal text-primary leading-[120%] h_underline">
          Our Mission
        </h3>

        <p className="text-sm md:text-base text-white leading-[150%] pt-3 max-w-2xl mx-auto">
          Give amateur players the same digital visibility as professional athletes.
        </p>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12">
          {missionData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-tl-[60px] rounded-br-[60px] w-[220px] h-[220px] mx-auto shadow-[0px_4px_16px_rgba(0,0,0,0.16)] flex flex-col items-center justify-center"
            >
              <Image
                src={item.img}
                alt="Mission Item"
                width={320}
                height={320}
                className="w-[175px] h-[100px] object-contain"
              />

              <p className="text-sm md:text-base text-[#0A1628] font-normal leading-[150%] text-center pt-3 px-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;

