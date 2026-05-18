// semantic.ts — defines semantic theme structure (TYPES ONLY)
export type SemanticTheme = {
  surface: {
    primary: string;
    secondary: string;
    elevated: string;
    muted: string;
  };
  background: {
    page: string;
    panel: string;
    overlay: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
  };
  border: {
    default: string;
    muted: string;
  };
  interactive: {
    primary: string;
    hover: string;
    active: string;
    disabled: string;
  };
  shadow: {
    small: string;
    medium: string;
    large: string;
  };
};

export default SemanticTheme;
