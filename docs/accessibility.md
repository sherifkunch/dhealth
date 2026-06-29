# Accessibility

## Standard

WCAG 2.1 Level AA compliance.

## Requirements

### Perceivable

| Requirement | Implementation |
|-------------|---------------|
| Text alternatives | All `<Image>` components have descriptive `alt` text in Bulgarian |
| Captions/transcripts | N/A — no audio/video content |
| Adaptable | Semantic HTML structure: `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>` |
| Distinguishable | 4.5:1 contrast ratio for normal text, 3:1 for large text. Color is never the sole indicator |

### Operable

| Requirement | Implementation |
|-------------|---------------|
| Keyboard accessible | All interactive elements reachable and operable via keyboard |
| Skip navigation | Skip-to-content link as first focusable element in layout |
| Focus visible | `focus-visible:ring-2 focus-visible:ring-ring` on all interactive elements |
| Focus order | Logical tab order following visual layout |
| No keyboard traps | Sheet/dialog can be closed with Escape key |
| Timing | No auto-playing content, no time limits |

### Understandable

| Requirement | Implementation |
|-------------|---------------|
| Language | `<html lang="bg">` declared on root |
| Predictable | Consistent navigation across all pages |
| Input assistance | Form labels associated with inputs, validation errors announced, error messages in Bulgarian |

### Robust

| Requirement | Implementation |
|-------------|---------------|
| Parsing | Valid HTML output |
| Name, Role, Value | ARIA landmarks with Bulgarian labels |

## ARIA Landmarks

| Landmark | Element | Label |
|----------|---------|-------|
| Banner | `<header>` | — (implicit) |
| Navigation (main) | `<nav>` | `aria-label="Основна навигация"` |
| Navigation (mobile) | `<nav>` | `aria-label="Мобилна навигация"` |
| Navigation (footer) | `<nav>` | `aria-label="Навигация в долния колонтитул"` |
| Navigation (breadcrumb) | `<nav>` | `aria-label="Навигационна пътека"` |
| Main | `<main id="main-content">` | — (implicit) |
| Content Info | `<footer>` | — (implicit) |

## Form Accessibility

1. Every `<input>` and `<textarea>` has a visible `<label>` element
2. Required fields marked with `required` attribute
3. Validation errors shown as text below the field (not color-only)
4. Error messages use `aria-invalid="true"` and `aria-describedby`
5. Form submission feedback via toast notification (announced to screen readers)
6. All form controls have sufficient touch target size (minimum 44x44px)

## Testing Checklist

- [ ] Tab through every page — all interactive elements reachable
- [ ] Escape key closes mobile nav sheet
- [ ] Screen reader announces page title on navigation
- [ ] Images convey meaning via alt text
- [ ] Forms can be completed without a mouse
- [ ] Color contrast passes (check with browser DevTools)
- [ ] Focus indicators visible on all interactive elements
- [ ] No content hidden from screen readers unless decorative
- [ ] Skip-to-content link works and is visible on focus
