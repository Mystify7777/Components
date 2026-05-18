import React from 'react';
import { spacing } from '../../tokens';

export type StackProps = {
  direction?: 'column' | 'row';
  gap?: keyof typeof spacing;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;

export const Stack = ({ direction = 'column', gap = 'md', className, children, ...rest }: StackProps) => {
  const gapValue = (spacing as Record<string, string>)[gap] || spacing.md;
  const stackClassName = `flex flex-${direction === 'column' ? 'col' : 'row'} ${className || ''}`;
  return (
    <div className={stackClassName} style={{ display: 'flex', flexDirection: direction, gap: gapValue }} {...rest}>
      {children}
    </div>
  );
};

export default Stack;
