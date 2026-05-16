# MICROCOPY

Text is a design material. Treat it with the same discipline as color or spacing.

---

## Core Principles

Text should be:

- concise
- actionable
- human-readable
- specific

If a label could belong to any product, it belongs to none of them.
Write for this interface, not a generic one.

---

## Tone of Voice

The system sounds like a calm, competent colleague — not a corporate form,
not a cheerful chatbot, not a terse CLI.

| Quality        | Sounds like                              | Not like                          |
| -------------- | ---------------------------------------- | --------------------------------- |
| **Direct**     | "Delete project"                         | "Proceed with deletion"           |
| **Human**      | "Something went wrong"                   | "An error has occurred"           |
| **Confident**  | "Changes saved"                          | "Your changes have been saved successfully" |
| **Calm**       | "This can't be undone"                   | "WARNING: IRREVERSIBLE ACTION"    |
| **Specific**   | "Enter a valid email address"            | "Invalid input"                   |

Never be sycophantic. Avoid: "Great!", "Awesome!", "You're all set!", "Success! 🎉"
These add noise and age poorly.

Never be passive-aggressive. Avoid: "Are you sure?", "Really delete?",
"You won't be able to undo this (just checking!)"

Match the weight of the language to the weight of the action.
A settings save is not an achievement. A permanent deletion is not casual.

---

## Buttons and Actions

Buttons should clearly describe what happens when clicked.

Prefer:

- "Create project"
- "Save changes"
- "Send invite"
- "Delete account"

Avoid:

- "Submit" — submit what?
- "Continue" — to where?
- "OK" — OK what?
- "Yes" / "No" — stripped of context in confirmation dialogs

**Formula**: verb + object. `[Action] [thing being acted on]`.

For destructive actions, name the destruction:
`"Delete project"` not `"Confirm"` inside a delete dialog.

For loading/processing states, keep the verb, add context:
`"Saving..."` not `"Loading..."` when saving a form.

---

## Error Messages

Error messages should answer three questions: what, why (if non-obvious), and how to fix it.

Avoid technical jargon unless the audience is explicitly technical.

| ❌ Bad                     | ✅ Good                                                    |
| -------------------------- | ---------------------------------------------------------- |
| "Error 422"                | "Check that all required fields are filled in."            |
| "Invalid input"            | "Email must include an @ symbol."                          |
| "Request failed"           | "Couldn't save. Check your connection and try again."      |
| "Forbidden"                | "You don't have permission to view this."                  |
| "Null pointer exception"   | "Something went wrong on our end. Try again."              |

See `error-states.md` for the full error type taxonomy and placement rules.

---

## Loading Messages

Loading messages are not filler. They set expectations and reduce anxiety.

**Short operations (under 2s):** No message needed — show a spinner only.

**Medium operations (2–10s):** One line describing what's happening.

| Context                  | Message                             |
| ------------------------ | ----------------------------------- |
| Page load                | "Loading your projects..."          |
| Form submission          | "Saving changes..."                 |
| File upload              | "Uploading file..." (with progress) |
| Data fetch               | "Fetching results..."               |
| Background process       | "This may take a moment."           |

**Long operations (10s+):** Set expectations explicitly.

- "This usually takes about 30 seconds."
- "Still working — large files take a moment."
- "Almost done." (only when genuinely almost done)

Never say "Please wait..." alone — it gives the user nothing.
Never say "Loading..." for an operation that is clearly not a page load.

---

## Confirmation and Destructive Actions

Confirmation dialogs must be specific enough that the user cannot misread
what they are confirming.

**Title:** verb + specific object. Never a question that could apply to anything.

| ❌ Bad                          | ✅ Good                            |
| ------------------------------- | ---------------------------------- |
| "Are you sure?"                 | "Delete 'Q4 Campaign' project?"    |
| "Confirm action"                | "Remove Sam from the team?"        |
| "This cannot be undone"         | "This will permanently delete all project data and cannot be undone." |

**Confirm button:** matches the title verb. `"Delete project"`, `"Remove member"`, `"Disconnect"`.
Never `"Yes"`, `"OK"`, or `"Confirm"`.

**Cancel button:** always `"Cancel"`. Never `"No"`, `"Go back"`, or `"Never mind"`.

---

## Empty States

Empty states must do two things: explain the absence, guide the next action.

**Formula:** `[What's missing] + [Why] + [What to do next]`

| Context              | ❌ Bad          | ✅ Good                                             |
| -------------------- | --------------- | ---------------------------------------------------- |
| No projects          | "No data"       | "No projects yet. Create your first to get started." |
| No search results    | "Not found"     | "No results for 'invoice'. Try a different search."  |
| No notifications     | "Empty"         | "You're all caught up."                              |
| No team members      | "None added"    | "Invite your team to start collaborating."           |

---

## Placeholder Text

Placeholder text is a hint, not a label. Labels are always required separately.

Use placeholders to show format or example, not to repeat the label:

| Label         | ❌ Bad placeholder  | ✅ Good placeholder      |
| ------------- | ------------------- | ------------------------ |
| Email         | "Email"             | "name@company.com"       |
| Phone         | "Phone number"      | "+1 (555) 000-0000"      |
| Search        | "Search"            | "Search projects..."     |
| Description   | "Enter description" | "What's this project for?"|

Placeholder text disappears on input. Never put required information in a placeholder only.

---

## Tooltips

Tooltips should explain what something does, not repeat its label.

| Label         | ❌ Bad tooltip      | ✅ Good tooltip                          |
| ------------- | ------------------- | ---------------------------------------- |
| "Archive"     | "Archive"           | "Hide from view without deleting"        |
| "⌘ K"         | "Keyboard shortcut" | "Open command palette"                   |
| Settings icon | "Settings"          | (no tooltip needed — icon + label exists)|

One sentence maximum. No punctuation unless it is a full sentence with a verb.
