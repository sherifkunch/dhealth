import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Процедури",
  description: "Всички процедури за кинезитерапия и физиотерапия в DHealth София.",
};

export default function ProceduresPage() {
  return (
    <>
      <PageHeader
        title="Нашите процедури"
        description="Специализирани процедури за възстановяване, рехабилитация и подобряване на качеството на живот."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Съдържанието ще бъде добавено скоро.</p>
      </div>
    </>
  );
}
