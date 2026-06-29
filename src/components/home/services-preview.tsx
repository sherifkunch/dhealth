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
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Какво предлагаме?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Специализирани процедури за вашето здраве и добро самочувствие.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((procedure) => (
          <ProcedureCard key={procedure.id} procedure={procedure} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button render={<Link href="/protseduri" />} variant="outline">
          Виж всички процедури
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
