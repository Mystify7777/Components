import React from 'react';
import Box from '../Box';

export type FlexProps = {
  direction?: 'row' | 'column';
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  gap?: string | number;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;

export const Flex = ({ direction = 'row', align = 'stretch', justify = 'flex-start', gap, className, children, ...rest }: FlexProps) => {
  const gapValue = typeof gap === 'number' ? `${gap}px` : gap;
  const flexClassName = `flex flex-${direction === 'column' ? 'col' : 'row'} ${className || ''}`;
  const inlineStyles = { '--flex-gap': gapValue } as React.CSSProperties & { '--flex-gap': string };
  return (
    <Box className={flexClassName} {...rest}>
      <style>{`
        .flex { display: flex; align-items: ${align}; justify-content: ${justify}; gap: var(--flex-gap, 0); }
      `}</style>
      {children}
    </Box>
  );
};

export default Flex;
