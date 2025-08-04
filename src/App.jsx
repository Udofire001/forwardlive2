import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Pages/Home";
import FullScreenVideoBackground from "./Components/BackgroundVideo";
import SpeakerCarousel from "./Components/SpeakerCarousel";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import SpeakerDetails from "./Components/Pages/SpeakerDetails";
import SpeakersList from "./Components/Pages/SpeakersList";
import TicketsPage from "./Components/Pages/Tickets";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/speakers" element={<SpeakersList />} />
        <Route path="/speakers/:id" element={<SpeakerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
