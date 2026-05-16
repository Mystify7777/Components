# COMPONENT API PHILOSOPHY

Component APIs should be:

- predictable
- minimal
- composable
- variant-driven

Prefer:

- composition over configuration
- variants over boolean explosion
- sensible defaults
- explicit naming

Avoid:

- giant prop surfaces
- conflicting prop combinations
- style props that bypass tokens
- deeply coupled component logic

Good:

```tsx
<Button variant="primary" size="md" />
```

Bad:

```tsx
<Button primary secondary outlined rounded elevated compact />
```

A component API should feel intentional, not improvisational.
