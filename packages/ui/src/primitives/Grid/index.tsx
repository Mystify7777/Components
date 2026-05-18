import React from 'react';
import Box from '../Box';

export type GridProps = {
  as?: React.ElementType;
  cols?: number;
  gap?: React.CSSProperties['gap'];
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Grid = ({ as, cols = 12, gap = '16px', className, children, style, ...rest }: GridProps & { style?: React.CSSProperties }) => {
  const compStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap, ...(style || {}) };
  return (
    <Box as={as as any} className={className} style={compStyle} {...rest}>
      {children}
    </Box>
  );
};

export default Grid;
