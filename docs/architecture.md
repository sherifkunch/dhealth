# Architecture

## Tech Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | Next.js 16 (App Router) | SSG, file-based routing, image optimization, SEO |
| Language | TypeScript (strict) | Type safety, IDE support, catch errors at build time |
| Styling | Tailwind CSS v4 | Utility-first, no CSS files to manage, small bundle |
| UI Components | shadcn/ui v4 | Accessible, customizable, no runtime dependency |
| Icons | lucide-react + custom SVGs | Tree-shakeable, consistent style |
| Forms | react-hook-form + Zod | Performant forms, schema-based validation |
| Email | Resend | Free tier, simple API, Vercel-compatible |
| Containerization | Docker + Docker Compose | Consistent environments, easy onboarding |
| Deployment | Vercel | Native Next.js support, CDN, automatic deploys |

## System Diagram

```
┌─────────────────────────────────────────────────┐
│                    Vercel CDN                    │
│              (Static + Edge Network)             │
└──────────────────────┬──────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────┐
│               Next.js Application                │
│                                                  │
│  ┌─────────────┐  ┌──────────┐  ┌────────────┐  │
│  │  Static     │  │  API     │  │  Static    │  │
│  │  Pages (SSG)│  │  Routes  │  │  Assets    │  │
│  │             │  │          │  │            │  │
│  │  /          │  │  POST    │  │  /images   │  │
│  │  /protseduri│  │  /api/   │  │  /fonts    │  │
│  │  /tseni     │  │  contact │  │  /favicon  │  │
│  │  /kontakti  │  │          │  │            │  │
│  │  ...        │  │          │  │            │  │
│  └─────────────┘  └────┬─────┘  └────────────┘  │
│                        │                         │
└────────────────────────┼─────────────────────────┘
                         │
                ┌────────▼────────┐
                │   Resend API    │
                │  (Email Relay)  │
                └────────┬────────┘
                         │
                ┌────────▼────────┐
                │  Clinic Email   │
                │  (Gmail)        │
                └─────────────────┘
```

## Directory Structure

```
dhealth/
├── docs/                    # Project documentation (this directory)
├── public/
│   ├── images/
│   │   ├── hero/            # Hero section images
│   │   ├── procedures/      # One image per procedure
│   │   ├── products/        # Product images
│   │   └── about/           # Practitioner photo(s)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout (header, footer, metadata, JSON-LD)
│   │   ├── page.tsx         # Home page
│   │   ├── not-found.tsx    # Custom 404
│   │   ├── globals.css      # Tailwind + theme variables
│   │   ├── protseduri/
│   │   │   ├── page.tsx     # Procedures listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Procedure detail (dynamic)
│   │   ├── produkti/        # Products page
│   │   ├── tseni/           # Prices page
│   │   ├── za-nas/          # About page
│   │   ├── kontakti/        # Contact page
│   │   ├── otzivi/          # Reviews page
│   │   ├── zapitvane/       # Booking request page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts # Form submission handler
│   ├── components/
│   │   ├── ui/              # shadcn/ui primitives (auto-generated)
│   │   ├── layout/          # Header, Footer, SectionWrapper
│   │   ├── home/            # Hero, ServicesPreview, Stats, CTA, Testimonials
│   │   ├── procedures/      # ProcedureCard, ProcedureDetail
│   │   ├── pricing/         # PricingTable
│   │   ├── reviews/         # ReviewCard, ReviewForm
│   │   ├── forms/           # ContactForm, BookingForm
│   │   └── shared/          # PageHeader, WhatsAppButton, SocialLinks, etc.
│   ├── data/                # Static content (typed TypeScript)
│   │   ├── site-config.ts   # Business constants
│   │   ├── procedures.ts    # 12 procedures
│   │   ├── pricing.ts       # Pricing categories
│   │   ├── reviews.ts       # Testimonials
│   │   ├── products.ts      # Products (placeholder)
│   │   └── navigation.ts    # Nav links
│   ├── lib/
│   │   ├── utils.ts         # cn() utility
│   │   └── schemas.ts       # Zod validation schemas
│   └── types/
│       └── index.ts         # TypeScript interfaces
├── Dockerfile               # Multi-stage production build
├── Dockerfile.dev           # Development with hot reload
├── docker-compose.yml       # dev + app services
├── .dockerignore
├── .env.example
├── .env.local
└── next.config.ts           # output: "standalone"
```

## Key Architectural Decisions

1. **Static Generation (SSG)** — All pages are pre-rendered at build time. No server-side rendering needed since content changes infrequently. This gives the best performance and cheapest hosting.

2. **Static Data Files** — Content lives in `src/data/*.ts` as typed TypeScript exports. No CMS, no database. Changes require a code commit and rebuild. This is intentional — content changes are infrequent and this approach is the simplest, most maintainable, and most type-safe.

3. **Single API Route** — The only server-side logic is `POST /api/contact` for form submissions. It validates with Zod, sends email via Resend, and returns a JSON response. Contact, booking, and review forms all use this route with a `type` discriminator.

4. **Component Organization by Domain** — Components are organized by the page/feature they belong to, not by type (e.g., `components/home/hero.tsx` not `components/heroes/home-hero.tsx`). Shared components go in `components/shared/`.

5. **No Client-Side State Management** — No Redux, no Zustand, no Context. Each page is a server component that imports static data. Only form components and the mobile nav use client-side state via `useState`.
