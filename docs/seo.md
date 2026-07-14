# SEO

## Strategy

Target local search in Sofia for physiotherapy and kinesitherapy services. Every page is an entry point from Google.

## Per-Page Metadata

| Page | Title | Description |
|------|-------|-------------|
| Home | DHealth — Кинезитерапия & Физиотерапия в София | Персонализирани програми за възстановяване, рехабилитация и подобряване на качеството на живот. Диана Димова — Кинезитерапевт в София. |
| Procedures | Процедури \| DHealth | Всички процедури за кинезитерапия и физиотерапия в DHealth София. |
| Procedure Detail | [Name] \| DHealth | [Short description of procedure] |
| Products | Продукти \| DHealth | Продукти за физиотерапия и възстановяване от DHealth София. |
| Prices | Цени \| DHealth | Цени на процедури и услуги в DHealth София. |
| About | За нас \| DHealth | Научете повече за Диана Димова и DHealth — кинезитерапия и физиотерапия в София. |
| Contact | Контакти \| DHealth | Свържете се с DHealth — кинезитерапия и физиотерапия в София. |
| Reviews | Отзиви \| DHealth | Отзиви и мнения на клиенти за DHealth София. |
| Booking | Запазете час \| DHealth | Запазете час за кинезитерапия или физиотерапия в DHealth София. |

## Structured Data (JSON-LD)

### Root Layout — MedicalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "DHealth",
  "description": "...",
  "url": "https://dhealth.bg",
  "telephone": "+359897077098",
  "email": "dhealth.bg@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Бул. Климент Охридски 33",
    "addressLocality": "София",
    "addressCountry": "BG"
  },
  "openingHours": "Mo-Sa 08:00-20:00",
  "priceRange": "40-140 BGN"
}
```

### Procedure Detail — MedicalProcedure

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "[Procedure Name]",
  "description": "[Short Description]",
  "url": "https://dhealth.bg/protseduri/[slug]",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "DHealth"
  }
}
```

### Reviews Page — AggregateRating

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "DHealth",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "8"
  },
  "review": [...]
}
```

## Technical SEO

| Item | Implementation |
|------|---------------|
| `<html lang="bg">` | Root layout |
| Sitemap | `src/app/sitemap.ts` (auto-generated) |
| robots.txt | `public/robots.txt` |
| Canonical URLs | Via Next.js `metadataBase` |
| Open Graph | Per-page via `metadata.openGraph` |
| Semantic HTML | `<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>` |
| Heading hierarchy | One `h1` per page, no skipped levels |
| Image alt text | All images have descriptive Bulgarian alt text |
| Image optimization | Next.js `<Image>` component (WebP/AVIF, lazy loading, responsive) |
| Static generation | All pages pre-rendered at build time |

## Sitemap

Generated dynamically via `src/app/sitemap.ts`:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const procedures = getAllProcedureSlugs();
  
  return [
    { url: "https://dhealth.bg", lastModified: new Date(), priority: 1.0 },
    { url: "https://dhealth.bg/protseduri", priority: 0.9 },
    ...procedures.map(slug => ({
      url: `https://dhealth.bg/protseduri/${slug}`,
      priority: 0.8,
    })),
    { url: "https://dhealth.bg/tseni", priority: 0.8 },
    { url: "https://dhealth.bg/kontakti", priority: 0.7 },
    { url: "https://dhealth.bg/otzivi", priority: 0.6 },
    { url: "https://dhealth.bg/zapitvane", priority: 0.7 },
    { url: "https://dhealth.bg/za-nas", priority: 0.5 },
    { url: "https://dhealth.bg/produkti", priority: 0.4 },
  ];
}
```
