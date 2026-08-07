"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-hidden"
      >
        <span className="text-xs font-semibold tracking-wide text-slate-500 group-hover:text-blue-600 transition-colors duration-200">
          View My Work
        </span>

        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-600 shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:border-blue-200 group-hover:text-blue-600 group-hover:shadow-[0_6px_24px_rgba(37,99,235,0.15)] transition-all duration-300 animate-bounce">
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        </div>
      </button>
    </div>
  );
}