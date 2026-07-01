import Image from "next/image";
import React from "react";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

export default function ComparisonAppSection() {
  return (
    <section id="comparison" className="py-24 bg-comparison-gradient text-dark-900 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* App Showcase with Floating Cards */}
        <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[700px] mb-32 mt-10">

          {/* Left Cards */}
          <div className="md:absolute left-0 top-1/4 flex flex-col gap-16 z-20 w-full md:w-auto px-4 mb-12 md:mb-0 md:-translate-y-16">
            <div className="flex flex-col items-end text-right max-w-[320px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-8 h-8">
                  <Image src="/assets/higherloan.png" alt="Higher Loan Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-2xl mb-2">Higher Loan Amounts</h3>
              <p className="text-sm text-[#828282] leading-relaxed">
                Access substantial funding based on your property value and repayment capacity.
              </p>
            </div>

            <div className="flex flex-col items-end text-right max-w-[320px] md:-ml-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-8 h-8">
                  <Image src="/assets/flexible.png" alt="Flexible Repayment Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-2xl mb-2">Flexible Repayment Tenures</h3>
              <p className="text-sm text-[#828282] leading-relaxed">
                Choose customized repayment plans that align with your financial goals and cash flow.
              </p>
            </div>
          </div>

          {/* Center Phone Mockup */}
          <div className="relative z-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-500/20 blur-[100px] rounded-full"></div>

            <div className="w-[300px] h-[600px] relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image src="/assets/mobile.png" alt="Mobile App Mockup" fill className="object-contain" />
            </div>
          </div>

          {/* Right Cards */}
          <div className="md:absolute right-0 top-1/4 flex flex-col gap-16 z-20 w-full md:w-auto px-4 mt-12 md:mt-0 md:-translate-y-4">
            <div className="flex flex-col items-start text-left max-w-[320px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-8 h-8">
                  <Image src="/assets/doorstep.png" alt="Doorstep Assistance Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-2xl mb-2">Doorstep Assistance</h3>
              <p className="text-sm text-[#828282] leading-relaxed">
                Document Collection And Coordination Come To You. No Queues, No Branch Visits Required At Any Stage.
              </p>
            </div>

            <div className="flex flex-col items-start text-left max-w-[320px] md:-ml-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 mb-4">
                <div className="relative w-8 h-8">
                  <Image src="/assets/trust.png" alt="Trusted Partner Icon" fill className="object-contain" />
                </div>
              </div>
              <h3 className="font-semibold text-2xl mb-2">Trusted & Reliable Partner</h3>
              <p className="text-sm text-[#828282] leading-relaxed">
                Built on transparency, integrity, and long-term financial relationships.
              </p>
            </div>
          </div>
        </div>
        {/* Section Header for Table */}
        <div className="text-center mb-16 relative z-10 text-dark-900">
          <TextBlurReveal
            as="h2"
            text="What Makes IBSFINCORP Different"
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          />
          <p className="text-lg opacity-80">Unlock Exclusive High-Value Benefits</p>
        </div>
        {/* Comparison Table */}
        <div className="max-w-[1140px] mx-auto mb-32 relative z-10 text-dark-900 mt-12 h-[450px]">
          <div className="relative h-full">
            {/* Main Table BG */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl pointer-events-none"></div>

            {/* Middle Column Border */}
            <div className="absolute inset-y-0 left-[33.333333%] w-[33.333333%] border-l border-white/20 pointer-events-none"></div>

            {/* IBS Highlight BG */}
            <div className="absolute inset-y-0 right-0 w-[33.333333%] bg-white/20 backdrop-blur-xl border-l border-white/20 rounded-r-3xl pointer-events-none"></div>

            {/* Table Content */}
            <div className="relative z-10 grid grid-cols-3 h-full p-4" style={{ gridTemplateRows: 'repeat(8, minmax(0, 1fr))' }}>
              {/* Headers */}
              <div className="font-medium text-2xl px-8 flex items-center">Features</div>
              <div className="font-medium text-2xl px-4 text-center flex items-center justify-center">Conventional Loan Agents</div>
              <div className="font-medium text-2xl px-4 text-center flex items-center justify-center">IBSFINCORP</div>

              {/* Rows */}
              {[
                "Wide Bank & NBFC Network",
                "Strategic Lender Matching",
                "Free Eligibility Check",
                "End-To-End Premium Support",
                "Doorstep Experience",
                "Faster Turnaround Time",
                "Zero Client Commission",
              ].map((feature, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-8 font-medium text-lg tracking-tight flex items-center">{feature}</div>
                  <div className={`px-4 text-center text-xl flex items-center justify-center font-light ${idx === 0 || idx === 4 ? "opacity-100" : "opacity-50"}`}>
                    {idx === 0 || idx === 4 ? <Image src="/assets/tick.svg" alt="Tick" width={18} height={18} /> : "✕"}
                  </div>
                  <div className="px-4 text-center font-light text-xl flex items-center justify-center opacity-100">
                    <Image src="/assets/tick.svg" alt="Tick" width={18} height={18} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Steps / Timeline */}
        <div className="max-w-6xl mx-auto relative z-10 mt-32 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Step 1 */}
            <div className="group relative px-8 pb-12">
              <h2 className="text-6xl font-semibold text-white mb-4">01</h2>
              <h3 className="text-xl font-semibold text-white mb-4 pr-4">Corporate<br />DSA Advisory Company</h3>
              <p className="text-base text-[#828282] tracking-tight leading-tight">
                Providing strategic loan consulting and lender matchmaking services tailored to your financial goals and funding requirements.
              </p>

              {/* Right Vertical Line */}
              <div className="absolute right-0 bottom-0 w-[1px] h-full bg-white/10 z-10"></div>
              <div className="absolute right-0 bottom-0 w-[1px] h-full bg-gradient-to-t from-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Bottom Horizontal Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Corner Dot */}
              <div className="absolute -bottom-[4px] -right-[5px] w-[10px] h-[10px] rounded-full bg-gold-400 shadow-[0_0_15px_4px_rgba(255,215,0,0.6)] z-20"></div>
            </div>

            {/* Step 2 */}
            <div className="group relative px-8 pb-12">
              <h2 className="text-6xl font-semibold text-white mb-4">02</h2>
              <h3 className="text-xl font-semibold text-white mb-4 pr-4">Loans Facilitated Through RBI-<br />Regulated Banks & NBFCs</h3>
              <p className="text-base text-[#828282] tracking-tight leading-tight">
                Get access to the most suitable loan terms and eligibility through our network of 50+ banks and NBFCs.
              </p>

              {/* Right Vertical Line */}
              <div className="absolute right-0 bottom-0 w-[1px] h-full bg-white/10 z-10"></div>
              <div className="absolute right-0 bottom-0 w-[1px] h-full bg-gradient-to-t from-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Bottom Horizontal Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Corner Dot */}
              <div className="absolute -bottom-[4px] -right-[5px] w-[10px] h-[10px] rounded-full bg-gold-400 shadow-[0_0_15px_4px_rgba(255,215,0,0.6)] z-20"></div>
            </div>

            {/* Step 3 */}
            <div className="group relative px-8 pb-12">
              <h2 className="text-6xl font-semibold text-white mb-4">03</h2>
              <h3 className="text-xl font-semibold text-white mb-4 pr-4">Secure Data Handling & Privacy<br />Protection</h3>
              <p className="text-base text-[#828282] tracking-tight leading-tight">
                Your personal and financial information is managed with strict confidentiality, security, and responsible data practices.
              </p>

              {/* Left Vertical Line (Hover Only - Overlaps Step 2) */}
              <div className="absolute left-0 bottom-0 w-[1px] h-full bg-gradient-to-t from-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Bottom Horizontal Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
