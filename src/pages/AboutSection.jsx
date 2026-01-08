import React, { useState } from "react";

const AboutSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const educationData = [
    {
      degree: "D3 Informatics Management",
      institution: "Universitas Nasional PASIM Bandung",
      period: "2023 - 2025",
      description:
        "Graduated through the Sustainable Community Empowerment (PUB) Scholarship Program",
    },
  ];

  const certificatesData = [
    {
      title: "Programming Training – PUB Scholarship Program",
      issuer: "Pemberdayaan Umat Berkelanjutan (PUB)",
      year: "2024",
      description:
        "Training covering Algorithm using C Language, Database Systems, and Data Structures",
      images: [
        "/algoritma bahasa c.jpeg",
        "/DATABASE.jpeg",
        "/STRUKTURDARA.jpeg",
      ],
    },
    {
      title: "Git & GitHub",
      issuer: "PUB Scholarship Program",
      year: "2024",
      description:
        "Version control fundamentals using Git and GitHub for collaborative development",
      image: "/GITHUB.jpeg",
    },
    {
      title: "React Fundamental",
      issuer: "PUB Scholarship Program",
      year: "2024",
      description:
        "Introduction to React fundamentals including components, props, and state management",
      image: "/REACT.jpeg",
    },
    {
      title: "React & Java Integration",
      issuer: "PUB Scholarship Program",
      year: "2025",
      description:
        "Frontend development using React integrated with Java-based backend services",
      image: "/REACT JAVA.jpeg",
    },
  ];

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCertificateModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "certificate-modal-backdrop") {
      closeCertificateModal();
    }
  };

  return (
    <>
      <section id="about" className="py-14 bg-[#FAF7F0] dark:bg-[#1E1A17]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#6B4C3B] dark:text-[#E6DED5]">
              About Me
            </h2>
            <div className="w-16 h-1 bg-[#6B4C3B] mx-auto mt-3 rounded-full" />
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-justify text-[#5A4A3C] dark:text-[#CFC7BE] mb-12">
            I am a graduate of D3 Informatics Management from Universitas Nasional
            PASIM Bandung through the Sustainable Community Empowerment (PUB)
            Scholarship Program. I have completed various programming trainings
            and gained hands-on experience in developing responsive and
            user-friendly web applications.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white dark:bg-[#2A231C] rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-[#6B4C3B] dark:text-[#E6DED5]">
                Formal Education
              </h3>

              {educationData.map((edu, i) => (
                <div key={i}>
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-sm text-[#7B6F61]">
                    {edu.institution}
                  </p>
                  <span className="inline-block mt-2 text-xs px-3 py-1 bg-[#F5EFE6] rounded">
                    {edu.period}
                  </span>
                  <p className="mt-2 text-sm text-[#7B6F61]">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="bg-white dark:bg-[#2A231C] rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-[#6B4C3B] dark:text-[#E6DED5]">
                Certificates & Training
              </h3>

              {certificatesData.map((cert, i) => (
                <div key={i} className="border-b pb-4 mb-4 last:border-none">
                  <div className="flex justify-between">
                    <h4 className="font-medium">{cert.title}</h4>
                    <span className="text-xs bg-[#F5EFE6] px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#7B6F61]">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-sm text-[#7B6F61] mb-3">
                    {cert.description}
                  </p>

                  <button
                    onClick={() => openCertificateModal(cert)}
                    className="w-full py-2 text-sm bg-[#F5EFE6] hover:bg-[#E6DED5] rounded transition"
                  >
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && selectedCertificate && (
        <div
          id="certificate-modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[999] flex items-center justify-center"
        >
          <div className="relative bg-white dark:bg-[#2A231C] rounded-xl max-w-2xl w-full shadow-lg">
            {/* Close Button */}
            <button
              onClick={closeCertificateModal}
              className="absolute -top-10 right-0 z-10 w-8 h-8 flex items-center justify-center bg-white dark:bg-[#2A231C] rounded-full shadow hover:scale-110 transition-transform duration-200"
            >
              <span className="text-lg text-[#6B4C3B] dark:text-[#E6DED5]">
                ✕
              </span>
            </button>

            {/* Header */}
            <div className="p-4 border-b border-[#F5EFE6] dark:border-[#3A3329]">
              <h3 className="text-base font-semibold text-[#6B4C3B] dark:text-[#E6DED5] mb-1">
                {selectedCertificate.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-[#7B6F61] dark:text-[#CFC7BE]">
                <span>{selectedCertificate.issuer}</span>
                <span>•</span>
                <span>{selectedCertificate.year}</span>
              </div>
            </div>

            {/* Images */}
            <div className="p-4">
              {Array.isArray(selectedCertificate.images) ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedCertificate.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`certificate-${i}`}
                      className="
                        w-full h-44 object-cover
                        rounded border border-[#F5EFE6] dark:border-[#3A3329]
                      "
                    />
                  ))}
                </div>
              ) : (
                <div className="flex justify-center">
                  <img
                    src={selectedCertificate.image}
                    alt="certificate"
                    className="
                      w-full max-w-xs h-auto
                      object-contain
                      rounded border border-[#F5EFE6] dark:border-[#3A3329]
                    "
                  />
                </div>
              )}

              {selectedCertificate.description && (
                <p className="mt-4 text-sm text-[#7B6F61] dark:text-[#CFC7BE] text-center">
                  {selectedCertificate.description}
                </p>
              )}
            </div>

            <div className="p-4 border-t border-[#F5EFE6] dark:border-[#3A3329]" />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
