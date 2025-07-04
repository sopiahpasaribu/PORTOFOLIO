import React from "react";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-[60vh] py-16"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-[#6B4C3B] text-center mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {[
            {
              role: "Pelatihan Pemrograman - PUB (Pemberdayaan Umat Berkelanjutan)",
              period: "2023 - Sekarang",
              description: "Mempelajari bahasa pemrograman (C, Node.js, Java, React, JavaScript) dan algoritma pembuatan web statis dan dinamis, serta membangun REST API sederhana. Mengembangkan proyek desktop & web termasuk implementasi struktur data, penyelesaian masalah berbasis algoritma, dan optimasi kode."
            },
            {
              role: "Proyek Pribadi: Website Catatan Harian",
              company: "React & LocalStorage",
              period: "2024",
              description: "Aplikasi to-do list dengan fitur tambah, edit, hapus, dan filter. Dibangun menggunakan React, useState, dan localStorage."
            },
            {
              role: "Proyek Pribadi: REST API CRUD Barang",
              company: "Node.js + Express + Dbeaver",
              period: "2025",
              description: "Membangun backend CRUD menggunakan Node.js dan Express, terhubung ke database DBeaver, dan menggunakan Sequelize sebagai ORM."
            }
          ].map((exp, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6B4C3B] hover:shadow-lg transition-all"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="text-xl font-semibold text-[#6B4C3B]">{exp.role}</h3>
              <div className="flex items-center text-[#A9746E] mb-2">
                <span>{exp.company}</span>
                <span className="mx-2">•</span>
                <span>{exp.period}</span>
              </div>
              <p className="text-[#7B6F61]">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;