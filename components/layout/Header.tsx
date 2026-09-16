import React from 'react';
import Link from 'next/link';
import { FrevoUmbrellaIcon } from '@/components/icons';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-paper/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Cultural */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-md bg-gradient-frevo flex items-center justify-center text-ink shadow-sm group-hover:scale-105 transition-transform">
            <FrevoUmbrellaIcon size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-2xl tracking-tight text-ink leading-none">
              Frev<span className="text-frevo-orange">IA</span>
            </span>
            <span className="text-[10px] font-semibold text-muted tracking-wider uppercase">Cultura de Pernambuco</span>
          </div>
        </Link>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-sm text-ink">
          <Link href="/" className="hover:text-frevo-orange transition-colors">Início</Link>
          <Link href="/feed" className="hover:text-frevo-cyan transition-colors">Feed</Link>
          <Link href="/artists" className="hover:text-frevo-pink transition-colors">Artistas</Link>
          <Link href="/songs" className="hover:text-frevo-yellow transition-colors">Partituras & Músicas</Link>
          <Link href="/steps" className="hover:text-frevo-green transition-colors">Passos</Link>
          <Link href="/history" className="hover:text-frevo-purple transition-colors">História</Link>
          <Link href="/map" className="hover:text-frevo-orange transition-colors">Mapa</Link>
        </nav>

        {/* Ação de Entrada */}
        <div className="flex items-center gap-3">
          <Link href="/auth/login">
            <Button variant="secondary" size="sm">
              Entrar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
