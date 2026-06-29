import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-gradient-to-br from-primary/10 via-background to-secondary/30">
      <SectionWrapper className="py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {siteConfig.owner.name} — {siteConfig.owner.title}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Кинезитерапия &{" "}
            <span className="text-primary">Физиотерапия</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Персонализирани програми за възстановяване, рехабилитация и
            подобряване на качеството на живот.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button render={<Link href="/zapitvane" />} size="lg">
              Запазете час
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button render={<Link href="/protseduri" />} variant="outline" size="lg">
              Нашите процедури
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
