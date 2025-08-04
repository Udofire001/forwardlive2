import { FaTicketAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const FloatingTicketButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300); // Delay to animate in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-20 right-6 sm:right-10 z-50 transition-all duration-700 ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <a
        href="https://tix.africa/discover/forward-live-with-reo-audacity-to-lead/checkout?step=tickets"
        target="_blank"
        rel="noopener noreferrer"
        className="group px-6 py-4 bg-[#84191b] hover:bg-[#6f1416] text-white font-bold rounded-xl shadow-2xl flex flex-col items-center transition-all duration-300 transform hover:scale-105 animate-pulse backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-1">
          <FaTicketAlt className="text-white text-lg animate-bounce group-hover:animate-none" />
          <span className="text-lg font-bold tracking-wide">Forward 2025</span>
        </div>
        <span className="text-xs sm:text-sm md:text-base tracking-wider">
          SECURE YOUR TICKETS
        </span>
      </a>
    </div>
  );
};

export default FloatingTicketButton;