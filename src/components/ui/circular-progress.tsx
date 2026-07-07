"use client";

import { motion } from "framer-motion";

interface CircularProgressProps {
  value?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CircularProgress({
  value = 78,
  size = 160,
  className = "",
  children,
}: CircularProgressProps) {
  const C = 565.5;
  const targetPercent = value; // how much of the circle yellow fills
  const targetLen = (targetPercent / 100) * C;

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 220 220"
        role="img"
        className="select-none pointer-events-none"
      >
        <title>Yellow progress arc loading on top of a full black track, gap positioned bottom right</title>
        
        {/* BLACK TRACK: full circle, always visible underneath */}
        <circle cx="110" cy="110" r="90" fill="none" stroke="#1D1E1C" strokeWidth="28" />
        
        {/* YELLOW: grows starting from bottom-left-ish point, clockwise, so the uncovered gap lands bottom-right */}
        <motion.circle
          cx="110"
          cy="110"
          r="90"
          fill="none"
          stroke="#FFBB00"
          strokeWidth="28"
          strokeLinecap="round"
          transform="rotate(100 110 110)"
          initial={{
            strokeDasharray: `${C} ${C}`,
            strokeDashoffset: C,
          }}
          whileInView={{
            strokeDasharray: `${targetLen} ${C}`,
            strokeDashoffset: 0,
          }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            duration: 1.6,
            ease: [0.4, 0, 0.2, 1], // Custom bezier ease
          }}
        />
      </svg>

      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      )}
    </div>
  );
}
