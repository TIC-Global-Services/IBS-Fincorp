"use client";

import { useState } from "react";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

const faqs = [
  {
    question: "Is IBSFINCORP A Bank Or NBFC?",
    answer: "No. IBSFINCORP Is A Strategic Loan Consulting And Facilitation Service Provider (Corporate DSA). All Loan Sanctions Are Made By Regulated Banks And NBFCs Based On Their Eligibility Criteria And Policies."
  },
  {
    question: "Does IBSFINCORP Facilitate Bank-To-Bank Loan Transfers?",
    answer: "Yes. IBSFINCORP Supports Balance Transfer Of Eligible High-Value Secured Loans Between Banks And NBFCs To Help Clients Explore More Suitable Funding Terms And Structures."
  },
  {
    question: "Does IBSFINCORP Charge Any Service Fees?",
    answer: "No. IBSFINCORP Does Not Charge Clients For Premium Consultation Or Support Services. We Work In Association With Leading Banks And NBFCs To Facilitate Suitable Funding Solutions."
  },
  {
    question: "Which Cities Do You Serve?",
    answer: "Primary Focus On Chennai, Coimbatore, Madurai, Salem (Tamil Nadu), Bangalore, Mysore (Karnataka), And Pondicherry. Support Also Available For Other Major Indian Cities Subject To Eligibility And Lender Coverage."
  },
  {
    question: "What Is The Minimum Loan Amount You Handle?",
    answer: "We Specialise In High-Value Secured, Property-Backed Funding Mandates Above ₹50 Lakhs To Multi-Crore Levels"
  },
  {
    question: "What Documents Do I Need To Get Started?",
    answer: "Our Team Guides You Through The Complete Documentation Requirements Based On Your Loan Type And Selected Lender. We Provide Doorstep Assistance Throughout The Documentation Process."
  },
  {
    question: "Can You Guarantee Loan Approval?",
    answer: "Loan Approval, Interest Rates, And Terms Are Determined Solely By The Respective Lender. IBSFINCORP Helps You Present The Strongest Possible Application To The Most Suitable Lender For Your Profile."
  },

];

export default function FaqSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-18 relative bg-transparent overflow-hidden z-0">
      {/* Golden Background Glow */}
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-400/40 via-gold-400/5 to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-8 items-start max-w-7xl">

        {/* Left Column - Titles */}
        <div className="lg:w-5/12 lg:sticky lg:top-32">
          <TextBlurReveal
            as="h2"
            text="Frequently Asked Questions"
            className="text-3xl md:text-6xl font-medium tracking-tight mb-6 text-dark-900 leading-[1] text-center md:text-left"
          />
          <TextBlurReveal
            as="p"
            text="Honest Answers For Premium Borrowers."
            className="text-dark-900 font-medium text-sm md:text-lg tracking-tight text-center md:text-left" />
        </div>

        {/* Right Column - Accordion Container */}
        <div className="lg:w-7/12 w-full">
          <div className="bg-[#F8F9FA] rounded-[2rem] p-4 md:p-6 lg:p-8 flex flex-col gap-3 shadow-sm border border-gray-100">
            {faqs.map((faq, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <button
                    onClick={() => setActiveIdx(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer focus:outline-none group"
                  >
                    <span className="font-semibold text-[15px] md:text-base text-dark-900 pr-4 group-hover:text-gold-500 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="text-[#4D585F] shrink-0 ml-2 group-hover:text-gold-500 transition-colors duration-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-500' : 'rotate-0'}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[250px] pb-6 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                  >
                    <p className="text-[#4D585F] leading-tight tracking-tight text-sm">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
