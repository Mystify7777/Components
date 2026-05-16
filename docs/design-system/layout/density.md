# DENSITY SYSTEM

Density is the relationship between content and space.
It is not a single setting — it is a spectrum that must be designed, not patched.

---

## Why Density Matters

The same component can feel cramped on a form or wasteful on a dashboard.
Density modes let the system adapt to context without breaking the token system.

All density modes use the same spacing scale. Density selects *which stops* to use.

---

## The Three Modes

### Compact

For data-dense interfaces: admin panels, data tables, developer tools,
settings pages, sidebars.

- Vertical padding: `8px` (`spacing-1`)
- Horizontal padding: `12px`
- Font size: `body` or `caption`
- Line height: `1.4`
- Row height (tables, lists): `36px`
- Icon size: `--icon-sm` (`16px`)

Use when: the user is scanning, comparing, or processing large amounts of data.
The interface is a tool, not a landing page.

### Default

For standard product interfaces: dashboards, settings, forms, navigation.

- Vertical padding: `16px` (`spacing-2`)
- Horizontal padding: `24px` (`spacing-3`)
- Font size: `body`
- Line height: `1.5`
- Row height: `48px`
- Icon size: `--icon-md` (`20px`)

Use when: the user is performing tasks at a normal pace with mixed content types.
This is the baseline. When in doubt, use this.

### Spacious

For marketing surfaces, onboarding flows, empty states, and reading layouts.

- Vertical padding: `32px` (`spacing-4`)
- Horizontal padding: `48px` (`spacing-6`)
- Font size: `body` or `heading`
- Line height: `1.6`
- Row height: `64px`
- Icon size: `--icon-lg` (`24px`)

Use when: the interface is communicating a value proposition, guiding a new user,
or presenting content designed to be read rather than processed.

---

## Rules

- **Never mix density modes within the same component.** A card is compact or
  it is default. A table row is compact or it is default. Mixing produces
  visual inconsistency that the spacing system cannot resolve.
- **Density changes padding and row height. It does not change the type scale.**
  Font sizes come from the modular scale regardless of density.
- **Touch targets must remain `44×44px` minimum in all density modes.**
  In compact mode, increase the clickable area beyond the visual bounds using
  padding on the interactive element, not by enlarging the visual component.
- **Dark mode and density are independent axes.** Every density variant must
  work in both light and dark mode.

---

## How to Implement

Use a `data-density` attribute on the root or section element.
Components read the density context and apply the appropriate spacing tokens.

```tsx
<Section data-density="compact">
  <DataTable />
</Section>
```

Do not implement density as a prop on individual components. Density is a
context, not a configuration. Setting `density="compact"` on every row of
a table is the wrong model.
