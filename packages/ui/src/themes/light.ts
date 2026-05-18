import colors from '../tokens/colors';
import type SemanticTheme from './semantic';

// Map semantic roles to concrete light theme values
export const light: SemanticTheme = {
  surface: {
    primary: colors.neutral[0],
    secondary: colors.neutral[50],
    elevated: colors.neutral[100],
    muted: colors.neutral[200],
  },
  background: {
    page: colors.neutral[0],
    panel: colors.neutral[50],
    overlay: 'rgba(11,16,32,0.6)',
  },
  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[700],
    muted: colors.neutral[500],
    inverse: colors.neutral[0],
  },
  border: {
    default: colors.neutral[200],
    muted: colors.neutral[300],
  },
  interactive: {
    primary: colors.primary[500],
    hover: colors.primary[600],
    active: colors.primary[700],
    disabled: colors.neutral[300],
  },
  shadow: {
    small: '0 1px 2px rgba(16,24,40,0.04)',
    medium: '0 8px 24px rgba(16,24,40,0.08)',
    large: '0 24px 48px rgba(16,24,40,0.12)',
  },
};

export default light;
