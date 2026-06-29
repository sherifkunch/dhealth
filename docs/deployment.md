# Deployment

## Platform

**Vercel** — Native Next.js hosting with CDN, automatic deployments, and free tier.

## Architecture

```
GitHub Repository
  → Push to main
    → Vercel Build (next build)
      → Static pages to CDN
      → API routes to Serverless Functions
        → Custom domain: dhealth.bg
```

## Docker

### Development

```bash
docker compose up dev
```

- Hot reload enabled via volume mounts
- Accessible at http://localhost:3000
- Source files synced: `src/`, `public/`, config files

### Production (Local Testing)

```bash
docker compose up app --build
```

- Multi-stage build (deps → build → runner)
- Runs as non-root user `nextjs` (uid 1001)
- Uses Next.js standalone output
- Accessible at http://localhost:3000

## Vercel Deployment

### Initial Setup

1. Connect GitHub repository to Vercel
2. Framework: Next.js (auto-detected)
3. Build command: `next build` (default)
4. Output directory: `.next` (default)

### Environment Variables

Set in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value | Environments |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_...` | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://dhealth.bg` | Production |

### Custom Domain

1. Add `dhealth.bg` in Vercel Dashboard → Domains
2. Update DNS records at registrar:
   - `A` record: `76.76.21.21` (Vercel)
   - `CNAME` for `www`: `cname.vercel-dns.com`
3. Vercel auto-provisions SSL certificate
4. Enable "Redirect www to non-www" (or vice versa)

### Build Settings

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Node.js Version | 20.x |
| Build Command | `next build` |
| Install Command | `npm ci` |
| Output Directory | `.next` |

## Pre-Deployment Checklist

- [ ] `npm run build` passes locally
- [ ] `npm run lint` shows zero warnings
- [ ] `npx tsc --noEmit` shows zero errors
- [ ] All pages render correctly at 375px, 768px, 1440px
- [ ] All links work (no 404s except intentional)
- [ ] Forms submit successfully
- [ ] Images load and are optimized
- [ ] Metadata correct on all pages (check page source)
- [ ] Structured data valid (Google Rich Results Test)
- [ ] Lighthouse scores meet targets (P: 90+, A: 95+, SEO: 95+)
- [ ] Environment variables configured in Vercel

## Post-Deployment Verification

1. Visit https://dhealth.bg — home page loads
2. Navigate all pages — no errors
3. Test booking form submission — email received
4. Test on mobile device — responsive layout
5. Run Lighthouse on production URL
6. Submit sitemap to Google Search Console
7. Verify structured data in Google Rich Results Test
