import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative font-sans text-gray-800">
      <Navbar />

      <main className="pt-24 px-6 space-y-32">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center"
          style={{
            backgroundColor: "#E9E1D1", // warna cream polos
            transition: "all 0.5s ease",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
            <img
              src="publik/1.jpg"
              alt="Sopiah Profile"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-display font-bold text-[#6B4C3B] mb-4">
                Hello, I'm Sopiah
              </h2>
              <p className="text-[#7B6F61] max-w-xl">
                I'm a passionate{" "}
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

<section
  id="about"
  className="min-h-screen flex items-center justify-center bg-[#3e2c23] px-6 py-16"
>
  <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 text-[#f5e5d1]">
    {/* FOTO */}
    <img
      src="publik/aboutme.jpg"
      alt="About Sopiah"
      className="w-64 h-64 object-cover rounded-md shadow-lg"
    />

    {/* ISI TEKS */}
    <div className="flex-1">
      <p className="text-[#d1a374] uppercase text-sm font-semibold mb-1">
        Discover
      </p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
        About Me
      </h2>
      <p className="text-sm text-[#f5e5d1] leading-relaxed mb-6">
        My name is Sopiah. I’m a React Developer with over 3 years of experience building modern web apps. I’m very passionate and dedicated to my work. I have acquired the skills necessary to build clean, premium, and responsive websites.
      </p>

      {/* INFO BOX */}
      <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 border border-[#d1a374] p-6 mb-6">
        <p>
          <span className="font-semibold text-[#f5e5d1]">Name:</span> Sopiah
        </p>
        <p>
          <span className="font-semibold text-[#f5e5d1]">Age:</span> 23
        </p>
        <p>
          <span className="font-semibold text-[#f5e5d1]">Phone:</span> +62 812-3456-7890
        </p>
        <p>
          <span className="font-semibold text-[#f5e5d1]">Address:</span> Bandung, Indonesia
        </p>
        <p>
          <span className="font-semibold text-[#f5e5d1]">Experience:</span> 3 Years
        </p>
        <p>
          <span className="font-semibold text-[#f5e5d1]">Freelance:</span> Available
        </p>
        <p>
          <span className="font-semibold text-[#f5e5d1]">Skype:</span> sopiah.dev
        </p>
        <p>
          <span className="font-semibold text-[#f5e5d1]">GitHub:</span> github.com/sopiah
        </p>
      </div>

      {/* BUTTON */}
      <button className="bg-[#d1a374] text-[#3e2c23] font-display text-sm font-semibold px-6 py-3 rounded hover:bg-[#b98d5c] transition">
        Download CV
      </button>
    </div>
  </div>
</section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4"
        >
          <h2 className="text-4xl font-display font-bold text-[#6B4C3B] mb-8">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            {[
              {
                title: "React Todo App",
                desc: "A fully functional todo list app built with React and Tailwind CSS, featuring CRUD operations and local storage persistence.",
                tech: ["React", "Tailwind CSS", "JavaScript"],
                link: "https://github.com/sopiah/react-todo-app",
              },
              {
                title: "Personal Portfolio Website",
                desc: "My portfolio built with React and Vite, showcasing my skills, projects, and blog posts with smooth animations.",
                tech: ["React", "Vite", "CSS Modules"],
                link: "https://sopiah-portfolio.com",
              },
              {
                title: "E-commerce UI Template",
                desc: "A modern, responsive e-commerce frontend design using React and Tailwind CSS, optimized for mobile and desktop.",
                tech: ["React", "Tailwind CSS", "Figma (Design)"],
                link: "https://github.com/sopiah/ecommerce-ui",
              },
              {
                title: "HTML5 & CSS3 Landing Page",
                desc: "A clean, semantic landing page built with pure HTML5 and CSS3, featuring responsive design and smooth scroll effects.",
                tech: ["HTML5", "CSS3", "JavaScript"],
                link: "https://github.com/sopiah/html5-landing-page",
              },
              {
                title: "JavaScript Game - Memory Match",
                desc: "A classic memory card matching game developed using vanilla JavaScript with simple animations and scoring system.",
                tech: ["JavaScript", "HTML", "CSS"],
                link: "https://github.com/sopiah/js-memory-game",
              },
              {
                title: "Blog CMS with Next.js",
                desc: "A content-managed blog platform built with Next.js and Markdown files, with static site generation and SEO optimization.",
                tech: ["Next.js", "React", "Markdown"],
                link: "https://github.com/sopiah/nextjs-blog-cms",
              },
            ].map(({ title, desc, tech, link }, index) => (
              <div
                key={index}
                className="bg-[#F5F0E6] rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#6B4C3B] mb-2">
                    {title}
                  </h3>
                  <p className="text-[#7B6F61] text-sm mb-3">{desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#D6C4B7] text-[#6B4C3B] font-semibold px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-[#6B4C3B] font-semibold hover:underline"
                >
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12"
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
            {/* Image Profil */}
            <img
              src="https://avatars.githubusercontent.com/u/00000000?v=4" // Ganti dengan link gambar kamu
              alt="Sopiah Profile"
              className="w-20 h-20 rounded-full border-4 border-[#6B4C3B] object-cover shadow-lg"
            />

            {/* Tombol Email */}
            <a
              href="mailto:sopiah@example.com"
              className="bg-[#6B4C3B] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#8B6E56] transition text-base sm:text-lg font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12h2a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h2m4 0V8m0 4l-4-4m4 4l4-4"
                />
              </svg>
              Say Hello
            </a>
          </div>

          <p className="text-[#7B6F61] mb-2 max-w-sm text-sm sm:text-base">
            Or find me on social media:
          </p>
          <div className="flex space-x-6 text-[#6B4C3B] text-base sm:text-lg font-semibold">
            <a
              href="https://github.com/sopiah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A9746E] transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sopiah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A9746E] transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/sopiah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A9746E] transition duration-300"
            >
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
