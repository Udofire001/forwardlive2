import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Speaker2 from "../assets/PSTUCHE.png"
import Speaker3 from "../assets/GeneralLucky.png";
import Speaker4 from "../assets/drjumokeoduwole.png";
import Speaker5 from "../assets/IbukunAdebayo.png";
import Speaker6 from "../assets/SeunOkinbaloye.png";
import Speaker7 from "../assets/KIKIOSINBAJO.png";




const speakers = [
  {
    name: "PASTOR Uche Aigbe",
    role: "Keynote",
    image: Speaker2,
  },
  {
    name: "General Lucky",
    role: "Speaker",
    image: Speaker3,
  },
  {
    name: "Dr Jumoke Oduwole",
    role: "Keynote",
    image: Speaker4,
  },
  {
    name: "Dr Ibukun Adebayo",
    role: "Keynote",
    image: Speaker5,
  },
  {
    name: "KiKi Osinbajo",
    role: "Speaker",
    image: Speaker7,
  },
  {
    name: "Seun Okinbaloye",
    role: "Speaker",
    image: Speaker6,
  }
];

const SpeakerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = speakers.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (!isHovered && total > 1) {
      const interval = setInterval(next, 1000); // Change every 1s
      return () => clearInterval(interval);
    }
  }, [current, isHovered, total]);

  const speaker = speakers[current];

  return (
    <section
      className="relative bg-[#fafafa] py-20 px-6 md:px-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="uppercase font-semibold text-[#84191B] text-xl mb-10">
        Forward 2025 - AUDACITY TO LEAD Forward 2025 - AUDACITY TO LEAD Forward
        2025 - AUDACITY TO LEAD Forward 2025 - AUDACITY TO LEAD
      </h1>

      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Centered Image Section */}
        <div className="relative w-full max-w-md md:max-w-lg flex justify-center items-center">
        
          <div className="absolute top-0 left-0 w-full h-full transform -translate-x-2 -translate-y-2 z-0 opacity-40 transition-all duration-500">
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
            className="relative z-10 w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-500"
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

      {/* Progress Dots */}
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
      </div>

      <div className="absolute top-1/2 left-24 -translate-y-1/2 z-20">
        <button
          onClick={prev}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronLeft className="text-xl text-[#ED0340]" />
        </button>
      </div>
      <div className="absolute top-1/2 right-24 -translate-y-1/2 z-20">
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
    </section>
  );
};

export default SpeakerCarousel;
