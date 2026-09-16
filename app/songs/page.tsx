import React from 'react';
import Link from 'next/link';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { SheetMusicIcon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { MOCK_SONGS } from '@/lib/mock-data';

export const metadata = {
  title: 'Partituras & Letras de Frevo — FrevIA',
  description: 'Acervo musical, partituras para orquestra e letras dos grandes clássicos.',
};

export default function SongsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <h1 className="font-display font-extrabold text-3xl text-ink">Letras & Partituras</h1>
          <p className="text-sm text-muted">Catálogo aberto e digitalizado para músicos, estudantes e foliões</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_SONGS.map((song) => (
          <FrevoCard key={song.id} stripeColor="cyan" className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-frevo-cyan/20 text-ink">
                  {song.genre}
                </span>
                <span className="text-xs text-muted">Partitura Disponível</span>
              </div>

              <h2 className="font-display font-bold text-2xl text-ink">
                {song.title}
              </h2>
              <p className="text-sm font-semibold text-frevo-orange">
                {song.artist?.name}
              </p>
              <p className="text-xs text-ink-soft line-clamp-2">
                {song.description}
              </p>
            </div>

            {/* Letra Preview */}
            {song.lyrics && (
              <div className="p-3 rounded-md bg-surface-soft border border-line text-xs font-mono text-ink-soft whitespace-pre-line max-h-32 overflow-y-auto">
                {song.lyrics}
              </div>
            )}

            <div className="pt-2 flex items-center gap-3">
              <Button variant="frevo-cyan" size="sm" className="flex items-center gap-2">
                <SheetMusicIcon size={18} />
                Visualizar Partitura
              </Button>
            </div>
          </FrevoCard>
        ))}
      </div>
    </div>
  );
}
