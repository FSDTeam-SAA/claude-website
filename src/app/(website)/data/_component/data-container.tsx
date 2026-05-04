import React from "react";
import NewHomeContainer from "../../_components/new-home-container";
import OurMission from "./our-mission";
import WhatDoWeOffer from "./what-do-we-offer";

const DataContainer = () => {
  return (
    <div className="py-20">
      <OurMission />
      <WhatDoWeOffer/>
      <NewHomeContainer />
    </div>
  );
};

export default DataContainer;
