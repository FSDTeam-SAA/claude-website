import React from "react";
// import NewHomeContainer from "../../_components/new-home-container";
import OurMission from "./our-mission";
import WhatDoWeOffer from "./what-do-we-offer";
import HowOurAnalytics from "./how-our-analytics";
import WhyChooseAnalytic from "./why-choose-analytic";
import WhyDataMatters from "./why-data-matters";
import HowToBook from "./how-to-book";

const DataContainer = () => {
  return (
    <div className="py-6 md:py-10 lg:py-14">
      <OurMission />
      <WhatDoWeOffer />
      <HowOurAnalytics />
      <WhyChooseAnalytic />
      <WhyDataMatters />
      <HowToBook />
      {/* <NewHomeContainer /> */}
    </div>
  );
};

export default DataContainer;
