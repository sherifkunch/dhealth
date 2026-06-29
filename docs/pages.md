# Pages

## Route Map

| Route | File | Page Title | Description |
|-------|------|-----------|-------------|
| `/` | `src/app/page.tsx` | DHealth — Кинезитерапия & Физиотерапия в София | Home page |
| `/protseduri` | `src/app/protseduri/page.tsx` | Процедури | Procedures listing |
| `/protseduri/[slug]` | `src/app/protseduri/[slug]/page.tsx` | [Procedure Name] | Procedure detail |
| `/produkti` | `src/app/produkti/page.tsx` | Продукти | Products catalog |
| `/tseni` | `src/app/tseni/page.tsx` | Цени | Pricing table |
| `/za-nas` | `src/app/za-nas/page.tsx` | За нас | About page |
| `/kontakti` | `src/app/kontakti/page.tsx` | Контакти | Contact page |
| `/otzivi` | `src/app/otzivi/page.tsx` | Отзиви | Reviews page |
| `/zapitvane` | `src/app/zapitvane/page.tsx` | Запазете час | Booking request |

## Page Specifications

### Home (`/`)

**Sections (top to bottom):**

1. **Hero** — Gradient background, practitioner name/title overline, "Кинезитерапия & Физиотерапия" heading, tagline paragraph, two CTA buttons (primary: "Запазете час", outline: "Нашите процедури")
2. **Stats** — 3-4 stat cards in a row: "12+ процедури", "500+ доволни клиенти", "5+ години опит"
3. **Featured Procedures** — Section heading "Какво предлагаме?", grid of 6 ProcedureCards (procedures where `featured: true`), "Виж всички" link
4. **CTA Banner** — Accent background, "Готови ли сте за промяна?", booking button
5. **Testimonials** — Section heading "Какво казват нашите клиенти", 3 ReviewCards, "Всички отзиви" link
6. **Contact Preview** — Quick address, phone, hours with map thumbnail

### Procedures (`/protseduri`)

- `PageHeader`: title "Нашите процедури", description about services
- Grid of 12 `ProcedureCard` components
- Responsive: 1 col → 2 cols (`sm`) → 3 cols (`lg`)

### Procedure Detail (`/protseduri/[slug]`)

- `PageHeader` with breadcrumbs: Начало > Процедури > [Name]
- Hero image (full-width or left-aligned)
- Full description (multi-paragraph)
- Benefits as styled list or badge grid
- Duration and price info
- CTA: "Запазете час за [Name]" → `/zapitvane?procedure=[slug]`
- Related procedures: 2-3 other ProcedureCards

### Prices (`/tseni`)

- `PageHeader`: title "Цени"
- `PricingTable` with categories: Консултации, Тренировки, Антицелулитни процедури, Допълнителни
- Package deals highlighted with accent background
- Note: "Цените са ориентировъчни."
- Bottom CTA: booking button

### Contact (`/kontakti`)

- `PageHeader`: title "Контакти"
- Two-column layout (stacks on mobile):
  - Left: `ContactForm`
  - Right: contact info cards, `GoogleMap`, WhatsApp/Viber buttons, `WorkingHours`

### Reviews (`/otzivi`)

- `PageHeader`: title "Отзиви"
- Grid of `ReviewCard` components (all reviews from data)
- `ReviewForm` at bottom for submitting new reviews

### Booking (`/zapitvane`)

- `PageHeader`: title "Запазете час"
- `BookingForm` with procedure pre-selection from URL
- Alternative: WhatsApp/Viber direct contact section
- Note: "Ще се свържем с вас в рамките на 24 часа."

### About (`/za-nas`)

- `PageHeader`: title "За нас"
- Two-column: photo + biography
- Qualifications list
- Philosophy section
- CTA at bottom

### Products (`/produkti`)

- `PageHeader`: title "Продукти"
- Category tabs for filtering
- Product card grid
- Empty state if no products: message + contact link

### 404 (`not-found.tsx`)

- Large "404" text in primary color
- "Страницата не е намерена" message
- "Към началната страница" button
