# FORMS

Forms are the most common site of user failure in any product.
The form's job is not to collect data — it is to make giving data effortless.

---

## Layout

### Single-column default

Always default to a single-column form. Two-column forms increase cognitive
load and introduce alignment complexity.

Use two columns only when:
- The fields are semantically paired (first name / last name, start / end date)
- The form lives in a wide container and the fields are short
- Each column is independently scannable

### Field width communicates expected input length

A date field should be narrow. A bio textarea should be wide. Width signals
to the user how much they are expected to type.

| Field type          | Suggested width                   |
| ------------------- | --------------------------------- |
| Postal / zip code   | `120px`                           |
| Phone number        | `160px`                           |
| Short text (name)   | `50%` of container                |
| Email               | `100%` of container               |
| Textarea            | `100%` of container, min 3 rows   |

---

## Field Anatomy

Every field consists of:

1. **Label** — always visible, never inside the input as placeholder-only.
2. **Input** — the interactive control.
3. **Helper text** (optional) — appears below the input in `--color-text-muted`,
   `caption` size. Explains constraints or gives examples.
4. **Error message** — replaces helper text when the field is invalid.
   See `error-states.md` for full treatment.
5. **Required indicator** — asterisk (`*`) beside the label, with a legend
   at the top of the form explaining what it means.

### Label rules

- Labels sit above inputs, not beside them. Never float inside.
- `caption` or `body` size, `--color-text` or `--color-text-muted`.
- Required fields: `<label>Field name <span aria-hidden="true">*</span></label>`
  with `aria-required="true"` on the input.
- Labels must always be associated via `for`/`id` or wrapping.

---

## Field Groups

Related fields should be visually grouped using:
- A `<fieldset>` with a `<legend>` for radio/checkbox groups
- A visual container (surface + spacing) for logical sections within a long form

Group rules:
- Maximum 5–6 fields before introducing a visual break or section header
- Section headers use `heading` size, `--color-text`, separated from the
  preceding group by `48px` of vertical space

---

## Validation Timing

| When             | What triggers it                                    |
| ---------------- | --------------------------------------------------- |
| On blur          | Validate a single field when the user leaves it     |
| On submit        | Validate all fields and scroll to the first error   |
| On change        | Only for fields where live feedback helps (password strength, character count) |
| Never on focus   | Do not show errors before the user has had a chance to type |

On submit, focus must move to the first invalid field.

---

## Submission

- Disable the submit button while the form is submitting.
- Show a loading indicator inside the submit button.
- On success, either navigate away or show a clear success confirmation.
- On failure, do not clear the form. Preserve every field value.
- On network failure, show an error that lets the user retry.

---

## Multi-Step Forms

Use multi-step forms only when:
- The form has more than 7–8 fields
- The fields belong to meaningfully different stages
- Earlier answers affect which later fields appear

Rules:
- Show progress (step N of M, or a progress bar).
- Allow the user to go back and change earlier answers.
- Validate each step before advancing. Do not surface all errors at the end.
- Auto-save between steps if possible. Never lose data on browser refresh.

---

## Anti-Patterns

- Placeholder text as the only label — disappears on input, breaks accessibility.
- Clearing the form on a failed submission.
- Showing all validation errors only after the final submit.
- Two-column layouts for unrelated fields.
- Submit buttons that do nothing visible while processing.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
