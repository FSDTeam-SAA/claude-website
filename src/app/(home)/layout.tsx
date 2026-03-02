import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import ScrollToTopComponent from "@/components/shared/ScrollToTop/ScrollToTop";
import BgFooter from "../(player-profile)/_components/bg-footer";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <ScrollToTopComponent />
      <BgFooter />
    </div>
  );
};

export default HomePageLayout;
