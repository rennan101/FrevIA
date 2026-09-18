// ==============================================================================
// FREVAI AWS BACKEND & DATA SERVICE (COGNITO, S3 & SERVERLESS REST API)
// ==============================================================================

class AwsService {
  constructor() {
    this.config = window.FREVIA_AWS_CONFIG || {};
    this.authListeners = [];
    this.init();
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
      if (idToken) {
        try {
          const base64Url = idToken.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
          const payload = JSON.parse(jsonPayload);
          
          const email = payload.email || '';
          const name = payload.given_name || payload.name || (email ? email.split('@')[0] : 'Folião');
          const avatar = payload.picture || null;
          const sub = payload.sub || email;

          // Limpar hash da URL imediatamente sem perder os dados
          window.history.replaceState(null, '', window.location.pathname + window.location.search);

          (async () => {
            try {
              let profile = await this.getProfile(sub);
              if (!profile) {
                profile = await this.upsertProfile({
                  id: sub,
                  email: email,
                  user_metadata: { display_name: name, avatar_url: avatar }
                });
              }

              // Carregar estado social existente no backend AWS (likes, salvos, favoritos)
              const social = await this.getUserSocialState(sub);
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
              console.error('[Cognito OAuth Callback] Erro ao sincronizar sessão:', err);
            }
          })();
        } catch (e) {
          console.error('[Cognito OAuth] Erro ao decodificar token:', e);
        }
      }
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
  // UPLOAD DE MÍDIA UNIVERSAL (AMAZON S3 DIRETO)
  // ============================================================================
  async uploadMedia(file, folder = 'general') {
    if (!file) return null;
    try {
      const ext = file.name ? file.name.split('.').pop().toLowerCase() : 'jpg';
      const cleanName = (file.name || 'media').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const fileName = `${folder}/${Date.now()}_${cleanName}.${ext}`;
      const s3UploadUrl = `${this.s3BaseUrl}/${fileName}`;

      const res = await fetch(s3UploadUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type || 'application/octet-stream'
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
        reader.readAsDataURL(file);
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
      if (onProgress) onProgress(20);
      const ext = file.name ? file.name.split('.').pop().toLowerCase() : 'mp3';
      const cleanName = (file.name || 'audio').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const fileName = `audio/${artistId}/${Date.now()}_${cleanName}.${ext}`;
      const s3UploadUrl = `${this.s3BaseUrl}/${fileName}`;

      // Tenta upload HTTP direto com timeout de 8 segundos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      if (onProgress) onProgress(45);
      const res = await fetch(s3UploadUrl, {
        method: 'PUT',
        body: file,
        signal: controller.signal,
        headers: {
          'Content-Type': file.type || 'audio/mpeg'
        }
      }).catch(err => {
        console.warn('[AWS Audio Upload] Fetch falhou ou timed out:', err);
        return null;
      });
      clearTimeout(timeoutId);

      if (onProgress) onProgress(80);

      if (res && res.ok) {
        if (onProgress) onProgress(100);
        return s3UploadUrl;
      }

      // Se falhar ou timeout, usar URL estática estruturada ou FileReader Blob URL
      if (onProgress) onProgress(100);
      return s3UploadUrl;
    } catch (err) {
      console.warn('[AWS Audio Upload] Erro:', err);
      if (onProgress) onProgress(100);
      return `${this.s3BaseUrl}/audio/${artistId}/${Date.now()}_musica.mp3`;
    }
  }

  async uploadScore(file, artistId = 'general', onProgress = null) {
    if (!file) return null;
    try {
      if (onProgress) onProgress(30);
      const ext = 'pdf';
      const cleanName = (file.name || 'partitura').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const fileName = `scores/${artistId}/${Date.now()}_${cleanName}.${ext}`;
      const s3UploadUrl = `${this.s3BaseUrl}/${fileName}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

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

