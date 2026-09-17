// ==============================================================================
// FREVAI CONFIGURATION — AWS CLOUD & BACKEND
// ==============================================================================
// Infraestrutura em Nuvem na AWS (Amazon Web Services)
// Região Oficial: sa-east-1 (São Paulo) | Projeto / Conta: 196156785860
// Hosting: AWS Amplify Hosting (d4g55spy61el0.amplifyapp.com)

window.FREVIA_AWS_CONFIG = {
  REGION: 'sa-east-1',
  ACCOUNT_ID: '196156785860',
  AMPLIFY_APP_ID: 'd4g55spy61el0',
  AMPLIFY_DOMAIN: 'd4g55spy61el0.amplifyapp.com',
  
  // Storage de Mídia (S3) para Áudios, Partituras PDF, Imagens e Vídeos
  S3_BUCKET: 'frevia-media-196156785860',
  S3_BASE_URL: 'https://frevia-media-196156785860.s3.sa-east-1.amazonaws.com',
  
  // Autenticação (Amazon Cognito User Pools)
  COGNITO_USER_POOL_ID: 'sa-east-1_egnFYahtb',
  COGNITO_CLIENT_ID: '46t8rd0jlv6c3gmje9uj10s6c8',
  COGNITO_DOMAIN: 'frevia-auth.auth.sa-east-1.amazoncognito.com',
  
  // Banco de Dados Relacional: Aurora PostgreSQL Serverless v2
  AURORA_ENDPOINT: localStorage.getItem('frevai_aurora_endpoint') || '',
  API_GATEWAY_URL: localStorage.getItem('frevai_api_gateway_url') || '',
  
  TABLES: {
    PROFILES: 'frevai_profiles',
    ARTISTS: 'frevai_artists',
    POSTS: 'frevai_posts',
    SONGS: 'frevai_songs',
    STEPS: 'frevai_steps',
    HISTORY: 'frevai_history',
    MAP_POINTS: 'frevai_map_points',
    ARTIST_REQUESTS: 'frevai_artist_requests',
    NOTIFICATIONS: 'frevai_notifications',
    COMMENTS: 'frevai_post_comments',
    LIKES: 'frevai_post_likes'
  }
};

window.FREVIA_CONFIG = {
  AWS: window.FREVIA_AWS_CONFIG,

  saveAwsEndpoints(apiGatewayUrl, auroraEndpoint) {
    if (apiGatewayUrl) {
      localStorage.setItem('frevai_api_gateway_url', apiGatewayUrl.trim());
      this.AWS.API_GATEWAY_URL = apiGatewayUrl.trim();
    }
    if (auroraEndpoint) {
      localStorage.setItem('frevai_aurora_endpoint', auroraEndpoint.trim());
      this.AWS.AURORA_ENDPOINT = auroraEndpoint.trim();
    }
  },

  isConfigured() {
    return Boolean(this.AWS && this.AWS.S3_BUCKET && this.AWS.COGNITO_USER_POOL_ID);
  }
};
