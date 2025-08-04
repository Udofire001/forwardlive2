import React from "react";
import Navbar from "./Navbar";
import video from "../assets/main.mp4";

 
const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video - Full Coverage */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        style={{
          // Ensure video covers entire viewport regardless of aspect ratio
          minWidth: '100%',
          minHeight: '100%',
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Hero Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-between text-white">
        
        {/* Centered Main Content */}
        <div className="flex flex-col justify-center items-center text-center flex-1 px-6 pt-20">
          
          {/* ILS Logo/Icon */}
          <div className="mb-8">
            <img 
              src="/ils-icon.svg" 
              alt="International Leadership Summit Icon" 
              className="h-16 md:h-20 w-auto mx-auto"
            />
          </div>

          {/* Main Text Content */}
          <div className="space-y-4">
            {/* "INTERNATIONAL" text */}
            <p className="uppercase text-sm md:text-base tracking-[0.3em] font-medium opacity-90 mb-2">
              International
            </p>
            
            {/* Main "LEADERSHIP SUMMIT" heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tight">
              <span className="block">LEADERSHIP</span>
              <span className="block">SUMMIT</span>
            </h1>
            
            {/* Year */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-light mt-6 opacity-95">
              2025
            </p>
          </div>
        </div>

        {/* Bottom Section - Event Details & CTA Buttons */}
        <div className="px-6 lg:px-8 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
              
              {/* Left Side - Event Information */}
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-1">
                  April 10–12
                </h2>
                <p className="text-sm md:text-base opacity-90 leading-relaxed">
                  Orange County Convention Center, Orlando, FL
                </p>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 min-w-max">
                
                {/* Play Video Button */}
                <button className="group px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-lg">▶</span>
                    <span className="text-sm md:text-base">PLAY VIDEO</span>
                  </span>
                </button>

                {/* Register Button */}
                <button className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                    REGISTER
                  </span>
                  <br className="sm:hidden" />
                  <span className="text-xs sm:text-sm md:text-base">
                    SECURE YOUR TICKETS
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Optional - appears on original site) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden lg:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;