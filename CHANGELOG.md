# Changelog

All notable changes to this repository will be documented in this file.

## [Unreleased] - 2026-05-18

### Added
- Implemented design tokens: `spacing` (semantic: xs, sm, md, lg, xl...), `radius`, `zIndex`, `motion`, `breakpoints` under `packages/ui/src/tokens/`.
- Added semantic theme architecture under `packages/ui/src/themes/`: `semantic.ts` (type-only), `light.ts`, `dark.ts`, `index.ts`.
- Built lightweight primitives under `packages/ui/src/primitives/`: `Box`, `Stack`, `Flex`, `Text`, `Surface`, `Grid` (React TSX components).
- Added `packages/ui/src/utils/cn.ts` utility for merging Tailwind classes with clsx + twMerge.
- Created `docs/UI_ROADMAP.md` with architecture phases and priorities.
- Added `scripts/append_rules_link.js` to append references to `DESIGN_SYSTEM_RULES.md` in docs.

### Changed
- Expanded `packages/ui/src/tokens/colors.ts` with neutral and primary palettes.
- Enhanced `typography.ts` with semantic variants: display, heading, body, caption (with fontSize, lineHeight, fontWeight).
- Appended navigation footers to `docs/design-system/*` and committed earlier.

### Fixed
- Corrected `semantic.ts` to define types only (no string values), preventing recursive brittleness.
- Removed premature polymorphism from primitives (removed `as` prop, generic types).
- Removed `style` prop from all primitives to enforce design system constraints.
- Fixed `pnpm-workspace.yaml` indentation (tabs → spaces) for proper monorepo support.

### Verified
- TypeScript typecheck: ✓ passes without errors.
- `pnpm install` and workspace setup: ✓ successful.

