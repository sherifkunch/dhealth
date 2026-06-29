# Testing

## Strategy

Three layers of testing, each catching different classes of bugs:

| Layer | Tool | What it catches | Runs |
|-------|------|----------------|------|
| **Unit tests** | Vitest | Logic errors in utilities, data transforms, schemas | `npm test` |
| **Component tests** | Vitest + React Testing Library | Rendering bugs, prop handling, user interactions | `npm test` |
| **E2E tests** | Playwright | Full user flows, navigation, form submissions, responsive layout | `npm run test:e2e` |

## Test Stack

| Package | Purpose |
|---------|---------|
| `vitest` | Test runner (fast, Vite-native, Jest-compatible API) |
| `@testing-library/react` | Component rendering and queries |
| `@testing-library/jest-dom` | DOM matchers (`toBeInTheDocument`, `toHaveTextContent`, etc.) |
| `@testing-library/user-event` | Simulating real user interactions |
| `@vitejs/plugin-react` | JSX/TSX support in Vitest |
| `jsdom` | Browser environment simulation |
| `playwright` | Browser-based end-to-end testing |

## Directory Structure

```
src/
├── __tests__/                    # Global test utilities and setup
│   └── setup.ts                  # Vitest global setup (jest-dom matchers)
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── header.test.tsx       # Co-located component test
│   ├── shared/
│   │   ├── page-header.tsx
│   │   └── page-header.test.tsx
│   └── ...
├── data/
│   ├── procedures.ts
│   └── procedures.test.ts        # Data integrity tests
├── lib/
│   ├── utils.ts
│   ├── utils.test.ts
│   ├── schemas.ts
│   └── schemas.test.ts           # Validation schema tests
e2e/
├── home.spec.ts                  # Home page E2E
├── procedures.spec.ts            # Procedures flow E2E
├── booking.spec.ts               # Booking flow E2E
├── navigation.spec.ts            # Navigation + responsive E2E
└── seo.spec.ts                   # Metadata and structured data E2E
```

## Test Co-location

Tests live next to the code they test: `component.tsx` → `component.test.tsx`. This keeps tests discoverable and makes it obvious when a component lacks tests.

Exception: E2E tests live in a top-level `e2e/` directory since they span multiple pages.

## What to Test

### Unit Tests (`*.test.ts`)

**Utilities (`src/lib/`):**
- `cn()` class merging edge cases
- Zod schema validation — valid inputs pass, invalid inputs fail with correct error messages
- Any helper functions added later

**Data files (`src/data/`):**
- All procedures have required fields (id, slug, name, description, image)
- All slugs are unique
- All slugs are ASCII-only (no Cyrillic)
- Pricing items have valid numbers
- Reviews have valid ratings (1–5)
- Navigation hrefs match existing routes

### Component Tests (`*.test.tsx`)

**What to test:**
- Renders without crashing
- Displays expected content from props
- Conditional rendering works (e.g., breadcrumbs show when provided)
- Interactive behavior (mobile nav opens/closes, form validates)
- Accessibility: elements have correct roles, labels, ARIA attributes

**What NOT to test:**
- Tailwind class names (brittle, no value)
- Internal implementation details
- shadcn/ui component internals (tested by the library)

**Example — PageHeader:**
```typescript
import { render, screen } from "@testing-library/react";
import { PageHeader } from "./page-header";

describe("PageHeader", () => {
  it("renders the title", () => {
    render(<PageHeader title="Процедури" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Процедури");
  });

  it("renders description when provided", () => {
    render(<PageHeader title="Процедури" description="Нашите услуги" />);
    expect(screen.getByText("Нашите услуги")).toBeInTheDocument();
  });

  it("does not render description when omitted", () => {
    const { container } = render(<PageHeader title="Процедури" />);
    expect(container.querySelectorAll("p")).toHaveLength(0);
  });

  it("renders breadcrumbs when provided", () => {
    render(
      <PageHeader
        title="Физиотерапия"
        breadcrumbs={[{ label: "Процедури", href: "/protseduri" }, { label: "Физиотерапия" }]}
      />
    );
    expect(screen.getByLabelText("Навигационна пътека")).toBeInTheDocument();
  });
});
```

### E2E Tests (`e2e/*.spec.ts`)

**Navigation:**
- All nav links navigate to correct pages
- Mobile menu opens and closes
- Active link highlighting works
- Breadcrumbs navigate correctly

**Home page:**
- Hero section renders with CTAs
- Featured procedures grid shows 6 cards
- Testimonials section shows reviews
- All CTA buttons navigate to booking

**Procedures:**
- All 12 procedure cards render on listing page
- Clicking a card navigates to detail page
- Detail page shows full content
- Booking CTA links to `/zapitvane?procedure=[slug]`

**Booking flow:**
- Form renders all fields
- Procedure pre-selects from URL param
- Validation errors show for empty required fields
- Successful submission shows confirmation

**Responsive:**
- Header collapses to hamburger on mobile
- Grids reflow correctly at breakpoints
- No horizontal scroll at any viewport

**SEO:**
- Each page has unique `<title>`
- Each page has `<meta name="description">`
- Home page has JSON-LD MedicalBusiness
- `<html lang="bg">` is set

## Commands

```bash
npm test                    # Run all unit + component tests
npm run test:watch          # Watch mode during development
npm run test:coverage       # Generate coverage report
npm run test:e2e            # Run Playwright E2E tests
npm run test:e2e:headed     # E2E with visible browser
```

## Coverage Targets

| Metric | Target |
|--------|--------|
| Statements | 80%+ |
| Branches | 75%+ |
| Functions | 80%+ |
| Lines | 80%+ |

Coverage is a guide, not a mandate. 100% coverage on a utility with 0% on a critical form is worse than balanced coverage.

## When to Write Tests

1. **Data files** — Test immediately after creation. Validates content integrity.
2. **Utility functions** — Test before using them in components.
3. **Components** — Test after the component is functionally complete.
4. **Forms** — Test validation schemas first, then form component behavior.
5. **E2E** — Write after all pages in a flow are built. One spec per user flow.
6. **Before every commit** — Run `npm test` to catch regressions.

## CI Integration

All tests run in the CI pipeline before deploy:

```bash
npm run build && npm run lint && npx tsc --noEmit && npm test && npm run test:e2e
```

A failing test blocks deployment.
