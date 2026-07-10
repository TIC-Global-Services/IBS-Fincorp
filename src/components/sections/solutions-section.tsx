"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedHomeIcon, AnimatedCardIcon, AnimatedSeamlessIcon, AnimatedPersonIcon } from "@/components/ui/animated-icons";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

const SUB_CARDS = [
  {
    id: "termloan",
    title: "Term Loan",
    icon: "/assets/solutions/termloan.svg",
    className: "left-[2%] top-[10%] w-[15%] h-[28%]",
    type: "outer",
  },
  {
    id: "industry",
    title: "Industrial Property Purchase & Construction",
    icon: "/assets/solutions/industry.svg",
    className: "left-[20%] top-[10%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "dropline",
    title: "Dropline OD (DLOD)",
    icon: "/assets/solutions/dropline.svg",
    className: "left-[2%] top-[62%] w-[15%] h-[28%]",
    type: "outer",
  },
  {
    id: "nri",
    title: "NRI Mortgage",
    icon: "/assets/solutions/nri.svg",
    className: "left-[20%] top-[62%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "commercial",
    title: "Commercial Property Purchase & Construction",
    icon: "/assets/solutions/commercial.svg",
    className: "left-[65%] top-[10%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "school",
    title: "School Funding",
    icon: "/assets/solutions/school.svg",
    className: "left-[83%] top-[10%] w-[15%] h-[28%]",
    type: "outer",
  },
  {
    id: "bank2bank",
    title: "Bank-to-Bank Balance Transfer",
    icon: "/assets/solutions/bank2bank.svg",
    className: "left-[65%] top-[62%] w-[15%] h-[28%]",
    type: "inner",
  },
  {
    id: "lease",
    title: "Lease Rental Discounting",
    icon: "/assets/solutions/lease.svg",
    className: "left-[83%] top-[62%] w-[15%] h-[28%]",
    type: "outer",
  },
];

const horizLineVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: "linear" as const }
  }
};

const innerCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.4, ease: "easeOut" as const }
  }
};

const outerCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.4, ease: "easeOut" as const }
  }
};

const verticalLineVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { delay: 0.5, duration: 0.8, ease: "linear" as const }
  }
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

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
          {/* Top Row - Redesigned Network Graph / Responsive Grid */}
          <motion.div
            variants={cardUpVariants}
            className="w-full relative"
          >
            {/* Desktop Version */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="hidden md:block w-full relative aspect-[16/7] rounded-[40px] overflow-hidden bg-gray-50/20 border border-gray-100 p-8 shadow-sm"
            >
              {/* Background glowing rings */}
              <div className="absolute left-[37.5%] top-[21.5%] w-[25%] h-[57%] rounded-[38px] bg-gold-400/20 blur-2xl animate-pulse" style={{ zIndex: 0 }} />
              <div className="absolute left-[45%] top-[35%] w-[10%] h-[30%] rounded-full bg-gold-300/30 blur-xl animate-ping duration-[3s]" style={{ zIndex: 0 }} />

              {/* SVG Network Connector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
                <defs>
                  <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" />
                  </filter>
                  <filter id="core-blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="0.4" />
                  </filter>
                  <linearGradient id="infinity-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F5B041" />
                    <stop offset="50%" stopColor="#F1C40F" />
                    <stop offset="100%" stopColor="#F5B041" />
                  </linearGradient>
                </defs>

                {/* Horizontal Lines: Draw continuously from Center Card to Outer Card Centers (delay: 0.0s, duration: 1.8s) */}
                <g>
                  <motion.path
                    d="M 38 24 L 9.5 24 M 38 76 L 9.5 76 M 62 24 L 90.5 24 M 62 76 L 90.5 76"
                    stroke="url(#infinity-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.35"
                    filter="url(#glow-blur)"
                    variants={horizLineVariants}
                  />
                  <motion.path
                    d="M 38 24 L 9.5 24 M 38 76 L 9.5 76 M 62 24 L 90.5 24 M 62 76 L 90.5 76"
                    stroke="#F1C40F"
                    strokeWidth="1.0"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.5"
                    filter="url(#core-blur)"
                    variants={horizLineVariants}
                  />
                  <motion.path
                    d="M 38 24 L 9.5 24 M 38 76 L 9.5 76 M 62 24 L 90.5 24 M 62 76 L 90.5 76"
                    stroke="#FFFFFF"
                    strokeWidth="0.3"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.95"
                    variants={horizLineVariants}
                  />
                </g>

                {/* Vertical Connectors: Draw downwards at the outer column centers (delay: 1.8s, duration: 0.8s) */}
                <g>
                  <motion.path
                    d="M 9.5 24 L 9.5 76 M 90.5 24 L 90.5 76"
                    stroke="url(#infinity-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.35"
                    filter="url(#glow-blur)"
                    variants={verticalLineVariants}
                  />
                  <motion.path
                    d="M 9.5 24 L 9.5 76 M 90.5 24 L 90.5 76"
                    stroke="#F1C40F"
                    strokeWidth="1.0"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.5"
                    filter="url(#core-blur)"
                    variants={verticalLineVariants}
                  />
                  <motion.path
                    d="M 9.5 24 L 9.5 76 M 90.5 24 L 90.5 76"
                    stroke="#FFFFFF"
                    strokeWidth="0.3"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.95"
                    variants={verticalLineVariants}
                  />
                </g>
              </svg>

              {/* Cards Area (Positioned Absolutely) */}
              <div className="absolute inset-0" style={{ zIndex: 10 }}>
                {/* Center Card */}
                <div
                  className="absolute left-[38%] top-[22%] w-[24%] h-[56%] flex flex-col items-center justify-center p-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[36px] shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_15px_45px_rgba(0,0,0,0.03)] text-center select-none"
                >
                  <div className="w-[40%] aspect-square mb-4 flex items-center justify-center">
                    <AnimatedHomeIcon width={64} height={64} className="w-full h-full object-contain" color="#1D1E1C" />
                  </div>
                  <h3 className="text-sm lg:text-lg xl:text-xl font-bold leading-snug tracking-tight text-dark-900 px-2">
                    Loan Against Property (LAP)
                  </h3>
                </div>

                {/* 8 Sub Cards */}
                {SUB_CARDS.map((card) => (
                  <motion.div
                    key={card.id}
                    variants={card.type === "inner" ? innerCardVariants : outerCardVariants}
                    className={`absolute flex flex-col items-center justify-center p-2.5 lg:p-4 bg-white/80 backdrop-blur-sm border border-white/60 rounded-[24px] shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_8px_30px_rgba(241,196,15,0.15)] hover:scale-[1.03] transition-all duration-300 text-center select-none ${card.className}`}
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 mb-1 lg:mb-2 flex items-center justify-center shrink-0">
                      <Image src={card.icon} alt={card.title} width={40} height={40} className="object-contain" />
                    </div>
                    <span className="text-[9px] lg:text-[11px] xl:text-xs font-semibold leading-tight text-dark-800 tracking-tight px-1">
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Version */}
            <div className="block md:hidden w-full relative rounded-3xl overflow-hidden bg-gray-100/60 border border-gray-200/80 p-5 shadow-sm flex flex-col gap-6">
              {/* Mobile 4 Cards Grid Top */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                className="grid grid-cols-2 gap-3.5"
              >
                {SUB_CARDS.slice(0, 4).map((card) => (
                  <motion.div
                    key={card.id}
                    variants={mobileCardVariants}
                    className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-3 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center aspect-[1.15/1]"
                  >
                    <div className="w-9 h-9 mb-2 flex items-center justify-center shrink-0">
                      <Image src={card.icon} alt={card.title} width={36} height={36} className="object-contain" />
                    </div>
                    <span className="text-[10px] font-semibold leading-tight text-dark-800 tracking-tight">
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main LAP Card */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={mobileCardVariants}
                className="relative w-full flex justify-center"
              >
                {/* Yellow glow behind the center card */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gold-400/35 blur-2xl animate-pulse pointer-events-none" />
                <div className="w-[48%] aspect-square bg-white/40 backdrop-blur-xl border border-white/60 rounded-[20px] p-3 shadow-sm text-center flex flex-col items-center justify-center relative z-10">
                  <div className="w-9 h-9 mb-2 flex items-center justify-center shrink-0">
                    <AnimatedHomeIcon width={36} height={36} className="w-full h-full object-contain" color="#1D1E1C" />
                  </div>
                  <h3 className="text-[10px] font-bold leading-tight tracking-tight text-dark-900 px-1">
                    Loan Against Property (LAP)
                  </h3>
                </div>
              </motion.div>

              {/* Mobile 4 Cards Grid Bottom */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                className="grid grid-cols-2 gap-3.5"
              >
                {SUB_CARDS.slice(4).map((card) => (
                  <motion.div
                    key={card.id}
                    variants={mobileCardVariants}
                    className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-[20px] p-3 shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.14),_0_2px_10px_rgba(0,0,0,0.01)] flex flex-col items-center justify-center text-center aspect-[1.15/1]"
                  >
                    <div className="w-9 h-9 mb-2 flex items-center justify-center shrink-0">
                      <Image src={card.icon} alt={card.title} width={36} height={36} className="object-contain" />
                    </div>
                    <span className="text-[10px] font-semibold leading-tight text-dark-800 tracking-tight">
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
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
