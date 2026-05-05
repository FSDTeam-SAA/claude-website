import React from "react";
import PlayerEvaluationProgramContainer from "../(website)/player-evaluation-program/_components/player-evaluation-program-container";
import PepHero from "../(website)/player-evaluation-program/_components/pep-hero";
import StopGuessing from "../(website)/player-evaluation-program/_components/stop-guessing";
import HowToBook from "../(website)/player-evaluation-program/_components/how-to-book";
import ItTimeFor from "../(website)/player-evaluation-program/_components/it-time-for";
import TheThreeFlaws from "../(website)/player-evaluation-program/_components/the-three-flaws";
// import HeroSection from '../(website)/_components/hero-section'
// import OurPartners from './_components/our-partners'
// import { FaqSection } from './_components/faq-section'
// import WhyDataMatters from '../(website)/_components/why-data-matters'
// import WhyYouNeedAProfile from '../(website)/_components/why-you-need-profile'
// import WhyWeAreUnique from '../(website)/_components/why-we-are-unique'
// import HowOurAnalytics from '../(website)/_components/how-our-analytics'
// import AccessThePlatform from './_components/access-the-platform'
// import WhatDoWeOffer from '../(website)/_components/what-do-we-offer'
// import OurMission from '../(website)/_components/our-mission'
// import NewHomeContainer from '../(website)/_components/new-home-container'

const HomePage = () => {
  return (
    <div>
      <>
        {/* <HeroSection /> */}

        {/* <NewHomeContainer/> */}



        {/* new page start  */}

        <PepHero />
        <TheThreeFlaws />
        <ItTimeFor />



        <StopGuessing />
        <HowToBook />

        {/* new page end  */}

        <PlayerEvaluationProgramContainer />

        {/* <OurMission/>
                <WhatDoWeOffer/>
                <HowOurAnalytics/>
                <WhyWeAreUnique/>
                <WhyYouNeedAProfile/>
                <WhyDataMatters/> */}

        {/* <AccessThePlatform/> */}

        {/* <OurPartners/> */}
        {/* <FaqSection /> */}
      </>
    </div>
  );
};

export default HomePage;
