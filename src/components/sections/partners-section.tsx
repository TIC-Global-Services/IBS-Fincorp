import Image from "next/image";
import { TextBlurReveal } from "../ui/text-blur-reveal";
import { PARTNERS } from "@/constants/partners";
import type { Partner } from "@/constants/partners";

export default function PartnersSection() {
  const partners: Partner[] = PARTNERS;

  const row1 = [...partners];
  const row2 = [...partners].reverse();
  const row3 = [...partners.slice(6), ...partners.slice(0, 6)];

  const renderRow = (items: Partner[], direction: "left" | "right") => (
    <div className={`flex w-max hover:pause-animation ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}>
      {[...Array(2)].map((_, setIdx) => (
        <div key={setIdx} className="flex gap-6 pr-6">
          {items.map((partner, idx) => (
            <div key={`${setIdx}-${idx}`} className="bg-white border border-gray-100 rounded-[2rem] p-5 md:p-6 w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden">
              {partner.logo ? (
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image src={partner.logo} alt={partner.name} fill sizes="(max-width: 768px) 96px, 128px" className="object-contain" />
                </div>
              ) : (
                <span className="font-bold text-[#828282] text-xs text-center leading-tight">{partner.name}</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section id="partners" className="py-18 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <TextBlurReveal
            as="h2"
            text="Backed By 50+ Banks & NBFCs"
            className="text-4xl md:text-5xl font-medium tracking-tight mb-2"
          />
          <TextBlurReveal
            as="p"
            text="We match you with the most suitable lender — not just the first available. Strategic funding solutions facilitated through leading RBI-regulated Banks & NBFCs across India."
            className="text-sm md:text-lg leading-tight tracking-tight font-normal "
            delay={0.3}
          />
        </div>
      </div>

      {/* Scrolling Marquees */}
      <div className="relative w-full flex flex-col gap-6 pb-4 md:pb-12 marquee-mask-edge">
        {renderRow(row1, "left")}
        {renderRow(row2, "right")}
        {renderRow(row3, "left")}
      </div>
    </section>
  );
}
