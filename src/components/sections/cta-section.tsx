import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import { openConsultationModal } from "@/components/ui/consultation-modal";

export default function CtaSection() {
  return (
    <section className="py-18 bg-white relative overflow-hidden flex justify-center">
      <div className="container mx-auto px-4 flex justify-center max-w-[1400px]">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-full h-[600px] flex flex-col items-center justify-center text-center p-8">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/bookaconsultation.png"
              alt="Book a Consultation"
              fill
              className="object-cover"
            />

          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            <TextBlurReveal
              as="h2"
              text="Unlock Your Exclusive Free Consultation"
              className="text-4xl md:text-5xl font-medium mb-4 tracking-tight leading-tighter text-white"
            />
            <TextBlurReveal
              as="p"
              delay={0.3}
              text="Your Dedicated Relationship Manager Will Guide You Through The Next Steps."
              className="text-lg md:text-xl mb-8 leading-tight tracking-tight" />
            <button onClick={openConsultationModal} className="bg-white/30 text-white pl-6 pr-2 py-2 rounded-full text-sm md:text-base font-normal hover:bg-black transition-all duration-300 flex items-center justify-center gap-4 group shadow-lg">
              Book A Free Consultation
              <span className="w-10 h-10 rounded-full bg-[#1D1E1C] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
