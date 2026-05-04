import React from "react";
import NewHomeContainer from "../../_components/new-home-container";
import OurMission from "./our-mission";
import WhatDoWeOffer from "./what-do-we-offer";
import HowOurAnalytics from "./how-our-analytics";

const DataContainer = () => {
  return (
    <div className="py-20">
      <OurMission />
      <WhatDoWeOffer/>
      <HowOurAnalytics/>
      <NewHomeContainer />
    </div>
  );
};

export default DataContainer;
