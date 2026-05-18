# NAVIGATION

Navigation is the skeleton of the product.
A user who cannot find something cannot use it.

---

## Navigation Patterns

### Top navigation bar

Use for: top-level sections of the product. Always visible.

Structure (left to right):
1. Logo / wordmark
2. Primary navigation links
3. Secondary actions (search, notifications)
4. User avatar / account menu

Rules:
- Height: `64px` default, `48px` compact.
- Active state: `--color-primary` underline or background, not just font weight.
- Maximum 6 top-level items. More than 6 signals an information architecture problem.
- Sticky by default (`position: sticky; top: 0; z-index: var(--z-raised)`).
- On mobile: collapse into a hamburger menu that opens a drawer or bottom sheet.

### Sidebar navigation

Use for: products with many sections or hierarchical structure.

Rules:
- Width: `240px` default, `64px` collapsed (icon-only mode).
- Collapsible on desktop. Hidden (drawer) on mobile.
- Active item: filled background using `--color-primary` at `--opacity-10`,
  `--color-primary` text.
- Supports one level of sub-items. Do not nest deeper than two levels.
- Sticky: sidebar scrolls independently from page content.
- Group related items under a section label. Labels use `caption` size,
  `--color-text-muted`, uppercase.

### Bottom navigation (mobile)

Use for: 3–5 primary sections on mobile-first products.

Rules:
- Height: `56px` + safe area inset.
- Maximum 5 items. 3–4 is ideal.
- Each item: icon + label (optional on 5-item bars).
- Active item: `--color-primary` icon and label.
- `z-index: var(--z-raised)`.

---

## Tabs

Use for: switching between views of the same content type or related content
within a section. Tabs do not navigate away from the page.

### Variants

| Variant     | Use                                              |
| ----------- | ------------------------------------------------ |
| `underline` | Default. Page-level content switching.           |
| `pills`     | Compact switching within a component or card.    |
| `segmented` | Mutually exclusive options (like a toggle group).|

### Rules

- Maximum 6 tabs. More than 6 → use a sidebar or dropdown.
- One tab is always active. There is no "no tab selected" state.
- Tabs control content below them. Do not mix tabs with page navigation.
- Active tab: underline (underline variant) or filled background (pills, segmented).
- Keyboard: `Arrow` keys navigate between tabs. `Tab` moves to the content panel.
- Each tab panel has `role="tabpanel"` and `aria-labelledby` pointing to its tab.

---

## Breadcrumbs

Use for: hierarchical pages more than 2 levels deep.

Rules:
- Format: `Parent / Child / Current page`
- Current page is not a link. It is plain text.
- Separator: `/` or `›`. Consistent across the product.
- Truncate long paths from the middle, always preserving first and last items.
- `aria-label="Breadcrumb"` on the `<nav>` element.
- `aria-current="page"` on the current page item.
- Do not show breadcrumbs on top-level pages. They are unnecessary there.

---

## Active State

Every navigation component must have a clearly defined active state.
The active state must be distinct from hover.

| Signal       | Active          | Hover          |
| ------------ | --------------- | -------------- |
| Background   | `--opacity-10` primary fill | `--opacity-5` fill |
| Text color   | `--color-primary` | `--color-text` |
| Left border  | `2px solid --color-primary` (sidebar) | none |
| Underline    | `2px solid --color-primary` (tabs) | none |

---

## Mobile Considerations

- Top nav collapses to hamburger at `md` breakpoint.
- Bottom nav appears at `sm` breakpoint on mobile-first products.
- Drawer nav opens from the left edge.
- Navigation items in the drawer use `48px` minimum height for touch targets.
- Close the drawer on navigation. Do not leave it open after the user taps a link.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
