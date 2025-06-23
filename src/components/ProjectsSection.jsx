// ProjectsSection.jsx
import React, { useState } from 'react';
import { projects } from './ProjectData';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => (
  <div 
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col group border border-[#E9D8C8]"
    onClick={() => onClick(project)}
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={project.images[0]} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
      </div>
      {project.images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          +{project.images.length - 1} photos
        </div>
      )}
    </div>
    <div className="p-4 flex-grow flex flex-col">
      <p className="text-[#7B6F61] mb-3 line-clamp-2 flex-grow">{project.desc}</p>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-16 px-4 sm:px-6 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#6B4C3B] mb-3">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;