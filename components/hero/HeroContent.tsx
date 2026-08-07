import React from "react";
import CTAButtons from "./CTAButtons";
import { FaGithub, FaLinkedinIn, FaCode, FaEnvelope } from "react-icons/fa";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MohdHassank", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-hassan-khan/", icon: FaLinkedinIn },
  { label: "LeetCode", href: "https://leetcode.com/u/m_hassan_21/", icon: FaCode },
  { label: "Email", href: "mailto:mohdhassankhan486@gmail.com", icon: FaEnvelope },
];

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-xl text-left z-10">
      {/* Greeting Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-md mb-6">
        <span className="text-sm">👋</span>
        <span className="text-xs font-semibold text-slate-700 tracking-tight">
          Hi, I'm
        </span>
      </div>

      {/* Main Name Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
        Mohd Hassan <br />
        <span className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#1e40af] bg-clip-text text-transparent">
          Khan
        </span>
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#2563eb] tracking-tight mb-4 flex items-center gap-1.5">
        <span>Software Engineer & Problem Solver</span>
        <span className="inline-block w-0.5 h-6 bg-[#2563eb] animate-pulse" />
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
        I build modern, scalable and impactful digital products that solve
        real-world problems.
      </p>

      {/* Call to Action Buttons */}
      <div className="w-full mb-10">
        <CTAButtons />
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Follow Me
        </span>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 hover:text-[#2563eb] hover:bg-white hover:border-blue-200 shadow-xs transition-all duration-200 active:scale-95"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}