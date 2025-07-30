import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E9E1D1] text-[#6B4C3B] py-6 mt-16 border-t border-[#d6c4aa] text-center text-sm">
      <p className="flex items-center justify-center gap-1">
        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Sopiah &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
