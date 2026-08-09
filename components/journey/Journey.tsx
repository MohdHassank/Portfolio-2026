"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { MILESTONES } from "./JourneyData";
import JourneyPath from "./JourneyPath";
import JourneyCard from "./JourneyCard";
import { ChevronDown } from "lucide-react";

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative w-full h-[200vh] bg-[#f8faff] selection:bg-red-500 selection:text-white"
    >
      {/* Sticky Fullscreen Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Subtle Watermark Background */}
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(148, 163, 184, 0.1) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(148, 163, 184, 0.1) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <h2 className="text-[17vw] font-black text-slate-900/[0.03] tracking-widest uppercase">
            JOURNEY
          </h2>
        </div>

        {/* Section Header */}
        <div className="absolute top-6 sm:top-8 z-20 text-center px-4 pointer-events-none">
          <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase block mb-1">
            THE JOURNEY
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How I Got Here
          </h2>

          <p className="text-xs text-slate-400 font-medium mt-1">
            Scroll to travel through the years
          </p>
        </div>

        {/* Central Road & Cards Area */}
        <div className="relative w-full max-w-5xl h-[72vh] sm:h-[76vh] mt-12 flex items-center justify-center">
          <JourneyPath progress={scrollYProgress} />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            {MILESTONES.map((milestone) => (
              <JourneyCard
                key={milestone.year}
                milestone={milestone}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Bottom Scroll Down Indicator */}
        <div className="absolute bottom-4 z-20 flex flex-col items-center pointer-events-none">
          <div className="p-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-xs text-slate-400 animate-bounce">
            <ChevronDown className="w-4 h-4" />
          </div>

          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
            Scroll Down
          </span>
        </div>

      </div>
    </section>
  );
}