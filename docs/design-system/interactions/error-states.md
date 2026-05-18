# ERROR STATES

Errors are not failures of the user. They are failures of the system
to set correct expectations or recover gracefully.

Every error must answer three questions:

1. What went wrong?
2. Why did it go wrong?
3. What should the user do now?

---

## Visual Treatment

Triggered when: validation fails, a request errors, or input is invalid.

| Element        | Treatment                                              |
| -------------- | ------------------------------------------------------ |
| Border         | `--color-destructive` at full opacity                  |
| Label          | `--color-destructive`                                  |
| Message        | Error text below the field, `--icon-sm` warning icon   |
| Background     | Subtle `--color-destructive` tint (`--opacity-5`)      |
| Focus ring     | `--color-destructive` instead of `--color-primary`     |

Rules:

- Error messages must be linked to their input via `aria-describedby`.
- Never rely on color alone — always pair with an icon or text label.
- Error state persists until the condition is resolved. Do not auto-dismiss.
- Set `aria-invalid="true"` on the input element.

---

## Error Type Taxonomy

Not all errors are equal. Treat them differently.

### Validation error

**What**: The user's input does not meet the expected format or constraints.
**When**: On blur (after the user leaves the field), never on every keystroke.
**Recovery**: Inline, under the field. Tell the user exactly what is wrong
and what the correct format is.

Good: `"Email must include an @ symbol."`
Bad: `"Invalid input."`

### Network error

**What**: The request could not reach the server, or the server did not respond.
**When**: After a form submission or data fetch fails.
**Recovery**: Show a non-blocking banner or toast. Offer a retry action.
Preserve what the user typed — never clear a form on a network failure.

Good: `"Couldn't save changes. Check your connection and try again."`
Bad: `"Error 503. Please try again later."`

### Permission / authorization error

**What**: The user does not have access to the resource or action.
**When**: On load or on action attempt.
**Recovery**: Explain what they can't do. If there is a path to getting access
(contact an admin, upgrade a plan), provide it. Do not show a blank page.

Good: `"You don't have permission to edit this project. Contact your admin to request access."`
Bad: `"403 Forbidden."`

### Not found error

**What**: The resource the user navigated to does not exist.
**When**: On page load or after following a link.
**Recovery**: Provide navigation back to a known-good surface. Offer a search
if the resource might exist elsewhere. Never strand the user.

Good: `"This page doesn't exist. It may have been moved or deleted."`
Bad: `"404."`

### Timeout error

**What**: A request took too long and was abandoned.
**When**: After a configurable threshold (typically 30s for user actions).
**Recovery**: Inform the user. Offer a retry. If the operation is likely
still running in the background, say so.

Good: `"This is taking longer than expected. We'll keep trying — or you can retry now."`
Bad: `"Request timed out."`

### Server / unexpected error

**What**: An internal error occurred that the user cannot fix.
**When**: In response to any server-side failure (5xx responses).
**Recovery**: Apologise without jargon. Provide a retry. Log the error with
a reference ID if possible — useful when the user contacts support.

Good: `"Something went wrong on our end. Try again, or contact support if this keeps happening. (Ref: #A1B2C3)"`
Bad: `"Internal server error."`

### Conflict error

**What**: The action could not be completed because it conflicts with the
current state of the data (e.g. optimistic update colliding with a concurrent edit).
**When**: After a save or update action.
**Recovery**: Show what changed and let the user decide how to resolve it.
Never silently overwrite data.

Good: `"Someone else edited this document while you were working. Review the changes before saving."`
Bad: `"Save failed."`

---

## Error Message Formula

Every error message should follow this structure:

```err
[What happened] + [Why, if non-obvious] + [What to do next]
```

Examples:

| Situation           | Message                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| Empty required field | "Name is required."                                                                      |
| Invalid email        | "Enter a valid email address, like name@example.com."                                    |
| Password too short   | "Password must be at least 8 characters."                                                |
| Network failure      | "Couldn't save. Check your connection and try again."                                    |
| Duplicate entry      | "An account with this email already exists. Sign in instead?"                            |
| File too large       | "File exceeds the 10MB limit. Compress it or choose a smaller file."                     |

---

## Placement Rules

| Error scope           | Where to show it                                            |
| --------------------- | ----------------------------------------------------------- |
| Single field          | Directly below the field, above helper text                 |
| Multiple fields       | Inline under each field + optional summary at form top      |
| Page-level / network  | Non-blocking banner at top of content, or toast             |
| Full-page failure     | Replace content with error state component (see empty-states.md) |

Never use a modal to show a validation error.
Never scroll the user away from the error.

---

## State Priority

Error state takes priority over all states except disabled.

Disabled → Error → Focus → Hover → Default

A disabled field cannot be in an error state. Everything else can.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
