import React from 'react';
import { typography } from '../../tokens';

export type TextProps<E extends React.ElementType = 'span'> = {
  as?: E;
  size?: keyof typeof typography['fontSize'];
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'children' | 'style' | 'className'>;

export const Text = <E extends React.ElementType = 'span'>({ as, size = 'body', className, children, style, ...rest }: TextProps<E>) => {
  const Comp = (as || 'span') as any;
  const fontSizeRaw = (typography.fontSize as any)[size] ?? typography.fontSize.body;
  const compStyle: React.CSSProperties = { fontFamily: typography.fontFamily, fontSize: typeof fontSizeRaw === 'number' ? `${fontSizeRaw}px` : fontSizeRaw, ...(style || {}) };
  return (
    <Comp className={className} style={compStyle} {...(rest as any)}>
      {children}
    </Comp>
  );
};

export default Text;
