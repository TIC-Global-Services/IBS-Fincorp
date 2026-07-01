import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "TATA CAPITAL", logo: "/assets/banks/tata.jpg" },
    { name: "ICICI Bank", logo: "/assets/banks/icici.jpg" },
    { name: "Kotak", logo: "/assets/banks/kotak.jpg" },
    { name: "Piramal", logo: "/assets/banks/piramal.jpg" },
    { name: "Small Finance Bank", logo: "/assets/banks/sf.jpg" },
    { name: "HDFC BANK" },
    { name: "AXIS BANK" },
    { name: "BAJAJ FINSERV" },
    { name: "Godrej Capital" },
    { name: "FEDERAL BANK" },
    { name: "IDFC FIRST Bank" },
    { name: "YES BANK" },
  ];

  const row1 = [...partners];
  const row2 = [...partners].reverse();
  const row3 = [...partners.slice(6), ...partners.slice(0, 6)];

  const renderRow = (items: typeof partners, direction: "left" | "right") => (
    <div className={`flex w-max hover:pause-animation ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}>
      {[...Array(2)].map((_, setIdx) => (
        <div key={setIdx} className="flex gap-6 pr-6">
          {items.map((partner, idx) => (
            <div key={`${setIdx}-${idx}`} className="bg-white border border-gray-100 rounded-[2rem] p-4 w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden">
              {partner.logo ? (
                <div className="relative w-14 h-14 md:w-20 md:h-20">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
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
    <section id="partners" className="py-24 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gold-500 font-bold tracking-widest text-sm mb-4 uppercase">Your Trust, Our Network</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Backed By 50+ Banks & NBFCs</h2>
        </div>
      </div>

      {/* Scrolling Marquees */}
      <div
        className="relative w-full flex flex-col gap-6 pb-12"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        {renderRow(row1, "left")}
        {renderRow(row2, "right")}
        {renderRow(row3, "left")}
      </div>
    </section>
  );
}
