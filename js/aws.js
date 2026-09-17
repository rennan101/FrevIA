// ==============================================================================
// FREVAI AWS BACKEND & DATA SERVICE (ADAPTER FOR COGNITO, S3 & AURORA / REST)
// ==============================================================================

class AwsService {
  constructor() {
    this.config = window.FREVIA_AWS_CONFIG || {};
    this.init();
  }

  init() {
    this.region = this.config.REGION || 'sa-east-1';
    this.userPoolId = this.config.COGNITO_USER_POOL_ID;
    this.clientId = this.config.COGNITO_CLIENT_ID;
    this.s3Bucket = this.config.S3_BUCKET;
    this.s3BaseUrl = this.config.S3_BASE_URL;
    this.apiGatewayUrl = this.config.API_GATEWAY_URL;
    this.cognitoDomain = this.config.COGNITO_DOMAIN;
  }

  isConnected() {
    return Boolean(this.userPoolId && this.clientId);
  }

  // ============================================================================
  // AUTENTICAÇÃO COGNITO (EMAIL/SENHA & GOOGLE OAUTH FEDERATED)
  // ============================================================================

  // Login Social com Google via Cognito Hosted UI
  signInWithGoogle() {
    const currentOrigin = window.location.origin + window.location.pathname;
    const cognitoDomain = this.cognitoDomain || `frevai-auth.auth.${this.region}.amazoncognito.com`;
    const redirectUri = encodeURIComponent(currentOrigin);
    
    const oauthUrl = `https://${cognitoDomain}/oauth2/authorize?identity_provider=Google&redirect_uri=${redirectUri}&response_type=token&client_id=${this.clientId}&scope=email+openid+profile`;
    
    window.location.href = oauthUrl;
  }

  // Cadastro de Usuário no Cognito
  async signUpWithEmail(email, password, metadata = {}) {
    try {
      if (!this.apiGatewayUrl) {
        // Modo client direto / fallback local
        return {
          data: {
            user: {
              id: 'aws-usr-' + Date.now(),
              email: email,
              user_metadata: {
                display_name: metadata.display_name || email.split('@')[0],
                role: metadata.role || 'user',
                ...metadata
              }
            }
          },
          error: null
        };
      }

      const res = await fetch(`${this.apiGatewayUrl}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, metadata })
      });
      return await res.json();
    } catch (err) {
      console.warn('[AWS Cognito] Erro ao cadastrar usuário:', err);
      return { error: err };
    }
  }

  // Login de Usuário no Cognito
  async signInWithEmail(email, password) {
    try {
      if (!this.apiGatewayUrl) {
        return {
          data: {
            user: {
              id: 'aws-usr-' + Date.now(),
              email: email
            },
            session: { access_token: 'aws-mock-token-' + Date.now() }
          },
          error: null
        };
      }

      const res = await fetch(`${this.apiGatewayUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      return await res.json();
    } catch (err) {
      console.warn('[AWS Cognito] Erro ao autenticar:', err);
      return { error: err };
    }
  }

  // Redefinição de Senha
  async resetPasswordForEmail(email) {
    try {
      if (this.apiGatewayUrl) {
        await fetch(`${this.apiGatewayUrl}/auth/forgot-password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
      }
      return { data: true, error: null };
    } catch (err) {
      return { error: err };
    }
  }

  // ============================================================================
  // UPLOAD DE MÍDIA NO AMAZON S3 (ÁUDIOS, PARTITURAS EM PDF E IMAGENS)
  // ============================================================================
  async uploadMediaFile(file, folder = 'general') {
    if (!file) return { error: { message: 'Nenhum arquivo fornecido' } };

    const cleanFileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
    const objectKey = `${folder}/${cleanFileName}`;

    try {
      // Se houver API Gateway para gerar Signed URL
      if (this.apiGatewayUrl) {
        const signRes = await fetch(`${this.apiGatewayUrl}/storage/presigned-url`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: objectKey, contentType: file.type })
        });
        const signData = await signRes.json();
        
        if (signData?.uploadUrl) {
          await fetch(signData.uploadUrl, {
            method: 'PUT',
            headers: { 'Content-Type': file.type },
            body: file
          });
          return { publicUrl: `${this.s3BaseUrl}/${objectKey}`, error: null };
        }
      }

      // Upload direto ou simulação com URL formatada no S3 da conta
      const directUrl = `${this.s3BaseUrl}/${objectKey}`;
      return { publicUrl: directUrl, error: null };
    } catch (err) {
      console.error('[AWS S3] Erro no upload:', err);
      return { error: err };
    }
  }

  // ============================================================================
  // BANCO DE DADOS AURORA POSTGRESQL / REST DATA API
  // ============================================================================
  async queryData(entity, filter = {}) {
    if (!this.apiGatewayUrl) {
      return null; // Utiliza store em memória / localStorage
    }

    try {
      const queryParams = new URLSearchParams(filter).toString();
      const res = await fetch(`${this.apiGatewayUrl}/data/${entity}?${queryParams}`);
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (err) {
      console.warn(`[AWS Aurora] Falha ao consultar ${entity}:`, err);
      return null;
    }
  }

  async insertData(entity, record) {
    if (!this.apiGatewayUrl) {
      return { data: record, error: null };
    }

    try {
      const res = await fetch(`${this.apiGatewayUrl}/data/${entity}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
      });
      const data = await res.json();
      return { data, error: null };
    } catch (err) {
      return { error: err };
    }
  }

  // Geocodificação resiliente com foco no Recife/Pernambuco
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
window.supabaseService = window.awsService; // Aliasing para compatibilidade retroativa total dos módulos existentes
