import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Статии за здраве, рехабилитация и кинезитерапия от специалистите на DHealth Sofia.",
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHeader
        title="Блог"
        description="Статии за здраве, рехабилитация и физиотерапия."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        {sorted.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Все още няма публикации.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
