# CLAUDE.md — DHealth

## Before Every Session

Read these files before writing any code:

1. `docs/project-context.md` — Business context and technical decisions
2. `docs/agents.md` — Agent rules and component patterns
3. `docs/roadmap.md` — Current milestone and task list
4. `docs/decisions.md` — Architectural Decision Records

## Absolute Rules

1. Never implement features not in `docs/roadmap.md`
2. Never generate placeholder code unless explicitly requested
3. Never add a database or backend without explicit approval
4. Never add unnecessary npm dependencies
5. Always update `docs/roadmap.md` after completing a milestone
6. Always explain architectural decisions before large changes
7. Always build production-quality code
8. Keep components reusable — one per file, max 150 lines
9. Keep files under 200 lines — extract if larger
10. Work in milestone order — complete current before starting next
11. **Suggest a commit after every meaningful unit of work** — a completed component, a data file, a page, a config change, a bug fix. Do not batch large amounts of work into a single commit. Small, frequent, descriptive commits.
12. **Write tests alongside code.** Every component, utility, and API route must have corresponding tests. See `docs/testing.md` for strategy and conventions.

## Commands

```bash
docker compose up dev              # Dev server with hot reload (port 3000)
docker compose up app --build      # Production build and serve
npm run dev                        # Local dev (without Docker)
npm run build                      # Must pass with zero errors
npm run lint                       # Must show zero warnings
npx tsc --noEmit                   # Must show zero type errors
npm test                           # Run all tests
npm run test:watch                 # Run tests in watch mode
npm run test:coverage              # Run tests with coverage report
```

## Quick Reference

- **Stack:** Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui v4, Docker
- **Routes:** `/protseduri`, `/tseni`, `/za-nas`, `/kontakti`, `/otzivi`, `/zapitvane`, `/produkti`
- **UI locale:** Bulgarian only, `<html lang="bg">`
- **Data:** Static TypeScript files in `src/data/` — no CMS, no database
- **Components:** Domain-organized in `src/components/{domain}/`
- **shadcn/ui v4:** Uses `render` prop, NOT `asChild` (see `docs/ui-components.md`)

## Documentation Index

All detailed specs live in `docs/`. See `README.md` for the full table.
