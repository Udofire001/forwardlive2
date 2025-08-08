import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logog.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#84191B] sticky top-0 left-0 w-full z-30 flex items-center justify-between px-6 lg:px-16 py-4 text-white">
      {/* Left logos */}
      <Link to="/" className="flex items-center gap-6">
        <img src={logo} alt="Forward Conference" className="h-10" />
      </Link>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        {[
          { text: "About US", to: "/aboutus" },
          
          { text: "Speakers", to: "/speakers" },
          { text: "Tickets", to: "/tickets" },
        ].map(({ text, to }) => (
          <a
            href={to}
            key={text}
            className="relative bg-[#fff] text-black text-xs font-semibold px-4 py-2 overflow-hidden"
          >
            <span className="relative z-10">{text}</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ed0340] z-0" />
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden relative">
        <button
          onClick={toggleMobileMenu}
          className="text-xl cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-14 right-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl min-w-max z-50 transform transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <a
            href="/"
            onClick={closeMobileMenu}
            className="block py-3 px-4 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 rounded-t-lg"
          >
            🏠 Home
          </a>
          <a
            href="/tickets"
            onClick={closeMobileMenu}
            className="block py-3 px-4 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text transition-all duration-300"
          >
            ✨ Tickets
          </a>
          <a
            href="/speakers"
            onClick={closeMobileMenu}
            className="block py-3 px-4 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 rounded-b-lg"
          >
            📞 Speakers
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop (optional - closes menu when clicking outside) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
