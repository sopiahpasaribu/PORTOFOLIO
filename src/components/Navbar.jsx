import React from "react";
import { Home, User, FolderGit2, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 shadow-md z-50 px-6 py-4 flex justify-between items-center font-display"
      style={{ backgroundColor: "#E9E1D1" }} // cream
    >
      <h1
        className="text-2xl font-extrabold"
        style={{ color: "#6B4C3B" }} // coklat gelap
      >
        Sopiah
      </h1>
      <ul className="flex space-x-8 font-medium items-center">
        <li>
          <a
            href="#home"
            className="flex items-center gap-2 transition text-base"
            style={{ color: "#6B4C3B" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A9746E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4C3B")}
          >
            <Home className="w-5 h-5" />
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="flex items-center gap-2 transition text-base"
            style={{ color: "#6B4C3B" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A9746E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4C3B")}
          >
            <User className="w-5 h-5" />
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="flex items-center gap-2 transition text-base"
            style={{ color: "#6B4C3B" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A9746E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4C3B")}
          >
            <FolderGit2 className="w-5 h-5" />
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="flex items-center gap-2 transition text-base"
            style={{ color: "#6B4C3B" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#A9746E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4C3B")}
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
