import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import ScrollToTopComponent from "@/components/shared/ScrollToTop/ScrollToTop";
import Footer from "@/components/shared/Footer/Footer";
// import PepWelcomePopup from "@/components/modals/pep-welcome-popup";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {/* <PepWelcomePopup /> */}
      {children}
      <ScrollToTopComponent />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
