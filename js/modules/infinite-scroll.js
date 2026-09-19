// ==============================================================================
// FREVAI - GERENCIADOR DE INFINITE SCROLL & VIRTUAL WINDOWING (MOBILE-FIRST)
// Técnicas: IntersectionObserver, CSS content-visibility: auto, Memory GC
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
      rootMargin: '350px' // Dispara 350px antes do final para scroll imperceptível
    });

    this.initMediaObserver();
    this.applyVirtualContentOptimization();
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
    this.applyVirtualContentOptimization();
  },

  // Otimização de renderização virtual via CSS Containment & Content Visibility
  // Permite renderizar 500+ itens sem lag ou engasgo de layout no mobile
  applyVirtualContentOptimization() {
    const feedCards = document.querySelectorAll('#feed-list > div');
    feedCards.forEach(card => {
      card.style.contentVisibility = 'auto';
      card.style.containIntrinsicSize = '0 400px';
    });

    const songCards = document.querySelectorAll('#songs-list > div, .song-card-item');
    songCards.forEach(card => {
      card.style.contentVisibility = 'auto';
      card.style.containIntrinsicSize = '0 90px';
    });
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
