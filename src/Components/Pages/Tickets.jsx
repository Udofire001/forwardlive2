import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaCheck,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

import Executive from "../../assets/ticket11.png";
import Standard from "../../assets/ticket22.png";
import Corporate from "../../assets/ticket3.png";
import Premium from "../../assets/ticket4.png";
import Platinum from "../../assets/ticket55.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

const TicketsPage = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const ticketTypes = [
    {
      id: 1,
      name: "Early Bird",
      price: "10k",
      originalPrice: 5,
      description:
        "Perfect for individual attendees looking to join the conference at a discounted rate.",
      image: [Standard],
      features: [
        "Access to all conference sessions, all keynote, speeches and discussions",
        "Networking Opportunities",
        "General seating row",
        "Light Refreshments",
      ],
      badge: "LIMITED ",
      color: "from-[#84191B] to-red-700",
      popular: false,
      savings: 5,
    },
    {
      id: 2,
      name: "Executive",
      price: "20k",
      originalPrice: null,
      description:
        "The complete conference experience with all sessions and networking opportunities.",

      image: Executive,
      features: [
        "Access to all conference sessions",
        "Networking Opportunities",
        "Executive Service",
        "Reserved Front-row seating in all sessions",
        "Forward Live with REO writing Merch",
        "Light Refreshments",
      ],
      badge: " POPULAR",
      color: "from-purple-600 to-pink-600",
      popular: true,
      savings: null,
    },
    {
      id: 3,
      name: " Premium",
      price: "50k",
      originalPrice: null,
      description:
        "Ultimate conference experience with exclusive access and premium benefits.",
      image: Premium,
      features: [
        "Fastrack registration Entry",
        "Priority Seating",
        "Refreshments",
        "Media priority for pictures",
        "Access to networking with speakers",
        "Customized Forward Live with REO writing Merch, and Tote Bag",
      ],
      badge: "EXCLUSIVE",
      color: "from-blue-600 to-blue-600",
      popular: false,
      savings: null,
    },
    {
      id: 4,
      name: "VVIP Platinum",
      price: "100k",
      originalPrice: null,
      description:
        "Ultimate conference experience with exclusive access and premium benefits.",

      image: Platinum,
      features: [
        "Executive Priority entry service",
        "Reserved Front-row seating in all sessions",
        "Access to networking with speakers",
        "Customized REO wear, writing Merch and Pen(in a branded FORWARD Tote bag) ",
        "Access to conference replays",
        "Special Recognition",
        "Executive Leadership Masterclass with REO",
        "VIP Refreshment",
      ],
      badge: "EXCLUSIVE",
      color: "from-green-600 to-green-600",
      popular: false,
      savings: null,
    },
    {
      id: 5,
      name: "VVIP Corporate",
      price: "1M",
      originalPrice: null,
      description:
        "Ultimate conference experience with exclusive access and premium benefits.",

      image: Corporate,
      features: [
        "Corporate ticket for 5 people",
        "Pictures with Speakers and Special Guests",
        "Designated seating area for Organization CEO/ Repesentatives",
        "Special recognition by the Mc/Host during the event",
        "Recognition on all social media platforms as partner",
        "Executive Leadership Masterclass with REO",
        "Certificate of Recognition as a FORWARD-THINKING ORGANIZATION by DYL",
        "Forward Merch for representatives",
      ],
      badge: "EXCLUSIVE",
      color: "from-gray-500 to-gray-700",
      popular: false,
      savings: null,
    },
  ];

  const conferenceDetails = {
    date: "Saturday, October 25 2025",
    location: "Rock Event Center,House on the Rock, Abuja",
    time: "8:00 AM - 4:00 PM  UTC",
  };

  return (
    <>
      <Navbar />
      <div className=" ">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#84191B] to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get Your Tickets
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Join us for an unforgettable conference experience
            </p>

            {/* Conference Details */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#ed0340]" />
                <span>{conferenceDetails.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#ed0340]" />
                <span>{conferenceDetails.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#ed0340]" />
                <span>{conferenceDetails.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tickets Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Experience
            </h2>
            <p className="text-xl text-gray-600">
              Select the perfect ticket type for your conference journey
            </p>
          </div>

          {/* Ticket Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {ticketTypes.map((ticket) => (
              <div
                key={ticket.id}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
                  ticket.popular
                    ? "ring-4 ring-[#ed0340] ring-opacity-50 scale-105"
                    : ""
                }`}
              >
                {/* Popular Badge */}
                {ticket.popular && (
                  <div className="absolute top-4 right-4 bg-[#ed0340] text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1 z-10 shadow-lg">
                    <FaStar className="text-xs" />
                    {ticket.badge}
                  </div>
                )}

                {/* Other Badges */}
                {!ticket.popular && (
                  <div
                    className={`absolute top-4 right-4 bg-gradient-to-r ${ticket.color} text-white px-4 py-2 rounded-full font-semibold text-sm z-10 shadow-lg`}
                  >
                    {ticket.badge}
                  </div>
                )}

                {/* Savings Badge */}
                {ticket.savings && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm z-10 shadow-lg">
                    Save ₦{ticket.savings}
                  </div>
                )}

                {/* Ticket Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={`${ticket.name} Ticket`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Price Overlay on Image */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">
                        ₦{ticket.price}
                      </span>
                      {ticket.originalPrice && (
                        <span className="text-lg line-through opacity-75">
                          ₦{ticket.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm opacity-90">per person</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Ticket Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {ticket.name}
                    </h3>
                    <p className="text-gray-600">{ticket.description}</p>
                  </div>

                  {/* Features - Show only first 4 to save space */}
                  <div className="space-y-2 mb-6">
                    {ticket.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0 text-sm" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {ticket.features.length > 3 && (
                      <p className="text-[#84191B] font-semibold text-sm">
                        +{ticket.features.length - 3} more benefits
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedTicket(ticket)}
                    className={`w-full bg-red-500 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ₦{ticket.color} hover:shadow-lg flex items-center justify-center gap-2`}
                  >
                    <FaShoppingCart />
                    Select {ticket.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaUsers className="text-[#ed0340]" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access to all keynote presentations</li>
                  <li>• Interactive workshop sessions</li>
                  <li>• Networking opportunities with Speakers</li>
                  <li>• Digital resources and presentation materials</li>
                  <li>• Certificate of attendance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Need Help?
                </h3>
                <p className="text-gray-700 mb-4">
                  Have questions about tickets or need assistance? Our team is
                  here to help.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> @forwardliveconferencewithreo
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> +234 (0) 123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Modal/Confirmation */}
        {selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto">
              <div className="text-center mb-6">
                <img
                  src={selectedTicket.image}
                  alt={`${selectedTicket.name} Ticket`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedTicket.name} Ticket
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-[#84191B]">
                    ₦{selectedTicket.price}
                  </span>
                  {selectedTicket.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ₦{selectedTicket.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  What's included:
                </h4>
                <div className="space-y-2">
                  {selectedTicket.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="flex-1 py-3 px-6 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    window.location.href =
                      "https://tix.africa/discover/forward-live-with-reo-audacity-to-lead/checkout?step=tickets";
                    setSelectedTicket(null);
                  }}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-[#84191B] to-red-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TicketsPage;
