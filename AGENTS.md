# AGENTS.md

This repository is intentionally structured for both humans and AI agents.

Agents working inside this repository must follow the rules below.

---

# Primary Philosophy

Components must prioritize:

1. Reusability
2. Performance
3. Accessibility
4. Predictability
5. Visual consistency
6. Maintainability
7. AI readability

---

# Repository Rules

## DO

- Use TypeScript strictly
- Prefer composition over prop explosion
- Use semantic naming
- Keep components modular
- Optimize rendering performance
- Maintain accessibility standards
- Preserve mobile responsiveness
- Use Tailwind utility classes cleanly
- Keep animations GPU-friendly
- Use Framer Motion responsibly
- Write reusable APIs
- Export clean public interfaces
- Keep folder structures predictable

## DO NOT

- Create giant monolithic components
- Add unnecessary dependencies
- Use deeply nested conditional rendering
- Use arbitrary z-index values without documentation
- Create duplicated utility logic
- Hardcode theme colors repeatedly
- Mix playground logic with production components
- Introduce animation spam
- Create components with unclear responsibilities

---

# Component Requirements

Every production component should contain:

```txt
Component/
├── Component.tsx
├── Component.types.ts
├── Component.stories.tsx
├── Component.docs.md
├── Component.test.tsx
├── index.ts
└── meta.json
```

---

# Accessibility Rules

All components should:

- Support keyboard navigation
- Preserve focus visibility
- Use semantic HTML
- Include ARIA labels where necessary
- Maintain sufficient contrast ratios
- Avoid accessibility-breaking animations

---

# Animation Rules

Animations should:

- Be purposeful
- Avoid excessive duration
- Prefer transforms over layout shifts
- Avoid unnecessary blur usage
- Minimize repaint-heavy effects
- Use spring motion carefully

---

# Styling Rules

Preferred stack:

- TailwindCSS
- class-variance-authority
- tailwind-merge
- clsx

Avoid:

- Inline styles unless necessary
- Giant className strings without abstraction
- Repeated utility patterns

---

# Performance Rules

Prefer:

- Memoization where justified
- Lazy loading for heavy visuals
- Tree-shakeable exports
- Lightweight dependencies
- Shared animation utilities

Avoid:

- Premature optimization insanity
- Massive dependency chains
- Re-render-heavy patterns

---

# Naming Conventions

## Components

PascalCase

```tsx
GlassButton.tsx
```

## Hooks

camelCase with use prefix

```tsx
useMouseGlow.ts
```

## Utilities

camelCase

```tsx
mergeClasses.ts
```

---

# Documentation Rules

Every reusable component must include:

- Purpose
- Usage examples
- Prop definitions
- Accessibility notes
- Performance notes
- Known limitations

---

# AI Optimization Rules

To improve AI agent performance:

- Keep folder structures predictable
- Avoid ambiguous naming
- Write descriptive documentation
- Keep exports explicit
- Avoid hidden side effects
- Maintain consistent architecture

---

# Design Language

The design system emphasizes:

- Futuristic UI
- High readability
- Clean spacing
- Motion clarity
- Dark theme compatibility
- Premium feel

Avoid visual chaos disguised as creativity.

---

# Long-Term Goal

This repository should eventually function as:

- A reusable UI framework
- A design system
- A component marketplace
- An internal accelerator
- An AI-native UI architecture library
