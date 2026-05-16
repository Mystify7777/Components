# ACCESSIBILITY

Accessibility is not optional decoration.

It is not a post-launch audit. It is not a checklist item.
It is a design constraint that shapes every decision from the first token.

---

## Contrast Ratios (WCAG 2.1)

Minimum targets. Meet AA. Aim for AAA where possible.

| Content type              | AA minimum | AAA target |
| ------------------------- | ---------- | ---------- |
| Normal text (< 18px)      | 4.5 : 1    | 7 : 1      |
| Large text (≥ 18px bold)  | 3 : 1      | 4.5 : 1    |
| UI components & borders   | 3 : 1      | —          |
| Decorative elements       | no minimum | —          |
| Placeholder text          | 4.5 : 1    | —          |
| Disabled elements         | no minimum | —          |

`--color-text` on `--color-bg` must pass 4.5 : 1 in both light and dark mode.
`--color-primary` buttons must pass 3 : 1 for the button border, and 4.5 : 1
for the label text against the button background.

Test contrast at every semantic color pair: text on surface, text on primary,
text on destructive, text on success, text on warning.

Never rely on color-contrast tools alone — simulate color blindness too
(deuteranopia, protanopia, tritanopia). Semantic meaning must survive
all three simulations.

---

## Keyboard Navigation

Every interactive element must be fully operable without a pointing device.

### Required support for all interactive elements

- Focusable via `Tab` key
- Activatable via `Enter` or `Space` (where appropriate)
- Visible focus ring on `:focus-visible` (see `focus-states.md`)
- Logical tab order that matches visual reading order

### Component-level keyboard contracts

| Component       | Keys required                                             |
| --------------- | --------------------------------------------------------- |
| Button          | `Enter`, `Space` to activate                              |
| Link            | `Enter` to follow                                         |
| Checkbox        | `Space` to toggle                                         |
| Radio group     | `Arrow` keys to navigate, `Space` to select               |
| Select / dropdown | `Arrow` keys, `Enter` to confirm, `Escape` to dismiss  |
| Modal           | `Escape` to close, focus trapped inside while open        |
| Combobox        | `Arrow` keys, `Enter` to select, `Escape` to dismiss      |
| Tabs            | `Arrow` keys to navigate between tabs                     |
| Tooltip         | Appears on focus, dismissed on `Escape` or blur           |
| Slider          | `Arrow` keys for fine, `Page Up/Down` for coarse          |
| Date picker     | `Arrow` keys for day navigation, `Enter` to confirm       |

### Focus management rules

- When a modal opens, focus must move to the first focusable element inside it.
- When a modal closes, focus must return to the element that triggered it.
- Focus must be trapped inside modals and drawers while they are open.
- Never move focus unexpectedly — only on explicit user action.

---

## ARIA

Use ARIA only when semantic HTML cannot express the role or state.
A `<button>` is always better than a `<div role="button">`.

### Required ARIA patterns

| Situation                              | Required attribute                         |
| -------------------------------------- | ------------------------------------------ |
| Icon-only button                       | `aria-label="Descriptive label"`           |
| Toggle button                          | `aria-pressed="true/false"`                |
| Expandable section                     | `aria-expanded="true/false"`               |
| Loading state                          | `aria-busy="true"` on the region           |
| Error message linked to input          | `aria-describedby="error-id"` on input     |
| Decorative icon                        | `aria-hidden="true"`                       |
| Live region (toasts, status updates)   | `aria-live="polite"` (or `assertive`)      |
| Modal dialog                           | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Progress indicator                     | `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| Required form field                    | `aria-required="true"`                     |
| Invalid field                          | `aria-invalid="true"`                      |

### What to avoid

- Do not use `aria-label` when visible text already describes the element.
- Do not override semantic roles with `role=""` unless necessary.
- Do not use `aria-hidden="true"` on elements that can receive focus.
- Do not use `aria-live="assertive"` for non-urgent updates — it interrupts
  whatever the screen reader is currently announcing.

---

## Color Independence

Meaning must never be communicated by color alone.

Pair color with at least one of:

- Text label
- Icon
- Pattern or shape
- Position or grouping

Examples:

- Error state: red border **and** an error icon **and** error text.
- Success toast: green **and** a checkmark icon **and** success label.
- Required field: asterisk **and** "Required" in the label, not red text alone.

---

## Reduced Motion

Respect `prefers-reduced-motion: reduce`.

Every animated component must have a zero-motion fallback.
The fallback must be functional — not just less animated, but fully usable
with no animation whatsoever.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Do not use `animation: none` — it can cause layout shifts. Use `0.01ms`
so transitions fire instantly without visual jump.

---

## Screen Readers

- All form inputs must have a visible `<label>` or `aria-label`.
- Images that carry meaning need `alt` text. Decorative images need `alt=""`.
- Tables must use `<th scope="col/row">` for headers.
- Page sections must use landmark roles: `<main>`, `<nav>`, `<aside>`, `<header>`, `<footer>`.
- Dynamically inserted content must be announced via `aria-live` regions.
- Never use `display: none` to visually hide focusable content —
  use the visually-hidden utility class instead:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```
