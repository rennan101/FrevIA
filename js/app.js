// ============================================================================
// FREVAI — APLICATIVO PRINCIPAL / BOOTSTRAP & ORQUESTRADOR DE ROTAS
// ============================================================================
// Todos os módulos específicos foram desacoplados em js/modules/
// - DB & Estado Central: js/modules/db.js
// - Autenticação & Sessão: js/modules/auth.js
// - Notificações: js/modules/notifications.js
// - Infinite Scroll: js/modules/infinite-scroll.js
// - Motor de Partituras & Exportação PDF: js/modules/score-engine.js
// - Player de Áudio & Letras: js/modules/audio-player.js
// - Modais: js/modules/modals/ (alert-modal.js, session-modal.js, song-modal.js, album-modal.js)
// - Views: js/modules/views/ (feed.js, artists.js, songs.js, steps.js, history.js, map.js, admin.js)
// ============================================================================

let currentView = 'feed';
let deferredPrompt = null;

// ==========================================
// ROTEAMENTO DE VIEWS & INTERFACE
// ==========================================
function switchView(viewName) {
  if (!viewName) viewName = 'feed';

  // Tratar aliases comuns
  if (viewName === 'admin') viewName = 'admin-panel';
  if (viewName === 'profile') viewName = 'artist-panel';

  currentView = viewName;

  // Atualizar botões de navegação no menu inferior e sidebar desktop
  document.querySelectorAll('.nav-item, [data-view]').forEach(btn => {
    const target = btn.dataset.view;
    const isActive = (target === viewName) ||
      (target === 'artist-panel' && (viewName === 'profile' || viewName === 'artist-panel')) ||
      (target === 'admin-panel' && (viewName === 'admin' || viewName === 'admin-panel'));
    btn.classList.toggle('active', isActive);
  });

  // Ocultar todas as views e exibir a view ativa
  document.querySelectorAll('.view-section').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(`view-${viewName}`);
  if (activeSection) {
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
  }

  // Scroll para o topo suave
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // SEO & Open Graph Dinâmico por View
  const viewTitles = {
    'feed': 'Início — A Rede Cultural do Frevo',
    'explore': 'Explorar o Universo do Frevo',
    'artists': 'Mestres & Agremiações do Frevo',
    'songs': 'Acervo de Letras & Partituras em PDF',
    'steps': 'Guia Pedagógico de Passos de Frevo',
    'history': 'História e Memória do Frevo de Pernambuco',
    'map': 'Mapa Cultural — Polos e Agremiações',
    'artist-panel': 'Meu Perfil Cultural',
    'admin-panel': 'Painel de Gestão & Moderação Curatorial'
  };

  if (typeof window.updateDynamicMetaTags === 'function') {
    window.updateDynamicMetaTags({
      title: viewTitles[viewName] || 'FrevAI',
      description: `Explore ${viewTitles[viewName] || 'o Frevo de Pernambuco'} no FrevAI — a plataforma de salvaguarda cultural.`
    });
  }

  if (window.FrevAIAnalytics && typeof window.FrevAIAnalytics.trackViewChange === 'function') {
    window.FrevAIAnalytics.trackViewChange(viewName);
  }

  // Renderizar o conteúdo da view correspondente
  switch (viewName) {
    case 'feed':
      if (typeof window.renderStories === 'function') window.renderStories();
      if (typeof window.renderFeed === 'function') window.renderFeed();
      break;
    case 'explore':
      // View do hub de exploração estático
      break;
    case 'artists':
      if (typeof window.renderArtistsGrid === 'function') window.renderArtistsGrid();
      else if (typeof window.renderArtists === 'function') window.renderArtists();
      break;
    case 'songs':
      if (typeof window.renderSongsList === 'function') window.renderSongsList();
      else if (typeof window.renderSongs === 'function') window.renderSongs();
      break;
    case 'steps':
      if (typeof window.renderStepsList === 'function') window.renderStepsList();
      else if (typeof window.renderSteps === 'function') window.renderSteps();
      break;
    case 'history':
      if (typeof window.renderHistoryTimeline === 'function') window.renderHistoryTimeline();
      else if (typeof window.renderHistory === 'function') window.renderHistory();
      break;
    case 'map':
      if (typeof window.renderMapPoints === 'function') window.renderMapPoints();
      else if (typeof window.renderMap === 'function') window.renderMap();
      break;
    case 'artist-panel':
    case 'profile':
      if (typeof window.updateProfileUI === 'function') window.updateProfileUI();
      if (typeof window.renderProfileGallery === 'function') window.renderProfileGallery();
      break;
    case 'admin-panel':
    case 'admin':
      if (typeof window.renderAdminPanel === 'function') window.renderAdminPanel();
      else if (typeof window.renderAdminCMS === 'function') window.renderAdminCMS();
      break;
  }
}

// ==========================================
// PWA & GESTÃO DE INSTALAÇÃO
// ==========================================
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  checkPwaPrompt();
});

function checkPwaPrompt() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) return;

  const dismissed = localStorage.getItem('frevai_pwa_dismissed');
  if (dismissed) return;

  const banner = document.getElementById('pwa-install-banner');
  if (banner) {
    banner.classList.remove('hidden');
  }
}

function dismissPwaBanner() {
  localStorage.setItem('frevai_pwa_dismissed', 'true');
  const banner = document.getElementById('pwa-install-banner');
  if (banner) {
    banner.classList.add('hidden');
  }
}

async function installPwa() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      dismissPwaBanner();
    }
    deferredPrompt = null;
  } else {
    openPwaInstructionsModal();
  }
}

function openPwaInstructionsModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-12 h-12 rounded-2xl bg-frevo-orange/10 text-frevo-orange flex items-center justify-center flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Instalar FrevAI App</h3>
          <p class="text-xs text-muted">Acesse instantaneamente da sua tela inicial até mesmo offline</p>
        </div>
      </div>

      <div class="space-y-3">
        <!-- Instruções iOS / Safari -->
        <div class="p-3.5 bg-surface-soft rounded-2xl border border-gray-200/80 space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-ink">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-stone-700">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.61-.74 1.03-1.77.91-2.8-.89.04-1.99.6-2.63 1.34-.56.64-.99 1.68-.86 2.69.99.08 2-.51 2.58-1.23z"/>
            </svg>
            No iPhone / iPad (Safari)
          </div>
          <ol class="text-xs text-ink-soft space-y-1.5 pl-5 list-decimal">
            <li>Toque no botão de <strong>Compartilhar</strong> (ícone de quadrado com seta para cima na barra inferior).</li>
            <li>Role as opções para baixo e toque em <strong>"Adicionar à Tela de Início"</strong>.</li>
            <li>Confirme tocando em <strong>"Adicionar"</strong> no canto superior direito.</li>
          </ol>
        </div>

        <!-- Instruções Android / Chrome -->
        <div class="p-3.5 bg-surface-soft rounded-2xl border border-gray-200/80 space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-ink">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-frevo-green">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            No Android (Chrome) ou Computador
          </div>
          <ol class="text-xs text-ink-soft space-y-1.5 pl-5 list-decimal">
            <li>Toque nos <strong>três pontinhos</strong> no canto superior direito do navegador.</li>
            <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
            <li>Confirme a instalação para criar o ícone de acesso rápido.</li>
          </ol>
        </div>
      </div>

      <div class="pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl py-2.5 font-bold shadow-md">
          Entendido
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closePwaInstructionsModal() {
  if (typeof closeModal === 'function') {
    closeModal();
  }
}

// ==========================================
// SINCRONIZAÇÃO EM NUVEM (AWS)
// ==========================================
async function syncAllWithAWS() {
  if (window.FrevAIAWS && typeof window.FrevAIAWS.syncFromAWS === 'function') {
    try {
      await window.FrevAIAWS.syncFromAWS();
      if (typeof window.renderAuthUI === 'function') window.renderAuthUI();
      if (typeof window.renderNotificationsBadge === 'function') window.renderNotificationsBadge();
      switchView(currentView);
    } catch (err) {
      console.warn('Sincronização com AWS concluída com avisos:', err);
    }
  }
}

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO (BOOTSTRAP)
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Inicializar DB, Autenticação, Analytics e Infinite Scroll
  if (typeof window.initDB === 'function') window.initDB();
  if (typeof window.initAuth === 'function') window.initAuth();
  if (window.FrevAIAnalytics && typeof window.FrevAIAnalytics.init === 'function') {
    window.FrevAIAnalytics.init();
  }
  if (window.InfiniteScrollManager && typeof window.InfiniteScrollManager.init === 'function') {
    window.InfiniteScrollManager.init();
  }
  if (typeof window.initFrevoAudioEngine === 'function') window.initFrevoAudioEngine();

  // 2. Renderizar UI de Autenticação e Notificações
  if (typeof window.renderAuthUI === 'function') window.renderAuthUI();
  if (typeof window.renderNotificationsBadge === 'function') window.renderNotificationsBadge();

  // 3. Tentar sincronização em segundo plano com AWS se disponível
  if (window.FrevAIAWS) {
    syncAllWithAWS();
  }

  // 4. Configurar listeners de navegação (.nav-item e links com [data-view])
  document.querySelectorAll('.nav-item, [data-view]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = btn.dataset.view;
      if (targetView) {
        switchView(targetView);
      }
    });
  });

  // 5. Tratar Deep Links / Parâmetros de URL
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get('view');
  const artistParam = urlParams.get('artist');
  const songParam = urlParams.get('song');

  if (artistParam && typeof window.openArtistProfileModal === 'function') {
    switchView('artists');
    window.openArtistProfileModal(artistParam);
  } else if (songParam && typeof window.playSong === 'function') {
    switchView('songs');
    window.playSong(songParam);
  } else if (viewParam) {
    switchView(viewParam);
  } else {
    switchView('feed');
  }

  // 6. Registrar Service Worker para suporte PWA offline
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.warn('SW registration info:', err);
    });
  }

  // 7. Verificar instalação PWA
  checkPwaPrompt();
});

// Exportações Globais para compatibilidade
window.switchView = switchView;
window.checkPwaPrompt = checkPwaPrompt;
window.dismissPwaBanner = dismissPwaBanner;
window.installPwa = installPwa;
window.openPwaInstructionsModal = openPwaInstructionsModal;
window.closePwaInstructionsModal = closePwaInstructionsModal;
window.syncAllWithAWS = syncAllWithAWS;
window.renderAdminPanel = () => {
  if (typeof window.renderAdminCMS === 'function') window.renderAdminCMS();
};
window.renderStepsList = () => {
  if (typeof window.renderSteps === 'function') window.renderSteps();
};
window.renderHistoryTimeline = () => {
  if (typeof window.renderHistory === 'function') window.renderHistory();
};
window.renderMapPoints = () => {
  if (typeof window.renderMap === 'function') window.renderMap();
};
