"use client";

import React from "react";
import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";

import { Milestone } from "./JourneyData";

interface JourneyCardProps {
  milestone: Milestone;
  progress: MotionValue<number>;
}

export default function JourneyCard({
  milestone,
  progress,
}: JourneyCardProps) {
  const isLeft = milestone.side === "left";

  /*
   * ============================================================
   * CARD TIMING
   *
   * Each card:
   *
   * hidden
   *   ↓
   * starts appearing
   *   ↓
   * becomes visible
   *   ↓
   * fully visible when car reaches milestone
   *   ↓
   * stays briefly
   *   ↓
   * completely disappears
   *
   * The important part:
   * the card is NOT permanently visible.
   * Once the journey moves to the next milestone,
   * the previous card fades completely out.
   * ============================================================
   */

  const year = milestone.year;

  const timeline: Record<
    string,
    [number, number, number, number, number, number]
  > = {
    "2023": [0.03, 0.07, 0.12, 0.17, 0.24, 0.30],
    "2024": [0.27, 0.32, 0.37, 0.42, 0.49, 0.55],
    "2025": [0.52, 0.57, 0.62, 0.67, 0.74, 0.80],
    "2026": [0.77, 0.82, 0.87, 0.92, 0.97, 1.0],
  };

  const revealRange =
    timeline[year] ?? [0, 0.05, 0.10, 0.15, 0.20, 0.25];

  /*
   * ============================================================
   * OPACITY
   *
   * 0      = invisible
   * 0.25   = beginning to appear
   * 0.75   = mostly visible
   * 1      = fully visible
   * 0.35   = leaving
   * 0      = completely gone
   * ============================================================
   */

  const opacity = useTransform(
    progress,
    revealRange,
    [0, 0.25, 0.75, 1, 0.35, 0]
  );

  /*
   * ============================================================
   * HORIZONTAL MOVEMENT
   *
   * Left cards enter from left.
   * Right cards enter from right.
   *
   * No vertical movement.
   * ============================================================
   */

  const x = useTransform(
    progress,
    revealRange,
    isLeft
      ? [-45, -25, -8, 0, -8, -30]
      : [45, 25, 8, 0, 8, 30]
  );

  /*
   * ============================================================
   * SCALE
   * ============================================================
   */

  const scale = useTransform(
    progress,
    revealRange,
    [0.94, 0.97, 0.99, 1, 0.98, 0.94]
  );

  /*
   * ============================================================
   * BLUR
   *
   * Card starts soft.
   * Becomes crisp at the milestone.
   * Gets soft again while leaving.
   * ============================================================
   */

  const blur = useTransform(
    progress,
    revealRange,
    [
      "blur(8px)",
      "blur(5px)",
      "blur(2px)",
      "blur(0px)",
      "blur(3px)",
      "blur(8px)",
    ]
  );

  /*
   * ============================================================
   * CARD POSITION
   *
   * 2023 -> LEFT / upper area
   * 2024 -> RIGHT / lower area
   *
   * 2025 -> LEFT / upper area
   * 2026 -> RIGHT / lower area
   *
   * This also works when Journey renders the years
   * in separate pages/stages.
   * ============================================================
   */

  const isUpperYear =
    year === "2023" || year === "2025";

  const positionClass = isUpperYear
    ? `
      left-4
      sm:left-8
      lg:left-8
      xl:left-10
      top-[18%]
    `
    : `
      right-4
      sm:right-8
      lg:right-8
      xl:right-10
      top-[58%]
    `;

  return (
    <motion.div
      style={{
        opacity,
        x,
        scale,
        filter: blur,
      }}
      className={`
        absolute

        ${positionClass}

        w-[270px]
        sm:w-[300px]
        lg:w-[320px]
        xl:w-[330px]

        z-30

        pointer-events-none

        will-change-transform
      `}
    >
      {/* ======================================================
          CONNECTOR
      ======================================================= */}

      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2

          h-px

          hidden
          lg:block

          ${
            isLeft
              ? `
                right-[-85px]
                w-[85px]

                bg-gradient-to-r
                from-blue-400/0
                via-blue-300/60
                to-blue-400
              `
              : `
                left-[-85px]
                w-[85px]

                bg-gradient-to-r
                from-blue-400
                via-blue-300/60
                to-blue-400/0
              `
          }
        `}
      />

      {/* ======================================================
          CONNECTOR POINT
      ======================================================= */}

      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2

          hidden
          lg:block

          w-2
          h-2

          rounded-full

          bg-blue-500

          shadow-[0_0_14px_rgba(59,130,246,0.65)]

          ${
            isLeft
              ? "right-[-89px]"
              : "left-[-89px]"
          }
        `}
      />

      {/* ======================================================
          CARD BODY
      ======================================================= */}

      <div
        className="
          relative

          rounded-[22px]

          bg-white/90
          backdrop-blur-xl

          border
          border-white/90

          shadow-[0_20px_50px_rgba(15,23,42,0.10)]

          p-5
          sm:p-6

          overflow-hidden
        "
      >
        {/* ====================================================
            YEAR BADGE
        ===================================================== */}

        <span
          className={`
            inline-flex
            items-center

            px-2.5
            py-1

            rounded-full

            text-[10px]
            font-bold

            border

            ${milestone.theme.badgeBg}
            ${milestone.theme.badgeText}
          `}
        >
          {milestone.year}
        </span>

        {/* ====================================================
            TITLE
        ===================================================== */}

        <h3
          className="
            mt-3

            text-lg
            sm:text-xl

            font-extrabold
            text-slate-900

            tracking-tight

            leading-tight
          "
        >
          {milestone.title}
        </h3>

        {/* ====================================================
            DESCRIPTION
        ===================================================== */}

        <p
          className="
            mt-2

            text-xs
            sm:text-sm

            text-slate-500

            leading-relaxed
          "
        >
          {milestone.description}
        </p>

        {/* ====================================================
            HIGHLIGHTS
        ===================================================== */}

        <ul className="mt-4 space-y-2">
          {milestone.highlights.map(
            (item, index) => (
              <li
                key={index}
                className="
                  flex
                  items-start
                  gap-2

                  text-[11px]
                  sm:text-xs

                  text-slate-600

                  font-medium

                  leading-relaxed
                "
              >
                <span
                  className="
                    mt-0.5

                    flex-shrink-0

                    text-blue-500

                    font-bold
                  "
                >
                  ✓
                </span>

                <span>
                  {item}
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </motion.div>
  );
}