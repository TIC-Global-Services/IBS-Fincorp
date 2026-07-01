"use client";

import Image from "next/image";

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
  size = 150,
  className = "",
  children,
}: CircularProgressProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Static SVG progress image without animation */}
      <div className="absolute inset-0 drop-shadow-md">
        <Image 
          src="/assets/progress.svg" 
          alt="Progress" 
          fill 
          className="object-contain" 
        />
      </div>

      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      )}
    </div>
  );
}
