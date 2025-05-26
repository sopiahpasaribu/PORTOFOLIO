import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection"; 
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative font-sans text-gray-800 bg-[#fffefc]">
      <Navbar />

      <main className="pt-24 px-6 space-y-32">

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center relative"
          data-aos="fade-up"
        >
          {/* Background Image with Edge Blur Only */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            {/* Main Background Image (clear center) */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/background (2).jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                maskImage: "radial-gradient(circle at center, black 60%, transparent 90%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 90%)",
              }}
            ></div>
            
            {/* Blurred Edge Overlay */}
            <div 
              className="absolute inset-0 w-full h-full backdrop-blur-sm"
              style={{
                maskImage: "radial-gradient(circle at center, transparent 60%, black 90%)",
                WebkitMaskImage: "radial-gradient(circle at center, transparent 60%, black 90%)",
              }}
            ></div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl z-10 p-8 bg-white/80 backdrop-blur-sm rounded-xl mx-4 shadow-lg">
            <img
              src="/1.jpg"
              alt="Sopiah Profile"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
              data-aos="zoom-in"
            />
            <div>
              <h2 className="text-4xl font-display font-bold text-[#6B4C3B] mb-4">
                Hello, I'm Sopiah
              </h2>
              <p className="text-[#7B6F61] max-w-xl">
                I'm a passionate {" "}
                <span className="text-[#6B4C3B] font-semibold">
                  Frontend Developer
                </span>{" "}
                specializing in React, HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 bg-[#E9E1D1]"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#6B4C3B] mb-6">
            Contact Me
          </h2>
          <p className="text-[#7B6F61] max-w-xl mb-6 text-sm sm:text-base leading-relaxed">
            I'm open to new opportunities and collaborations. Whether you have a
            question, a project idea, or just want to say hello, feel free to reach
            out!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/00000000?v=4"
              alt="Sopiah Profile"
              className="w-20 h-20 rounded-full border-4 border-[#6B4C3B] object-cover shadow-lg"
              data-aos="zoom-in"
            />

            <a
              href="mailto:sopiah@example.com"
              className="bg-[#6B4C3B] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#8B6E56] transition text-base sm:text-lg font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.94 6.94a1.5 1.5 0 0 1 2.12 0L10 11.88l4.94-4.94a1.5 1.5 0 1 1 2.12 2.12l-6 6a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 0-2.12z" />
              </svg>
              Say Hello
            </a>
          </div>

          <p className="text-[#7B6F61] mb-2 max-w-sm text-sm sm:text-base">
            Or find me on social media:
          </p>
          <div className="flex space-x-6 text-[#6B4C3B] text-base sm:text-lg font-semibold">
            <a href="https://github.com/sopiah" target="_blank" rel="noopener noreferrer" className="hover:text-[#A9746E] transition duration-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sopiah" target="_blank" rel="noopener noreferrer" className="hover:text-[#A9746E] transition duration-300">
              LinkedIn
            </a>
            <a href="https://twitter.com/sopiah" target="_blank" rel="noopener noreferrer" className="hover:text-[#A9746E] transition duration-300">
              Twitter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;