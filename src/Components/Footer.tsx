import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../assets/Logog.png"

const Footer = () => {
  return (
    <footer className="bg-[#020f1f] text-white pt-12 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 relative z-10">
          {/* LEFT SECTION */}
          <div className="lg:w-1/3">
            <img
              src={logo} 
              alt="Forward Logo"
              className="h-12 mb-4"
            />  
            <p className="text-sm mb-6">
             HOUSE ON THE ROCK | ROCK EVENT CENTRE | Abuja, FCT
            </p>

            <div className="flex gap-12 text-sm font-semibold">
              <ul className="space-y-2">
                <li>About US</li>
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

            <div className="mt-6">
              <p className="text-[#84191b] font-bold mb-2">Forward Live 2025</p>
              <div className="flex gap-6 text-sm font-semibold">
                
                <span className="border-l-2 border-[#84191b] pl-2">Volunteer</span>
              </div>
            </div>
          </div>

          {/* CENTER SECTION */}
          <div className="lg:w-1/3">
            <h3 className="text-[#84191b] font-bold text-lg mb-4">STAY CONNECTED</h3>
            <form className="flex items-center mb-3">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full border py-2 px-4 text-white rounded-l-md"
              />
              <button className="bg-white text-black px-6 py-2 rounded-r-md hover:bg-gray-200 font-semibold">
                SEND
              </button>
            </form>
            <p className="text-xs">
              By clicking SEND, you agree to REO’s Privacy Policy
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:w-1/3 flex flex-col items-start lg:items-end">
            <h3 className="text-[#84191b] font-bold text-lg mb-4">CONNECT WITH US</h3>
            <div className="flex gap-4 text-2xl mb-6">
              <FaInstagram />
              <FaFacebookF />
              <FaXTwitter />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold leading-none">Forward</p>
              <p className="text-3xl font-bold leading-none">Live</p>
              <p className="text-3xl font-bold leading-none">Conference</p>
            </div>
            
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-12 pt-4 text-sm text-center opacity-80">
         Site By © 2025 Crypt Technologies | <span className="underline">Privacy Policy</span>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;