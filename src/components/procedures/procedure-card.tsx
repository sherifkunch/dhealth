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
      className="group flex flex-col rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary transition-colors group-hover:bg-primary/20">
        {procedure.name.charAt(0)}
      </div>
      <h3 className="text-lg font-semibold">{procedure.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {procedure.shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
        Научете повече
        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
