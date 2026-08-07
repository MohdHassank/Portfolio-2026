"use client";

import React, { useState } from "react";
import Image from "next/image";
import FloatingInsights from "./FloatingInsights";

export default function HeroImage() {
const [isHovered, setIsHovered] = useState(false);

return (
    <div
        className="relative w-full max-w-[620px] aspect-square flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* Background Radial Blue Glow */}
        <div className="absolute inset-0 m-auto w-4/5 h-4/5 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Outer Orbit Lines */}
        <div className="absolute inset-4 rounded-full border border-blue-200/40 pointer-events-none" />
        <div className="absolute inset-12 rounded-full border border-blue-100/60 pointer-events-none" />

        {/* Main Glass Portrait Container */}
        <div className="relative w-3/4 h-3/4 rounded-full p-2 bg-gradient-to-b from-white/90 via-white/60 to-white/30 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(37,99,235,0.15)] flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-100 to-blue-50/50">
                <Image
                    src="/images/profile.png"
                    alt="Mohd Hassan Khan"
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
                    className="object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-500"
                />
            </div>
        </div>

        {/* Floating Insights overlay stats positioned around orbit */}
        <FloatingInsights isHovered={isHovered} />
    </div>
);
}