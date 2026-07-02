"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reviewsLeft = [
  {
    text: "Outstanding experience! The team at IBSFINCORP understood our business requirements perfectly. We got a ₹50Cr Loan Against Property at an incredibly competitive rate. The process was transparent, and the doorstep service saved us a lot of time.",
    initial: "R",
    name: "Rajesh K.",
    role: "Managing Director, Chennai"
  },
  {
    text: "IBSFINCORP helped us secure working capital for our manufacturing expansion. Their team processed our loan in record time with minimal paperwork. Truly a partner we can rely on for our financial needs.",
    initial: "V",
    name: "Venkatesh P.",
    role: "CEO, Coimbatore"
  },
  {
    text: "I approached IBSFINCORP for a startup loan when traditional banks turned me down. They believed in my vision and funded my agritech venture. Two years later, we are profitable and growing. Forever grateful.",
    initial: "P",
    name: "Priya M.",
    role: "Founder, Agritech Startup"
  }
];

const reviewsRight = [
  {
    text: "As an NRI, getting a property loan in India seemed daunting, but IBSFINCORP made it seamless. Their dedicated expert guided me through every step, and the loan was sanctioned much faster than I expected. Highly recommended for high-value loans.",
    initial: "A",
    name: "Dr. Ananya S.",
    role: "NRI Investor, Bangalore"
  },
  {
    text: "The refinancing solution they structured for our real estate project saved us nearly 2% in interest. Their financial expertise and personalized approach set them apart from any other NBFC I have worked with.",
    initial: "S",
    name: "Sundar R.",
    role: "Real Estate Developer, Hyderabad"
  },
  {
    text: "Their Loan Against Securities product is a game-changer. I got liquidity without selling my portfolio, and the process was completed in just 5 days. The interest rates are the most competitive in the market.",
    initial: "K",
    name: "Karthik N.",
    role: "Portfolio Manager, Bangalore"
  }
];

const ReviewCard = ({ review }: { review: any }) => (
  <div className="relative overflow-hidden bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl md:rounded-[2rem] p-4 md:p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] w-[165px] sm:w-[220px] md:w-full md:max-w-[480px] pointer-events-auto">

    {/* Top Left Dark Vignette */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent pointer-events-none opacity-60"></div>

    <div className="relative z-10">
      <div className="text-gold-500 text-[10px] md:text-lg mb-2 md:mb-6 tracking-widest">★★★★★</div>
      <p className="text-dark-900 leading-snug md:leading-relaxed mb-4 md:mb-8 font-medium text-[10px] sm:text-xs md:text-base line-clamp-4 md:line-clamp-none">
        "{review.text}"
      </p>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#1D1E1C] flex items-center justify-center text-gold-500 font-bold text-xs md:text-lg shrink-0">
          {review.initial}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-dark-900 text-[10px] md:text-sm truncate">{review.name}</h4>
          <p className="text-[8px] md:text-xs text-[#828282] truncate">{review.role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const staggerDelay = isMobile ? 0.25 : 0.6;
      const startY = isMobile ? "80vh" : "120vh";
      const endY = isMobile ? "-80vh" : "-120vh";

      const leftCards = gsap.utils.toArray<HTMLElement>('.card-left');
      const rightCards = gsap.utils.toArray<HTMLElement>('.card-right');

      // Entry State
      gsap.set(leftCards, { y: startY });
      gsap.set(rightCards, { y: startY });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=1200" : "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Left Column Animation
      leftCards.forEach((card, i) => {
        const delay = i * staggerDelay;
        // Continuous Linear Vertical Scroll
        tl.to(card, {
          y: endY,
          duration: 2, ease: "none"
        }, delay);
      });

      // Right Column Animation (Pairs exactly with left)
      rightCards.forEach((card, i) => {
        const delay = i * staggerDelay;
        // Continuous Linear Vertical Scroll
        tl.to(card, {
          y: endY,
          duration: 2, ease: "none"
        }, delay);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" className="bg-white relative">

      <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[900px]">

        {/* Pinned Title Layer */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="px-8 py-10 md:px-16 md:py-12 text-center max-w-2xl">
            <TextBlurReveal
              as="h2"
              text="Trusted By Prime Borrowers"
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-dark-900 mb-4"
            />
            <TextBlurReveal
              as="p"
              text="Real Experiences From Clients Across South India."
              className="text-dark-900 font-normal text-lg"
              delay={0.3}
            />
          </div>
        </div>

        {/* Cards Layer */}
        <div className="absolute inset-0 z-10 w-full max-w-6xl mx-auto flex justify-between h-full pointer-events-none px-2 md:px-0">

          {/* Left Column Area */}
          <div className="flex w-1/2 relative h-full">
            {reviewsLeft.map((review, i) => (
              <div key={`left-${i}`} className="card-left absolute inset-0 flex items-center justify-end pr-1 md:pr-12 lg:pr-24 -mt-[15vh] md:-mt-[25vh] pointer-events-none">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Right Column Area */}
          <div className="flex w-1/2 relative h-full">
            {reviewsRight.map((review, i) => (
              <div key={`right-${i}`} className="card-right absolute inset-0 flex items-center justify-start pl-1 md:pl-12 lg:pl-24 mt-[15vh] md:mt-[25vh] pointer-events-none">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
