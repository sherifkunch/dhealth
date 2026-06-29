import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Цени",
  description: "Цени на процедури и услуги в DHealth София.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Цени"
        description="Прозрачно ценообразуване за всички наши процедури и услуги."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Съдържанието ще бъде добавено скоро.</p>
      </div>
    </>
  );
}
