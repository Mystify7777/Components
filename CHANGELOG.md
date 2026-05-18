# Changelog

All notable changes to this repository will be documented in this file.

## [Unreleased] - 2026-05-18

### Added
- Implemented design tokens: `spacing`, `radius`, `zIndex`, `motion`, `breakpoints` under `packages/ui/src/tokens/`.
- Added semantic theme architecture under `packages/ui/src/themes/` (`semantic.ts`, `light.ts`, `dark.ts`, `index.ts`).
- Built lightweight primitives under `packages/ui/src/primitives/`: `Box`, `Stack`, `Flex`, `Text`, `Surface`, `Grid` (react TSX components).
- Added `scripts/append_rules_link.js` to append references to `DESIGN_SYSTEM_RULES.md` in docs.

### Changed
- Expanded `packages/ui/src/tokens/colors.ts` with neutral and primary palettes.
- Appended navigation footers to `docs/design-system/*` and committed earlier.

