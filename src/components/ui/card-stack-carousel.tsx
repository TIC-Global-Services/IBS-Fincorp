"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "/assets/herocarousel/4ffca7dcb1d15d7d75c8c65ed32b64bab3ccdedc.jpg",
  "/assets/herocarousel/5a445c17a639f5115404c1e79a5edb61a55fdc28.jpg",
  "/assets/herocarousel/75c2393021a0fcdc2cdf589cac8a0a56d7ae680b.jpg",
  "/assets/herocarousel/8b7655739679ccc1183e510329c597e67bbca885.jpg",
  "/assets/herocarousel/b999d3aa82dea1dd1d617f8897eedeea98a330a5.jpg",
];

export default function CardStackCarousel() {
  const [cards, setCards] = useState(IMAGES);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
            >
              <Image
                src={src}
                alt="Secured Loans"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
