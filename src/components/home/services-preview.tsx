import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ProcedureShowcaseCard } from "@/components/home/procedure-showcase-card";
import { ServicesFeaturesStrip } from "@/components/home/services-features-strip";
import { getFeaturedProcedures } from "@/data/procedures";

export function ServicesPreview() {
  const featured = getFeaturedProcedures();

  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-[90px] pb-[100px] sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-[15px] font-semibold tracking-[3px] text-primary uppercase">
          Нашите процедури
        </p>
        <h2 className="mt-4 text-[32px] leading-tight font-extrabold text-foreground sm:text-[42px] lg:text-[56px]">
          Какво предлагаме?
        </h2>
        <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-primary" />
        <p className="mx-auto mt-6 max-w-[700px] text-xl text-muted-foreground">
          Специализирани процедури за вашето здраве и добро самочувствие.
        </p>
      </div>

      <div className="mt-[70px] grid grid-cols-1 gap-8 lg:grid-cols-2">
        {featured.map((procedure, index) => (
          <ScrollReveal key={procedure.id} delay={(index % 2) * 120}>
            <ProcedureShowcaseCard procedure={procedure} />
          </ScrollReveal>
        ))}
      </div>

      <ServicesFeaturesStrip />

      <div className="mt-12 text-center">
        <Button render={<Link href="/protseduri" />} variant="outline" size="lg">
          Виж всички процедури
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
