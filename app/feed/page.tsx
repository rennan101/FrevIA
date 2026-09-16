import React from 'react';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { StickerAvatar } from '@/components/ui/StickerAvatar';
import { Button } from '@/components/ui/Button';
import { HeartIcon, CommentIcon, ShareIcon } from '@/components/icons';
import { MOCK_POSTS } from '@/lib/mock-data';

export const metadata = {
  title: 'Feed Cultural — FrevIA',
  description: 'Acompanhe as últimas publicações, notícias, eventos e partituras do Frevo.',
};

export default function FeedPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-line">
        <div>
          <h1 className="font-display font-extrabold text-3xl text-ink">Feed Cultural</h1>
          <p className="text-sm text-muted">A pulsação do Frevo em tempo real</p>
        </div>
        <Button variant="primary" size="sm">
          + Novo Post
        </Button>
      </div>

      {/* Feed List */}
      <div className="space-y-6">
        {MOCK_POSTS.map((post) => {
          const stripeMap = {
            event: 'orange' as const,
            news: 'cyan' as const,
            music: 'yellow' as const,
            score: 'green' as const,
            artist: 'pink' as const,
            culture: 'purple' as const,
          };

          return (
            <FrevoCard key={post.id} stripeColor={stripeMap[post.type] || 'cyan'} className="p-0">
              {/* Header do Post */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <StickerAvatar
                    src={post.author?.avatar_url || post.artist?.avatar_url}
                    alt={post.author?.display_name || post.artist?.name || 'Autor'}
                    size="sm"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-ink leading-tight">
                      {post.author?.display_name || post.artist?.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-muted">
                      <span className="capitalize px-1.5 py-0.5 rounded bg-surface-soft border border-line">
                        {post.type}
                      </span>
                      <span>•</span>
                      <span>Hoje</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="px-4 pb-3 space-y-2">
                <h2 className="font-display font-bold text-xl text-ink leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {post.content}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2 py-0.5 rounded-full bg-frevo-cyan/15 text-ink"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Ações Sociais */}
              <div className="px-4 py-3 bg-surface-soft border-t border-line/60 flex items-center justify-between text-xs text-muted">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 font-bold text-ink hover:text-frevo-red transition-colors min-h-[44px]">
                    <HeartIcon size={20} filled={post.is_liked} className={post.is_liked ? "text-frevo-red" : ""} />
                    <span>{post.likes_count}</span>
                  </button>
                  <button className="flex items-center gap-1.5 font-bold text-ink hover:text-frevo-cyan transition-colors min-h-[44px]">
                    <CommentIcon size={20} />
                    <span>{post.comments_count}</span>
                  </button>
                </div>
                <button className="flex items-center gap-1.5 font-bold text-ink hover:text-frevo-orange transition-colors min-h-[44px]">
                  <ShareIcon size={20} />
                  <span>Compartilhar</span>
                </button>
              </div>
            </FrevoCard>
          );
        })}
      </div>
    </div>
  );
}
