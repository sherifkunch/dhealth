# Architectural Decision Records

## ADR-01: No Database

**Status:** Accepted  
**Date:** 2026-06-29

**Context:** The website needs to display procedures, pricing, reviews, and products. Content changes infrequently (monthly at most).

**Decision:** Store all content in typed TypeScript files under `src/data/`. No database, no CMS.

**Consequences:**
- (+) Zero infrastructure cost and maintenance
- (+) Type-safe content at build time
- (+) Best possible performance (data inlined at build)
- (+) Version-controlled content history
- (-) Content changes require a developer and rebuild
- (-) Cannot add dynamic features (real-time reviews, live booking)

**Revisit if:** Non-developer needs to update content frequently, or dynamic features are required.

---

## ADR-02: Static Generation Only

**Status:** Accepted  
**Date:** 2026-06-29

**Context:** The site needs to be fast, SEO-friendly, and cheap to host.

**Decision:** Use Next.js static generation (SSG) for all pages. No server-side rendering (SSR), no ISR.

**Consequences:**
- (+) Fastest possible page loads (served from CDN)
- (+) Free/cheap Vercel hosting (within generous limits)
- (+) Perfect SEO (HTML pre-rendered)
- (-) Content changes require a rebuild and deploy
- (-) Cannot show personalized content

---

## ADR-03: Resend for Email

**Status:** Accepted  
**Date:** 2026-06-29

**Context:** Form submissions need to send email notifications to the clinic.

**Decision:** Use Resend (resend.com) as the email service.

**Alternatives considered:**
- SendGrid — More complex setup, heavier SDK
- Nodemailer with Gmail SMTP — OAuth2 complexity, less reliable
- Formspree/Web3Forms — Less control, external redirect

**Consequences:**
- (+) Simple API, tiny package
- (+) Free tier: 100 emails/day (more than sufficient)
- (+) Works perfectly on Vercel serverless
- (-) One additional dependency
- (-) Requires API key management

---

## ADR-04: Docker for Development

**Status:** Accepted  
**Date:** 2026-06-29

**Context:** Need consistent development environments and easy onboarding.

**Decision:** Provide Docker Compose setup with separate dev and production services.

**Consequences:**
- (+) Consistent environment across machines
- (+) Easy onboarding: `docker compose up dev`
- (+) Production build testing locally
- (-) Docker required on development machine
- (-) Slightly slower startup than bare `npm run dev`

---

## ADR-05: shadcn/ui v4 with base-ui

**Status:** Accepted  
**Date:** 2026-06-29

**Context:** Need accessible, customizable UI components without heavy runtime dependencies.

**Decision:** Use shadcn/ui v4 which is built on `@base-ui/react` instead of Radix primitives.

**Key difference:** Uses `render` prop instead of `asChild` for component composition.

**Consequences:**
- (+) Accessible by default
- (+) Components are copied into project (no version lock-in)
- (+) Customizable via Tailwind
- (-) Must use `render` prop pattern, not `asChild`
- (-) Newer ecosystem, fewer community examples

---

## ADR-06: Bulgarian Transliterated Routes

**Status:** Accepted  
**Date:** 2026-06-29

**Context:** URL routes need to be readable and work with Next.js file-system routing.

**Decision:** Use ASCII transliterations of Bulgarian words for routes.

| Bulgarian | Route |
|-----------|-------|
| Процедури | `/protseduri` |
| Продукти | `/produkti` |
| Цени | `/tseni` |
| За нас | `/za-nas` |
| Контакти | `/kontakti` |
| Отзиви | `/otzivi` |
| Запитване | `/zapitvane` |

**Consequences:**
- (+) Works with file-system routing (ASCII only)
- (+) Human-readable for Bulgarian speakers
- (+) SEO-neutral (search engines handle transliteration)
- (-) Not as immediately recognizable as Cyrillic URLs

**Note:** The initial attempt used Cyrillic (`запитване`) which caused build errors. Next.js App Router requires ASCII directory names.

---

## ADR-07: No Client-Side State Management

**Status:** Accepted  
**Date:** 2026-06-29

**Context:** Deciding whether to add Redux, Zustand, or React Context.

**Decision:** No state management library. Use `useState` in the few client components that need it (mobile nav, forms).

**Consequences:**
- (+) Zero bundle size impact
- (+) No abstraction overhead
- (+) Simple mental model
- (-) If significant client-side state is needed later, may need to add one

---

## Template

```
## ADR-XX: Title

**Status:** Proposed | Accepted | Deprecated | Superseded  
**Date:** YYYY-MM-DD

**Context:** What is the issue?

**Decision:** What was decided?

**Consequences:** What are the trade-offs?
```
