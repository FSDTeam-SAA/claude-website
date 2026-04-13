import React from "react";
// import ContactHero from './_components/contact-hero'
// import ActivateYourProfile from './_components/activate-your-profile'
import ContactInformation from "./_components/contact-information";
import ProjectLeader from "../_components/project-leaders";
// import BuyYourDataNow from './_components/buy-your-data-now'

const ContactUsPage = () => {
  return (
    <div className="bg-white">
      {/* <ContactHero/> */}
      <ContactInformation />
      <ProjectLeader />
      {/* <BuyYourDataNow/> */}
      {/* <ActivateYourProfile/> */}
    </div>
  );
};

export default ContactUsPage;
