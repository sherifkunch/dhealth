import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ReviewCard } from "@/components/reviews/review-card";
import { getRecentReviews } from "@/data/reviews";

export function TestimonialsPreview() {
  const recentReviews = getRecentReviews(3);

  return (
    <SectionWrapper className="bg-muted/30">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-[2.5rem]">
          Какво казват нашите клиенти
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Истински отзиви от хора, на които помогнахме.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recentReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button render={<Link href="/otzivi" />} variant="outline" size="lg">
          Всички отзиви
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
