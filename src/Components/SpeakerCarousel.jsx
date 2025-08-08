import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Speaker2 from "../assets/PSTUCHE.png";
import Speaker3 from "../assets/GeneralLucky.png";
import Speaker4 from "../assets/DrJumokeOduwole.png";
import Speaker5 from "../assets/IbukunAdebayo.png";
import Speaker6 from "../assets/SeunOkinbaloye.png";
import Speaker7 from "../assets/KIKIOSINBAJO.png";

import Speakers1 from "../assets/Speakers/Elvis.png";
import Speakers2 from "../assets/Speakers/Ibukun.png";
import Speakers3 from "../assets/Speakers/Jumoke.png";
import Speakers4 from "../assets/Speakers/KIKI.png";
import Speakers5 from "../assets/Speakers/Lucky.png";
import Speakers6 from "../assets/Speakers/Mosope.png";
import Speakers7 from "../assets/Speakers/Pelumi.png";
import Speakers8 from "../assets/Speakers/REO.png";
import Speakers9 from "../assets/Speakers/Seun.png";
import Speakers10 from "../assets/Speakers/UCHE.png";

const speakers = [
  {
    name: "PASTOR Uche Aigbe",
    role: "Keynote",
    image: Speakers10,
  },
  {
    name: "General Lucky",
    role: "Speaker",
    image: Speakers5,
  },
  {
    name: "Dr Jumoke Oduwole",
    role: "Keynote",
    image: Speakers3,
  },
  {
    name: "Dr Ibukun Adebayo",
    role: "Keynote",
    image: Speakers2,
  },
  {
    name: "Miss KiKi Osinbajo",
    role: "Speaker",
    image: Speakers4,
  },
  {
    name: "Seun Okinbaloye",
    role: "Speaker",
    image: Speakers9,
  },
  {
    name: "Dr Elvis Abuyere",
    role: "Speaker",
    image: Speakers1,
  },
  {
    name: "Mosope Olaosebikan",
    role: "speaker",
    image: Speakers6,
  },
  {
    name: "Barr Pelumi Olajengbesin",
    role: "Speaker",
    image: Speakers7,
  },
  {
    name: "Pastor Rotiba Emmanuel",
    role: "Key Speaker",
    image: Speakers8,
  },
];

const SpeakerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = speakers.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (!isHovered && total > 1) {
      const interval = setInterval(next, 7000); // Change every 7s
      return () => clearInterval(interval);
    }
  }, [current, isHovered, total]);

  const speaker = speakers[current];

  return (
    <div>
      <h2 className="text-xl px-7 md:text-3xl font-bold text-[#84191B]">
        Featured Speakers
      </h2>
      <section
        className="relative bg-[#fafafa] py-10 px-6 md:px-16 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <h1 className="uppercase font-semibold bg-[#84191b] text-white text-xl mb-10 inline-block">
              Forward 2025 - AUDACITY TO LEAD Forward 2025 - AUDACITY TO LEAD
              Forward 2025 - AUDACITY TO LEAD Forward 2025 - AUDACITY TO LEAD
              Forward 2025 - AUDACITY TO LEAD Forward 2025 - AUDACITY TO LEAD
              Forward 2025 - AUDACITY TO LEAD Forward 2025 - AUDACITY TO LEAD
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* Centered Image Section */}
          <div className="relative w-full max-w-md md:max-w-lg flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-full transform -translate-x-2 -translate-y-2 z-0 opacity-10 transition-all duration-500">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-auto object-contain grayscale contrast-200"
                style={{ filter: "drop-shadow(0 0 10px dodgerblue)" }}
              />
            </div>

            {/* Main Image */}
            <img
              src={speaker.image}
              alt={speaker.name}
              className="relative z-10 w-full max-h-[477px] object-contain rounded-xl shadow-2xl transition-all duration-500"
              key={current}
            />

            {/* Name Overlay */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-6 py-2 rounded-full shadow-md text-center transition-all duration-500">
              <p className="text-sm text-[#ED0340] font-semibold uppercase tracking-wide">
                {speaker.role}
              </p>
              <h3 className="text-xl font-bold text-black mt-7">
                {speaker.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Progress Dots 
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {speakers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-[#ED0340] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div> */}

        {/* Left Chevron */}
        <div className="absolute top-1/2 left-17 -translate-y-1/2 z-20 hidden sm:block">
          <button
            onClick={prev}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronLeft className="text-xl text-[#ED0340]" />
          </button>
        </div>

        {/* Right Chevron */}
        <div className="absolute top-1/2 right-17 -translate-y-1/2 z-20 hidden sm:block">
          <button
            onClick={next}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronRight className="text-xl text-[#ED0340]" />
          </button>
        </div>

        {/* Autoplay indicator
      <div className="absolute top-4 right-4 z-20">
        <div
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
            isHovered
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {isHovered ? "Paused" : "Auto-playing"}
        </div>
      </div>   */}

        {/* CTA Button */}
      </section>

      <div className="text-center mt-7">
        <a
          href="/speakers"
          rel="noopener noreferrer"
          className="group px-6 py-3 bg-[#84191b] hover:bg-blue-600 text-white font-bold rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
        >
          <span className="text-xs sm:text-sm md:text-base">
            SEE ALL SPEAKERS
          </span>
        </a>
      </div>
    </div>
  );
};

export default SpeakerCarousel;
