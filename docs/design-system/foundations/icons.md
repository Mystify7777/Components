# ICON SYSTEM

Icons are atoms. They follow the same token discipline as everything else.

## Sizing

Align icon size to the text it sits beside. Never pick an arbitrary pixel value.

| Token          | Size    | Paired with          |
| -------------- | ------- | -------------------- |
| `--icon-xs`    | `12px`  | Caption text         |
| `--icon-sm`    | `16px`  | Body text, inputs    |
| `--icon-md`    | `20px`  | Buttons, nav items   |
| `--icon-lg`    | `24px`  | Section headers      |
| `--icon-xl`    | `32px`  | Feature icons, empty states |

## Stroke & Style

- Use a **single icon library** across the entire system. Do not mix sets.
- Maintain consistent stroke width — never mix filled and outlined icons
  within the same context.
- Icons must use `currentColor` so they inherit text color automatically
  and respond to theme changes without extra tokens.

## Accessibility

Every icon must be one of two things — never ambiguous:

- **Decorative**: hidden from screen readers with `aria-hidden="true"`.
- **Meaningful**: given a label via `aria-label` on the element, or a
  visually hidden sibling `<span>`.

An icon-only button with no label is an accessibility failure.

## Rules

- Never scale icons with arbitrary `width`/`height` values. Use the token scale.
- Maintain `4px` minimum gap between an icon and its label text.
- In dark mode, icons inherit color from the token system — no separate icon
  color tokens needed if `currentColor` is used correctly.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
