import React from "react";
import Tickets from "./TicketsSection";
import Video from "../assets/video1.mp4";

const RegistrationSection = () => {
  return (
    <div className="relative z-10 bg-[#fafafa] py-4 px-4 w-full">
      <h2 className="text-xl px-7 md:text-3xl font-bold text-[#84191B]">
        Get Your Tickets
      </h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main heading */}
        <div className="text-center mb-4 sm:mb-7">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 relative z-10 leading-tight sm:leading-snug">
            <span className="text-black">SAVE YOUR </span>
            <span className="text-[#84191b]">SEAT</span>
          </h1>
        </div>

        {/* Bottom disclaimer */}
        <div className="text-center mt-4 sm:mt-4 text-gray-500 text-xs sm:text-sm relative z-10">
          <p>
            Limited Quantity Available &nbsp;&nbsp;&nbsp; *Prices are subject to
            change
          </p>
        </div>
      </div>
      <Tickets />
    </div>
  );
};

const OrlandoHeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/*  Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover object-top z-0"
        style={{ width: "1400px", height: "700px" }}
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content 
      <div className="relative z-20 mt-17 flex flex-col justify-center items-center h-full px-4 text-center">
        
        <div className="text-[#84191b] font-semibold text-lg mb-6 tracking-wide">
          Abuja, FCT
        </div>

        {/* Main heading
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block">#Forward Live</span>
          <span className="block">Audacity To Lead</span>
        </h1> 
      </div>  */}
    </div>
  );
};

const Section = () => {
  return (
    <div>
      <RegistrationSection />
      <OrlandoHeroSection />
    </div>
  );
};

export default Section;
