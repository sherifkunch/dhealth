# Database

## Current State: No Database

This project intentionally does not use a database. All content is stored in static TypeScript files under `src/data/`.

## Data Files

| File | Content | Record Count |
|------|---------|-------------|
| `src/data/site-config.ts` | Business constants (contact, hours, social, owner) | 1 config object |
| `src/data/procedures.ts` | All therapy procedures | 12 records |
| `src/data/pricing.ts` | Pricing categories and items | ~20 items across 4 categories |
| `src/data/reviews.ts` | Client testimonials | 8 records |
| `src/data/products.ts` | Therapy products | 0 (placeholder) |
| `src/data/navigation.ts` | Navigation links | 7 links |

## Why No Database

1. **Content changes infrequently** — Procedures, pricing, and reviews change at most monthly
2. **Type safety** — TypeScript interfaces catch data errors at build time
3. **Zero infrastructure** — No database to provision, maintain, back up, or pay for
4. **Performance** — Data is inlined at build time, no runtime queries
5. **Simplicity** — Adding a record means editing a `.ts` file and rebuilding

## How Content is Updated

1. Edit the relevant file in `src/data/`
2. Commit and push
3. Vercel auto-deploys with new content

## When to Consider a Database

A database would be warranted if:
- Client reviews need to appear immediately without a rebuild
- Products are managed by a non-developer (CMS needed)
- Booking requires real-time availability checking
- Analytics or form submissions need to be stored persistently

**Decision:** Do not add a database without explicit approval. See `docs/decisions.md` ADR-01.
