import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import { openConsultationModal } from "@/components/ui/consultation-modal";

export default function CtaSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden flex justify-center">
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
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
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
            <button onClick={openConsultationModal} className="bg-[#1D1E1C] text-white pl-6 pr-2 py-2 rounded-full text-sm md:text-base font-medium hover:bg-black transition-all duration-300 flex items-center justify-center gap-4 group shadow-lg">
              Book A Free Consultation
              <span className="w-8 h-8 rounded-full bg-[#1D1E1C] flex items-center justify-center text-sm group-hover:bg-white group-hover:text-black transition-colors">↗</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
