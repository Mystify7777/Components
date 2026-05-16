# OPACITY SCALE

Section 7 lists opacity as a required token. Here it is.

Opacity is not for making things "look softer." It communicates state and layer.

| Token              | Value | Use                                          |
| ------------------ | ----- | -------------------------------------------- |
| `--opacity-0`      | `0`   | Fully hidden (still in DOM)                  |
| `--opacity-5`      | `5%`  | Ghost fill, barely-there tint                |
| `--opacity-10`     | `10%` | Hover fill on transparent buttons            |
| `--opacity-20`     | `20%` | Subtle background tint, divider wash         |
| `--opacity-40`     | `40%` | Placeholder text, secondary icons            |
| `--opacity-60`     | `60%` | Backdrop scrim (light), disabled overlays    |
| `--opacity-80`     | `80%` | Backdrop scrim (dark), modal overlays        |
| `--opacity-100`    | `100%`| Fully visible                                |

## Rules

- Disabled elements use `--opacity-40` on content, never on the container.
- Modal backdrops use `--opacity-60` (light) or `--opacity-80` (dark).
- Never use opacity to fake a color. Derive the color from the scale instead.
- Animate opacity with `--duration-fast` for micro states, `--duration-normal`
  for entrances and exits.
