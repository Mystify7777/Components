# DESIGN_SYSTEM_RULES.md

This file is the **entry point** for the design system.
Read it fully before writing a single line of UI code. No exceptions.

Every section below contains a summary and a reference to the full specification.
When the summary and the referenced file conflict, the referenced file wins.

---

## Mandate

Every component must implement **both light and dark mode** — even if only one
is currently in use. Tokens must be defined for both surfaces from day one.
If someone decides to flip the theme switch in the future, they should not have
to touch a single component. The theming layer handles it; the component is
oblivious.

---

## Design Philosophy

Design systems are engineered ecosystems. Do not make isolated aesthetic decisions.

Every visual choice must connect to hierarchy, usability, consistency, scalability,
accessibility, motion, and responsiveness. Avoid randomness disguised as creativity.

Consistency scales. Novelty decays. Build systems, not screenshots.

---

## How to Use This Document

1. Read this file first. Understand the shape of the system.
2. Before building a component, open the relevant referenced files.
3. When in doubt about a decision, the referenced file has the answer.
4. Before shipping, run the checklist at the bottom of this file.

---

## FOUNDATIONS

The primitive layer. Every token, scale, and raw value lives here.
Components consume foundations through semantic tokens — never directly.

---

## Color

→ [`foundations/colors.md`](docs/design-system/foundations/colors.md)

Build from a single hue. Vary lightness and saturation across 11 stops (`50–950`).
`500` is the anchor. Map raw values to semantic tokens — components consume tokens,
never raw values. Required semantic roles: `bg`, `surface`, `surface-raised`,
`border`, `text`, `text-muted`, `primary`, `accent`, `destructive`, plus
`success`, `warning`, `danger`, `info`.

## Typography

→ [`foundations/typography.md`](docs/design-system/foundations/typography.md)

One font family. Four categories on a modular scale (ratio: `1.618`):
`caption ~10px` · `body 16px` · `heading ~26px` · `display ~42px`.
Two weights: `400` regular and `600–700` bold. Max line length `60–75ch`.

## Spacing

→ [`foundations/spacing.md`](docs/design-system/foundations/spacing.md)

Base unit `8px`. All spacing is a multiple: `4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.
`4px` is permitted for micro-adjustments only. If a value is not on the scale, it is wrong.

## Border Radius

→ [`foundations/radius.md`](docs/design-system/foundations/radius.md)

Five stops: `sm 4px` · `md 8px` · `lg 16px` · `xl 24px` · `full 9999px`.
Do not mix radius values within the same component family.

## Shadows & Elevation

→ [`foundations/shadows.md`](docs/design-system/foundations/shadows.md)

Shadows communicate z-position, not decoration. Five stops from `none` to `xl`.
In dark mode, lower shadow opacity and use a subtle border to signal elevation instead —
pure shadows disappear on dark backgrounds.

## Opacity

→ [`foundations/opacity.md`](docs/design-system/foundations/opacity.md)

Eight stops: `0 · 5% · 10% · 20% · 40% · 60% · 80% · 100%`.
Opacity communicates state and layer, not softness.
Never use opacity to fake a color — derive it from the scale.

## Icons

→ [`foundations/icons.md`](docs/design-system/foundations/icons.md)

Five sizes aligned to the type scale: `xs 12px` through `xl 32px`.
Single icon library, consistent stroke width, `currentColor` always.
Every icon is either decorative (`aria-hidden`) or meaningful (labelled).

## Z-Index

→ [`foundations/z-index.md`](docs/design-system/foundations/z-index.md)

Named layers only. No arbitrary numbers.
`base 0` · `raised 10` · `overlay 100` · `modal 200` · `toast 300` · `tooltip 400` · `max 9999`.

## Design Tokens

→ [`foundations/tokens.md`](docs/design-system/foundations/tokens.md)

Three layers: primitive → semantic → component. Components consume semantic tokens.
Never consume primitive tokens directly. Token names describe purpose, not appearance.

---

## LAYOUT

How components arrange themselves in space.

---

## Grid System

→ [`layout/grid-system.md`](docs/design-system/layout/grid-system.md)

12-column grid. Four layout variants: `contained`, `full-bleed`, `sidebar`, `centered`.
Never nest grids more than two levels deep.

## Containers

→ [`layout/containers.md`](docs/design-system/layout/containers.md)

Max-width `1280px`. Gutters `24px` mobile → `48px` desktop.
Content never stretches edge-to-edge. Gutters never collapse to zero.

## Responsiveness

→ [`layout/responsiveness.md`](docs/design-system/layout/responsiveness.md)

Mobile-first. Breakpoints: `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`.
Touch targets minimum `44×44px`. Responsiveness is foundational, never patched afterward.

## Density

→ [`layout/density.md`](docs/design-system/layout/density.md)

Three modes: `compact` (data-dense tools), `default` (standard product), `spacious` (marketing, onboarding).
Density changes padding and row height — never the type scale.
Implemented as a context (`data-density`), not a prop on individual components.

---

## INTERACTIONS

How components behave in response to user and system events.

---

## State System

→ [`interactions/states.md`](docs/design-system/interactions/states.md)

Six states every interactive component must define:
`default` · `hover` · `focus` · `disabled` · `error` · `loading`.

## State Priority

→ [`interactions/state-priority.md`](docs/design-system/interactions/state-priority.md)

When states conflict: `disabled` → `loading` → `error` → `focus` → `hover` → `active` → `default`.
Higher priority always wins.

## Focus States

→ [`interactions/focus-states.md`](docs/design-system/interactions/focus-states.md)

`2px solid var(--color-primary)`, `2px offset`, radius matches the element.
Applied on `:focus-visible` only. Never `outline: none` without a replacement.

## Error States

→ [`interactions/error-states.md`](docs/design-system/interactions/error-states.md)

Destructive color on border, label, and focus ring. Always pair color with an icon and text.
Full error type taxonomy (validation, network, permission, timeout, server, conflict) in the referenced file.

## Loading States

→ [`interactions/loading-states.md`](docs/design-system/interactions/loading-states.md)

Three variants: skeleton (layout-heavy), spinner (inline), progress bar (known duration).
Non-interactive during load. Skeletons must match exact dimensions of replaced content.

## Empty States

→ [`interactions/empty-states.md`](docs/design-system/interactions/empty-states.md)

Every major surface defines: loading · empty · error · success.
Empty states explain absence and guide the next action. Never show "No data."

## Success States

→ [`interactions/success-states.md`](docs/design-system/interactions/success-states.md)

Confirm the action completed. Use `--color-success`. Never auto-dismiss a success
state that required significant user effort.

## Motion

→ [`interactions/motion.md`](docs/design-system/interactions/motion.md)

Duration scale: `instant 50ms` · `fast 150ms` · `normal 250ms` · `slow 400ms`.
Easing: `ease-out` entrances, `ease-in` exits, `ease-in-out` state changes.
Animate `transform` and `opacity` only. Always respect `prefers-reduced-motion`.

---

## EXPERIENCE

How the system feels and communicates.

---

## Visual Language

→ [`experience/visual-language.md`](docs/design-system/experience/visual-language.md)

Precise, calm, premium, restrained. Confidence through clarity, not excess.
Surfaces layer from `bg → surface → surface-raised → overlay`.
Borders and shadows are interchangeable at any boundary — never use both together.

## Emphasis

→ [`experience/emphasis.md`](docs/design-system/experience/emphasis.md)

One primary focal point per section. Emphasis is created through contrast on color,
size, weight, and space — one axis at a time. Multi-axis contrast is reserved for
the single primary element only.

## Accessibility

→ [`experience/accessibility.md`](docs/design-system/experience/accessibility.md)

WCAG AA minimum. `4.5:1` for normal text, `3:1` for large text and UI components.
Full keyboard contracts, ARIA patterns, focus management rules, and `prefers-reduced-motion`
implementation in the referenced file.

## Microcopy

→ [`experience/microcopy.md`](docs/design-system/experience/microcopy.md)

Direct, human, calm, specific. Formula for buttons: `[verb] + [object]`.
Covers tone of voice, button labels, error messages, loading copy, confirmations,
empty states, placeholder text, and tooltips.

---

## PATTERNS

Reusable compositions for common UI scenarios.

---

## Forms

→ [`patterns/forms.md`](docs/design-system/patterns/forms.md)

Single-column default. Field width signals expected input length.
Validate on blur, not on keystroke. Never clear a form on a failed submission.

## Navigation

→ [`patterns/navigation.md`](docs/design-system/patterns/navigation.md)

Top nav, sidebar, bottom nav (mobile), tabs, and breadcrumbs.
Active state must be visually distinct from hover. Max 6 top-level items.

## Feedback

→ [`patterns/feedback.md`](docs/design-system/patterns/feedback.md)

Four types by prominence: inline message · toast · banner · alert dialog.
Error toasts never auto-dismiss. Alert dialogs are for destructive actions only.

## Overlays

→ [`patterns/overlays.md`](docs/design-system/patterns/overlays.md)

Modal (blocks interaction), drawer (side panel), popover (contextual, non-modal),
tooltip (hover label only). Focus trapped in modals and drawers.
Never open an overlay from inside another overlay.

## Data Display

→ [`patterns/data-display.md`](docs/design-system/patterns/data-display.md)

Tables, lists, cards, and stat blocks. Column alignment follows content type
(text left, numbers right). Virtualize lists over 100 items.
Stat block null state is `—`, never `0` for unloaded data.

## Error Types

→ [`patterns/error-types.md`](docs/design-system/patterns/error-types.md)

Taxonomy and recovery patterns for: validation, network, permission, not-found,
timeout, server, and conflict errors. Every error answers: what, why, and what next.

---

## GOVERNANCE

How the system sustains itself over time.

---

## AI Execution Rules

→ [`governance/ai-execution-rules.md`](docs/design-system/governance/ai-execution-rules.md)

Search for reusable primitives before creating. Prefer composition over duplication.
When conflicts arise: accessibility wins → usability → consistency → aesthetics.

## Component API Philosophy

→ [`governance/api-philosophy.md`](docs/design-system/governance/api-philosophy.md)

Predictable, minimal, composable, variant-driven. Prefer `variant="primary"` over
boolean prop explosions. APIs feel intentional, not improvisational.

## Conventions

→ [`governance/conventions.md`](docs/design-system/governance/conventions.md)

Naming, file structure, and coding conventions. Consistency here is what makes
the system legible to agents and humans alike.

## Naming

→ [`governance/naming.md`](docs/design-system/governance/naming.md)

Token names describe purpose, not appearance. `surface-primary` not `blue-dark`.

## Documentation

→ [`governance/documentation.md`](docs/design-system/governance/documentation.md)

Every component needs a Storybook file with 8 required stories: Default, Variants,
Sizes, All States, Error, Loading, Dark Mode, Responsive. JSDoc on all props.

## Performance

→ [`governance/performance.md`](docs/design-system/governance/performance.md)

Low re-render count, minimal layout shift, tree-shakeable exports.
A beautiful UI that melts the GPU is still a failure.

## Interaction Latency

→ [`governance/interaction-latency.md`](docs/design-system/governance/interaction-latency.md)

Hover feedback under `50ms`. Click acknowledgement under `100ms`.
Never leave a user action without visible feedback.

## Design Debt

→ [`governance/design-debt.md`](docs/design-system/governance/design-debt.md)

Temporary deviations require rationale, must stay localized, and must include
a cleanup plan. Do not normalize workaround styling.

## Primitives

→ [`governance/primitives.md`](docs/design-system/governance/primitives.md)

Raw values that underpin the token system. Never consumed directly by components.

---

## PRE-SHIP CHECKLIST

Run this before any component is considered production-ready.

### Tokens & Theming

- [ ] All color values use semantic tokens — no raw hex or scale values
- [ ] Light and dark mode are both implemented and visually tested
- [ ] No hardcoded spacing — all values are multiples of `8px`
- [ ] Typography uses the modular scale

### States

- [ ] All six interactive states exist: default, hover, focus, disabled, error, loading
- [ ] State priority order is correctly implemented (see `interactions/state-priority.md`)
- [ ] Error messages are linked via `aria-describedby`
- [ ] Loading state is non-interactive and has a timeout or error fallback

### Motion

- [ ] Animations use only `transform` and `opacity`
- [ ] `prefers-reduced-motion` is respected with a zero-motion fallback
- [ ] No looping animations that weren't explicitly designed

### Accessibility

- [ ] Keyboard navigation works without a mouse
- [ ] Focus ring is visible in both light and dark mode
- [ ] ARIA labels present where semantic HTML is insufficient
- [ ] Color is never the only signal — always paired with icon or text
- [ ] Contrast meets WCAG AA (`4.5:1` text, `3:1` UI components)

### Layout & Responsiveness

- [ ] Touch targets are at least `44×44px`
- [ ] Component renders correctly at `sm`, `md`, and `lg` breakpoints
- [ ] Z-index uses named layer tokens — no arbitrary numbers

### Documentation

- [ ] Storybook file exists with all 8 required stories
- [ ] All props have JSDoc comments
- [ ] Accessibility notes are documented

---

## FINAL PRINCIPLE

Design systems are infrastructure.

A component should feel intentional, scalable, maintainable, performant, and cohesive.

Not like it was assembled during a caffeine hallucination at 2:13 AM
after discovering `backdrop-blur` for the first time.

---

*This document is the index. The referenced files are the law. The component is the execution.*
