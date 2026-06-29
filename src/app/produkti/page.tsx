import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Продукти",
  description: "Продукти за физиотерапия и възстановяване от DHealth София.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Продукти"
        description="Терапевтични продукти за вашето здраве и възстановяване."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">Продуктите ще бъдат добавени скоро.</p>
      </div>
    </>
  );
}
