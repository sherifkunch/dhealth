import Link from "next/link";
import Image from "next/image";
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
    <article className="group relative flex flex-col rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8">
      {post.image && (
        <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
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

        <h2 className="mt-3 text-base font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h2>

        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
          <span>Прочетете повече</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </article>
  );
}
