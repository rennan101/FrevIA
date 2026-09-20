// ==============================================================================
// FREVAI AWS BACKEND & DATA SERVICE (COGNITO, S3 & SERVERLESS REST API)
// ==============================================================================

class AwsService {
  constructor() {
    this.config = window.FREVIA_AWS_CONFIG || {};
    this.authListeners = [];
    this.tokens = this.loadStoredTokens();
    this.init();
  }

  loadStoredTokens() {
    try {
      const t = localStorage.getItem('frevai_aws_tokens');
      return t ? JSON.parse(t) : { idToken: null, accessToken: null, refreshToken: null };
    } catch {
      return { idToken: null, accessToken: null, refreshToken: null };
    }
  }

  saveStoredTokens(tokens) {
    this.tokens = { ...this.tokens, ...tokens };
    try {
      localStorage.setItem('frevai_aws_tokens', JSON.stringify(this.tokens));
    } catch {}
  }

  clearStoredTokens() {
    this.tokens = { idToken: null, accessToken: null, refreshToken: null };
    try {
      localStorage.removeItem('frevai_aws_tokens');
    } catch {}
  }

  getAuthHeaders(customHeaders = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders
    };
    if (this.tokens && this.tokens.idToken) {
      headers['Authorization'] = `Bearer ${this.tokens.idToken}`;
    }
    return headers;
  }

  init() {
    this.region = this.config.REGION || 'sa-east-1';
    this.userPoolId = this.config.COGNITO_USER_POOL_ID;
    this.clientId = this.config.COGNITO_CLIENT_ID;
    this.s3Bucket = this.config.S3_BUCKET;
    this.s3BaseUrl = this.config.S3_BASE_URL;
    this.apiGatewayUrl = this.config.API_GATEWAY_URL;
    this.cognitoDomain = this.config.COGNITO_DOMAIN || 'frevia.auth.sa-east-1.amazoncognito.com';
    this.checkOAuthCallback();
  }

  isConnected() {
    return Boolean(this.userPoolId && this.clientId && this.apiGatewayUrl);
  }

  // ============================================================================
  // EVENTOS DE AUTENTICAÇÃO (onAuthStateChange COMPATÍVEL)
  // ============================================================================
  onAuthStateChange(callback) {
    if (typeof callback === 'function') {
      this.authListeners.push(callback);
    }
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            this.authListeners = this.authListeners.filter(cb => cb !== callback);
          }
        }
      }
    };
  }

  notifyAuthListeners(event, session) {
    this.authListeners.forEach(cb => {
      try {
        cb(event, session);
      } catch (err) {
        console.warn('[AwsService] Erro em listener de auth:', err);
      }
    });
  }

  // ============================================================================
  // OAUTH & GOOGLE FEDERATION
  // ============================================================================
  signInWithGoogle() {
    const currentOrigin = window.location.origin + window.location.pathname;
    const redirectUri = encodeURIComponent(currentOrigin);
    const oauthUrl = `https://${this.cognitoDomain}/oauth2/authorize?identity_provider=Google&redirect_uri=${redirectUri}&response_type=token&client_id=${this.clientId}&scope=email+openid+profile`;
    window.location.href = oauthUrl;
  }

  checkOAuthCallback() {
    const hash = window.location.hash;
    if (hash && (hash.includes('access_token') || hash.includes('id_token'))) {
      const params = new URLSearchParams(hash.substring(1));
      const idToken = params.get('id_token');
      const accessToken = params.get('access_token');

      // Limpar hash da URL imediatamente sem perder os dados
      window.history.replaceState(null, '', window.location.pathname + window.location.search);

      (async () => {
        try {
          let email = '';
          let name = '';
          let avatar = null;
          let sub = '';

          if (idToken) {
            try {
              const base64Url = idToken.split('.')[1];
              const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
              const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
              const payload = JSON.parse(jsonPayload);
              email = payload.email || '';
              name = payload.given_name || payload.name || (email ? email.split('@')[0] : 'Folião');
              avatar = payload.picture || null;
              sub = payload.sub || email;
            } catch (e) {
              console.warn('[AWS] Erro ao decodificar id_token:', e);
            }
          }

          if (!email && accessToken) {
            try {
              const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${accessToken}` }
              });
              if (res.ok) {
                const googleUser = await res.json();
                email = googleUser.email || '';
                name = googleUser.name || googleUser.given_name || (email ? email.split('@')[0] : 'Folião');
                avatar = googleUser.picture || null;
                sub = googleUser.sub || email;
              }
            } catch (e) {
              console.warn('[AWS] Erro ao obter dados do userinfo com access_token:', e);
            }
          }

          if (!email && !sub) return;

          let profile = await this.getProfile(sub || email);
          if (!profile) {
            profile = await this.upsertProfile({
              id: sub || email,
              email: email,
              user_metadata: { display_name: name, avatar_url: avatar }
            });
          }

          // Carregar estado social existente no backend AWS (likes, salvos, favoritos)
          const social = await this.getUserSocialState(sub || email);
          const favs = social?.favoriteArtistIds || [];
          if (typeof DB !== 'undefined' && DB.posts && social) {
            DB.posts.forEach(p => {
              p.is_liked = (social.likedPostIds || []).includes(p.id);
              p.is_saved = (social.savedPostIds || []).includes(p.id);
            });
          }

          const isApprovedArtist = profile?.role === 'artist' && profile?.artist_id;
          const userRole = profile?.role === 'admin' ? 'admin' : (isApprovedArtist ? 'artist' : 'user');

              const sessionObj = {
                id: sub,
                role: userRole,
                name: profile?.display_name || name,
                handle: profile?.handle || ('@' + (email ? email.split('@')[0] : 'foliao')),
                avatar: avatar || profile?.avatar_url || null,
                email: email,
                artist_id: profile?.artist_id || null,
                artist_request_status: profile?.artist_request_status || 'none',
                favorites: favs
              };

              if (typeof currentUserSession !== 'undefined') {
                Object.assign(currentUserSession, sessionObj);
              }
              if (typeof currentUserProfile !== 'undefined') {
                currentUserProfile.name = sessionObj.name;
                currentUserProfile.handle = sessionObj.handle;
                currentUserProfile.avatar = sessionObj.avatar;
                currentUserProfile.email = sessionObj.email;
              }

              if (typeof saveCurrentSession === 'function') saveCurrentSession();
              if (typeof updateProfileUI === 'function') updateProfileUI();
              if (typeof updateSessionUI === 'function') updateSessionUI();
              if (typeof renderFeed === 'function') renderFeed();
              if (typeof renderArtists === 'function') renderArtists();

              // Notificar eventuais listeners
              this.notifyAuthListeners('SIGNED_IN', {
                user: {
                  id: sub,
                  email: email,
                  user_metadata: { display_name: name, avatar_url: avatar }
                }
              });
            } catch (err) {
              console.error('[OAuth Callback] Erro ao sincronizar sessão:', err);
            }
          })();
        }
      }

  // ============================================================================
  // AUTENTICAÇÃO COGNITO (EMAIL E SENHA)
  // ============================================================================
  async signInWithEmail(email, password) {
    try {
      if (!this.apiGatewayUrl) throw new Error('API Gateway não configurado');

      const res = await fetch(`${this.apiGatewayUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const body = await res.json();
      if (!res.ok || body.error) {
        return { data: null, error: body.error || { message: 'Erro ao autenticar no Cognito' } };
      }

      if (body.data?.user) {
        this.notifyAuthListeners('SIGNED_IN', { user: body.data.user });
      }

      return { data: body.data, error: null };
    } catch (err) {
      console.warn('[AWS Cognito] Erro ao autenticar:', err);
      return { data: null, error: { message: err.message || 'Falha na conexão com o servidor de autenticação' } };
    }
  }

  async signUpWithEmail(email, password, metadata = {}) {
    try {
      if (!this.apiGatewayUrl) throw new Error('API Gateway não configurado');

      const res = await fetch(`${this.apiGatewayUrl}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, metadata })
      });

      const body = await res.json();
      if (!res.ok || body.error) {
        return { data: null, error: body.error || { message: 'Erro ao criar conta no Cognito' } };
      }

      return { data: body.data, error: null };
    } catch (err) {
      console.warn('[AWS Cognito] Erro ao cadastrar:', err);
      return { data: null, error: { message: err.message || 'Falha na conexão com o servidor de cadastro' } };
    }
  }

  async resetPasswordForEmail(email) {
    try {
      if (!this.apiGatewayUrl) throw new Error('API Gateway não configurado');

      const res = await fetch(`${this.apiGatewayUrl}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const body = await res.json();
      if (!res.ok || body.error) {
        return { error: body.error || { message: 'Erro ao solicitar redefinição de senha' } };
      }
      return { data: true, error: null };
    } catch (err) {
      return { error: { message: err.message } };
    }
  }

  async signOut() {
    this.notifyAuthListeners('SIGNED_OUT', null);
    return { error: null };
  }

  // ============================================================================
  // PERFIS (DYNAMODB)
  // ============================================================================
  async getProfile(userId) {
    if (!userId || !this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/profiles/${encodeURIComponent(userId)}`);
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async upsertProfile(user, extraData = {}) {
    if (!user || !this.apiGatewayUrl) return null;
    try {
      const id = user.id || user.email;
      const existing = await this.getProfile(id);
      const displayName = extraData.display_name || user.user_metadata?.display_name || user.email?.split('@')[0] || 'Folião';
      const handle = extraData.handle || existing?.handle || ('@' + user.email?.split('@')[0]);
      const role = existing?.role || extraData.role || 'user';

      const payload = {
        id: id,
        email: user.email,
        display_name: displayName,
        handle: handle,
        avatar_url: extraData.avatar_url || user.user_metadata?.avatar_url || null,
        bio: extraData.bio || existing?.bio || '',
        role: role,
        artist_id: existing?.artist_id || extraData.artist_id || null,
        artist_request_status: existing?.artist_request_status || extraData.artist_request_status || 'none',
        updated_at: new Date().toISOString()
      };

      const res = await fetch(`${this.apiGatewayUrl}/profiles/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        return await res.json();
      }
      return payload;
    } catch (e) {
      return null;
    }
  }

  async requestArtistRole(userId, reqData) {
    if (!userId || !this.apiGatewayUrl) return { error: { message: 'Configuração ausente' } };
    try {
      const payload = {
        id: 'req_' + Date.now(),
        user_id: userId,
        requested_name: reqData.requested_name,
        genre: reqData.genre || 'Frevo de Rua',
        bio: reqData.bio || '',
        whatsapp: reqData.whatsapp || '',
        status: 'pending',
        created_at: new Date().toISOString()
      };
      await fetch(`${this.apiGatewayUrl}/artist_requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Atualizar no profile
      await this.upsertProfile({ id: userId }, { artist_request_status: 'pending' });
      return { data: payload, error: null };
    } catch (err) {
      return { error: { message: err.message } };
    }
  }

  async approveArtistRequest(requestId, adminId) {
    if (!requestId || !this.apiGatewayUrl) return { error: { message: 'Configuração ausente' } };
    try {
      const payload = {
        status: 'approved',
        reviewed_by: adminId,
        reviewed_at: new Date().toISOString()
      };
      const res = await fetch(`${this.apiGatewayUrl}/artist_requests/${encodeURIComponent(requestId)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return { data: res.ok ? await res.json() : payload, error: null };
    } catch (err) {
      return { error: { message: err.message } };
    }
  }

  async rejectArtistRequest(requestId, adminId, reason) {
    if (!requestId || !this.apiGatewayUrl) return { error: { message: 'Configuração ausente' } };
    try {
      const payload = {
        status: 'rejected',
        review_notes: reason,
        reviewed_by: adminId,
        reviewed_at: new Date().toISOString()
      };
      const res = await fetch(`${this.apiGatewayUrl}/artist_requests/${encodeURIComponent(requestId)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return { data: res.ok ? await res.json() : payload, error: null };
    } catch (err) {
      return { error: { message: err.message } };
    }
  }

  // ============================================================================
  // INTERAÇÕES SOCIAIS: LIKES, SALVOS & FAVORITOS NO BACKEND AWS
  // ============================================================================
  async getUserSocialState(userId) {
    if (!userId || !this.apiGatewayUrl) {
      return { likedPostIds: [], savedPostIds: [], favoriteArtistIds: [] };
    }
    try {
      const res = await fetch(`${this.apiGatewayUrl}/social/state?userId=${encodeURIComponent(userId)}`);
      if (res.ok) {
        return await res.json();
      }
      return { likedPostIds: [], savedPostIds: [], favoriteArtistIds: [] };
    } catch (err) {
      console.warn('[AWS Social] Falha ao carregar estado social:', err);
      return { likedPostIds: [], savedPostIds: [], favoriteArtistIds: [] };
    }
  }

  async togglePostLike(postId, userId) {
    if (!postId || !userId || !this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/social/toggle-like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, userId })
      });
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (err) {
      console.warn('[AWS Social] Falha ao alternar like:', err);
      return null;
    }
  }

  async toggleSavedPost(postId, userId) {
    if (!postId || !userId || !this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/social/toggle-save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, userId })
      });
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (err) {
      console.warn('[AWS Social] Falha ao alternar post salvo:', err);
      return null;
    }
  }

  async toggleFavoriteArtist(artistId, userId) {
    if (!artistId || !userId || !this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/social/toggle-favorite`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ artistId, userId })
      });
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (err) {
      console.warn('[AWS Social] Falha ao alternar artista favorito:', err);
      return null;
    }
  }

  // ============================================================================
  // MÚSICAS & PARTITURAS (CRUD NO BACKEND AWS)
  // ============================================================================
  async getSongs() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/songs`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS Songs] Falha ao buscar músicas:', err);
      return null;
    }
  }

  async createSong(song) {
    if (!song) return null;
    if (!this.apiGatewayUrl) return song;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/songs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(song)
      });
      if (res.ok) {
        return await res.json();
      }
      return song;
    } catch (err) {
      console.warn('[AWS Songs] Falha ao criar música:', err);
      return song;
    }
  }

  async deleteSong(id) {
    if (!id || !this.apiGatewayUrl) return true;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/songs/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS Songs] Falha ao excluir música:', err);
      return false;
    }
  }

  // ============================================================================
  // ÁLBUNS & DISCOGRAFIA (CRUD NO BACKEND AWS)
  // ============================================================================
  async getAlbums() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/albums`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS Albums] Falha ao buscar álbuns:', err);
      return null;
    }
  }

  async createAlbum(album) {
    if (!album) return null;
    if (!this.apiGatewayUrl) return album;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/albums`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(album)
      });
      if (res.ok) {
        return await res.json();
      }
      return album;
    } catch (err) {
      console.warn('[AWS Albums] Falha ao criar álbum:', err);
      return album;
    }
  }

  async deleteAlbum(id) {
    if (!id || !this.apiGatewayUrl) return true;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/albums/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS Albums] Falha ao excluir álbum:', err);
      return false;
    }
  }

  // ============================================================================
  // SHOWS & EVENTOS DE ARTISTAS (CRUD NO BACKEND AWS)
  // ============================================================================
  async getArtistEvents() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/shows`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS Shows] Falha ao buscar shows:', err);
      return null;
    }
  }

  async createArtistEvent(event) {
    if (!event) return null;
    if (!this.apiGatewayUrl) return event;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/shows`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
      if (res.ok) {
        return await res.json();
      }
      return event;
    } catch (err) {
      console.warn('[AWS Shows] Falha ao criar show:', err);
      return event;
    }
  }

  async deleteArtistEvent(id) {
    if (!id || !this.apiGatewayUrl) return true;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/shows/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS Shows] Falha ao excluir show:', err);
      return false;
    }
  }

  // ============================================================================
  // POSTS & FEED CULTURAL (CRUD NO BACKEND AWS)
  // ============================================================================
  async getPosts() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/posts`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS Posts] Falha ao buscar posts:', err);
      return null;
    }
  }

  async createPost(post) {
    if (!post) return null;
    if (!this.apiGatewayUrl) return post;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });
      if (res.ok) {
        return await res.json();
      }
      return post;
    } catch (err) {
      console.warn('[AWS Posts] Falha ao criar post:', err);
      return post;
    }
  }

  async updatePost(id, post) {
    if (!id || !post || !this.apiGatewayUrl) return post;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/posts/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });
      if (res.ok) {
        return await res.json();
      }
      return post;
    } catch (err) {
      console.warn('[AWS Posts] Falha ao atualizar post:', err);
      return post;
    }
  }

  async deletePost(id) {
    if (!id || !this.apiGatewayUrl) return true;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/posts/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS Posts] Falha ao excluir post:', err);
      return false;
    }
  }

  // ============================================================================
  // COMENTÁRIOS DO FEED (CRUD NO BACKEND AWS)
  // ============================================================================
  async addComment(postId, userId, text) {
    if (!postId || !userId || !text) return null;
    const payload = {
      id: `c_${Date.now()}`,
      postId,
      userId,
      text,
      createdAt: new Date().toISOString()
    };
    if (!this.apiGatewayUrl) return payload;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        return await res.json();
      }
      return payload;
    } catch (err) {
      console.warn('[AWS Comments] Falha ao adicionar comentário:', err);
      return payload;
    }
  }

  async updateComment(commentId, newText) {
    if (!commentId || !newText || !this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/comments/${encodeURIComponent(commentId)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newText })
      });
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (err) {
      console.warn('[AWS Comments] Falha ao atualizar comentário:', err);
      return null;
    }
  }

  async deleteComment(commentId) {
    if (!commentId || !this.apiGatewayUrl) return true;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/comments/${encodeURIComponent(commentId)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS Comments] Falha ao excluir comentário:', err);
      return false;
    }
  }

  // ============================================================================
  // ARTISTAS & SOLICITAÇÕES
  // ============================================================================
  async getArtists() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/artists`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS Artists] Falha ao buscar artistas:', err);
      return null;
    }
  }

  async getPendingArtistRequests() {
    if (!this.apiGatewayUrl) return [];
    try {
      const res = await fetch(`${this.apiGatewayUrl}/artist_requests?status=pending`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      }
      return [];
    } catch (err) {
      console.warn('[AWS Artist Requests] Falha ao buscar solicitações:', err);
      return [];
    }
  }

  async registerArtistByAdmin(artistData) {
    if (!artistData) return null;
    if (!this.apiGatewayUrl) return artistData;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/artists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artistData)
      });
      if (res.ok) {
        return await res.json();
      }
      return artistData;
    } catch (err) {
      console.warn('[AWS Artists] Falha ao registrar artista:', err);
      return artistData;
    }
  }

  async updateArtistApproval(artistId, isApproved) {
    if (!artistId || !this.apiGatewayUrl) return true;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/artists/${encodeURIComponent(artistId)}/approval`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_authorized_editor: isApproved })
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS Artists] Falha ao atualizar aprovação de artista:', err);
      return false;
    }
  }

  // ============================================================================
  // UTILITÁRIOS DE PERFIL (@HANDLE)
  // ============================================================================
  async checkHandleAvailable(handle, excludeUserId = null) {
    if (!handle || !this.apiGatewayUrl) return true;
    try {
      const url = `${this.apiGatewayUrl}/profiles/check-handle?handle=${encodeURIComponent(handle)}${excludeUserId ? `&excludeUserId=${encodeURIComponent(excludeUserId)}` : ''}`;
      const res = await fetch(url);
      if (res.ok) {
        const body = await res.json();
        return body.available !== false;
      }
      return true;
    } catch (err) {
      return true;
    }
  }

  async updateProfileHandle(userId, newHandle) {
    if (!userId || !newHandle) return null;
    return await this.upsertProfile({ id: userId }, { handle: newHandle });
  }

  // ============================================================================
  // MAPA CULTURAL & PASSOS DO FREVO
  // ============================================================================
  async getMapPoints() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/map_points`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS Map] Falha ao buscar pontos do mapa:', err);
      return null;
    }
  }

  async createMapPoint(point) {
    if (!point) return null;
    if (!this.apiGatewayUrl) return point;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/map_points`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(point)
      });
      if (res.ok) {
        return await res.json();
      }
      return point;
    } catch (err) {
      console.warn('[AWS Map] Falha ao criar ponto:', err);
      return point;
    }
  }

  async deleteMapPoint(id) {
    if (!id || !this.apiGatewayUrl) return true;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/map_points/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS Map] Falha ao excluir ponto do mapa:', err);
      return false;
    }
  }

  async getSteps() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/steps`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS Steps] Falha ao buscar passos:', err);
      return null;
    }
  }

  async createStep(step) {
    if (!step) return null;
    if (!this.apiGatewayUrl) return step;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/steps`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(step)
      });
      if (res.ok) {
        return await res.json();
      }
      return step;
    } catch (err) {
      console.warn('[AWS Steps] Falha ao criar passo:', err);
      return step;
    }
  }

  // ============================================================================
  // HISTÓRIA DO FREVO (CRUD COM CRONOLOGIA AUTOMÁTICA)
  // ============================================================================
  async getHistoryEntries() {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/history`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : null;
      }
      return null;
    } catch (err) {
      console.warn('[AWS History] Falha ao buscar história:', err);
      return null;
    }
  }

  async createHistoryEntry(item) {
    if (!this.apiGatewayUrl || !item) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/history`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (err) {
      console.warn('[AWS History] Falha ao criar marco histórico:', err);
      return null;
    }
  }

  async updateHistoryEntry(id, item) {
    if (!this.apiGatewayUrl || !id || !item) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/history/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (err) {
      console.warn('[AWS History] Falha ao atualizar marco histórico:', err);
      return null;
    }
  }

  async deleteHistoryEntry(id) {
    if (!this.apiGatewayUrl || !id) return false;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/history/${encodeURIComponent(id)}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (err) {
      console.warn('[AWS History] Falha ao excluir marco histórico:', err);
      return false;
    }
  }

  // ============================================================================
  // UPLOAD DE MÍDIA UNIVERSAL (AMAZON S3 COM PRESIGNED URLS & WEBP)
  // ============================================================================
  async getPresignedUploadUrl(fileName, contentType, folder = 'general') {
    if (!this.apiGatewayUrl) return null;
    try {
      const res = await fetch(`${this.apiGatewayUrl}/storage/presigned-url`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ fileName: `${folder}/${fileName}`, contentType })
      });
      if (res.ok) {
        return await res.json(); // { uploadUrl, fileUrl }
      }
      return null;
    } catch {
      return null;
    }
  }

  async uploadMedia(file, folder = 'general') {
    if (!file) return null;
    try {
      // Otimização automática: converter imagens para WebP antes do upload
      let fileToUpload = file;
      if (window.MediaOptimizer && file.type && file.type.startsWith('image/')) {
        try {
          fileToUpload = await window.MediaOptimizer.compressAndConvertToWebP(file);
        } catch (e) {
          console.warn('[MediaOptimizer] Fallback para imagem original:', e);
        }
      }

      const ext = fileToUpload.name ? fileToUpload.name.split('.').pop().toLowerCase() : 'webp';
      const cleanName = (fileToUpload.name || 'media').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const fileName = `${Date.now()}_${cleanName}.${ext}`;

      // 1. Tentar Presigned URL
      const presigned = await this.getPresignedUploadUrl(fileName, fileToUpload.type || 'application/octet-stream', folder);
      if (presigned && presigned.uploadUrl) {
        const putRes = await fetch(presigned.uploadUrl, {
          method: 'PUT',
          body: fileToUpload,
          headers: { 'Content-Type': fileToUpload.type || 'application/octet-stream' }
        });
        if (putRes.ok) {
          return presigned.fileUrl || `${this.s3BaseUrl}/${folder}/${fileName}`;
        }
      }

      // 2. Direct S3 PUT
      const s3UploadUrl = `${this.s3BaseUrl}/${folder}/${fileName}`;
      const res = await fetch(s3UploadUrl, {
        method: 'PUT',
        body: fileToUpload,
        headers: {
          'Content-Type': fileToUpload.type || 'application/octet-stream'
        }
      });

      if (res.ok) {
        return s3UploadUrl;
      }

      // Fallback para Base64 local se houver bloqueio de rede
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve(s3UploadUrl);
        reader.readAsDataURL(fileToUpload);
      });
    } catch (err) {
      console.warn('[AWS S3 Upload] Aviso:', err);
      return `${this.s3BaseUrl}/${folder}/${Date.now()}_file.${file.name?.split('.').pop() || 'jpg'}`;
    }
  }

  async uploadAvatar(file, userId) {
    return await this.uploadMedia(file, 'avatars');
  }

  async uploadAudio(file, artistId = 'general', onProgress = null) {
    if (!file) return null;
    try {
      if (onProgress) onProgress(15);
      if (window.MediaOptimizer) {
        const check = await window.MediaOptimizer.inspectAudioFile(file);
        if (!check.isValid && window.showToast) {
          window.showToast(check.error, 'warning');
        }
      }

      const ext = file.name ? file.name.split('.').pop().toLowerCase() : 'mp3';
      const cleanName = (file.name || 'audio').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const fileName = `${Date.now()}_${cleanName}.${ext}`;
      const folder = `audio/${artistId}`;

      if (onProgress) onProgress(35);

      // 1. Tentar Presigned URL
      const presigned = await this.getPresignedUploadUrl(fileName, file.type || 'audio/mpeg', folder);
      if (presigned && presigned.uploadUrl) {
        if (onProgress) onProgress(60);
        const putRes = await fetch(presigned.uploadUrl, {
          method: 'PUT',
          body: file,
          headers: { 'Content-Type': file.type || 'audio/mpeg' }
        });
        if (putRes.ok) {
          if (onProgress) onProgress(100);
          return presigned.fileUrl || `${this.s3BaseUrl}/${folder}/${fileName}`;
        }
      }

      // 2. Direct S3 PUT
      const s3UploadUrl = `${this.s3BaseUrl}/${folder}/${fileName}`;
      if (this.isConnected()) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        if (onProgress) onProgress(65);
        const res = await fetch(s3UploadUrl, {
          method: 'PUT',
          body: file,
          signal: controller.signal,
          headers: {
            'Content-Type': file.type || 'audio/mpeg'
          }
        }).catch(err => {
          console.warn('[AWS Audio Upload] Fetch S3 falhou ou sem credenciais:', err);
          return null;
        });
        clearTimeout(timeoutId);

        if (res && res.ok) {
          if (onProgress) onProgress(100);
          return s3UploadUrl;
        }
      }

      // 3. Fallback seguro
      if (onProgress) onProgress(85);
      const dataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => {
          try {
            resolve(URL.createObjectURL(file));
          } catch (e) {
            resolve(null);
          }
        };
        reader.readAsDataURL(file);
      });

      if (onProgress) onProgress(100);
      return dataUrl || (window.URL ? URL.createObjectURL(file) : s3UploadUrl);
    } catch (err) {
      console.warn('[AWS Audio Upload] Fallback para DataURL:', err);
      try {
        const dataUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => resolve(URL.createObjectURL(file));
          reader.readAsDataURL(file);
        });
        if (onProgress) onProgress(100);
        return dataUrl;
      } catch (e) {
        if (onProgress) onProgress(100);
        return URL.createObjectURL(file);
      }
    }
  }

  async uploadScore(file, artistId = 'general', onProgress = null) {
    if (!file) return null;
    try {
      if (onProgress) onProgress(20);
      if (window.MediaOptimizer) {
        const check = window.MediaOptimizer.inspectPdfFile(file);
        if (!check.isValid && window.showToast) {
          window.showToast(check.error, 'warning');
        }
      }

      const ext = 'pdf';
      const cleanName = (file.name || 'partitura').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const fileName = `${Date.now()}_${cleanName}.${ext}`;
      const folder = `scores/${artistId}`;

      if (onProgress) onProgress(45);

      // 1. Tentar Presigned URL
      const presigned = await this.getPresignedUploadUrl(fileName, 'application/pdf', folder);
      if (presigned && presigned.uploadUrl) {
        if (onProgress) onProgress(70);
        const putRes = await fetch(presigned.uploadUrl, {
          method: 'PUT',
          body: file,
          headers: { 'Content-Type': 'application/pdf' }
        });
        if (putRes.ok) {
          if (onProgress) onProgress(100);
          return presigned.fileUrl || `${this.s3BaseUrl}/${folder}/${fileName}`;
        }
      }

      // 2. Direct S3 PUT
      const s3UploadUrl = `${this.s3BaseUrl}/${folder}/${fileName}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(s3UploadUrl, {
        method: 'PUT',
        body: file,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/pdf'
        }
      }).catch(err => {
        console.warn('[AWS Score Upload] Aviso:', err);
        return null;
      });
      clearTimeout(timeoutId);

      if (onProgress) onProgress(100);

      if (res && res.ok) {
        return s3UploadUrl;
      }
      return s3UploadUrl;
    } catch (err) {
      if (onProgress) onProgress(100);
      return `${this.s3BaseUrl}/scores/${artistId}/${Date.now()}_partitura.pdf`;
    }
  }

  async uploadSongCover(file) {
    return await this.uploadMedia(file, 'covers');
  }

  // ============================================================================
  // GEOCODIFICAÇÃO RESILIENTE
  // ============================================================================
  async geocodeAddress(query) {
    try {
      const sanitized = encodeURIComponent(`${query}, Pernambuco, Brasil`);
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${sanitized}&addressdetails=1&limit=1`, {
        headers: { 'Accept-Language': 'pt-BR,pt;q=0.9', 'User-Agent': 'FrevAI-Cultural-App' }
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          return {
            displayName: data[0].display_name,
            coords: [parseFloat(data[0].lat), parseFloat(data[0].lon)],
            source: 'geocoded'
          };
        }
      }
    } catch (e) {
      console.warn('[Geocoding] Aviso:', e.message);
    }

    return {
      displayName: query,
      coords: [-8.0631, -34.8711],
      source: 'fallback'
    };
  }
}

window.awsService = new AwsService();

// ==============================================================================
// COMPATIBILIDADE RETROATIVA: REDIRECIONAMENTO DE LEGADO PARA AWS CLOUD
// Garante que qualquer chamada remanescente ou de versão anterior em cache do
// navegador use exclusivamente a infraestrutura oficial da Amazon AWS.
// ==============================================================================
window.supabaseService = window.awsService;
window.supabase = window.awsService;

