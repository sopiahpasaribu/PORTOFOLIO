import React, { useState } from "react";
import { Home, User, FolderGit2, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", icon: <Home className="w-5 h-5" />, label: "Home" },
    // { href: "#about", icon: <User className="w-5 h-5" />, label: "About" },
    { href: "#projects", icon: <FolderGit2 className="w-5 h-5" />, label: "Projects" },
    { href: "#contact", icon: <Mail className="w-5 h-5" />, label: "Contact" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar Header */}
      <nav 
        className="fixed top-0 left-0 right-0 shadow-md z-50 px-6 py-3 flex justify-between items-center font-display"
        style={{ 
          backgroundColor: "#fff",
          height: "64px"
        }}
      >
        {/* Logo container */}
        <div className="flex items-center" style={{ height: "64px" }}>
          <a 
            href="#home" 
            className="flex items-center h-full"
            onClick={() => handleLinkClick("#home")}
          >
            <img 
              src="/logosp.png"
              alt="Sopiah Logo" 
              style={{
                height: "120px",
                width: "auto",
                objectFit: "contain",
                position: "relative",
                top: "8px"
              }}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 font-medium items-center">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`flex items-center gap-2 transition-all text-base px-3 py-2 rounded-lg ${
                  activeLink === link.href
                    ? "bg-[#D4C9B6] text-[#5A3D2E] shadow-inner"
                    : "text-[#6B4C3B] hover:bg-[#D4C9B6] hover:text-[#5A3D2E]"
                }`}
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none z-50 p-2 rounded-lg hover:bg-[#D4C9B6] transition-colors"
          style={{ color: "#6B4C3B" }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 px-6 py-4 shadow-md transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        } md:hidden`}
        style={{ 
          backgroundColor: "#fff",
          borderBottom: "1px solid #D4C9B6"
        }}
      >
        <ul className="flex flex-col space-y-3 font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`flex items-center gap-3 transition-all text-base px-4 py-3 rounded-lg ${
                  activeLink === link.href
                    ? "bg-[#D4C9B6] text-[#5A3D2E] font-semibold"
                    : "text-[#6B4C3B] hover:bg-[#D4C9B6]"
                }`}
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
