import React from "react";
import {
  Code2, Cpu, Database, GitBranch, Github, HardDrive, Key,
  Laptop2, Layout, Lock, Network, Server, Smartphone, Terminal,
  Type, Zap, CircleDashed, Rocket, Settings, BrainCircuit
} from "lucide-react";

const SkillsSection = () => {
  const skillIcons = {
    'React': <Cpu className="text-[#8BD1E5] w-5 h-5" />,
    'HTML/CSS': <><Layout className="text-[#F4A582] w-5 h-5" /> <Layout className="text-[#92C5DE] w-5 h-5" /></>,
    'Tailwind': <Type className="text-[#A5D8DD] w-5 h-5" />,
    'Responsive Design': <Smartphone className="text-[#D4B483] w-5 h-5" />,
    'Node.js': <Terminal className="text-[#A5D8A5] w-5 h-5" />,
    'Express.js': <Server className="text-[#B8B8B8] w-5 h-5" />,
    'JWT': <Key className="text-[#D1C7B7] w-5 h-5" />,
    'REST APIs': <Network className="text-[#9BB7D4] w-5 h-5" />,
    'Authentication': <Lock className="text-[#D4B483] w-5 h-5" />,
    'Git & GitHub': <div className="flex gap-1"><GitBranch className="text-[#F2A88D] w-5 h-5" /><Github className="text-[#A8A8A8] w-5 h-5" /></div>,
    'XAMPP': <HardDrive className="text-[#F2C49B] w-5 h-5" />,
    'VS Code': <Code2 className="text-[#8FB3D9] w-5 h-5" />,
    'Postman': <Network className="text-[#F2A88D] w-5 h-5" />,
    'DBeaver & Postgres': <Database className="text-[#A5C7E5] w-5 h-5" />,
    'SQLyog': <Database className="text-[#D4B483] w-5 h-5" />,
    'JavaScript': <Code2 className="text-[#F2E2A2] w-5 h-5" />,
    'C': <Code2 className="text-[#C2D4E5] w-5 h-5" />,
    'Java': <Code2 className="text-[#8FB3D9] w-5 h-5" />,
  };

  const categories = [
    {
      name: 'Frontend',
      icon: <Laptop2 className="w-5 h-5 text-[#7D6E63]" />,
      skills: ['React', 'HTML/CSS', 'Tailwind', 'Responsive Design'],
      color: 'from-[#F8E5D6] to-[#F5EFE1]'
    },
    {
      name: 'Backend',
      icon: <Server className="w-5 h-5 text-[#7D6E63]" />,
      skills: ['Node.js', 'Express.js', 'JWT', 'REST APIs', 'Authentication'],
      color: 'from-[#E8DFD6] to-[#F0E9E0]'
    },
    {
      name: 'Tools',
      icon: <Settings className="w-5 h-5 text-[#7D6E63]" />,
      skills: ['Git & GitHub', 'XAMPP', 'VS Code', 'Postman', 'DBeaver & Postgres', 'SQLyog'],
      color: 'from-[#F5E9D9] to-[#F0E4D4]'
    },
    {
      name: 'Languages',
      icon: <BrainCircuit className="w-5 h-5 text-[#7D6E63]" />,
      skills: ['JavaScript', 'C', 'Java', 'Node.js'],
      color: 'from-[#E8E2D6] to-[#F1ECE1]'
    },
  ];

  return (
    <section id="skills" className="py-16 bg-[#FAF7F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#6B4C3B] mb-2">
            My Skill
          </h2>
          <p className="text-base text-[#9E8E7E] max-w-2xl mx-auto">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, i) => (
            <div 
              key={i}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1 border border-[#F0E6D2]"
            >
              <div className={`bg-gradient-to-r ${category.color} p-5`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white bg-opacity-30 rounded-md backdrop-blur-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium text-[#7D6E63]">{category.name}</h3>
                </div>
              </div>
              
              <div className="p-5 bg-white">
                <ul className="space-y-2.5">
                  {category.skills.map((skill, j) => (
                    <li 
                      key={j} 
                      className="flex items-center gap-2.5 group"
                    >
                      <div className="p-1.5 rounded-full bg-[#FAF7F0] shadow-xs group-hover:bg-[#E8D9C5] transition-colors">
                        {skillIcons[skill] || <CircleDashed className="w-3.5 h-3.5 text-[#B8A99A]" />}
                      </div>
                      <span className="text-[#7D6E63] group-hover:text-[#6B5C4D] font-medium text-sm transition-colors">
                        {skill}
                      </span>
                      <Zap className="ml-auto w-3.5 h-3.5 text-[#D4B483] opacity-0 group-hover:opacity-70 transition-opacity" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-2.5 bg-[#D4B483] text-[#5A4A42] rounded-full font-medium hover:bg-[#C4A473] transition-colors shadow-sm hover:shadow-md flex items-center gap-2 mx-auto text-sm">
            <Rocket className="w-4 h-4 text-[#5A4A42]" />
            See My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;