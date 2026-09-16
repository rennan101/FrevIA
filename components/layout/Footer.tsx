import React from 'react';
import Link from 'next/link';
import { FrevoUmbrellaIcon } from '@/components/icons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-ink text-paper pt-12 pb-24 md:pb-12 mt-16 border-t-4 border-frevo-orange">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-frevo flex items-center justify-center text-white">
              <FrevoUmbrellaIcon size={20} />
            </div>
            <span className="font-display font-bold text-xl text-white">FrevIA</span>
          </div>
          <p className="text-sm text-line/80 leading-relaxed">
            Plataforma cultural e interativa dedicada à preservação, memória, partituras e celebração do Frevo de Pernambuco.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-frevo-yellow text-sm uppercase tracking-wider mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm text-line/80">
            <li><Link href="/feed" className="hover:text-frevo-cyan transition-colors">Feed & Eventos</Link></li>
            <li><Link href="/artists" className="hover:text-frevo-pink transition-colors">Mestres & Artistas</Link></li>
            <li><Link href="/songs" className="hover:text-frevo-green transition-colors">Letras & Partituras</Link></li>
            <li><Link href="/steps" className="hover:text-frevo-yellow transition-colors">Aprenda os Passos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-frevo-cyan text-sm uppercase tracking-wider mb-3">Memória & Espaço</h4>
          <ul className="space-y-2 text-sm text-line/80">
            <li><Link href="/history" className="hover:text-frevo-purple transition-colors">História do Frevo</Link></li>
            <li><Link href="/map" className="hover:text-frevo-orange transition-colors">Mapa Cultural</Link></li>
            <li><Link href="/artist" className="hover:text-frevo-yellow transition-colors">Área do Artista</Link></li>
            <li><Link href="/admin" className="hover:text-frevo-red transition-colors">Painel de Gestão</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-frevo-pink text-sm uppercase tracking-wider mb-3">Patrimônio Vivo</h4>
          <p className="text-xs text-line/70 leading-relaxed">
            O Frevo é Patrimônio Cultural Imaterial da Humanidade pela UNESCO e Patrimônio Cultural do Brasil pelo IPHAN.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-line/20 flex flex-col sm:flex-row items-center justify-between text-xs text-line/60 gap-4">
        <span>© {new Date().getFullYear()} FrevIA — Todos os direitos culturais preservados.</span>
        <span>Recife & Olinda — Pernambuco</span>
      </div>
    </footer>
  );
};
