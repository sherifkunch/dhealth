import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Blue radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-400/8 blur-[100px]"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <SectionWrapper className="relative py-28 sm:py-36 lg:py-[160px]">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-blue-400">
            {siteConfig.owner.name} — {siteConfig.owner.title}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.1]">
            Кинезитерапия &{" "}
            <span className="text-blue-400">
              Физиотерапия
            </span>
            <br className="hidden sm:block" />
            {" "}в София
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Персонализирани програми за възстановяване, рехабилитация и
            подобряване на качеството на живот. 12+ специализирани процедури,
            индивидуален подход.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button render={<Link href="/zapitvane" />} size="lg">
              Запазете час
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              render={<Link href="/protseduri" />}
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/8 hover:text-white"
            >
              Нашите процедури
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
