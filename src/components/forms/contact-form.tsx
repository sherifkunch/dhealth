"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { procedures } from "@/data/procedures";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...data }),
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
        <p className="text-lg font-semibold">Благодарим ви!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Ще се свържем с вас в рамките на 24 часа.
        </p>
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Изпратете ново съобщение
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name">Име *</Label>
        <Input id="name" {...register("name")} className="mt-1.5" />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Имейл *</Label>
        <Input id="email" type="email" {...register("email")} className="mt-1.5" />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Телефон *</Label>
        <Input id="phone" type="tel" {...register("phone")} className="mt-1.5" />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="procedure">Процедура (по избор)</Label>
        <select
          id="procedure"
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
      </div>

      <div>
        <Label htmlFor="message">Съобщение *</Label>
        <Textarea id="message" rows={4} {...register("message")} className="mt-1.5" />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Възникна грешка. Моля, опитайте отново или се свържете по телефона.
        </p>
      )}

      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Изпращане..." : "Изпратете"}
      </Button>
    </form>
  );
}
