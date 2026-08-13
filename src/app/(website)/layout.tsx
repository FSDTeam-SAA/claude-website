import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollToTopComponent from "@/components/shared/ScrollToTop/ScrollToTop";
import React from "react";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
        <ScrollToTopComponent />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
