"use client";

import { motion } from "framer-motion";

interface CircularProgressProps {
  value: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CircularProgress({
  value,
  size = 150,
  strokeWidth = 30,
  color = "#FFBB00",
  trackColor = "#1D1E1C",
  className = "",
  children,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  // Create a visual gap between the segments
  const gapPercentage = 3;
  // We use 80% for the yellow part to match the visual in the reference
  const fillPercentage = 80;
  // The dark track takes 14% to visually match the image
  const trackPercentage = 14;

  const fillLength = (fillPercentage / 100) * circumference;
  const trackLength = (trackPercentage / 100) * circumference;

  const fillOffset = circumference - fillLength;
  const trackOffset = circumference - trackLength;

  // Rotation for the dark track segment so it sits perfectly after the yellow fill
  const trackRotation = (fillPercentage + gapPercentage) * 3.6;

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform rotate-90">

        {/* Animated Progress (Yellow segment) */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: fillOffset }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
        />

        {/* Animated Track (Dark segment) */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: trackOffset }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
          style={{
            transformOrigin: "center",
            transform: `rotate(${trackRotation}deg)`
          }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
