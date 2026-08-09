export interface Milestone {
  year: string;
  title: string;
  description: string;
  highlights: string[];
  side: "left" | "right";
  stage: 1 | 2;

  theme: {
    badgeBg: string;
    badgeText: string;
    glowColor: string;
    borderColor: string;
    lineColor: string;
    dotFill: string;
  };

  activeRange: [number, number, number, number];

  nodeCoords: {
    x: number;
    y: number;
  };
}

export const MILESTONES: Milestone[] = [
  {
    year: "2023",
    title: "The Beginning",
    description:
      "Completed my 12th and began my journey toward engineering and technology.",

    highlights: [
      "Completed 12th",
      "Started exploring technology",
      "Decided to pursue B.Tech",
      "Beginning of my engineering journey",
    ],

    side: "left",
    stage: 1,

    theme: {
      badgeBg: "bg-emerald-50 border-emerald-200/80",
      badgeText: "text-emerald-700",
      glowColor: "rgba(16, 185, 129, 0.4)",
      borderColor: "#10b981",
      lineColor: "#10b981",
      dotFill: "#10b981",
    },

    activeRange: [0.02, 0.08, 0.22, 0.28],

    nodeCoords: {
      x: 22,
      y: 18,
    },
  },

  {
    year: "2024",
    title: "Building & Exploring",
    description:
      "Joined SRMS for B.Tech and started turning curiosity into real projects.",

    highlights: [
      "Joined SRMS",
      "Started B.Tech",
      "Began building projects",
      "Started participating in technical events",
      "Learned by experimenting and building",
      "Became more serious about software development",
    ],

    side: "right",
    stage: 1,

    theme: {
      badgeBg: "bg-blue-50 border-blue-200/80",
      badgeText: "text-blue-700",
      glowColor: "rgba(37, 99, 235, 0.4)",
      borderColor: "#2563eb",
      lineColor: "#2563eb",
      dotFill: "#2563eb",
    },

    activeRange: [0.24, 0.32, 0.44, 0.50],

    nodeCoords: {
      x: 78,
      y: 40,
    },
  },

  {
    year: "2025",
    title: "Going Beyond",
    description:
      "Moved from learning to execution — building products, competing, training and gaining industry exposure.",

    highlights: [
      "Registered a startup",
      "Participated in technical events",
      "Won multiple technical events",
      "Completed technical trainings",
      "Completed an industry internship",
      "Got another startup incubated",
      "Built significantly more real-world projects",
    ],

    side: "left",
    stage: 2,

    theme: {
      badgeBg: "bg-purple-50 border-purple-200/80",
      badgeText: "text-purple-700",
      glowColor: "rgba(147, 51, 234, 0.4)",
      borderColor: "#a855f7",
      lineColor: "#a855f7",
      dotFill: "#a855f7",
    },

    activeRange: [0.52, 0.60, 0.72, 0.78],

    nodeCoords: {
      x: 22,
      y: 62,
    },
  },

  {
    year: "2026",
    title: "The Next Chapter",
    description:
      "Now focused on becoming industry-ready while preparing for the next step in my software engineering career.",

    highlights: [
      "Placement preparation",
      "DSA practice",
      "Problem solving",
      "Strengthening software engineering fundamentals",
      "Preparing for professional opportunities",
      "Continuing to build meaningful projects",
    ],

    side: "right",
    stage: 2,

    theme: {
      badgeBg: "bg-amber-50 border-amber-200/80",
      badgeText: "text-amber-700",
      glowColor: "rgba(245, 158, 11, 0.4)",
      borderColor: "#f59e0b",
      lineColor: "#f59e0b",
      dotFill: "#f59e0b",
    },

    activeRange: [0.76, 0.84, 0.98, 1.0],

    nodeCoords: {
      x: 78,
      y: 84,
    },
  },
];