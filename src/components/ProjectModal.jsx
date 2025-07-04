import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Star, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#ffffffea] backdrop-blur-sm overflow-y-auto">
      {/* Modal Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-6xl rounded-xl shadow-2xl border border-[#e0cdbb] overflow-hidden">
          {/* Header */}
          <header className="sticky top-0 w-full bg-white border-b border-[#e0cdbb] z-50">
            <div className="px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#644a33]">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-[#644a33] hover:text-[#77583c] transition p-2 rounded-full hover:bg-[#f7f0e0]"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </header>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden bg-[#faf5eb] h-96 flex items-center justify-center">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`Project Screenshot ${currentImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain p-4"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#644a33] p-2 rounded-full shadow-lg hover:bg-[#f0e6dd] transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#644a33] p-2 rounded-full shadow-lg hover:bg-[#f0e6dd] transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(i);
                      }}
                      className={`rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === i 
                          ? 'border-[#8b6644] scale-105' 
                          : 'border-transparent hover:border-[#e0cdbb]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="flex justify-center space-x-2">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(i);
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentImageIndex === i
                          ? 'bg-[#77583c] w-6'
                          : 'bg-[#e0cdbb]'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-[#77583c] mb-2">About This Project</h3>
                <p className="text-[#644a33] text-base leading-relaxed">{project.desc}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-[#77583c] mb-3">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-[#c19b77] mr-2 mt-0.5">
                        <Star className="w-4 h-4 fill-[#d1b499]" />
                      </span>
                      <span className="text-[#644a33] text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-[#77583c] mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f0e6dd] text-[#644a33] border border-[#e0cdbb]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

{/* Action Buttons  */}
<div className="flex flex-wrap gap-3 pt-3">
  {project.githubLink && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center bg-[#8b6644] text-white px-4 py-2 rounded-md hover:bg-[#77583c] transition-all text-sm font-medium shadow hover:shadow-md min-w-[160px]"
    >
      <Github className="w-4 h-4 mr-2" /> View Code
    </a>
  )}
  {project.vercelLink && (
    <a
      href={project.vercelLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center bg-[#644a33] text-white px-4 py-2 rounded-md hover:bg-[#77583c] transition-all text-sm font-medium shadow hover:shadow-md min-w-[160px]"
    >
      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
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