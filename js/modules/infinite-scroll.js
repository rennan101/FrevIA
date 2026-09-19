// ==============================================================================
// FREVAI - GERENCIADOR DE INFINITE SCROLL (MOBILE-FIRST)
// ==============================================================================

const InfiniteScrollManager = {
  observer: null,
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
      rootMargin: '250px' // Dispara 250px antes do final para scroll imperceptível
    });
  },

  observe(element) {
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
  },

  reset(view) {
    if (this.state[view]) this.state[view].page = 1;
  }
};

window.InfiniteScrollManager = InfiniteScrollManager;
