import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProcedureCard } from "./procedure-card";
import type { Procedure } from "@/types";

interface ProcedureDetailProps {
  procedure: Procedure;
  relatedProcedures: Procedure[];
}

export function ProcedureDetail({ procedure, relatedProcedures }: ProcedureDetailProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={procedure.image}
              alt={procedure.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {procedure.fullDescription}
            </p>
          </div>

          {procedure.duration && (
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Продължителност: {procedure.duration}</span>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Ползи</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {procedure.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-lg bg-primary/5 p-8">
            <h2 className="text-xl font-semibold">
              Запазете час за {procedure.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Свържете се с нас за консултация и персонализирана програма.
            </p>
            <div className="mt-6">
              <Button
                render={<Link href={`/zapitvane?procedure=${procedure.slug}`} />}
                size="lg"
              >
                Запазете час
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <aside>
          <h2 className="text-lg font-semibold">Други процедури</h2>
          <div className="mt-4 flex flex-col gap-4">
            {relatedProcedures.map((related) => (
              <ProcedureCard key={related.id} procedure={related} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
