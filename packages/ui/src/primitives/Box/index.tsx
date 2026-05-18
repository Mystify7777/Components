import React from 'react';

export type BoxProps<E extends React.ElementType = 'div'> = {
  as?: E;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'children' | 'style' | 'className'>;

export const Box = <E extends React.ElementType = 'div'>(props: BoxProps<E>) => {
  const { as, className, children, style, ...rest } = props;
  const Comp = (as || 'div') as any;
  return (
    <Comp className={className} style={style} {...(rest as any)}>
      {children}
    </Comp>
  );
};

export default Box;
