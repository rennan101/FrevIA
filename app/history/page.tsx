import React from 'react';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { BannerHistoryIcon } from '@/components/icons';
import { MOCK_HISTORY } from '@/lib/mock-data';

export const metadata = {
  title: 'História do Frevo — FrevIA',
  description: 'A trajetória secular do Frevo de Pernambuco da capoeira ao reconhecimento da UNESCO.',
};

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="pb-4 border-b border-line">
        <h1 className="font-display font-extrabold text-3xl text-ink">História & Memória</h1>
        <p className="text-sm text-muted">Linha do tempo editorial baseada em pesquisas e fontes históricas</p>
      </div>

      <div className="relative border-l-4 border-frevo-yellow ml-4 pl-6 space-y-8">
        {MOCK_HISTORY.map((entry) => (
          <div key={entry.id} className="relative">
            {/* Marcador na Linha do Tempo */}
            <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-frevo-yellow border-4 border-paper shadow-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-ink" />
            </div>

            <FrevoCard stripeColor="yellow" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-frevo-yellow/30 text-ink">
                  {entry.period_label}
                </span>
                {entry.year_start && (
                  <span className="font-display font-bold text-sm text-muted">
                    {entry.year_start}
                  </span>
                )}
              </div>

              <h2 className="font-display font-bold text-2xl text-ink flex items-center gap-2">
                <BannerHistoryIcon size={22} className="text-frevo-orange" />
                {entry.title}
              </h2>

              <p className="text-sm text-ink-soft leading-relaxed">
                {entry.content}
              </p>

              {entry.source_text && (
                <div className="pt-2 text-xs text-muted border-t border-line/60">
                  <span className="font-bold">Fonte / Referência:</span> {entry.source_text}
                </div>
              )}
            </FrevoCard>
          </div>
        ))}
      </div>
    </div>
  );
}
