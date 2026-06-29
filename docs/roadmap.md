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

### Milestone 5: Contact
- [ ] Contact form component (react-hook-form + Zod) + tests
- [ ] Google Maps embed component
- [ ] WorkingHours component + tests
- [ ] WhatsApp/Viber direct buttons
- [ ] Floating WhatsApp button (global)
- [ ] Contact page assembly
- [ ] Contact form validation E2E test

### Milestone 6: Reviews
- [ ] Reviews page with full grid
- [ ] Review submission form + tests
- [ ] Star rating component + tests

### Milestone 7: Booking & Email
- [ ] Zod validation schemas (all form types) + tests
- [ ] Booking form with procedure pre-selection + tests
- [ ] API route: POST /api/contact + tests
- [ ] Resend email integration
- [ ] Form submission feedback (toast)
- [ ] Booking page assembly
- [ ] Booking flow E2E test

### Milestone 8: About & Products
- [ ] About page content and layout
- [ ] Products page structure with empty state
- [ ] Product card component + tests
- [ ] Category filtering

### Milestone 9: SEO & Performance
- [ ] Sitemap generation (src/app/sitemap.ts)
- [ ] JSON-LD for procedure detail pages
- [ ] JSON-LD for reviews page (AggregateRating)
- [ ] Open Graph images
- [ ] Lighthouse audit and optimization
- [ ] Accessibility audit
- [ ] SEO metadata E2E test
- [ ] Navigation E2E test
- [ ] Responsive layout E2E test

## Phase 2: Polish & Deployment

### Milestone 10: Final Polish
- [ ] Real images for all procedures
- [ ] Practitioner photo for About page
- [ ] Product content population
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Final content review with clinic owner
- [ ] Full test suite passes (`npm test && npm run test:e2e`)

### Milestone 11: Deployment
- [ ] Git repository setup
- [ ] Vercel project creation
- [ ] Environment variable configuration
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
