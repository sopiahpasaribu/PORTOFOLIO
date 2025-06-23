import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection"; 
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, I'm Sopiah";
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-back',
    });

    // Typewriter effect
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i+1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="relative font-sans text-gray-800 bg-[#fffefc]">
      <Navbar />

<main className="px-6 space-y-32">

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center relative"
          data-aos="fade"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
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
            
            <div 
              className="absolute inset-0 w-full h-full backdrop-blur-sm"
              style={{
                maskImage: "radial-gradient(circle at center, transparent 60%, black 90%)",
                WebkitMaskImage: "radial-gradient(circle at center, transparent 60%, black 90%)",
              }}
            ></div>
          </div>
          
          {/* Content with Animations */}
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl z-10 p-8 bg-white/80 backdrop-blur-sm rounded-xl mx-4 shadow-lg">
            <img
              src="/aboutme.jpg"
              alt="Sopiah Profile"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <div>
              <h2 
                className="text-4xl font-display font-bold text-[#6B4C3B] mb-4 min-h-[60px]"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <span className="typewriter">{typedText}</span>
                <span className="blinking-cursor">|</span>
              </h2>
              <p 
                className="text-[#7B6F61] max-w-xl mb-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                I'm a passionate {" "}
                <span className="text-[#6B4C3B] font-semibold">
                  Frontend Developer
                </span>{" "}
                with expertise in modern web technologies.
              </p>
              
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects"
          className="relative"
          data-aos="fade-up"
        >
          <ProjectsSection />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-[60vh] py-16 bg-[#f5f0e8]"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-[#6B4C3B] text-center mb-12">
              My Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind', 'Responsive Design'] },
                { name: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'DBeaver ','SQL'] },
                { name: 'Tools', skills: ['Git', 'VS Code', 'Postman'] },
                { name: 'Languages', skills: ['JavaScript', 'HTML/CSS', 'C'] },
              ].map((category, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <h3 className="text-xl font-semibold text-[#6B4C3B] mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, j) => (
                      <li key={j} className="flex items-center">
                        <span className="w-2 h-2 bg-[#A9746E] rounded-full mr-2"></span>
                        <span className="text-[#7B6F61]">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Experience Section */}
<section
  id="experience"
  className="min-h-[60vh] py-16"
  data-aos="fade-up"
>
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-display font-bold text-[#6B4C3B] text-center mb-12">
      Experience
    </h2>
    <div className="space-y-8">
      {[
        {
          role: "Pelatihan Pemrograman",
          company: "Belajar Mandiri & Pelatihan Online",
          period: "2023 - 2025",
          description:
            "Mengikuti pelatihan intensif Bahasa C, HTML, React, dan Node.js. Mempelajari dasar-dasar algoritma, pembuatan web statis dan dinamis, serta membangun REST API sederhana."
        },
        {
          role: "Proyek Pribadi: Website Catatan Harian",
          company: "React & LocalStorage",
          period: "2025",
          description:
            "Aplikasi to-do list dengan fitur tambah, edit, hapus, dan filter. Dibangun menggunakan React, useState, dan localStorage."
        },
        {
          role: "Proyek Pribadi: REST API CRUD Barang",
          company: "Node.js + Express + Dbeaver",
          period: "2025",
          description:
            "Membangun backend CRUD menggunakan Node.js dan Express, terhubung ke database DBeaver, dan menggunakan Sequelize sebagai ORM."
        }
      ].map((exp, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6B4C3B] hover:shadow-lg transition-all"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <h3 className="text-xl font-semibold text-[#6B4C3B]">{exp.role}</h3>
          <div className="flex items-center text-[#A9746E] mb-2">
            <span>{exp.company}</span>
            <span className="mx-2">•</span>
            <span>{exp.period}</span>
          </div>
          <p className="text-[#7B6F61]">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 bg-[#E9E1D1]"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <h2 
              className="text-3xl sm:text-4xl font-display font-bold text-[#6B4C3B] mb-6"
              data-aos="fade-down"
            >
              Let's Connect
            </h2>
            <p 
              className="text-[#7B6F61] max-w-xl mb-8 text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
            </p>

            {/* Contact Information */}
            <div 
              className="mb-8 text-left bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4C3B] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#7B6F61]">sopiahpasaribu477@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4C3B] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v7h4v-7a2 2 0 00-2-2 2 2 0 00-2 2z" />
                  </svg>
                  <span className="text-[#7B6F61]">linkedin.com/in/sopiah-pasaribu</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4C3B] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-[#7B6F61]">+62 831 3591 0632</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#6B4C3B] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-[#7B6F61]">@sphpsb</span>
                </div>
              </div>
            </div>

            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <a
                href="mailto:sopiahpasaribu477@gmail.com"
                className="bg-[#6B4C3B] hover:bg-[#8B6E56] text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Email
              </a>
              <a
                href="/Sopiah-Resume.pdf"
                download
                className="border-2 border-[#6B4C3B] text-[#6B4C3B] hover:bg-[#6B4C3B] hover:text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold flex items-center gap-2"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { name: "Email", url: "mailto:sopiahpasaribu477@gmail.com", icon: "email" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/sopiah-pasaribu-a85269370/", icon: "linkedin" },
                { name: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=%2B623135910632&text&type=phone_number&app_absent=0", icon: "whatsapp" },
                { name: "Instagram", url: "https://www.instagram.com/sphpsb/", icon: "instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B4C3B] hover:text-[#A9746E] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={600 + (i * 100)}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon === "email" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {social.icon === "whatsapp" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        /* Typewriter Effect */
        .typewriter {
          border-right: 2px solid #6B4C3B;
          animation: blink-caret 0.75s step-end infinite;
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #6B4C3B; }
        }
        
        /* Project Card Hover */
        .project-card {
          transition: all 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(107, 76, 59, 0.1);
        }
      `}</style>
    </div>
  );
}

export default App;