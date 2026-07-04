"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const VIDEOS = [
  "/assets/herocarousel/video1.mp4",
  "/assets/herocarousel/video2.mp4",
  "/assets/herocarousel/video3.mp4",
  "/assets/herocarousel/video4.mp4",
];

export default function CardStackCarousel() {
  const [cards, setCards] = useState(VIDEOS);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      videoRefs.current.forEach((video) => { video.muted = true; });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleFrontClick = () => {
    const frontSrc = cards[0];
    const video = videoRefs.current.get(frontSrc);
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
    }
  };

  return (
    <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[450px]">
      <AnimatePresence mode="popLayout">
        {cards.slice(0, 3).map((src, index) => {
          const isFront = index === 0;
          const isMiddle = index === 1;
          const isBack = index === 2;

          return (
            <motion.div
              key={src}
              layout
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 80,
                rotate: 0,
              }}
              animate={{
                opacity: isFront ? 1 : isMiddle ? 0.9 : 0.65,
                scale: isFront ? 1 : isMiddle ? 0.94 : 0.88,
                x: isFront ? 0 : isMiddle ? 30 : 60,
                y: isFront ? 0 : isMiddle ? 6 : 12,
                rotate: 0,
                zIndex: 30 - index,
              }}
              exit={{
                opacity: 0,
                x: -100,
                scale: 0.9,
                rotate: 0,
                transition: { duration: 0.4 }
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
              }}
              className="absolute inset-0 w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              onClick={isFront ? handleFrontClick : undefined}
            >
              <video
                ref={(el) => { if (el) videoRefs.current.set(src, el); else videoRefs.current.delete(src); }}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
