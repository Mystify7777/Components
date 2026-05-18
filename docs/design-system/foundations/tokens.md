# DESIGN TOKENS

All visual decisions should map to reusable tokens.

Required token groups:

- colors (with semantic mappings)
- spacing
- typography
- radius
- shadows
- motion
- z-index
- opacity

Never hardcode repeated values.

---

## TOKEN ARCHITECTURE

Tokens exist in three layers.

## Primitive Tokens

Raw values.

Examples:

- `blue-500`
- `gray-900`
- `spacing-4`

Primitive tokens should never be consumed directly by components.

---

## Semantic Tokens

Purpose-driven mappings.

Examples:

- `surface-primary`
- `text-muted`
- `border-subtle`
- `surface-elevated`

Semantic tokens abstract implementation details from components.

Components consume semantic tokens, not primitives.

---

## Component Tokens

Component-scoped abstractions.

Examples:

- `button-primary-bg`
- `card-shadow-hover`
- `input-focus-ring`

Component tokens should map back to semantic tokens whenever possible.

---

## Rules

- Components must never consume primitive tokens directly.
- Semantic tokens are the default interface layer.
- Component tokens are permitted only when reuse or abstraction justifies them.
- Token naming must describe purpose, not appearance.

Good:

- `surface-primary`
- `text-muted`

Bad:

- `blue-dark`
- `main-gray`

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
