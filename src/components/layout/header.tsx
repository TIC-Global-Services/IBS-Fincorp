"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CloseIcon } from "@/components/ui/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
    },
  },
};

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/">
              <Image src="/assets/logo.png" alt="IBS FINCORP Logo" width={100} height={25} style={{ height: "auto" }} className="object-contain rounded-md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center items-center gap-12 text-base font-normal">
            <Link href="#about" className="hover:text-gold-400 transition-colors whitespace-nowrap">About</Link>
            <Link href="#solutions" className="hover:text-gold-400 transition-colors whitespace-nowrap">Solutions</Link>
            <Link href="#why-us" className="hover:text-gold-400 transition-colors whitespace-nowrap">Why IBSFINCORP</Link>
            <Link href="#partners" className="hover:text-gold-400 transition-colors whitespace-nowrap">Partners</Link>
            <Link href="#reviews" className="hover:text-gold-400 transition-colors whitespace-nowrap">Reviews</Link>
            <Link href="#locations" className="hover:text-gold-400 transition-colors whitespace-nowrap">Locations</Link>
            <Link href="#faq" className="hover:text-gold-400 transition-colors whitespace-nowrap">FAQ</Link>
          </nav>

          {/* Desktop CTA & Mobile Hamburger */}
          <div className="flex justify-end items-center">
            <button className="hidden lg:flex bg-white text-dark-700 px-6 py-2 rounded-full font-medium text-sm hover:bg-gold-400 transition-colors items-center gap-2 whitespace-nowrap shadow-md">
              Contact Us
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Hamburger Icon */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0F0F0F] z-[60] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <CloseIcon width={28} height={28} />
            </button>

            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-6 text-center"
            >
              <motion.div variants={itemVariants}>
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">About</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Solutions</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Why IBSFINCORP</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#partners" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Partners</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Reviews</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#locations" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">Locations</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-white hover:text-gold-400">FAQ</Link>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-2">
                <button onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-dark-700 px-8 py-3 rounded-full font-medium hover:bg-gold-400 transition-colors flex items-center gap-2 shadow-md">
                  Contact Us
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
