# Requirements

## Functional Requirements

### FR-01: Navigation
- Persistent header with logo, navigation links, phone number, and booking CTA
- Mobile hamburger menu with slide-out sheet
- Footer with contact info, navigation links, social links, working hours
- Breadcrumb navigation on interior pages

### FR-02: Home Page
- Hero section with clinic name, practitioner info, tagline, and dual CTAs
- Featured procedures grid (6 procedures)
- Statistics/trust section (years experience, procedures count, satisfied clients)
- Testimonials preview (3 reviews with horizontal scroll on mobile)
- Call-to-action banner for booking
- Contact preview section

### FR-03: Procedures Listing
- Grid display of all 12 procedures with image, name, short description
- Each card links to its detail page
- Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop

### FR-04: Procedure Detail
- Dynamic pages generated from data for each of the 12 procedures
- Full description, benefits list, duration info
- Procedure-specific CTA linking to booking with pre-selected procedure
- Related procedures section (2-3 suggestions)
- Breadcrumb: Начало > Процедури > [Name]

### FR-05: Products Page
- Category-filtered grid of therapy products
- Product cards with image, name, description, optional price
- Empty state when no products are added yet
- Structure ready for content population without code changes

### FR-06: Pricing Page
- Organized pricing table by category
- Shows BGN price for each service
- Package deals visually highlighted
- Booking CTA at bottom

### FR-07: About Page
- Practitioner photo and biography
- Qualifications and certifications
- Philosophy and approach
- CTA section

### FR-08: Contact Page
- Contact form (name, email, phone, message, procedure dropdown)
- Direct WhatsApp and Viber action buttons
- Google Maps embed showing clinic location
- Contact information cards (address, phone, email, hours)
- Working hours display

### FR-09: Reviews Page
- Grid of all client testimonials
- Star rating display per review
- Review submission form (name, rating, text)
- Reviews submitted via form are sent as email notifications for manual approval

### FR-10: Booking Request Page
- Booking form: name (required), phone (required), email, procedure dropdown, preferred date, preferred time slot, message
- Procedure pre-selection via URL query parameter (?procedure=slug)
- WhatsApp/Viber direct contact alternatives
- Confirmation message after submission
- Form submission sends email notification to clinic

### FR-11: SEO
- Unique meta title and description per page
- Open Graph tags for social sharing
- JSON-LD structured data (MedicalBusiness, Service, Review)
- Auto-generated sitemap.xml
- robots.txt
- Semantic HTML throughout
- All images have descriptive alt text in Bulgarian

### FR-12: 404 Page
- Custom not-found page with navigation back to home

## Non-Functional Requirements

### NFR-01: Performance
- Lighthouse Performance score >= 90
- All images optimized via Next.js Image component
- Static generation for all pages at build time
- Minimal JavaScript bundle

### NFR-02: Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable throughout
- Skip-to-content link
- ARIA landmarks and labels in Bulgarian
- Color contrast ratio >= 4.5:1 for text
- Focus-visible indicators on all interactive elements

### NFR-03: Responsiveness
- Mobile-first design
- Breakpoints: 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop)
- No horizontal scroll at any viewport

### NFR-04: Security
- No sensitive data stored client-side
- Server-side form validation with Zod
- Rate limiting on API routes (future)
- HTTPS enforced via Vercel
- No inline scripts except JSON-LD

### NFR-05: Maintainability
- All content in typed data files — no hardcoded strings in components
- Components under 150 lines
- Clear separation: data / components / pages
- TypeScript strict mode
