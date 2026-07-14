import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { Button } from "@/components/ui/button";
import { getAllPostSlugs, getPostBySlug } from "@/data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Диана Димова",
    },
    publisher: {
      "@type": "MedicalBusiness",
      name: "DHealth",
      url: "https://dhealth.bg",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "Блог", href: "/blog" },
          { label: post.title },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Tag className="h-4 w-4" />
            {post.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readingTime} мин четене
          </span>
        </div>

        {post.image && (
          <div className="relative mb-10 h-64 w-full overflow-hidden rounded-xl sm:h-80">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <BlogPostContent sections={post.content} />

        <div className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="outline" render={<Link href="/blog" />}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Всички статии
          </Button>
          <Button render={<Link href="/zapitvane" />}>
            Запазете час
          </Button>
        </div>
      </div>
    </>
  );
}
