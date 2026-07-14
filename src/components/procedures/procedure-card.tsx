import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Procedure } from "@/types";

interface ProcedureCardProps {
  procedure: Procedure;
}

export function ProcedureCard({ procedure }: ProcedureCardProps) {
  return (
    <Link
      href={`/protseduri/${procedure.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8"
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={procedure.image}
          alt={procedure.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-semibold tracking-tight">{procedure.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {procedure.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Научете повече
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
