import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      data-aos="fade-up"
      onClick={() => onClick(project)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#3E2C23] mb-2">{project.title}</h3>
        <p className="text-[#7B6F61] mb-4 line-clamp-2">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span 
              key={i}
              className="text-xs bg-[#E9D8C8] text-[#6B4C3B] px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs bg-[#E9D8C8] text-[#6B4C3B] px-3 py-1 rounded-full">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <div className="flex space-x-4">
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#6B4C3B] hover:text-[#A9746E] transition"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 mr-2" /> Code
            </a>
          )}
          {project.vercelLink && (
            <a 
              href={project.vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#6B4C3B] hover:text-[#A9746E] transition"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;