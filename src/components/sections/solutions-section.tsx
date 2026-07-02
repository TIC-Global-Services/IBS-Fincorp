import Image from "next/image";
import { AnimatedHomeIcon, AnimatedCardIcon, AnimatedSeamlessIcon, AnimatedPersonIcon } from "@/components/ui/animated-icons";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-white text-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextBlurReveal
            as="h2"
            text="Secured Loan Solutions"
            className="text-2xl md:text-5xl font-medium mb-4 tracking-tight"
          />
          <TextBlurReveal
            as="p"
            text="Tailored High-Value Loan Solutions For Ambitious Growth"
            className="text-sm md:text-lg"
            delay={0.3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Column - Large Card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-end p-4 md:p-8 border border-gray-200">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image src="/assets/loanbg.png" alt="Loan Background" fill className="object-cover" />
            </div>
            <div className="relative z-10 bg-white/50 backdrop-blur-md rounded-2xl p-6 md:p-14 border border-white/50 shadow-lg">
              <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
                {/* House Icon */}
                <AnimatedHomeIcon width={72} height={72} className="w-12 h-12 md:w-[72px] md:h-[72px] shrink-0 mt-1 md:mt-2" color="#1D1E1C" />
                <div>
                  <h3 className="text-xl md:text-2xl font-medium mb-1 md:mb-2 leading-tight tracking-tight">Loan Against Property (LAP)</h3>
                  <p className="text-[#828282] text-xs md:text-sm leading-tight tracking-tight max-w-3xs">
                    Unlock High-Value Funding Strategically With Your Property.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-base md:text-lg tracking-tight">Funding Solutions Under Loan Against Property</h4>
                <ul className="grid grid-cols-1 text-[13px] sm:text-sm md:text-base text-[#3C3C3C] list-disc list-inside tracking-tight leading-snug md:leading-tight space-y-1">
                  <li>Term Loan</li>
                  <li>Commercial Property Purchase & Construction</li>
                  <li>Industrial Property Purchase & Construction</li>
                  <li>Dropline OD (DLOD)</li>
                  <li>School Funding</li>
                  <li>Bank To Bank Balance Transfer</li>
                  <li>NRI Mortgage</li>
                  <li>Lease Rental Discounting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - 3 Stacked Cards */}
          <div className="flex flex-col gap-6">

            {/* Card 1 */}
            <div className="bg-gray-100 rounded-3xl p-6 md:p-8 flex flex-row items-center gap-4 md:gap-6 flex-1">
              <AnimatedCardIcon width={100} height={100} className="w-16 h-16 md:w-[100px] md:h-[100px] shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Strong Credit Profile</h3>
                <p className="text-sm md:text-base text-[#828282] tracking-tight leading-tight">
                  Designed For Financially Disciplined Businesses And Individuals Seeking Structured Funding Solutions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFBB00] rounded-3xl p-6 md:p-8 flex flex-row items-center gap-4 md:gap-6 flex-1 text-dark-900">
              <AnimatedSeamlessIcon width={72} height={72} className="w-12 h-12 md:w-[72px] md:h-[72px] shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Seamless Experience</h3>
                <p className="text-sm md:text-base tracking-tight leading-tight">
                  Save Time And Effort With A Smooth, Transparent, And Relationship-Driven Funding Journey.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1D1E1C] rounded-3xl p-6 md:p-8 flex flex-row items-center gap-4 md:gap-6 flex-1 text-white">
              <AnimatedPersonIcon width={64} height={64} className="w-12 h-12 md:w-[64px] md:h-[64px] shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Dedicated Expert Support</h3>
                <p className="text-sm md:text-base tracking-tight leading-tight">
                  Get Tailored Guidance From Experienced Funding Specialists At Every Stage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
