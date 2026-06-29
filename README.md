# DHealth — Кинезитерапия & Физиотерапия

Modern, production-ready website for DHealth — a physiotherapy and kinesitherapy studio in Sofia, Bulgaria, operated by Diana Dimova.

## Tech Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui v4 · Docker · Vercel

## Quick Start

```bash
# Development (Docker)
docker compose up dev

# Development (local)
npm install && npm run dev

# Production build
docker compose up app --build
```

App runs at [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/protseduri` | Procedures listing |
| `/protseduri/[slug]` | Procedure detail (x12) |
| `/produkti` | Products |
| `/tseni` | Prices |
| `/za-nas` | About |
| `/kontakti` | Contact |
| `/otzivi` | Reviews |
| `/zapitvane` | Booking request |

## Documentation

All project specifications live in [`docs/`](docs/):

| Doc | Purpose |
|-----|---------|
| [project-context.md](docs/project-context.md) | Business context, services, technical decisions |
| [agents.md](docs/agents.md) | AI agent rules, component patterns, quality gates |
| [vision.md](docs/vision.md) | Mission, success metrics, non-goals |
| [requirements.md](docs/requirements.md) | Functional and non-functional requirements |
| [architecture.md](docs/architecture.md) | Tech stack, system diagram, directory structure |
| [features.md](docs/features.md) | Feature matrix with priorities and milestones |
| [user-flows.md](docs/user-flows.md) | User journeys and conversion points |
| [design-system.md](docs/design-system.md) | Colors, typography, spacing, breakpoints |
| [ui-components.md](docs/ui-components.md) | Component inventory and rules |
| [pages.md](docs/pages.md) | Route map and page specifications |
| [database.md](docs/database.md) | Data storage approach |
| [api.md](docs/api.md) | API endpoint spec and schemas |
| [seo.md](docs/seo.md) | Metadata, structured data, sitemap |
| [accessibility.md](docs/accessibility.md) | WCAG requirements and checklist |
| [security.md](docs/security.md) | Threat model and security measures |
| [roadmap.md](docs/roadmap.md) | Milestones and progress tracking |
| [decisions.md](docs/decisions.md) | Architectural Decision Records |
| [testing.md](docs/testing.md) | Test strategy, conventions, coverage targets |
| [deployment.md](docs/deployment.md) | Docker, Vercel, domain setup |

## Environment Variables

```env
RESEND_API_KEY=              # Email service (form submissions)
NEXT_PUBLIC_SITE_URL=        # Production URL (https://dhealth.bg)
```

## License

Private. All rights reserved.
