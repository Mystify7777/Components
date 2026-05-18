import React from 'react';
import { shadows, radius } from '../../tokens';

export type SurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  elevation?: 'none' | 'small' | 'medium' | 'large';
  radius?: keyof typeof radius;
  className?: string;
  children?: React.ReactNode;
};

const elevationMap: Record<string, string> = {
  none: 'none',
  small: (shadows as any).small || '0 1px 2px rgba(0,0,0,0.05)',
  medium: (shadows as any).medium || '0 8px 24px rgba(0,0,0,0.08)',
  large: (shadows as any).large || '0 24px 48px rgba(0,0,0,0.12)',
};

export const Surface = ({ elevation = 'small', radius: radiusKey, className, children, ...rest }: SurfaceProps) => {
  const radiusValue = radiusKey ? (radius as Record<string, string>)[radiusKey] : undefined;
  const surfaceClassName = `surface surface-${elevation} ${className || ''}`;
  const inlineStyles: React.CSSProperties = {
    boxShadow: elevationMap[elevation] === 'none' ? undefined : elevationMap[elevation],
    borderRadius: radiusValue,
  };
  return (
    <div className={surfaceClassName} style={inlineStyles} {...rest}>
      {children}
    </div>
  );
};

export default Surface;
