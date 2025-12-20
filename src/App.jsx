import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection"; 
import ProjectsSection from "./pages/ProjectsSection";
import SkillsSection from "./pages/SkillsSection";
import ContactSection from "./pages/ContactSection";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div
      className="
        relative font-sans
        text-gray-800 dark:text-gray-100
        bg-[#fffefc] dark:bg-[#1E1A17]
        transition-colors duration-300
      "
    >
      <Navbar />

      <main className="px-6 space-y-32">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
