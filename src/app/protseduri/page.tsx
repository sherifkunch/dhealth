import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ProcedureCard } from "@/components/procedures/procedure-card";
import { procedures } from "@/data/procedures";

export const metadata: Metadata = {
  title: "Процедури",
  description:
    "Всички процедури за кинезитерапия и физиотерапия в DHealth София. 12+ специализирани терапии.",
};

export default function ProceduresPage() {
  return (
    <>
      <PageHeader
        title="Нашите процедури"
        description="Специализирани процедури за възстановяване, рехабилитация и подобряване на качеството на живот."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((procedure) => (
            <ProcedureCard key={procedure.id} procedure={procedure} />
          ))}
        </div>
      </div>
    </>
  );
}
