import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section
      aria-label={`${siteConfig.name} — Кинезитерапия и Физиотерапия в София`}
      className="relative -mt-20 flex min-h-screen items-center overflow-hidden"
    >
      {/* Mobile background — up to 768px */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/images/hero-mobile.png"
          alt="Екипът на D. Health в рехабилитационното студио"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Tablet background — 768px to 1024px */}
      <div className="absolute inset-0 hidden md:block lg:hidden">
        <Image
          src="/images/hero-tablet.png"
          alt="Екипът на D. Health в рехабилитационното студио"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Desktop background — 1024px+ */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/d-health-team-hero-3.png"
          alt="Екипът на D. Health в рехабилитационното студио"
          fill
          priority
          sizes="100vw"
          className="object-cover [object-position:55%_center]"
        />
      </div>

      {/* Left-heavy gradient overlay — keeps team visible on the right */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(0,0,0,.72) 0%,rgba(0,0,0,.48) 35%,rgba(0,0,0,.14) 65%,rgba(0,0,0,.04) 100%)",
        }}
      />
      {/* Bottom fade for mobile readability */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent md:hidden"
      />

      {/* Content — left-aligned, capped at 560 px */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-48 lg:px-8 lg:py-36">
        <div className="max-w-[560px]">
          <p className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            {siteConfig.owner.name} — {siteConfig.owner.title}
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.1]">
            Кинезитерапия &{" "}
            <span className="text-blue-400">Физиотерапия</span>
            <br className="hidden sm:block" />
            {" "}в София
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
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
              className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              Нашите процедури
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
