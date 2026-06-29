"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { reviewFormSchema, type ReviewFormData } from "@/lib/schemas";

export function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [hoverRating, setHoverRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: { rating: 0 },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const currentRating = watch("rating");

  async function onSubmit(data: ReviewFormData) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "review", ...data }),
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
        <p className="text-lg font-semibold">Благодарим за отзива!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Вашият отзив ще бъде прегледан и публикуван скоро.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label>Оценка *</Label>
        <div className="mt-1.5 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const starValue = i + 1;
            return (
              <button
                key={i}
                type="button"
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setValue("rating", starValue, { shouldValidate: true })}
                className="p-0.5"
                aria-label={`${starValue} звезди`}
              >
                <Star
                  className={`h-6 w-6 transition-colors ${
                    starValue <= (hoverRating || currentRating)
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              </button>
            );
          })}
        </div>
        {errors.rating && (
          <p className="mt-1 text-sm text-destructive">{errors.rating.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="review-name">Име *</Label>
        <Input id="review-name" {...register("name")} className="mt-1.5" />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="review-text">Вашият отзив *</Label>
        <Textarea id="review-text" rows={4} {...register("text")} className="mt-1.5" />
        {errors.text && (
          <p className="mt-1 text-sm text-destructive">{errors.text.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Възникна грешка. Моля, опитайте отново.
        </p>
      )}

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Изпращане..." : "Изпратете отзив"}
      </Button>
    </form>
  );
}
