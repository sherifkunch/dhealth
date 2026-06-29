import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { CTASection } from "@/components/home/cta-section";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { ContactPreview } from "@/components/home/contact-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <CTASection />
      <TestimonialsPreview />
      <ContactPreview />
    </>
  );
}
