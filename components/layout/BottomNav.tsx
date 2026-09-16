'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { HomeIcon, FeedIcon, ArtistsIcon, ExploreIcon, ProfileIcon } from '@/components/icons';

const NAV_ITEMS = [
  { label: 'Início', href: '/', icon: HomeIcon, accentColor: 'bg-frevo-orange' },
  { label: 'Feed', href: '/feed', icon: FeedIcon, accentColor: 'bg-frevo-cyan' },
  { label: 'Artistas', href: '/artists', icon: ArtistsIcon, accentColor: 'bg-frevo-pink' },
  { label: 'Explorar', href: '/explore', icon: ExploreIcon, accentColor: 'bg-frevo-green' },
  { label: 'Perfil', href: '/profile', icon: ProfileIcon, accentColor: 'bg-frevo-yellow' },
];

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  // Esconder em rotas de admin dedicadas se necessário
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <nav
      aria-label="Navegação Principal Mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-line pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center justify-around h-16 px-2 max-w-lg mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative flex flex-col items-center justify-center w-full h-full text-xs font-semibold transition-colors duration-150 py-1 min-h-[44px]',
                isActive ? 'text-ink font-bold' : 'text-muted hover:text-ink'
              )}
            >
              {/* Indicador de acento colorido ativo do Frevo */}
              {isActive && (
                <span
                  className={cn(
                    'absolute top-0 w-8 h-1 rounded-b-full',
                    item.accentColor
                  )}
                />
              )}
              <Icon size={22} className={cn(isActive && 'scale-110 transition-transform')} />
              <span className="mt-1 text-[11px] leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
