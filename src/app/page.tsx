import { Hero } from "@/components/home/hero";
import { MobileBenefits } from "@/components/home/mobile-benefits";
import { MobileBookingCta } from "@/components/home/mobile-booking-cta";
import { StatsSection } from "@/components/home/stats-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { CTASection } from "@/components/home/cta-section";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { ContactPreview } from "@/components/home/contact-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MobileBenefits />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
      <TestimonialsPreview />
      <ContactPreview />
      <MobileBookingCta />
    </>
  );
}
