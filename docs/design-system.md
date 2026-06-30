# Design System

> **Project:** DHealth 2.0
> **Version:** 1.0
> **Purpose:** Define the visual language, UX principles, and UI standards for the entire application. Every page, component, and interaction must follow this document.

---

# Design Philosophy

The website should communicate **trust**, **professionalism**, **calmness**, and **premium quality**.

Users should immediately feel they are interacting with a modern healthcare brand rather than a generic medical website.

Every design decision should prioritize:

* Simplicity
* Clarity
* Accessibility
* Performance
* Consistency
* Readability

The interface should feel inspired by the design quality of:

* Apple
* Stripe
* Linear
* Vercel
* Notion
* Raycast

Avoid visual clutter and unnecessary decoration.

---

# Design Principles

## Less is More

Every element must have a purpose. Do not add decorative elements unless they improve the user experience.

## Whitespace is a Feature

Generous spacing improves readability and creates a premium feeling. Never overcrowd layouts.

## Strong Visual Hierarchy

Every page should clearly communicate:

1. Primary action
2. Supporting information
3. Secondary actions

## Consistency

Identical components must always look and behave identically.

## Accessibility First

All interfaces should comply with WCAG 2.1 AA where practical.

---

# Brand Personality

**Feel:** Professional, Friendly, Calm, Modern, Trustworthy, Premium, Clean

**Never:** Corporate, Cold, Generic, Template-based, Outdated, Busy

---

# Color System

All colors are defined as CSS custom properties in `src/app/globals.css` using OKLCH color space.

| Token | Hex | OKLCH | Usage |
|---|---|---|---|
| Primary | `#0EA5A4` | `oklch(0.62 0.12 192)` | Primary actions |
| Primary Hover | `#0D9488` | `oklch(0.57 0.12 182)` | Button hover |
| Secondary | `#0F172A` | `oklch(0.17 0.024 265)` | Text primary |
| Accent | `#22C55E` | `oklch(0.72 0.2 152)` | Success accent |
| Success | `#16A34A` | `oklch(0.64 0.19 150)` | Success state |
| Warning | `#F59E0B` | `oklch(0.75 0.15 68)` | Warning state |
| Error | `#DC2626` | `oklch(0.58 0.22 27)` | Error/destructive |
| Background | `#FFFFFF` | `oklch(1 0 0)` | Page background |
| Secondary BG | `#F1F5F9` | `oklch(0.97 0.006 240)` | Muted surfaces |
| Surface | `#FFFFFF` | `oklch(1 0 0)` | Cards |
| Border | `#E2E8F0` | `oklch(0.93 0.012 240)` | Dividers, borders |
| Text Primary | `#0F172A` | `oklch(0.17 0.024 265)` | Headings, body |
| Text Secondary | `#475569` | `oklch(0.49 0.024 252)` | Supporting text |
| Disabled | `#CBD5E1` | `oklch(0.86 0.016 240)` | Disabled states |

---

# Typography

**Font Family:** Inter (primary), system-ui (fallback)

| Name | Size | Usage |
|---|---|---|
| Hero — Desktop | 64px | h1 on landing pages (lg:text-[4rem]) |
| Hero — Tablet | 48px | h1 sm breakpoint (sm:text-5xl) |
| Hero — Mobile | 36px | h1 base (text-4xl) |
| Section Heading | 40px | h2 section titles (sm:text-[2.5rem]) |
| Card Heading | 24px | h3 in cards (text-2xl) |
| Body | 18px | Main paragraphs (text-lg) |
| Small Text | 16px | Supporting text (text-base) |
| Caption | 14px | Metadata, labels (text-sm) |

Rules: generous line-height (`leading-relaxed`), 60–75 char paragraph width (`max-w-2xl`).

---

# Layout

| | Value | Tailwind |
|---|---|---|
| Max content width | 1280px | `max-w-7xl` |
| Container padding desktop | 32px | `lg:px-8` |
| Container padding tablet | 24px | `sm:px-6` |
| Container padding mobile | 16px | `px-4` |
| Section spacing desktop | 120px | `lg:py-30` |
| Section spacing tablet | 96px | `sm:py-24` |
| Section spacing mobile | 72px | `py-18` |

---

# Border Radius

Base radius variable: `--radius: 0.875rem` (14px).

| Name | Value | Usage |
|---|---|---|
| Small (radius-sm) | ~8px | Input fields, small chips |
| Medium (radius-md) | ~11px | Buttons small |
| Large (radius-xl) | ~20px | Cards, buttons default |
| Extra Large (radius-2xl) | ~25px | Large cards, modals |

---

# Shadows

| State | Class |
|---|---|
| Card resting | `shadow-sm` |
| Card hover | `shadow-md` |

Cards prefer `shadow-sm` over heavy borders. Never use dramatic shadows.

---

# Buttons

- Primary: teal fill, white text, `rounded-xl`, large padding, semibold
- Outline: white bg, teal border on hover
- Ghost: transparent, navigation/toolbar only
- All buttons: `active:scale-[0.97]` for tactile feedback

---

# Cards

- Large padding (`p-6` minimum)
- Soft shadow (`shadow-sm`), not heavy borders
- `rounded-xl` (20px) or `rounded-2xl` (25px)
- Hover: `hover:shadow-md` — subtle shadow lift
- Consistent internal spacing

---

# Navigation

- Sticky, `backdrop-blur` always active
- Desktop: Logo | Nav links | CTA button
- Mobile: Logo | Hamburger | Slide-in drawer

---

# Footer

Four-column layout on desktop:
1. Company (logo + tagline + social links)
2. Procedures (links to key procedure pages)
3. Contact (phone, email, address, hours)
4. Social Media / CTA

---

# Section Headings

Pattern for every section:

```tsx
<h2 className="text-3xl font-bold tracking-tight sm:text-[2.5rem]">...</h2>
<p className="mt-4 text-lg text-muted-foreground">...</p>
```

---

# Animations

| Type | Value |
|---|---|
| Transitions | 200ms ease |
| Hover | lift + shadow + color |
| Scroll | fade / slide-up (future) |

Avoid: bounce, excessive scaling, long animations (>300ms).

---

# Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |

---

# AI Development Rules

Before implementing any page:

1. Read this document.
2. Follow every design principle.
3. Reuse existing components whenever possible.
4. Do not introduce a new visual style.
5. Keep spacing consistent with the values in this document.
6. Keep typography consistent with the scale defined here.
7. Explain major design decisions before implementing large sections.
8. Never generate placeholder UI unless explicitly requested.
9. Prefer reusable components over duplicated layouts.
10. Build mobile-first while ensuring an excellent desktop experience.
