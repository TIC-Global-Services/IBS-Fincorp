"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { openConsultationModal } from "@/components/ui/consultation-modal";
import { CloseIcon, ArrowUpRight } from "@/components/ui/icons";

export function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [translateX, setTranslateX] = useState("0%");

  useEffect(() => {
    // Check if dismissed previously in this session
    const dismissed = sessionStorage.getItem("lead-popup-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (sessionStorage.getItem("lead-popup-dismissed") === "true") return;

      const solutionsEl = document.getElementById("solutions");
      const ctaEl = document.getElementById("cta");

      if (!solutionsEl) return;

      const currentScroll = window.scrollY;
      const solutionsTop = solutionsEl.getBoundingClientRect().top + window.scrollY;
      const ctaTop = ctaEl ? (ctaEl.getBoundingClientRect().top + window.scrollY) : document.body.scrollHeight;

      // 1. Hide if scrolled back up above Solutions section (homepage top)
      // 2. Hide if scrolled down and the bottom of the screen has reached the CTA section
      // 3. Otherwise, show while the user is actively viewing Solutions down to CTA
      if (
        currentScroll >= solutionsTop - 100 &&
        currentScroll + window.innerHeight < ctaTop + 100
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateTranslateX = () => {
      setTranslateX(window.innerWidth >= 768 ? "-50%" : "0%");
    };

    // Initial checks
    handleScroll();
    updateTranslateX();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("resize", updateTranslateX, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("resize", updateTranslateX);
    };
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem("lead-popup-dismissed", "true");
  };

  const handleAction = () => {
    openConsultationModal();
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 80, x: translateX }}
          animate={{ opacity: 1, y: 0, x: translateX }}
          exit={{ opacity: 0, y: 50, x: translateX }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-4 md:left-1/2 z-40 w-[calc(96vw-6rem)] md:w-[calc(75vw-2rem)] max-w-3xl bg-black/35 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:py-3.5 md:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-white text-left flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6"
        >
          {/* Close button (Absolute on mobile, Relative on desktop) */}
          <button
            onClick={handleDismiss}
            className="absolute md:static top-3.5 right-3.5 text-white/40 hover:text-white transition-colors cursor-pointer md:order-last shrink-0"
            aria-label="Close popup"
          >
            <CloseIcon width={16} height={16} />
          </button>

          {/* Left / Middle content area */}
          <div className="text-center md:text-left w-full md:w-auto md:pr-4 flex-1">
            <h4 className="text-sm md:text-[15px] font-semibold leading-tight text-gold-500 tracking-tight mb-1">
              Looking for a High-Value Secured Loan?
            </h4>
            <p className="text-[11px] md:text-xs text-white/90 leading-normal font-normal">
              Compare offers from 50+ premium banks. Speak directly to our loan specialists today.
            </p>
          </div>

          {/* Action button */}
          <button
            onClick={handleAction}
            className="w-fit mx-auto md:w-auto bg-white text-dark-900 pl-5 pr-1.5 h-10 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center justify-between gap-3 group shrink-0 whitespace-nowrap cursor-pointer font-sans"
          >
            <span className="text-xs md:text-sm tracking-tight font-normal">Book a consultation</span>
            <span className="bg-dark-700 text-white w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-colors group-hover:bg-gold-500">
              <ArrowUpRight className="w-3.5 h-3.5" width={14} height={14} strokeWidth={1.5} />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
