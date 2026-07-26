"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { purchaseFormSchema, type PurchaseFormData } from "@/lib/schemas";
import { products } from "@/data/products";

const fieldIds: Record<keyof PurchaseFormData, string> = {
  productId: "purchase-product",
  productName: "purchase-product",
  priceEUR: "purchase-product",
  quantity: "purchase-quantity",
  name: "purchase-name",
  phone: "purchase-phone",
  email: "purchase-email",
  message: "purchase-message",
};

export function PurchaseForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("product") ?? "";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PurchaseFormData>({
    resolver: zodResolver(purchaseFormSchema),
    defaultValues: { productId: preselected, quantity: 1 },
  });
  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedProductId = watch("productId");
  const selectedProduct = products.find((p) => p.id === selectedProductId);
  function handleProductChange(productId: string) {
    const product = products.find((p) => p.id === productId);
    setValue("productId", productId);
    setValue("productName", product?.name ?? "");
    setValue("priceEUR", product?.priceEUR ?? 0);
  }
  useEffect(() => {
    if (preselected) handleProductChange(preselected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselected]);
  async function onSubmit(data: PurchaseFormData) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "purchase", ...data }),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
  function onInvalid(fieldErrors: typeof errors) {
    const firstField = Object.keys(fieldErrors)[0] as keyof PurchaseFormData | undefined;
    if (!firstField) return;
    const el = document.getElementById(fieldIds[firstField]);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    el?.focus();
  }
  if (status === "success") {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="text-lg font-semibold">Поръчката е изпратена!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Ще се свържем с вас в рамките на 24 часа за потвърждение и начин на плащане.
        </p>
        <Button className="mt-4" variant="outline" onClick={() => setStatus("idle")}>
          Нова поръчка
        </Button>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5">
      <div>
        <Label htmlFor="purchase-product">Продукт *</Label>
        <select
          id="purchase-product"
          value={selectedProductId}
          onChange={(e) => handleProductChange(e.target.value)}
          className="mt-1.5 flex h-9 w-full rounded-lg border bg-background px-3 py-1 text-sm transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">Изберете продукт</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — €{p.priceEUR}
            </option>
          ))}
        </select>
        {errors.productId && (
          <p className="mt-1 text-sm text-destructive">{errors.productId.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="purchase-quantity">Брой *</Label>
        <Input
          id="purchase-quantity"
          type="number"
          min={1}
          max={20}
          {...register("quantity", { valueAsNumber: true })}
          className="mt-1.5"
        />
        {errors.quantity && (
          <p className="mt-1 text-sm text-destructive">{errors.quantity.message}</p>
        )}
      </div>
      {selectedProduct && (
        <p className="text-sm text-muted-foreground">
          Обща сума: <span className="font-semibold text-foreground">
            €{(selectedProduct.priceEUR * (watch("quantity") || 1)).toFixed(2)}
          </span>
        </p>
      )}
      <div>
        <Label htmlFor="purchase-name">Име *</Label>
        <Input id="purchase-name" {...register("name")} className="mt-1.5" />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="purchase-phone">Телефон *</Label>
        <Input id="purchase-phone" type="tel" {...register("phone")} className="mt-1.5" />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="purchase-email">Имейл (по избор)</Label>
        <Input id="purchase-email" type="email" {...register("email")} className="mt-1.5" />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="purchase-message">Съобщение (по избор)</Label>
        <Textarea id="purchase-message" rows={3} {...register("message")} className="mt-1.5" />
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive">
          Възникна грешка. Моля, опитайте отново или се свържете по телефона.
        </p>
      )}
      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Изпращане..." : "Изпратете поръчка"}
      </Button>
    </form>
  );
}
