import { Activity, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Activity, value: "12+", label: "Процедури" },
  { icon: Users, value: "500+", label: "Доволни клиенти" },
  { icon: Award, value: "5+", label: "Години опит" },
  { icon: Clock, value: "6", label: "Дни в седмицата" },
];

export function StatsSection() {
  return (
    <section className="border-b border-border bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
