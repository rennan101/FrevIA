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
    let res = await this.client.auth.signUp({
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

    // Se o banco falhar devido a trigger em raw_user_meta_data, tenta cadastro limpo
    if (res?.error && res.error.message && res.error.message.includes('Database error saving new user')) {
      try {
        const retryRes = await this.client.auth.signUp({ email, password });
        if (!retryRes.error) {
          res = retryRes;
        }
      } catch (retryErr) {}
    }

    return res;
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

  // Redefinição de senha para qualquer usuário (esqueci minha senha)
  async resetPasswordForEmail(email) {
    if (!this.client) return { error: { message: 'Supabase não conectado' } };
    try {
      const { data, error } = await this.client.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + window.location.pathname
      });
      return { data, error };
    } catch (err) {
      return { error: err };
    }
  }

  // Cadastro de artista diretamente pelo Administrador
  async registerArtistByAdmin({ ownerName, handle, email, password, artistName, genre, whatsapp, bio }) {
    if (!this.client) return { error: { message: 'Supabase não conectado' } };
    try {
      const cleanHandle = handle.startsWith('@') ? handle : '@' + handle;
      // 1. Cadastrar usuário no Supabase Auth com senha padrão
      const authRes = await this.signUpWithEmail(email, password, {
        display_name: artistName,
        name: ownerName,
        handle: cleanHandle,
        role: 'artist',
        is_approved: true,
        artist_request_status: 'approved',
        bio: bio || '',
        phone: whatsapp || '',
        genre: genre || 'Frevo de Rua'
      });

      if (authRes.error) {
        return { error: authRes.error };
      }

      const newUserId = authRes.data?.user?.id || null;
      const slug = cleanHandle.replace('@', '').toLowerCase();

      // 2. Criar registro do Artista na tabela 'artists'
      const artistData = {
        name: artistName,
        slug: slug,
        genre: genre || 'Frevo de Rua',
        bio: bio || '',
        contact_phone: whatsapp || '',
        contact_email: email,
        is_approved: true,
        user_id: newUserId
      };

      const { data: artistRecord, error: artistErr } = await this.client
        .from('artists')
        .insert(artistData)
        .select()
        .single();

      if (artistErr) {
        console.warn('[Supabase] Aviso ao inserir artista na tabela artists:', artistErr.message);
      }

      // 3. Vincular perfil caso o usuário tenha sido criado
      if (newUserId && artistRecord?.id) {
        await this.client
          .from('profiles')
          .update({
            artist_id: artistRecord.id,
            role: 'artist',
            artist_request_status: 'approved',
            updated_at: new Date().toISOString()
          })
          .eq('id', newUserId);
      }

      return { data: { user: authRes.data?.user, artist: artistRecord }, error: null };
    } catch (err) {
      console.error('[Supabase] Erro ao cadastrar artista pelo admin:', err);
      return { error: err };
    }
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

  // Verificar se um @handle está disponível no banco (case-insensitive)
  async checkHandleAvailable(handle, excludeUserId = null) {
    if (!this.client || !handle) return true;
    try {
      const clean = handle.startsWith('@') ? handle : '@' + handle;
      let query = this.client
        .from('profiles')
        .select('id, handle')
        .ilike('handle', clean);
      if (excludeUserId) {
        query = query.neq('id', excludeUserId);
      }
      const { data, error } = await query;
      if (error) {
        console.warn('[Supabase] Aviso ao verificar disponibilidade do @:', error.message);
        return true;
      }
      return !(data && data.length > 0);
    } catch (err) {
      console.warn('[Supabase] Erro ao checar @handle:', err);
      return true;
    }
  }

  // Atualizar especificamente o @handle do usuário
  async updateProfileHandle(userId, newHandle) {
    if (!this.client || !userId || !newHandle) return false;
    try {
      const clean = newHandle.startsWith('@') ? newHandle : '@' + newHandle;
      const { error } = await this.client
        .from('profiles')
        .update({ handle: clean, updated_at: new Date().toISOString() })
        .eq('id', userId);
      if (error) throw error;
      return true;
    } catch (err) {
      console.error('[Supabase] Erro ao atualizar @handle:', err.message);
      return false;
    }
  }

  // Inserir ou atualizar perfil do usuário logado preservando papel, handle e vínculo de artista
  async upsertProfile(user, extraData = {}) {
    if (!this.client || !user) return null;
    try {
      const existing = await this.getProfile(user.id);
      const displayName = extraData.display_name || user.user_metadata?.full_name || user.user_metadata?.name || user.user_metadata?.display_name || user.email?.split('@')[0] || 'Folião';
      const avatarUrl = extraData.avatar_url || user.user_metadata?.avatar_url || user.user_metadata?.picture || null;
      const role = existing?.role || extraData.role || 'user';
      const artistId = existing?.artist_id || extraData.artist_id || null;
      const artistRequestStatus = existing?.artist_request_status || extraData.artist_request_status || 'none';
      const handle = extraData.handle || user.user_metadata?.handle || existing?.handle || ('@' + (user.email ? user.email.split('@')[0] : 'foliao'));

      const { data, error } = await this.client
        .from('profiles')
        .upsert({
          id: user.id,
          display_name: displayName,
          handle: handle,
          avatar_url: avatarUrl,
          role: role,
          artist_id: artistId,
          artist_request_status: artistRequestStatus,
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
          avatar: p.artist?.avatar_url || p.author?.avatar_url || null,
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
          cover_url: postData.image || postData.media_url || null,
          media_url: postData.media_url || postData.image || null,
          media_type: postData.media_type || (postData.isVideo ? 'video' : 'image'),
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
      const updatePayload = {
        title: postData.title,
        content: postData.content,
        cover_url: postData.image || postData.media_url || null,
        tags: postData.tags
      };
      if (postData.media_url) updatePayload.media_url = postData.media_url;
      if (postData.media_type) updatePayload.media_type = postData.media_type;

      const { data, error } = await this.client
        .from('posts')
        .update(updatePayload)
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
      const slug = (songData.title || 'song').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();
      const insertPayload = {
        title: songData.title,
        slug: slug,
        genre: songData.genre || 'Frevo de Rua',
        lyrics: songData.lyrics || '',
        description: songData.description || 'Submetida pelo acervo digital do FrevAI',
        score_path: songData.score_path || null,
        audio_url: songData.audio_url || null,
        cover_url: songData.cover_url || null,
        artist_id: songData.artist_id || null,
        duration_seconds: songData.duration_seconds || 180,
        status: 'published'
      };

      if (songData.submitted_by) {
        insertPayload.submitted_by = songData.submitted_by;
      }
      if (songData.album_id) {
        insertPayload.album_id = songData.album_id;
      }

      const { data, error } = await this.client
        .from('songs')
        .insert([insertPayload])
        .select();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('[Supabase] Erro ao cadastrar partitura/música:', err.message);
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
  // ÁLBUNS & SHOWS (CRUD)
  // ============================================================================
  async createAlbum(albumData) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('albums')
        .insert([{
          title: albumData.title,
          slug: (albumData.title || 'album').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
          artist_id: albumData.artist_id,
          cover_url: albumData.cover_url || null,
          release_year: parseInt(albumData.release_year, 10) || new Date().getFullYear(),
          tracks_count: parseInt(albumData.tracks_count, 10) || 1
        }])
        .select();

      if (error) throw error;
      return data && data[0];
    } catch (err) {
      console.error('[Supabase] Erro ao criar álbum:', err.message);
      return null;
    }
  }

  async deleteAlbum(albumId) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('albums').delete().eq('id', albumId);
      if (error) throw error;
      return true;
    } catch (err) {
      console.error('[Supabase] Erro ao excluir álbum:', err.message);
      return false;
    }
  }

  async createArtistEvent(eventData) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client
        .from('artist_events')
        .insert([{
          artist_id: eventData.artist_id,
          event_name: eventData.event_name,
          venue_name: eventData.venue_name || 'Recife Antigo',
          city: eventData.city || 'Recife - PE',
          event_date: eventData.event_date,
          event_time: eventData.event_time || '20:00',
          ticket_url: eventData.ticket_url || null
        }])
        .select();

      if (error) throw error;
      return data && data[0];
    } catch (err) {
      console.error('[Supabase] Erro ao criar evento de artista:', err.message);
      return null;
    }
  }

  async deleteArtistEvent(eventId) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('artist_events').delete().eq('id', eventId);
      if (error) throw error;
      return true;
    } catch (err) {
      console.error('[Supabase] Erro ao excluir evento:', err.message);
      return false;
    }
  }

  // ============================================================================
  // FLUXO DE ARTISTA: SOLICITAÇÃO & APROVAÇÃO ADMIN
  // ============================================================================
  async requestArtistRole(userId, reqData) {
    if (!this.client || !userId) return { error: { message: 'Supabase não conectado ou usuário inválido' } };
    try {
      // 1. Inserir ou atualizar na tabela artist_requests
      const { data: request, error: reqError } = await this.client
        .from('artist_requests')
        .insert([{
          user_id: userId,
          requested_name: reqData.requested_name,
          genre: reqData.genre || 'Frevo de Rua',
          bio: reqData.bio || '',
          instagram_url: reqData.instagram_url || '',
          whatsapp: reqData.whatsapp || '',
          status: 'pending',
          created_at: new Date().toISOString()
        }])
        .select();

      if (reqError) {
        console.warn('[Supabase] Aviso ao inserir em artist_requests:', reqError.message);
      }

      // 2. Atualizar perfil com status pendente (role continua 'user')
      try {
        await this.client
          .from('profiles')
          .update({
            artist_request_status: 'pending',
            updated_at: new Date().toISOString()
          })
          .eq('id', userId);
      } catch (profErr) {
        console.warn('[Supabase] Aviso ao atualizar status no profile:', profErr);
      }

      return { data: request && request[0], error: null };
    } catch (err) {
      console.error('[Supabase] Erro ao solicitar papel de artista:', err.message);
      return { error: err };
    }
  }

  async getPendingArtistRequests() {
    if (!this.client) return [];
    try {
      // 1. Carregar solicitações com status 'pending'
      const { data, error } = await this.client
        .from('artist_requests')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (!data || data.length === 0) return [];

      // 2. Buscar perfis associados para obter display_name, avatar_url e handle
      const userIds = [...new Set(data.map(r => r.user_id).filter(Boolean))];
      let userMap = {};
      if (userIds.length > 0) {
        try {
          const { data: profs } = await this.client
            .from('profiles')
            .select('id, display_name, avatar_url, handle')
            .in('id', userIds);
          if (profs) {
            profs.forEach(p => { userMap[p.id] = p; });
          }
        } catch (pe) {
          console.warn('[Supabase] Aviso ao carregar dados complementares de perfil:', pe.message);
        }
      }

      return data.map(r => ({
        ...r,
        user: userMap[r.user_id] || {
          display_name: r.requested_name,
          avatar_url: '',
          handle: '@' + (r.requested_name || 'artista').toLowerCase().replace(/[^a-z0-9_]/g, '')
        }
      }));
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar pedidos de artista:', err.message);
      return [];
    }
  }

  async approveArtistRequest(requestId, adminId) {
    if (!this.client) return { error: { message: 'Supabase não conectado' } };
    try {
      // 1. Buscar a solicitação
      const { data: req, error: fetchErr } = await this.client
        .from('artist_requests')
        .select('*')
        .eq('id', requestId)
        .single();

      if (fetchErr || !req) throw new Error('Solicitação não encontrada');

      const slug = req.requested_name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random() * 1000);

      // 2. Criar registro na tabela artists vinculado ao profile_id
      const { data: artist, error: artistErr } = await this.client
        .from('artists')
        .insert([{
          profile_id: req.user_id,
          name: req.requested_name,
          slug: slug,
          genre: req.genre || 'Frevo de Rua',
          bio: req.bio || '',
          instagram_url: req.instagram_url || null,
          is_authorized_editor: true,
          is_published: true
        }])
        .select()
        .single();

      if (artistErr) throw artistErr;

      // 3. Atualizar o profile do usuário promovendo para 'artist' e vinculando o artist_id
      const { error: profErr } = await this.client
        .from('profiles')
        .update({
          role: 'artist',
          artist_id: artist.id,
          artist_request_status: 'approved',
          updated_at: new Date().toISOString()
        })
        .eq('id', req.user_id);

      if (profErr) throw profErr;

      // 4. Marcar a solicitação como aprovada
      await this.client
        .from('artist_requests')
        .update({
          status: 'approved',
          reviewed_by: adminId,
          reviewed_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', requestId);

      return { data: artist, error: null };
    } catch (err) {
      console.error('[Supabase] Erro ao aprovar artista:', err.message);
      return { error: err };
    }
  }

  async rejectArtistRequest(requestId, adminId, reason = '') {
    if (!this.client) return { error: { message: 'Supabase não conectado' } };
    try {
      const { data: req } = await this.client
        .from('artist_requests')
        .select('user_id')
        .eq('id', requestId)
        .single();

      const { error } = await this.client
        .from('artist_requests')
        .update({
          status: 'rejected',
          review_notes: reason,
          reviewed_by: adminId,
          reviewed_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', requestId);

      if (error) throw error;

      if (req && req.user_id) {
        await this.client
          .from('profiles')
          .update({
            artist_request_status: 'rejected',
            updated_at: new Date().toISOString()
          })
          .eq('id', req.user_id);
      }

      return { error: null };
    } catch (err) {
      console.error('[Supabase] Erro ao recusar artista:', err.message);
      return { error: err };
    }
  }

  // ============================================================================
  // INTERAÇÕES SOCIAIS: LIKES, SALVOS & FAVORITOS NO SUPABASE
  // ============================================================================
  async togglePostLike(postId, userId) {
    if (!this.client || !userId || !postId) return null;
    try {
      const { data: existing } = await this.client
        .from('post_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_id', userId)
        .maybeSingle();

      if (existing) {
        await this.client.from('post_likes').delete().eq('id', existing.id);
        return { liked: false };
      } else {
        await this.client.from('post_likes').insert([{ post_id: postId, user_id: userId }]);
        return { liked: true };
      }
    } catch (err) {
      console.warn('[Supabase] Falha ao alternar like:', err.message);
      return null;
    }
  }

  async toggleSavedPost(postId, userId) {
    if (!this.client || !userId || !postId) return null;
    try {
      const { data: existing } = await this.client
        .from('saved_posts')
        .select('id')
        .eq('post_id', postId)
        .eq('user_id', userId)
        .maybeSingle();

      if (existing) {
        await this.client.from('saved_posts').delete().eq('id', existing.id);
        return { saved: false };
      } else {
        await this.client.from('saved_posts').insert([{ post_id: postId, user_id: userId }]);
        return { saved: true };
      }
    } catch (err) {
      console.warn('[Supabase] Falha ao alternar post salvo:', err.message);
      return null;
    }
  }

  async toggleFavoriteArtist(artistId, userId) {
    if (!this.client || !userId || !artistId) return null;
    try {
      const { data: existing } = await this.client
        .from('artist_favorites')
        .select('id')
        .eq('artist_id', artistId)
        .eq('user_id', userId)
        .maybeSingle();

      if (existing) {
        await this.client.from('artist_favorites').delete().eq('id', existing.id);
        return { favorited: false };
      } else {
        await this.client.from('artist_favorites').insert([{ artist_id: artistId, user_id: userId }]);
        return { favorited: true };
      }
    } catch (err) {
      console.warn('[Supabase] Falha ao alternar favorito:', err.message);
      return null;
    }
  }

  async getUserSocialState(userId) {
    if (!this.client || !userId) return { likedPostIds: [], savedPostIds: [], favoriteArtistIds: [] };
    try {
      const [likesRes, savesRes, favsRes] = await Promise.all([
        this.client.from('post_likes').select('post_id').eq('user_id', userId),
        this.client.from('saved_posts').select('post_id').eq('user_id', userId),
        this.client.from('artist_favorites').select('artist_id').eq('user_id', userId)
      ]);

      return {
        likedPostIds: (likesRes.data || []).map(r => r.post_id),
        savedPostIds: (savesRes.data || []).map(r => r.post_id),
        favoriteArtistIds: (favsRes.data || []).map(r => r.artist_id)
      };
    } catch (err) {
      console.warn('[Supabase] Falha ao carregar estado social do usuário:', err.message);
      return { likedPostIds: [], savedPostIds: [], favoriteArtistIds: [] };
    }
  }

  // ============================================================================
  // STORAGE: ÁUDIOS (MP3), PARTITURAS (PDF) & CAPAS NO BUCKET SCORES
  // ============================================================================
  async uploadAudio(file, artistId = 'general') {
    if (!this.client || !file) return null;
    try {
      const cleanName = file.name ? file.name.replace(/[^a-zA-Z0-9._-]/g, '_') : 'audio.mp3';
      const filePath = `audio/${artistId}/${Date.now()}_${cleanName}`;

      const { data, error } = await this.client.storage
        .from('scores')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;

      const { data: { publicUrl } } = this.client.storage
        .from('scores')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.error('[Supabase] Falha no upload do áudio MP3:', err.message);
      return null;
    }
  }

  async uploadScore(file, artistId = 'general') {
    if (!this.client || !file) return null;
    try {
      const cleanName = file.name ? file.name.replace(/[^a-zA-Z0-9._-]/g, '_') : 'partitura.pdf';
      const filePath = `scores/${artistId}/${Date.now()}_${cleanName}`;

      const { data, error } = await this.client.storage
        .from('scores')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;

      const { data: { publicUrl } } = this.client.storage
        .from('scores')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.error('[Supabase] Falha no upload da partitura PDF:', err.message);
      return null;
    }
  }

  async uploadSongCover(file) {
    if (!this.client || !file) return null;
    try {
      const cleanName = file.name ? file.name.replace(/[^a-zA-Z0-9._-]/g, '_') : 'cover.jpg';
      const filePath = `covers/${Date.now()}_${cleanName}`;

      const { data, error } = await this.client.storage
        .from('scores')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;

      const { data: { publicUrl } } = this.client.storage
        .from('scores')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.error('[Supabase] Falha no upload da capa:', err.message);
      return null;
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

  async deleteMapPoint(id) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('map_points').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch {
      return false;
    }
  }

  // ============================================================================
  // PASSOS DO FREVO (CRUD)
  // ============================================================================
  async getSteps() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client.from('frevo_steps').select('*').order('name');
      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(s => ({
          id: s.id,
          name: s.name,
          difficulty: s.difficulty || 'Iniciante',
          category: s.category || 'Tradicional',
          description: s.description || '',
          instructions: s.instructions || '',
          media_url: s.media_url || null,
          media_type: s.media_type || 'image',
          author_role: 'admin'
        }));
      }
      return null;
    } catch {
      return null;
    }
  }

  async createStep(step) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client.from('frevo_steps').insert([{
        name: step.name,
        slug: step.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
        description: step.description,
        instructions: step.instructions,
        difficulty: step.difficulty || 'Iniciante',
        category: step.category || 'Tradicional',
        media_url: step.media_url || null,
        media_type: step.media_type || 'image',
        is_published: true
      }]).select();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('[Supabase] Erro ao salvar passo:', err.message);
      return null;
    }
  }

  async deleteStep(stepId) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('frevo_steps').delete().eq('id', stepId);
      if (error) throw error;
      return true;
    } catch {
      return false;
    }
  }

  // ============================================================================
  // LINHA DO TEMPO HISTÓRICA (CRUD)
  // ============================================================================
  async getHistoryEntries() {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client.from('history_entries').select('*').order('created_at', { ascending: true });
      if (error) throw error;
      if (data && data.length > 0) {
        return data.map(h => ({
          id: h.id,
          title: h.title,
          period: h.period_label || 'Histórico',
          content: h.content,
          source: h.source_text || 'Acervo FrevAI',
          media_url: h.media_url || h.image_url || null,
          media_type: h.media_type || 'image'
        }));
      }
      return null;
    } catch {
      return null;
    }
  }

  async createHistoryEntry(item) {
    if (!this.client) return null;
    try {
      const { data, error } = await this.client.from('history_entries').insert([{
        title: item.title,
        slug: item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
        period_label: item.period,
        content: item.content,
        source_text: item.source,
        image_url: item.media_type === 'image' ? item.media_url : null,
        media_url: item.media_url || null,
        media_type: item.media_type || 'image',
        is_published: true
      }]).select();
      if (error) throw error;
      return data;
    } catch (err) {
      console.error('[Supabase] Erro ao salvar marco histórico:', err.message);
      return null;
    }
  }

  async deleteHistoryEntry(historyId) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from('history_entries').delete().eq('id', historyId);
      if (error) throw error;
      return true;
    } catch {
      return false;
    }
  }

  // ============================================================================
  // UPLOAD DE MÍDIA UNIVERSAL (IMAGENS E VÍDEOS)
  // ============================================================================
  async uploadMedia(file, folder = 'general') {
    if (!this.client || !file) return null;
    try {
      const isVideo = file.type && file.type.startsWith('video');
      const ext = file.name ? file.name.split('.').pop().toLowerCase() : (isVideo ? 'mp4' : 'jpg');
      const cleanName = (file.name || 'media').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const filePath = `${folder}/${Date.now()}_${cleanName}.${ext}`;

      // Tenta upload no bucket 'media'; fallback para 'covers' ou 'scores'
      let targetBucket = 'media';
      let res = await this.client.storage.from(targetBucket).upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      });

      if (res.error) {
        // Fallback para 'covers' se 'media' ainda não existir no projeto do usuário
        targetBucket = 'covers';
        res = await this.client.storage.from(targetBucket).upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });
      }

      if (res.error) throw res.error;

      const { data: { publicUrl } } = this.client.storage
        .from(targetBucket)
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (err) {
      console.warn('[Supabase Storage] Aviso no upload de mídia:', err.message);
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

  // ============================================================================
  // GEOCODIFICAÇÃO DE ENDEREÇO COM GOOGLE MAPS / NOMINATIM
  // ============================================================================
  async geocodeAddress(addressQuery) {
    if (!addressQuery || !addressQuery.trim()) return null;
    const query = addressQuery.trim();

    // Dicionário com marcos célebres de Pernambuco para resposta instantânea e precisão absoluta
    const knownLandmarks = [
      { keys: ['paço do frevo', 'paco do frevo', 'arsenal da marinha', 'praça do arsenal'], coords: [-8.0617, -34.8711], address: 'Praça do Arsenal da Marinha, s/n - Bairro do Recife, Recife - PE' },
      { keys: ['vassourinhas', 'largo do amparo', 'amparo'], coords: [-8.0534, -34.8778], address: 'Largo do Amparo, Olinda / Recife - PE' },
      { keys: ['marco zero', 'praça barão do rio branco'], coords: [-8.0631, -34.8711], address: 'Praça do Marco Zero, Recife Antigo, Recife - PE' },
      { keys: ['galo da madrugada', 'palácio enéas freire', 'rua da concórdia'], coords: [-8.0673, -34.8821], address: 'Rua da Concórdia, 1024 - São José, Recife - PE' },
      { keys: ['rua da aurora', 'aurora'], coords: [-8.0595, -34.8812], address: 'Rua da Aurora - Boa Vista, Recife - PE' },
      { keys: ['teatro santa isabel', 'santa isabel', 'praça da república'], coords: [-8.0604, -34.8781], address: 'Praça da República, s/n - Santo Antônio, Recife - PE' },
      { keys: ['pitombeira', 'rua 27 de janeiro', 'carmo olinda'], coords: [-8.0125, -34.8519], address: 'Rua 27 de Janeiro, Carmo - Olinda - PE' },
      { keys: ['alto da sé', 'igreja da sé'], coords: [-8.0142, -34.8483], address: 'Alto da Sé, Carmo - Olinda - PE' },
      { keys: ['mercado da boa vista', 'boa vista'], coords: [-8.0628, -34.8911], address: 'Rua da Santa Cruz - Boa Vista, Recife - PE' },
      { keys: ['rua do bom jesus', 'bom jesus', 'sinagoga kahal zur'], coords: [-8.0625, -34.8718], address: 'Rua do Bom Jesus - Recife Antigo, Recife - PE' },
      { keys: ['bomba do hemetério', 'bomba do hemeterio'], coords: [-8.0215, -34.8973], address: 'Bomba do Hemetério - Zona Norte, Recife - PE' },
      { keys: ['cais da alfândega', 'shopping paço alfândega', 'madre de deus'], coords: [-8.0645, -34.8732], address: 'Cais da Alfândega - Bairro do Recife, Recife - PE' }
    ];

    const lower = query.toLowerCase();
    for (const lm of knownLandmarks) {
      if (lm.keys.some(k => lower.includes(k))) {
        return {
          displayName: lm.address,
          coords: lm.coords,
          source: 'curated'
        };
      }
    }

    // Geocodificação real via Nominatim OpenStreetMap focada em Pernambuco/Recife
    try {
      const sanitized = encodeURIComponent(`${query}, Pernambuco, Brasil`);
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${sanitized}&addressdetails=1&limit=1`, {
        headers: { 'Accept-Language': 'pt-BR,pt;q=0.9', 'User-Agent': 'FrevAI-Cultural-App' }
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          return {
            displayName: data[0].display_name,
            coords: [lat, lon],
            source: 'geocoded'
          };
        }
      }
    } catch (e) {
      console.warn('[Geocoding] Aviso ao consultar geocodificador:', e.message);
    }

    // Fallback inteligente para o centro do Recife
    return {
      displayName: query,
      coords: [-8.0631, -34.8711],
      source: 'fallback'
    };
  }
}

window.supabaseService = new SupabaseService();

