import React, { useState, useRef, useEffect } from "react";
import Video from "../assets/main.mp4";
import Navbar from "./Navbar";
import FloatingTicketButton from "./FloatingTicket";




const FullScreenVideoBackground = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [opacity, setOpacity] = useState(1); // track fading

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);




  // Fading effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // const fadeStart = 0;
      const fadeEnd = window.innerHeight * 0.7; // start fade at top, fully gone at ~70vh
      const newOpacity = Math.max(0, 1 - scrollY / fadeEnd);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    console.error("Video failed to load");
  };

  return (
    <>
      <Navbar />

      <section
        id="video-background"
        ref={sectionRef}
        className="relative min-h-screen w-full overflow-hidden"
      >
        <div className="relative min-h-screen overflow-hidden">
          {/* Video Background */}
          <div
            className="fixed inset-0 w-full h-full -z-10 transition-opacity duration-100"
            style={{ opacity }}
          >
            {!videoError ? (
              <video
                ref={videoRef}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onError={handleVideoError}
              >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-800" />
            )}
          </div>

          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black/30 -z-5 transition-opacity duration-100"
            style={{ opacity }}
          />

          {/* Hero Content */}
          <div className=" flex flex-col px-6 text-[#84191b] fixed bottom-6 left-6 z-20 transition-opacity duration-100">
            <p className="text-lg font-bold">Forward 2025</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Audacity to Lead
            </h1>
          </div>

          {/* Ticket   */}
          <FloatingTicketButton />

          {/* Video Controls */}
          <div
            className="fixed bottom-6 right-6 z-20 flex gap-3 transition-opacity duration-100"
            style={{ opacity }}
          >
            <button
              onClick={togglePlay}
              className="p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>
            <button
              onClick={toggleMute}
              className="p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullScreenVideoBackground;
