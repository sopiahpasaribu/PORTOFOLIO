import React, { useState } from "react";
import { Home, User, FolderGit2, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", icon: <Home className="w-5 h-5" />, label: "Home" },
    { href: "#about", icon: <User className="w-5 h-5" />, label: "About" },
    { href: "#projects", icon: <FolderGit2 className="w-5 h-5" />, label: "Projects" },
    { href: "#contact", icon: <Mail className="w-5 h-5" />, label: "Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 shadow-md z-50 px-6 py-4 flex justify-between items-center font-display"
        style={{ backgroundColor: "#E9E1D1" }}
      >
        <h1 className="text-2xl font-extrabold text-[#6B4C3B]">Sopiah</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="flex items-center gap-2 transition text-base"
                style={{ color: "#6B4C3B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A9746E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4C3B")}
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#6B4C3B] focus:outline-none z-50"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 bg-[#E9E1D1] px-6 py-4 shadow-md transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        } md:hidden`}
      >
        <ul className="flex flex-col space-y-4 font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-[#6B4C3B] hover:text-[#A9746E] transition text-base"
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
