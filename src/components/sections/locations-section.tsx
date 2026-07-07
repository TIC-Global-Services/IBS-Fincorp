"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextBlurReveal } from "../ui/text-blur-reveal";

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState<string>("default");

  const locationMap: Record<string, { url: string; label: string; address: string }> = {
    default: {
      url: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4013444.7570415395!2d78.6568942!3d10.8271225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      label: "COVERAGE REGION",
      address: "Serving prime borrowers across South India including Tamil Nadu, Karnataka, and Pondicherry.",
    },
    tamilnadu: {
      url: "https://maps.google.com/maps?q=13.049196,80.2096155&z=16&output=embed",
      label: "REGISTERED OFFICE - CHENNAI",
      address: "No. 158, 2nd Floor, Gulecha Towers, Arcot Road, Vadapalani, Chennai 600026",
    },
    karnataka: {
      url: "https://maps.google.com/maps?q=12.9236239,77.5802283&z=16&output=embed",
      label: "BRANCH OFFICE - BANGALORE",
      address: "No. 756, 10th Main Road, 33rd Cross, 4th Block, Jayanagar, Bangalore 560011",
    },
    pondicherry: {
      url: "https://maps.google.com/maps?q=11.9416,79.8083&z=14&output=embed",
      label: "PONDICHERRY OFFICE",
      address: "Puducherry, India",
    },
  };

  return (
    <section id="locations" className="py-10 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <TextBlurReveal
            as="h2"
            text="Serving South India's Prime Borrowers"
            className="text-4xl md:text-5xl font-medium tracking-tight mb-4"
          />
          <TextBlurReveal
            as="p"
            text="Present Where Your Assets And Ambitions Are. Click locations below to view on map."
            className="text-sm md:text-lg"
            delay={0.3}
          />
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto bg-gray-100 rounded-3xl h-[500px] border border-gray-200 mb-16 relative overflow-hidden shadow-inner">
          <iframe
            src={locationMap[activeLocation].url}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>

          {/* Floating Address Indicator */}
          <div className="absolute bottom-4 left-4 right-4 md:right-auto z-20 max-w-xs md:max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1D1E1C]/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl text-left text-white"
              >
                <p className="text-gold-500 font-semibold text-xs tracking-wider mb-1">
                  {locationMap[activeLocation].label}
                </p>
                <p className="text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed text-gray-200">
                  {locationMap[activeLocation].address}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtle overlay gradient to blend edges */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
        </div>

        {/* Location Points - Desktop View */}
        <div className="hidden md:flex max-w-5xl mx-auto flex-row justify-between gap-4 px-4">
          <div 
            className="flex gap-4 items-start cursor-pointer group" 
            onClick={() => setActiveLocation("tamilnadu")}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "tamilnadu" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "tamilnadu" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Tamil Nadu</h4>
              <p className="text-xs text-[#828282] tracking-tight">Chennai · Coimbatore · Madurai · Salem</p>
            </div>
          </div>

          <div 
            className="flex gap-4 items-start cursor-pointer group" 
            onClick={() => setActiveLocation("karnataka")}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "karnataka" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "karnataka" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Karnataka</h4>
              <p className="text-xs text-[#828282] tracking-tight">Bangalore · Mysore</p>
            </div>
          </div>

          <div 
            className="flex gap-4 items-start cursor-pointer group" 
            onClick={() => setActiveLocation("pondicherry")}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "pondicherry" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "pondicherry" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Pondicherry (UT)</h4>
              <p className="text-xs text-[#828282] tracking-tight">Puducherry</p>
            </div>
          </div>

          <div 
            className="flex gap-4 items-start cursor-pointer group" 
            onClick={() => setActiveLocation("default")}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "default" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "default" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Other Cities</h4>
              <p className="text-xs text-[#828282] tracking-tight">Subject To Coverage</p>
            </div>
          </div>
        </div>

        {/* Location Points - Mobile Marquee View */}
        <div
          className="md:hidden relative w-full flex overflow-hidden py-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <div className="flex w-max animate-scroll-left hover:pause-animation gap-12">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 flex-shrink-0 items-center">
                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" onClick={() => setActiveLocation("tamilnadu")}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "tamilnadu" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "tamilnadu" ? "text-gold-500" : "text-dark-900"}`}>Tamil Nadu</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Chennai · Coimbatore · Madurai · Salem</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" onClick={() => setActiveLocation("karnataka")}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "karnataka" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "karnataka" ? "text-gold-500" : "text-dark-900"}`}>Karnataka</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Bangalore · Mysore</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" onClick={() => setActiveLocation("pondicherry")}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "pondicherry" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "pondicherry" ? "text-gold-500" : "text-dark-900"}`}>Pondicherry (UT)</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Puducherry</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" onClick={() => setActiveLocation("default")}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "default" ? "bg-[#FFBB00] ring-4 ring-[#FFBB00]/30 scale-125" : "bg-[#FFBB00]/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "default" ? "text-gold-500" : "text-dark-900"}`}>Other Cities</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Subject To Coverage</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
