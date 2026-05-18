# FEEDBACK PATTERNS

Feedback is the system telling the user what happened.
Every action that changes state must produce feedback.
The speed and prominence of that feedback must match the importance of the event.

---

## Feedback Hierarchy

| Type         | Prominence | Duration     | Blocks interaction? |
| ------------ | ---------- | ------------ | ------------------- |
| Inline message | Low      | Persistent   | No                  |
| Toast        | Medium     | `4000ms` auto | No                 |
| Banner       | High       | Persistent   | No                  |
| Alert dialog | Critical   | Until dismissed | Yes              |

---

## Toast

Use for: non-critical confirmations and non-blocking errors.
The user triggered an action and the system is confirming it worked (or didn't).

### Variants

| Variant   | When to use                                        |
| --------- | -------------------------------------------------- |
| `success` | Action completed. `"Changes saved."`              |
| `error`   | Action failed. `"Couldn't save. Try again."`      |
| `info`    | Neutral update. `"Your export is ready."`         |
| `warning` | Completed with caveats. `"Saved, but some items were skipped."` |

### Rules

- Duration: `4000ms` default, `6000ms` for messages with an action.
- Position: bottom-right on desktop, bottom-center on mobile.
- Maximum 3 toasts visible at once. Queue the rest.
- Always include a manual dismiss (`×` button). Never force the user to wait.
- Error toasts must not auto-dismiss. The user needs to acknowledge failures.
- Toast text: one sentence maximum. If more context is needed, link to a detail page.
- `aria-live="polite"` on the toast container.
- Toasts stack upward. The newest toast appears at the bottom of the stack,
  pushing older ones up.

---

## Banner

Use for: persistent system-wide messages that affect all content on the page.
Banners are not dismissible until the underlying condition changes.

### Variants

| Variant   | When to use                                                         |
| --------- | ------------------------------------------------------------------- |
| `info`    | Scheduled maintenance, new feature announcement                     |
| `warning` | Account issue requiring attention, expiring trial                   |
| `error`   | Service degradation, failed sync, payment failure                   |
| `success` | Verification complete, migration finished                           |

### Rules

- Banners sit at the top of the page, above the main navigation.
- One banner at a time. Do not stack banners.
- Include an action if there is something the user can do.
- Dismissible banners (`info`, `success`) show a close button.
- Non-dismissible banners (`warning`, `error` tied to account state) do not.
- Banner text should be one line on desktop. Wrap gracefully on mobile.

---

## Inline Message

Use for: contextual feedback tied to a specific section or component,
not the whole page.

Examples: a sync status below a connected integration, a quota warning
inside a usage panel, a read-only notice inside a form.

### Rules

- Position inline with the content it describes.
- Use `caption` size type.
- Uses the same four semantic variants as banners.
- Does not auto-dismiss.
- Does not use an icon larger than `--icon-sm`.

---

## Alert Dialog

Use for: destructive or irreversible actions that require explicit confirmation.

Examples: deleting an account, removing a team member, discarding unsaved changes.

### Rules

- Title: short, verb-first. `"Delete project?"` not `"Are you sure you want to delete this project?"`
- Body: one sentence explaining consequences. `"This will permanently remove all data and cannot be undone."`
- Actions: two buttons maximum — a destructive confirm and a cancel.
  The cancel button should always be the default (keyboard `Enter`) action.
- The destructive button uses `variant="destructive"`.
- Focus moves to the cancel button when the dialog opens.
- `Escape` closes and cancels.
- Never use alert dialogs for non-destructive actions. Use a toast instead.

---

## Semantic Color Reference

| Variant   | Token                    | Icon                |
| --------- | ------------------------ | ------------------- |
| `success` | `--color-success`        | `check-circle`      |
| `warning` | `--color-warning`        | `alert-triangle`    |
| `error`   | `--color-destructive`    | `alert-circle`      |
| `info`    | `--color-info`           | `info-circle`       |

Never use color alone — always pair with an icon and text.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
