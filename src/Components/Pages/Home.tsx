import React from "react";
import FullScreenVideoBackground from "../BackgroundVideo";
import SpeakerCarousel from "../SpeakerCarousel";
import Section from "../Section";
import Footer from "../Footer";
import Events from "../Events";
import Tickets from "../TicketsSection";

import {
  FaBuilding,
  FaHome,
 
  FaUsers,
} from "react-icons/fa";

const CoreValuesData = [
  {
    title: "2024 - Lives Transformed",
    count: 1500,
    unit: "Lives",
    icon: FaHome,
  },
  {
    title: "Schools",
    count: "150+",
    unit: "Schools",
    icon: FaBuilding,
  },
  {
    title: "2024 - Lives to experience",
    count: 3000,
    unit: "Forward Shift 2025",
    icon: FaUsers,
  },
];

const Home = () => {
  return (
    <div>
      <div className="font-sans">
        <FullScreenVideoBackground />
        <section className="min-h-screen text-black px-10 py-20">
           

          <section className="bg-[#84181B] py-16 px-6 md:px-20 rounded-lg">
            {/* Header */}
            <div className=" mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Key Statistics
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Forward Live Conference
              </p>
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-10">
              {CoreValuesData.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#fafafa] rounded-2xl p-6 w-[160px] sm:w-[180px] text-center shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="mb-4">
                      <IconComponent className="text-4xl text-[#84181B] mx-auto" />
                    </div>
                    <h4 className="font-semibold text-sm text-[#ED0340] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {item.count} {item.unit}
                    </p>
                  </div>
                );
              })}
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
