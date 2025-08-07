import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Logog.png";

const Footer = () => {
  return (
    <footer className="bg-[#020f1f] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/3">
            <img src={logo} alt="Forward Logo" className="h-12 mb-4" />
            <p className="text-sm mb-6">
              HOUSE ON THE ROCK | ROCK EVENT CENTRE | Abuja, FCT
            </p>

            <div className="flex flex-wrap sm:flex-nowrap gap-8 text-sm font-semibold">
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Register</li>
                <li>Speakers</li>
                <li>Contact Us</li>
              </ul>
              <ul className="space-y-2">
                <li>Schedule</li>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          {/* CENTER SECTION */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-[#84191b] font-bold text-lg mb-4">STAY CONNECTED</h3>
            <form className="flex flex-col sm:flex-row items-stretch mb-3 gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full border border-white/20 bg-transparent py-2 px-4 text-white placeholder-white text-sm rounded-md sm:rounded-l-md sm:rounded-r-none outline-none focus:ring-2 focus:ring-[#84191b]"
              />
              <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-gray-200 transition">
                SEND
              </button>
            </form>
            <p className="text-xs opacity-80">
              By clicking SEND, you agree to REO’s Privacy Policy
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end">
            <h3 className="text-[#84191b] font-bold text-lg mb-4">CONNECT WITH US</h3>
            <div className="flex gap-4 text-2xl mb-6">
              <FaInstagram />
              <FaFacebookF />
              <FaXTwitter />
            </div>
            <div className="text-left lg:text-right">
              <p className="text-3xl font-bold leading-tight">Forward</p>
              <p className="text-3xl font-bold leading-tight">Live</p>
              <p className="text-3xl font-bold leading-tight">Conference</p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-12 pt-4 text-xs text-center opacity-60">
          Site by © Crypt Technologies 2025 | <span className="underline">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;