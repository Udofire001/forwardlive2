import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaHome } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { BsCalendar2Date } from "react-icons/bs";
import Navbar from "../Navbar";
import Footer from "../Footer";
import speakers from "../../assets/data/Speaker";

const SpeakerDetails = () => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const speaker = speakers.find((s) => s.id === parsedId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!speaker) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-red-600 text-2xl font-bold">Speaker Not Found</h2>
          <Link to="/speakers" className="text-blue-500 underline mt-4 block">
            Return to Speakers
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % speaker.images.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + speaker.images.length) % speaker.images.length
    );

  return (
    <div className="min-h-screen mt-10 bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Main Image Section */}
        <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg mb-6 aspect-[3/4]">
          <img
            src={speaker.images[currentImageIndex]}
            alt={`Speaker ${speaker.title}`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-[#84191b] text-3xl font-bold mb-2">{speaker.title}</h1>
              <p className="text-gray-600 mb-4">{speaker.location}</p>
              <div className="flex gap-4 flex-wrap text-sm">
                <div className="bg-[#84191b] text-white px-3 py-2 rounded-lg flex items-center gap-2">
                  <span>Speaker</span>
                </div>
                <div className="bg-[#84191b] text-white px-3 py-2 rounded-lg flex items-center gap-2">
                  {speaker.accolades}
                </div>
                <div className="bg-[#84191b] text-white px-3 py-2 rounded-lg flex items-center gap-2">
                  <BsCalendar2Date className="text-gray-100" />
                  <span>2025</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-[#84191b] text-2xl font-semibold mb-4">Speaker Biography</h2>

              {Array.isArray(speaker.details) &&
                speaker.details.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          {/* Sidebar */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpeakerDetails;
