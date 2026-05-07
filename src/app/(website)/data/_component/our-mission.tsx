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
      img: "/assets/images/home_page/om1.svg",
      title: "Get rated every game",
    },
    {
      id: 2,
      img: "/assets/images/home_page/om2.svg",
      title: "Compete with teammates",
    },
    {
      id: 3,
      img: "/assets/images/home_page/om3.svg",
      title: "Build your data identity",
    },
    {
      id: 4,
      img: "/assets/images/home_page/om4.svg",
      title: "Unlock new opportunities",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1080px] mx-auto">
        <div className="w-full text-left mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-4">
            Our Mission
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-xl font-medium opacity-90">
            Four pillars that drive everything we do :
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full max-w-[1200px] mb-8 md:mb-12">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="bg-white rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] border-[3px] md:border-[5px] border-primary p-2 flex flex-col items-center h-full hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                 <Image
                    src={item?.img}
                    alt={item?.title}
                    width={200}
                    height={200}
                    className="object-contain w-auto h-[110px] md:h-[180px] "
                  />
                <h3 className="text-center text-xs md:text-base lg:text-lg font-semibold text-[#131313] leading-tight pb-3">
                  {item?.title}
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
