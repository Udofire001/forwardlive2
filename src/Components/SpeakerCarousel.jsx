import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  { name: "PASTOR Uche Aigbe", role: "Keynote", image: Speakers10 },
  { name: "General Lucky", role: "Speaker", image: Speakers5 },
  { name: "Dr Jumoke Oduwole", role: "Keynote", image: Speakers3 },
  { name: "Dr Ibukun Adebayo", role: "Keynote", image: Speakers2 },
  { name: "Miss KiKi Osinbajo", role: "Speaker", image: Speakers4 },
  { name: "Seun Okinbaloye", role: "Speaker", image: Speakers9 },
  { name: "Dr Elvis Abuyere", role: "Speaker", image: Speakers1 },
  { name: "Mosope Olaosebikan", role: "Speaker", image: Speakers6 },
  { name: "Barr Pelumi Olajengbesin", role: "Speaker", image: Speakers7 },
  { name: "Pastor Rotiba Emmanuel", role: "Key Speaker", image: Speakers8 },
];

const SpeakerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = speakers.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (!isHovered && total > 1) {
      const interval = setInterval(next, 5000); // every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isHovered, total]);

  const speaker = speakers[current];

  return (
    <div>
      <h2 className="text-xl px-7 md:text-3xl font-bold text-[#84191B]">
        Featured Speakers
      </h2>

      <section
        className="relative bg-[#fafafa] py-10 px-6 md:px-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Speaker Image */}
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="relative w-full max-w-md md:max-w-lg flex flex-col items-center">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="relative z-10 w-full max-h-[477px] object-contain rounded-xl shadow-lg transition-opacity duration-700 ease-in-out opacity-100"
              style={{
                opacity: 1,
                transition: "opacity 0.7s ease-in-out",
              }}
            />
            <div className="absolute bottom-0 translate-y-1/2 bg-white px-6 py-2 rounded-full shadow-md text-center">
              <p className="text-sm text-[#ED0340] font-semibold uppercase tracking-wide">
                {speaker.role}
              </p>
              <h3 className="text-xl font-bold text-black mt-1">
                {speaker.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute top-1/2 left-5 -translate-y-1/2 hidden sm:block">
          <button
            onClick={prev}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronLeft className="text-xl text-[#ED0340]" />
          </button>
        </div>

        <div className="absolute top-1/2 right-5 -translate-y-1/2 hidden sm:block">
          <button
            onClick={next}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronRight className="text-xl text-[#ED0340]" />
          </button>
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center mt-7">
        <a
          href="/speakers"
          className="px-6 py-3 bg-[#84191b] hover:bg-blue-600 text-white font-bold rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
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
