import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-transparent pt-12 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Regulatory Disclosure */}
        <div className="bg-white/20 rounded-[2rem] p-6 mb-8 text-center max-w-7xl mx-auto backdrop-blur-md shadow-xl">
          <h2 className="text-xl md:text-[42px] font-medium mb-4 tracking-tight">Regulatory & Compliance Disclosure</h2>
          <p className="text-xs md:text-lg max-w-4xl mx-auto leading-tight tracking-tight">
            IBSFINCORP, a brand of INCETTO BUSINESS SOLUTIONS PRIVATE LIMITED is a strategic loan consulting firm and Corporate DSA. We are not a Bank or NBFC. Loans are sanctioned and disbursed by RBI-regulated lending institutions subject to their eligibility criteria and policies.
          </p>
        </div>

        {/* Main Footer Content wrapped in Glassmorphism Block */}
        <div className="bg-white/20 rounded-[2.5rem] p-10 max-w-7xl mx-auto backdrop-blur-xl shadow-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-4 text-center md:text-left">
              <div className="py-2 rounded inline-block">
                <Image src="/assets/logo.png" alt="IBS FINCORP Logo" width={160} height={45} className="object-cover" />
              </div>
              <p className="text-xs md:text-base font-normal">
                Strategic Loan Consulting Firm (Corporate DSA). Facilitating Premium Secured Loan Across South India. Not A Bank Or NBFC.
              </p>
            </div>

            {/* LOCATIONS */}
            <div className="lg:col-span-4 text-center md:text-left">
              <h3 className="font-medium mb-4 tracking-tight text-white">LOCATIONS</h3>
              <div className="text-xs md:text-sm tracking-tight space-y-4">
                <div>
                  <p className="flex items-center justify-center md:justify-start gap-2 text-white mb-1">
                    <Image src="/assets/location.svg" alt="Location" width={16} height={16} className="object-contain" />
                    REGISTERED OFFICE - CHENNAI
                  </p>
                  No. 756, 2nd Floor, Ganesha Towers, Arcot Road, Vadapalani, Chennai 600026
                </div>
                <div>
                  <p className="flex items-center justify-center md:justify-start gap-2 text-white mb-1">
                    <Image src="/assets/location.svg" alt="Location" width={16} height={16} className="object-contain" />
                    BRANCH OFFICE - BANGALORE
                  </p>
                  No. 756, 10th Main Road, 33rd Cross, 4th Block, Jayanagar, Bangalore 560011
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 text-center md:text-left">
              <h3 className="font-medium mb-4 tracking-tight text-white">QUICK LINKS</h3>
              <ul className="text-xs md:text-sm tracking-tight space-y-2 font-normal">
                <li><a href="#services" className="hover:text-gold-600 transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-gold-600 transition-colors">How it Works</a></li>
                <li><a href="#products" className="hover:text-gold-600 transition-colors">Loan Products</a></li>
                <li><a href="#locations" className="hover:text-gold-600 transition-colors">Locations</a></li>
                <li><a href="#about" className="hover:text-gold-600 transition-colors">About Us</a></li>
                <li><a href="#privacy" className="hover:text-gold-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Actions */}
            <div className="lg:col-span-2 text-center md:text-left">
              <h3 className="font-medium mb-4 tracking-tight text-white">CONTACT</h3>
              <ul className="text-sm tracking-tight space-y-2 mb-6 font-normal">
                <li className="flex items-center justify-center md:justify-start gap-2"><span>📞</span> +91 0000000000</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><span>✉️</span> info@ibsfincorp.com</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><span>📍</span> Chennai, Tamil Nadu</li>
              </ul>
              <button className="bg-[#1D1E1C] border border-transparent text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-gold-500 hover:text-[#1D1E1C] transition-all w-full md:w-auto shadow-md">
                Chat On WhatsApp
              </button>
            </div>
          </div>

          <div className="border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-normal tracking-tight">
            <p>© 2026 IBSFINCORP. All Rights Reserved.</p>
            <p>Designed and Developed by TIC Global Services</p>
          </div>
          <div className="border-t border-white/30 mt-4">

            <p className="text-xs md:text-sm mt-8 text-left max-w-6xl leading-tight tracking-tight font-normal">
              Disclaimer: INCETTO BUSINESS SOLUTIONS PRIVATE LIMITED Is A Loan Assistance And Strategic Financial Consulting Service Provider (Corporate DSA). We Are Not A Bank, NBFC, Or Licensed Lender. All Loan Approvals, Interest Rates, And Terms Are Determined Solely By The Respective Banks And NBFCs Based On Their Eligibility Policies And Internal Criteria. Loan Facilitation Is Subject To Lender Requirements. This Website Does Not Guarantee Loan Approval, Specific Interest Rates, Or Disbursement Timelines. Interest Rates And Terms Are Determined By The Lending Institution.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
