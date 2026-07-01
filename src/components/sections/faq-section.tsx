
import { TextBlurReveal } from "@/components/ui/text-blur-reveal";

const faqs = [
  {
    question: "Is IBSFINCORP a bank or NBFC?",
    answer: "No. IBSFINCORP is a strategic loan consulting and facilitation service provider (Corporate DSA). All loan sanctions are made by regulated banks and NBFCs based on their eligibility criteria and policies."
  },
  {
    question: "Does IBSFINCORP Facilitate Bank-to-Bank Loan Transfers?",
    answer: "Yes, we facilitate seamless Bank-to-Bank Loan Transfers (Balance Transfers). We help you move your existing high-value loans to lenders offering better interest rates, higher top-up amounts, or more favorable repayment terms."
  },
  {
    question: "What documents do I need to get started?",
    answer: "Basic requirements include KYC documents, recent bank statements, financial/ITR records, and property documents if applicable. Your dedicated relationship manager will provide a customized, streamlined checklist based on your profile."
  },
  {
    question: "Which cities do you serve?",
    answer: "We primarily serve prime borrowers across South India, with a strong presence in major cities across Tamil Nadu, Karnataka, and Pondicherry."
  },
  {
    question: "Does IBSFINCORP Charge Any Service Fees?",
    answer: "No, our services are completely commission-free for borrowers. We are officially remunerated directly by the lending institutions and partner banks."
  },
  {
    question: "What is the minimum loan amount you handle?",
    answer: "Our services are exclusively tailored for premium borrowers. We typically handle high-value loan requirements to ensure we can dedicate the necessary time and expertise to your portfolio."
  },
  {
    question: "Can you guarantee loan approval?",
    answer: "While we have a high success rate due to our rigorous pre-screening and expert structuring, final loan approvals are always at the sole discretion of the lending institutions based on their internal credit policies."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-32 relative bg-transparent overflow-hidden z-0">
      {/* Golden Background Glow */}
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-400/40 via-gold-400/5 to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-8 items-start max-w-7xl">

        {/* Left Column - Titles */}
        <div className="lg:w-5/12 lg:sticky lg:top-32 pt-4">
          <TextBlurReveal 
            as="h2" 
            text="Frequently Asked Questions"
            className="text-5xl md:text-6xl font-medium tracking-tight mb-6 text-dark-900 leading-[1.1]"
          />
          <p className="text-dark-900 font-medium text-lg">
            Honest Answers For Premium Borrowers.
          </p>
        </div>

        {/* Right Column - Accordion Container */}
        <div className="lg:w-7/12 w-full">
          <div className="bg-[#F8F9FA] rounded-[2rem] p-4 md:p-6 lg:p-8 flex flex-col gap-3 shadow-sm border border-gray-100">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-full text-left px-6 py-5 flex items-center justify-between cursor-default">
                  <span className="font-semibold text-[15px] md:text-base text-dark-900 pr-4">{faq.question}</span>
                </div>
                <div
                  className="px-6 overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:pb-6 group-hover:opacity-100"
                >
                  <p className="text-[#828282] leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
