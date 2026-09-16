import React from 'react';
import { cn } from '@/lib/utils';

export interface FrevoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stripeColor?: 'cyan' | 'green' | 'yellow' | 'orange' | 'red' | 'pink' | 'purple' | 'gradient';
  stripePosition?: 'top' | 'left' | 'none';
  tilt?: boolean;
}

export const FrevoCard: React.FC<FrevoCardProps> = ({
  stripeColor = 'cyan',
  stripePosition = 'top',
  tilt = false,
  className,
  children,
  ...props
}) => {
  const stripeColors = {
    cyan: 'bg-frevo-cyan',
    green: 'bg-frevo-green',
    yellow: 'bg-frevo-yellow',
    orange: 'bg-frevo-orange',
    red: 'bg-frevo-red',
    pink: 'bg-frevo-pink',
    purple: 'bg-frevo-purple',
    gradient: 'bg-gradient-frevo',
  };

  return (
    <div
      className={cn(
        'relative bg-white rounded-lg overflow-hidden border border-line shadow-card transition-all duration-200 hover:shadow-floating',
        tilt && 'hover:-rotate-1',
        className
      )}
      {...props}
    >
      {stripePosition === 'top' && (
        <div className={cn('h-2 w-full', stripeColors[stripeColor])} />
      )}
      {stripePosition === 'left' && (
        <div className={cn('absolute left-0 top-0 bottom-0 w-2', stripeColors[stripeColor])} />
      )}
      <div className={cn(stripePosition === 'left' && 'pl-4')}>
        {children}
      </div>
    </div>
  );
};
