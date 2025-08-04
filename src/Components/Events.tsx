import React, { useState, useEffect } from "react";
import image from "../assets/Gallery/203A4638.jpg";
import image1 from "../assets/Gallery/203A4641.jpg";
import image2 from "../assets/Gallery/203A4642.jpg";
import image3 from "../assets/Gallery/203A4645.jpg";
import image4 from "../assets/Gallery/203A4646.jpg";
import image5 from "../assets/Gallery/203A4647.jpg";
import image6 from "../assets/Gallery/203A4657.jpg";
import image7 from "../assets/Gallery/203A4658.jpg";
import image8 from "../assets/Gallery/203A4660.jpg";
import image9 from "../assets/Gallery/203A4784.jpg";
import image10 from "../assets/Gallery/203A4786.jpg";
import image11 from "../assets/Gallery/203A4787.jpg";
import image12 from "../assets/Gallery/203A4791.jpg";
import image13 from "../assets/Gallery/203A4792.jpg";
import image14 from "../assets/Gallery/203A4795.jpg";
import image15 from "../assets/Gallery/203A4796.jpg";
import image16 from "../assets/Gallery/203A4797.jpg";
import image17 from "../assets/Gallery/203A4811.jpg";
import image18 from "../assets/Gallery/DSC_2148.jpg";
import image19 from "../assets/Gallery/EMF_8568.jpg";
import image20 from "../assets/Gallery/203A4797.jpg";

import feed from "../assets/Gallery/203A4812.jpg";
import feed1 from "../assets/Gallery/203A4828.jpg";
import feed2 from "../assets/Gallery/203A4838.jpg";
import feed3 from "../assets/Gallery/203A4839.jpg";
import feed4 from "../assets/Gallery/203A4877.jpg";
import feed5 from "../assets/Gallery/203A4891.jpg";
import feed6 from "../assets/Gallery/203A4894.jpg";
import feed7 from "../assets/Gallery/203A4896.jpg";
import feed8 from "../assets/Gallery/203A4897.jpg";
import feed9 from "../assets/Gallery/DSC_2077.jpg";
import feed10 from "../assets/Gallery/DSC_2082.jpg";
import feed11 from "../assets/Gallery/DSC_2085.jpg";
import feed12 from "../assets/Gallery/EMF_8597.jpg";
import feed13 from "../assets/Gallery/EMF_8620.jpg";
import feed14 from "../assets/Gallery/EMF_8627.jpg";
import feed15 from "../assets/Gallery/DSC_2082.jpg";
import feed16 from "../assets/Gallery/DSC_2085.jpg";
import feed17 from "../assets/Gallery/DSC_2087.jpg";
import feed18 from "../assets/Gallery/EMF_8535.jpg";
import feed19 from "../assets/Gallery/EMF_8551.jpg";
import feed20 from "../assets/Gallery/203A4787.jpg";

const images = [
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

const feeds = [
  feed,
  feed1,
  feed2,
  feed3,
  feed4,
  feed5,
  feed6,
  feed7,
  feed8,
  feed9,
  feed10,
  feed11,
  feed12,
  feed13,
  feed14,
  feed15,
  feed16,
  feed17,
  feed18,
  feed19,
  feed20,
];

const Events = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [feedIndex, setFeedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play for image carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Auto-play for feed carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setFeedIndex((prev) => (prev + 1) % feeds.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section
      className="relative bg-[#fafafa] py-20 px-6 md:px-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="uppercase font-semibold text-[#84191B] text-xl mb-14">
        Forward 2025 - AUDACITY TO LEAD Forward 2025 - AUDACITY TO LEAD Forward
        2025 - AUDACITY TO LEADForward 2025 - AUDACITY TO LEAD
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Left Image Carousel */}
        <div className="relative w-full max-w-md md:max-w-lg flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full transform translate-x-2 translate-y-2 z-0 opacity-40">
            <img
              src={images[imgIndex]}
              alt={`gallery-${imgIndex}`}
              className="w-full h-auto object-contain grayscale contrast-200"
              style={{ filter: "drop-shadow(0 0 10px red)" }}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full transform -translate-x-2 -translate-y-2 z-0 opacity-40">
            <img
              src={images[imgIndex]}
              alt={`gallery-${imgIndex}`}
              className="w-full h-auto object-contain grayscale contrast-200"
              style={{ filter: "drop-shadow(0 0 10px dodgerblue)" }}
            />
          </div>
          <img
            src={images[imgIndex]}
            alt={`gallery-${imgIndex}`}
            className="relative z-10 w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-500"
          />
        </div>

        {/* Right Feed Carousel */}
        <div className="relative w-full max-w-md md:max-w-lg flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full transform translate-x-2 translate-y-2 z-0 opacity-40">
            <img
              src={feeds[feedIndex]}
              alt={`feed-${feedIndex}`}
              className="w-full h-auto object-contain grayscale contrast-200"
              style={{ filter: "drop-shadow(0 0 10px red)" }}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full transform -translate-x-2 -translate-y-2 z-0 opacity-40">
            <img
              src={feeds[feedIndex]}
              alt={`feed-${feedIndex}`}
              className="w-full h-auto object-contain grayscale contrast-200"
              style={{ filter: "drop-shadow(0 0 10px dodgerblue)" }}
            />
          </div>
          <img
            src={feeds[feedIndex]}
            alt={`feed-${feedIndex}`}
            className="relative z-10 w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-500"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <a
          href="https://tix.africa/discover/forward-live-with-reo-audacity-to-lead/checkout?step=tickets"  
          target="_blank"
          rel="noopener noreferrer"
          className="group px-6 py-3 bg-[#84191b] hover:bg-blue-600 text-white font-bold rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
        >
          <span className="text-xs sm:text-sm md:text-base">
            SECURE YOUR TICKETS
          </span>
        </a>
      </div>
    </section>
  );
};

export default Events;
