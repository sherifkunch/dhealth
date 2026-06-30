# Roadmap

## Phase 1: Foundation & Content

### Milestone 1: Project Setup & Layout ✅
- [x] Documentation files (README.md, CLAUDE.md, CONTRIBUTING.md, docs/*)
- [x] Specification docs (docs/ directory)
- [x] Next.js project initialization
- [x] Tailwind CSS + shadcn/ui setup
- [x] Docker configuration (dev + production)
- [x] Root layout with `<html lang="bg">`, Inter font, JSON-LD
- [x] Responsive header with mobile Sheet nav
- [x] Footer with contact info, navigation, social links
- [x] SectionWrapper and PageHeader shared components
- [x] Custom 404 page
- [x] Skip-to-content link
- [x] Site config and navigation data files
- [x] TypeScript interfaces for all entities

### Milestone 2: Home Page ✅
- [x] Set up Vitest + React Testing Library
- [x] Procedures data file with all 12 procedures
- [x] Tests for procedures data integrity
- [x] Reviews data file with all testimonials
- [x] Tests for reviews data integrity
- [x] Hero section component
- [x] Stats section component
- [x] ProcedureCard component + tests
- [x] Featured procedures grid (ServicesPreview)
- [x] ReviewCard component + tests
- [x] Testimonials preview component
- [x] CTA section component
- [x] Contact preview section
- [x] Assemble complete home page
- [ ] Home page E2E test (deferred to M9 with other E2E tests)

### Milestone 3: Procedures ✅
- [x] Procedures listing page with full grid
- [x] Dynamic procedure detail page with `generateStaticParams`
- [x] `generateMetadata` for procedure SEO
- [x] ProcedureDetail component (description, benefits, duration) + tests
- [x] Related procedures section
- [x] Procedure-specific booking CTA
- [ ] Procedures E2E test (deferred to M9)

### Milestone 4: Prices ✅
- [x] Pricing data file with all categories and items
- [x] Tests for pricing data integrity
- [x] PricingTable component + tests
- [x] Prices page with categorized table
- [x] Package deal highlighting
- [x] Booking CTA

### Milestone 5: Contact ✅
- [x] Contact form component (react-hook-form + Zod) + tests
- [x] Google Maps embed component
- [x] WorkingHours component + tests
- [x] WhatsApp/Viber direct buttons
- [x] Floating WhatsApp button (global)
- [x] Contact page assembly
- [ ] Contact form validation E2E test (deferred to M9)

### Milestone 6: Reviews ✅
- [x] Reviews page with full grid
- [x] Review submission form with interactive star rating
- [x] Star rating integrated into ReviewForm

### Milestone 7: Booking & Email ✅
- [x] Zod validation schemas (all form types) + tests
- [x] Booking form with procedure pre-selection
- [x] API route: POST /api/contact with Zod validation
- [ ] Resend email integration (requires API key, deferred to M11)
- [x] Form submission feedback (success/error states)
- [x] Booking page assembly
- [ ] Booking flow E2E test (deferred to M9)

### Milestone 8: About & Products ✅
- [x] About page content and layout
- [x] Products page structure with empty state
- [ ] Product card component (deferred — no products yet)
- [ ] Category filtering (deferred — no products yet)

### Milestone 9: SEO & Performance ✅
- [x] Sitemap generation (src/app/sitemap.ts)
- [x] JSON-LD for procedure detail pages (MedicalProcedure)
- [x] JSON-LD for reviews page (AggregateRating)
- [ ] Open Graph images (waiting for real images)
- [x] Security headers (X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy)
- [x] Resend email integration wired in API route
- [x] Playwright E2E tests — navigation (5 tests)
- [x] Playwright E2E tests — home page (7 tests)
- [x] Playwright E2E tests — procedures (6 tests)
- [x] Playwright E2E tests — SEO metadata + structured data (9 tests)
- [x] All quality gates pass: 54 unit tests, 27 E2E tests, build, lint, tsc

## Phase 2: Polish & Deployment

### Milestone 10: Blog ✅
- [x] BlogPost and BlogSection types in src/types/index.ts
- [x] Blog posts data file (src/data/posts.ts) with 3 sample articles
- [x] BlogPostCard component + tests
- [x] BlogPostContent renderer component
- [x] /blog listing page
- [x] /blog/[slug] detail page with generateStaticParams, generateMetadata, JSON-LD Article schema
- [x] Блог added to main navigation
- [x] Blog posts added to sitemap
- [x] All 71 unit tests pass, tsc and lint clean

### Milestone 11: Final Polish
- [ ] Real images for all procedures (waiting for upload)
- [ ] Practitioner photo for About page (waiting for upload)
- [ ] Product content population (waiting for content)
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Final content review with clinic owner
- [x] Full test suite passes (`npm test && npm run test:e2e`)

### Milestone 12: Deployment
- [x] Git repository setup (github.com/sherifkunch/dhealth)
- [ ] Vercel project creation
- [ ] Environment variable configuration (RESEND_API_KEY)
- [ ] Custom domain setup (dhealth.bg)
- [ ] DNS configuration
- [ ] Production verification
- [ ] Google Search Console submission

## Phase 3: Future Enhancements (Not in Scope)

- Blog / content marketing
- Online booking calendar integration
- Multi-language support (EN)
- Rate limiting on API routes
- Analytics integration (Plausible or Umami)
- Before/after photo gallery
- Video content
- Newsletter signup

## Rules

1. **Work in milestone order.** Do not skip ahead.
2. **Complete a milestone before starting the next.** All items checked off.
3. **Update this file** after completing each milestone.
4. **Never implement features not listed here** without explicit approval.
5. **Suggest a commit** after every completed component, data file, page, or fix.
6. **Write tests alongside code.** A component without tests is not complete.
