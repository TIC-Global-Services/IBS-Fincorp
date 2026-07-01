"use client";

import Image from "next/image";
import { useState } from "react";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import Carousel3D from "@/components/ui/carousel-3d";
import { openConsultationModal } from "@/components/ui/consultation-modal";
import { ConsultationForm } from "@/components/ui/consultation-form";
import CardStackCarousel from "@/components/ui/card-stack-carousel";

export default function HeroSection() {
  const [isFormView, setIsFormView] = useState(false);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-hero-gradient text-center">
      {/* Dark Overlay when in Form View */}
      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 pointer-events-none z-0 ${isFormView ? 'opacity-100' : 'opacity-0'}`} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 mt-10">
        {!isFormView ? (
          <>
            <div className="inline-block border border-white/20 rounded-full px-3 md:px-6 py-2 mb-8 text-xs md:text-base backdrop-blur-sm text-white font-medium">
              Trusted By Prime Borrowers Across Southern India
            </div>

        <TextBlurReveal
          as="h1"
          text="Get The Best Deal For Your High-Value Secured Loan"
          className="text-[26px] md:text-6xl font-bold mb-8 tracking-tight max-w-3xl mx-auto leading-tight text-white drop-shadow-lg"
        />

        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-y-3 gap-x-2 md:gap-x-6 mb-10 max-w-3xl mx-auto text-[11px] sm:text-xs md:text-lg text-white font-medium drop-shadow-md place-items-center md:place-items-stretch">
          <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ Premium Doorstep Experience</span>
          <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ 50+ Top Banks & NBFCs</span>
          <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ Fast & Transparent Process</span>
          <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ Zero Commission</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 px-1 w-full max-w-[400px] md:max-w-none mx-auto">
          <button 
            onClick={() => setIsFormView(true)}
            className="bg-[#1D1E1C] text-white md:px-8 h-12 md:h-16 rounded-full font-medium hover:bg-black transition-colors flex-1 md:flex-none flex items-center justify-center text-xs md:text-base whitespace-nowrap"
          >
            Check Eligibility Today
          </button>
          <button 
            onClick={openConsultationModal}
            className="bg-white text-dark-900 pl-6 pr-1 md:pl-8 md:pr-2 h-11 md:h-16 rounded-full font-medium hover:bg-gray-200 transition-colors flex-1 md:flex-none flex items-center justify-between md:justify-center gap-1 md:gap-4 group whitespace-nowrap"
          >
            <span className="text-xs md:text-[17px] tracking-tight font-normal truncate">Book A Consultation</span>
            <span className="bg-[#1D1E1C] text-white w-8 h-8 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center text-xl font-light group-hover:bg-gold-500 transition-colors">
              <svg width="12" height="12" className="md:w-[20px] md:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </>
    ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center text-left max-w-7xl mx-auto w-full">
            {/* Left side: Form */}
            <div className="relative w-full max-w-[660px] mx-auto bg-white/20 backdrop-blur-xl border border-white/20 rounded-xl p-5 md:p-8 shadow-2xl">
              <button
                onClick={() => setIsFormView(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-20 cursor-pointer"
                title="Go Back"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ConsultationForm />
            </div>

            {/* Right side: Card Stack Carousel */}
            <div className="flex flex-col items-center justify-center gap-8 w-full relative lg:pr-20 mt-8 lg:mt-0">
              <CardStackCarousel />
              <div className="border border-white/20 rounded-full px-6 py-2.5 text-xs sm:text-sm backdrop-blur-sm text-white font-medium whitespace-nowrap">
                Trusted By Prime Borrowers Across Southern India
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Original 3D Image Carousel at the bottom */}
      {!isFormView && (
        <div className="md:mt-20 w-full max-w-[100vw] mx-auto relative z-20">
          <Carousel3D />
        </div>
      )}
    </section>
  );
}
