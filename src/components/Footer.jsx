import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E9E1D1] text-[#6B4C3B] py-6 mt-16 border-t border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">          
          <div className="pt-4 border-t border-amber-200 w-full max-w-xs text-center">
            <p className="flex items-center justify-center text-sm">
              <span className="flex items-center mr-1">
                sopiah <Heart className="mx-1 fill-red-500 text-red-500" size={16} />
              </span>
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}