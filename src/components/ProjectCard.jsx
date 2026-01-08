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
        ? "opacity-100 translate-y-0 scale-100" 
        : "opacity-0 translate-y-10 scale-95"}
      transition-all duration-700 ease-out
    `}
  >
    {/* IMAGE */}
    <img
      src={project.images?.[0]}
      alt={project.title}
      className="h-48 w-full object-cover rounded-t-xl"
    />

    {/* CONTENT */}
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-[#6B4C3B] dark:text-[#F3EDE7] mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-[#7B6F61] dark:text-[#CFC7C1] mb-3 line-clamp-3">
        {project.desc}
      </p>

      {/* ✅ TECHNOLOGIES (AMAN) */}
      {Array.isArray(project.tech) && project.tech.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                text-xs px-2 py-1 rounded-full
                bg-[#F0E6DD] text-[#644A33]
                dark:bg-[#3A312C] dark:text-[#E6DED5]
              "
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* ACTIONS */}
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
      </div>
    </div>
  </div>
);

export default ProjectCard;
