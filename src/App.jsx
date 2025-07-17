import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./pages/HomeSection";
import ProjectsSection from "./pages/ProjectsSection";
import SkillsSection from "./pages/SkillsSection";
import ExperienceSection from "./pages/ExperienceSection";
import ContactSection from "./pages/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div className="relative font-sans text-gray-800 bg-[#fffefc]">
      <Navbar />
      
      <main className="px-6 space-y-32">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;