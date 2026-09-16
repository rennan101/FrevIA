import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { StickerAvatar } from '@/components/ui/StickerAvatar';
import { Button } from '@/components/ui/Button';
import { FrevoUmbrellaIcon, FrevoTrumpetIcon, FrevoStepIcon, SheetMusicIcon, BannerHistoryIcon, FrevoMapPinIcon } from '@/components/icons';
import { MOCK_ARTISTS, MOCK_POSTS, MOCK_STEPS, MOCK_SONGS } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 pb-12 frevo-bg-pattern">
      {/* 1. HERO CULTURAL PRINCIPAL */}
      <section className="relative overflow-hidden pt-8 pb-14 px-4 bg-gradient-hero border-b border-line">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-frevo-yellow/30 border border-frevo-yellow text-ink text-xs font-bold uppercase tracking-wider">
              <FrevoUmbrellaIcon size={16} className="text-frevo-orange" />
              Patrimônio Imaterial da Humanidade
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.08]">
              A efervescência do <span className="text-frevo-red underline decoration-frevo-yellow decoration-wavy decoration-2">Frevo</span> na palma da mão.
            </h1>

            <p className="text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">
              Explore o ecossistema cultural do Frevo pernambucano: partituras de maestros, catálogo de artistas, galeria de passos e mapa histórico.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Link href="/feed">
                <Button variant="primary" size="lg">
                  Explorar o Feed
                </Button>
              </Link>
              <Link href="/songs">
                <Button variant="secondary" size="lg">
                  Ver Partituras
                </Button>
              </Link>
            </div>
          </div>

          {/* Destaque Visual Hero com Sticker */}
          <div className="relative w-full max-w-sm flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-frevo animate-pulse opacity-30 blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border-4 border-white shadow-floating overflow-hidden rotate-2 hover:rotate-0 transition-transform">
                <Image
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
                  alt="Celebração do Frevo em Pernambuco"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ATALHOS RÁPIDOS DE EXPLORAÇÃO */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/songs" className="group">
            <FrevoCard stripeColor="cyan" className="p-4 flex flex-col items-center text-center gap-2 group-hover:translate-y-[-2px]">
              <div className="w-12 h-12 rounded-full bg-frevo-cyan/20 flex items-center justify-center text-ink">
                <SheetMusicIcon size={24} />
              </div>
              <span className="font-display font-bold text-sm text-ink">Partituras & Músicas</span>
            </FrevoCard>
          </Link>

          <Link href="/steps" className="group">
            <FrevoCard stripeColor="green" className="p-4 flex flex-col items-center text-center gap-2 group-hover:translate-y-[-2px]">
              <div className="w-12 h-12 rounded-full bg-frevo-green/20 flex items-center justify-center text-ink">
                <FrevoStepIcon size={24} />
              </div>
              <span className="font-display font-bold text-sm text-ink">Passos de Dança</span>
            </FrevoCard>
          </Link>

          <Link href="/history" className="group">
            <FrevoCard stripeColor="yellow" className="p-4 flex flex-col items-center text-center gap-2 group-hover:translate-y-[-2px]">
              <div className="w-12 h-12 rounded-full bg-frevo-yellow/30 flex items-center justify-center text-ink">
                <BannerHistoryIcon size={24} />
              </div>
              <span className="font-display font-bold text-sm text-ink">História do Frevo</span>
            </FrevoCard>
          </Link>

          <Link href="/map" className="group">
            <FrevoCard stripeColor="orange" className="p-4 flex flex-col items-center text-center gap-2 group-hover:translate-y-[-2px]">
              <div className="w-12 h-12 rounded-full bg-frevo-orange/20 flex items-center justify-center text-ink">
                <FrevoMapPinIcon size={24} />
              </div>
              <span className="font-display font-bold text-sm text-ink">Mapa Cultural</span>
            </FrevoCard>
          </Link>
        </div>
      </section>

      {/* 3. FEED SOCIAL RECENTE */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-2xl text-ink">Acontecendo no Frevo</h2>
            <p className="text-sm text-muted">Publicações, ensaios e lançamentos culturais</p>
          </div>
          <Link href="/feed" className="text-sm font-bold text-frevo-orange hover:underline">
            Ver tudo →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_POSTS.slice(0, 3).map((post) => (
            <FrevoCard
              key={post.id}
              stripeColor={post.type === 'music' ? 'yellow' : post.type === 'event' ? 'orange' : 'cyan'}
              className="flex flex-col justify-between"
            >
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <StickerAvatar
                    src={post.author?.avatar_url || post.artist?.avatar_url}
                    alt={post.author?.display_name || post.artist?.name || 'Autor'}
                    size="sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-ink">{post.author?.display_name || post.artist?.name}</span>
                    <span className="text-[11px] text-muted capitalize">{post.type}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-ink leading-snug line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-ink-soft line-clamp-3 leading-relaxed">
                  {post.excerpt || post.content}
                </p>
              </div>

              <div className="px-5 py-3 bg-surface-soft border-t border-line/60 flex items-center justify-between text-xs text-muted">
                <span>❤️ {post.likes_count} curtidas</span>
                <span>💬 {post.comments_count} comentários</span>
              </div>
            </FrevoCard>
          ))}
        </div>
      </section>

      {/* 4. ARTISTAS & MESTRES EM DESTAQUE */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-2xl text-ink">Mestres & Orquestras</h2>
            <p className="text-sm text-muted">Os grandes nomes e agremiações do Frevo</p>
          </div>
          <Link href="/artists" className="text-sm font-bold text-frevo-pink hover:underline">
            Ver artistas →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_ARTISTS.map((artist) => (
            <Link key={artist.id} href={`/artists/${artist.slug}`} className="group">
              <FrevoCard stripeColor="pink" className="p-5 flex flex-col items-center text-center gap-3 group-hover:translate-y-[-2px]">
                <StickerAvatar
                  src={artist.avatar_url}
                  alt={artist.name}
                  size="lg"
                />
                <div>
                  <h3 className="font-display font-bold text-base text-ink group-hover:text-frevo-pink transition-colors">
                    {artist.name}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-soft border border-line text-muted">
                    {artist.genre}
                  </span>
                </div>
                <p className="text-xs text-ink-soft line-clamp-2 leading-relaxed">
                  {artist.bio}
                </p>
              </FrevoCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
