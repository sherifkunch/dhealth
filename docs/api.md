# API

## Overview

The application has a single API route for handling form submissions. All other data is static.

## Endpoints

### `POST /api/contact`

Handles all form submissions (contact, booking, review) via a `type` discriminator.

**Request Body:**

```typescript
// Contact form
{
  type: "contact",
  name: string,       // required, min 2 chars
  email: string,      // required, valid email
  phone: string,      // required, min 10 chars
  procedure?: string, // optional, procedure slug
  message: string     // required, min 10 chars
}

// Booking request
{
  type: "booking",
  name: string,       // required, min 2 chars
  phone: string,      // required, min 10 chars
  email?: string,     // optional
  procedure: string,  // required, procedure slug
  preferredDate?: string,  // optional, ISO date string
  preferredTime?: "morning" | "afternoon" | "evening",
  message?: string    // optional
}

// Review submission
{
  type: "review",
  name: string,       // required, min 2 chars
  rating: number,     // required, 1-5
  text: string        // required, min 10 chars
}
```

**Response:**

```typescript
// Success
{ success: true, message: string }  // 200 OK

// Validation error
{ success: false, errors: Record<string, string[]> }  // 400 Bad Request

// Server error
{ success: false, message: string }  // 500 Internal Server Error
```

**Behavior:**

1. Parse JSON body
2. Determine form type from `type` field
3. Validate against appropriate Zod schema
4. If valid: send email via Resend to clinic Gmail
5. Return success/error JSON response

**Email Templates:**

Each form type generates a different email:
- Contact: Subject "Ново запитване от [name]"
- Booking: Subject "Нова заявка за час от [name] — [procedure]"
- Review: Subject "Нов отзив от [name] — [rating] звезди"

## Validation Schemas

Defined in `src/lib/schemas.ts` using Zod:

```typescript
import { z } from "zod";

export const contactFormSchema = z.object({
  type: z.literal("contact"),
  name: z.string().min(2, "Моля, въведете вашето име"),
  email: z.string().email("Моля, въведете валиден имейл"),
  phone: z.string().min(10, "Моля, въведете валиден телефонен номер"),
  procedure: z.string().optional(),
  message: z.string().min(10, "Съобщението трябва да е поне 10 символа"),
});

export const bookingFormSchema = z.object({
  type: z.literal("booking"),
  name: z.string().min(2, "Моля, въведете вашето име"),
  phone: z.string().min(10, "Моля, въведете валиден телефонен номер"),
  email: z.string().email().optional().or(z.literal("")),
  procedure: z.string().min(1, "Моля, изберете процедура"),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(["morning", "afternoon", "evening"]).optional(),
  message: z.string().optional(),
});

export const reviewFormSchema = z.object({
  type: z.literal("review"),
  name: z.string().min(2, "Моля, въведете вашето име"),
  rating: z.number().min(1).max(5),
  text: z.string().min(10, "Отзивът трябва да е поне 10 символа"),
});

export const formSchema = z.discriminatedUnion("type", [
  contactFormSchema,
  bookingFormSchema,
  reviewFormSchema,
]);
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (for forms) | Resend API key for sending emails |
| `NEXT_PUBLIC_SITE_URL` | No | Site URL for metadata (defaults to dhealth.bg) |

## Rate Limiting

Not implemented in Phase 1. For Phase 2, consider:
- Vercel Edge Middleware rate limiting
- Or `@upstash/ratelimit` with Upstash Redis
