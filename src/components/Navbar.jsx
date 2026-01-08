import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  FolderGit2,
  Cpu,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  const navLinks = [
    { href: "#home", icon: <Home className="w-5 h-5" />, label: "Home" },
    { href: "#about", icon: <User className="w-5 h-5" />, label: "About" },
    { href: "#projects", icon: <FolderGit2 className="w-5 h-5" />, label: "Projects" },
    { href: "#skills", icon: <Cpu className="w-5 h-5" />, label: "Skills" },
    { href: "#contact", icon: <Mail className="w-5 h-5" />, label: "Contact" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 h-16 px-6 flex justify-between items-center backdrop-blur-md bg-white/80 dark:bg-[#2A2420]/80 border-b border-[#E6DACE] dark:border-[#3A312C] transition-colors">
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="font-display font-bold text-2xl text-[#6B4C3B] dark:text-[#F3EDE7]"
        >
          SP
        </a>

        <ul className="hidden md:flex items-center gap-2 font-display font-bold">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  activeLink === link.href
                    ? "bg-[#D4C9B6] text-[#5A3D2E] dark:bg-[#4A3B33] dark:text-[#F3EDE7]"
                    : "text-[#6B4C3B] hover:bg-[#E6DACE] dark:text-[#E6DED5] dark:hover:bg-[#3A312C]"
                }`}
              >
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-full bg-[#E6DACE] dark:bg-[#3A312C] text-[#6B4C3B] dark:text-[#F3EDE7] hover:scale-105 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </ul>

        <div className="flex md:hidden gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#E6DACE] dark:bg-[#3A312C]"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[#6B4C3B] dark:text-[#E6DED5]"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* OVERLAY MOBILE - DIUBAH Z-INDEX */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* MOBILE MENU - DIUBAH Z-INDEX */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 px-6 py-4 bg-white dark:bg-[#2A2420] transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3 font-display font-bold">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#6B4C3B] dark:text-[#E6DED5] hover:bg-[#E6DACE] dark:hover:bg-[#3A312C]"
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