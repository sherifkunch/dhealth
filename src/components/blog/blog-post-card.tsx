import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogPostCardProps {
  post: BlogPost;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border bg-background transition-shadow hover:shadow-md">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} мин
          </span>
        </div>

        <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h2>

        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center text-sm font-medium text-primary">
          <span className="transition-transform group-hover:translate-x-0.5">
            Прочетете повече →
          </span>
        </div>
      </div>
    </article>
  );
}
