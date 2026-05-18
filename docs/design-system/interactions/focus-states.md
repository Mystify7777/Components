# FOCUS RING SPEC

"Visible ring, never hidden" is a principle. This is the implementation.

Every interactive element must produce an identical, predictable focus ring.
An agent building a button and an agent building an input should produce the
same ring. Consistency here is non-negotiable for accessibility.

## Spec

```table
outline        : 2px solid var(--color-primary)
outline-offset : 2px
border-radius  : matches the element's own --radius-* token
```

## Rules

- **Never** use `outline: none` or `outline: 0` without providing an
  explicit custom focus style as a replacement.
- Focus rings must be visible in both light and dark mode. If the primary
  color blends with the surface, add a 1px white/dark offset ring as a
  separator:

  ```css
  box-shadow: 0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-primary)
  ```

- Focus styles apply on `:focus-visible` only — not `:focus` — so mouse
  users are not affected but keyboard users always see the ring.
- Do not reduce ring opacity for aesthetics. The ring is functional, not
  decorative.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
