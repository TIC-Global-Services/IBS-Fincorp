"use client";

import { useRef, useState, useEffect, useId } from "react";

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
  const targetLen = (value / 100) * C;
  const [trigger, setTrigger] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  const rawId = useId();
  const uid = `cp-${rawId.replace(/:/g, "")}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(prev => prev + 1);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes ${uid} {
          from {
            stroke-dashoffset: ${C};
            stroke-dasharray: ${C} ${C};
          }
          to {
            stroke-dashoffset: 0;
            stroke-dasharray: ${targetLen} ${C};
          }
        }
      `}</style>
      <div ref={ref} className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 220 220"
          role="img"
          className="select-none pointer-events-none"
        >
          <title>Yellow progress arc loading on top of a full black track, gap positioned bottom right</title>
          <circle cx="110" cy="110" r="90" fill="none" stroke="#1D1E1C" strokeWidth="28" />
          <circle
            key={trigger}
            cx="110" cy="110" r="90"
            fill="none" stroke="#FFBB00" strokeWidth="28" strokeLinecap="round"
            transform="rotate(100 110 110)"
            style={{
              strokeDasharray: `${C} ${C}`,
              strokeDashoffset: C,
              animation: trigger > 0 ? `${uid} 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards` : undefined,
            }}
          />
        </svg>
        {children && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
