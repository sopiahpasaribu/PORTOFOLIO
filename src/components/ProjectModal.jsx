import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Star, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
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
    <div className="fixed inset-0 z-50 bg-[#ffffff] overflow-y-auto">
      {/* Header with cream background */}
      <header className="sticky top-0 w-full 
      bg-[#ffffff] border-b border-[#e0cdbb] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-end">
          <button
            onClick={onClose}
            className="text-[#644a33] hover:text-[#77583c] transition p-1 rounded-full hover:bg-[#f7f0e0]"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-1 pb-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          {/* Image gallery */}
          <div className="mb-4 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden bg-[#faf5eb]" style={{ minHeight: '280px' }}>
              <div className="flex justify-center items-center h-full w-full p-2">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  className="max-h-[280px] w-auto object-contain"
                />
              </div>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-[#fdfaf6]/80 text-[#644a33] p-1 rounded-full shadow hover:bg-[#f0e6dd] transition backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#fdfaf6]/80 text-[#644a33] p-1 rounded-full shadow hover:bg-[#f0e6dd] transition backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(i);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          currentImageIndex === i
                            ? 'bg-[#77583c] w-3'
                            : 'bg-[#fdfaf6] bg-opacity-70'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="grid grid-cols-4 gap-1 mt-1">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={`rounded-sm overflow-hidden border transition-all ${
                      currentImageIndex === i ? 'border-[#8b6644]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-12 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project details */}
          <div className="lg:sticky lg:top-16 lg:self-start">
            <h1 className="text-xl font-bold text-[#644a33] mb-1">{project.title}</h1>
            
            <div className="mb-3">
              <p className="text-[#77583c] text-xs leading-snug">{project.desc}</p>
            </div>

            {/* Features */}
            <div className="mb-3 border-t border-[#e0cdbb] pt-2">
              <h3 className="text-sm font-medium text-[#77583c] mb-1">Key Features</h3>
              <ul className="space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 h-3 w-3 text-[#c19b77] mr-1 mt-0.5">
                      <Star className="w-2.5 h-2.5 text-[#d1b499]" />
                    </span>
                    <span className="text-[#644a33] text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-3 border-t border-[#e0cdbb] pt-2">
              <h3 className="text-sm font-medium text-[#77583c] mb-1">Technologies</h3>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[0.65rem] font-medium bg-[#f0e6dd] text-[#644a33]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-1.5 mt-4 border-t border-[#e0cdbb] pt-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-[#8b6644] text-[#fdfaf6] px-3 py-1.5 rounded-md hover:bg-[#77583c] transition text-xs font-medium"
                >
                  <Github className="w-2.5 h-2.5 mr-1" /> Code
                </a>
              )}
              {project.vercelLink && (
                <a
                  href={project.vercelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-[#644a33] text-[#fdfaf6] px-3 py-1.5 rounded-md hover:bg-[#77583c] transition text-xs font-medium"
                >
                  <ExternalLink className="w-2.5 h-2.5 mr-1" /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectModal;