import React from 'react';
import Link from 'next/link';
import { FrevoCard } from '@/components/ui/FrevoCard';
import { Button } from '@/components/ui/Button';
import { FrevoUmbrellaIcon } from '@/components/icons';

export const metadata = {
  title: 'Entrar no FrevIA — Comunidade & Painel',
  description: 'Acesse sua conta para curtir, comentar, publicar ou gerenciar conteúdos culturais.',
};

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <FrevoCard stripeColor="gradient" className="p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-frevo mx-auto flex items-center justify-center text-white shadow-sm">
            <FrevoUmbrellaIcon size={28} />
          </div>
          <h1 className="font-display font-extrabold text-2xl text-ink">Bem-vindo ao FrevIA</h1>
          <p className="text-xs text-muted">Entre para participar da comunidade ou acessar seus painéis</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">E-mail</label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-2.5 rounded-md border border-line bg-surface-soft text-sm text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-md border border-line bg-surface-soft text-sm text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange"
            />
          </div>

          <Button variant="primary" fullWidth size="lg">
            Entrar
          </Button>
        </form>

        <div className="text-center text-xs text-muted">
          <span>Ainda não tem conta? </span>
          <Link href="/auth/login" className="font-bold text-frevo-orange hover:underline">
            Cadastre-se
          </Link>
        </div>
      </FrevoCard>
    </div>
  );
}
