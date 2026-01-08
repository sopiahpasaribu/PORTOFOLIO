import React, { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-[999] bg-white/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-2xl border border-[#e0cdbb] max-h-[90vh] flex flex-col overflow-hidden">

        {/* HEADER */}
        <header className="sticky top-0 z-10 bg-white border-b border-[#e0cdbb] h-20 flex items-center px-6">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl font-bold text-[#644a33]">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#f7f0e0] text-[#644a33]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* IMAGE */}
            <div className="space-y-4">
              <div className="relative bg-[#faf5eb] rounded-xl h-80 sm:h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={project.images[currentImageIndex]}
                  alt=""
                  className="max-h-full max-w-full object-contain p-4"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#644a33]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                    >
                      <ChevronRight className="w-6 h-6 text-[#644a33]" />
                    </button>
                  </>
                )}
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`border-2 rounded-lg overflow-hidden ${
                        currentImageIndex === i
                          ? "border-[#8b6644]"
                          : "border-transparent"
                      }`}
                    >
                      <img src={img} className="h-20 w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DETAILS */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#77583c] mb-2">
                  About This Project
                </h3>
                <p className="text-[#644a33] leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#77583c] mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-[#f0e6dd] text-[#644a33]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex-1 bg-[#8b6644] hover:bg-[#7a593b] text-white py-2 rounded-md text-center"
                  >
                    <Github className="inline w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
                {project.vercelLink && (
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    className="flex-1 bg-[#644a33] hover:bg-[#553c28] text-white py-2 rounded-md text-center"
                  >
                    <ExternalLink className="inline w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
