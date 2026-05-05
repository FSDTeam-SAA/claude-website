"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowToBook = () => {
  const session = useSession();
  const isLogin = session?.data?.user?.accessToken;

  const missionData = [
    {
      id: 1,
      img: "/assets/images/home_page/htb1.svg",
      title: "Register",
      step: "1",
    },
    {
      id: 2,
      img: "/assets/images/home_page/htb2.svg",
      title: "Player Settings (Create your Profile)",
      step: "2",
    },
    {
      id: 3,
      img: "/assets/images/home_page/htb3.svg",
      title: "Payment",
      step: "3",
    },
    {
      id: 4,
      img: "/assets/images/home_page/htb4.svg",
      title: "Send us your game video (Team sheet if applicable)",
      step: "4",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[500px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1080px] mx-auto">
        <div className="w-full text-left mb-6 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-4">
            How to book your video analysis !
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full max-w-[1200px] mb-8 md:mb-12">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="bg-transparent border-2 md:border-[3px] border-primary rounded-[30px] md:rounded-[40px] p-3 md:p-4 flex flex-col items-center justify-between h-full hover:shadow-[0_0_20px_rgba(16,230,7,0.2)] transition-all duration-300"
              >
                <div className="w-full h-[110px] md:h-[150px] relative mb-2">
                  <Image
                    src={item?.img}
                    alt={item?.title}
                    width={300}
                    height={300}
                    className="object-contain w-auto h-auto"
                  />
                </div>
                <div className="text-center flex flex-col justify-end gap-2 w-full mt-auto">
                  <h3 className="text-white text-[11px] md:text-lg font-bold leading-tight">
                    {item?.title}
                  </h3>
                  <span className="text-primary text-xl md:text-4xl font-dagger font-bold">
                    {item?.step}
                  </span>
                </div>
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

export default HowToBook;
