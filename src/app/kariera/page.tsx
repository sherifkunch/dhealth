import type { Metadata } from "next";
import {
  Building2,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  ArrowDown,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/jobs/job-card";
import { getActiveJobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Кариера",
  description:
    "Търсим мотивирани специалисти — кинезитерапевт и пилатес инструктор. Присъединете се към екипа на D.Health.",
};

const BENEFIT_ICONS = [Building2, Clock, TrendingUp, Users, DollarSign];

const BENEFITS = [
  "Модерен терапевтичен център",
  "Гъвкаво работно време",
  "Възможност за професионално развитие",
  "Подкрепящ и приятелски екип",
  "Конкурентно възнаграждение",
];

export default function KarieraPage() {
  const activeJobs = getActiveJobs();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-br from-primary/8 via-background to-blue-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {activeJobs.length} отворени{" "}
            {activeJobs.length === 1 ? "позиция" : "позиции"}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Търсим нови
            <br />
            <span className="text-primary">попълнения</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ако си мотивиран специалист и искаш да работиш в модерна и
            развиваща се среда, ще се радваме да се запознаем!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button render={<a href="#pozitsii" />} size="lg" className="gap-2">
              Виж позициите
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              render={<a href="mailto:dhealth.bg@gmail.com" />}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              Изпрати CV
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20 sm:px-6 lg:px-8 space-y-20">
        {/* Open positions */}
        <section id="pozitsii" aria-labelledby="positions-heading">
          <h2
            id="positions-heading"
            className="mb-2 text-center text-2xl font-bold tracking-tight"
          >
            Отворени позиции
          </h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Кликни върху позицията, за да видиш всички изисквания.
          </p>
          {activeJobs.length === 0 ? (
            <p className="text-center text-muted-foreground">
              В момента няма отворени позиции. Проверете отново скоро.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {activeJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </section>

        {/* Benefits */}
        <section aria-labelledby="benefits-heading">
          <h2
            id="benefits-heading"
            className="mb-8 text-center text-2xl font-bold tracking-tight"
          >
            При нас ще откриеш
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((text, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <li
                  key={text}
                  className="flex items-center gap-4 rounded-xl border border-border bg-background px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-sm font-medium">{text}</span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA */}
        <section
          aria-label="Как да кандидатстваш"
          className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-700 px-8 py-12 text-center text-white shadow-lg shadow-primary/20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Готов да се присъединиш?
          </p>
          <p className="mt-3 text-2xl font-bold">Изпрати своето CV на:</p>
          <a
            href="mailto:dhealth.bg@gmail.com"
            className="mt-3 inline-flex items-center gap-2 text-xl font-bold text-white/90 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            <Mail className="h-5 w-5" />
            dhealth.bg@gmail.com
          </a>
          <p className="mt-4 text-sm text-white/60">
            Ще се свържем с теб в рамките на 2–3 работни дни.
          </p>
        </section>
      </div>
    </>
  );
}
