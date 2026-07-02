"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const baseImages = [
  "/assets/herocarousel/img1.webp",
  "/assets/herocarousel/img2.webp",
  "/assets/herocarousel/img3.webp",
  "/assets/herocarousel/img4.webp",
  "/assets/herocarousel/img5.webp",
];

// Duplicate to make 15 faces (3 sets) for the perfect curve
const IMAGES = [...baseImages, ...baseImages, ...baseImages];

export default function Carousel3D() {
  const [cylinderWidth, setCylinderWidth] = useState<number>(2400);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateDeviceSettings = () => {
      const width = window.innerWidth;
      if (width <= 640) setCylinderWidth(2800);
      else if (width <= 768) setCylinderWidth(3200);
      else if (width <= 1024) setCylinderWidth(3400);
      else setCylinderWidth(3800);
    };
    updateDeviceSettings();
    window.addEventListener("resize", updateDeviceSettings);
    return () => window.removeEventListener("resize", updateDeviceSettings);
  }, []);

  const faceCount = IMAGES.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.1;
  const radius = cylinderWidth / (1.7 * Math.PI);
  const angleStep = 360 / faceCount;

  const rotation = useMotionValue(0);

  const transform = useTransform(
    rotation,
    (val: number) => `translateZ(-${radius * 0.6}px) rotate3d(0,1,0,${val}deg)`
  );

  useEffect(() => {
    rotation.set(0);
  }, [rotation]);

  useEffect(() => {
    const unsubscribe = rotation.on("change", (latest) => {
      const currentStep = Math.round(-latest / angleStep);
      const activeIndex = ((currentStep % faceCount) + faceCount) % faceCount;
      setCurrentIndex(activeIndex);
    });
    return () => unsubscribe();
  }, [rotation, angleStep, faceCount]);

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      const currentAngle = rotation.get();
      const snappedAngle = Math.round(currentAngle / angleStep) * angleStep;
      const targetAngle = snappedAngle - angleStep;

      animate(rotation, targetAngle, {
        duration: 1,
        ease: "easeInOut",
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoScrolling, rotation, faceCount, angleStep]);

  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (index === currentIndex) return;

    // Pause auto-scrolling
    setIsAutoScrolling(false);
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    // Resume auto-scrolling after 5 seconds of inactivity
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);

    const currentAngle = rotation.get();
    const snappedAngle = Math.round(currentAngle / angleStep) * angleStep;
    
    // Calculate the shortest path step rotation
    const currentStep = Math.round(-snappedAngle / angleStep);
    const diff = ((index - (currentStep % faceCount)) + faceCount) % faceCount;
    
    let stepsToRotate = diff;
    if (diff > faceCount / 2) {
      stepsToRotate = diff - faceCount;
    }

    const targetStep = currentStep + stepsToRotate;
    const targetAngle = -targetStep * angleStep;

    animate(rotation, targetAngle, {
      duration: 0.8,
      ease: "easeInOut",
    });
  };

  return (
    <div className="w-full overflow-hidden flex flex-col justify-center py-10 md:py-1 -mt-8 md:-mt-24">
      <div className="flex grow items-center justify-center [perspective:2500px] [transform-style:preserve-3d]">
        <motion.div
          style={{
            transform: transform,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[550px] md:min-h-[650px] lg:min-h-[750px] items-center justify-center [transform-style:preserve-3d]"
        >
          {IMAGES.map((url, i) => {
            const distance = Math.min(
              Math.abs(i - currentIndex),
              faceCount - Math.abs(i - currentIndex)
            );

            let scaleClass = 'scale-[0.75] z-0';
            if (distance === 0) scaleClass = 'scale-[1.05] md:scale-[1.15] z-30';
            else if (distance === 1) scaleClass = 'scale-[0.95] z-20';
            else if (distance === 2) scaleClass = 'scale-[0.85] z-10';

            return (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  left: "50%",
                  marginLeft: `-${faceWidth / 2}px`,
                  transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                }}
              >
                <div
                  onClick={() => handleCardClick(i)}
                  className={`relative w-[440px] md:w-[360px] lg:w-[480px] aspect-[2.2/4] md:aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl transition-all ease-out ${scaleClass} group-hover:border-gold-500/50 cursor-pointer`}
                  style={{ transitionDuration: '1000ms' }}
                >
                  <img
                    src={url}
                    alt={`Carousel image ${i}`}
                    className="pointer-events-none object-cover select-none w-full h-full absolute inset-0"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
