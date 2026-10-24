"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurMission = () => {
  const session = useSession();
  const isLogin = session?.data?.user?.accessToken;

  const missionData = [
    {
      id: 1,
      img: "/assets/images/home_page/1.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_our_mission1.svg",
      title: "Get rated every game",
    },
    {
      id: 2,
      img: "/assets/images/home_page/2.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_our_mission2.svg",
      title: "Compete with teammates",
    },
    {
      id: 3,
      img: "/assets/images/home_page/3.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_our_mission3.svg",
      title: "Build your data identity",
    },
    {
      id: 4,
      img: "/assets/images/home_page/4.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_our_mission4.svg",
      title: "Unlock new opportunities",
    },
  ];

  return (
    <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1080px] mx-auto">
        <div className="w-full text-left mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-4">
            Our Mission
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-xl font-medium opacity-90">
            Four pillars that drive everything we do:
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 md:gap-6 lg:gap-10 w-full max-w-[1200px] mb-8 md:mb-12">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="aspect-[3/4] bg-[#061006] rounded-[22px] md:aspect-auto md:bg-white md:rounded-tl-[60px] md:rounded-br-[60px] border-[3px] md:border-[5px] border-primary p-[5px] md:p-2 flex flex-col items-center h-full hover:scale-105 transition-transform duration-300"
              >
                <div className="flex h-full w-full flex-col items-center rounded-[17px] bg-white pt-0 md:hidden">
                  <Image
                    src={item.smImg}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="h-[clamp(100px,31vw,150px)] w-full object-contain"
                  />
                  <h3 className="mt-auto px-2 pb-3 text-center text-xs font-dagger font-semibold leading-tight text-[#131313]">
                    {item.title}
                  </h3>
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="hidden object-contain w-auto h-[180px] md:block"
                />
                <h3 className="hidden text-center text-base font-semibold leading-tight text-[#131313] pb-3 md:block lg:text-lg">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="w-full flex justify-center md:justify-start max-w-[1200px]">
          <Link
            href={`${isLogin ? "/prices" : "/sign-up"}`}
            className="h-10 md:h-14 inline-flex items-center justify-center rounded-full bg-primary px-8 md:px-12 text-sm md:text-lg font-dagger font-bold text-black transition-all hover:opacity-90 hover:scale-105 shadow-[0_0_15px_rgba(16,230,7,0.4)]"
          >
            Get Your Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
