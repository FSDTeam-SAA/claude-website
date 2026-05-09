
"use client"
import Image from "next/image";
import { parseCookies } from "nookies";
import React from "react";

const COOKIE_NAME = "googtrans";

const OurCommitment = () => {
  const cookie = parseCookies()[COOKIE_NAME];
      const lang = cookie?.split("/")?.[2] || "en";
      // console.log( "language", lang)
  const commitmentData = [
    {
      id: 1,
      img: "/assets/images/pep/oc1.svg",
      title: "Longitudinal",
      desc: "We prioritize progression over time, not a single performance. We focus on 3, 5, and 7-year development horizons.",
    },
    {
      id: 2,
      img: "/assets/images/pep/oc2.svg",
      title: "Multifactorial",
      desc: "We assess all dimensions of a player's development, from technical skill to environmental factors, for a complete picture.",
    },
    {
      id: 3,
      img: "/assets/images/pep/oc3.svg",
      title: "Reference-Based",
      desc: "We use elite player profiles as realistic, position-specific benchmarks, providing context for every evaluation.",
    },
    {
      id: 4,
      img: "/assets/images/pep/oc4.svg",
      title: `${lang === "fr" ? "Inclusif" : "Inclusive"}`,
      desc: "Our process is designed to be fair, protecting and identifying late developers by accounting for biological age.",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[750px] py-8 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-[1200px] mx-auto">
        <div className="w-full text-center mb-4 md:mb-16">
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-6xl font-medium text-primary md:text-white leading-normal">
            Our Commitment to Fair <br className="hidden md:block" /> and Accurate Assessment
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-2 md:gap-6 lg:gap-6 items-stretch">
          {commitmentData.map((item) => (
            <CommitmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CommitmentCard = ({ item }: { item: any }) => {
  return (
    <div className="flex flex-col items-center w-full group transition-all duration-300 hover:translate-y-[-5px]">
      {/* Top Part: Green Icon Box (Narrower than the rest, Rounded Top) */}
      <div className="bg-primary rounded-t-[30px]  px-3 md:px-4 py-1 w-[75%] md:w-[80%] flex items-center justify-center shadow-lg z-20">
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={300}
            className="object-contain w-20 md:w-[100px] h-20 md:h-[100px]"
          />
      </div>

      {/* Middle Part: White Title Bar (Full Width, connected) */}
      <div className="bg-white w-full py-2 md:py-3 px-2 text-center shadow-md z-10 border-x-4 border-white">
        <h3 className="text-primary font-medium text-base md:text-xl lg:text-2xl uppercase tracking-tighter">
          {item.title}
        </h3>
      </div>

      {/* Bottom Part: Green Description Box (Full Width, Rounded Bottom, connected) */}
      <div className="bg-primary rounded-b-[30px] px-1 md:px-4 pt-3 md:pt-4 pb-4 md:pb-8 flex-grow flex items-center justify-center shadow-xl mt-2">
        <p className="text-white text-xs md:text-base font-medium leading-normal text-center">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default OurCommitment;
