/**
 * cssVariables.ts
 * 
 * TypeScript reference for CSS variables defined in theme.css
 * Use these as values with var(--variable-name) in CSS
 * 
 * Serves as documentation and IDE autocomplete reference.
 */

export const cssVariables = {
  // Surface tokens
  surfacePrimary: 'var(--surface-primary)',
  surfaceSecondary: 'var(--surface-secondary)',
  surfaceElevated: 'var(--surface-elevated)',
  surfaceMuted: 'var(--surface-muted)',

  // Background tokens
  backgroundPage: 'var(--background-page)',
  backgroundPanel: 'var(--background-panel)',
  backgroundOverlay: 'var(--background-overlay)',

  // Text tokens
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textMuted: 'var(--text-muted)',
  textInverse: 'var(--text-inverse)',

  // Border tokens
  borderDefault: 'var(--border-default)',
  borderMuted: 'var(--border-muted)',

  // Interactive tokens
  interactivePrimary: 'var(--interactive-primary)',
  interactiveHover: 'var(--interactive-hover)',
  interactiveActive: 'var(--interactive-active)',
  interactiveDisabled: 'var(--interactive-disabled)',

  // Shadow tokens
  shadowSmall: 'var(--shadow-small)',
  shadowMedium: 'var(--shadow-medium)',
  shadowLarge: 'var(--shadow-large)',

  // Spacing tokens (semantic)
  spacingXs: 'var(--spacing-xs)',
  spacingSm: 'var(--spacing-sm)',
  spacingMd: 'var(--spacing-md)',
  spacingLg: 'var(--spacing-lg)',
  spacingXl: 'var(--spacing-xl)',
  spacingXxl: 'var(--spacing-xxl)',
  spacingXxxl: 'var(--spacing-xxxl)',

  // Radius tokens
  radiusSm: 'var(--radius-sm)',
  radiusMd: 'var(--radius-md)',
  radiusLg: 'var(--radius-lg)',
  radiusXl: 'var(--radius-xl)',
  radiusFull: 'var(--radius-full)',

  // Z-index tokens
  zBackground: 'var(--z-background)',
  zDefault: 'var(--z-default)',
  zDropdown: 'var(--z-dropdown)',
  zSticky: 'var(--z-sticky)',
  zOverlay: 'var(--z-overlay)',
  zModal: 'var(--z-modal)',
  zToast: 'var(--z-toast)',
  zTooltip: 'var(--z-tooltip)',

  // Motion duration tokens
  motionDurationFastest: 'var(--motion-duration-fastest)',
  motionDurationFast: 'var(--motion-duration-fast)',
  motionDurationNormal: 'var(--motion-duration-normal)',
  motionDurationSlow: 'var(--motion-duration-slow)',
  motionDurationSlowest: 'var(--motion-duration-slowest)',

  // Motion easing tokens
  motionEasingStandard: 'var(--motion-easing-standard)',
  motionEasingDeceleration: 'var(--motion-easing-deceleration)',
  motionEasingAcceleration: 'var(--motion-easing-acceleration)',
  motionEasingSharp: 'var(--motion-easing-sharp)',

  // Opacity tokens
  opacityHigh: 'var(--opacity-high)',
  opacityMedium: 'var(--opacity-medium)',
  opacityLow: 'var(--opacity-low)',

  // Font family
  fontFamily: 'var(--font-family)',
} as const;

export type CSSVariable = typeof cssVariables[keyof typeof cssVariables];

export default cssVariables;
