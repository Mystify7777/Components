# DOCUMENTATION REQUIREMENTS

Every component must be documented before it is considered shipped.
Documentation is not a post-process — it is the contract between the component
and every future user of it, human or AI.

---

## Required in Every Component Doc

- **Purpose** — one sentence. What problem does this component solve?
- **Usage examples** — at least two: a minimal example and a realistic one.
- **Props / API** — every prop with its type, default value, and purpose.
- **Variants** — every visual variant documented and visually demonstrated.
- **States** — default, hover, focus, disabled, error, loading (where applicable).
- **Accessibility notes** — keyboard behaviour, ARIA roles, screen reader output.
- **Responsive behaviour** — how the component adapts at `sm`, `md`, `lg`.
- **Do / Don't** — one concrete anti-pattern with a corrected version.

---

## Storybook Story Structure

Every component requires a Storybook file at:

```jsx
src/components/<ComponentName>/<ComponentName>.stories.tsx
```

### Required stories (in this order)

1. **Default** — the component at rest, no configuration. This is what AI
   agents and new developers see first.
2. **Variants** — one story per major variant (e.g. `Primary`, `Secondary`,
   `Destructive` for a Button).
3. **Sizes** — one story per size if the component has a size prop.
4. **States** — a single story showing all interactive states side-by-side:
   default, hover, focus, disabled. Use `play` functions where possible.
5. **Error** — the component in its error state, with a linked error message.
6. **Loading** — the component in its loading state (if applicable).
7. **DarkMode** — the component rendered on a dark surface. Use the
   `backgrounds` addon with the dark token applied.
8. **Responsive** — the component at mobile and desktop viewport widths.
   Use the `viewport` addon.

### Story file template

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from './ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/CategoryName/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: {
    // minimal required props only
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <ComponentName variant="primary" />
      <ComponentName variant="secondary" />
      <ComponentName variant="destructive" />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <ComponentName />
      <ComponentName data-hover />
      <ComponentName data-focus />
      <ComponentName disabled />
    </div>
  ),
}

export const ErrorState: Story = {
  args: {
    error: 'This field is required.',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
```

### Naming convention

Stories are named in PascalCase. They must describe what they show, not
how they look.

Good: `ErrorState`, `LoadingWithRetry`, `MobileLayout`
Bad: `Red`, `Small2`, `TestStory`

### Story categories (title field)

```bash
Components/Foundations/   — buttons, inputs, badges, icons
Components/Molecules/     — form fields, nav items, cards
Components/Organisms/     — headers, sidebars, dashboards
Components/Patterns/      — forms, overlays, feedback, data-display
```

---

## JSDoc on Component Props

Every exported prop interface must include JSDoc comments.

```tsx
interface ButtonProps {
  /** Visual style of the button. Defaults to "primary". */
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost'
  /** Size of the button. Defaults to "md". */
  size?: 'sm' | 'md' | 'lg'
  /** Shows a loading spinner and disables interaction. */
  loading?: boolean
  /** Disables the button and prevents all interaction. */
  disabled?: boolean
}
```

Storybook's `autodocs` tag generates the prop table from these comments.
Without them, the generated table is useless.
