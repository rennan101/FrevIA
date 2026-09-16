import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface StickerAvatarProps {
  src?: string | null;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  badge?: React.ReactNode;
}

export const StickerAvatar: React.FC<StickerAvatarProps> = ({
  src,
  alt,
  size = 'md',
  className,
  badge,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 border-2',
    md: 'w-14 h-14 border-[3px]',
    lg: 'w-20 h-20 border-4',
    xl: 'w-28 h-28 border-[5px]',
  };

  const initials = alt
    ? alt.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : 'FR';

  return (
    <div className={cn('relative inline-block flex-shrink-0', className)}>
      <div
        className={cn(
          'relative rounded-full overflow-hidden bg-surface-soft border-white shadow-sticker flex items-center justify-center font-display font-bold text-ink',
          sizeClasses[size]
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100px, 150px"
            className="object-cover"
          />
        ) : (
          <span className="text-sm">{initials}</span>
        )}
      </div>
      {badge && (
        <div className="absolute -bottom-1 -right-1 z-10">
          {badge}
        </div>
      )}
    </div>
  );
};
