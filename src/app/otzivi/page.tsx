import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ReviewCard } from "@/components/reviews/review-card";
import { ReviewForm } from "@/components/reviews/review-form";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Отзиви",
  description:
    "Отзиви и мнения на клиенти за DHealth София. Прочетете какво казват нашите пациенти.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Отзиви"
        description="Какво казват нашите клиенти за нас."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-lg">
          <h2 className="text-xl font-semibold">Оставете отзив</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Споделете вашето мнение за нашите услуги.
          </p>
          <div className="mt-6">
            <ReviewForm />
          </div>
        </div>
      </div>
    </>
  );
}
