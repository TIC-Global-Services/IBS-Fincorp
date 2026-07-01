"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollTextReveal({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll(".word");
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    }, containerRef);
    
    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <p ref={containerRef} className={`${className}`}>
      {text.split(" ").map((word, i, arr) => (
        <React.Fragment key={i}>
          <span className="word inline-block transition-colors duration-200">
            {word}
          </span>
          {i < arr.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </p>
  );
}
