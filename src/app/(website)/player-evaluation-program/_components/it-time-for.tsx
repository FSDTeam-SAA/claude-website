
import React from "react";

const ItTimeFor = () => {
  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/home_page/sm_bg.svg')] md:bg-[url('/assets/images/home_page/lg_bg.svg')] bg-cover bg-center bg-no-repeat min-h-[400px] md:h-[750px] py-12 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center text-center">
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-10">
          <h1 className="text-primary md:text-white text-2xl md:text-5xl lg:text-7xl font-dagger font-bold leading-tight">
            It&apos;s Time For a New Approach
          </h1>
          
          <p className="text-white text-base md:text-2xl lg:text-3xl font-medium leading-relaxed md:leading-snug opacity-95">
            We are replacing the lottery with a roadmap. The Player Evaluation Program is a long-term, structured talent assessment system designed to monitor, guide, and support a player&apos;s development over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItTimeFor;
