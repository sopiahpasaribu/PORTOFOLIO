import React, { useState } from "react";

const AboutSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const educationData = [
    {
      degree: "D3 Informatics Management",
      institution: "Universitas Nasional PASIM Bandung",
      period: "2023 - 2025",
      description: "Graduated through the Sustainable Community Empowerment (PUB) Scholarship Program"
    }
  ];

  // Data sertifikat & pelatihan
  const certificatesData = [
    {
      title: "Programming Training – PUB Scholarship Program",
      issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
      year: "2024",
      description: "Training covering Algorithm using C Language, Database Systems, and Data Structures",
      image: "/certificates/programming-training.jpg"
    },
    {
      title: "Git & GitHub",
      issuer: "PUB Scholarship Program",
      year: "2024",
      description: "Version control fundamentals using Git and GitHub for collaborative development",
      image: "/certificates/git-github.jpg"
    },
    {
      title: "React Fundamental",
      issuer: "PUB Scholarship Program",
      year: "2024",
      description: "Introduction to React fundamentals including components, props, and state management",
      image: "/certificates/react-fundamental.jpg"
    },
    {
      title: "React & Java Integration",
      issuer: "PUB Scholarship Program",
      year: "2025",
      description: "Frontend development using React integrated with Java-based backend services",
      image: "/certificates/react-java.jpg"
    }
  ];

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto';
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'certificate-modal-backdrop') {
      closeCertificateModal();
    }
  };

  return (
    <>
      <section
        id="about"
        className="py-12 md:py-16 bg-[#FAF7F0] dark:bg-[#1E1A17]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-display font-semibold
                         text-[#6B4C3B] dark:text-[#E6DED5] mb-3"
              data-aos="fade-down"
            >
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-[#6B4C3B] dark:bg-[#E6DED5] mx-auto rounded-full" />
          </div>

          {/* Description */}
          <div className="mb-10 md:mb-12">
            <p
              className="text-sm sm:text-base text-[#5A4A3C] dark:text-[#CFC7BE]
                         leading-relaxed text-justify max-w-3xl mx-auto"
              data-aos="fade-up"
            >
              I am a graduate of D3 Informatics Management from Universitas Nasional
              PASIM Bandung through the Sustainable Community Empowerment (PUB)
              Scholarship Program. I have completed various programming trainings
              and gained hands-on experience in developing responsive and
              user-friendly web applications. I am proficient in Java, C,
              JavaScript, Spring Boot, Node.js, Express.js, React.js, MySQL, and
              PostgreSQL. With strong teamwork, communication, and problem-solving
              skills, I am highly motivated to continuously grow and contribute as
              a web developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

            {/* Formal Education */}
            <div className="bg-white dark:bg-[#2A231C] rounded-lg shadow-sm p-5 md:p-6"
                 data-aos="fade-right">
              <h3 className="text-lg font-semibold text-[#6B4C3B] dark:text-[#E6DED5] mb-4">
                Formal Education
              </h3>

              {educationData.map((edu, i) => (
                <div key={i}>
                  <h4 className="font-medium text-[#5A4A3C] dark:text-[#D8CFC5]">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#7B6F61] dark:text-[#B0A698]">
                    {edu.institution}
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-[#F5EFE6] dark:bg-[#3A3128]
                                   text-[#6B4C3B] dark:text-[#E6DED5] rounded">
                    {edu.period}
                  </span>
                  <p className="mt-2 text-xs text-[#7B6F61] dark:text-[#B0A698]">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="bg-white dark:bg-[#2A231C] rounded-lg shadow-sm p-5 md:p-6"
                 data-aos="fade-left">
              <h3 className="text-lg font-semibold text-[#6B4C3B] dark:text-[#E6DED5] mb-4">
                Certificates & Training
              </h3>

              <div className="space-y-4">
                {certificatesData.map((cert, i) => (
                  <div key={i} className="pb-4 border-b dark:border-[#3A3128] last:border-0">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium text-[#5A4A3C] dark:text-[#D8CFC5]">
                        {cert.title}
                      </h4>
                      <span className="text-xs bg-[#F5EFE6] dark:bg-[#3A3128]
                                       text-[#6B4C3B] dark:text-[#E6DED5]
                                       px-2 py-1 rounded">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-sm text-[#7B6F61] dark:text-[#B0A698] mb-1">
                      Issued by: {cert.issuer}
                    </p>
                    <p className="text-xs text-[#7B6F61] dark:text-[#B0A698] mb-3">
                      {cert.description}
                    </p>
                    
                    {/* Button untuk melihat sertifikat */}
                    <button
                      onClick={() => openCertificateModal(cert)}
                      className="w-full py-2 text-xs bg-[#F5EFE6] dark:bg-[#3A3128] 
                                 text-[#6B4C3B] dark:text-[#E6DED5] 
                                 hover:bg-[#E6DED5] dark:hover:bg-[#4A4238]
                                 rounded border border-[#E6DED5] dark:border-[#4A4238]
                                 transition-colors duration-300 flex items-center justify-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Certificate
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popup Modal untuk Sertifikat */}
      {isModalOpen && selectedCertificate && (
        <div
          id="certificate-modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Tombol Close */}
            <button
              onClick={closeCertificateModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Konten Modal */}
            <div className="bg-white dark:bg-[#2A231C] rounded-lg overflow-hidden shadow-2xl">
              {/* Header Modal */}
              <div className="p-4 border-b dark:border-[#3A3128]">
                <h3 className="text-lg font-semibold text-[#6B4C3B] dark:text-[#E6DED5]">
                  {selectedCertificate.title}
                </h3>
                <p className="text-sm text-[#7B6F61] dark:text-[#B0A698]">
                  {selectedCertificate.issuer} • {selectedCertificate.year}
                </p>
              </div>

              {/* Gambar Sertifikat */}
              <div className="p-4">
                <div className="relative">
                  <img
                    src={selectedCertificate.image}
                    alt={`Certificate: ${selectedCertificate.title}`}
                    className="w-full h-auto max-h-[60vh] object-contain rounded"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded hidden">
                    <span className="text-gray-500">Loading certificate...</span>
                  </div>
                </div>
              </div>

              {/* Footer Modal */}
              <div className="p-4 border-t dark:border-[#3A3128]">
                <p className="text-sm text-[#5A4A3C] dark:text-[#D8CFC5] mb-2">
                  {selectedCertificate.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#7B6F61] dark:text-[#B0A698]">
                    Click outside to close
                  </span>
                  <button
                    onClick={closeCertificateModal}
                    className="px-4 py-2 text-sm bg-[#6B4C3B] dark:bg-[#E6DED5] 
                               text-white dark:text-[#1E1A17] 
                               hover:bg-[#5A3F30] dark:hover:bg-[#D8CFC5]
                               rounded transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;