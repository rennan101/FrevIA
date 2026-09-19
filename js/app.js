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
  const modal = document.getElementById('pwa-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closePwaInstructionsModal() {
  const modal = document.getElementById('pwa-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
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
  // 1. Inicializar DB e Autenticação
  if (typeof window.initDB === 'function') window.initDB();
  if (typeof window.initAuth === 'function') window.initAuth();
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

  // 6. Verificar instalação PWA
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
