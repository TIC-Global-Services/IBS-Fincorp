"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll down
        setIsVisible(false);
      } else {
        // Scroll up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full px-6 md:px-12 grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/">
            <Image src="/assets/logo.png" alt="IBS FINCORP Logo" width={100} height={25} className="object-contain rounded-md" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex justify-center items-center gap-6 text-sm font-medium">
          <Link href="#about" className="hover:text-gold-400 transition-colors whitespace-nowrap">About</Link>
          <Link href="#solutions" className="hover:text-gold-400 transition-colors whitespace-nowrap">Solutions</Link>
          <Link href="#why-us" className="hover:text-gold-400 transition-colors whitespace-nowrap">Why IBSFINCORP</Link>
          <Link href="#partners" className="hover:text-gold-400 transition-colors whitespace-nowrap">Partners</Link>
          <Link href="#reviews" className="hover:text-gold-400 transition-colors whitespace-nowrap">Reviews</Link>
          <Link href="#locations" className="hover:text-gold-400 transition-colors whitespace-nowrap">Locations</Link>
          <Link href="#faq" className="hover:text-gold-400 transition-colors whitespace-nowrap">FAQ</Link>
        </nav>

        {/* CTA */}
        <div className="flex justify-end">
          <button className="bg-white text-[#1D1E1C] px-6 py-2 rounded-full font-medium text-sm hover:bg-gold-400 transition-colors flex items-center gap-2 whitespace-nowrap shadow-md">
            Contact Us <span className="font-bold">↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}
