import Image from "next/image";
import Carousel3D from "@/components/ui/carousel-3d";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-hero-gradient text-center">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 mt-10">
        <div className="inline-block border border-white/20 rounded-full px-6 py-2 mb-8 text-sm md:text-base backdrop-blur-sm text-white font-medium">
          Trusted By Prime Borrowers Across Southern India
        </div>

        <TextBlurReveal
          as="h1"
          text="Get The Best Deal For Your High-Value Secured Loan"
          className="text-5xl md:text-6xl font-bold mb-8 tracking-tight max-w-3xl mx-auto leading-tight text-white drop-shadow-lg"
        />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 max-w-3xl mx-auto text-sm md:text-lg text-white font-medium drop-shadow-md">
          <span className="flex items-center gap-2 font-secondary">✓ Premium Doorstep Experience</span>
          <span className="flex items-center gap-2 font-secondary">✓ 50+ Top Banks & NBFCs</span>
          <span className="flex items-center gap-2 font-secondary">✓ Fast & Transparent Process</span>
          <span className="flex items-center gap-2 font-secondary">✓ Zero Commission</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#1D1E1C] text-white px-8 h-16 rounded-full font-medium hover:bg-black transition-colors w-full sm:w-auto flex items-center justify-center">
            Check Eligibility Today
          </button>
          <button className="bg-white text-dark-900 pl-8 pr-2 h-16 rounded-full font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-4 group">
            <span className="text-[17px] tracking-tight font-normal">Book A Consultation</span>
            <span className="bg-[#1D1E1C] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-light group-hover:bg-gold-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* 3D Image Carousel */}
      <div className="mt-20 w-full max-w-[100vw] mx-auto relative z-20">
        <Carousel3D />
      </div>
    </section>
  );
}
