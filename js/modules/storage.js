// ==============================================================================
// FREVAI STORAGE — CAMADA DE PERSISTÊNCIA ASSÍNCRONA VIA INDEXEDDB
// Suporte a grande volume de dados (Partituras, Áudios, Imagens, Posts e Cache Offline)
// ==============================================================================

const DB_NAME = 'FrevAIDB';
const DB_VERSION = 2;
const STORES = [
  'songs',
  'albums',
  'artists',
  'posts',
  'shows',
  'map_points',
  'steps',
  'history',
  'user_state',
  'offline_mutations'
];

class FrevAIStorage {
  constructor() {
    this.db = null;
    this.isReady = false;
    this.initPromise = this.init();
  }

  async init() {
    if (typeof window === 'undefined' || !window.indexedDB) {
      console.warn('[FrevAI Storage] IndexedDB não suportado neste ambiente.');
      this.isReady = true;
      return null;
    }

    return new Promise((resolve) => {
      let resolved = false;
      const safeResolve = (val) => {
        if (!resolved) {
          resolved = true;
          this.isReady = true;
          resolve(val);
        }
      };

      // Fallback de timeout caso o navegador demore ou fique pendente
      setTimeout(() => {
        if (!resolved) {
          console.warn('[FrevAI Storage] Timeout na inicialização do IndexedDB.');
          safeResolve(null);
        }
      }, 1200);

      try {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          STORES.forEach(storeName => {
            if (!db.objectStoreNames.contains(storeName)) {
              const keyPath = storeName === 'user_state' ? 'key' : 'id';
              db.createObjectStore(storeName, { keyPath });
            }
          });
        };

        request.onsuccess = (event) => {
          this.db = event.target.result;
          safeResolve(this.db);
          // Executa migração suave em background sem travar a thread
          setTimeout(() => {
            this.migrateFromLocalStorage().catch(() => {});
          }, 50);
        };

        request.onblocked = () => {
          console.warn('[FrevAI Storage] Abertura do IndexedDB bloqueada por outra aba/conexão.');
          safeResolve(null);
        };

        request.onerror = (event) => {
          console.warn('[FrevAI Storage] Erro ao abrir IndexedDB:', event.target?.error);
          safeResolve(null);
        };
      } catch (err) {
        console.warn('[FrevAI Storage] Exceção no IndexedDB:', err);
        safeResolve(null);
      }
    });
  }

  async ready() {
    if (this.isReady) return this.db;
    return this.initPromise;
  }

  // ============================================================================
  // MÉTODOS CRUD ASSÍNCRONOS NATIVOS
  // ============================================================================

  async get(storeName, id) {
    await this.ready();
    if (!this.db) return null;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const request = store.get(id);

        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => resolve(null);
      } catch (err) {
        console.warn(`[FrevAI Storage] Erro get ${storeName}/${id}:`, err);
        resolve(null);
      }
    });
  }

  async getAll(storeName) {
    await this.ready();
    if (!this.db) return [];

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => resolve([]);
      } catch (err) {
        console.warn(`[FrevAI Storage] Erro getAll ${storeName}:`, err);
        resolve([]);
      }
    });
  }

  async set(storeName, item) {
    await this.ready();
    if (!this.db || !item) return null;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const request = store.put(item);

        request.onsuccess = () => resolve(item);
        request.onerror = (e) => {
          console.warn(`[FrevAI Storage] Erro set ${storeName}:`, e.target?.error);
          resolve(null);
        };
      } catch (err) {
        console.warn(`[FrevAI Storage] Erro set ${storeName}:`, err);
        resolve(null);
      }
    });
  }

  async putMany(storeName, items) {
    await this.ready();
    if (!this.db || !Array.isArray(items) || items.length === 0) return items;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        items.forEach(item => {
          if (item) store.put(item);
        });

        tx.oncomplete = () => resolve(items);
        tx.onerror = () => resolve(items);
      } catch (err) {
        console.warn(`[FrevAI Storage] Erro putMany ${storeName}:`, err);
        resolve(items);
      }
    });
  }

  async delete(storeName, id) {
    await this.ready();
    if (!this.db) return false;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const request = store.delete(id);

        request.onsuccess = () => resolve(true);
        request.onerror = () => resolve(false);
      } catch (err) {
        console.warn(`[FrevAI Storage] Erro delete ${storeName}/${id}:`, err);
        resolve(false);
      }
    });
  }

  async clear(storeName) {
    await this.ready();
    if (!this.db) return false;

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const request = store.clear();

        request.onsuccess = () => resolve(true);
        request.onerror = () => resolve(false);
      } catch (err) {
        console.warn(`[FrevAI Storage] Erro clear ${storeName}:`, err);
        resolve(false);
      }
    });
  }

  // ============================================================================
  // FILA DE MUTAÇÕES OFFLINE (BACKGROUND SYNC)
  // ============================================================================

  async addOfflineMutation(type, payload) {
    const mutation = {
      id: `mutation_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      type,
      payload,
      createdAt: new Date().toISOString(),
      retryCount: 0
    };
    await this.set('offline_mutations', mutation);
    return mutation;
  }

  async getPendingMutations() {
    return await this.getAll('offline_mutations');
  }

  async removeOfflineMutation(mutationId) {
    return await this.delete('offline_mutations', mutationId);
  }

  // ============================================================================
  // MIGRAÇÃO TRANSPARENTE DE LOCALSTORAGE PARA INDEXEDDB
  // ============================================================================

  async migrateFromLocalStorage() {
    try {
      // 1. Músicas
      const localSongs = localStorage.getItem('frevai_custom_songs');
      if (localSongs) {
        const parsed = JSON.parse(localSongs);
        if (Array.isArray(parsed) && parsed.length > 0) {
          await this.putMany('songs', parsed);
        }
      }

      // 2. Álbuns
      const localAlbums = localStorage.getItem('frevai_custom_albums');
      if (localAlbums) {
        const parsed = JSON.parse(localAlbums);
        if (Array.isArray(parsed) && parsed.length > 0) {
          await this.putMany('albums', parsed);
        }
      }

      // 3. Shows
      const localShows = localStorage.getItem('frevai_custom_shows');
      if (localShows) {
        const parsed = JSON.parse(localShows);
        if (Array.isArray(parsed) && parsed.length > 0) {
          await this.putMany('shows', parsed);
        }
      }

      // 4. Posts
      const localPosts = localStorage.getItem('frevai_custom_posts');
      if (localPosts) {
        const parsed = JSON.parse(localPosts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          await this.putMany('posts', parsed);
        }
      }
    } catch (err) {
      console.warn('[FrevAI Storage] Aviso na migração do localStorage:', err);
    }
  }

  // ============================================================================
  // SINCRONIZAÇÃO COM O OBJETO GLOBAL DB
  // ============================================================================

  async hydrateGlobalDB() {
    try {
      const [storedSongs, storedAlbums, storedShows, storedPosts] = await Promise.all([
        this.getAll('songs'),
        this.getAll('albums'),
        this.getAll('shows'),
        this.getAll('posts')
      ]);

      if (typeof DB !== 'undefined') {
        if (storedSongs && storedSongs.length > 0) {
          const map = new Map();
          (DB.songs || []).forEach(s => s && map.set(s.id, s));
          storedSongs.forEach(s => s && map.set(s.id, s));
          DB.songs = Array.from(map.values());
        }

        if (storedAlbums && storedAlbums.length > 0) {
          const map = new Map();
          (DB.albums || []).forEach(a => a && map.set(a.id, a));
          storedAlbums.forEach(a => a && map.set(a.id, a));
          DB.albums = Array.from(map.values());
        }

        if (storedShows && storedShows.length > 0) {
          const map = new Map();
          (DB.shows || []).forEach(sh => sh && map.set(sh.id, sh));
          storedShows.forEach(sh => sh && map.set(sh.id, sh));
          DB.shows = Array.from(map.values());
        }

        if (storedPosts && storedPosts.length > 0) {
          const map = new Map();
          (DB.posts || []).forEach(p => p && map.set(p.id, p));
          storedPosts.forEach(p => p && map.set(p.id, p));
          DB.posts = Array.from(map.values());
        }
      }
    } catch (err) {
      console.warn('[FrevAI Storage] Erro ao hidratar DB global:', err);
    }
  }
}

// Instância singleton global
window.FrevAIStorage = new FrevAIStorage();
