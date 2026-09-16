import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'frevo-cyan' | 'frevo-green';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frevo-orange focus-visible:ring-offset-2 select-none min-h-[44px]';

    const variants = {
      primary: 'bg-frevo-orange text-ink hover:bg-[#e67c00] shadow-md hover:shadow-lg',
      secondary: 'bg-frevo-yellow text-ink hover:bg-[#ebd024] shadow-sm',
      'frevo-cyan': 'bg-frevo-cyan text-ink hover:bg-[#12b3c4] shadow-sm',
      'frevo-green': 'bg-frevo-green text-ink hover:bg-[#32c27b] shadow-sm',
      outline: 'border-2 border-ink text-ink bg-transparent hover:bg-surface-soft',
      ghost: 'text-ink hover:bg-black/5',
      destructive: 'bg-frevo-red text-white hover:bg-[#d63a25] shadow-sm',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 rounded-sm min-h-[36px]',
      md: 'text-sm px-4 py-2 rounded-md min-h-[44px]',
      lg: 'text-base px-6 py-3 rounded-lg min-h-[50px]',
      icon: 'w-11 h-11 p-0 rounded-full flex items-center justify-center',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
