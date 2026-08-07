import React from "react";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Primary Download Resume Button */}
      <a
        href="/resume/resume.pdf"
        download
        className="group flex items-center justify-center gap-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 active:scale-95"
      >
        <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        <span>Download Resume</span>
      </a>

      {/* Secondary View My Work Button */}
      <Link
        href="#projects"
        className="group flex items-center justify-center gap-2.5 bg-white/80 hover:bg-white text-slate-800 hover:text-blue-600 font-semibold text-sm px-6 py-3.5 rounded-2xl border border-slate-200/80 hover:border-blue-200/80 shadow-sm hover:shadow-md backdrop-blur-md transition-all duration-300 active:scale-95"
      >
        <span>View My Work</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}