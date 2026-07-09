"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedHomeIcon, AnimatedCardIcon, AnimatedSeamlessIcon, AnimatedPersonIcon } from "@/components/ui/animated-icons";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

export default function SolutionsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // Premium custom ease-out
      },
    },
  };

  return (
    <section id="solutions" className="py-24 bg-white text-dark-900 overflow-hidden">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {/* Top Row - Large Card */}
          <motion.div
            variants={cardUpVariants}
            className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-center p-4 md:p-8 border border-gray-200"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image src="/assets/loanbg.png" alt="Loan Background" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="relative z-10 bg-white/50 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-18 border border-white/50 shadow-lg flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-12 justify-between items-start">
              <div className="flex items-start gap-4 lg:max-w-md">
                {/* House Icon */}
                <AnimatedHomeIcon width={72} height={72} className="w-12 h-12 md:w-[72px] md:h-[72px] shrink-0 mt-1 md:mt-2" color="#1D1E1C" />
                <div>
                  <h3 className="text-[17px] sm:text-xl md:text-3xl font-medium mb-1 md:mb-3 leading-tight tracking-tight">Loan Against Property (LAP)</h3>
                  <p className="text-dark-900 text-[11px] sm:text-xs md:text-sm leading-normal md:leading-relaxed tracking-tight">
                    Unlock High-Value Funding Strategically With Your Property.
                  </p>
                </div>
              </div>

              <div className="w-full lg:max-w-xl">
                <h4 className="font-medium mb-2.5 md:mb-3 text-sm sm:text-base md:text-lg tracking-tight">Funding Solutions Under Loan Against Property</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-outside pl-5 text-[12px] sm:text-sm md:text-base font-medium tracking-tight leading-snug md:leading-tight">
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
          </motion.div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              variants={cardUpVariants}
              className="bg-gray-100 rounded-3xl p-6 flex flex-row items-center gap-4 md:gap-6"
            >
              <AnimatedCardIcon width={72} height={72} className="w-12 h-12 md:w-[72px] md:h-[72px] shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1 tracking-tight">Strong Credit Profile</h3>
                <p className="text-xs md:text-sm text-[#6F7275] tracking-tight leading-snug">
                  Designed For Financially Disciplined Businesses And Individuals Seeking Structured Funding Solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardUpVariants}
              className="bg-gold-350 rounded-3xl p-6 flex flex-row items-center gap-4 md:gap-6 text-dark-900"
            >
              <AnimatedSeamlessIcon width={72} height={72} className="w-12 h-12 md:w-[72px] md:h-[72px] shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1 tracking-tight">Seamless Experience</h3>
                <p className="text-xs md:text-sm tracking-tight leading-snug opacity-90">
                  Save Time And Effort With A Smooth, Transparent, And Relationship-Driven Funding Journey.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardUpVariants}
              className="bg-dark-700 rounded-3xl p-6 flex flex-row items-center gap-4 md:gap-6 text-white"
            >
              <AnimatedPersonIcon width={64} height={64} className="w-12 h-12 md:w-[64px] md:h-[64px] shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1 tracking-tight">Dedicated Expert Support</h3>
                <p className="text-xs md:text-sm tracking-tight leading-snug opacity-90">
                  Get Tailored Guidance From Experienced Funding Specialists At Every Stage.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
