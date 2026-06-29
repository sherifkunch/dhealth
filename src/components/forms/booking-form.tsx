"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { bookingFormSchema, type BookingFormData } from "@/lib/schemas";
import { procedures } from "@/data/procedures";

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("procedure") ?? "";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: { procedure: preselected },
  });

  async function onSubmit(data: BookingFormData) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "booking", ...data }),
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

  if (status === "success") {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="text-lg font-semibold">Заявката е изпратена!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Ще се свържем с вас в рамките на 24 часа за потвърждение.
        </p>
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Нова заявка
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="booking-name">Име *</Label>
        <Input id="booking-name" {...register("name")} className="mt-1.5" />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-phone">Телефон *</Label>
        <Input id="booking-phone" type="tel" {...register("phone")} className="mt-1.5" />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-email">Имейл (по избор)</Label>
        <Input id="booking-email" type="email" {...register("email")} className="mt-1.5" />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-procedure">Процедура *</Label>
        <select
          id="booking-procedure"
          {...register("procedure")}
          className="mt-1.5 flex h-9 w-full rounded-lg border bg-background px-3 py-1 text-sm transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">Изберете процедура</option>
          {procedures.map((p) => (
            <option key={p.id} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
        {errors.procedure && (
          <p className="mt-1 text-sm text-destructive">{errors.procedure.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="booking-date">Предпочитана дата (по избор)</Label>
        <Input id="booking-date" type="date" {...register("preferredDate")} className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="booking-time">Предпочитано време (по избор)</Label>
        <select
          id="booking-time"
          {...register("preferredTime")}
          className="mt-1.5 flex h-9 w-full rounded-lg border bg-background px-3 py-1 text-sm transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">Без предпочитание</option>
          <option value="morning">Сутрин (08:00 — 12:00)</option>
          <option value="afternoon">Следобед (12:00 — 16:00)</option>
          <option value="evening">Вечер (16:00 — 20:00)</option>
        </select>
      </div>

      <div>
        <Label htmlFor="booking-message">Съобщение (по избор)</Label>
        <Textarea id="booking-message" rows={3} {...register("message")} className="mt-1.5" />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Възникна грешка. Моля, опитайте отново или се свържете по телефона.
        </p>
      )}

      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Изпращане..." : "Изпратете заявка"}
      </Button>
    </form>
  );
}
