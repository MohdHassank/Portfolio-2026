"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";

interface JourneyPathProps {
  progress: MotionValue<number>;
}

interface CarState {
  x: number;
  y: number;
  angle: number;
}

export default function JourneyPath({
  progress,
}: JourneyPathProps) {
  const pathRef = useRef<SVGPathElement | null>(null);

  const [carState, setCarState] = useState<CarState>({
    x: 600,
    y: 40,
    angle: 0,
  });

  /*
   * ============================================================
   * CURRENT JOURNEY PAGE
   *
   * ONLY:
   * 2023 -> LEFT
   * 2024 -> RIGHT
   *
   * This is intentionally a long, smooth road.
   * No repeated zig-zag.
   * No unnecessary turning points.
   * ============================================================
   */

  const pathD = `
    M 600 20

    C 650 45, 720 75, 760 125
    C 800 175, 760 225, 660 250

    C 540 280, 300 250, 180 320
    C 80 380, 100 455, 230 495

    C 380 540, 650 505, 820 555
    C 950 595, 970 675, 850 720

    C 720 770, 470 730, 300 785
    C 190 820, 220 885, 350 915

    C 450 940, 540 950, 600 980
  `;

  /*
   * ============================================================
   * CAR POSITION
   *
   * Car follows the exact SVG path.
   * Its rotation follows the direction of travel.
   * ============================================================
   */

  useMotionValueEvent(progress, "change", (latest) => {
    const path = pathRef.current;

    if (!path) return;

    const totalLength = path.getTotalLength();

    const safeProgress = Math.min(
      Math.max(latest, 0),
      1
    );

    const currentLength =
      safeProgress * totalLength;

    const point = path.getPointAtLength(
      currentLength
    );

    const lookBehind = path.getPointAtLength(
      Math.max(0, currentLength - 4)
    );

    const lookAhead = path.getPointAtLength(
      Math.min(totalLength, currentLength + 4)
    );

    const dx =
      lookAhead.x - lookBehind.x;

    const dy =
      lookAhead.y - lookBehind.y;

    const angle =
      (Math.atan2(dy, dx) * 180) / Math.PI;

    setCarState({
      x: point.x,
      y: point.y,
      angle,
    });
  });

  return (
    <svg
      viewBox="0 0 1000 1000"
      className="absolute inset-0 w-full h-full overflow-visible"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>

        {/* =====================================================
            ROAD SHADOW
        ====================================================== */}

        <filter
          id="journeyRoadShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="14"
            floodColor="#0f172a"
            floodOpacity="0.18"
          />
        </filter>

        {/* =====================================================
            VERY SOFT ROAD GLOW
        ====================================================== */}

        <filter
          id="journeyRoadGlow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="12" />
        </filter>

        {/* =====================================================
            CAR HEADLIGHT GLOW
        ====================================================== */}

        <radialGradient
          id="carLight"
          cx="100%"
          cy="50%"
          r="100%"
        >
          <stop
            offset="0%"
            stopColor="#fef08a"
            stopOpacity="1"
          />

          <stop
            offset="45%"
            stopColor="#fde68a"
            stopOpacity="0.45"
          />

          <stop
            offset="100%"
            stopColor="#fde68a"
            stopOpacity="0"
          />
        </radialGradient>

      </defs>

      {/* =======================================================
          SOFT BLUE AMBIENT GLOW
      ======================================================== */}

      <path
        d={pathD}
        fill="none"
        stroke="#60a5fa"
        strokeWidth="72"
        strokeLinecap="round"
        opacity="0.055"
        filter="url(#journeyRoadGlow)"
      />

      {/* =======================================================
          ROAD SHADOW
      ======================================================== */}

      <path
        d={pathD}
        fill="none"
        stroke="#0f172a"
        strokeWidth="82"
        strokeLinecap="round"
        opacity="0.22"
        filter="url(#journeyRoadShadow)"
      />

      {/* =======================================================
          ROAD OUTER BORDER
      ======================================================== */}

      <path
        d={pathD}
        fill="none"
        stroke="#111827"
        strokeWidth="68"
        strokeLinecap="round"
      />

      {/* =======================================================
          ROAD ASPHALT
      ======================================================== */}

      <path
        d={pathD}
        fill="none"
        stroke="#252b35"
        strokeWidth="58"
        strokeLinecap="round"
      />

      {/* =======================================================
          SUBTLE ROAD INNER SURFACE
      ======================================================== */}

      <path
        d={pathD}
        fill="none"
        stroke="#303744"
        strokeWidth="52"
        strokeLinecap="round"
      />

      {/* =======================================================
          ROAD EDGE LINES
      ======================================================== */}

      <path
        d={pathD}
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* =======================================================
          CENTER ROAD MARKING
      ======================================================== */}

      <path
        d={pathD}
        fill="none"
        stroke="#f8fafc"
        strokeWidth="3"
        strokeLinecap="butt"
        strokeDasharray="14 16"
        opacity="0.9"
      />

      {/* =======================================================
          2023 TURNING POINT
      ======================================================== */}

      <g>
        <circle
          cx="180"
          cy="320"
          r="16"
          fill="#3b82f6"
          opacity="0.08"
        />

        <circle
          cx="180"
          cy="320"
          r="7"
          fill="#3b82f6"
          opacity="0.2"
        />

        <circle
          cx="180"
          cy="320"
          r="4"
          fill="#2563eb"
        />

        <circle
          cx="180"
          cy="320"
          r="1.5"
          fill="white"
        />
      </g>

      {/* =======================================================
          2024 TURNING POINT
      ======================================================== */}

      <g>
        <circle
          cx="820"
          cy="555"
          r="16"
          fill="#3b82f6"
          opacity="0.08"
        />

        <circle
          cx="820"
          cy="555"
          r="7"
          fill="#3b82f6"
          opacity="0.2"
        />

        <circle
          cx="820"
          cy="555"
          r="4"
          fill="#2563eb"
        />

        <circle
          cx="820"
          cy="555"
          r="1.5"
          fill="white"
        />
      </g>

      {/* =======================================================
          RED CAR
          MUCH LARGER + ACTUAL CAR SILHOUETTE
      ======================================================== */}

      <g
        transform={`
          translate(${carState.x} ${carState.y})
          rotate(${carState.angle})
        `}
      >

        {/* Headlight beam */}

        <polygon
          points="17,0 42,-11 42,11"
          fill="url(#carLight)"
          opacity="0.65"
        />

        {/* Car shadow */}

        <ellipse
          cx="0"
          cy="5"
          rx="17"
          ry="8"
          fill="#020617"
          opacity="0.35"
        />

        {/* Main car body */}

        <rect
          x="-15"
          y="-9"
          width="30"
          height="18"
          rx="6"
          fill="#dc2626"
        />

        {/* Hood */}

        <rect
          x="6"
          y="-7"
          width="8"
          height="14"
          rx="3"
          fill="#ef4444"
        />

        {/* Cabin */}

        <path
          d="
            M -7 -7
            L -2 -13
            L 8 -13
            L 12 -7
            Z
          "
          fill="#991b1b"
        />

        {/* Front windshield */}

        <path
          d="
            M 1 -10
            L 7 -10
            L 9 -7
            L 1 -7
            Z
          "
          fill="#bae6fd"
        />

        {/* Rear windshield */}

        <path
          d="
            M -5 -9
            L -1 -10
            L 0 -7
            L -6 -7
            Z
          "
          fill="#dbeafe"
        />

        {/* Wheels */}

        <rect
          x="-10"
          y="-11"
          width="7"
          height="4"
          rx="1.5"
          fill="#020617"
        />

        <rect
          x="5"
          y="-11"
          width="7"
          height="4"
          rx="1.5"
          fill="#020617"
        />

        <rect
          x="-10"
          y="7"
          width="7"
          height="4"
          rx="1.5"
          fill="#020617"
        />

        <rect
          x="5"
          y="7"
          width="7"
          height="4"
          rx="1.5"
          fill="#020617"
        />

        {/* Headlights */}

        <circle
          cx="14"
          cy="-5"
          r="1.8"
          fill="#fef08a"
        />

        <circle
          cx="14"
          cy="5"
          r="1.8"
          fill="#fef08a"
        />

        {/* Rear lights */}

        <circle
          cx="-14"
          cy="-5"
          r="1.5"
          fill="#7f1d1d"
        />

        <circle
          cx="-14"
          cy="5"
          r="1.5"
          fill="#7f1d1d"
        />

      </g>
    </svg>
  );
}