
import React from "react";

const StopGuessing = () => {
  return (
    <div className="relative max-w-[1400px] mx-auto w-full bg-[url('/assets/images/pep/sm_stop_buessing.svg')] md:bg-[url('/assets/images/pep/lg_stop_buessing.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[800px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 px-6 md:px-12 w-full max-w-[1080px] mx-auto">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-primary text-[28px] md:text-5xl lg:text-7xl font-dagger font-bold leading-tight">
            Stop Guessing. <br className="md:hidden" /> Start Developing.
          </h1>
          
          <p className="text-white text-base md:text-2xl lg:text-3xl font-dagger font-bold leading-snug">
            Unlock Your <span className="text-primary">True Potential</span> with the <br className="hidden md:block" />
            <span className="text-primary">Player Evaluation</span> Program
          </p>
        </div>
      </div>
    </div>
  );
};

export default StopGuessing;
