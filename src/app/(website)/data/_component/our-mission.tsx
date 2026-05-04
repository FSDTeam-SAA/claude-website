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
      id : 1,
      img: "/assets/images/home_page/om1.svg",
      title: "Get rated every game"
    },
    {
      id : 2,
      img: "/assets/images/home_page/om2.svg",
      title: "Get rated every game"
    },
    {
      id : 3,
      img: "/assets/images/home_page/om3.svg",
      title: "Get rated every game"
    },
    {
      id : 4,
      img: "/assets/images/home_page/om4.svg",
      title: "Get rated every game"
    }

  ]
  return (
    <div className="relative container bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat h-[700px] md:h-[800px] rounded-[50px] w-auto">
      <div className="absolute left-[8%] top-[44%] md:top-[50%] -translate-y-1/2 md:left-[12%] lg:left-[15%]">
        <div className="">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal text-primary">
          Our Mission
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-medium text-white leading-normal mt-3">
          Four pillars that drive everything we do:
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 pt-10 md:pt-16 lg:pt-20 ">
        {
          missionData?.map((item)=>{
            return <div key={item?.id}>
              <Image src={item?.img} alt={item?.title} width={1000} height={1000} className="w-[145px] md:w-[200px] h-auto object-contain"/>
            </div>
          })
        }
      </div>
      </div>

      <div className="absolute left-[10%] top-[93%] md:top-[88%] -translate-y-1/2 md:left-[18%] lg:left-[20%]">
        <Link
          href={`${isLogin ? "/prices" : "/sign-up"}`}
          className="h-8 md:h-12 inline-flex min-w-[140px] items-center justify-center rounded-full bg-primary px-6  text-sm font-semibold text-black transition-opacity hover:opacity-90 md:min-w-[180px] md:px-8 py-1 md:py-2 lg:py-3 md:text-base"
        >
          Get Your Report
        </Link>
      </div>
    </div>
  );
};

export default OurMission;
