# Design System

## Color Palette

All colors are defined as CSS custom properties in `src/app/globals.css` using OKLCH color space.

| Token | Role | Value |
|-------|------|-------|
| `--primary` | Brand color, CTAs, links | Teal `oklch(0.45 0.12 175)` |
| `--primary-foreground` | Text on primary | Near-white |
| `--secondary` | Secondary backgrounds | Light teal tint |
| `--secondary-foreground` | Text on secondary | Dark teal |
| `--background` | Page background | Off-white with subtle green tint |
| `--foreground` | Primary text | Near-black with green tint |
| `--muted` | Subtle backgrounds | Light gray-green |
| `--muted-foreground` | Secondary text | Medium gray |
| `--accent` | Hover states, highlights | Same as secondary |
| `--destructive` | Error states | Red |
| `--border` | Borders | Light gray |
| `--ring` | Focus rings | Same as primary |

### Color Usage Rules

1. Primary color is reserved for: CTAs, links, active nav items, brand elements
2. Muted foreground for: secondary text, descriptions, metadata
3. Never use color alone to convey meaning — always pair with text or icons
4. Maintain 4.5:1 contrast ratio for all text (WCAG AA)

## Typography

### Font

- **Primary**: Inter (via `next/font/google`)
- **Subsets**: `cyrillic`, `latin`
- **Variable**: `--font-sans`

### Scale

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| Page title (h1) | `text-3xl` / `sm:text-4xl` | `font-bold` | `tracking-tight` |
| Section title (h2) | `text-2xl` / `sm:text-3xl` | `font-bold` | `tracking-tight` |
| Card title (h3) | `text-lg` | `font-semibold` | — |
| Body | `text-base` (16px) | `font-normal` | — |
| Small text | `text-sm` (14px) | `font-normal` | — |
| Caption | `text-xs` (12px) | `font-normal` | — |
| Label/overline | `text-sm` | `font-medium` | `tracking-widest uppercase` |

### Rules

1. Only one `h1` per page
2. Heading hierarchy must not skip levels (h1 → h2 → h3)
3. All body text is `text-foreground`, secondary text is `text-muted-foreground`
4. Line height: body uses Tailwind defaults (~1.5), headings use `leading-tight`

## Spacing

### Section Spacing
- Vertical padding: `py-16` (64px) standard, `py-24 sm:py-32` for hero
- Max width: `max-w-7xl` (1280px)
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Use `SectionWrapper` component for consistent application

### Component Spacing
- Card gap in grids: `gap-6` or `gap-8`
- Stack spacing: `gap-4` between related items, `gap-8` between sections
- Button group gap: `gap-4`

## Border Radius

Defined via `--radius` CSS variable (0.625rem = 10px base).

| Token | Size |
|-------|------|
| `rounded-sm` | 6px |
| `rounded-md` | 8px |
| `rounded-lg` | 10px |
| `rounded-xl` | 14px |

## Shadows

- Cards: no shadow by default, subtle shadow on hover if needed
- Header: no shadow, uses `border-b` + `backdrop-blur`
- Modals/sheets: `shadow-lg`

## Breakpoints

| Name | Min Width | Usage |
|------|----------|-------|
| Default | 0px | Mobile portrait |
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Key Responsive Patterns

- Navigation: sheet menu → inline nav at `lg`
- Grids: 1 col → 2 col at `sm` → 3 col at `lg`
- Hero text: `text-4xl` → `text-5xl` at `sm` → `text-6xl` at `lg`
- Footer: stacked → 3-column at `lg`

## Motion

- Transitions: `transition-colors` for hover states (150ms default)
- No page transitions or scroll animations (keep it fast and simple)
- Respect `prefers-reduced-motion`
- Sheet/dialog enter/exit: handled by shadcn/ui defaults
