# VISUAL LANGUAGE

The system should feel:

- precise
- calm
- premium
- modern
- restrained
- intentional

The interface should communicate confidence through clarity, not excess.

---

## Avoid

Avoid:

- visual noise
- excessive glow
- theatrical motion
- gaming aesthetics
- fake complexity
- layered glassmorphism abuse
- excessive gradient stacking
- competing focal points

---

## Emphasis

Use emphasis intentionally.

Primary emphasis:

- one major focal point per section

Secondary emphasis:

- supporting interactions

Muted elements:

- informational or supporting content

Not every element deserves attention simultaneously.

---

## Interaction Philosophy

Interactions should feel:

- responsive
- predictable
- lightweight
- calm

Feedback should be immediate.
Motion should support usability, not compete with it.

---

## Surface Layering

The system communicates depth through surfaces, not decoration.

Every surface has a level. Higher levels sit visually above lower ones.
Use background color steps — not shadows alone — to establish this hierarchy:

| Level | Token                    | Used for                              |
| ----- | ------------------------ | ------------------------------------- |
| 0     | `--color-bg`             | Page background                       |
| 1     | `--color-surface`        | Cards, panels, sidebars               |
| 2     | `--color-surface-raised` | Dropdowns, popovers, sticky headers   |
| 3     | Modal / overlay          | Dialogs, drawers (with backdrop)      |

Rules:

- Never place a Level 1 surface directly on another Level 1 surface without
  a border or spacing to separate them. Stack levels, don't flatten them.
- In dark mode, higher surfaces are lighter, not darker. This mirrors how
  light physically behaves — surfaces closer to a light source appear lighter.
- Do not add decorative depth (inner shadows, emboss effects) to surfaces.
  Depth comes from the token system, not from CSS tricks.

---

## Border Usage

Borders and shadows solve the same problem: separation.
Use one, not both, at each boundary.

| Situation                                  | Use                        |
| ------------------------------------------ | -------------------------- |
| Separating adjacent surfaces of same level | `--color-border` 1px line  |
| Elevating a surface above the page         | `--shadow-sm` or higher    |
| Interactive inputs at rest                 | `--color-border` 1px line  |
| Interactive inputs on focus                | Focus ring (see `focus-states.md`) — remove the border |
| Dividers within a surface                  | `--color-border` at `--opacity-40`, no shadow |
| Cards on a surface background              | Either a subtle border OR `--shadow-sm` — never both |

Avoid decorative borders that exist only for visual interest.
Every border must separate something from something else.
If removing a border changes nothing about readability or hierarchy, remove the border.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
