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


import Executive from "../assets/ticket1.png";
import Standard from "../assets/ticket22.png";
import Corporate from "../assets/ticket3.png";
import Premium from "../assets/ticket4.png";
import Platinum from "../assets/ticket55.png";


const TicketsSection = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const conferenceDetails = {
    date: "March 15–17, 2025",
    location: "Tech Convention Center, Lagos",
    time: "9:00 AM – 6:00 PM Daily",
  };

  const ticketTypes = [
    {
      id: 1,
      name: "Early Bird",
      price: 10,
      originalPrice: 5,
      description:
        "Perfect for individual attendees looking to join the conference at a discounted rate.",
      image: [Standard],
      features: [
        "Access to all conference sessions",
        "Networking Opportunities",
        "General seating row",
        "Standarized Welcome",
      ],
      badge: "LIMITED ",
      color: "from-[#84191B] to-red-700",
      popular: false,
      savings: 5,
    },
    {
      id: 2,
      name: "Executive",
      price: 13,
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
        "Light Refreshment",
      ],
      badge: " POPULAR",
      color: "from-purple-600 to-pink-600",
      popular: true,
      savings: null,
    },

    {
      id: 3,
      name: " Premium",
      price: 32,
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
 
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-8 pb-24">
      {/* Ticket Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 group relative ${
              ticket.popular ? "ring-4 ring-[#ed0340] ring-opacity-50 scale-105" : ""
            }`}
          >
            {/* Badges */}
            <div className="absolute top-4 right-4 z-10">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg ${
                  ticket.popular
                    ? "bg-[#ed0340] flex items-center gap-1"
                    : `bg-gradient-to-r ${ticket.color}`
                }`}
              >
                {ticket.popular && <FaStar className="text-xs" />}
                {ticket.badge}
              </span>
            </div>

            {ticket.savings && (
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm z-10 shadow-lg">
                Save ${ticket.savings}
              </div>
            )}

            <div className="relative h-64 overflow-hidden">
              <img src={ticket.image} alt={ticket.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 text-3xl font-bold">
                  ${ticket.price}
                  {ticket.originalPrice && (
                    <span className="text-lg line-through opacity-75">${ticket.originalPrice}</span>
                  )}
                </div>
                <p className="text-sm">per person</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{ticket.name}</h3>
              <p className="text-gray-600 mb-4">{ticket.description}</p>
              <div className="space-y-2 mb-6">
                {ticket.features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCheck className="text-green-500 mt-1" />
                    {feature}
                  </div>
                ))}
                {ticket.features.length > 4 && (
                  <p className="text-[#84191B] font-semibold text-sm">
                    +{ticket.features.length - 4} more benefits
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedTicket(ticket)}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all bg-gradient-to-r ${ticket.color} flex items-center justify-center gap-2 hover:shadow-lg`}
              >
                <FaShoppingCart />
                Select {ticket.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ticket Selection Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <img src={selectedTicket.image} alt={selectedTicket.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedTicket.name} Ticket</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-3xl font-bold text-[#84191B]">${selectedTicket.price}</span>
                {selectedTicket.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">${selectedTicket.originalPrice}</span>
                )}
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">What's included:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                {selectedTicket.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <FaCheck className="text-green-500 mt-1" />
                    {feature}
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
                  alert("Redirecting to payment...");
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
    </section>
  );
};

export default TicketsSection;