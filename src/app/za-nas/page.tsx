import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Award, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { TeamMember } from "@/components/about/team-member";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "За нас",
  description:
    "Запознайте се с екипа на DHealth — Диана Димова, Гергана Иванова и Божана Петкова. Кинезитерапия и физиотерапия в София.",
};

const values = [
  {
    icon: Heart,
    title: "Персонализиран подход",
    description:
      "Всяка програма е индивидуално създадена, съобразена с вашите нужди, цели и физическо състояние.",
  },
  {
    icon: Award,
    title: "Професионализъм",
    description:
      "Квалифицирана кинезитерапия, базирана на доказани методи и съвременно оборудване.",
  },
  {
    icon: Target,
    title: "Резултати",
    description:
      "Фокус върху измерими подобрения — от намаляване на болката до пълно функционално възстановяване.",
  },
];

function TeamDivider() {
  return (
    <div className="my-20 flex items-center gap-6 sm:my-28">
      <div className="h-px flex-1 bg-border" />
      <div className="flex items-center gap-2">
        <span className="block h-1.5 w-1.5 rounded-full bg-primary/30" />
        <span className="block h-3 w-3 rounded-full bg-primary" />
        <span className="block h-1.5 w-1.5 rounded-full bg-primary/30" />
      </div>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="За нас" description="Запознайте се с нашия екип и нашата мисия." />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        {team.map((member, i) => (
          <div key={member.name}>
            {i > 0 && <TeamDivider />}
            <TeamMember {...member} reversed={i % 2 === 1} />
          </div>
        ))}

        <div className="mt-20 sm:mt-28">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Нашите ценности
          </h2>
          <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-primary/5 px-8 py-12 text-center sm:mt-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Готови да започнете?</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Запазете консултация с нашия екип и направете първата стъпка към по-здравословен живот.
          </p>
          <div className="mt-8">
            <Button render={<Link href="/zapitvane" />} size="lg">
              Запазете час
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
