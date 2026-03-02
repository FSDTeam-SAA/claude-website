import React from 'react'
import HeroSection from '../(website)/_components/hero-section'
// import OurPartners from './_components/our-partners'
// import { FaqSection } from './_components/faq-section'
import WhyDataMatters from '../(website)/_components/why-data-matters'
import WhyYouNeedAProfile from '../(website)/_components/why-you-need-profile'
import WhyWeAreUnique from '../(website)/_components/why-we-are-unique'
import HowOurAnalytics from '../(website)/_components/how-our-analytics'
// import AccessThePlatform from './_components/access-the-platform'
import WhatDoWeOffer from '../(website)/_components/what-do-we-offer'
import OurMission from '../(website)/_components/our-mission'
import ProjectLeader from '../(website)/_components/project-leaders'

const HomePage = () => {
    return (
        <div>
            <>
                <HeroSection />
                <OurMission/>
                <WhatDoWeOffer/>
                <HowOurAnalytics/>
                <WhyWeAreUnique/>
                <WhyYouNeedAProfile/>
                <WhyDataMatters/>
                {/* <AccessThePlatform/> */}
                <ProjectLeader/>
                {/* <OurPartners/> */}
                {/* <FaqSection /> */}
            </>
        </div>
    )
}

export default HomePage