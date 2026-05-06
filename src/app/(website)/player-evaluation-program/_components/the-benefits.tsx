import Image from "next/image";
import React from "react";

const TheBenefits = () => {
  const benefitsData = [
    {
      id: 1,
      img: "/assets/images/pep/tb1.svg",
      title: "Identify Potential Fairly",
      desc: "Reduce bias linked to biological age and give every player an equal opportunity.",
    },
    {
      id: 2,
      img: "/assets/images/pep/tb2.svg",
      title: "Optimize Training",
      desc: "Create individualized training plans that target specific needs and accelerate growth.",
    },
    {
      id: 3,
      img: "/assets/images/pep/tb3.svg",
      title: "Reduce Dropout Rates",
      desc: "Lower frustration caused by poor orientation and mismatched expectations.",
    },
    {
      id: 4,
      img: "/assets/images/pep/tb4.svg",
      title: "Build Development Pathways",
      desc: "Establish structured, long-term 3-5-7 year pathways for sustainable success.",
    },
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[750px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full max-w-[1300px] mx-auto">
        <div className="w-full text-center mb-10 md:mb-16">
          <h2 className="text-base md:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary md:text-white leading-normal pb-1 md:pb-4">
            The Benefits of an Objective System
          </h2>
          <p className="text-white text-xs md:text-xl lg:text-[22px] font-medium max-w-[950px] mx-auto leading-normal">
            By replacing guesswork with a structured process, we create a healthier and more effective development environment for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 gap-y-3 md:gap-y-16">
          {benefitsData.map((item) => (
            <div key={item.id} className="flex items-center gap-2 md:gap-8 group">
              {/* <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <div className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div> */}
               <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-contain w-auto h-20 md:h-[170px]"
                  />
              <div className="flex flex-col gap-[1px] md:gap-2">
                <h3 className="text-primary  font-medium text-lg md:text-2xl lg:text-3xl leading-normal">
                  {item.title}
                </h3>
                <p className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-medium leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheBenefits;
