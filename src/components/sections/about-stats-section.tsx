import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";
import YellowCircleGraphic from "@/components/ui/yellow-circle-graphic";
import { CircularProgress } from "@/components/ui/circular-progress";

export default function AboutStatsSection() {
  return (
    <section id="about" className="py-24 bg-white text-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1 mb-8 text-sm md:text-base font-medium tracking-tighter">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> ABOUT US
          </div>
          <TextBlurReveal
            as="h2"
            text="Empowering Businesses & Professionals with Intelligent Funding Solutions that Drive Growth, Liquidity, and Financial Success through Strategic Loan Against Property Solutions."
            className="text-xl md:text-5xl font-medium leading-tight tracking-tight md:tracking-tighter"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr_1fr] gap-6">

          {/* Card 1: Loans Disbursed */}
          <div className="bg-white text-dark-900 rounded-[16px] p-2 flex flex-col h-[450px] shadow-sm border border-gray-100">
            {/* Image Part Card */}
            <div className="bg-[#1D1E1C] rounded-[16px] flex-1 relative flex items-center justify-center p-4">
              <div className="relative w-full h-full max-h-[250px] flex items-center justify-center">
                <YellowCircleGraphic className="w-full h-full max-h-[250px]" />
              </div>
            </div>

            {/* Text Part */}
            <div className="p-4 pt-6 flex gap-4">
              <div>
                <h3 className="text-2xl font-medium">₹3000Cr+</h3>
                <p className="text-base font-medium tracking-tight whitespace-nowrap">Loans Disbursed</p>
              </div>
              <p className="text-[14px] text-[#828282] flex-1 leading-tight tracking-tight">
                Successfully facilitated loan disbursements worth over ₹3000 crore across diverse financial needs.
              </p>
            </div>
          </div>

          {/* Card 2: Partners & Commission */}
          <div className="flex flex-col gap-6 h-[450px]">

            {/* Top Center Card */}
            <div className="bg-white rounded-[16px] p-2 flex-1 flex flex-col shadow-sm border border-gray-100">
              <div className="bg-[#1D1E1C] text-white rounded-[12px] p-6 lg:p-8 flex-1 flex flex-col">
                <div className="flex items-start gap-4">
                  <h3 className="text-5xl font-medium">50<span className="text-4xl">+</span></h3>
                  <p className="text-2xl font-normal max-w-[150px] leading-tight">Bank & NBFC Partners</p>
                </div>
                <div className="flex-1 flex items-center justify-center mt-4">
                  <Image src="/assets/Vector.png" alt="Partners Icon" width={100} height={100} className="object-contain" />
                </div>
              </div>
            </div>

            {/* Bottom Center Card */}
            <div className="bg-white rounded-[16px] p-2 h-32 flex flex-col shadow-sm border border-gray-100">
              <div className="bg-[#1D1E1C] text-white rounded-[12px] px-6 lg:px-8 flex-1 flex items-center justify-between h-full gap-4">
                <h3 className="text-5xl font-medium">100<span className="text-4xl">%</span></h3>
                <p className="text-xl lg:text-2xl font-medium text-left leading-tight min-w-[140px]">Commission Free</p>
              </div>
            </div>

          </div>

          {/* Card 3: Satisfaction */}
          <div className="bg-white text-dark-900 rounded-[16px] p-3 flex flex-col h-[450px] shadow-sm ">
            {/* Image Part Card */}
            <div className="bg-gray-50 rounded-[16px] flex-1 relative flex flex-col items-center justify-center p-4">
              <div className="relative w-40 h-40 mb-4">
                <CircularProgress value={98} size={160} strokeWidth={12}>
                  <span className="text-3xl font-bold text-dark-900">4.9/5</span>
                </CircularProgress>
              </div>
              <p className="font-medium text-center text-xl tracking-tight">Based On 1000+ Verified Client Reviews</p>
              <div className="flex gap-1 text-[#FFBB00] mt-2 text-xl">
                ★ ★ ★ ★ ★
              </div>
            </div>

            {/* Text Part */}
            <div className="p-4 pt-6">
              <h3 className="text-lg font-medium mb-2 text-dark-900">Client Satisfaction</h3>
              <p className="text-base text-[#828282] leading-tight tracking-tight">
                Automate follow-ups, tasks, and workflows so your team spends less time on manual work.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
