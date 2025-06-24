import React, { useState } from 'react';
import { projects } from './ProjectData';
import ProjectModal from './ProjectModal';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => (
  <div 
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col border border-[#E9D8C8]"
    onClick={() => onClick(project)}
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={project.images[0]} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
      {project.images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          +{project.images.length - 1}
        </div>
      )}
    </div>
    
    <div className="p-4 flex-grow flex flex-col">
      <h3 className="text-lg font-semibold text-[#6B4C3B] mb-2">{project.title}</h3>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.slice(0, 4).map((tech, i) => (
          <span 
            key={i} 
            className="text-xs px-2 py-1 rounded-full bg-[#F0E6DD] text-[#6B4C3B]"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-2 py-1 rounded-full bg-[#F0E6DD] text-[#6B4C3B]">
            +{project.tech.length - 4}
          </span>
        )}
      </div>
      
      <p className="text-[#7B6F61] text-sm mb-4 line-clamp-3 flex-grow">{project.desc}</p>
      
      <div className="flex justify-between items-center mt-auto">
        <div className="flex space-x-3">
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#6B4C3B] hover:text-[#8B5A3C] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.vercelLink && (
            <a 
              href={project.vercelLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#6B4C3B] hover:text-[#8B5A3C] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        {project.year && (
          <span className="text-xs text-[#A08B7D]">{project.year}</span>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-16 px-4 sm:px-6 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display font-bold text-[#6B4C3B] text-center mb-3">
            Featured Projects
          </h2>
          <p className="text-[#7B6F61] max-w-2xl mx-auto">
            A collection of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={setSelectedProject} />
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