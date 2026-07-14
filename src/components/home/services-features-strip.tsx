import { BadgeCheck, UserCog, Users, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Доказани методи",
    description: "Работим със сертифицирана апаратура и методи, базирани на доказателства.",
  },
  {
    icon: UserCog,
    title: "Индивидуален подход",
    description: "Всяка терапия е съобразена конкретно с пациента.",
  },
  {
    icon: Users,
    title: "Професионален екип",
    description: "Опитни специалисти с личностно отношение.",
  },
  {
    icon: CalendarCheck,
    title: "Лесно записване",
    description: "Гъвкав график и бързо записване на час.",
  },
];

export function ServicesFeaturesStrip() {
  return (
    <div className="mt-20 rounded-3xl bg-primary/5 px-8 py-10 md:min-h-[140px] md:py-0">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:h-[140px] md:grid-cols-4 md:gap-6">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-4 md:justify-center md:text-left">
            <Icon
              className="h-9 w-9 shrink-0 text-primary"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-foreground">{title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
