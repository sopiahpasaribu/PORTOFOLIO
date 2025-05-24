import React, { useState } from 'react';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      data-aos="fade-up"
      onClick={() => onClick(project)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {project.images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            +{project.images.length - 1} more
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-[#3E2C23] mb-2">{project.title}</h3>
        <p className="text-[#7B6F61] mb-4 line-clamp-2">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-2">
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
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b z-10">
          <h3 className="text-2xl font-bold text-[#3E2C23]">{project.title}</h3>
          <button 
            onClick={onClose}
            className="text-[#6B4C3B] hover:text-[#A9746E] transition p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg mb-6">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold text-[#3E2C23] mb-2">Project Description</h4>
              <p className="text-[#7B6F61] mb-6">{project.desc}</p>
              
              {project.features && (
                <>
                  <h4 className="text-lg font-semibold text-[#3E2C23] mb-2">Key Features</h4>
                  <ul className="mb-6 pl-4 space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-[#6B4C3B] list-disc">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#6B4C3B] text-white px-4 py-2 rounded hover:bg-[#8B6E56] transition"
                  >
                    <Github className="w-5 h-5 mr-2" /> View Code
                  </a>
                )}
                {project.vercelLink && (
                  <a 
                    href={project.vercelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#A9746E] text-white px-4 py-2 rounded hover:bg-[#8B5E58] transition"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-[#3E2C23] mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-[#E9D8C8] text-[#6B4C3B] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.challenges && (
                <>
                  <h4 className="text-lg font-semibold text-[#3E2C23] mb-2">Challenges & Solutions</h4>
                  <ul className="pl-4 space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="text-[#6B4C3B] list-disc">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-featured online store with product listings, cart functionality, and secure checkout process.",
      images: [
        "/ecommerce-home.jpg",
        "/ecommerce-product.jpg",
        "/ecommerce-cart.jpg",
        "/ecommerce-checkout.jpg"
      ],
      tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "JWT", "Express"],
      features: [
        "Product catalog with filters and search",
        "User authentication and profiles",
        "Shopping cart and wishlist",
        "Secure payment processing with Stripe",
        "Order history and tracking",
        "Admin dashboard for product management"
      ],
      challenges: [
        "Implemented real-time inventory updates to prevent overselling",
        "Optimized image loading with lazy loading for faster page speeds",
        "Created a responsive design that works on all devices",
        "Handled complex state management with Redux"
      ],
      githubLink: "https://github.com/sopiah/ecommerce",
      vercelLink: "https://ecommerce-sopiah.vercel.app"
    },
{
  title: "Piam Booking",
  desc: "A comprehensive hotel booking platform with search, filters, and reservation management.",
  images: [
    "public/home-booking.jpg",
    "public/login-piam-booking.jpg",
    "public/booking.jpg",
    "public/about-piam-booking.jpg",
    "public/hotel.jpg"
  ],
  tech: ["React", "Node.js", "MongoDB", "Express", "Styled Components", "React Dates"],
  features: [
    "Advanced hotel search with filters (price, rating, amenities)",
    "Date range selection with calendar interface",
    "Room availability checking in real-time",
    "User authentication and booking history",
    "Admin dashboard for hotel management"
  ],
  challenges: [
    "Implemented complex date availability algorithms",
    "Created responsive design without Tailwind using Styled Components",
    "Integrated with multiple payment gateways",
    "Optimized search performance with indexing"
  ],
  githubLink: "https://github.com/sopiahpasaribu/piam-booking",
  vercelLink: "https://piam-booking.vercel.app/"
}  ,
  {
      title: "Wizarding World",
      desc: "An application to discover recipes based on ingredients you have, with step-by-step cooking instructions.",
      images: [
        "public/home-ww.jpg",
        "public/discover-ww.jpg",
        "public/about-ww.jpg",
        "public/potion-ww.jpg",
        "public/book-ww.jpg"

      ],
      tech: ["Html", "Css", "JavaScript"],
      features: [
        "Search by ingredients or dietary needs",
        "Save favorite recipes to local storage",
        "Meal planning calendar with drag-and-drop",
        "Nutritional information breakdown",
        "Step-by-step cooking mode with timers"
      ],
      challenges: [
        "Integrated with third-party API with rate limiting",
        "Implemented caching with React Query for frequently accessed recipes",
        "Created a responsive cooking mode optimized for kitchen use",
        "Added animations for better user experience"
      ],
      githubLink: "https://github.com/sopiahpasaribu/SOPIAH_PSB",
      vercelLink: "https://wizarding-world-one.vercel.app/"
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website to showcase projects and skills with modern design.",
      images: [
        "/portfolio-light.jpg",
        "/portfolio-dark.jpg",
        "/portfolio-projects.jpg",
        "/portfolio-contact.jpg"
      ],
      tech: ["React", "Framer Motion", "Tailwind CSS", "EmailJS", "AOS"],
      features: [
        "Responsive design with mobile-first approach",
        "Project showcase with detailed modals",
        "Functional contact form with EmailJS integration",
        "Dark/light mode toggle",
        "Performance optimized with lazy loading"
      ],
      githubLink: "https://github.com/sopiah/portfolio",
      vercelLink: "https://sopiah.vercel.app"
    },
    {
      title: "Weather Dashboard",
      desc: "Real-time weather application with forecasts, maps, and severe weather alerts.",
      images: [
        "/weather-current.jpg",
        "/weather-forecast.jpg",
        "/weather-map.jpg",
        "/weather-settings.jpg"
      ],
      tech: ["React", "OpenWeather API", "Mapbox GL", "Chart.js", "Geolocation API"],
      features: [
        "Current weather conditions with icons",
        "5-day forecast with interactive charts",
        "Interactive weather map with layers",
        "Location-based weather using geolocation",
        "Customizable units and preferences"
      ],
      githubLink: "https://github.com/sopiah/weather-app",
      vercelLink: "https://weather-sopiah.vercel.app"
    },
    {
      title: "Fitness Tracker",
      desc: "Comprehensive fitness application to track workouts, nutrition, and progress.",
      images: [
        "/fitness-dashboard.jpg",
        "/fitness-workout.jpg",
        "/fitness-nutrition.jpg",
        "/fitness-progress.jpg"
      ],
      tech: ["React Native", "Firebase", "Expo", "Reanimated", "Victory Native"],
      features: [
        "Custom workout creation and tracking",
        "Nutrition logging with barcode scanning",
        "Progress charts and statistics",
        "Exercise library with demonstrations",
        "Social features to share achievements"
      ],
      challenges: [
        "Implemented complex animations for exercise demonstrations",
        "Optimized performance for smooth chart rendering",
        "Handled offline functionality with local storage",
        "Created custom UI components for better UX"
      ],
      githubLink: "https://github.com/sopiah/fitness-tracker"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-4 sm:px-6 bg-[#F5F0E6]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#6B4C3B] mb-2 text-center">
            My Projects
          </h2>
          <p className="text-[#7B6F61] max-w-2xl mx-auto text-center">
            Here are some of my recent projects. Click on any project to see more details and multiple screenshots.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onClick={setSelectedProject}
            />
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