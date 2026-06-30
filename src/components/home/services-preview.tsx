import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProcedureCard } from "@/components/procedures/procedure-card";
import { getFeaturedProcedures } from "@/data/procedures";

export function ServicesPreview() {
  const featured = getFeaturedProcedures();

  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-[2.5rem]">
          Какво предлагаме?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Специализирани процедури за вашето здраве и добро самочувствие.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((procedure) => (
          <ProcedureCard key={procedure.id} procedure={procedure} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button render={<Link href="/protseduri" />} variant="outline" size="lg">
          Виж всички процедури
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
