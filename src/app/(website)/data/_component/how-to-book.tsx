"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { parseCookies } from "nookies";
import React from "react";

const COOKIE_NAME = "googtrans";

const HowToBook = () => {
  const session = useSession();
  const isLogin = session?.data?.user?.accessToken;

    const cookie = parseCookies()[COOKIE_NAME];
        const lang = cookie?.split("/")?.[2] || "en";
        // console.log( "language", lang)

  const missionData = [
    {
      id: 1,
      img: "/assets/images/home_page/htb1.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_how_to_book1.svg",
      title: `${lang === "fr" ? "Enregistrement" : "Register"}`,
      step: "1",
    },
    {
      id: 2,
      img: "/assets/images/home_page/htb2.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_how_to_book2.svg",
      title: "Player Settings (Create your Profile)",
      step: "2",
    },
    {
      id: 3,
      img: "/assets/images/home_page/htb3.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_how_to_book3.svg",
      title: "Payment",
      step: "3",
    },
    {
      id: 4,
      img: "/assets/images/home_page/htb4.svg",
      smImg: "/assets/images/home_page/data_sm_de/sm_how_to_book4.svg",
      smTitle: "Send us your game video",
      title: `${lang === "fr" ? "Télécharger et envoyer-nous votre vidéo" : "Download and send us your video"}`,
      // title: "Upload and send us your game",
      step: "4",
    },
  ];

  return (
    <div className="relative container mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[500px] md:h-[700px] py-8 md:py-12 lg:py-14 rounded-[30px] md:rounded-[50px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 px-[clamp(1.25rem,5vw,1.75rem)] md:px-8 lg:px-12 flex flex-col items-center w-full max-w-[1100px] mx-auto">
        <div className="w-full text-left mb-18 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-dagger font-bold text-primary mb-3 md:mb-4">
            <span className="md:hidden">
              How to book your<br />video analysis !
            </span>
            <span className="hidden md:inline">How to book your video analysis !</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 w-[98%] md:w-full gap-x-[clamp(1.25rem,6vw,2.25rem)] gap-y-3 md:gap-5 max-w-[1200px] mb-8 md:mb-12 mt-6">
          {missionData?.map((item) => {
            return (
              <div
                key={item?.id}
                className="aspect-[3/4] bg-black/20 border-[3px] md:aspect-auto md:bg-transparent md:border-[3px] border-primary rounded-[22px] md:rounded-[40px] p-2 pt-[1px] md:p-2 flex flex-col items-center h-full hover:shadow-[0_0_20px_rgba(16,230,7,0.2)] transition-all duration-300"
              >
                <div className="flex h-full w-full flex-col items-center md:hidden">
                  <Image
                    src={item.smImg}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="-mt-3 h-[clamp(90px,27vw,150px)] w-full object-contain"
                  />
                  <h3 className="mt-1 text-center text-[clamp(0.75rem,3vw,1rem)] font-dagger font-semibold leading-tight text-white">
                    {item.smTitle ?? item.title}
                  </h3>
                  <span className="mt-auto text-xl font-bold text-primary">
                    {item.step}
                  </span>
                </div>
                <div className="hidden md:block">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="h-[190px] w-auto object-cover"
                  />
                </div>
                <div className="hidden text-center md:flex md:flex-1 md:flex-col md:justify-start md:gap-2 md:w-full">
                  <h3 className="text-white text-[11px] md:text-lg font-bold leading-normal">
                    {item.title}
                  </h3>
                  <span className="mt-auto text-primary text-xl md:text-3xl font-bold">
                    {item?.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex w-full justify-center md:hidden">
          <Link
            href={`${isLogin ? "/prices" : "/sign-up"}`}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-dagger font-bold text-black transition-all hover:scale-105 hover:opacity-90 shadow-[0_0_15px_rgba(16,230,7,0.4)]"
          >
            Get Your Report
          </Link>
        </div>

        <div className="hidden w-full md:flex md:justify-start max-w-[1200px]">
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
