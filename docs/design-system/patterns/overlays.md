# OVERLAYS

Overlays interrupt the current context to demand attention or provide
additional information. Use them with restraint — every overlay costs
the user a context switch.

---

## Choosing the Right Overlay

| Use case                                      | Use this        |
| --------------------------------------------- | --------------- |
| Confirmation for a destructive action         | Alert dialog    |
| Form that creates or edits a record           | Modal or drawer |
| Secondary detail without leaving the page     | Drawer          |
| Quick contextual info on hover/click          | Popover or tooltip |
| Full-screen mobile flow                       | Bottom sheet    |
| Complex multi-step flow                       | Drawer or full-screen page |

If the overlay needs to contain another overlay: stop. Redesign.
Nested overlays are always the wrong solution.

---

## Modal

Use for: focused tasks that require the user's full attention before returning
to the page. Modals block interaction with the background.

### Structure

- **Header**: title + optional subtitle + close button (`×`).
- **Body**: the content. Scrollable if tall. Max height `80vh`.
- **Footer**: primary action + secondary action (cancel). Right-aligned.
  Cancel is always present.

### Sizing

| Size   | Width   | Use                                   |
| ------ | ------- | ------------------------------------- |
| `sm`   | `400px` | Confirmation dialogs, simple prompts  |
| `md`   | `560px` | Standard forms, content editing       |
| `lg`   | `720px` | Complex forms, rich content           |
| `full` | `100vw` | Mobile only, or immersive flows       |

### Rules

- Backdrop: `--opacity-60` (light) or `--opacity-80` (dark).
- `z-index: var(--z-modal)`.
- Focus trap: focus must stay inside the modal while it is open.
- On open: focus moves to the first focusable element (or the modal itself).
- On close: focus returns to the trigger element.
- `Escape` closes the modal.
- Clicking the backdrop closes the modal (unless the action is destructive).
- Do not open a modal from another modal.
- Do not use a modal for content that is primarily read-only. Use a drawer.

---

## Drawer

Use for: side panels that provide additional context, detail, or editing
without fully leaving the current page. The background remains visible.

### Placement

| Direction | Use case                                      |
| --------- | --------------------------------------------- |
| Right     | Detail panels, record editors, filters        |
| Left      | Navigation (mobile sidebar)                   |
| Bottom    | Mobile-first action sheets, contextual menus  |

### Sizing

- Width (right/left): `360px` default, `480px` for complex content.
- On mobile: full width.
- Height (bottom): `auto`, max `80vh`, with drag-to-dismiss on mobile.

### Rules

- `z-index: var(--z-overlay)`.
- Focus trap: same rules as modal.
- Backdrop on mobile, optional on desktop (can be sheet-style without backdrop).
- Animate in/out with `ease-out` (enter) and `ease-in` (exit).
- `Escape` closes the drawer.
- Scroll should be independent — the drawer body scrolls, the page behind it does not.

---

## Popover

Use for: contextual information or short interactions anchored to a trigger element.
Popovers are non-modal — the user can interact with the page behind them.

### Rules

- `z-index: var(--z-tooltip)`.
- Position: automatically flip to avoid viewport edge clipping.
- Arrow pointing to the trigger is optional but helps with spatial orientation.
- Dismiss on: click outside, `Escape`, or trigger re-click.
- Do not use for critical information — popovers are easy to miss.
- Maximum content: one short paragraph or a list of up to 5 items.
  If you need more, use a drawer.

---

## Tooltip

Use for: short, non-interactive labels that clarify an icon or truncated text.
Tooltips appear on hover (desktop) and long-press (mobile).

### Rules

- Content: plain text only. No interactive elements.
- Maximum length: one short sentence.
- `z-index: var(--z-tooltip)`.
- Delay: `300ms` before showing, `0ms` before hiding.
- Never put critical information in a tooltip — it is not accessible on touch.
- `aria-label` on the trigger is required when the tooltip is the primary label.
- `role="tooltip"` + `aria-describedby` when the tooltip supplements visible text.

---

## Animation

All overlays use these motion specs:

| Event   | Transform                        | Duration              | Easing    |
| ------- | -------------------------------- | --------------------- | --------- |
| Enter   | `translateY(8px)` → `0` + fade  | `--duration-normal`   | `ease-out`|
| Exit    | `0` → `translateY(8px)` + fade  | `--duration-fast`     | `ease-in` |

Drawers slide from their edge (`translateX` or `translateY`), not fade.
Use Framer Motion spring for drawer physics on mobile (feels natural with drag gesture).

Respect `prefers-reduced-motion`: remove transform, keep opacity fade only.
