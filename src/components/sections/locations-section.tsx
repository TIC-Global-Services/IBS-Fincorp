export default function LocationsSection() {
  return (
    <section id="locations" className="py-24 bg-white text-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Serving South India's Prime Borrowers</h2>
          <p className="text-[#828282] text-lg">Present Where Your Assets And Ambitions Are.</p>
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

        {/* Location Points */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-4 px-4">

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
      </div>
    </section>
  );
}
