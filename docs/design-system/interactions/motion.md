# MOTION SYSTEM

Motion should clarify interaction. Animation should:

- guide attention
- communicate hierarchy
- reinforce feedback

### Duration Scale


| Token               | Value   | Use                                |
| ------------------- | ------- | ---------------------------------- |
| `--duration-instant`| `50ms`  | Micro feedback (checkbox, toggle)  |
| `--duration-fast`   | `150ms` | Hover states, focus rings          |
| `--duration-normal` | `250ms` | Entrances, exits, transitions      |
| `--duration-slow`   | `400ms` | Page-level, complex sequences      |

### Easing

- **Entrances**: `ease-out` — starts fast, decelerates into place.
- **Exits**: `ease-in` — starts slow, accelerates away.
- **State changes**: `ease-in-out` — symmetric, reads as intentional.
- **Spring**: use Framer Motion's spring for elements that feel physical
  (drawers, drag, tooltips). Keep stiffness high, damping moderate.

### Motion Rules

Avoid:

- decorative motion spam
- excessive duration
- unnecessary floating effects
- constant looping animations

Prefer:

- transform-based animations
- opacity transitions
- spring systems
- GPU-friendly motion

Respect:

- `prefers-reduced-motion` media query

---

## MOTION PERFORMANCE BUDGET

Motion exists to improve clarity, not destroy responsiveness.

Avoid:

- multiple simultaneous blur layers
- excessive `backdrop-filter`
- giant animated shadows
- layout-triggering animations
- full-screen continuous animation loops

Prefer:

- `transform`
- `opacity`
- GPU-friendly motion
- isolated animation layers

---

## Performance Rules

- Animations should maintain smooth rendering on mid-range hardware.
- Motion must never block interaction responsiveness.
- Expensive effects must degrade gracefully on weaker devices.
- Large blur surfaces should be minimized and isolated.

A visually impressive UI that drops frames under normal usage is a failure.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
