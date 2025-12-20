import React, { useState, useRef, useEffect } from "react";
import { projects } from "../data/ProjectData";
import ProjectModal from "../components/ProjectModal";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, onClick, isVisible }) => (
  <div
    onClick={() => onClick(project)}
    className={`
      bg-white/90 dark:bg-[#2A2420]/90
      backdrop-blur rounded-xl shadow-md
      hover:shadow-xl hover:-translate-y-1
      transition-all duration-300 cursor-pointer
      border border-[#E9D8C8] dark:border-[#3A312C]
      flex flex-col
      ${isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-10 scale-95'
      }
      transition-all duration-700 ease-out
    `}
  >
    <img
      src={project.images[0]}
      alt={project.title}
      className="h-48 w-full object-cover rounded-t-xl"
    />

    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-[#6B4C3B] dark:text-[#F3EDE7] mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-[#7B6F61] dark:text-[#CFC7C1] mb-4 flex-grow line-clamp-3">
        {project.desc}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <div className="flex gap-3">
          {project.githubLink && (
            <a
              onClick={(e) => e.stopPropagation()}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 text-[#6B4C3B] dark:text-[#E6DED5]" />
            </a>
          )}
          {project.vercelLink && (
            <a
              onClick={(e) => e.stopPropagation()}
              href={project.vercelLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 text-[#6B4C3B] dark:text-[#E6DED5]" />
            </a>
          )}
        </div>
        <span className="text-xs text-[#A08B7D] dark:text-[#B5ADA6]">
          {project.year}
        </span>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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
        rootMargin: '0px 0px -50px 0px'
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
    cardRefs.current = cardRefs.current.slice(0, projects.length);
  }, [projects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative min-h-screen py-20 px-4 sm:px-6 lg:px-8
        bg-white/70 dark:bg-[#1E1A17]
        backdrop-blur-md overflow-hidden
        transition-colors duration-300
      "
    >
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-[#F7F3EE]/80 via-transparent to-[#F7F3EE]/80
          dark:from-[#1E1A17] dark:to-[#1E1A17]
        "
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-[#6B4C3B] dark:text-[#F3EDE7] mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              data-index={i}
              style={{
                transitionDelay: `${i * 100}ms`
              }}
            >
              <ProjectCard 
                project={p} 
                onClick={setSelectedProject} 
                isVisible={visibleCards.includes(i.toString())}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;