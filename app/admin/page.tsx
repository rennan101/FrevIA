import React from 'react';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Painel de Gestão (CMS) — FrevIA Admin',
  description: 'Moderação de conteúdo, autorização de artistas e métricas da plataforma.',
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <h1 className="font-display font-extrabold text-3xl text-ink">Painel Administrativo</h1>
          <p className="text-sm text-muted">Controle editorial, aprovação de partituras e gestão cultural</p>
        </div>
      </div>

      {/* Indicadores do CMS */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <FrevoCard stripeColor="orange" className="p-4">
          <span className="text-xs font-bold text-muted uppercase">Posts Totais</span>
          <p className="font-display font-extrabold text-2xl text-ink mt-1">48</p>
        </FrevoCard>
        <FrevoCard stripeColor="cyan" className="p-4">
          <span className="text-xs font-bold text-muted uppercase">Partituras</span>
          <p className="font-display font-extrabold text-2xl text-ink mt-1">112</p>
        </FrevoCard>
        <FrevoCard stripeColor="pink" className="p-4">
          <span className="text-xs font-bold text-muted uppercase">Artistas</span>
          <p className="font-display font-extrabold text-2xl text-ink mt-1">34</p>
        </FrevoCard>
        <FrevoCard stripeColor="yellow" className="p-4">
          <span className="text-xs font-bold text-muted uppercase">Revisões Pendentes</span>
          <p className="font-display font-extrabold text-2xl text-frevo-red mt-1">3</p>
        </FrevoCard>
      </div>

      {/* Fila de Moderação */}
      <div className="space-y-4">
        <h2 className="font-display font-bold text-xl text-ink">Fila de Revisão de Músicas & Partituras</h2>
        <div className="bg-white rounded-lg border border-line overflow-hidden shadow-sm">
          <div className="p-4 border-b border-line bg-surface-soft flex items-center justify-between text-xs font-bold text-muted uppercase">
            <span>Obra</span>
            <span>Artista</span>
            <span>Data</span>
            <span>Ação</span>
          </div>

          <div className="divide-y divide-line">
            <div className="p-4 flex items-center justify-between text-sm">
              <span className="font-bold text-ink">Marcha da Madrugada</span>
              <span className="text-xs text-muted">Maestro Forró</span>
              <span className="text-xs text-muted">Hoje, 14:20</span>
              <div className="flex gap-2">
                <Button variant="frevo-green" size="sm" className="text-xs">Aprovar & Publicar</Button>
                <Button variant="destructive" size="sm" className="text-xs">Rejeitar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
