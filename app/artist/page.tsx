import React from 'react';
import Link from 'next/link';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { Button } from '@/components/ui/Button';
import { SheetMusicIcon } from '@/components/icons';

export const metadata = {
  title: 'Painel do Artista — FrevIA',
  description: 'Gerencie seu perfil, envie partituras e acompanhe revisões.',
};

export default function ArtistDashboardPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <h1 className="font-display font-extrabold text-3xl text-ink">Painel do Artista</h1>
          <p className="text-sm text-muted">Cadastre novas obras, letras e envie partituras para revisão</p>
        </div>

        <Button variant="primary" size="sm" className="flex items-center gap-2">
          <SheetMusicIcon size={18} />
          + Nova Música / Partitura
        </Button>
      </div>

      {/* Métricas / Cards Rápidos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FrevoCard stripeColor="cyan" className="p-5">
          <span className="text-xs font-bold text-muted uppercase">Músicas Publicadas</span>
          <p className="font-display font-extrabold text-3xl text-ink mt-1">12</p>
        </FrevoCard>

        <FrevoCard stripeColor="yellow" className="p-5">
          <span className="text-xs font-bold text-muted uppercase">Em Revisão</span>
          <p className="font-display font-extrabold text-3xl text-frevo-orange mt-1">1</p>
        </FrevoCard>

        <FrevoCard stripeColor="pink" className="p-5">
          <span className="text-xs font-bold text-muted uppercase">Seguidores</span>
          <p className="font-display font-extrabold text-3xl text-ink mt-1">1.420</p>
        </FrevoCard>
      </div>

      {/* Tabela / Lista de Músicas do Artista */}
      <div className="space-y-4">
        <h2 className="font-display font-bold text-xl text-ink">Suas Músicas & Partituras</h2>
        <div className="bg-white rounded-lg border border-line overflow-hidden shadow-sm">
          <div className="p-4 border-b border-line bg-surface-soft flex items-center justify-between text-xs font-bold text-muted uppercase">
            <span>Título</span>
            <span>Gênero</span>
            <span>Status</span>
            <span>Ações</span>
          </div>

          <div className="divide-y divide-line">
            <div className="p-4 flex items-center justify-between text-sm">
              <span className="font-bold text-ink">Passo da Fervura</span>
              <span className="text-xs text-muted">Frevo Livre</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-frevo-green/20 text-frevo-green">Publicado</span>
              <button className="text-xs font-bold text-frevo-orange hover:underline">Editar</button>
            </div>
            <div className="p-4 flex items-center justify-between text-sm">
              <span className="font-bold text-ink">Marcha da Madrugada</span>
              <span className="text-xs text-muted">Frevo de Rua</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-frevo-yellow/40 text-ink">Em Revisão</span>
              <button className="text-xs font-bold text-frevo-orange hover:underline">Ver Status</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
