import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Phone, Send, Sparkles, Heart, Download } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "sopiahpasaribu20@gmail.com",
      link: "mailto:sopiahpasaribu20@gmail.com",
      color: "from-[#EA4335] to-[#FF6B6B]",
      bgColor: "bg-red-50 dark:bg-red-900/5",
      delay: 50
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "sopiah-pasaribu",
      link: "https://www.linkedin.com/in/sopiah-pasaribu-a85269370/",
      color: "from-[#0A66C2] to-[#3284FF]",
      bgColor: "bg-blue-50 dark:bg-blue-900/5",
      delay: 100
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+62 831 3591 0632",
      link: "https://api.whatsapp.com/send/?phone=%2B6283135910632",
      color: "from-[#25D366] to-[#5CFF95]",
      bgColor: "bg-green-50 dark:bg-green-900/5",
      delay: 150
    }
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-16 flex flex-col justify-center items-center
                 px-4 sm:px-6
                 bg-[#FAF7F0] dark:bg-[#1E1A17]"
    >
      <div className="max-w-3xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#D4B483]" />
            <h2
              className="text-2xl sm:text-3xl font-display font-bold
             text-[#6B4C3B] dark:text-[#E6DED5]"
            >
              Get In Touch
            </h2>
            <Sparkles className="w-4 h-4 text-[#D4B483]" />
          </div>

          <p className="text-sm text-[#7D6E63] dark:text-[#CFC7BE] 
                       max-w-md mx-auto mt-2">
            I'm always open to discussing new opportunities
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-lg p-4
                        ${item.bgColor} border border-[#F0E6D2] 
                        dark:border-[#3A322D] transition-all duration-200
                        hover:scale-[1.01] hover:shadow-md
                        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="relative">
                <div className={`inline-flex p-2 rounded-md 
                               bg-gradient-to-r ${item.color} mb-2
                               transition-transform duration-200`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-[#6B4C3B] 
                             dark:text-[#E6DED5] mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[#7D6E63] dark:text-[#BEB6AD] break-words">
                  {item.value}
                </p>

                <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Send className="w-3 h-3 text-[#6B4C3B] dark:text-[#D4B483]" />
                  <span className="text-xs text-[#6B4C3B] dark:text-[#D4B483]">
                    Connect
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center mb-6">
          <a
            href="mailto:sopiahpasaribu20@gmail.com"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full 
                       bg-[#6B4C3B] dark:bg-[#8B6E56]
                       hover:bg-[#8B6E56] dark:hover:bg-[#A0876E]
                       text-white font-medium text-sm
                       transition-all duration-200
                       hover:shadow-sm
                       text-center flex items-center justify-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            Send Message
          </a>

          <a
            href="/CV-SOPIAH-PSB.pdf"
            download
            className="w-full sm:w-auto px-5 py-2.5 rounded-full 
                       border border-[#6B4C3B] dark:border-[#8B6E56]
                       text-[#6B4C3B] dark:text-[#E6DED5] font-medium text-sm
                       transition-all duration-200
                       hover:bg-[#6B4C3B] dark:hover:bg-[#8B6E56]
                       hover:text-white dark:hover:text-white
                       hover:shadow-sm
                       text-center flex items-center justify-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>

        {/* Status Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 
                        rounded-full bg-white/20 dark:bg-black/10
                        border border-[#F0E6D2] dark:border-[#3A322D]">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-xs text-[#7D6E63] dark:text-[#CFC7BE]">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;