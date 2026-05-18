import React from 'react';

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const Box = ({ className, children, ...rest }: BoxProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Box;
