# ELEVATION & SHADOW SYSTEM

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
