import React from 'react';
import Link from 'next/link';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { SheetMusicIcon, FrevoStepIcon, BannerHistoryIcon, FrevoMapPinIcon } from '@/components/icons';

export const metadata = {
  title: 'Explorar o Frevo — FrevIA',
  description: 'Acesse músicas, partituras, passos de dança, linha do tempo histórica e mapa cultural.',
};

export default function ExploreHubPage() {
  const categories = [
    {
      title: 'Músicas & Partituras',
      desc: 'Acervo de partituras e letras para orquestras e admiradores.',
      href: '/songs',
      color: 'cyan' as const,
      icon: SheetMusicIcon,
      bg: 'bg-frevo-cyan',
    },
    {
      title: 'Galeria de Passos',
      desc: 'Guia visual e pedagógico com os movimentos clássicos do Frevo.',
      href: '/steps',
      color: 'green' as const,
      icon: FrevoStepIcon,
      bg: 'bg-frevo-green',
    },
    {
      title: 'História & Memória',
      desc: 'Linha do tempo editorial, fontes documentadas e origens.',
      href: '/history',
      color: 'yellow' as const,
      icon: BannerHistoryIcon,
      bg: 'bg-frevo-yellow',
    },
    {
      title: 'Mapa Cultural',
      desc: 'Pontos históricos, sedes de blocos e polos de carnaval.',
      href: '/map',
      color: 'orange' as const,
      icon: FrevoMapPinIcon,
      bg: 'bg-frevo-orange',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="pb-4 border-b border-line">
        <h1 className="font-display font-extrabold text-3xl text-ink">Explorar o Frevo</h1>
        <p className="text-sm text-muted">Mergulhe em todos os pilares do patrimônio cultural pernambucano</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.href} href={cat.href} className="group">
              <FrevoCard stripeColor={cat.color} className="p-6 flex items-start gap-4 h-full group-hover:translate-y-[-2px]">
                <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center text-ink flex-shrink-0 shadow-sm`}>
                  <Icon size={28} />
                </div>
                <div className="space-y-1">
                  <h2 className="font-display font-bold text-xl text-ink group-hover:underline">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </FrevoCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
