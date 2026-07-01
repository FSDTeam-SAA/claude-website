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
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[750px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full max-w-[1350px] mx-auto">
        <div className="w-full text-center mb-8 md:mb-16">
          <h2 className="text-base md:text-3xl lg:text-4xl xl:text-6xl font-medium text-primary md:text-white leading-normal">
            The Three Flaws of Traditional Scouting
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 items-center">
          {/* Top Row: 2 items on desktop, stacked on mobile */}
          <div className="flex flex-wrap justify-center gap-5 md:gap-10 w-full">
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
      <div className="bg-primary rounded-l-[20px] md:rounded-l-[30px] p-2 flex items-center justify-center shrink-0 shadow-lg">
        {/* <div className="relative w-10 h-10 md:w-16 md:h-16">
          <Image
            src={item.img}
            alt={item.title}
            width={150}
            height={150}
            className="object-contain w-[100px] h-auto"
          />
        </div> */}
        <Image
          src={item.img}
          alt={item.title}
          width={250}
          height={250}
          className="object-contain w-auto h-[90px] "
        />
      </div>

      {/* Text Side (White) */}
      <div className="bg-white rounded-r-[20px] md:rounded-r-[30px] p-2 flex flex-col justify-center flex-grow shadow-lg ml-3">
        <h3 className="text-primary font-dagger font-bold text-sm md:text-xl mb-1 md:mb-2 leading-tight">
          {item.title}
        </h3>
        <p className="text-[#4b4b4b] text-[10px] md:text-sm xl:text-base font-medium leading-normal">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default TheThreeFlaws;




// import Image from "next/image";
// import React from "react";

// const evaluationAreas = [
//   {
//     title: "Technical",
//     side: "left",
//     img: "/assets/images/pep/wdwo1.svg",
//   },
//   {
//     title: "Tactical",
//     side: "right",
//     img: "/assets/images/pep/wdwo4.svg",
//   },
//   {
//     title: "Dietetic",
//     side: "left",
//     img: "/assets/images/pep/wdwo2.svg",
//   },
//   {
//     title: "Physical",
//     side: "right",
//     img: "/assets/images/pep/wdwo5.svg",
//   },
//   {
//     title: "Family & Environment",
//     side: "left",
//     img: "/assets/images/pep/wdwo3.svg",
//   },
//   {
//     title: "Psychological & Mental",
//     side: "right",
//     img: "/assets/images/pep/wdwo6.svg",
//   },
//     {
//     title: "Personal evaluation",
//     side: "left",
//     img: "/assets/images/pep/wdwo3.svg",
//   },
//   {
//     title: "Game evaluation",
//     side: "right",
//     img: "/assets/images/pep/wdwo6.svg",
//   },
// ];

// const WhatDoWeOffer = () => {
//   return (
//     <section className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/pep/sm_wdwo_bg.svg')] md:bg-[url('/assets/images/pep/lg_wdwo_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[550px] md:h-[680px] xl:h-[760px] py-16 md:py-7 lg:py-8 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col items-center">
//       <div className="relative z-10 w-full max-w-[1200px] mx-auto px-2 md:px-12 flex flex-col h-full">
//         <div className="text-center mb-8 md:mb-5 lg:mb-9 xl:mb-6 mt-0 lg:mt-4 xl:mt-0">
//           <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-medium text-primary md:text-white leading-normal">
//             What Do We Offer
//           </h2>
//           <h3 className="text-primary md:text-white text-lg md:text-3xl lg:text-4xl  font-medium mb-1 md:mb-4 tracking-tight pt-1">
//             The 360° Player Evaluation
//           </h3>
//           <p className="text-white text-xs md:text-base lg:text-lg xl:text-2xl max-w-[1200px] text-center md:text-left opacity-100 leading-normal font-medium px-2">
//             We build a complete, multifactorial profile that sees the whole
//             player, not just a single skill. No more bias, no more random
//             opinions. The data will show exactly where you stand.
//           </p>
//         </div>

//         <div className="grid grid-cols-3 gap-x-1.5 sm:gap-x-2 md:gap-x-0 gap-y-3 sm:gap-y-4 md:gap-y-6 items-center w-full max-w-[1100px] mx-auto pt-3">
//           {evaluationAreas.map((area, index) => (
//             <div
//               key={index}
//               className={`
//                 relative bg-white rounded-[10px] md:rounded-[25px] p-1 flex items-center shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300
//                 ${area.side === "left" ? "flex-row col-start-1" : "flex-row-reverse col-start-3"}
//               `}
//             >
//               <div
//                 className={`flex flex-col flex-1 px-1 md:px-2 min-w-0 ${area.side === "left" ? "text-left" : "text-left md:text-right"}`}
//               >
//                 <span className="text-black font-medium text-[10px] md:text-xl lg:text-2xl xl:text-3xl leading-normal capitalize">
//                   {area.title}
//                 </span>
//               </div>

//               <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-14 md:h-14 lg:w-20 xl:w-24 lg:h-20 xl:h-24 relative">
//                 <Image
//                   src={area.img}
//                   alt={area.title}
//                   width={250}
//                   height={250}
//                   className="object-contain w-auto h-auto"
//                 />
//               </div>

//               {area.side === "left" ? (
//                 <span className="absolute right-[-24px] lg:right-[-75px] xl:right-[-90px] top-1/2 -translate-y-1/2 h-[4px] md:h-[12px] w-[18px] lg:w-[60px] xl:w-[70px] bg-white " />
//               ) : (
//                 <span className="absolute left-[-24px] lg:left-[-75px] xl:left-[-90px] top-1/2 -translate-y-1/2 h-[4px] md:h-[12px] w-[18px] lg:w-[60px] xl:w-[70px] bg-white " />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatDoWeOffer;
