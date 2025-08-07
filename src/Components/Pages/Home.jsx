import React from "react";
import FullScreenVideoBackground from "../BackgroundVideo";
import SpeakerCarousel from "../SpeakerCarousel";
import Section from "../Section";
import Footer from "../Footer";
import Events from "../Events";
import Tickets from "../TicketsSection";

import { FaBuilding, FaHome, FaUsers } from "react-icons/fa";

import Reo from "../../assets/Speaker.JPG";

const Home = () => {
  return (
    <div>
      <div className="font-sans">
        <FullScreenVideoBackground />
        <section className=" text-black px-1 py-20">
          <section className="text-black px-1 py-10 overflow-x-auto">
            <div className="flex min-w-[370px] md:min-w-0 md:grid md:grid-cols-2 gap-8 items-start bg-[#faf9f6] rounded-lg px-6 md:px-20 py-10">
              {/* Left Text */}
              <div className="w-1/2 md:w-full">
                <h2 className="text-xl md:text-3xl font-bold text-[#84191B] mb-4">
                  About Mission
                </h2>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Growth begins at the edge of your comfort zone. The Forward
                  Live Conference connects driven young people with global
                  leaders to unlock leadership and personal growth.
                </p>
                <p className="text-gray-700 text-sm mb-7 leading-relaxed hidden sm:block">
                  Bridge the gap between ambition and action through practical
                  strategies, mentorship, and transformational insights.
                </p>
                <a href="/aboutus">
                  <button className="bg-[#ED0340] text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#eD0340] transition-colors flex items-center gap-2">
                    Learn More <span className="text-lg">→</span>
                  </button>
                </a>
              </div>

              {/* Right Image */}
              <div className="relative w-1/2 md:w-full">
                <img
                  src={Reo}
                  alt="Reo Life"
                  className="w-full h-[250px] md:h-[400px] object-cover object-top rounded-2xl"
                />

                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-[#eD0340] text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs shadow-md">
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <FaHome className="text-white text-xs" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-300">Lives impacted</p>
                    <p className="font-semibold">1,500 lives</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SpeakerCarousel />
          <Section />
          <Events />

          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
