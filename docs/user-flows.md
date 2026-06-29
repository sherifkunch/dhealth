# User Flows

## Primary Flows

### Flow 1: Discover → Book (New Visitor)

```
Google Search ("кинезитерапия София")
  → Home Page (hero, trust signals)
    → Browse Procedures (/protseduri)
      → Read Procedure Detail (/protseduri/kineziterapia)
        → Click "Запазете час за Кинезитерапия"
          → Booking Page (/zapitvane?procedure=kineziterapia)
            → Fill form → Submit
              → Success message
              → Email sent to clinic
```

### Flow 2: Direct Booking (Returning/Referred)

```
Direct URL or bookmark
  → Home Page
    → Click "Запазете час" (header CTA)
      → Booking Page (/zapitvane)
        → Select procedure → Fill form → Submit
```

### Flow 3: Quick Contact (Mobile)

```
Any Page
  → Tap phone number (header or footer)
    → Native phone dialer opens
  OR
  → Tap WhatsApp button
    → WhatsApp opens with pre-filled number
  OR
  → Tap Viber button
    → Viber opens with pre-filled number
```

### Flow 4: Research Pricing

```
Any Page
  → Navigate to Цени (/tseni)
    → Browse pricing table
      → Click "Запазете час" CTA
        → Booking Page
```

### Flow 5: Read Reviews → Build Trust → Book

```
Home Page (testimonials preview)
  → Click "Всички отзиви"
    → Reviews Page (/otzivi)
      → Read reviews
        → Navigate to Booking
```

### Flow 6: Submit a Review (Existing Client)

```
Reviews Page (/otzivi)
  → Scroll to review form
    → Fill name, rating, text
      → Submit
        → Email sent to clinic for approval
        → Success message shown
```

## Page Entry Points

| Page | How users arrive |
|------|-----------------|
| Home | Search, direct URL, social media, referral |
| Procedures | Home CTA, header nav, search |
| Procedure Detail | Procedures grid, search for specific therapy |
| Prices | Header nav, procedure detail CTA |
| Contact | Header nav, footer, "свържете се" links |
| Reviews | Home testimonials "see all", header nav |
| Booking | Header CTA, procedure detail CTA, contact page CTA |
| About | Header nav, trust-seeking visitors |
| Products | Header nav |

## Conversion Points

Every page should have at least one path to the booking page:
- **Home**: Hero CTA + CTA banner
- **Procedure Detail**: "Запазете час за [Procedure]" button
- **Prices**: Bottom CTA
- **Contact**: Booking form link + WhatsApp/Viber
- **Reviews**: CTA after reading reviews
- **About**: CTA section at bottom
