import Link from "next/link";
import type { Metadata } from "next";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Продукти",
  description:
    "Продукти за физиотерапия и възстановяване от DHealth София.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Продукти"
        description="Терапевтични продукти за вашето здраве и възстановяване."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-semibold">
              Продуктите ще бъдат добавени скоро
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Работим по подбора на терапевтични продукти за вашето здраве.
              Свържете се с нас за повече информация.
            </p>
            <Button render={<Link href="/kontakti" />} variant="outline" className="mt-6">
              Свържете се с нас
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="rounded-lg border p-6">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
                {product.price && (
                  <p className="mt-3 font-medium">{product.price} лв</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
