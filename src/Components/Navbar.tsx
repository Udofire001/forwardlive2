import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/Logog.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#84191B] absolute top-0 left-0 w-full z-30 flex items-center justify-between px-6 lg:px-16 py-4 text-white">
      {/* Left logos */}
      <Link
      to="/"
       className="flex items-center gap-6">
        <img src={logo} alt="Forward Conference" className="h-10" />
        <div className="hidden md:flex flex-col text-xs leading-tight">
          <span className="opacity-75">Powered by</span>
          <div className="flex items-center gap-2 mt-1">
            <div className="bg-[#ed0340] text-black font-bold px-2 py-1 rounded-sm text-xs">
              Crypt Technologies
            </div>
          </div>
        </div>
      </Link>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        {[
            { text: "Tickets", to: "/tickets" },
            { text: "Speakers", to: "/speakers" },
            { text: "About US", to: "/aboutus" },
        ].map(({ text, to }) => (
          <Link
            to={to}
            key={text}
            className="relative bg-[#fff] text-black text-xs font-semibold px-4 py-2 overflow-hidden"
          >
            <span className="relative z-10">{text}</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ed0340] z-0" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-xl cursor-pointer group relative">
        <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-90 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text">
          <FaBars className="bg-[#fff] text-[#84191B] drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300" />
        </div>
        <div className="absolute top-8 right-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 min-w-max z-50">
          <Link
            to="/"
            className="block py-3 px-4 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 rounded-t-lg"
          >
            🏠 Home
          </Link>
          <Link
            to="/tickets"
            className="block py-3 px-4 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
          >
            ✨ Tickets
          </Link>
       
          <Link
            to="/speakers"
            className="block py-3 px-4 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 rounded-b-lg"
          >
            📞 Speakers
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
