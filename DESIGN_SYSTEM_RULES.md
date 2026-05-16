# DESIGN_SYSTEM_RULES.md

This file is the **visual contract** for every component built in this repository.
Read it fully before writing a single line of UI code. No exceptions.

These rules maintain:
- visual consistency
- scalability
- accessibility
- maintainability
- performance
- system cohesion

Do not treat components as isolated visuals.
Every component must belong to a unified system.

---

## Mandate

Every component must implement **both light and dark mode** — even if only one
is currently in use. Tokens must be defined for both surfaces from day one.
If someone decides to flip the theme switch in the future, they should not have
to touch a single component. The theming layer handles it; the component is
oblivious.

---

# 1. DESIGN PHILOSOPHY

Design systems are engineered ecosystems.

Do not make isolated aesthetic decisions.

Every choice must connect to:
- hierarchy
- usability
- consistency
- scalability
- accessibility
- motion
- responsiveness

Avoid randomness disguised as creativity.

---

# 2. COLOR SYSTEM

## Build Around a Primary Hue

Start with a **single hue**. Do not pick a palette — derive one.

Vary **lightness and saturation** across steps to produce a monochromatic scale.
This gives you cohesion for free. A good scale has at minimum 9 stops:

```
50 · 100 · 200 · 300 · 400 · 500 · 600 · 700 · 800 · 900 · 950
```

`500` is your anchor. Everything else radiates from it.

---

## Color Accents

- **Complementary** (opposite on the wheel): use for high-contrast CTAs, alerts,
  and anything that must demand attention.
- **Analogous triad** (three neighbours): use for secondary actions, tags,
  badges, and decorative differentiation.

Do not introduce colors outside these relationships without explicit justification.

---

## Semantic Token Mapping

Map raw scale values to **semantic tokens**. Components consume tokens, never
raw values. This is what makes theme switching trivial.

| Token                  | Light             | Dark              |
| ---------------------- | ----------------- | ----------------- |
| `--color-bg`           | `50`              | `950`             |
| `--color-surface`      | `100`             | `900`             |
| `--color-surface-raised` | `white`         | `800`             |
| `--color-border`       | `200`             | `700`             |
| `--color-text`         | `900`             | `50`              |
| `--color-text-muted`   | `500`             | `400`             |
| `--color-primary`      | `500`             | `400`             |
| `--color-primary-hover`| `600`             | `300`             |
| `--color-accent`       | complementary     | complementary     |
| `--color-destructive`  | red scale         | red scale         |

### State Colors

Every interactive element needs all four:

- **Default** — base token
- **Hover** — one step darker (light) / one step lighter (dark)
- **Focus** — primary with a visible ring, never hidden
- **Disabled** — muted text, muted border, `cursor-not-allowed`, no opacity hacks

---

## Color Rules

Do NOT:
- pick arbitrary colors
- overuse vibrant accents
- mix unrelated palettes
- use pure black or pure white excessively

Prefer:
- layered neutrals
- restrained accents
- controlled contrast
- readable surfaces

---

## Required Semantic Colors

- success
- warning
- danger
- info

Semantic colors must remain distinguishable in:
- light mode
- dark mode
- low brightness
- reduced contrast environments

---

# 3. TYPOGRAPHY SYSTEM

Typography defines structure. Do not use random font sizes.

## Modular Scale

Do not pick sizes arbitrarily. Use a **modular scale** with a fixed ratio.
The golden ratio (`1.618`) is preferred. Alternatively `1.5` (perfect fifth) or
`1.25` (major third) are acceptable.

Starting from a `16px` base:

| Name      | Multiplier | Approx size |
| --------- | ---------- | ----------- |
| `caption` | `÷ 1.618`  | `~10px`     |
| `body`    | `× 1`      | `16px`      |
| `heading` | `× 1.618`  | `~26px`     |
| `display` | `× 2.618`  | `~42px`     |

Four categories. One font family. No exceptions without a design reason.

## Typography Rules

- Line height: `1.5` for body, `1.2` for headings and display.
- Letter spacing: tighten headings (`-0.02em`), loosen captions (`+0.04em`).
- Max line length: `60–75ch` for body text. Never let prose stretch full width.
- Font weight: two weights maximum — regular (`400`) and semi-bold/bold
  (`600–700`). A third weight is a luxury, not a default.

## Readability Standards

Text must remain readable across:
- mobile devices
- ultra-wide screens
- low brightness
- dark mode
- reduced contrast environments

---

# 4. SPACING SYSTEM

Spacing creates rhythm. Use a consistent spacing scale.

**Base unit: `8px`**

All spacing is a multiple of it:

```
4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128
```

(`4px` is permitted for micro-adjustments like icon gaps and border offsets.)

Padding, margin, gap, and inset all come from this scale.
If a value is not on the scale, it is wrong.

---

# 5. BORDER RADIUS SYSTEM

Radius follows the same discipline as spacing — pick a unit and stack it.

| Token          | Value   | Use                          |
| -------------- | ------- | ---------------------------- |
| `--radius-sm`  | `4px`   | Chips, badges, inputs        |
| `--radius-md`  | `8px`   | Buttons, cards, dropdowns    |
| `--radius-lg`  | `16px`  | Modals, panels, sheets       |
| `--radius-xl`  | `24px`  | Featured cards, hero elements|
| `--radius-full`| `9999px`| Pills, avatars, toggles      |

Do not mix radius values within the same component family.

Radius should communicate:
- hierarchy
- softness
- interaction type

---

# 6. ELEVATION & SHADOW SYSTEM

Shadows communicate **z-position**, not decoration. Use them to answer:
"Is this surface above or below the one behind it?"

| Token              | Usage                             |
| ------------------ | --------------------------------- |
| `--shadow-none`    | Flat surfaces, tables, inputs     |
| `--shadow-sm`      | Subtle cards, list items          |
| `--shadow-md`      | Raised cards, dropdowns           |
| `--shadow-lg`      | Modals, command palettes          |
| `--shadow-xl`      | Toasts, floating action buttons   |

In dark mode, **lower the shadow opacity** and consider a subtle inner glow or
border to signal elevation instead — pure shadows disappear on dark backgrounds.

Avoid:
- muddy shadows
- excessive blur
- neon overload
- stacked shadow spam

Prefer:
- soft layered shadows
- controlled opacity
- realistic elevation

---

# 7. DESIGN TOKENS

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

# 8. ATOMS → MOLECULES → ORGANISMS

Follow proper design hierarchy.

### Atoms

Fundamental primitives:
- colors
- typography
- spacing
- radius
- icons
- shadows
- buttons
- inputs

Atoms must remain reusable and predictable.

### Molecules

Combinations of atoms:
- cards
- form groups
- nav items
- search bars
- stat blocks

Molecules establish reusable interaction patterns.

### Organisms

Complex assemblies:
- dashboards
- hero sections
- sidebars
- authentication flows
- settings panels

Organisms should emerge from reusable systems.

Avoid building organisms from random one-off styling.

---

# 9. MOTION SYSTEM

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

# 10. Z-INDEX SYSTEM

Name your layers. Do not use arbitrary numbers.

```
--z-base       :   0   (normal document flow)
--z-raised     :  10   (slightly elevated: cards, dropdowns)
--z-overlay    : 100   (drawers, side sheets)
--z-modal      : 200   (dialogs, command palettes)
--z-toast      : 300   (notifications, alerts)
--z-tooltip    : 400   (tooltips, popovers)
--z-max        : 9999  (emergency override — use sparingly)
```

If a component needs a value not on this scale, question the design first.

---

# 11. LIGHT & DARK MODE

ALL components must support:
- light mode
- dark mode

Even if only one mode is currently used.

Future adaptability is mandatory.

Do not hardcode colors directly into components.

Use semantic tokens.

Example:
- background-primary
- text-muted
- surface-elevated

NOT:
- #ffffff
- #000000

Avoid future archaeological excavation refactors.

---

# 12. ACCESSIBILITY

Accessibility is not optional decoration.

All UI must support:
- keyboard navigation
- focus visibility
- screen readers
- sufficient contrast
- reduced motion preferences

Interactive elements must remain usable without animations.

---

# 13. RESPONSIVENESS

All components are **mobile-first** by default.

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

# 14. COMPONENT ENGINEERING RULES

Components must be:
- reusable
- composable
- predictable
- accessible
- documented

Avoid:
- giant prop APIs
- deeply nested logic
- visual inconsistency
- duplicated styles

Prefer:
- composition
- variants
- token-driven styling
- modular architecture

---

# 15. PERFORMANCE STANDARDS

Optimize for:
- low re-render count
- minimal layout shift
- reduced bundle size
- tree-shakeable exports
- efficient animations

Avoid:
- unnecessary dependencies
- repaint-heavy effects
- animation-induced lag
- massive client-side overhead

A beautiful UI that melts the GPU is still a failure.

---

# 16. CONSISTENCY OVER NOVELTY

Consistency scales.
Novelty decays.

Do not reinvent:
- spacing
- typography
- shadows
- animation curves
- interaction patterns

The system should feel unified across all components.

---

# 17. DOCUMENTATION REQUIREMENTS

Every major component should include:
- purpose
- usage examples
- props
- accessibility notes
- responsive behavior
- performance considerations
- variant documentation

---

# 18. PRE-SHIP CHECKLIST

Before any component is considered production-ready, verify:

- [ ] All color values use semantic tokens, not raw scale values
- [ ] Light and dark mode are both implemented and tested
- [ ] Spacing values are multiples of `8px`
- [ ] Typography uses the modular scale
- [ ] All four interactive states exist: default, hover, focus, disabled
- [ ] `prefers-reduced-motion` is respected
- [ ] Animations use only `transform` and `opacity`
- [ ] All z-index values use named layer tokens
- [ ] Touch targets are at least `44×44px`
- [ ] Keyboard navigation works without a mouse
- [ ] ARIA labels are present where semantic HTML is insufficient
- [ ] The component renders correctly at `sm`, `md`, and `lg` breakpoints

---

# 19. FINAL PRINCIPLE

Design systems are infrastructure.

Build systems, not screenshots.

A component should feel:
- intentional
- scalable
- maintainable
- performant
- cohesive

Not like it was assembled during a caffeine hallucination at 2:13 AM after discovering backdrop-blur for the first time.

---

*This document is the law. The component is the execution.*
