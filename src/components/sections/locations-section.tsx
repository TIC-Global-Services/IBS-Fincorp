import { TextBlurReveal } from "../ui/text-blur-reveal";

export default function LocationsSection() {
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
            text="Present Where Your Assets And Ambitions Are."
            className="text-sm md:text-lg"
            delay={0.3}
          />
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto bg-gray-100 rounded-3xl h-[500px] border border-gray-200 mb-16 relative overflow-hidden shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4013444.7570415395!2d78.6568942!3d10.8271225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.1) opacity(0.7)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>

          {/* Subtle overlay gradient to blend edges */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
        </div>

        {/* Location Points - Desktop View */}
        <div className="hidden md:flex max-w-5xl mx-auto flex-row justify-between gap-4 px-4">
          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 bg-[#FFBB00] rounded-full mt-1.5 "></div>
            <div>
              <h4 className="font-medium text-lg mb-1">Tamil Nadu</h4>
              <p className="text-sm tracking-tight">Chennai · Coimbatore · Madurai · Salem</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 bg-[#FFBB00] rounded-full mt-1.5"></div>
            <div>
              <h4 className="font-medium text-lg mb-1">Karnataka</h4>
              <p className="text-sm">Bangalore · Mysore</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 bg-[#FFBB00] rounded-full mt-1.5"></div>
            <div>
              <h4 className="font-medium text-lg mb-1">Pondicherry (UT)</h4>
              <p className="text-sm">Puducherry</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-3 h-3 bg-[#FFBB00] rounded-full mt-1.5"></div>
            <div>
              <h4 className="font-medium text-lg mb-1">Other Major Indian Cities</h4>
              <p className="text-sm">Subject To Eligibility & Lender Coverage</p>
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
                <div className="flex gap-3 items-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-[#FFBB00] rounded-full"></div>
                  <div className="text-left">
                    <h4 className="font-medium text-[15px] mb-0.5 leading-tight">Tamil Nadu</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Chennai · Coimbatore · Madurai · Salem</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-[#FFBB00] rounded-full"></div>
                  <div className="text-left">
                    <h4 className="font-medium text-[15px] mb-0.5 leading-tight">Karnataka</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Bangalore · Mysore</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-[#FFBB00] rounded-full"></div>
                  <div className="text-left">
                    <h4 className="font-medium text-[15px] mb-0.5 leading-tight">Pondicherry (UT)</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Puducherry</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-[#FFBB00] rounded-full"></div>
                  <div className="text-left">
                    <h4 className="font-medium text-[15px] mb-0.5 leading-tight">Other Major Indian Cities</h4>
                    <p className="text-xs text-[#828282] whitespace-nowrap">Subject To Eligibility & Lender Coverage</p>
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
