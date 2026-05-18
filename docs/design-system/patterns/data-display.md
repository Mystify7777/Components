# DATA DISPLAY

Data display patterns present structured information.
The goal is always legibility and scannability — not decoration.

---

## Tables

Use for: structured data with multiple attributes per row, where comparison
across rows is the primary task.

### Anatomy

- **Header row**: `caption` or `body` size, `--color-text-muted`, `font-weight: 500`.
  Border-bottom `--color-border`.
- **Data row**: `body` size, `--color-text`. Alternating background optional
  (use `--color-surface` / `--color-bg` alternation, not custom colors).
- **Row hover**: `--color-primary` at `--opacity-5` background.
- **Selected row**: `--color-primary` at `--opacity-10` background,
  `--color-border` left border or checkbox.

### Column alignment

| Content type       | Alignment |
| ------------------ | --------- |
| Text (names, labels) | Left    |
| Numbers (currency, counts) | Right |
| Status badges      | Center    |
| Actions            | Right     |

### Rules

- Use `<th scope="col">` for column headers, `<th scope="row">` for row headers.
- Sticky header on scroll for tables taller than the viewport.
- Empty state when there are no rows — do not show a header with zero rows beneath it.
- Pagination or infinite scroll for more than 50 rows. Never load all rows at once.
- Sortable columns: show sort direction icon, animate direction change.
- Row height: `compact` → `36px`, `default` → `48px`, `spacious` → `56px`.
- Actions column: right-aligned, appears on row hover to reduce visual noise.

### Responsive behaviour

Tables do not scale gracefully. On mobile:

- Hide non-essential columns and expose them in a detail view.
- Convert to a card-per-row layout.
- Allow horizontal scroll only for data where all columns are required simultaneously.

---

## Lists

Use for: homogeneous items where scanning and selection are the primary tasks.

### Variants

| Variant      | Use                                           |
| ------------ | --------------------------------------------- |
| Plain        | Simple ordered or unordered content            |
| Divided      | Items with a border separator                  |
| Card list    | Rich items with multiple lines of content      |
| Command list | Keyboard-navigable items (like a command palette) |

### Rules

- Consistent row height within a list. Do not mix heights.
- Hover: `--color-primary` at `--opacity-5`.
- Selected: `--color-primary` at `--opacity-10`, checkmark or highlighted border.
- Virtualize lists over 100 items. Never render all items to the DOM.
- Empty state when the list has no items.
- Keyboard: `Arrow` keys navigate, `Enter` activates, `Space` selects (for multi-select lists).

---

## Cards

Use for: contained objects that represent a single entity — a project, a user,
a file, a product.

### Anatomy

Cards may include any combination of:

- Media area (image, illustration, icon)
- Title (`body` or `heading` size)
- Supporting text (`caption`, `--color-text-muted`)
- Metadata (tags, dates, avatars)
- Actions (buttons, icon buttons, dropdown)

### Rules

- Use `--radius-md` for standard cards, `--radius-lg` for featured or hero cards.
- Use `--shadow-sm` for flat cards, `--shadow-md` for interactive cards on hover.
- Interactive cards (clickable entire surface) must have a focus ring on the card itself.
- Do not nest interactive elements inside a fully-clickable card without
  stopping propagation on the inner elements.
- Card width: determined by the grid column. Cards never have a fixed max-width
  — they fill their container.
- Card content: always left-aligned. Centered content is for empty states only.

---

## Stat Blocks

Use for: surfacing key metrics or numbers on dashboards, overview pages,
or summary panels.

### Anatomy

- **Label**: `caption` size, `--color-text-muted`. Describes the metric.
- **Value**: `display` or `heading` size, `--color-text`. The number.
- **Delta** (optional): change vs. prior period. Green for positive, red for negative.
  Always pair the color with a `+`/`−` sign and percentage. Never color alone.
- **Trend** (optional): a sparkline or mini chart.

### Rules

- Stat blocks sit on a `--color-surface` card.
- Align all stat blocks in a grid row to the same height.
- Do not animate the number on every render — only on first load or on manual refresh.
  Constant counting animations cause motion sickness and burn CPU.
- Null state: show `—` (em-dash) when data is unavailable. Never show `0`
  when the data simply has not loaded.
- Delta color must pass `3 : 1` contrast against its background in both modes.

---
Reference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)
