import React, { useState, useEffect } from "react";

const HomeSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, I'm Sopiah";

  useEffect(() => {
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
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative"
      data-aos="fade"
    >
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
  );
};

export default HomeSection;