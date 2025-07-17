import React, { useState, useEffect } from "react";

const HomeSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hello, I'm Sopiah";
  const subTexts = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Web Designer",
    "React Specialist"
  ];
  const [currentSubText, setCurrentSubText] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        // Start cursor blink after typing completes
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  // Rotating subtitle effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubText((prev) => (prev + 1) % subTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative"
      data-aos="fade"
    >
      {/* Original background styling */}
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
            animation: "pan 30s linear infinite",
          }}
        ></div>
        
        <div 
          className="absolute inset-0 w-full h-full backdrop-blur-sm"
          style={{
            maskImage: "radial-gradient(circle at center, transparent 60%, black 90%)",
            WebkitMaskImage: "radial-gradient(circle at center, transparent 60%, black 90%)",
          }}
        ></div>

        {/* Added animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content container */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl z-10 p-6 bg-white/80 backdrop-blur-sm rounded-xl mx-4 shadow-lg">
        {/* Replaced profile image with animated GIF icon */}
        <div className="relative group w-32 h-32 flex items-center justify-center">
          <div 
            className="w-full h-full rounded-full bg-[#6B4C3B]/10 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#6B4C3B]/20"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExam9qcXpkc3l3OXhqZjRia2I0dzZwdmVmanptdWo1aGVhZmhiMXFsNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7TKMt1VVNkHV2PaE/giphy.gif"
                alt="Developer Icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 
            className="text-2xl md:text-3xl font-display font-bold text-[#6B4C3B] mb-3 min-h-[40px]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <span className="typewriter">{typedText}</span>
            <span className={`transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </h2>
          
          <p 
            className="text-[#7B6F61] max-w-xl mb-4 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I'm a passionate {" "}
            <span 
              className="text-[#6B4C3B] font-semibold relative inline-block"
              key={currentSubText}
            >
              <span className="relative">
                {subTexts[currentSubText]}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6B4C3B] animate-[underline_0.3s_forwards]"></span>
              </span>
            </span>{" "}
            with expertise in modern web technologies.
          </p>
          
          <button
            className="mt-4 px-4 py-2 bg-[#6B4C3B] text-white rounded-lg text-sm font-medium hover:bg-[#5A3E30] transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div className="w-6 h-10 border-2 border-[#6B4C3B] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#6B4C3B] rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pan {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100px) translateX(20px); }
          100% { transform: translateY(-200px) translateX(0); }
        }
        @keyframes underline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HomeSection;