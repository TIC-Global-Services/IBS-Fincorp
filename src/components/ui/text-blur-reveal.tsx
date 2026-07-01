"use client";

import { motion } from "framer-motion";
import React, { useMemo } from "react";

interface TextBlurRevealProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
}

export function TextBlurReveal({ text, as: Component = "p", className = "", delay = 0 }: TextBlurRevealProps) {
  const words = useMemo(() => text.split(" "), [text]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className=""
      >
        {words.map((word, i) => (
          <React.Fragment key={i}>
            <motion.span variants={item} className="inline-block">
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </motion.span>
    </Component>
  );
}
