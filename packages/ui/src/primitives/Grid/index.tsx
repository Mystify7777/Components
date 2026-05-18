import React from 'react';
import { spacing } from '../../tokens';

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: number;
  gap?: keyof typeof spacing;
  className?: string;
  children?: React.ReactNode;
};

export const Grid = ({ cols = 12, gap = 'md', className, children, ...rest }: GridProps) => {
  const gapValue = (spacing as Record<string, string>)[gap] || spacing.md;
  const gridClassName = `grid grid-cols-${cols} ${className || ''}`;
  const inlineStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gap: gapValue,
  };
  return (
    <div className={gridClassName} style={inlineStyles} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
