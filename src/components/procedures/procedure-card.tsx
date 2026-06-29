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
      className="group flex flex-col rounded-lg border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-accent/50"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
        {procedure.name.charAt(0)}
      </div>
      <h3 className="text-lg font-semibold">{procedure.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {procedure.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
        Научете повече
        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
