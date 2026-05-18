# 13. RESPONSIVENESS

All components are **mobile-first** by default.

## Rules

- Build mobile-first. Stack columns vertically by default, expand at `md`.
- Gutters scale with the spacing system. No custom values.
- Full-bleed sections (hero, image banners) may break the container for
  backgrounds only — content inside remains contained.
- Never nest grids more than two levels deep.

### Breakpoints

| Token   | Width   |
| ------- | ------- |
| `sm`    | `640px` |
| `md`    | `768px` |
| `lg`    | `1024px`|
| `xl`    | `1280px`|
| `2xl`   | `1536px`|

Design mobile-first.

Support:

- small mobile
- tablet
- laptop
- desktop
- ultra-wide

Do not patch responsiveness afterward.

Responsiveness must be foundational.

**Touch targets must be a minimum of `44×44px`.** Never sacrifice this for density.

---

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
