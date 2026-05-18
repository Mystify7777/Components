import React from 'react';
import Box from '../Box';
import { spacing } from '../../tokens';

export type StackProps = {
  as?: React.ElementType;
  direction?: 'column' | 'row';
  gap?: keyof typeof spacing | number;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Stack = ({ as, direction = 'column', gap = 4, className, children, style, ...rest }: StackProps & { style?: React.CSSProperties }) => {
  const gapValue = typeof gap === 'number' ? (spacing as any)[gap] ?? `${gap}px` : (spacing as any)[gap];
  const compStyle: React.CSSProperties = { display: 'flex', flexDirection: direction, gap: gapValue, ...(style || {}) };
  return (
    <Box as={as as any} className={className} style={compStyle} {...rest}>
      {children}
    </Box>
  );
};

export default Stack;
