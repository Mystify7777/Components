# GRID SYSTEM

Spacing governs distance. Grid governs arrangement.
Without a layout system, components have rhythm but no structure.

## Column Grid

Base everything on a **12-column grid**.
12 divides evenly into halves, thirds, and quarters — covering almost every
real layout without custom math.

| Columns | Use case                            |
| ------- | ----------------------------------- |
| 12      | Full width (hero, banner)           |
| 8       | Primary content column              |
| 6       | Two-column split                    |
| 4       | Cards, grid items, sidebar widgets  |
| 3       | Dense grids, icon sets              |

## Layout Variants

| Variant         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `contained`     | Content capped at `--container-max`, centered            |
| `full-bleed`    | Background spans full viewport, content stays contained  |
| `sidebar`       | `3 + 9` or `4 + 8` column split                         |
| `centered`      | Single narrow column (`max-w-2xl`), reading layout       |