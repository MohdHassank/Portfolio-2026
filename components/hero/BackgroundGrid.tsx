import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Primary Radial Glowing Spheres */}
      <div className="absolute top-1/4 right-10 -translate-y-1/2 w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] bg-gradient-to-tr from-blue-400/25 via-sky-300/20 to-indigo-200/10 rounded-full blur-3xl opacity-80" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] bg-gradient-to-br from-blue-200/30 via-indigo-100/20 to-transparent rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-10 right-1/3 w-[350px] h-[350px] bg-gradient-to-tl from-sky-200/20 to-blue-300/15 rounded-full blur-2xl opacity-60" />

      {/* Large Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(29, 30, 32, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial Gradient Mask for Edge Fading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#f8fafd_85%)]" />

      {/* Ambient Top Light Beam Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-blue-100/40 via-sky-50/20 to-transparent blur-2xl pointer-events-none" />
    </div>
  );
}