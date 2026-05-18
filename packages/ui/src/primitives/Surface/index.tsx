import React from 'react';
import Box from '../Box';
import { shadows } from '../../tokens';

export type SurfaceProps<E extends React.ElementType = 'div'> = {
  as?: E;
  elevation?: 'none' | 'small' | 'medium' | 'large';
  radius?: keyof typeof import('../../tokens').radius;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'children' | 'style' | 'className'>;

const elevationMap: Record<string, string> = {
  none: 'none',
  small: (shadows as any).sm || '0 1px 2px rgba(0,0,0,0.05)',
  medium: (shadows as any).md || '0 8px 24px rgba(0,0,0,0.08)',
  large: (shadows as any).lg || '0 24px 48px rgba(0,0,0,0.12)',
};

export const Surface = <E extends React.ElementType = 'div'>({ as, elevation = 'small', radius, className, children, style, ...rest }: SurfaceProps<E>) => {
  const compStyle: React.CSSProperties = { boxShadow: elevationMap[elevation] === 'none' ? undefined : elevationMap[elevation], borderRadius: radius ? (require('../../tokens').radius as any)[radius] : undefined, ...(style || {}) };
  return (
    <Box as={as as any} className={className} style={compStyle} {...(rest as any)}>
      {children}
    </Box>
  );
};

export default Surface;
