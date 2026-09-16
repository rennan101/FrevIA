import React from 'react';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { FrevoStepIcon } from '@/components/icons';
import { MOCK_STEPS } from '@/lib/mock-data';

export const metadata = {
  title: 'Passos do Frevo — FrevIA',
  description: 'Aprenda os movimentos tradicionais e acrobáticos do passo pernambucano.',
};

export default function StepsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="pb-4 border-b border-line">
        <h1 className="font-display font-extrabold text-3xl text-ink">Galeria de Passos</h1>
        <p className="text-sm text-muted">Aprenda a técnica, postura e gingado dos mestres passistas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_STEPS.map((step) => (
          <FrevoCard key={step.id} stripeColor="green" className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-frevo-green/20 text-ink">
                  {step.difficulty}
                </span>
                <span className="text-xs text-muted font-semibold">{step.category}</span>
              </div>

              <h2 className="font-display font-bold text-2xl text-ink flex items-center gap-2">
                <FrevoStepIcon size={24} className="text-frevo-green" />
                {step.name}
              </h2>

              <p className="text-xs text-ink-soft leading-relaxed">
                {step.description}
              </p>

              <div className="p-3 rounded-md bg-surface-soft border border-line text-xs text-ink space-y-1">
                <span className="font-bold text-[11px] text-muted uppercase tracking-wider block">Como Executar:</span>
                <div className="whitespace-pre-line text-xs font-medium leading-relaxed">
                  {step.instructions}
                </div>
              </div>
            </div>
          </FrevoCard>
        ))}
      </div>
    </div>
  );
}
