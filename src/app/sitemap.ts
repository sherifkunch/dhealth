import type { MetadataRoute } from "next";
import { getAllProcedureSlugs } from "@/data/procedures";
import { getAllPostSlugs } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dhealth.bg";
  const procedureSlugs = getAllProcedureSlugs();
  const postSlugs = getAllPostSlugs();

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/protseduri`, lastModified: new Date(), priority: 0.9, changeFrequency: "weekly" },
    ...procedureSlugs.map((slug) => ({
      url: `${baseUrl}/protseduri/${slug}`,
      lastModified: new Date(),
      priority: 0.8 as const,
      changeFrequency: "monthly" as const,
    })),
    { url: `${baseUrl}/tseni`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.7, changeFrequency: "weekly" },
    ...postSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      priority: 0.6 as const,
      changeFrequency: "monthly" as const,
    })),
    { url: `${baseUrl}/kontakti`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/zapitvane`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/otzivi`, lastModified: new Date(), priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/za-nas`, lastModified: new Date(), priority: 0.5, changeFrequency: "monthly" },
    { url: `${baseUrl}/produkti`, lastModified: new Date(), priority: 0.4, changeFrequency: "monthly" },
  ];
}
