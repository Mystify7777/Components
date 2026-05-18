import colors from '../tokens/colors';
import type SemanticTheme from './semantic';

// Map semantic roles to concrete dark theme values
export const dark: SemanticTheme = {
  surface: {
    primary: colors.neutral[900],
    secondary: colors.neutral[800],
    elevated: colors.neutral[700],
    muted: colors.neutral[600],
  },
  background: {
    page: colors.neutral[900],
    panel: colors.neutral[800],
    overlay: 'rgba(11,16,32,0.8)',
  },
  text: {
    primary: colors.neutral[50],
    secondary: colors.neutral[100],
    muted: colors.neutral[300],
    inverse: colors.neutral[900],
  },
  border: {
    default: colors.neutral[700],
    muted: colors.neutral[600],
  },
  interactive: {
    primary: colors.primary[400],
    hover: colors.primary[300],
    active: colors.primary[200],
    disabled: colors.neutral[700],
  },
  shadow: {
    small: '0 1px 2px rgba(4,6,10,0.6)',
    medium: '0 8px 24px rgba(4,6,10,0.6)',
    large: '0 24px 48px rgba(4,6,10,0.6)',
  },
};

export default dark;
