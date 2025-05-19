import React from "react";

export default function Footer() {
  return (
    <footer
      className="py-4 text-center mt-10 font-sans tracking-wide"
      style={{ backgroundColor: "#E9E1D1", color: "#6B4C3B" }} // cream bg & coklat teks
    >
      <p className="font-display text-base">
        &copy; {new Date().getFullYear()} Sopiah. Built with ❤️ using React & Tailwind CSS.
      </p>
    </footer>
  );
}
