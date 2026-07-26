import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ProductCard } from "@/components/products/product-card";
import { PurchaseForm } from "@/components/forms/purchase-form";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Продукти",
  description:
    "Терапевтични продукти за физиотерапия и възстановяване от DHealth София.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Продукти"
        description="Терапевтични продукти за вашето здраве и възстановяване."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div id="poracha" className="mx-auto mt-20 max-w-xl scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight">Направете поръчка</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Попълнете формата и ще се свържем с вас за потвърждение и начин на плащане.
          </p>
          <div className="mt-6">
            <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-muted" />}>
              <PurchaseForm />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
