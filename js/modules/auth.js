// ==============================================================================
// FREVAI - GESTÃO DE SESSÃO & CONTROLE DE ACESSO (RBAC) & AUTENTICAÇÃO
// Roles: 'guest' (Visitante), 'user' (Usuário Comum), 'artist' (Artista), 'admin' (Admin)
// ==============================================================================

// Placeholder neutro minimalista para avatares de usuários sem foto cadastrada
const DEFAULT_AVATAR_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23F3F4F6'/%3E%3Cpath d='M50 48a16 16 0 1 0 0-32 16 16 0 0 0 0 32zm0 8c-14 0-32 7.5-32 18v6h64v-6c0-10.5-18-18-32-18z' fill='%239CA3AF'/%3E%3C/svg%3E";

function hasCustomAvatar(url) {
  if (!url || typeof url !== 'string') return false;
  const clean = url.trim();
  if (!clean) return false;
  if (clean.includes('photo-1534528741775-53994a69daeb')) return false;
  return true;
}

function getUserAvatarUrl(url) {
  return hasCustomAvatar(url) ? url : DEFAULT_AVATAR_PLACEHOLDER;
}

let currentUserSession = {
  role: 'guest', // Inicia como visitante sem login por padrão
  name: 'Visitante',
  handle: '@visitante',
  avatar: null,
  email: '',
  artist_id: null,
  favorites: ['a1'], // IDs dos artistas favoritados
  saved_scores: ['s1', 's3'] // IDs das partituras salvas
};

// Carregar sessão salva do LocalStorage se houver
const savedSession = localStorage.getItem('frevai_user_session');
if (savedSession) {
  try {
    currentUserSession = Object.assign(currentUserSession, JSON.parse(savedSession));
    if (!hasCustomAvatar(currentUserSession.avatar)) {
      currentUserSession.avatar = null;
    }
    if (!currentUserSession.saved_scores) {
      currentUserSession.saved_scores = ['s1', 's3'];
    }
  } catch (e) {}
}

function saveCurrentSession() {
  localStorage.setItem('frevai_user_session', JSON.stringify(currentUserSession));
  updateSessionUI();
}

// -----------------------------------------------------------------------------
// PERSISTÊNCIA LOCAL DE SOLICITAÇÕES DE ARTISTAS & NOTIFICAÇÕES
// -----------------------------------------------------------------------------
function loadArtistRequestsLocal() {
  try {
    const saved = localStorage.getItem('frevia_artist_requests');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) DB.artistRequests = parsed;
    }
  } catch (e) {
    DB.artistRequests = DB.artistRequests || [];
  }
}

function saveArtistRequestsLocal() {
  try {
    localStorage.setItem('frevia_artist_requests', JSON.stringify(DB.artistRequests || []));
  } catch (e) {}
}

function saveNotificationsLocal() {
  try {
    localStorage.setItem('frevia_notifications', JSON.stringify(DB.notifications || []));
  } catch (e) {}
}

function loadNotificationsLocal() {
  try {
    const saved = localStorage.getItem('frevia_notifications');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        DB.notifications = parsed;
      }
    }
  } catch (e) {}
}

loadArtistRequestsLocal();
loadNotificationsLocal();

// -----------------------------------------------------------------------------
// VALIDAÇÃO E UNICIDADE DO NOME DE USUÁRIO (@HANDLE)
// -----------------------------------------------------------------------------
function sanitizeHandle(val) {
  if (!val) return '';
  let s = val.trim();
  if (!s.startsWith('@')) s = '@' + s;
  const body = s.substring(1).toLowerCase().replace(/[^a-z0-9_]/g, '');
  return body ? '@' + body : '';
}

function formatSignupHandleInput(input) {
  const errEl = document.getElementById('signup-error-msg');
  if (errEl) errEl.classList.add('hidden');
  let val = input.value;
  if (!val) return;
  if (!val.startsWith('@')) {
    val = '@' + val;
  }
  const body = val.substring(1).toLowerCase().replace(/[^a-z0-9_]/g, '');
  input.value = '@' + body;
}

async function isHandleTaken(handle, excludeUserId = null) {
  const clean = sanitizeHandle(handle);
  if (!clean || clean.length < 4) {
    return { taken: true, reason: 'O nome de usuário (@) deve conter pelo menos 3 caracteres (letras, números ou sublinhados).' };
  }
  const lower = clean.toLowerCase();

  // 1. Checar no AWS se conectado
  if (window.awsService && window.awsService.isConnected()) {
    const isAvailable = await window.awsService.checkHandleAvailable(clean, excludeUserId);
    if (!isAvailable) {
      return { taken: true, reason: `O nome de usuário ${clean} já está em uso por outro folião. Por favor, escolha outro.` };
    }
  }

  // 2. Checar em artistas cadastrados
  if (DB && DB.artists) {
    const conflictArtist = DB.artists.some(a => 
      a.handle && a.handle.toLowerCase() === lower && (!excludeUserId || a.id !== excludeUserId)
    );
    if (conflictArtist) {
      return { taken: true, reason: `O nome de usuário ${clean} já pertence a um artista oficial. Por favor, escolha outro.` };
    }
  }

  // 3. Checar em usuários locais salvos
  try {
    const localUsers = JSON.parse(localStorage.getItem('frevia_local_users') || '[]');
    const conflictUser = localUsers.some(u => 
      u.handle && u.handle.toLowerCase() === lower && (!excludeUserId || u.id !== excludeUserId)
    );
    if (conflictUser) {
      return { taken: true, reason: `O nome de usuário ${clean} já está em uso por outro folião. Por favor, escolha outro.` };
    }
  } catch (e) {}

  return { taken: false };
}

function updateSessionUI() {
  const userNameEl = document.getElementById('header-user-name');
  const cmsBtn = document.getElementById('header-cms-btn');
  const addStepBtn = document.getElementById('btn-add-step');
  const submitSongBtn = document.getElementById('btn-submit-song');
  const profileNavBtn = document.getElementById('nav-item-profile');

  const isGuest = currentUserSession.role === 'guest';

  if (userNameEl) {
    if (isGuest) {
      userNameEl.innerText = 'Entrar';
    } else {
      userNameEl.innerText = (currentUserSession.name || 'Folião').split(' ')[0];
    }
  }

  // Ocultar ícone de perfil na barra de navegação para visitante, exibir quando logado
  if (profileNavBtn) {
    if (isGuest) {
      profileNavBtn.classList.add('nav-item-hidden');
    } else {
      profileNavBtn.classList.remove('nav-item-hidden');
    }
  }

  // Redirecionar visitante para o feed caso esteja com a tela de perfil ativa
  if (isGuest) {
    const artistPanelView = document.getElementById('view-artist-panel');
    if (artistPanelView && artistPanelView.classList.contains('active')) {
      if (typeof switchView === 'function') switchView('feed');
    }
  }

  // Visibilidade estrita com base no papel do usuário
  const isAdmin = currentUserSession.role === 'admin';
  const isArtist = currentUserSession.role === 'artist';

  if (cmsBtn) {
    cmsBtn.style.display = isAdmin ? 'inline-flex' : 'none';
  }
  if (addStepBtn) {
    addStepBtn.style.display = isAdmin ? 'inline-flex' : 'none';
  }
  const historyAddBtn = document.getElementById('history-admin-add-btn');
  if (historyAddBtn) {
    historyAddBtn.style.display = isAdmin ? 'inline-flex' : 'none';
  }
  if (submitSongBtn) {
    submitSongBtn.style.display = (isAdmin || isArtist) ? 'inline-flex' : 'none';
  }
}

function switchTestRole(role, silent = false) {
  if (role === 'admin') {
    currentUserSession = {
      role: 'admin',
      name: 'Administrador FrevAI',
      handle: '@admin_cultura',
      avatar: null,
      email: 'admin@cultura.pe.gov.br',
      artist_id: null,
      favorites: ['a1', 'a2', 'a3']
    };
  } else if (role === 'artist') {
    currentUserSession = {
      role: 'artist',
      name: 'Maestro Forró',
      handle: '@maestroforro',
      avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      email: 'forro@cultura.pe.gov.br',
      artist_id: 'a1',
      favorites: ['a2']
    };
  } else if (role === 'user') {
    currentUserSession = {
      role: 'user',
      name: 'Folião do Passo',
      handle: '@foliao_recife',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      email: 'foliao@gmail.com',
      artist_id: null,
      favorites: ['a1']
    };
  } else {
    currentUserSession = {
      role: 'guest',
      name: 'Visitante',
      handle: '@visitante',
      avatar: null,
      email: '',
      artist_id: null,
      favorites: []
    };
  }

  saveCurrentSession();
  if (typeof closeModal === 'function') closeModal();
  if (typeof renderArtists === 'function') renderArtists();
  if (typeof renderFeed === 'function') renderFeed();
  if (typeof updateProfileUI === 'function') updateProfileUI();
  if (typeof renderProfileGallery === 'function') renderProfileGallery();
  if (typeof renderSteps === 'function') renderSteps();
  if (typeof renderAdminCMS === 'function') renderAdminCMS();

  if (!silent) {
    if (role === 'guest') {
      showAlertModal('Conta desconectada com sucesso.');
    }
  }
}

function logoutSession() {
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.signOut();
  }
  switchTestRole('guest');
}

// Upload de foto do usuário com compressão canvas e AWS Storage
async function handleUserAvatarUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      const maxDim = 400;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const base64Avatar = canvas.toDataURL('image/jpeg', 0.85);

      const sessionPreview = document.getElementById('session-avatar-preview');
      if (sessionPreview) sessionPreview.src = base64Avatar;

      const editPreview = document.getElementById('edit-avatar-preview');
      if (editPreview) editPreview.src = base64Avatar;

      currentUserSession.avatar = base64Avatar;
      if (typeof currentUserProfile !== 'undefined') {
        currentUserProfile.avatar = base64Avatar;
      }
      saveCurrentSession();
      if (typeof updateProfileUI === 'function') updateProfileUI();

      if (window.awsService && window.awsService.isConnected()) {
        canvas.toBlob(async (blob) => {
          if (blob) {
            const uploadedUrl = await window.awsService.uploadAvatar(blob, currentUserSession.id);
            if (uploadedUrl) {
              currentUserSession.avatar = uploadedUrl;
              if (typeof currentUserProfile !== 'undefined') {
                currentUserProfile.avatar = uploadedUrl;
              }
              saveCurrentSession();
              if (typeof updateProfileUI === 'function') updateProfileUI();
              if (sessionPreview) sessionPreview.src = uploadedUrl;
              if (editPreview) editPreview.src = uploadedUrl;
            }
          }
        }, 'image/jpeg', 0.85);
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

window.currentUserSession = currentUserSession;
window.hasCustomAvatar = hasCustomAvatar;
window.getUserAvatarUrl = getUserAvatarUrl;
window.saveCurrentSession = saveCurrentSession;
window.updateSessionUI = updateSessionUI;
window.switchTestRole = switchTestRole;
window.logoutSession = logoutSession;
window.handleUserAvatarUpload = handleUserAvatarUpload;
