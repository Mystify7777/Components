import React from 'react';
import { typography } from '../../tokens';

export type TextVariant = keyof typeof typography['variants'];

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: TextVariant;
  as?: 'span' | 'p' | 'div';
  className?: string;
  children?: React.ReactNode;
};

export const Text = ({ variant = 'body', as: Component = 'span', className, children, ...rest }: TextProps) => {
  const variantStyles = typography.variants[variant];
  const textClassName = `text-variant-${variant} ${className || ''}`;
  const inlineStyles: React.CSSProperties = {
    fontFamily: typography.fontFamily,
    fontSize: `${variantStyles.fontSize}px`,
    lineHeight: variantStyles.lineHeight,
    fontWeight: variantStyles.fontWeight,
  };
  return (
    <Component className={textClassName} style={inlineStyles} {...(rest as any)}>
      {children}
    </Component>
  );
};

export default Text;
