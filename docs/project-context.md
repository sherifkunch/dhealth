# Project Context — DHealth

## What This Project Is

A complete rebuild of [dhealth.bg](https://dhealth.bg) — the website for a physiotherapy and kinesitherapy clinic in Sofia, Bulgaria. Not a redesign of the old site — a new, modern, production-grade application built from scratch.

## Business Context

**Owner:** Diana Dimova — licensed kinesitherapist, sole practitioner.

### Location & Contact

| | |
|---|---|
| Address | Бул. Климент Охридски 23, София |
| Phone | +359 897 077 098 |
| Email | dhealth.bg@gmail.com |
| Hours | Monday–Saturday, 08:00–20:00 |
| Social | Instagram & Facebook @dhealth.bg |

### Services (12 Procedures)

| # | Bulgarian | English |
|---|----------|---------|
| 1 | Физиотерапия | Physiotherapy |
| 2 | Кинезитерапия | Kinesitherapy |
| 3 | Електромускулна стимулация | EMS Stimulation |
| 4 | Дълбока осцилация | Deep Oscillation |
| 5 | Текар терапия | Tecar Therapy |
| 6 | Антицелулитни процедури | Anti-Cellulite |
| 7 | Лимфен дренаж | Lymphatic Drainage |
| 8 | Мадеротерапия | Wood Therapy |
| 9 | Миопунктура | Myopuncture |
| 10 | ЕМС тренировка | EMS Training |
| 11 | Пресотерапия | Presotherapy |
| 12 | Остеопатичен масаж за лице | Osteopathic Facial Massage |

### Pricing Range

- Individual sessions: 40–140 BGN
- Packages: 8/10/12 sessions with volume discounts
- Full pricing table in `src/data/pricing.ts`

### Target Audience

1. Post-injury rehabilitation patients
2. Athletes seeking performance recovery
3. Aesthetic treatment clients (anti-cellulite, facial)
4. General wellness and fitness seekers

## Technical Decisions

| Decision | Choice | Reason | ADR |
|----------|--------|--------|-----|
| Framework | Next.js 16 (App Router) | SSG, SEO, image optimization | — |
| Language | TypeScript (strict) | Type safety | — |
| Styling | Tailwind CSS v4 + shadcn/ui v4 | Utility-first, accessible components | ADR-05 |
| UI locale | Bulgarian only | Local audience | — |
| Content storage | Static TypeScript files | Type-safe, version-controlled, no CMS | ADR-01 |
| Database | None | Content changes infrequently | ADR-01 |
| Rendering | Static Generation (SSG) | Best performance, cheapest hosting | ADR-02 |
| Email | Resend | Free tier, simple API | ADR-03 |
| Booking | Form + WhatsApp/Viber | No scheduling backend needed | — |
| Containerization | Docker + Docker Compose | Consistent environments | ADR-04 |
| Deployment | Vercel | Native Next.js hosting, CDN, free tier | — |
| Routes | ASCII transliteration | Next.js requires ASCII directory names | ADR-06 |
| State management | None (useState only) | No client-side complexity | ADR-07 |

## Design Direction

- **Modern, clean, professional** — not a copy of the old site
- **Teal/cyan primary color** — calming, medical, trustworthy
- **Mobile-first responsive** — majority of visitors on mobile
- **Trust signals** — testimonials, credentials, transparent pricing
- **Clear CTAs** — every page has a path to booking

## Project Documentation

All detailed specs live in `docs/`. See `CLAUDE.md` for the full index.

## Current Status

See `docs/roadmap.md` for milestone progress.
