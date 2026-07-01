"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
} from "framer-motion";
import Image from "next/image";

const baseImages = [
  "/assets/herocarousel/4ffca7dcb1d15d7d75c8c65ed32b64bab3ccdedc.jpg",
  "/assets/herocarousel/5a445c17a639f5115404c1e79a5edb61a55fdc28.jpg",
  "/assets/herocarousel/75c2393021a0fcdc2cdf589cac8a0a56d7ae680b.jpg",
  "/assets/herocarousel/8b7655739679ccc1183e510329c597e67bbca885.jpg",
  "/assets/herocarousel/b999d3aa82dea1dd1d617f8897eedeea98a330a5.jpg",
];

// Duplicate to make 15 faces (3 sets) for the perfect curve
const IMAGES = [...baseImages, ...baseImages, ...baseImages];

export default function Carousel3D() {
  const [cylinderWidth, setCylinderWidth] = useState<number>(2400);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateDeviceSettings = () => {
      const width = window.innerWidth;
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(width <= 768 || isTouchDevice);
      if (width <= 640) setCylinderWidth(2200);
      else if (width <= 768) setCylinderWidth(2800);
      else if (width <= 1024) setCylinderWidth(3000);
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

  const [dragDistance, setDragDistance] = useState<number>(0);
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `translateZ(-${radius * 0.6}px) rotate3d(0,1,0,${val}deg)`
  );

  useEffect(() => {
    rotation.set(0);
  }, [rotation]);

  useEffect(() => {
    if (!isAutoScrolling || isDragging) return;
    const interval = setInterval(() => {
      const currentAngle = rotation.get();
      const snappedAngle = Math.round(currentAngle / angleStep) * angleStep;
      const targetAngle = snappedAngle - angleStep;
      controls
        .start({
          rotateY: targetAngle,
          transition: { duration: 1, ease: "easeInOut" },
        })
        .then(() => {
          rotation.set(targetAngle);
          setCurrentIndex((prev) => (prev + 1) % faceCount);
        });
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling, isDragging, controls, rotation, faceCount, angleStep]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setDragDistance(0);
    controls.stop();
  };

  const handleDrag = (_: any, info: PanInfo) => {
    const newDragDistance = dragDistance + info.delta.x;
    setDragDistance(newDragDistance);
    const dragThreshold = isMobile ? 60 : 90;

    if (Math.abs(newDragDistance) >= dragThreshold) {
      const currentAngle = rotation.get();
      const direction = newDragDistance > 0 ? 1 : -1;
      const snappedAngle = Math.round(currentAngle / angleStep) * angleStep;
      const targetAngle = snappedAngle + direction * angleStep;

      controls
        .start({
          rotateY: targetAngle,
          transition: { duration: 0.3, ease: "easeOut" },
        })
        .then(() => {
          rotation.set(targetAngle);
          setCurrentIndex(direction > 0 ? (currentIndex - 1 + faceCount) % faceCount : (currentIndex + 1) % faceCount);
        });
      setDragDistance(0);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragDistance(0);
    setTimeout(() => setIsAutoScrolling(true), 2500);
  };

  return (
    <div className="w-full overflow-hidden flex flex-col justify-center py-10 md:py-1 -mt-8 md:-mt-24">
      <div className="flex grow items-center justify-center [perspective:2500px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          dragMomentum={false}
          dragConstraints={false}
          whileDrag={{ cursor: "grabbing", scale: 0.98 }}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={() => { setIsAutoScrolling(false); controls.stop(); }}
          onMouseLeave={() => { if (!isDragging) setIsAutoScrolling(true); }}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
            touchAction: "pan-x",
          }}
          className="flex min-h-[550px] md:min-h-[650px] lg:min-h-[750px] cursor-grab active:cursor-grabbing items-center justify-center [transform-style:preserve-3d]"
        >
          {IMAGES.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <div className="relative w-[280px] md:w-[360px] lg:w-[480px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:border-gold-500/50">
                <Image
                  src={url}
                  alt={`Carousel image ${i}`}
                  fill
                  className="pointer-events-none object-cover select-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
