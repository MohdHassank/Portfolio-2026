"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Trophy,
  FileCheck,
  Briefcase,
  Layers,
  GraduationCap,
  CheckCircle2,
  Award,
} from "lucide-react";

interface InsightCard {
  id: string;
  title: string;
  value: string;
  icon: React.ElementType;
  position: string;
}

const INSIGHTS_DATA: InsightCard[] = [
  {
    id: "projects",
    title: "Projects Built",
    value: "10+",
    icon: Code2,
    position: "-top-2 left-2 sm:-top-4 sm:left-4",
  },
  {
    id: "internship",
    title: "Industry Internship",
    value: "1",
    icon: Briefcase,
    position: "-top-2 right-2 sm:-top-4 sm:right-4",
  },
  {
    id: "hackathons",
    title: "Hackathons Won",
    value: "6+",
    icon: Trophy,
    position: "top-1/3 -left-4 sm:-left-8 -translate-y-1/2",
  },
  {
    id: "tech",
    title: "Technologies",
    value: "5+",
    icon: Layers,
    position: "top-1/3 -right-4 sm:-right-8 -translate-y-1/2",
  },
  {
    id: "patent",
    title: "Patent Filed",
    value: "1",
    icon: FileCheck,
    position: "bottom-1/3 -left-4 sm:-left-8 translate-y-1/2",
  },
  {
    id: "problems",
    title: "Problems Solved",
    value: "1000+",
    icon: CheckCircle2,
    position: "bottom-1/3 -right-4 sm:-right-8 translate-y-1/2",
  },
  {
    id: "learning",
    title: "Years of Learning",
    value: "3+",
    icon: GraduationCap,
    position: "-bottom-2 left-6 sm:-bottom-4 sm:left-12",
  },
  {
    id: "sgpa",
    title: "Average SGPA",
    value: "7.4/10",
    icon: Award,
    position: "-bottom-2 right-6 sm:-bottom-4 sm:right-12",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

interface FloatingInsightsProps {
  isHovered?: boolean;
}

export default function FloatingInsights({ isHovered = false }: FloatingInsightsProps) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-20"
      variants={containerVariants}
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
    >
      {INSIGHTS_DATA.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className={`absolute ${card.position} pointer-events-auto flex items-center gap-3 p-2.5 sm:p-3.5 bg-white/80 backdrop-blur-md border border-blue-100/80 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.08)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.15)] transition-shadow duration-300 hover:scale-105 hover:border-blue-300/80`}
          >
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50/80 text-[#2563eb] border border-blue-100">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">
                {card.value}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 mt-1">
                {card.title}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}