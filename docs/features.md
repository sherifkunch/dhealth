# Features

## Feature Matrix

| # | Feature | Page | Priority | Milestone |
|---|---------|------|----------|-----------|
| F01 | Responsive header with mobile nav | Global | P0 | M1 |
| F02 | Footer with contact, nav, social | Global | P0 | M1 |
| F03 | Hero section with CTAs | Home | P0 | M2 |
| F04 | Featured procedures grid | Home | P0 | M2 |
| F05 | Statistics section | Home | P1 | M2 |
| F06 | Testimonials preview | Home | P1 | M2 |
| F07 | CTA banner | Home | P0 | M2 |
| F08 | Procedures listing grid | Procedures | P0 | M3 |
| F09 | Procedure detail pages (x12) | Procedure Detail | P0 | M3 |
| F10 | Pricing table with categories | Prices | P0 | M4 |
| F11 | Contact form | Contact | P0 | M5 |
| F12 | Google Maps embed | Contact | P1 | M5 |
| F13 | WhatsApp/Viber direct buttons | Contact, Booking | P0 | M5 |
| F14 | Working hours display | Contact, Footer | P1 | M5 |
| F15 | Reviews grid | Reviews | P1 | M6 |
| F16 | Review submission form | Reviews | P2 | M6 |
| F17 | Booking request form | Booking | P0 | M7 |
| F18 | Procedure pre-selection from URL | Booking | P1 | M7 |
| F19 | About page content | About | P1 | M8 |
| F20 | Products page with categories | Products | P2 | M8 |
| F21 | JSON-LD structured data | Global | P0 | M9 |
| F22 | Sitemap generation | Global | P0 | M9 |
| F23 | Per-page SEO metadata | Global | P0 | M9 |
| F24 | Email notifications via Resend | API | P0 | M7 |
| F25 | Custom 404 page | Global | P1 | M1 |
| F26 | Floating WhatsApp button | Global | P2 | M5 |
| F27 | Skip-to-content link | Global | P1 | M1 |

## Priority Levels

- **P0** — Must have. Core functionality. Ship-blocking.
- **P1** — Should have. Important but site works without it.
- **P2** — Nice to have. Can be deferred to a future phase.

## Feature Details

### F01: Responsive Header
- Sticky on scroll with backdrop blur
- Desktop: logo, 7 nav links, phone number, "Запазете час" CTA button
- Mobile: logo, hamburger icon, slide-out Sheet with all links + contact info
- Active link highlighting based on current route

### F09: Procedure Detail Pages
- 12 pages auto-generated from `src/data/procedures.ts` via `generateStaticParams()`
- Each has: hero image, full description, benefits list, duration, booking CTA, related procedures
- Dynamic metadata via `generateMetadata()`

### F17: Booking Request Form
- Fields: name*, phone*, email, procedure dropdown, preferred date, time slot (morning/afternoon/evening), message
- Pre-selects procedure from `?procedure=slug` query param
- Client-side validation with Zod
- Submits to `POST /api/contact` with `type: "booking"`
- Shows success/error toast after submission

### F24: Email Notifications
- Single API route handles contact, booking, and review submissions
- Discriminated by `type` field in request body
- Sends formatted HTML email to clinic Gmail via Resend
- Validates all input server-side with Zod before sending
