import { Star } from "lucide-react";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col rounded-lg border bg-card p-6">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < review.rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="mt-4 border-t pt-4">
        <p className="text-sm font-medium">{review.name}</p>
        {review.date && (
          <p className="text-xs text-muted-foreground">
            {new Date(review.date).toLocaleDateString("bg-BG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>
    </div>
  );
}
