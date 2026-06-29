import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "За нас",
  description: "Научете повече за Диана Димова и DHealth — кинезитерапия и физиотерапия в София.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="За нас"
        description="Запознайте се с нашия екип и нашата мисия."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Съдържанието ще бъде добавено скоро.</p>
      </div>
    </>
  );
}
