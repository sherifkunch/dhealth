# Security

## Threat Model

This is a static marketing website with one API endpoint. Attack surface is small.

| Threat | Risk | Mitigation |
|--------|------|-----------|
| XSS | Low | React auto-escapes output. No `dangerouslySetInnerHTML` except JSON-LD (static data only). |
| CSRF | Low | API route only accepts POST. No session/auth to hijack. |
| Form spam | Medium | Server-side validation. Rate limiting planned for Phase 2. |
| Email injection | Medium | Zod validation strips unexpected fields. Email content is templated, not user-controlled headers. |
| Dependency vulnerabilities | Low | Regular `npm audit`. Minimal dependency tree. |
| Data exposure | Low | No database, no user data stored. API key server-side only. |
| DDoS | Low | Vercel provides basic DDoS protection. Static pages served from CDN. |

## Security Measures

### Input Validation
- All form inputs validated server-side with Zod schemas
- Client-side validation for UX only — never trusted
- Input length limits enforced (name: 2-100, message: 10-2000)
- Email format validated
- Phone format validated

### Environment Variables
- `RESEND_API_KEY` is server-only (no `NEXT_PUBLIC_` prefix)
- `.env.local` is in `.gitignore`
- `.env.example` contains empty values for documentation

### Headers (via Vercel)
- HTTPS enforced automatically
- `X-Content-Type-Options: nosniff` (Vercel default)
- `X-Frame-Options: DENY` (add via `next.config.ts` headers if needed)
- `Referrer-Policy: strict-origin-when-cross-origin`

### Content Security
- No user-generated content displayed without manual approval
- Review submissions are emailed to clinic, not auto-published
- No file uploads
- No authentication or session management

### Dependencies
- Minimal dependency count
- No unnecessary packages
- Regular `npm audit` checks
- Lock file (`package-lock.json`) committed

## Phase 2 Security Improvements

- Rate limiting on `/api/contact` (Upstash Redis or Vercel Edge)
- Honeypot field in forms for bot detection
- Content Security Policy headers
- `next.config.ts` security headers configuration
