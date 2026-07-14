import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Procedure } from "@/types";
import { procedureIcons, defaultProcedureIcon } from "./procedure-icons";

interface ProcedureShowcaseCardProps {
  procedure: Procedure;
}

export function ProcedureShowcaseCard({ procedure }: ProcedureShowcaseCardProps) {
  const Icon = procedureIcons[procedure.id] ?? defaultProcedureIcon;

  return (
    <article className="group relative grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] md:min-h-[290px] md:grid-cols-[55%_45%]">
      <Link
        href={`/protseduri/${procedure.slug}`}
        aria-label={`Научете повече за ${procedure.name}`}
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      />

      <div className="order-2 flex flex-col justify-center p-7 md:order-1 md:p-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 md:h-[72px] md:w-[72px]">
          <Icon className="h-7 w-7 text-primary md:h-8 md:w-8" aria-hidden="true" />
        </div>

        <h3 className="mb-3 text-[26px] leading-tight font-bold text-foreground md:mb-[18px] md:text-[32px]">
          {procedure.name}
        </h3>

        <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.7]">
          {procedure.shortDescription}
        </p>

        <span
          aria-hidden="true"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 self-start rounded-full border-2 border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-colors duration-250 group-hover:bg-primary group-hover:text-primary-foreground md:mt-8 md:w-fit md:justify-start"
        >
          Научете повече
          <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
        </span>
      </div>

      <div className="relative order-1 h-[260px] w-full overflow-hidden md:order-2 md:h-full">
        <Image
          src={procedure.image}
          alt={procedure.name}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-400 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 35vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent"
        />
      </div>
    </article>
  );
}
