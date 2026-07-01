import Image from "next/image";
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "End-To-End Support",
      description: "From profile assessment to disbursement, every step is managed with white-glove service — no hand-offs, no confusion.",
      image: "/assets/hc-01.png"
    },
    {
      title: "Best-Fit Lender Match",
      description: "We present multiple lender options tailored to your financial profile — not commission-led recommendations.",
      image: "/assets/hc-02.png"
    },
    {
      title: "Doorstep Service",
      description: "Document collection and coordination come to you. No queues, no branch visits required at any stage.",
      image: "/assets/hc-03.png"
    },
    {
      title: "Faster Turnaround",
      description: "Streamlined submission process, coordinated with lenders to align disbursement to your timeline.",
      image: "/assets/hc-04.png"
    },
    {
      title: "Pre-Login Eligibility",
      description: "Early Profile Assessment Designed to Avoid Unnecessary CIBIL Enquiries and Improve Lender Alignment.",
      image: "/assets/hc-05.png"
    },
    {
      title: "Compliance-First",
      description: "Operating As A Strategic Loan Consultant, Not A Lender. All Loans Are Governed By RBI-Licensed Institutions.",
      image: "/assets/hc-06.png"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white text-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <TextBlurReveal
            as="h2"
            text="Why High-Credit Clients Choose Us"
            className="text-4xl md:text-5xl font-bold tracking-tight"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col aspect-[6/5] relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-5xl font-semibold text-dark-900 mb-4 group-hover:text-gold-500 transition-colors duration-300">0{idx + 1}</div>
                <h3 className="text-3xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-base text-[#828282] leading-tight tracking-tight">
                  {reason.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-full h-[55%] mt-auto transition-transform duration-500 group-hover:scale-105">
                <Image src={reason.image} alt={reason.title} fill className="object-contain object-bottom" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
