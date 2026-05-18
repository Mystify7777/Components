# UI Architecture Roadmap

## ✅ Completed

### Phase 1: Tokens & Architecture
- [x] Implement token files (spacing, radius, zIndex, motion, breakpoints, colors)
- [x] Semantic-first theme architecture (types only, no values)
- [x] Light/dark theme implementations
- [x] Typography variants (display, heading, body, caption)
- [x] Semantic spacing names (xs, sm, md, lg, xl, etc.)

### Phase 2: Primitives
- [x] Box (simple div wrapper, no polymorphism)
- [x] Stack (flex column/row with semantic gap)
- [x] Flex (flex wrapper with align/justify control)
- [x] Text (typography variant support)
- [x] Surface (elevation/radius support)
- [x] Grid (CSS grid wrapper with gap)

### Phase 3: Utilities
- [x] `cn.ts` utility (clsx + twMerge for Tailwind class merging)

---

## ⏳ Upcoming (High Priority)

### CSS Variable Strategy
**What**: Export tokens as CSS custom properties
**Why**: Enables Storybook theming, runtime theme switching, Tailwind integration
**Implementation**:
```css
:root {
  --surface-primary: #ffffff;
  --surface-secondary: #f8fafc;
  --text-primary: #0b1020;
  /* ... all tokens as vars */
}

[data-theme="dark"] {
  --surface-primary: #0b1020;
  /* ... dark theme overrides */
}
```
**When**: Before Storybook setup

### Storybook Integration
**What**: Set up Storybook with theme provider support
**Why**: Visualize primitives, document component patterns
**Steps**:
1. Add `storybook` CLI config
2. Create `ThemeProvider` context wrapper
3. Add decorator for theme switching
4. Write stories for each primitive

### Build Script
**What**: Real build pipeline (tsup/rollup/vite)
**Why**: Currently just echoed; need compiled output
**Recommendation**: Use tsup for simplicity
```json
"build": "tsup src/index.ts --format esm,cjs --dts",
"dev": "tsup src --format esm --watch"
```

---

## ⏰ Medium Priority (Implement Soon)

### Theme Provider
**What**: React Context for theme switching
**Location**: `packages/ui/src/providers/ThemeProvider/index.tsx`
**Purpose**: Allow `<ThemeProvider theme="dark">` wrapping
**Depends on**: CSS variables

### Surface Variants
**What**: Expand Surface primitive with:
- `elevated` (current default)
- `outlined` (border only)
- `muted` (subdued background)
- `interactive` (hover states)
**When**: After initial primitives are stable

### Controlled Escape Hatch
**What**: Safe way to extend primitives without breaking design system
**Options**:
- `classNameOverride` prop (explicit, vs generic `style`)
- Design token composition functions
- Custom hook system
**When**: Phase 4+

---

## 📋 Lower Priority / Future

### Component Composition
- Build higher-level components (Button, Card, Modal, etc.) on primitives
- Document composition patterns

### Documentation
- Add JSDoc to all exports
- Create interactive docs
- Add usage examples

### Testing
- Add unit tests for primitives
- Add visual regression tests
- Add accessibility tests

### Performance
- Memoization strategies
- Code splitting
- Bundle size optimization

---

## Architecture Decisions (Final)

✓ **Semantic-first**: Tokens define meaning, themes map to values
✓ **Constraint-based**: Primitives don't expose arbitrary `style` prop
✓ **Simple default**: Box is a div, not a polymorphic monster
✓ **Tokens as source of truth**: All styling routed through tokens/themes
✓ **CSS variables for runtime**: Enables theme switching without prop drilling
