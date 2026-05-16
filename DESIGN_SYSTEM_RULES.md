# DESIGN_SYSTEM_RULES.md

This file defines the mandatory design philosophy and implementation standards for all UI generated inside this repository.

These rules exist to maintain:
- visual consistency
- scalability
- accessibility
- maintainability
- performance
- system cohesion

Do not treat components as isolated visuals.
Every component must belong to a unified system.

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

Start with:
- one primary hue

Then vary:
- lightness
- saturation
- opacity

This creates a cohesive monochromatic foundation.

---

## Contrast System

Introduce:
- complementary colors for contrast
- neighboring analogous colors for harmony
- semantic colors for states

### Required Semantic Colors
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

## Surface Hierarchy

Define:
- background
- elevated surface
- interactive surface
- hover surface
- active surface
- border colors
- muted surfaces

Every layer should visually communicate depth and hierarchy.

---

# 3. TYPOGRAPHY SYSTEM

Typography defines structure.

Do not use random font sizes.

---

## Modular Scale

All typography must follow a modular scale.

Preferred ratios:
- 1.125
- 1.2
- 1.333
- 1.618 (golden ratio)

Maintain consistent progression.

---

## Typography Categories

Required hierarchy:

| Category | Purpose |
|---|---|
| Display | Hero sections |
| Heading | Section titles |
| Subheading | Supporting hierarchy |
| Body | Main readable content |
| Caption | Secondary information |
| Label | Inputs/buttons/UI labels |

---

## Font Rules

Prefer:
- one primary font family
- one optional monospace font

Maintain:
- consistent line-height
- readable letter spacing
- proper font weights

Avoid:
- excessive font families
- decorative fonts
- inconsistent text rhythm

---

## Readability Standards

Text must remain readable across:
- mobile devices
- ultra-wide screens
- low brightness
- dark mode
- reduced contrast environments

---

# 4. SPACING SYSTEM

Spacing creates rhythm.

Use a consistent spacing scale.

Preferred base unit:
- 4px
- 8px

Examples:
- 4
- 8
- 12
- 16
- 24
- 32
- 40
- 48
- 64

Do not use arbitrary spacing values unless absolutely necessary.

---

# 5. RADIUS SYSTEM

Corner radius must follow a predictable scale.

Example:
- xs
- sm
- md
- lg
- xl
- 2xl
- full

Avoid mixing unrelated radius values.

Radius should communicate:
- hierarchy
- softness
- interaction type

---

# 6. SHADOW SYSTEM

Shadows should communicate depth, not chaos.

Define:
- subtle elevation
- medium elevation
- modal elevation
- glow effects
- focus shadows

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
- colors
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

---

## Atoms

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

---

## Molecules

Combinations of atoms:
- cards
- form groups
- nav items
- search bars
- stat blocks

Molecules establish reusable interaction patterns.

---

## Organisms

Complex assemblies:
- dashboards
- hero sections
- sidebars
- authentication flows
- settings panels

Organisms should emerge from reusable systems.

Avoid building organisms from random one-off styling.

---

# 9. LIGHT & DARK MODE

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

# 10. ACCESSIBILITY

Accessibility is not optional decoration.

All UI must support:
- keyboard navigation
- focus visibility
- screen readers
- sufficient contrast
- reduced motion preferences

Interactive elements must remain usable without animations.

---

# 11. RESPONSIVENESS

Design mobile-first.

Support:
- small mobile
- tablet
- laptop
- desktop
- ultra-wide

Do not patch responsiveness afterward.

Responsiveness must be foundational.

---

# 12. MOTION SYSTEM

Motion should clarify interaction.

Animation should:
- guide attention
- communicate hierarchy
- reinforce feedback

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
- prefers-reduced-motion

---

# 13. COMPONENT ENGINEERING RULES

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

# 14. PERFORMANCE STANDARDS

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

# 15. CONSISTENCY OVER NOVELTY

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

# 16. DOCUMENTATION REQUIREMENTS

Every major component should include:
- purpose
- usage
- props
- accessibility notes
- responsive behavior
- performance considerations
- variant documentation

---

# 17. FINAL PRINCIPLE

Design systems are infrastructure.

Build systems, not screenshots.

A component should feel:
- intentional
- scalable
- maintainable
- performant
- cohesive

Not like it was assembled during a caffeine hallucination at 2:13 AM after discovering backdrop-blur for the first time.
