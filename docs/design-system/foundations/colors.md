
# COLOR SYSTEM

## Build Around a Primary Hue

Start with a **single hue**. Do not pick a palette — derive one.

Vary **lightness and saturation** across steps to produce a monochromatic scale.
This gives you cohesion for free. A good scale has at minimum 9 stops:

```number
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

## 11. LIGHT & DARK MODE

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