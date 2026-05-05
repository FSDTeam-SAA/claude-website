import Image from "next/image";
import React from "react";

const OurCommitment = () => {
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
      title: "Inclusive",
      desc: "Our process is designed to be fair, protecting and identifying late developers by accounting for biological age.",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[850px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-[1200px] mx-auto">
        <div className="w-full text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-dagger font-bold text-white leading-tight">
            Our Commitment to Fair <br className="hidden md:block" /> and Accurate Assessment
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-6 lg:gap-6 items-stretch">
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
      <div className="bg-primary rounded-t-[30px] md:rounded-t-[40px] px-3 md:px-4 pb-5 md:pb-7 w-[75%] md:w-[80%] flex items-center justify-center shadow-lg z-20">
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={300}
            className="object-contain w-[100px] h-[100px]"
          />
        </div>
      </div>

      {/* Middle Part: White Title Bar (Full Width, connected) */}
      <div className="bg-white w-full py-3 md:py-4 px-2 text-center shadow-md z-10 border-x-4 border-white">
        <h3 className="text-primary font-dagger font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-tighter">
          {item.title}
        </h3>
      </div>

      {/* Bottom Part: Green Description Box (Full Width, Rounded Bottom, connected) */}
      <div className="bg-primary rounded-b-[30px] md:rounded-b-[50px] p-3 md:p-4 flex-grow flex items-center justify-center shadow-xl mt-2">
        <p className="text-white text-sm md:text-base font-medium leading-relaxed text-center">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default OurCommitment;
