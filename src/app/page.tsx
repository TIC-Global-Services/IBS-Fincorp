import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutStatsSection from "@/components/sections/about-stats-section";
import SolutionsSection from "@/components/sections/solutions-section";
import ComparisonAppSection from "@/components/sections/comparison-app-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section";
import PartnersSection from "@/components/sections/partners-section";
import LocationsSection from "@/components/sections/locations-section";
import CtaSection from "@/components/sections/cta-section";
import FaqSection from "@/components/sections/faq-section";
import { ConsultationModal } from "@/components/ui/consultation-modal";

export default function Home() {
  return (
    <>
      <Header />
      <ConsultationModal />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <AboutStatsSection />
        <SolutionsSection />
        <ComparisonAppSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <PartnersSection />
        <LocationsSection />
        <CtaSection />
        <div className="bg-comparison-gradient">
          <FaqSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
