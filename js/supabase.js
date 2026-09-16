// ==============================================================================
// FREVIA SUPABASE CLIENT & DATA ADAPTER
// ==============================================================================

class SupabaseService {
  constructor() {
    this.client = null;
    this.initClient();
  }

  initClient() {
    const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.FREVIA_CONFIG;
    if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
      try {
        this.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('[Supabase] Cliente conectado com sucesso ao projeto FrevAI!');
      } catch (err) {
        console.error('[Supabase] Erro ao inicializar cliente:', err);
      }
    } else {
      this.client = null;
    }
  }

  isConnected() {
    return Boolean(this.client);
  }

  // ============================================================================
  // POSTS & FEED
  // ============================================================================
  async getPosts() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('posts')
        .select(`
          id,
          title,
          excerpt,
          content,
          cover_url,
          tags,
          type,
          created_at,
          author:author_id(display_name, avatar_url),
          artist:artist_id(name, handle:slug, avatar_url),
          comments(id, user:user_id(display_name), content, created_at),
          post_likes(id, user_id)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(p => ({
          id: p.id,
          author: p.artist?.name || p.author?.display_name || 'Artista do Frevo',
          handle: p.artist?.handle || 'frevocultural',
          avatar: p.artist?.avatar_url || p.author?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          image: p.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
          location: 'Recife Antigo, PE',
          type: p.type || 'culture',
          title: p.title,
          content: p.content,
          tags: p.tags || ['Frevo', 'CulturaPE'],
          likes: (p.post_likes && p.post_likes.length) || 0,
          is_liked: false,
          is_saved: false,
          time_ago: 'PUBLICADO',
          comments: (p.comments || []).map(c => ({
            user: c.user?.display_name || 'Folião',
            text: c.content
          }))
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar posts (usando cache local):', err.message);
      return null;
    }
  }

  async createPost(postData) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('posts')
        .insert([{
          title: postData.title,
          slug: (postData.title || 'post').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
          content: postData.content,
          type: postData.type || 'culture',
          cover_url: postData.image,
          tags: postData.tags || ['Frevo'],
          status: 'published'
        }])
        .select();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('[Supabase] Erro ao criar post:', err.message);
      return null;
    }
  }

  // ============================================================================
  // ARTISTAS
  // ============================================================================
  async getArtists() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('artists')
        .select('*')
        .order('name');

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(a => ({
          id: a.id,
          name: a.name,
          slug: a.slug,
          genre: a.genre || 'Frevo de Rua',
          bio: a.bio,
          avatar: a.avatar_url || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
          cover: a.cover_url,
          instagram: a.instagram_url,
          youtube: a.youtube_url,
          website: a.website_url
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar artistas (usando cache local):', err.message);
      return null;
    }
  }

  // ============================================================================
  // MÚSICAS & PARTITURAS
  // ============================================================================
  async getSongs() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('songs')
        .select(`
          id,
          title,
          slug,
          genre,
          description,
          lyrics,
          score_path,
          status,
          artist:artist_id(name)
        `)
        .order('title');

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(s => ({
          id: s.id,
          title: s.title,
          artist: s.artist?.name || 'Maestro Anônimo',
          genre: s.genre || 'Frevo de Rua',
          description: s.description || 'Partitura disponível no acervo oficial do FrevAI.',
          lyrics: s.lyrics || '',
          score_file: s.score_path || 'partitura-oficial.pdf',
          status: s.status || 'published'
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar músicas (usando cache local):', err.message);
      return null;
    }
  }

  async createSong(songData) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('songs')
        .insert([{
          title: songData.title,
          slug: (songData.title || 'song').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
          genre: songData.genre || 'Frevo de Rua',
          lyrics: songData.lyrics,
          description: songData.description || 'Submetida pelo acervo digital do FrevAI',
          status: 'pending_review'
        }])
        .select();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('[Supabase] Erro ao cadastrar partitura:', err.message);
      return null;
    }
  }

  // ============================================================================
  // MAPA CULTURAL
  // ============================================================================
  async getMapPoints() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('map_points')
        .select('*')
        .order('name');

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(m => ({
          id: m.id,
          name: m.name,
          category: m.category || 'Patrimônio',
          address: m.address,
          description: m.description,
          coords: [m.latitude, m.longitude]
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar pontos do mapa:', err.message);
      return null;
    }
  }

  // ============================================================================
  // PASSOS & HISTÓRIA DO FREVO
  // ============================================================================
  async getSteps() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('frevo_steps')
        .select('*')
        .order('name');

      if (error) throw error;
      return data;
    } catch (err) {
      return null;
    }
  }

  async getHistory() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('history_entries')
        .select('*')
        .order('sort_order');

      if (error) throw error;
      return data;
    } catch (err) {
      return null;
    }
  }
}

window.supabaseService = new SupabaseService();
