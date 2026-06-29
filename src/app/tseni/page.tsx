import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { PricingTable } from "@/components/pricing/pricing-table";
import { pricing } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Цени",
  description:
    "Цени на процедури и услуги в DHealth София. Физиотерапия, кинезитерапия, ЕМС тренировки и антицелулитни процедури.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Цени"
        description="Прозрачно ценообразуване за всички наши процедури и услуги."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <PricingTable categories={pricing} />

        <p className="mt-12 text-sm text-muted-foreground">
          * Цените са ориентировъчни. За повече информация, моля свържете се с нас.
        </p>

        <div className="mt-8 rounded-lg bg-primary/5 p-8 text-center">
          <h2 className="text-xl font-semibold">Готови да започнете?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Запазете час и се възползвайте от нашите професионални услуги.
          </p>
          <div className="mt-6">
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
