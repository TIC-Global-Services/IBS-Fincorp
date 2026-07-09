"use client";

import React, { useEffect, useState, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  r: number;
}

const CX = 300;
const CY = 300;
const MAX_GEN = 7;          // 1 -> 128 blobs
const GEN_MS = 550;         // duration of each split
const TOTAL_MS = MAX_GEN * GEN_MS;
const TARGET_COUNT = 3000;

const OUTER_R = 240;
const PACK_FACTOR = 0.95;
const GAP_SCALE = 0.8;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function buildGeneration(N: number, rotationOffset: number): Blob[] {
  const r0 = OUTER_R * PACK_FACTOR;
  const rPack = r0 / Math.sqrt(N);
  const rDraw = rPack * GAP_SCALE;
  if (N === 1) {
    return [{ x: CX, y: CY, r: rDraw }];
  }
  const placeR = OUTER_R - rPack;
  const blobs: Blob[] = [];
  for (let i = 0; i < N; i++) {
    const d = placeR * Math.sqrt((i + 0.5) / N);
    const theta = i * GOLDEN_ANGLE + rotationOffset;
    blobs.push({
      x: CX + d * Math.cos(theta),
      y: CY + d * Math.sin(theta),
      r: rDraw,
    });
  }
  return blobs;
}

function buildGenerations(): Blob[][] {
  const rotationOffset = Math.random() * Math.PI * 2;
  const gens: Blob[][] = [];
  for (let g = 0; g <= MAX_GEN; g++) {
    gens.push(buildGeneration(Math.pow(2, g), rotationOffset));
  }
  return gens;
}

export default function StatsGraphic({ className = "" }: { className?: string }) {
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const [count, setCount] = useState<number>(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const gensRef = useRef<Blob[][]>([]);
  if (gensRef.current.length === 0) {
    gensRef.current = buildGenerations();
  }

  // Trigger animation once element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      if (gensRef.current.length > 0) {
        setBlobs(gensRef.current[0]);
      }
      setCount(0);
      return;
    }

    const gens = gensRef.current;
    startTimeRef.current = null;

    const frame = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }
      const elapsed = now - startTimeRef.current;

      if (elapsed >= TOTAL_MS) {
        setBlobs(gens[MAX_GEN]);
        setCount(TARGET_COUNT);
        return;
      }

      setCount(Math.floor((elapsed / TOTAL_MS) * TARGET_COUNT));

      const genIndex = Math.floor(elapsed / GEN_MS);
      const local = (elapsed % GEN_MS) / GEN_MS;
      const t = easeInOutCubic(local);
      const parents = gens[genIndex];
      const children = gens[genIndex + 1];

      const nextBlobs: Blob[] = [];
      for (let i = 0; i < parents.length; i++) {
        const p = parents[i];
        const c1 = children[i * 2];
        const c2 = children[i * 2 + 1];
        nextBlobs.push({
          x: lerp(p.x, c1.x, t),
          y: lerp(p.y, c1.y, t),
          r: lerp(p.r, c1.r, t),
        });
        nextBlobs.push({
          x: lerp(p.x, c2.x, t),
          y: lerp(p.y, c2.y, t),
          r: lerp(p.r, c2.r, t),
        });
      }

      setBlobs(nextBlobs);
      animationRef.current = requestAnimationFrame(frame);
    };

    animationRef.current = requestAnimationFrame(frame);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView]);

  return (
    <svg
      ref={containerRef}
      id="stage"
      viewBox="0 0 600 600"
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      <g id="blobGroup">
        {blobs.map((b, idx) => (
          <circle
            key={idx}
            cx={b.x.toFixed(1)}
            cy={b.y.toFixed(1)}
            r={Math.max(b.r, 0.5).toFixed(1)}
            fill="#FFBB00"
          />
        ))}
      </g>
      <text
        id="counter"
        x="300"
        y="330"
        textAnchor="middle"
        fontSize="80"
        fontWeight="700"
        fill="#FFFFFF"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        style={{ filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.7))" }}
      >
        ₹{count}Cr
      </text>
    </svg>
  );
}
