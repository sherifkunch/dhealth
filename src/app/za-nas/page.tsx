import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Award, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "За нас",
  description:
    "Научете повече за Диана Димова и DHealth — кинезитерапия и физиотерапия в София. Персонализиран подход и професионална грижа.",
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

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="За нас"
        description="Запознайте се с нашия екип и нашата мисия."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-4xl font-bold text-primary">ДД</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {siteConfig.owner.name}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {siteConfig.owner.name}
            </h2>
            <p className="mt-1 text-lg text-primary">{siteConfig.owner.title}</p>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Диана Димова е лицензиран кинезитерапевт с дългогодишен опит в
                областта на физиотерапията и рехабилитацията. Нейният подход се
                основава на задълбочено разбиране на всеки пациент и създаване на
                персонализирани програми за възстановяване.
              </p>
              <p>
                В DHealth вярваме, че всеки човек заслужава индивидуално внимание
                и професионална грижа. Работим с модерно оборудване и доказани
                методики, за да постигнем най-добрите резултати за нашите
                пациенти.
              </p>
              <p>
                Студиото предлага 12+ специализирани процедури — от класическа
                кинезитерапия и физиотерапия до иновативни методи като ЕМС
                тренировки, текар терапия и дълбока осцилация.
              </p>
            </div>

            <div className="mt-8">
              <Button render={<Link href="/zapitvane" />} size="lg">
                Запазете час
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Нашите ценности
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
