import React from "react";
import U19ToU23Hero from "./u19-u23-hero";
import StopWaiting from "./stop-waiting";
import BuildForEveryPlayer from "./build-for-every-player";
import TheBenefits from "../../player-evaluation-program/_components/the-benefits";
import OurCommitment from "../../player-evaluation-program/_components/our-commitment";
import WhatDoWeOffer from "../../player-evaluation-program/_components/what-do-we-offer";
import HowToBookYourSpot from "./how-to-book-your-spot";

import FiveStepsToGuide from "./five-steps-to-guide";

const U19ToU23Container = () => {
  return (
    <div className="!bg-white ">
      <U19ToU23Hero />


      <OurCommitment />
      <WhatDoWeOffer />

      <FiveStepsToGuide/>

      <TheBenefits />

      <BuildForEveryPlayer />
      <StopWaiting />

      <HowToBookYourSpot/>
    </div>
  );
};

export default U19ToU23Container;
