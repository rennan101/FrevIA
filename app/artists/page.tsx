import React from 'react';
import Link from 'next/link';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { StickerAvatar } from '@/components/ui/StickerAvatar';
import { MOCK_ARTISTS } from '@/lib/mock-data';

export const metadata = {
  title: 'Artistas & Mestres do Frevo — FrevIA',
  description: 'Catálogo de maestros, orquestras, passistas e agremiações do Frevo de Pernambuco.',
};

export default function ArtistsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <h1 className="font-display font-extrabold text-3xl text-ink">Artistas & Agremiações</h1>
          <p className="text-sm text-muted">Os guardiões e inovadores da música e dança pernambucana</p>
        </div>

        {/* Filtros de Gênero */}
        <div className="flex flex-wrap gap-2">
          {['Todos', 'Frevo de Rua', 'Frevo Canção', 'Frevo de Bloco', 'Frevo Livre'].map((genre, idx) => (
            <button
              key={genre}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                idx === 0
                  ? 'bg-frevo-pink text-white shadow-sm'
                  : 'bg-surface-soft border border-line text-ink hover:bg-line/40'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Artistas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MOCK_ARTISTS.map((artist) => (
          <Link key={artist.id} href={`/artists/${artist.slug}`} className="group">
            <FrevoCard stripeColor="pink" className="p-5 flex flex-col items-center text-center gap-4 h-full justify-between group-hover:translate-y-[-2px]">
              <div className="flex flex-col items-center gap-3">
                <StickerAvatar
                  src={artist.avatar_url}
                  alt={artist.name}
                  size="xl"
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-frevo-pink transition-colors">
                    {artist.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-soft border border-line text-muted inline-block mt-1">
                    {artist.genre}
                  </span>
                </div>
                <p className="text-xs text-ink-soft line-clamp-3 leading-relaxed">
                  {artist.bio}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-line/60 flex items-center justify-around text-xs text-muted font-semibold">
                <span>🎵 {artist.songs_count} músicas</span>
                <span>👥 {artist.followers_count} seguidores</span>
              </div>
            </FrevoCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
