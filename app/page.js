"use client";
import Banner from "@/components/Banner";
import Essentials from "@/components/Essentials";
import Footer from "@/components/Footer";
import Invest from "@/components/Invest";
import Marquee from "@/components/Marquee";
import MarqueePartners from "@/components/MarqueePartners";
import Method from "@/components/Method";
import Navbar from "@/components/Navbar";
import TopEssentials from "@/components/TopEssential";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      {/* {!isMenuOpen && <Marquee />} */}
      <div className="bg-banner">
      <Marquee />
      <div className="gradient relative">
      <span className="gradient-banner w-[22%] md:w-[30%]"></span>
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="bg-center bg-cover min-h-[calc(100vh-120px)]">
          <Banner />
        </div>
        </div>
        </div>
         <Invest /> 
        {/* <Transform /> */}
        <Method />
        <Essentials />
        <Footer />

    </div>
  );
}
