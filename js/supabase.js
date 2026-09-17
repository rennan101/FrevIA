// ==============================================================================
// FREVAI SUPABASE CLIENT & DATA ADAPTER (WITH AUTH & RBAC)
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
        this.client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        });
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
  // AUTHENTICATION (EMAIL/SENHA & GOOGLE OAUTH)
  // ============================================================================
  async signInWithEmail(email, password) {
    if (!this.client) return { error: { message: 'Supabase não conectado' } };
    return await this.client.auth.signInWithPassword({ email, password });
  }

  async signUpWithEmail(email, password, metadata = {}) {
    if (!this.client) return { error: { message: 'Supabase não conectado' } };
    return await this.client.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: metadata.display_name || email.split('@')[0],
          role: metadata.role || 'user',
          ...metadata
        }
      }
    });
  }

  async signInWithGoogle() {
    if (!this.client) {
      alert('Supabase não conectado.');
      return;
    }
    return await this.client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + window.location.pathname
      }
    });
  }

  async signOut() {
    if (!this.client) return;
    return await this.client.auth.signOut();
  }

  async getSessionUser() {
    if (!this.client) return null;
    try {
      const { data: { session } } = await this.client.auth.getSession();
      return session ? session.user : null;
    } catch {
      return null;
    }
  }

  onAuthStateChange(callback) {
    if (!this.client) return null;
    return this.client.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  }

  // Obter perfil do usuário
  async getProfile(userId) {
    if (!this.client || !userId) return null;
    try {
      const { data, error } = await this.client
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      if (error) throw error;
      return data;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar perfil:', err.message);
      return null;
    }
  }

  // Inserir ou atualizar perfil do usuário logado
  async upsertProfile(user, extraData = {}) {
    if (!this.client || !user) return null;
    try {
      const displayName = extraData.display_name || user.user_metadata?.full_name || user.user_metadata?.name || user.user_metadata?.display_name || user.email?.split('@')[0] || 'Folião';
      const avatarUrl = extraData.avatar_url || user.user_metadata?.avatar_url || user.user_metadata?.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
      const role = extraData.role || user.user_metadata?.role || 'user';

      const { data, error } = await this.client
        .from('profiles')
        .upsert({
          id: user.id,
          display_name: displayName,
          avatar_url: avatarUrl,
          role: role,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.warn('[Supabase] Falha ao salvar perfil:', err.message);
      return null;
    }
  }

  // ============================================================================
  // POSTS & FEED (CRUD & CRONOLOGIA)
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
          comments(id, user_id, user:user_id(display_name, avatar_url), content, created_at),
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
          time_ago: this.formatDate(p.created_at),
          created_at: p.created_at,
          comments: (p.comments || []).map(c => ({
            id: c.id,
            user_id: c.user_id,
            user: c.user?.display_name || 'Folião',
            avatar: c.user?.avatar_url || null,
            text: c.content,
            created_at: c.created_at,
            time_ago: this.formatRelativeTime(c.created_at)
          }))
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar posts:', err.message);
      return null;
    }
  }

  formatDate(dateStr) {
    if (!dateStr) return 'RECENTE';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).toUpperCase();
    } catch {
      return 'RECENTE';
    }
  }

  formatRelativeTime(dateStr) {
    if (!dateStr) return 'agora';
    try {
      const d = new Date(dateStr);
      const diffMs = Date.now() - d.getTime();
      const diffSecs = Math.floor(diffMs / 1000);
      const diffMins = Math.floor(diffSecs / 60);
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffSecs < 45) return 'agora';
      if (diffMins < 60) return `há ${diffMins} min`;
      if (diffHours < 24) return `há ${diffHours} h`;
      if (diffDays === 1) return 'ontem';
      if (diffDays < 7) return `há ${diffDays} dias`;
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
    } catch {
      return 'recente';
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

  async updatePost(id, postData) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('posts')
        .update({
          title: postData.title,
          content: postData.content,
          cover_url: postData.image,
          tags: postData.tags
        })
        .eq('id', id)
        .select();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('[Supabase] Erro ao atualizar post:', err.message);
      return null;
    }
  }

  async deletePost(id) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('posts').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.error('[Supabase] Erro ao excluir post:', err.message);
      return false;
    }
  }

  // ============================================================================
  // COMENTÁRIOS (CRUD)
  // ============================================================================
  async addComment(postId, userId, content) {
    if (!this.client || !postId || !content) return null;
    try {
      const { data, error } = await this.client
        .from('comments')
        .insert([{
          post_id: postId,
          user_id: userId,
          content: content,
          status: 'visible'
        }])
        .select(`
          id,
          content,
          created_at,
          user:user_id(display_name, avatar_url)
        `)
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.warn('[Supabase] Falha ao adicionar comentário:', err.message);
      return null;
    }
  }

  async updateComment(commentId, content) {
    if (!this.client || !commentId || !content) return null;
    try {
      const { data, error } = await this.client
        .from('comments')
        .update({
          content: content,
          updated_at: new Date().toISOString()
        })
        .eq('id', commentId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.warn('[Supabase] Falha ao atualizar comentário:', err.message);
      return null;
    }
  }

  async deleteComment(commentId) {
    if (!this.client || !commentId) return false;
    try {
      const { error } = await this.client
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;
      return true;
    } catch (err) {
      console.warn('[Supabase] Falha ao remover comentário:', err.message);
      return false;
    }
  }

  // ============================================================================
  // ARTISTAS & APROVAÇÃO CMS
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
          handle: a.handle || (a.slug ? `@${a.slug}` : '@artista'),
          genre: a.genre || 'Frevo de Rua',
          bio: a.bio,
          avatar_url: a.avatar_url || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
          cover_url: a.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
          instagram: a.instagram_url,
          youtube: a.youtube_url,
          website: a.website_url,
          is_approved: a.is_published !== false,
          has_story: true,
          email: a.email || `${a.slug}@cultura.pe.gov.br`
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar artistas:', err.message);
      return null;
    }
  }

  async updateArtistApproval(artistId, isApproved) {
    if (!this.client) return false;
    try {
      const { error } = await this.client
        .from('artists')
        .update({ is_published: isApproved })
        .eq('id', artistId);
      if (error) throw error;
      return true;
    } catch (err) {
      console.error('[Supabase] Erro ao alterar aprovação do artista:', err.message);
      return false;
    }
  }

  // ============================================================================
  // ÁLBUNS & DISCOGRAFIA
  // ============================================================================
  async getAlbums() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('albums')
        .select('*')
        .order('release_year', { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(alb => ({
          id: alb.id,
          artist_id: alb.artist_id,
          title: alb.title,
          cover_url: alb.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80',
          release_year: alb.release_year || 2026,
          tracks_count: alb.tracks_count || 10
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar álbuns:', err.message);
      return null;
    }
  }

  // ============================================================================
  // SHOWS & AGENDA CULTURAL
  // ============================================================================
  async getArtistEvents() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('artist_events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(sh => ({
          id: sh.id,
          artist_id: sh.artist_id,
          title: sh.event_name || 'Show de Frevo',
          venue: sh.venue_name || 'Recife Antigo',
          city: sh.city || 'Recife - PE',
          date: sh.event_date,
          time: sh.event_time || '20:00',
          ticket_url: sh.ticket_url || '#'
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar eventos:', err.message);
      return null;
    }
  }

  // ============================================================================
  // MÚSICAS & PARTITURAS (COM ÁUDIO, DURAÇÃO E CAPA)
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
          artist_id,
          audio_url,
          album_id,
          plays_count,
          duration_seconds,
          is_popular,
          artist:artist_id(name, cover_url, avatar_url)
        `)
        .order('title');

      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(s => ({
          id: s.id,
          artist_id: s.artist_id,
          author_id: s.artist_id,
          title: s.title,
          artist: s.artist?.name || 'Maestro do Frevo',
          genre: s.genre || 'Frevo de Rua',
          description: s.description || 'Partitura disponível no acervo oficial do FrevAI.',
          lyrics: s.lyrics || '',
          score_file: s.score_path || 'partitura-oficial.pdf',
          audio_url: s.audio_url || 'https://assets.mixkit.co/music/preview/mixkit-brazilian-carnival-brass-band-1120.mp3',
          cover_url: s.cover_url || s.artist?.cover_url || s.artist?.avatar_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
          duration_seconds: s.duration_seconds || 180,
          plays_count: s.plays_count || Math.floor(Math.random() * 5000) + 1200,
          is_popular: s.is_popular || false,
          album_id: s.album_id || null,
          status: s.status || 'published',
          downloads_count: Math.floor(Math.random() * 120) + 15
        }));
      }
      return null;
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar músicas:', err.message);
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
          status: 'published'
        }])
        .select();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('[Supabase] Erro ao cadastrar partitura:', err.message);
      return null;
    }
  }

  async deleteSong(id) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('songs').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch {
      return false;
    }
  }

  // ============================================================================
  // MAPA, PASSOS & HISTÓRIA (CRUD)
  // ============================================================================
  async getMapPoints() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client.from('map_points').select('*').order('name');
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
    } catch {
      return null;
    }
  }

  async createMapPoint(point) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client.from('map_points').insert([{
        name: point.name,
        slug: point.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
        description: point.description,
        address: point.address,
        latitude: point.coords[0] || -8.0631,
        longitude: point.coords[1] || -34.8711,
        category: point.category || 'Patrimônio'
      }]).select();
      if (error) throw error;
      return data;
    } catch {
      return null;
    }
  }

  // ============================================================================
  // UPLOAD DE AVATAR (STORAGE)
  // ============================================================================
  async uploadAvatar(file, userId) {
    if (!this.client || !file) return null;
    try {
      const fileExt = file.name ? file.name.split('.').pop() : 'jpg';
      const fileName = `${userId || 'user'}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { data, error } = await this.client.storage
        .from('avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;

      const { data: { publicUrl } } = this.client.storage
        .from('avatars')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.warn('[Supabase] Falha no upload do avatar:', err.message);
      return null;
    }
  }
}

window.supabaseService = new SupabaseService();
