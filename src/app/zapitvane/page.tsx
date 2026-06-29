import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Запазете час",
  description: "Запазете час за кинезитерапия или физиотерапия в DHealth София.",
};

export default function BookingPage() {
  return (
    <>
      <PageHeader
        title="Запазете час"
        description="Попълнете формата или се свържете директно с нас."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Съдържанието ще бъде добавено скоро.</p>
      </div>
    </>
  );
}
