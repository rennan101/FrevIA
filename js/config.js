// ==============================================================================
// FREVAI CONFIGURATION — AWS CLOUD & BACKEND
// ==============================================================================
// Infraestrutura em Nuvem na AWS (Amazon Web Services)
// Região Oficial: sa-east-1 (São Paulo) | Projeto / Conta: 196156785860
// Hosting: AWS Amplify Hosting (https://main.d4g55spy61el0.amplifyapp.com)

window.FREVIA_AWS_CONFIG = {
  REGION: 'sa-east-1',
  ACCOUNT_ID: '196156785860',
  AMPLIFY_APP_ID: 'd4g55spy61el0',
  AMPLIFY_DOMAIN: 'd4g55spy61el0.amplifyapp.com',
  CUSTOM_DOMAIN: 'frevai.is-a.dev',
  
  // Storage de Mídia (S3) para Áudios, Partituras PDF, Imagens e Vídeos
  S3_BUCKET: 'frevia-media-196156785860',
  S3_BASE_URL: 'https://frevia-media-196156785860.s3.sa-east-1.amazonaws.com',
  
  // Autenticação (Amazon Cognito User Pools)
  COGNITO_USER_POOL_ID: 'sa-east-1_egnFYahtb',
  COGNITO_CLIENT_ID: '46t8rd0jlv6c3gmje9uj10s6c8',
  COGNITO_DOMAIN: 'frevia.auth.sa-east-1.amazoncognito.com',
  
  // Backend Serverless & API REST em Produção
  API_GATEWAY_URL: 'https://q59vzihzm8.execute-api.sa-east-1.amazonaws.com/api',
  AURORA_ENDPOINT: 'frevai-aurora-cluster.cluster-c30usu6u25gn.sa-east-1.rds.amazonaws.com',
  
  TABLES: {
    PROFILES: 'frevai_profiles',
    ARTISTS: 'frevai_artists',
    POSTS: 'frevai_posts',
    SONGS: 'frevai_songs',
    STEPS: 'frevai_steps',
    HISTORY: 'frevai_history',
    MAP_POINTS: 'frevai_map_points',
    ARTIST_REQUESTS: 'frevai_artist_requests',
    TAKEDOWN_REPORTS: 'frevai_takedown_reports',
    NOTIFICATIONS: 'frevai_notifications',
    COMMENTS: 'frevai_post_comments',
    LIKES: 'frevai_post_likes'
  }
};

window.FREVIA_CONFIG = {
  AWS: window.FREVIA_AWS_CONFIG,
  GA4_MEASUREMENT_ID: 'G-FREVAI2026',
  DPO_CONTACT_EMAIL: 'privacidade@frevai.com.br',

  // Adapter para serviços REST da AWS
  getApiUrl(table) {
    const base = this.AWS.API_GATEWAY_URL.replace(/\/+$/, '');
    return table ? `${base}/${table}` : base;
  },

  isConfigured() {
    return Boolean(this.AWS && this.AWS.API_GATEWAY_URL);
  }
};

