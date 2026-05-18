// semantic.ts — defines what tokens mean (semantic roles)
export const semantic = {
  surface: {
    primary: 'surface.primary',
    secondary: 'surface.secondary',
    elevated: 'surface.elevated',
    muted: 'surface.muted',
  },
  background: {
    page: 'background.page',
    panel: 'background.panel',
    overlay: 'background.overlay',
  },
  text: {
    primary: 'text.primary',
    secondary: 'text.secondary',
    muted: 'text.muted',
    inverse: 'text.inverse',
  },
  border: {
    default: 'border.default',
    muted: 'border.muted',
  },
  interactive: {
    primary: 'interactive.primary',
    hover: 'interactive.hover',
    active: 'interactive.active',
    disabled: 'interactive.disabled',
  },
  shadow: {
    small: 'shadow.small',
    medium: 'shadow.medium',
    large: 'shadow.large',
  },
};

export type SemanticTheme = typeof semantic;
export default semantic;
