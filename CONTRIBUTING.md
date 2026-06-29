# Contributing — DHealth

## Setup

See [README.md](README.md) for quick start commands.

## Branch Strategy

- `main` — Production, auto-deploys to Vercel
- `develop` — Integration branch
- `feature/*` — Feature branches → merge into `develop`
- `fix/*` — Bug fixes

## Commit Messages

```
feat: add booking form with procedure pre-selection
fix: correct pricing table alignment on mobile
style: update hero section gradient colors
docs: update roadmap after milestone 3
```

## PR Checklist

- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] `npx tsc --noEmit` passes
- [ ] Tested at 375px and 1440px
- [ ] All text in Bulgarian
- [ ] No hardcoded content — use `src/data/`
- [ ] Components have explicit TypeScript prop types

## Adding Content

| Content | Edit | Assets |
|---------|------|--------|
| Procedure | `src/data/procedures.ts` | `public/images/procedures/` |
| Product | `src/data/products.ts` | `public/images/products/` |
| Review | `src/data/reviews.ts` | — |
| Price | `src/data/pricing.ts` | — |

Pages auto-generate from data — no code changes needed.

## Full Docs

See [`docs/`](docs/) for architecture, design system, and component rules.
