import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-primary/8 via-background to-secondary/40">
      {/* Decorative ring — purely visual, aria-hidden */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"
      />

      <SectionWrapper className="relative py-28 sm:py-36 lg:py-[160px]">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            {siteConfig.owner.name} — {siteConfig.owner.title}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[4rem] lg:leading-[1.1]">
            Кинезитерапия &{" "}
            <span className="text-primary">Физиотерапия</span>
            <br className="hidden sm:block" />
            <span className="text-foreground"> в София</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Персонализирани програми за възстановяване, рехабилитация и
            подобряване на качеството на живот. 12+ специализирани процедури,
            индивидуален подход.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
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
