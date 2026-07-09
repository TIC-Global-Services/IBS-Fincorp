"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextBlurReveal } from "../ui/text-blur-reveal";

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState<string>("chennai");

  const locationMap: Record<string, { url: string; label: string; address: string }> = {
    chennai: {
      url: "https://maps.google.com/maps?q=3rd+Floor,+Gulecha+Towers,+No.+158,+Arcot+Rd,+Ottagapalayam,+Somasundara+Bharathi+Nagar,+Vadapalani,+Chennai,+Greater+Chennai,+Tamil+Nadu+600026&z=16&output=embed",
      label: "REGISTERED OFFICE - CHENNAI",
      address: "3rd Floor, Gulecha Towers, No. 158, Arcot Rd, Ottagapalayam, Somasundara Bharathi Nagar, Vadapalani, Chennai, Greater Chennai, Tamil Nadu 600026",
    },
    bangalore: {
      url: "https://maps.google.com/maps?q=756,+10th+Main+Rd,+4th+Block,+Jayanagar,+Bengaluru,+Karnataka+560011&z=16&output=embed",
      label: "BRANCH OFFICE - BANGALORE",
      address: "756, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
    },
    madurai: {
      url: "https://maps.google.com/maps?q=No+39A,+Bizzbay+CoWork+Space,+2nd+Floor,+Kalasekar+Tower,+Sokalinga+Nagar+Main+Road,+Bypass+Road,+Madurai,+Tamil+Nadu+625016&z=16&output=embed",
      label: "MADURAI OFFICE",
      address: "No 39A, Bizzbay CoWork Space, 2nd Floor, Kalasekar Tower, Sokalinga Nagar Main Road, Bypass Road, Madurai, Tamil Nadu 625016",
    },
    coimbatore: {
      url: "https://maps.google.com/maps?q=9,+Betaspace,+35,+Desabandhu+St,+Ram+Nagar,+Coimbatore,+Tamil+Nadu+641009&z=16&output=embed",
      label: "COIMBATORE OFFICE",
      address: "9, Betaspace, 35, Desabandhu St, Ram Nagar, Coimbatore, Tamil Nadu 641009",
    },
  };

  return (
    <section id="locations" className="py-10 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
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
                className="bg-dark-700/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl text-left text-white"
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
        <div className="hidden md:flex max-w-5xl mx-auto flex-row justify-center gap-12 lg:gap-20 px-4">
          <div
            className="flex gap-4 items-start cursor-pointer group"
            role="button" tabIndex={0}
            onClick={() => setActiveLocation("chennai")}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("chennai"); } }}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "chennai" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "chennai" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Chennai</h4>
              <p className="text-xs text-[#828282] tracking-tight">Registered Office</p>
            </div>
          </div>

          <div
            className="flex gap-4 items-start cursor-pointer group"
            role="button" tabIndex={0}
            onClick={() => setActiveLocation("bangalore")}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("bangalore"); } }}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "bangalore" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "bangalore" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Bangalore</h4>
              <p className="text-xs text-[#828282] tracking-tight">Branch Office</p>
            </div>
          </div>

          <div
            className="flex gap-4 items-start cursor-pointer group"
            role="button" tabIndex={0}
            onClick={() => setActiveLocation("madurai")}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("madurai"); } }}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "madurai" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "madurai" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Madurai</h4>
              <p className="text-xs text-[#828282] tracking-tight">Madurai Office</p>
            </div>
          </div>

          <div
            className="flex gap-4 items-start cursor-pointer group"
            role="button" tabIndex={0}
            onClick={() => setActiveLocation("coimbatore")}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("coimbatore"); } }}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 transition-all duration-300 ${activeLocation === "coimbatore" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
            <div>
              <h4 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeLocation === "coimbatore" ? "text-gold-500" : "text-dark-900 group-hover:text-gold-500"}`}>Coimbatore</h4>
              <p className="text-xs text-[#828282] tracking-tight">Coimbatore Office</p>
            </div>
          </div>
        </div>

        {/* Location Points - Mobile Marquee View */}
        <div className="md:hidden relative w-full flex overflow-hidden py-2 marquee-mask-edge">
          <div className="flex w-max animate-scroll-left hover:pause-animation gap-12">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 flex-shrink-0 items-center">
                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" role="button" tabIndex={0} onClick={() => setActiveLocation("chennai")} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("chennai"); } }}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "chennai" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "chennai" ? "text-gold-500" : "text-dark-900"}`}>Chennai</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Registered Office</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" role="button" tabIndex={0} onClick={() => setActiveLocation("bangalore")} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("bangalore"); } }}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "bangalore" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "bangalore" ? "text-gold-500" : "text-dark-900"}`}>Bangalore</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Branch Office</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" role="button" tabIndex={0} onClick={() => setActiveLocation("madurai")} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("madurai"); } }}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "madurai" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "madurai" ? "text-gold-500" : "text-dark-900"}`}>Madurai</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Madurai Office</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0 cursor-pointer" role="button" tabIndex={0} onClick={() => setActiveLocation("coimbatore")} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLocation("coimbatore"); } }}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeLocation === "coimbatore" ? "bg-gold-350 ring-4 ring-gold-350/30 scale-125" : "bg-gold-350/40"}`}></div>
                  <div className="text-left">
                    <h4 className={`font-medium text-[15px] mb-0.5 leading-tight transition-colors duration-300 ${activeLocation === "coimbatore" ? "text-gold-500" : "text-dark-900"}`}>Coimbatore</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Coimbatore Office</p>
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
