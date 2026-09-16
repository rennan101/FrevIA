import React from 'react';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { FrevoMapPinIcon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { MOCK_MAP_POINTS } from '@/lib/mock-data';

export const metadata = {
  title: 'Mapa Cultural do Frevo — FrevIA',
  description: 'Descubra os pontos históricos, museus e polos carnavalescos de Recife e Olinda.',
};

export default function MapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="pb-4 border-b border-line">
        <h1 className="font-display font-extrabold text-3xl text-ink">Mapa Cultural do Frevo</h1>
        <p className="text-sm text-muted">Pontos turísticos, agremiações históricas e polos em Recife e Olinda</p>
      </div>

      {/* Visualização de Simulação de Mapa */}
      <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-surface-soft border-2 border-line overflow-hidden flex items-center justify-center shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(#16c7d9_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
        <div className="text-center space-y-2 z-10 px-4">
          <div className="inline-flex p-3 rounded-full bg-frevo-orange text-white shadow-md">
            <FrevoMapPinIcon size={32} />
          </div>
          <h3 className="font-display font-bold text-lg text-ink">Mapa Cultural Interativo de Recife & Olinda</h3>
          <p className="text-xs text-muted max-w-sm">
            Navegue pelos pontos cadastrados ou selecione um local abaixo para obter detalhes e traçar rotas.
          </p>
        </div>
      </div>

      {/* Lista de Pontos Culturais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_MAP_POINTS.map((point) => (
          <FrevoCard key={point.id} stripeColor="orange" className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-frevo-orange/15 text-ink inline-block">
                {point.category}
              </span>

              <h2 className="font-display font-bold text-xl text-ink leading-snug">
                {point.name}
              </h2>

              <p className="text-xs text-muted font-medium">
                📍 {point.address}
              </p>

              <p className="text-xs text-ink-soft leading-relaxed pt-1">
                {point.description}
              </p>
            </div>

            <div className="pt-2 border-t border-line/60">
              <a
                href={`https://maps.google.com/?q=${point.latitude},${point.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" fullWidth className="text-xs">
                  Ver no Google Maps ↗
                </Button>
              </a>
            </div>
          </FrevoCard>
        ))}
      </div>
    </div>
  );
}
