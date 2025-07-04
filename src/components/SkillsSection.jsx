import React from "react";

const SkillsSection = () => {
  return (
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
            {
              name: 'Frontend',
              skills: ['React', 'HTML/CSS', 'Tailwind', 'Responsive Design']
            },
            {
              name: 'Backend',
              skills: ['Node.js', 'Express.js', 'JWT', 'REST APIs', 'Authentication']
            },
            {
              name: 'Tools',
              skills: ['Git & GitHub', 'XAMPP', 'VS Code', 'Postman', 'DBeaver & Postgres', 'SQLyog']
            },
            {
              name: 'Languages',
              skills: ['JavaScript', 'C','Java','Node js','React']
            },
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
  );
};

export default SkillsSection;