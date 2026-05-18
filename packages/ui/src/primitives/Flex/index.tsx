import React from 'react';
import Box from '../Box';

export type FlexProps = {
  as?: React.ElementType;
  direction?: 'row' | 'column';
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  gap?: React.CSSProperties['gap'];
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Flex = ({ as, direction = 'row', align = 'stretch', justify = 'flex-start', gap, className, children, style, ...rest }: FlexProps & { style?: React.CSSProperties }) => {
  const compStyle: React.CSSProperties = { display: 'flex', flexDirection: direction, alignItems: align, justifyContent: justify, gap, ...(style || {}) };
  return (
    <Box as={as as any} className={className} style={compStyle} {...rest}>
      {children}
    </Box>
  );
};

export default Flex;
