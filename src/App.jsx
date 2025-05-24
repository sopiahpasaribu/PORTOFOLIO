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
    <div className="relative font-sans text-gray-800">
      <Navbar />

      <main className="pt-24 px-6 space-y-32">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center"
          style={{
            backgroundColor: "#E9E1D1",
            transition: "all 0.5s ease",
          }}
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
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
                specializing in React, HTML, CSS, and JavaScript. I create modern,
                responsive, and user-friendly web applications that deliver great
                experiences.
              </p>
              <p className="text-[#7B6F61] max-w-xl">
                With a keen eye for design and detail, I enjoy transforming ideas
                into functional websites and apps that users love.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-[#3e2c23] px-6 py-16"
          data-aos="fade-up"
        >
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 text-[#f5e5d1]">
            <img
              src="/aboutme.jpg"
              alt="About Sopiah"
              className="w-64 h-64 object-cover rounded-md shadow-lg"
              data-aos="zoom-in"
            />

            <div className="flex-1">
              <p className="text-[#d1a374] uppercase text-sm font-semibold mb-1">
                Discover
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                About Me
              </h2>
              <p className="text-sm text-[#f5e5d1] leading-relaxed mb-6">
                My name is Sopiah. I'm a React Developer with over 2 years of experience
                building modern web apps. I'm very passionate and dedicated to my work. I
                have acquired the skills necessary to build clean, premium, and responsive
                websites.
              </p>

              <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 border border-[#d1a374] p-6 mb-6">
                <p><span className="font-semibold">Name:</span> Sopiah Pasaribu</p>
                <p><span className="font-semibold">Age:</span> 21</p>
                <p><span className="font-semibold">Phone:</span> +62 831-3591-0632</p>
                <p><span className="font-semibold">Address:</span> Bandung, Indonesia</p>
                <p><span className="font-semibold">Experience:</span> 2 Years</p>
                <p><span className="font-semibold">Freelance:</span> Available</p>
                <p><span className="font-semibold">Skype:</span> sopiah.dev</p>
                <p><span className="font-semibold">GitHub:</span> github.com/sopiah</p>
              </div>

              <button className="bg-[#d1a374] text-[#3e2c23] font-display text-sm font-semibold px-6 py-3 rounded hover:bg-[#b98d5c] transition">
                Download CV
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12"
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