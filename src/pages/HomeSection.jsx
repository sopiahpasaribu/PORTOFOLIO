import React, { useState, useEffect, useRef } from "react";

const HomeSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);
  const fullText = "Hello, I'm Sopiah";
  const avatarRef = useRef(null);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        const cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative
      bg-transparent dark:bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1E1A17] dark:to-[#0F172A]
      overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#6B4C3B]/5 to-transparent animate-gradient-shift"></div>

        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-[#6B4C3B]/20 to-[#8B6E56]/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${3 + particle.speed}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="relative group">
          <div
            className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 
            p-5 sm:p-6 lg:p-12
            bg-gradient-to-br from-white/90 to-white/70 
            dark:from-[#2A2420]/95 dark:to-[#1E1A17]/95
            backdrop-blur-xl rounded-2xl
            border border-white/30 dark:border-[#6B4C3B]/30
            shadow-2xl transition-all duration-500 hover:scale-[1.02]"
          >
            {/* AVATAR */}
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              ref={avatarRef}
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                  <img
                    src="/aboutme.jpg"
                    alt="Sopiah"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                    }`}
                    onError={(e) => (e.target.src = "/1.jpg")}
                  />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1 text-center lg:text-left space-y-5 lg:space-y-6">
              <div>
                <h2
                  ref={textRef}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono
                  bg-gradient-to-r from-[#6B4C3B] via-[#8B6E56] to-[#6B4C3B]
                  dark:from-[#E2D5CC] dark:via-[#F0E6DC] dark:to-[#E2D5CC]
                  bg-clip-text text-transparent"
                >
                  <span className="text-green-500 animate-pulse">❯ </span>
                  {typedText}
                  <span
                    className={`inline-block w-[3px] h-6 sm:h-7 ml-2 bg-[#6B4C3B] ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </h2>

                <div
                  className="h-[3px] bg-gradient-to-r from-[#6B4C3B] to-[#8B6E56] rounded-full mt-1"
                  style={{ width: `${textWidth}px`, maxWidth: "100%" }}
                />
              </div>

              <p className="text-sm sm:text-base md:text-lg text-[#7B6F61] dark:text-[#D1C7BC] leading-relaxed max-w-xl mx-auto lg:mx-0">
                I build modern web applications using React for frontend
                development and Java as well as Node.js for backend development.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#6B4C3B] to-[#8B6E56]
                  text-white text-sm font-medium transition hover:scale-105"
                >
                  🚀 Contact Me
                </a>

                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-lg border-2 border-[#6B4C3B]
                  text-[#6B4C3B] text-sm transition hover:bg-[#6B4C3B]/10 hover:scale-105"
                >
                  📁 View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
