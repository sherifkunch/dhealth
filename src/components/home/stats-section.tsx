import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Activity, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Activity, value: "12+", label: "Процедури" },
  { icon: Users, value: "500+", label: "Доволни клиенти" },
  { icon: Award, value: "5+", label: "Години опит" },
  { icon: Clock, value: "6", label: "Дни в седмицата" },
];

export function StatsSection() {
  return (
    <SectionWrapper className="py-12">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
