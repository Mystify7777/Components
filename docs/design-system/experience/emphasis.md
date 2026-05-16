# EMPHASIS SYSTEM

Emphasis is not decoration. It is hierarchy made visible.

Every interface has a job. Emphasis ensures the user knows what that job is
before they read a single word.

---

## The Rule

**One primary focal point per section. No exceptions.**

If everything is emphasized, nothing is. Competing focal points produce
visual noise, not visual clarity.

Ask before you build: *what is the single most important thing on this surface?*
That thing gets primary emphasis. Everything else is secondary or muted.

---

## Emphasis Levels

### Primary

The most important element on a surface. There should be exactly one.

- Highest contrast text or color
- Largest type size from the modular scale
- Most visual weight (bolder stroke, filled button, elevated surface)
- Surrounded by the most whitespace

Examples: CTA button, page headline, primary action in a modal.

### Secondary

Supporting interactions and content. There can be several.

- Mid-contrast text (`--color-text-muted` or body size)
- Outlined or ghost button variants
- Card surfaces with `--shadow-sm`

Examples: secondary actions, sub-headings, supporting labels.

### Muted

Informational or decorative content. Low priority.

- `--color-text-muted` at reduced opacity
- Caption-scale typography
- `--shadow-none` surfaces
- No interactive affordance unless hovered

Examples: timestamps, metadata, helper text, disabled states.

---

## Emphasis Through Contrast

Contrast is the mechanism of emphasis. There are four axes:

| Axis       | High emphasis               | Low emphasis                  |
| ---------- | --------------------------- | ----------------------------- |
| **Color**  | `--color-primary`, accent   | `--color-text-muted`, neutral |
| **Size**   | `display`, `heading`        | `caption`, `body`             |
| **Weight** | `600–700`                   | `400`                         |
| **Space**  | Surrounded by whitespace    | Dense, tightly packed         |

Use contrast on **one axis at a time** for most elements.
Reserve multi-axis contrast (large + bold + colored) exclusively for the
primary focal point.

---

## Emphasis Through Space

Whitespace is an emphasis tool, not wasted space.

An element surrounded by breathing room commands more attention than the
same element crowded by neighbors. If an element is primary, give it space.

Rules:

- Primary elements get at least `32px` of surrounding whitespace.
- Muted elements may be placed at `8–16px` spacing.
- Never pack multiple high-emphasis elements together — they cancel each other out.

---

## Emphasis and Color

Color amplifies emphasis. It does not create it.

Do not rely on color alone to establish hierarchy. Hierarchy must be readable
in grayscale first — color enhances, not replaces, structural emphasis.

Avoid:

- Multiple elements in `--color-primary` on the same surface
- Vibrant accent colors on secondary or muted content
- Colored backgrounds on non-interactive informational content

---

## Anti-Patterns

- **Everything bold**: destroys hierarchy entirely.
- **Everything colored**: the accent color loses its signal value.
- **Multiple CTAs at equal weight**: the user has no clear next step.
- **No muted level**: flat surfaces with uniform contrast feel unstructured.
- **Emphasis without purpose**: making something stand out with no reason
  teaches users to ignore visual signals.

---

## Attention Budget

Every highlighted element consumes attention budget.

If everything is emphasized:
nothing is emphasized.
