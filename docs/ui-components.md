# UI Components

## Component Inventory

### Layout Components (`src/components/layout/`)

| Component | Props | Description |
|-----------|-------|-------------|
| `Header` | — | Sticky header with desktop nav, mobile sheet, phone, CTA |
| `Footer` | — | 3-column footer: brand/social, navigation, contact |
| `SectionWrapper` | `children`, `className?`, `id?` | Max-width container with consistent padding |

### Shared Components (`src/components/shared/`)

| Component | Props | Description |
|-----------|-------|-------------|
| `PageHeader` | `title`, `description?`, `breadcrumbs?` | Page title banner with optional breadcrumbs |
| `WhatsAppButton` | — | Floating WhatsApp action button (bottom-right) |
| `SocialLinks` | `variant: "header" \| "footer" \| "inline"` | Instagram + Facebook links |
| `WorkingHours` | `compact?: boolean` | Working hours display |
| `GoogleMap` | `height?: string` | Google Maps iframe embed |

### Home Components (`src/components/home/`)

| Component | Props | Description |
|-----------|-------|-------------|
| `Hero` | — | Full-width hero with gradient, title, CTAs |
| `ServicesPreview` | — | Grid of 6 featured ProcedureCards |
| `StatsSection` | — | Key numbers (procedures, clients, experience) |
| `TestimonialsPreview` | — | 3 reviews with CSS horizontal scroll |
| `CTASection` | `title`, `description`, `href` | Accent-colored booking CTA banner |

### Procedure Components (`src/components/procedures/`)

| Component | Props | Description |
|-----------|-------|-------------|
| `ProcedureCard` | `procedure: Procedure` | Card for listing: image, name, description, link |
| `ProcedureDetail` | `procedure: Procedure` | Full detail view with benefits and CTA |

### Pricing Components (`src/components/pricing/`)

| Component | Props | Description |
|-----------|-------|-------------|
| `PricingTable` | `categories: PricingCategory[]` | Categorized pricing table |

### Review Components (`src/components/reviews/`)

| Component | Props | Description |
|-----------|-------|-------------|
| `ReviewCard` | `review: Review` | Individual testimonial card with rating |
| `ReviewForm` | — | Star rating + text submission form |

### Form Components (`src/components/forms/`)

| Component | Props | Description |
|-----------|-------|-------------|
| `ContactForm` | — | Name, email, phone, message, procedure dropdown |
| `BookingForm` | `preselectedProcedure?: string` | Full booking form with date/time preference |

## Component Rules

1. **One component per file.** File name matches component name in kebab-case.
2. **Max 150 lines.** If a component exceeds this, extract sub-components.
3. **Explicit prop types.** Every component has a TypeScript interface for its props.
4. **No default exports.** Use named exports only: `export function ComponentName()`.
5. **`"use client"` only when needed.** Only add for components using hooks, event handlers, or browser APIs. Server components by default.
6. **Data from props or imports.** Components never fetch data. They receive it via props or import from `src/data/`.
7. **Styling via Tailwind only.** No CSS modules, no styled-components, no inline styles.
8. **Use `cn()` for conditional classes.** Import from `@/lib/utils`.
9. **Use shadcn/ui primitives.** Always check `src/components/ui/` before building custom interactive elements.

## shadcn/ui Components in Use

| Component | Package | Used For |
|-----------|---------|----------|
| `Button` | `@base-ui/react` | All buttons and button-like links |
| `Sheet` | `@base-ui/react/dialog` | Mobile navigation drawer |
| `Separator` | — | Visual dividers |
| `NavigationMenu` | — | Desktop navigation (if needed) |
| `Card` | — | Procedure cards, review cards, product cards |
| `Input` | — | Form text inputs |
| `Textarea` | — | Form message fields |
| `Label` | — | Form field labels |
| `Select` | — | Procedure dropdown, time slot selection |
| `Badge` | — | Benefit tags, package labels |
| `Accordion` | — | FAQ-style content (if needed) |
| `Toast` | — | Form submission feedback |

> Add components as needed via `npx shadcn@latest add <component>`

## Render Pattern (shadcn/ui v4)

This project uses shadcn/ui v4 with base-ui. The `asChild` pattern is replaced by the `render` prop:

```tsx
// Correct — render Button as a Link
<Button render={<Link href="/path" />} size="lg">
  Button Text
</Button>

// Correct — render SheetTrigger as a Button
<SheetTrigger render={<Button variant="ghost" size="icon" />}>
  <MenuIcon />
</SheetTrigger>
```

Never use `asChild` — it does not exist in this version.
