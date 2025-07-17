import React from "react";
import { Briefcase, CalendarDays, Code2, Database, Cpu } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Pelatihan Pemrograman - PUB (Pemberdayaan Umat Berkelanjutan)",
      period: "2023 - Sekarang",
      description: "Mempelajari bahasa pemrograman (C, Node.js, Java, React, JavaScript) dan algoritma pembuatan web statis dan dinamis, serta membangun REST API sederhana. Mengembangkan proyek desktop & web termasuk implementasi struktur data, penyelesaian masalah berbasis algoritma, dan optimasi kode.",
      icon: <Briefcase className="w-5 h-5 text-[#6B4C3B]" />
    },
    {
      role: "Website Catatan Harian",
      company: "React & LocalStorage",
      period: "2024",
      description: "Aplikasi to-do list dengan fitur tambah, edit, hapus, dan filter. Dibangun menggunakan React, useState, dan localStorage.",
      icon: <Code2 className="w-5 h-5 text-[#6B4C3B]" />
    },
    {
      role: "REST API CRUD Barang",
      company: "Node.js + Express + Dbeaver",
      period: "2025",
      description: "Membangun backend CRUD menggunakan Node.js dan Express, terhubung ke database DBeaver, dan menggunakan Sequelize sebagai ORM.",
      icon: <Database className="w-5 h-5 text-[#6B4C3B]" />
    }
  ];

  return (
    <section id="experience" className="py-16 bg-[#FAF7F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#6B4C3B] mb-2">
           Experience
          </h2>
          <p className="text-[#9E8E7E]">My professional journey and projects</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#D4B483] group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 mt-1 bg-[#F5EFE1] rounded-lg group-hover:bg-[#E8D9C5] transition-colors">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#6B4C3B]">{exp.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-[#A9746E] gap-1 sm:gap-2 my-1.5">
                    {exp.company && (
                      <>
                        <span className="flex items-center gap-1">
                          <Cpu className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline">•</span>
                      </>
                    )}
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#7B6F61] mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;