import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Procedure } from "@/types";

interface ProcedureCardProps {
  procedure: Procedure;
}

export function ProcedureCard({ procedure }: ProcedureCardProps) {
  return (
    <Link
      href={`/protseduri/${procedure.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary transition-colors duration-200 group-hover:bg-primary/15">
        {procedure.name.charAt(0)}
      </div>
      <h3 className="text-base font-semibold tracking-tight">{procedure.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {procedure.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Научете повече
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
