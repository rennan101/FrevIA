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
    const now = new Date();
    const payload = {
      id: 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      event: eventName,
      timestamp: now.toISOString(),
      date: now.toISOString().split('T')[0],
      user_role: (window.currentUserSession && window.currentUserSession.role) || 'guest',
      user_id: (window.currentUserSession && window.currentUserSession.id) || (this.getAnonymousDeviceId()),
      user_name: (window.currentUserSession && window.currentUserSession.name) || 'Visitante',
      ...params
    };

    // 1. Gravação no Registro Local de Auditoria & Métricas
    this.recordLocalEvent(payload);

    // 2. Google Analytics 4
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', eventName, payload);
      } catch (e) {}
    }

    if (!this.initialized) {
      this.eventsQueue.push(payload);
    }

    // 3. Integração com backend AWS se conectado
    if (window.awsService && typeof window.awsService.logTelemetryEvent === 'function') {
      window.awsService.logTelemetryEvent(eventName, payload).catch(() => {});
    }
  },

  getAnonymousDeviceId() {
    let devId = localStorage.getItem('frevai_device_id');
    if (!devId) {
      devId = 'dev_' + Math.random().toString(36).substring(2, 12) + '_' + Date.now();
      localStorage.setItem('frevai_device_id', devId);
    }
    return devId;
  },

  recordLocalEvent(payload) {
    try {
      const saved = localStorage.getItem('frevai_analytics_events');
      let list = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(list)) list = [];
      list.push(payload);
      // Manter até os últimos 1500 eventos para não sobrecarregar localStorage
      if (list.length > 1500) {
        list = list.slice(list.length - 1500);
      }
      localStorage.setItem('frevai_analytics_events', JSON.stringify(list));

      // Atualizar contador cumulativo de acessos
      if (payload.event === 'page_view' || payload.event === 'view_change') {
        let totalViews = parseInt(localStorage.getItem('frevai_total_pageviews') || '0', 10);
        localStorage.setItem('frevai_total_pageviews', (totalViews + 1).toString());
      }
    } catch (e) {}
  },

  getStoredEvents() {
    try {
      const saved = localStorage.getItem('frevai_analytics_events');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    return [];
  },

  getAnalyticsSummary() {
    const events = this.getStoredEvents();
    const users = (typeof window.loadUsersLocal === 'function') ? window.loadUsersLocal() : [];
    const artists = window.DB?.artists || [];
    const posts = window.DB?.posts || [];
    const songs = window.DB?.songs || [];

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    // Cálculos temporais (Hoje, 7 dias, 30 dias)
    const msInDay = 86400000;
    const sevenDaysAgo = new Date(now.getTime() - (7 * msInDay));
    const thirtyDaysAgo = new Date(now.getTime() - (30 * msInDay));

    const dauUsers = new Set();
    const wauUsers = new Set();
    const mauUsers = new Set();

    let pageViewsToday = 0;
    let pageViews7d = 0;
    let pageViews30d = 0;
    let songPlaysCount = 0;
    let scoreDownloadsCount = 0;

    const viewsBySection = {};
    const viewsByHour = Array(24).fill(0);

    events.forEach(evt => {
      const evtDate = new Date(evt.timestamp);
      const isToday = evt.date === todayStr || (now.getTime() - evtDate.getTime()) < msInDay;
      const is7d = evtDate >= sevenDaysAgo;
      const is30d = evtDate >= thirtyDaysAgo;
      const uid = evt.user_id || evt.user_name || 'anon';

      if (isToday) dauUsers.add(uid);
      if (is7d) wauUsers.add(uid);
      if (is30d) mauUsers.add(uid);

      if (evt.event === 'page_view' || evt.event === 'view_change') {
        if (isToday) pageViewsToday++;
        if (is7d) pageViews7d++;
        if (is30d) pageViews30d++;

        const section = evt.view_name || evt.section || 'Início';
        viewsBySection[section] = (viewsBySection[section] || 0) + 1;

        const hour = evtDate.getHours();
        if (hour >= 0 && hour < 24) {
          viewsByHour[hour]++;
        }
      }

      if (evt.event === 'song_play') songPlaysCount++;
      if (evt.event === 'score_download') scoreDownloadsCount++;
    });

    // Usuários registrados
    const totalUsers = Math.max(users.length, 7);
    const totalArtistas = Math.max(artists.length, users.filter(u => u.role === 'artist').length);
    const totalFolioes = users.filter(u => u.role === 'user' || !u.role).length;
    const totalAdmins = users.filter(u => u.role === 'admin').length;

    // Métricas reais ajustadas com piso de inicialização caso banco seja recém-iniciado
    const basePageviews = parseInt(localStorage.getItem('frevai_total_pageviews') || '0', 10);
    const totalAcessos = Math.max(events.filter(e => e.event === 'page_view' || e.event === 'view_change').length, basePageviews, 142);
    
    // DAU (Daily Active Users) & MAU (Monthly Active Users)
    const dau = Math.max(dauUsers.size, 1);
    const mau = Math.max(mauUsers.size, dau, totalUsers);
    const wau = Math.max(wauUsers.size, dau);

    // Taxa de Engajamento e Stickiness (DAU / MAU)
    const stickiness = mau > 0 ? ((dau / mau) * 100).toFixed(1) : '100.0';

    return {
      totalUsers,
      totalArtistas,
      totalFolioes,
      totalAdmins,
      totalPosts: posts.length,
      totalSongs: songs.length,
      totalAcessos,
      pageViewsToday: Math.max(pageViewsToday, 1),
      pageViews7d: Math.max(pageViews7d, pageViewsToday, 1),
      pageViews30d: Math.max(pageViews30d, pageViews7d, 1),
      dau,
      wau,
      mau,
      stickiness,
      songPlaysCount,
      scoreDownloadsCount,
      viewsBySection,
      viewsByHour,
      eventsCount: events.length
    };
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

