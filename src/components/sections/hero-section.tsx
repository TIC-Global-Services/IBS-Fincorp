"use client";

import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import Carousel3D from "@/components/ui/carousel-3d";
import { openConsultationModal } from "@/components/ui/consultation-modal";
import { ArrowUpRight } from "@/components/ui/icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-18 flex flex-col items-center justify-center overflow-hidden bg-hero-gradient text-center">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 mt-10">
        <div className="inline-block border border-white/20 rounded-full px-3 md:px-6 py-2 mb-8 text-xs md:text-sm backdrop-blur-sm text-white font-medium">
          Trusted By Prime Borrowers Across Southern India
        </div>

        <TextBlurReveal
          as="h1"
          text="Get The Best Deal For Your High-Value Secured Loan"
          className="text-[26px] md:text-6xl font-semibold mb-8 tracking-tight max-w-3xl mx-auto leading-tight text-white drop-shadow-lg"
        />

        <div className="flex flex-col items-center gap-y-3 mb-10 text-[11px] sm:text-xs md:text-base text-white font-normal drop-shadow-md">
          <div className="flex flex-row justify-center gap-x-2">
            <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ Premium Doorstep Experience</span>
            <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ 50+ Top Banks & NBFCs</span>
          </div>
          <div className="flex flex-row justify-center gap-x-3 md:gap-x-2">
            <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ Fast & Transparent Process</span>
            <span className="flex items-center gap-1 md:gap-2 font-secondary whitespace-nowrap">✓ Zero Commission</span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 px-1 w-full max-w-[300px] md:max-w-none mx-auto">
          <button
            onClick={openConsultationModal}
            className="bg-dark-700 text-white md:px-8 h-10 sm:h-12 md:h-14 rounded-full hover:bg-black transition-colors flex-1 md:flex-none flex items-center justify-center text-[10px] sm:text-xs md:text-sm"
          >
            Check Eligibility Today
          </button>
          <button
            onClick={openConsultationModal}
            className="bg-white text-dark-900 pl-6 pr-1 md:pl-8 md:pr-2 h-10 sm:h-12 md:h-14 rounded-full font-medium hover:bg-gray-200 transition-colors flex-1 md:flex-none flex items-center justify-between md:justify-center gap-1 md:gap-4 group"
          >
            <span className="text-[10px] sm:text-xs md:text-sm tracking-tight font-normal">Book A Consultation</span>
            <span className="bg-dark-700 text-white w-8 h-8 md:w-11 md:h-11 shrink-0 rounded-full flex items-center justify-center text-xl font-light group-hover:bg-gold-500 transition-colors">
              <ArrowUpRight className="md:w-[20px] md:h-[20px]" width={12} height={12} strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>

      {/* 3D Image Carousel at the bottom */}
      <div className="md:mt-20 w-full max-w-[100vw] mx-auto relative z-20">
        <Carousel3D />
      </div>
    </section>
  );
}
