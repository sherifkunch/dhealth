"use client";

import { useState } from "react";
import { Activity, Dumbbell, Check, ChevronDown, ChevronUp, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { JobOffer } from "@/types";

const ICONS: Record<string, LucideIcon> = {
  kineziterapevt: Activity,
  "pilates-instructor": Dumbbell,
};

interface JobCardProps {
  job: JobOffer;
}

export function JobCard({ job }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = ICONS[job.id] ?? Activity;
  const PREVIEW = 3;
  const shown = expanded ? job.requirements : job.requirements.slice(0, PREVIEW);
  const hasMore = job.requirements.length > PREVIEW;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      {/* Header */}
      <div className="flex items-start gap-4 border-b border-border bg-primary/5 px-6 py-5 transition-colors duration-300 group-hover:bg-primary/8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
          <Icon className="h-6 w-6 text-primary" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold leading-tight tracking-tight">{job.title}</h2>
          {job.note && (
            <p className="mt-1 text-xs text-muted-foreground">{job.note}</p>
          )}
        </div>
        <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Отворено
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 px-6 py-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{job.description}</p>

        {/* Requirements */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-foreground/40">
            Изисквания
          </p>
          <ul className="space-y-2.5">
            {shown.map((req) => (
              <li key={req} className="flex items-start gap-2.5 text-sm leading-snug">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setExpanded((p) => !p)}
              className="mt-3 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/70"
            >
              {expanded ? (
                <>По-малко <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Виж всички <ChevronDown className="h-4 w-4" /></>
              )}
            </button>
          )}
        </div>

        {/* Apply */}
        <div className="mt-auto pt-2">
          <Button render={<a href="mailto:dhealth.bg@gmail.com" />} className="w-full gap-2">
            <Mail className="h-4 w-4" />
            Кандидатствай
          </Button>
        </div>
      </div>
    </article>
  );
}
