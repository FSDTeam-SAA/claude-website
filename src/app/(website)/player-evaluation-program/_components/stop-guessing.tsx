import React from "react";

const StopGuessing = () => {
  return (
    <div className="relative max-w-[1400px] mx-auto w-[95%] md:w-full bg-[url('/assets/images/pep/sm_stop_buessing.svg')] md:bg-[url('/assets/images/pep/lg_stop_buessing.svg')] bg-cover bg-center bg-no-repeat min-h-[600px] md:h-[750px] py-10 md:py-16 lg:py-20 rounded-[30px] md:rounded-[70px] mt-6 md:mt-8 lg:mt-10 xl:mt-12 overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full max-w-[1300px] mx-auto">
        <div className="flex flex-col gap-3 md:gap-6">
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-6xl font-medium text-primary md:text-white leading-normal pb-1">
            Stop Guessing. Start Developing.
          </h2>
          
          <p className="text-white text-sm md:text-2xl lg:text-3xl  font-medium leading-tight max-w-[1000px] mx-auto">
            Unlock Your <span className="text-primary">True Potential</span> with the <br className="md:hidden" />
            <span className="text-primary">Player Evaluation</span> Program
          </p>
        </div>
      </div>
    </div>
  );
};

export default StopGuessing;
