// ==============================================================================
// FREVAI - GERENCIADOR DE INFINITE SCROLL & OTIMIZAÇÃO DE MEMÓRIA (MOBILE-FIRST)
// Técnicas: IntersectionObserver, Video Auto-Pause/Buffer Cleanup, decoding="async"
// ==============================================================================

const InfiniteScrollManager = {
  observer: null,
  mediaObserver: null,
  state: {
    feed: { page: 1, limit: 6 },
    artists: { page: 1, limit: 8 },
    songs: { page: 1, limit: 8 },
    steps: { page: 1, limit: 6 },
    history: { page: 1, limit: 6 },
    map: { page: 1, limit: 6 }
  },

  init() {
    if (this.observer) this.observer.disconnect();
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const view = entry.target.dataset.view;
          if (view) this.loadMore(view);
        }
      });
    }, {
      rootMargin: '300px' // Dispara 300px antes do final para scroll imperceptível
    });

    this.initMediaObserver();
  },

  // Observador de mídias offscreen (estilo Instagram/TikTok):
  // Pausa vídeos e libera recursos de decodificação de hardware quando o card sai do viewport
  initMediaObserver() {
    if (this.mediaObserver) this.mediaObserver.disconnect();
    this.mediaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (el.tagName === 'VIDEO') {
          if (!entry.isIntersecting) {
            // Elemento saiu do viewport: pausar imediatamente para não travar CPU/GPU
            if (!el.paused) {
              el.pause();
            }
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: [0, 0.25]
    });

    this.refreshMediaObserver();
  },

  refreshMediaObserver() {
    if (!this.mediaObserver) return;
    const videos = document.querySelectorAll('video');
    videos.forEach(v => this.mediaObserver.observe(v));
  },

  observe(element) {
    if (!this.observer) {
      this.init();
    }
    if (this.observer && element) {
      this.observer.observe(element);
    }
  },

  loadMore(view) {
    const s = this.state[view];
    if (!s) return;
    s.page++;
    
    if (view === 'feed' && typeof appendMoreFeed === 'function') appendMoreFeed();
    else if (view === 'artists' && typeof appendMoreArtists === 'function') appendMoreArtists();
    else if (view === 'songs' && typeof appendMoreSongs === 'function') appendMoreSongs();
    else if (view === 'steps' && typeof appendMoreSteps === 'function') appendMoreSteps();
    else if (view === 'history' && typeof appendMoreHistory === 'function') appendMoreHistory();
    else if (view === 'map' && typeof appendMoreMap === 'function') appendMoreMap();

    // Re-anexa observadores de mídia após adicionar novos nós ao DOM
    setTimeout(() => this.refreshMediaObserver(), 100);
  },

  reset(view) {
    if (this.state[view]) this.state[view].page = 1;
  }
};

window.InfiniteScrollManager = InfiniteScrollManager;
