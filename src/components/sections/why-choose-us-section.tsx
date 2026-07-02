"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";

const SwipeCard = ({ reason, isTop, index, totalCards, setCards, originalIndex }: any) => {
  const x = useMotionValue(0);
  const rotateDrag = useTransform(x, [-200, 200], [-10, 10]);
  const opacityDrag = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = async (event: any, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x > threshold) {
      // Swipe Right
      await animate(x, window.innerWidth, { duration: 0.3 });
      moveToBack();
    } else if (info.offset.x < -threshold) {
      // Swipe Left
      await animate(x, -window.innerWidth, { duration: 0.3 });
      moveToBack();
    }
  };

  const moveToBack = () => {
    setCards((prev: any[]) => {
      const newArr = [...prev];
      const card = newArr.pop();
      newArr.unshift(card);
      return newArr;
    });
    // Instantly reset position before it re-renders at the back
    x.set(0);
  };

  // Stack visuals
  const offsetFromTop = totalCards - 1 - index;
  const scale = isTop ? 1 : 1 - (offsetFromTop * 0.05);
  const y = isTop ? 0 : offsetFromTop * 12;

  // Messy rotation based on originalIndex for deterministic stacking
  const randomRotate = (originalIndex % 2 === 0 ? 1 : -1) * (1 + (originalIndex % 3));
  const cardRotate = isTop ? rotateDrag : randomRotate;

  return (
    <motion.div
      className="absolute inset-0 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col origin-bottom"
      style={{
        x,
        rotate: cardRotate,
        zIndex: index,
        opacity: offsetFromTop > 2 ? 0 : (isTop ? opacityDrag : 1),
      }}
      animate={{
        scale,
        y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={isTop ? handleDragEnd : undefined}
      whileTap={isTop ? { cursor: "grabbing" } : { cursor: "grab" }}
    >
      <div className="relative z-10 pointer-events-none">
        <div className="text-4xl md:text-5xl font-semibold text-dark-900 mb-4 group-hover:text-gold-500 transition-colors duration-300">
          0{originalIndex + 1}
        </div>
        <h3 className="text-xl md:text-3xl font-semibold mb-2">{reason.title}</h3>
        <p className="text-sm md:text-base text-[#828282] leading-tight tracking-tight">
          {reason.description}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-[55%] mt-auto pointer-events-none">
        <Image src={reason.image} alt={reason.title} fill className="object-contain object-bottom" />
      </div>
    </motion.div>
  );
};

const MobileSwipeDeck = ({ reasons }: { reasons: any[] }) => {
  const [cards, setCards] = useState(() =>
    reasons.map((r, i) => ({ ...r, originalIndex: i })).reverse()
  );

  const topCardOriginalIndex = cards[cards.length - 1].originalIndex;

  return (
    <div className="flex flex-col w-full md:hidden">
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] mb-8 max-w-[320px] mx-auto">
        {cards.map((card, idx) => (
          <SwipeCard
            key={card.title}
            reason={card}
            isTop={idx === cards.length - 1}
            index={idx}
            totalCards={cards.length}
            setCards={setCards}
            originalIndex={card.originalIndex}
          />
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center items-center gap-2 mb-4">
        {reasons.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${idx === topCardOriginalIndex ? 'w-6 bg-gold-500' : 'w-2 bg-gray-200'}`}
          />
        ))}
      </div>

    </div>
  );
};

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "End-To-End Support",
      description: "From profile assessment to disbursement, every step is managed with white-glove service — no hand-offs, no confusion.",
      image: "/assets/hc-01.png"
    },
    {
      title: "Best-Fit Lender Match",
      description: "We present multiple lender options tailored to your financial profile — not commission-led recommendations.",
      image: "/assets/hc-02.png"
    },
    {
      title: "Doorstep Service",
      description: "Document collection and coordination come to you. No queues, no branch visits required at any stage.",
      image: "/assets/hc-03.png"
    },
    {
      title: "Faster Turnaround",
      description: "Streamlined submission process, coordinated with lenders to align disbursement to your timeline.",
      image: "/assets/hc-04.png"
    },
    {
      title: "Pre-Login Eligibility",
      description: "Early Profile Assessment Designed to Avoid Unnecessary CIBIL Enquiries and Improve Lender Alignment.",
      image: "/assets/hc-05.png"
    },
    {
      title: "Compliance-First",
      description: "Operating As A Strategic Loan Consultant, Not A Lender. All Loans Are Governed By RBI-Licensed Institutions.",
      image: "/assets/hc-06.png"
    }
  ];

  return (
    <section id="why-us" className="py-18 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <TextBlurReveal
            as="h2"
            text="Why High-Credit Clients Choose Us"
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          />
          <TextBlurReveal
            as="p"
            text="Built For High-Credit Clients Who Expect a Premium Experience"
            className="text-dark-900 text-sm md:text-lg"
            delay={0.3}
          />
        </div>

        {/* Mobile Swipe Deck */}
        <MobileSwipeDeck reasons={reasons} />

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-6xl mx-auto pb-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col aspect-[6/5] relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-5xl font-semibold text-dark-900 mb-4 group-hover:text-gold-500 transition-colors duration-300">0{idx + 1}</div>
                <h3 className="text-3xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-base text-[#828282] leading-tight tracking-tight">
                  {reason.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-full h-[55%] mt-auto transition-transform duration-500 group-hover:scale-105">
                <Image src={reason.image} alt={reason.title} fill className="object-contain object-bottom" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
