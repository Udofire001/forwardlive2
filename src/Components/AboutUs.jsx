import React from "react";
import Footer from "./Footer";

import {
  FaBuilding,
  FaHome,
  FaCity,
  FaWarehouse,
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

import house from "../assets/Artboard.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <section className="mt-17 px-6 md:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left */}
          <div>
            <h2 className="text-3xl font-bold text-[#84191B] mb-4">
              About Us/ Mission
            </h2>
            <p className="text-gray-600 text-md mb-4 leading-relaxed">
              Stagnant water smells, a caged eagle might never come to the
              realization of its soaring abilities. In the same way, anyone who
              does not deliberately push themselves outside their comfort zone
              might never experience growth.
            </p>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              The journey of growth, personal development, and building one’s
              leadership potential can be a lonely one, particularly for young
              individuals navigating their careers or business. While passion
              and creativity abound, the lack of access to proven leadership
              frameworks and actionable strategies from those who have navigated
              global landscapes can significantly hinder progress. The solution?
              The solution is to bridge the gap between where these individuals
              are and where they want to be, creating a dynamic ecosystem where
              business leaders, thought leaders, entrepreneurs, and innovative
              creatives can learn directly from global speakers and connect with
              experienced leaders, empowering them with the tools and knowledge
              necessary to maximize their impact and shape a brighter future.
              That bridge is the{" "}
              <span className="text-[#84191B] font-bold">
                {" "}
                FORWARD LIVE CONFERENCE.
              </span>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-[#84191B] mb-2">
                  Mission Description
                </h3>
                <p className="text-gray-600 text-md">
                  Our mission is{" "}
                  <span className="text-[#84191B]">
                    {" "}
                    FORWARD is here to Build, Inspire, and Transform Emerging
                    Leaders
                  </span>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#84191B] mb-2">
                  Liz Wiseman (Author, Multipliers)
                </h3>
                <p className="text-gray-600 text-md">
                  Leaders who stay in motion amplify intelligence. Those who
                  stagnate drain it.
                </p>
              </div>
            </div>

            <a>
              <button
                onClick={() =>
                  window.open(
                    "https://forms.gle/BE6WpdfubQkp1yVs9",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className=" bg-[#ED0340] text-black px-6  py-2.5 rounded-lg text-sm font-medium hover:bg-[#eD0340] transition-colors flex items-center gap-2"
              >
                Volunteer <span className="text-lg">→</span>
              </button>
            </a>
          </div>

          {/*Right Image */}
          <div className="relative">
            <img
              src={house}
              alt="Modern House"
              className="w-full h-[400px] object-cover rounded-2xl"
            />

            {/* Tour Details Badge */}
            <div className="absolute bottom-4 left-4 bg-[#eD0340] text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <FaHome className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Lives impacted</p>
                <p className="font-semibold">1,500 lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                className="bg-white rounded-2xl p-6 w-[160px] sm:w-[180px] text-center shadow-md hover:shadow-xl transition-shadow duration-300"
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
      <Footer />
    </div>
  );
};

export default AboutUs;
