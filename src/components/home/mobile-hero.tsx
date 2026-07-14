import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileHero() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden sm:hidden">
      <Image
        src="/images/hero/hero-mobile-portrait.webp"
        alt="Екипът на D. Health в студиото по кинезитерапия"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/[0.12]" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5,10,18,0.96) 0%, rgba(5,10,18,0.82) 28%, rgba(5,10,18,0.35) 55%, rgba(5,10,18,0) 72%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-[calc(96px+env(safe-area-inset-bottom))]">
        <div className="max-w-[370px]">
          <h1 className="mb-[18px] text-[clamp(38px,10vw,52px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
            Грижа, движение,{" "}
            <span className="text-blue-400">по-добър живот.</span>
          </h1>

          <p className="mb-6 max-w-[340px] text-[17px] leading-[1.55] text-white/[0.84]">
            Индивидуален подход и съвременни методи за възстановяване, лечение
            и превенция на болката.
          </p>

          <Link
            href="/za-nas"
            className="inline-flex h-14 min-w-[220px] items-center gap-3 rounded-full border border-white/90 bg-black/10 py-1 pl-1 pr-6 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowRight className="size-5" aria-hidden />
            </span>
            Научете повече
          </Link>
        </div>
      </div>
    </div>
  );
}
