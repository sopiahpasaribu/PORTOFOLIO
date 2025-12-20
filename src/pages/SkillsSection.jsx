import React, { useState, useRef, useEffect } from "react";
import {
  Code2, Cpu, Database, GitBranch, Github, HardDrive, Key,
  Laptop2, Layout, Lock, Network, Server, Smartphone, Terminal,
  Type, Zap, CircleDashed, Rocket, Settings, BrainCircuit,
  Braces, Globe, Shield, DatabaseZap, FileCode
} from "lucide-react";

const SkillsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const itemRefs = useRef({});

  const skillIcons = {
    'React': <Cpu className="text-[#61DAFB] w-5 h-5" />,
    'HTML/CSS': <Layout className="text-[#E34F26] w-5 h-5" />,
    'Tailwind': <Type className="text-[#38B2AC] w-5 h-5" />,
    'Responsive Design': <Smartphone className="text-[#3B82F6] w-5 h-5" />,
    'Node.js': <Terminal className="text-[#339933] w-5 h-5" />,
    'Express.js': <Server className="text-[#000000] dark:text-[#FFFFFF] w-5 h-5" />,
    'JWT': <Key className="text-[#F59E0B] w-5 h-5" />,
    'REST APIs': <Globe className="text-[#10B981] w-5 h-5" />,
    'Authentication': <Shield className="text-[#8B5CF6] w-5 h-5" />,
    'Git & GitHub': <GitBranch className="text-[#F05032] w-5 h-5" />,
    'XAMPP': <HardDrive className="text-[#FB7A24] w-5 h-5" />,
    'VS Code': <Code2 className="text-[#007ACC] w-5 h-5" />,
    'Postman': <Network className="text-[#FF6C37] w-5 h-5" />,
    'DBeaver & Postgres': <DatabaseZap className="text-[#336791] w-5 h-5" />,
    'SQLyog': <Database className="text-[#4479A1] w-5 h-5" />,
    'JavaScript': <Braces className="text-[#F7DF1E] w-5 h-5" />,
    'C': <FileCode className="text-[#A8B9CC] w-5 h-5" />,
    'Java': <Code2 className="text-[#007396] w-5 h-5" />,
  };

  const categories = [
    {
      name: 'Frontend',
      icon: <Laptop2 className="w-5 h-5 text-[#7D6E63] dark:text-[#D6CEC5]" />,
      skills: ['React', 'HTML/CSS', 'Tailwind', 'Responsive Design'],
      color: 'from-[#F8E5D6] to-[#F5EFE1] dark:from-[#3A322D] dark:to-[#2A2420]',
      iconBg: 'bg-[#FFF5EB] dark:bg-[#3A322D]'
    },
    {
      name: 'Backend',
      icon: <Server className="w-5 h-5 text-[#7D6E63] dark:text-[#D6CEC5]" />,
      skills: ['Node.js', 'Express.js', 'JWT', 'REST APIs', 'Authentication'],
      color: 'from-[#E8DFD6] to-[#F0E9E0] dark:from-[#342E2A] dark:to-[#26211E]',
      iconBg: 'bg-[#F0F7FF] dark:bg-[#2A2620]'
    },
    {
      name: 'Tools',
      icon: <Settings className="w-5 h-5 text-[#7D6E63] dark:text-[#D6CEC5]" />,
      skills: ['Git & GitHub', 'XAMPP', 'VS Code', 'Postman', 'DBeaver & Postgres', 'SQLyog'],
      color: 'from-[#F5E9D9] to-[#F0E4D4] dark:from-[#362F2A] dark:to-[#29231F]',
      iconBg: 'bg-[#FEF7CD] dark:bg-[#3A322D]'
    },
    {
      name: 'Languages',
      icon: <BrainCircuit className="w-5 h-5 text-[#7D6E63] dark:text-[#D6CEC5]" />,
      skills: ['JavaScript', 'C', 'Java'],
      color: 'from-[#E8E2D6] to-[#F1ECE1] dark:from-[#322C28] dark:to-[#24201D]',
      iconBg: 'bg-[#E8F5E9] dark:bg-[#2A2420]'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleItems((prev) => ({
              ...prev,
              [id]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    Object.values(itemRefs.current).forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      Object.values(itemRefs.current).forEach((ref) => {
        if (ref) itemObserver.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, categories.length);
    itemRefs.current = {};
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-16 bg-[#FAF7F0] dark:bg-[#1E1A17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#6B4C3B] dark:text-[#E6DED5] mb-2">
            My Skills
          </h2>
          <p className="text-base text-[#9E8E7E] dark:text-[#BEB6AD] max-w-2xl mx-auto">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, i) => (
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              data-index={i}
              key={i}
              className={`
                bg-white dark:bg-[#2A2420] rounded-lg shadow-sm
                overflow-hidden border border-[#F0E6D2] dark:border-[#3A322D]
                transition-all duration-500 ease-out
                ${visibleCards.includes(i.toString()) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
                }
              `}
              style={{
                transitionDelay: `${i * 100}ms`
              }}
            >
              <div className={`bg-gradient-to-r ${category.color} p-5`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/30 dark:bg-black/30 rounded-md backdrop-blur-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium text-[#7D6E63] dark:text-[#D6CEC5]">
                    {category.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-[#2A2420]">
                <ul className="space-y-2.5">
                  {category.skills.map((skill, j) => {
                    const itemId = `${i}-${j}`;
                    return (
                      <li
                        ref={(el) => (itemRefs.current[itemId] = el)}
                        data-id={itemId}
                        key={j}
                        className={`
                          flex items-center gap-3 group cursor-default
                          transition-all duration-500 ease-out
                          ${visibleItems[itemId] 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-4'
                          }
                        `}
                        style={{
                          transitionDelay: `${(i * 100) + (j * 50)}ms`
                        }}
                      >
                        <div className={`
                          p-2 rounded-lg ${category.iconBg} 
                          transition-all duration-200
                          group-hover:scale-110 group-hover:shadow-sm
                          flex items-center justify-center
                        `}>
                          {skillIcons[skill] || (
                            <CircleDashed className="w-4 h-4 text-[#B8A99A] dark:text-[#9F968E]" />
                          )}
                        </div>
                        <span className="text-[#7D6E63] dark:text-[#CFC7BE]
                                       group-hover:text-[#6B5C4D] dark:group-hover:text-[#E6DED5]
                                       font-medium text-sm transition-colors flex-1">
                          {skill}
                        </span>
                        <Zap className="w-4 h-4 text-[#D4B483]
                                     opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#projects">
            <button className="px-6 py-2.5 bg-[#D4B483] dark:bg-[#8B6E56]
                               text-[#5A4A42] dark:text-white rounded-full font-medium
                               hover:bg-[#C4A473] dark:hover:bg-[#A0876E]
                               transition-all duration-300 hover:scale-105
                               shadow-sm hover:shadow-md
                               flex items-center gap-2 mx-auto text-sm">
              <Rocket className="w-4 h-4" />
              See My Projects
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;