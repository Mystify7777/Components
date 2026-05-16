# Loading State

Triggered when: data is being fetched, an action is processing, or content
is not yet available.

| Variant          | Use                                              |
| ---------------- | ------------------------------------------------ |
| **Skeleton**     | Content placeholders for layout-heavy components |
| **Spinner**      | Inline actions, button feedback, small contexts  |
| **Progress bar** | File uploads, multi-step flows, known durations  |

Rules:

- During loading, the component must be **non-interactive**. Disable all
  inputs and buttons. Apply `cursor-wait` or `cursor-not-allowed`.
- Skeletons must match the **exact dimensions** of the content they replace.
  A skeleton that reflows on load is worse than no skeleton.
- Spinners use `--duration-slow` rotation, easing `linear`.
- Skeleton shimmer animates with `--duration-slow`, `ease-in-out`, looping.
- Both must respect `prefers-reduced-motion` — show a static placeholder
  instead of an animated one.
- Always pair loading state with a timeout or error fallback. Infinite
  spinners are a UX failure.
