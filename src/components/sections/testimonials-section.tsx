import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 md:py-48 bg-white relative overflow-hidden flex items-center justify-center min-h-[800px]">
      
      <div className="container mx-auto px-4 relative z-10 w-full">
        
        {/* Center Text (Desktop Absolute, Mobile Flow) */}
        <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-center z-0 w-full mb-12 md:mb-0 px-4">
          <TextBlurReveal 
            as="h2" 
            text="Trusted By Prime Borrowers"
            className="text-4xl md:text-5xl font-bold tracking-tight text-dark-900 mb-3"
          />
          <p className="text-[#828282] font-medium text-lg">Real Experiences From Clients Across South India.</p>
        </div>

        {/* Floating Cards Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:block h-auto md:h-[500px] gap-8">
          
          {/* Review 1 (Top Left Desktop) */}
          <div className="bg-transparent backdrop-blur-sm border border-gray-200/60 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-full md:w-[480px] md:absolute md:top-0 md:left-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 z-10 animate-float">
            <div className="text-gold-500 text-lg mb-6 tracking-widest">★★★★★</div>
            <p className="text-[#828282] leading-relaxed mb-8 font-medium text-sm md:text-base">
              "Outstanding experience! The team at IBSFINCORP understood our business requirements perfectly. We got a ₹50Cr Loan Against Property at an incredibly competitive rate. The process was transparent, and the doorstep service saved us a lot of time."
            </p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#1D1E1C] flex items-center justify-center text-gold-500 font-bold text-lg">
                 R
               </div>
               <div>
                 <h4 className="font-bold text-dark-900 text-sm">Rajesh K.</h4>
                 <p className="text-xs text-[#828282]">Managing Director, Chennai</p>
               </div>
            </div>
          </div>

          {/* Review 2 (Bottom Right Desktop) */}
          <div className="bg-transparent backdrop-blur-sm border border-gray-200/60 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-full md:w-[480px] md:absolute md:bottom-0 md:right-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 z-10 animate-float-delayed">
            <div className="text-gold-500 text-lg mb-6 tracking-widest">★★★★★</div>
            <p className="text-[#828282] leading-relaxed mb-8 font-medium text-sm md:text-base">
              "As an NRI, getting a property loan in India seemed daunting, but IBSFINCORP made it seamless. Their dedicated expert guided me through every step, and the loan was sanctioned much faster than I expected. Highly recommended for high-value loans."
            </p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#1D1E1C] flex items-center justify-center text-gold-500 font-bold text-lg">
                 A
               </div>
               <div>
                 <h4 className="font-bold text-dark-900 text-sm">Dr. Ananya S.</h4>
                 <p className="text-xs text-[#828282]">NRI Investor, Bangalore</p>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
