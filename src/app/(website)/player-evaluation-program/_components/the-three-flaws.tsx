import Image from "next/image";
import React from "react";

interface FlawItem {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const TheThreeFlaws = () => {
  const flawsData: FlawItem[] = [
    {
      id: 1,
      img: "/assets/images/pep/tff1.svg",
      title: "Unreliable Predictions",
      desc: "Traditional evaluations are based on a single snapshot in time, failing to account for how players evolve.",
    },
    {
      id: 2,
      img: "/assets/images/pep/tff2.svg",
      title: "The 'One-Size-Fits-All' Myth",
      desc: "Performance is multifactorial, a dynamic interaction of genetics, psychology, and environment. A single trial cannot capture this complexity.",
    },
    {
      id: 3,
      img: "/assets/images/pep/tff3.svg",
      title: "The Missing Blueprint",
      desc: "No reliable model exists to identify future elite players from a single trial which is why the system consistently overlooks late-maturing players and closes doors too early.",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[750px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full max-w-[1200px] mx-auto">
        <div className="w-full text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-dagger font-bold text-white leading-tight">
            The Three Flaws of Traditional Scouting
          </h1>
        </div>

        <div className="flex flex-col gap-6 md:gap-10 items-center">
          {/* Top Row: 2 items on desktop, stacked on mobile */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
            {flawsData.slice(0, 2).map((item) => (
              <FlawCard key={item.id} item={item} />
            ))}
          </div>

          {/* Bottom Row: 1 item centered */}
          <div className="flex justify-center w-full">
            {flawsData.slice(2, 3).map((item) => (
              <FlawCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlawCard = ({ item }: { item: any }) => {
  return (
    <div className="flex items-stretch w-full md:max-w-[500px] hover:scale-105 transition-transform duration-300 group">
      {/* Icon Side (Green) */}
      <div className="bg-primary rounded-l-[20px] md:rounded-l-[30px] p-3 flex items-center justify-center w-[80px] md:w-[130px] shrink-0 shadow-lg">
        <div className="relative w-10 h-10 md:w-16 md:h-16">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Text Side (White) */}
      <div className="bg-white rounded-r-[20px] md:rounded-r-[30px] p-2 flex flex-col justify-center flex-grow shadow-lg ml-3">
        <h3 className="text-primary font-dagger font-bold text-sm md:text-xl mb-1 md:mb-2 leading-tight">
          {item.title}
        </h3>
        <p className="text-black text-[10px] md:text-sm lg:text-base font-medium leading-snug md:leading-normal">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default TheThreeFlaws;
