import React from "react";
import { Link } from "react-router-dom";
import speakers from "../../assets/data/Speaker"; 
import Navbar from "../Navbar";
import Footer from "../Footer";

 

const SpeakersList = () => {
  return (
    <div className="bg-white mt-10 min-h-screen">
      <Navbar />

      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-[#1B3A2D] mb-6">Featured Speakers</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <Link
              to={`/speakers/${speaker.id}`}
              key={speaker.id}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300"
            >
              <img
                src={speaker.images[0]}
                alt={speaker.title}
                className="w-full aspect-[3/2] object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{speaker.title}</h3>
                <p className="text-sm text-gray-600">{speaker.location}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                    speaker.label === "SPEAKER"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {speaker.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeakersList;