import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Отзиви",
  description: "Отзиви и мнения на клиенти за DHealth София.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Отзиви"
        description="Какво казват нашите клиенти за нас."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Съдържанието ще бъде добавено скоро.</p>
      </div>
    </>
  );
}
