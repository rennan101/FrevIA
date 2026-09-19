// ==============================================================================
// FREVAI - TELEMETRIA CULTURAL, ANALYTICS & MONITORAMENTO GLOBAL DE ERROS
// ==============================================================================

const FrevAIAnalytics = {
  initialized: false,
  measurementId: null,
  eventsQueue: [],

  init(measurementId) {
    this.measurementId = measurementId || window.FREVIA_CONFIG?.GA4_MEASUREMENT_ID || 'G-FREVAI2026';
    this.initialized = true;

    // Inicialização assíncrona do Google Analytics (gtag) se disponível ou configurado
    if (typeof window.gtag === 'undefined' && this.measurementId && !this.measurementId.includes('FREVAI2026')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', this.measurementId, {
        send_page_view: false,
        anonymize_ip: true
      });
    }

    this.initErrorTracking();
    this.flushQueue();
  },

  track(eventName, params = {}) {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      user_role: (window.currentUserSession && window.currentUserSession.role) || 'guest',
      user_id: (window.currentUserSession && window.currentUserSession.id) || null,
      ...params
    };

    // 1. Google Analytics 4
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', eventName, payload);
      } catch (e) {}
    }

    // 2. Log local de auditoria para observabilidade
    if (!this.initialized) {
      this.eventsQueue.push(payload);
    }

    // 3. Integração com backend AWS se conectado
    if (window.awsService && typeof window.awsService.logTelemetryEvent === 'function') {
      window.awsService.logTelemetryEvent(eventName, payload).catch(() => {});
    }
  },

  flushQueue() {
    while (this.eventsQueue.length > 0) {
      const evt = this.eventsQueue.shift();
      if (typeof window.gtag === 'function') {
        try {
          window.gtag('event', evt.event, evt);
        } catch (e) {}
      }
    }
  },

  trackSongPlay(song) {
    if (!song) return;
    this.track('song_play', {
      song_id: song.id,
      song_title: song.title,
      artist_name: song.artist,
      genre: song.genre
    });
  },

  trackScoreDownload(song) {
    if (!song) return;
    this.track('score_download', {
      song_id: song.id,
      song_title: song.title,
      artist_name: song.artist,
      genre: song.genre
    });
  },

  trackArtistFavorite(artistId, isFav) {
    this.track(isFav ? 'artist_favorite_add' : 'artist_favorite_remove', {
      artist_id: artistId
    });
  },

  trackViewChange(viewName) {
    this.track('view_change', {
      view_name: viewName,
      page_title: document.title
    });
  },

  trackSearch(query, section = 'all') {
    if (!query || query.trim().length < 2) return;
    this.track('search_query', {
      query: query.trim().toLowerCase(),
      section: section
    });
  },

  trackSignUp(role) {
    this.track('user_signup', {
      registered_role: role
    });
  },

  logClientError(message, source = 'manual', lineno = 0, colno = 0) {
    this.track('client_error', {
      error_message: message || 'Unknown client error',
      source_file: source.split('/').pop(),
      line: lineno,
      column: colno
    });
  },

  logPromiseRejection(reason) {
    const msg = (reason && (reason.message || reason.toString())) || 'Unhandled Promise Rejection';
    this.track('promise_rejection', {
      rejection_reason: msg
    });
  },

  initErrorTracking() {
    // Captura global de exceções não tratadas no frontend
    window.addEventListener('error', (event) => {
      const errorMsg = event.message || 'Unknown JavaScript error';
      const source = event.filename || 'unknown';
      const lineno = event.lineno || 0;
      const colno = event.colno || 0;

      // Ignora ruídos de extensões de terceiros do navegador
      if (source.includes('chrome-extension://') || source.includes('moz-extension://')) {
        return;
      }

      this.logClientError(errorMsg, source, lineno, colno);
    });

    // Captura de rejeições de Promises não tratadas
    window.addEventListener('unhandledrejection', (event) => {
      this.logPromiseRejection(event.reason);
    });
  }
};

window.FrevAIAnalytics = FrevAIAnalytics;
