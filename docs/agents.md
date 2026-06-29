# Agent Rules — DHealth

## Before Every Coding Session

**Mandatory.** Read these files in order before writing any code:

1. `docs/project-context.md` — Business context and technical decisions
2. `docs/agents.md` — This file (agent rules)
3. `docs/roadmap.md` — Current milestone and remaining tasks
4. `docs/decisions.md` — Architectural decisions (ADRs)

## Absolute Rules

These rules override any other instruction:

1. **Never implement features not in `docs/roadmap.md`.** If it's not listed, ask first.
2. **Never generate placeholder code** unless explicitly requested. Write production-quality code.
3. **Never add a database or backend** without explicit user approval (see ADR-01).
4. **Never add unnecessary npm dependencies.** Justify every addition.
5. **Always update documentation** after completing a milestone — check off items in `docs/roadmap.md`.
6. **Always explain architectural decisions** before implementing large changes.
7. **Always build production-quality code.** No shortcuts, no TODO comments, no half-implementations.
8. **Keep components reusable.** Each component should do one thing well.
9. **Keep files small.** Components: max 150 lines. Any file: max 200 lines.
10. **Work in milestone order.** Complete the current milestone before starting the next.
11. **Suggest a commit after every meaningful unit of work.** A completed component, data file, page, config change, or bug fix. Small, frequent, descriptive commits — never batch large amounts of work.
12. **Write tests alongside code.** Every component, utility, and API route must have tests. See `docs/testing.md`.

## Agent Guidelines

When working on this project:

1. **Read CLAUDE.md** for commands and conventions
2. **Check `src/data/`** for all content data before hardcoding text
3. **Use existing shadcn/ui components** from `src/components/ui/` before creating custom ones
4. **Follow the route naming convention** — ASCII transliterated Bulgarian slugs
5. **Keep all UI text in Bulgarian**
6. **Use `render` prop** not `asChild` for shadcn/ui v4 composition (see `docs/ui-components.md`)

## Component Patterns

| Location | What goes there |
|----------|----------------|
| `src/components/layout/` | Header, Footer, SectionWrapper |
| `src/components/home/` | Hero, Stats, ServicesPreview, CTASection, TestimonialsPreview |
| `src/components/procedures/` | ProcedureCard, ProcedureDetail |
| `src/components/pricing/` | PricingTable |
| `src/components/reviews/` | ReviewCard, ReviewForm |
| `src/components/forms/` | ContactForm, BookingForm |
| `src/components/shared/` | PageHeader, WhatsAppButton, SocialLinks, WorkingHours, GoogleMap |
| `src/components/ui/` | shadcn/ui primitives (auto-generated, do not manually edit) |

### Component Rules

- One component per file, named export only
- Explicit TypeScript prop interfaces
- `"use client"` only when hooks or browser APIs are needed
- Use `cn()` from `@/lib/utils` for conditional classes
- Styling via Tailwind only — no CSS modules, no inline styles
- Data from props or `src/data/` imports — never fetch content

## Data Flow

```
src/data/*.ts → imported by → src/app/*/page.tsx or src/components/**/*.tsx
                                     ↓
                              Static HTML at build time
```

All content is static. Pages import data directly — no API calls for content.
The only API route is `POST /api/contact` for form submissions.

## Quality Gates

Every milestone must pass these before being marked complete:

```bash
npm run build          # Zero errors
npm run lint           # Zero warnings
npx tsc --noEmit       # Zero type errors
npm test               # All tests pass
```

Plus visual verification at 375px, 768px, and 1440px viewports.

## Commit Discipline

Suggest a commit after each of these:
- A data file is created or updated
- A component is complete with its test
- A page is assembled and rendering
- A config or infrastructure change
- A bug fix

Commit messages follow conventional commits: `feat:`, `fix:`, `test:`, `docs:`, `style:`, `chore:`.

## Reference Docs

| Doc | When to read |
|-----|-------------|
| `docs/design-system.md` | Before styling any component |
| `docs/ui-components.md` | Before creating any component |
| `docs/pages.md` | Before building any page |
| `docs/api.md` | Before building form submission |
| `docs/testing.md` | Before writing any test |
| `docs/seo.md` | Before adding metadata or structured data |
| `docs/accessibility.md` | Before shipping any interactive element |
| `docs/security.md` | Before handling user input |
