import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ReviewCard } from "@/components/reviews/review-card";
import { ReviewForm } from "@/components/reviews/review-form";
import { reviews as staticReviews } from "@/data/reviews";
import { getApprovedReviews } from "@/lib/reviews-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Отзиви",
  description:
    "Отзиви и мнения на клиенти за DHealth София. Прочетете какво казват нашите пациенти.",
};

export default async function ReviewsPage() {
  const approvedReviews = await getApprovedReviews();
  const allReviews = [...staticReviews, ...approvedReviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "DHealth",
    url: "https://dhealth.bg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: allReviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: allReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Отзиви"
        description="Какво казват нашите клиенти за нас."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allReviews.map((review) => (
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
