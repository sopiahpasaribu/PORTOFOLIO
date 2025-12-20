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
      delay: Math.random() * 5
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
      const width = textRef.current.offsetWidth;
      setTextWidth(width);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative
      bg-transparent dark:bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1E1A17] dark:to-[#0F172A]
      overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#6B4C3B]/5 to-transparent animate-gradient-shift"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className="border-r border-[#6B4C3B]/20 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="grid grid-rows-12 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className="border-b border-[#6B4C3B]/20 animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>

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
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#6B4C3B]/20 to-[#8B6E56]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div
            className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 
            p-8 lg:p-12
            bg-gradient-to-br from-white/90 to-white/70 
            dark:from-[#2A2420]/95 dark:to-[#1E1A17]/95
            backdrop-blur-xl rounded-2xl
            border border-white/30 dark:border-[#6B4C3B]/30
            shadow-2xl
            transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl
            animate-fade-in-up"
          >
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              ref={avatarRef}
            >
              <div className={`absolute -inset-4 rounded-full bg-gradient-to-r from-[#6B4C3B]/30 to-transparent blur-lg transition-all duration-700 ${isHovered ? "opacity-100 scale-110" : "opacity-0"}`}></div>
              
              <div className="absolute -inset-4">
                <div
                  className={`absolute inset-0 rounded-full border-2 border-dashed border-[#6B4C3B]/30 
                  ${isHovered ? "animate-spin-slow" : ""}`}
                  style={{ animationDuration: '20s' }}
                ></div>
                <div
                  className={`absolute inset-2 rounded-full border border-[#8B6E56]/20 
                  ${isHovered ? "animate-spin-slow-reverse" : ""}`}
                  style={{ animationDuration: '25s' }}
                ></div>
              </div>

              <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                  <img
                    src="/aboutme.jpg"
                    alt="Sopiah"
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"}`}
                    onError={(e) => (e.target.src = "/1.jpg")}
                  />
                </div>
                
                <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}></div>
              </div>
            </div>

            {/* Enhanced Text Section */}
            <div className="flex-1 text-left space-y-6">
              {/* Typewriter text with better animation */}
              <div className="relative">
                <div className="inline-block">
                  <h2
                    ref={textRef}
                    className="text-3xl lg:text-4xl font-bold font-mono
                    bg-gradient-to-r from-[#6B4C3B] via-[#8B6E56] to-[#6B4C3B]
                    dark:from-[#E2D5CC] dark:via-[#F0E6DC] dark:to-[#E2D5CC]
                    bg-clip-text text-transparent"
                  >
                    <span className="text-green-500 dark:text-emerald-400 animate-pulse">❯ </span>
                    {typedText}
                    <span
                      className={`inline-block w-[3px] h-7 ml-2 bg-gradient-to-b from-[#6B4C3B] to-[#8B6E56] 
                      dark:from-[#E2D5CC] dark:to-[#F0E6DC] transition-all duration-300
                      ${showCursor ? "opacity-100" : "opacity-0 translate-y-1"}`}
                    />
                  </h2>
                </div>
                {/* Underline animation - FIXED */}
                <div 
                  className="h-[3px] bg-gradient-to-r from-[#6B4C3B] to-[#8B6E56] 
                  dark:from-[#E2D5CC] dark:to-[#F0E6DC] rounded-full mt-1 animate-underline-expand"
                  style={{ 
                    width: textWidth > 0 ? `${textWidth}px` : '0px',
                    maxWidth: '100%'
                  }}
                ></div>
              </div>

              <p className="text-base md:text-lg text-[#7B6F61] dark:text-[#D1C7BC] leading-relaxed max-w-xl animate-fade-in-delayed">
                I build modern web applications using React for frontend development
                and Java as well as Node.js for backend development.
              </p>

              <div className="flex gap-3 pt-4 animate-fade-in-delayed-2">
                <a
                  href="#contact"
                  className="relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#6B4C3B] to-[#8B6E56]
                  dark:from-[#E2D5CC] dark:to-[#F0E6DC]
                  text-white dark:text-[#2A2420] text-sm font-medium transition-all duration-300 
                  hover:scale-105 hover:shadow-lg hover:shadow-[#6B4C3B]/30 dark:hover:shadow-[#E2D5CC]/30
                  active:scale-95 group overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-6 h-full bg-white/20 dark:bg-[#2A2420]/20 -skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="animate-float">🚀</span> Contact Me
                  </span>
                </a>

                <a
                  href="#projects"
                  className="relative px-5 py-2.5 rounded-lg border-2 border-[#6B4C3B] dark:border-[#E2D5CC]
                  text-[#6B4C3B] dark:text-[#E2D5CC] text-sm transition-all duration-300
                  hover:bg-[#6B4C3B]/10 dark:hover:bg-[#E2D5CC]/10 hover:scale-105 hover:shadow-lg
                  active:scale-95 group overflow-hidden"
                >
                  <span className="absolute inset-0 border-2 border-transparent group-hover:border-[#6B4C3B] dark:group-hover:border-[#E2D5CC] rounded-lg transition-all duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="animate-bounce-slow">📁</span> View Projects
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes underline-expand {
          0% {
            width: 0;
            opacity: 0;
            transform: translateX(-10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          70% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delayed-2 {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          80% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-underline-expand {
          animation: underline-expand 1.5s ease-out forwards;
          animation-delay: 1.8s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 2s ease-out forwards;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fade-in-delayed-2 2.5s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(107, 76, 59, 0.25);
        }
        
        /* Dark mode shadow */
        .dark .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(226, 213, 204, 0.15);
        }
      `}</style>
    </section>
  );
};

export default HomeSection;