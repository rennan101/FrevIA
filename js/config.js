// ==============================================================================
// FREVAI CONFIGURATION & SUPABASE KEYS
// ==============================================================================
// Credenciais do Projeto FrevAI no Supabase

const DEFAULT_SUPABASE_URL = 'https://mzskenialclybcfpzlel.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_fnArOa9s5qVGMrDF3WF9Pg_a439cmfK';

// Função auxiliar para normalizar a URL do Supabase
function sanitizeSupabaseUrl(url) {
  if (!url) return '';
  return url.trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
}

window.FREVIA_CONFIG = {
  SUPABASE_URL: sanitizeSupabaseUrl(localStorage.getItem('frevai_supabase_url') || localStorage.getItem('frevia_supabase_url') || DEFAULT_SUPABASE_URL),
  SUPABASE_ANON_KEY: (localStorage.getItem('frevai_supabase_anon_key') || localStorage.getItem('frevia_supabase_anon_key') || DEFAULT_SUPABASE_ANON_KEY).trim(),
  
  // Salvar credenciais no LocalStorage
  saveCredentials(url, key) {
    const cleanUrl = sanitizeSupabaseUrl(url);
    const cleanKey = key ? key.trim() : '';
    if (cleanUrl) localStorage.setItem('frevai_supabase_url', cleanUrl);
    if (cleanKey) localStorage.setItem('frevai_supabase_anon_key', cleanKey);
    this.SUPABASE_URL = cleanUrl;
    this.SUPABASE_ANON_KEY = cleanKey;
  },
  
  // Limpar credenciais
  clearCredentials() {
    localStorage.removeItem('frevai_supabase_url');
    localStorage.removeItem('frevai_supabase_anon_key');
    localStorage.removeItem('frevia_supabase_url');
    localStorage.removeItem('frevia_supabase_anon_key');
    this.SUPABASE_URL = DEFAULT_SUPABASE_URL;
    this.SUPABASE_ANON_KEY = DEFAULT_SUPABASE_ANON_KEY;
  },

  // Verificar se o Supabase está configurado
  isConfigured() {
    return Boolean(this.SUPABASE_URL && this.SUPABASE_ANON_KEY);
  }
};
