import { ChevronRight, UserCheck, ShieldCheck, HeartHandshake } from "lucide-react";
import { homeBenefits } from "@/data/home-benefits";
import type { HomeBenefit } from "@/types";

const icons: Record<HomeBenefit["icon"], typeof UserCheck> = {
  individual: UserCheck,
  proven: ShieldCheck,
  trust: HeartHandshake,
};

export function MobileBenefits() {
  return (
    <section className="bg-white px-5 pb-[110px] pt-7 sm:hidden">
      <div className="divide-y divide-border">
        {homeBenefits.map((benefit) => {
          const Icon = icons[benefit.icon];
          return (
            <div key={benefit.id} className="flex items-center gap-4 py-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-foreground">{benefit.title}</p>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground" aria-hidden />
            </div>
          );
        })}
      </div>
    </section>
  );
}
