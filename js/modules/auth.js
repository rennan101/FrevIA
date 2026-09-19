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
// -----------------------------------------------------------------------------
// GESTÃO DO PERFIL DO USUÁRIO & ABAS
// -----------------------------------------------------------------------------
let currentProfileTab = 'favorites';

function updateProfileUI() {
  updateSessionUI();

  const nameEl = document.getElementById('profile-display-name');
  const handleEl = document.getElementById('profile-display-handle');
  const bioEl = document.getElementById('profile-display-bio');
  const avatarEl = document.getElementById('profile-display-avatar');
  const socialsEl = document.getElementById('profile-display-socials');
  const bannerEl = document.getElementById('profile-artist-status-banner');

  if (nameEl) nameEl.innerText = currentUserSession.name || 'Folião do Passo';
  if (handleEl) handleEl.innerText = currentUserSession.handle || '@foliao';
  if (bioEl) {
    bioEl.innerText = currentUserSession.bio || (
      currentUserSession.role === 'artist' 
        ? 'Artista e fazedor de cultura da tradição pernambucana do Frevo.' 
        : 'Amante e entusiasta do ritmo e da dança do Frevo de Pernambuco.'
    );
  }
  if (avatarEl) {
    avatarEl.src = getUserAvatarUrl(currentUserSession.avatar);
  }

  if (socialsEl) {
    const socials = currentUserSession.socials || {};
    let socialsHtml = '';
    if (socials.instagram) {
      socialsHtml += `
        <a href="https://instagram.com/${socials.instagram.replace('@', '')}" target="_blank" rel="noopener" class="px-2.5 py-1 bg-surface-soft hover:bg-gray-200 text-ink rounded-lg text-[11px] font-semibold flex items-center gap-1 transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          ${socials.instagram}
        </a>
      `;
    }
    if (socials.spotify) {
      socialsHtml += `
        <a href="${socials.spotify}" target="_blank" rel="noopener" class="px-2.5 py-1 bg-surface-soft hover:bg-gray-200 text-ink rounded-lg text-[11px] font-semibold flex items-center gap-1 transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12a6 6 0 0 1 8 0"></path><path d="M9 15a4 4 0 0 1 6 0"></path></svg>
          Spotify
        </a>
      `;
    }
    socialsEl.innerHTML = socialsHtml;
  }

  // Banner de status de artista
  if (bannerEl) {
    if (currentUserSession.role === 'artist') {
      bannerEl.innerHTML = `
        <div class="p-3 bg-frevo-orange/10 border border-frevo-orange/30 rounded-2xl flex items-center justify-between gap-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-frevo-orange text-white flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg>
            </div>
            <div>
              <h4 class="text-xs font-bold text-ink leading-tight">Artista Oficial Verificado</h4>
              <p class="text-[11px] text-ink-soft">Você possui autorização para cadastrar partituras e álbuns.</p>
            </div>
          </div>
        </div>
      `;
    } else if (currentUserSession.role === 'admin') {
      bannerEl.innerHTML = `
        <div class="p-3 bg-frevo-cyan/10 border border-frevo-cyan/30 rounded-2xl flex items-center justify-between gap-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-frevo-cyan text-white flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>
            </div>
            <div>
              <h4 class="text-xs font-bold text-ink leading-tight">Comitê Gestor / Admin</h4>
              <p class="text-[11px] text-ink-soft">Acesso total à moderação de artistas e acervo cultural.</p>
            </div>
          </div>
          <button onclick="switchView('admin-panel')" class="btn btn-primary text-xs px-3 py-1.5 rounded-xl font-bold whitespace-nowrap">
            Painel CMS
          </button>
        </div>
      `;
    } else {
      // Checar se há solicitação pendente
      const hasPendingReq = (DB.artistRequests || []).some(r => r.userId === currentUserSession.id && r.status === 'pending');
      if (hasPendingReq) {
        bannerEl.innerHTML = `
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div>
              <h4 class="text-xs font-bold text-amber-900 leading-tight">Solicitação em Análise</h4>
              <p class="text-[10px] text-amber-700">Seu pedido de verificação artística está sendo avaliado pelo comitê.</p>
            </div>
          </div>
        `;
      } else {
        bannerEl.innerHTML = `
          <button onclick="openArtistRequestModal()" class="w-full py-2.5 px-3 rounded-2xl bg-frevo-orange/10 hover:bg-frevo-orange/20 border border-frevo-orange/30 text-frevo-orange text-xs font-bold flex items-center justify-center gap-2 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Solicitar Selo de Artista Oficial
          </button>
        `;
      }
    }
  }

  renderProfileGallery();
}

function switchProfileTab(tabName, btnElement) {
  currentProfileTab = tabName;

  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const target = document.querySelector(`.profile-tab-btn.tab-${tabName}`);
    if (target) target.classList.add('active');
  }

  renderProfileGallery();
}

function renderProfileGallery() {
  const container = document.getElementById('profile-gallery-container');
  if (!container) return;

  if (currentProfileTab === 'favorites') {
    const favIds = currentUserSession.favorites || [];
    const artists = (DB.artists || []).filter(a => favIds.includes(a.id));

    if (artists.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center text-muted">
          <div class="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <p class="text-xs font-bold text-ink">Nenhum artista favoritado ainda</p>
          <p class="text-[11px] mt-1 text-ink-soft">Explore a aba Artistas para acompanhar seus mestres favoritos.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="grid grid-cols-2 gap-3">
        ${artists.map(a => `
          <div onclick="openArtistProfileModal('${a.id}')" class="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center">
            <img src="${a.avatar}" alt="${a.name}" class="w-16 h-16 rounded-full mx-auto object-cover border border-gray-100 group-hover:scale-105 transition-transform" />
            <h4 class="font-display font-bold text-xs text-ink mt-2 truncate">${a.name}</h4>
            <p class="text-[10px] text-frevo-orange font-semibold truncate">${a.genre || 'Frevo'}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (currentProfileTab === 'saved') {
    const savedPosts = (DB.posts || []).filter(p => (currentUserSession.saved_posts || []).includes(p.id));

    if (savedPosts.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center text-muted">
          <div class="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <p class="text-xs font-bold text-ink">Nenhuma publicação salva</p>
          <p class="text-[11px] mt-1 text-ink-soft">Salve postagens do Feed para consultar depois.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="space-y-3">
        ${savedPosts.map(p => `
          <div class="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <img src="${p.media_url}" alt="Post" class="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-bold text-ink truncate">${p.author_name}</h4>
              <p class="text-[11px] text-ink-soft truncate">${p.caption}</p>
              <span class="text-[10px] text-muted">${p.created_at || 'Salvo'}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (currentProfileTab === 'scores') {
    const isArtist = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';
    const songs = (DB.songs || []).filter(s => {
      if (isArtist) {
        return s.artist_id === currentUserSession.artist_id || s.artist === currentUserSession.name;
      }
      return (currentUserSession.saved_scores || []).includes(s.id);
    });

    container.innerHTML = `
      <div class="space-y-2.5">
        ${isArtist ? `
          <button onclick="openSubmitSongModal()" class="w-full py-2.5 px-3 rounded-2xl bg-frevo-orange text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-orange-600 transition-colors mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Cadastrar Nova Música / Partitura
          </button>
        ` : ''}
        ${songs.length === 0 ? `
          <div class="py-10 text-center text-muted">
            <div class="w-12 h-12 mx-auto mb-2 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5L21 3V16"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            </div>
            <p class="text-xs font-bold text-ink">${isArtist ? 'Você ainda não cadastrou nenhuma música' : 'Nenhuma partitura salva'}</p>
          </div>
        ` : songs.map(s => `
          <div class="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <button onclick="playSong('${s.id}')" class="w-9 h-9 rounded-xl bg-frevo-orange/10 hover:bg-frevo-orange text-frevo-orange hover:text-white flex items-center justify-center flex-shrink-0 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <div class="min-w-0">
                <h4 class="text-xs font-bold text-ink truncate">${s.title}</h4>
                <p class="text-[11px] text-ink-soft truncate">${s.artist} · ${s.genre}</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button onclick="openScoreModal('${s.id}')" class="p-1.5 text-muted hover:text-ink rounded-lg bg-gray-50 hover:bg-gray-100" title="Ver Partitura">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (currentProfileTab === 'albums') {
    const isArtist = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';
    const albums = (DB.albums || []).filter(a => {
      if (isArtist) {
        return a.artist_id === currentUserSession.artist_id || a.artist === currentUserSession.name;
      }
      return true;
    });

    container.innerHTML = `
      <div class="space-y-3">
        ${isArtist ? `
          <button onclick="openCreateAlbumModal()" class="w-full py-2.5 px-3 rounded-2xl bg-frevo-orange text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-orange-600 transition-colors mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Criar Novo Álbum
          </button>
        ` : ''}
        ${albums.length === 0 ? `
          <div class="py-10 text-center text-muted">
            <p class="text-xs font-bold text-ink">Nenhum álbum disponível</p>
          </div>
        ` : `
          <div class="grid grid-cols-2 gap-3">
            ${albums.map(a => `
              <div onclick="openAlbumDetails('${a.id}')" class="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <img src="${a.cover}" alt="${a.title}" class="w-full aspect-square rounded-xl object-cover mb-2" />
                <h4 class="font-display font-bold text-xs text-ink truncate">${a.title}</h4>
                <p class="text-[10px] text-muted truncate">${a.year || ''} · ${(a.tracks || []).length} faixas</p>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  } else if (currentProfileTab === 'shows') {
    const isArtist = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';
    const shows = (DB.shows || []);

    container.innerHTML = `
      <div class="space-y-3">
        ${isArtist ? `
          <button onclick="openCreateShowModal()" class="w-full py-2.5 px-3 rounded-2xl bg-frevo-orange text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-orange-600 transition-colors mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Cadastrar Novo Show
          </button>
        ` : ''}
        ${shows.length === 0 ? `
          <div class="py-10 text-center text-muted">
            <div class="w-12 h-12 mx-auto mb-2 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <p class="text-xs font-bold text-ink">Nenhum show na agenda no momento</p>
          </div>
        ` : shows.map(sh => `
          <div class="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-1.5 text-frevo-orange text-[10px] font-bold uppercase">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${sh.date || 'Em breve'} · ${sh.time || '20:00'}
              </div>
              <h4 class="font-display font-bold text-xs text-ink mt-0.5">${sh.title || sh.name}</h4>
              <p class="text-[11px] text-ink-soft">${sh.location || sh.venue}</p>
            </div>
            <a href="${sh.link || '#'}" target="_blank" class="btn btn-outline text-xs px-3 py-1.5 rounded-xl font-bold">
              Ver Local
            </a>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// -----------------------------------------------------------------------------
// MODAIS DE EDIÇÃO DE PERFIL, CONFIGURAÇÕES E DROPDOWN
// -----------------------------------------------------------------------------
function openEditProfileModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Editar Perfil</h3>
        <p class="text-[11px] text-muted">Atualize seus dados públicos na comunidade do Frevo</p>
      </div>

      <form onsubmit="saveProfileChanges(event)" class="space-y-3.5">
        <!-- Foto de Perfil -->
        <div class="flex items-center gap-3.5">
          <img id="edit-avatar-preview" src="${getUserAvatarUrl(currentUserSession.avatar)}" alt="Avatar" class="w-16 h-16 rounded-full object-cover border border-gray-200" />
          <div>
            <label class="btn btn-outline text-xs px-3 py-1.5 rounded-xl font-bold cursor-pointer inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Alterar Foto
              <input type="file" accept="image/*" class="hidden" onchange="handleUserAvatarUpload(event)" />
            </label>
            <p class="text-[10px] text-muted mt-1">PNG ou JPG até 5MB</p>
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome Completo *</label>
          <input type="text" id="edit-profile-name" required value="${currentUserSession.name || ''}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome de Usuário (@) *</label>
          <input type="text" id="edit-profile-handle" required value="${currentUserSession.handle || ''}" oninput="formatSignupHandleInput(this)" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange font-medium" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Biografia</label>
          <textarea id="edit-profile-bio" rows="3" placeholder="Conte um pouco sobre sua relação com o Frevo..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange resize-none">${currentUserSession.bio || ''}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Instagram (@)</label>
          <input type="text" id="edit-profile-instagram" value="${(currentUserSession.socials && currentUserSession.socials.instagram) || ''}" placeholder="@seuinstagram" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div class="pt-2 flex items-center justify-end gap-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline px-4 py-2 text-xs rounded-xl font-bold">Cancelar</button>
          <button type="submit" class="btn btn-primary px-5 py-2 text-xs rounded-xl font-bold shadow-md">Salvar Alterações</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function saveProfileChanges(event) {
  event.preventDefault();
  const name = document.getElementById('edit-profile-name').value.trim();
  const handle = document.getElementById('edit-profile-handle').value.trim();
  const bio = document.getElementById('edit-profile-bio').value.trim();
  const instagram = document.getElementById('edit-profile-instagram').value.trim();

  if (!name || !handle) {
    showAlertModal('Por favor, preencha seu nome e nome de usuário.');
    return;
  }

  const handleCheck = await isHandleTaken(handle, currentUserSession.id);
  if (handleCheck.taken && handle.toLowerCase() !== (currentUserSession.handle || '').toLowerCase()) {
    showAlertModal(handleCheck.reason || 'Este nome de usuário já está em uso.');
    return;
  }

  currentUserSession.name = name;
  currentUserSession.handle = handle.startsWith('@') ? handle : '@' + handle;
  currentUserSession.bio = bio;
  currentUserSession.socials = currentUserSession.socials || {};
  currentUserSession.socials.instagram = instagram;

  saveCurrentSession();
  closeModal();
  updateProfileUI();
  showAlertModal('Perfil atualizado com sucesso!', { type: 'success' });
}

function openSettingsModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Configurações</h3>
        <p class="text-[11px] text-muted">Ajustes da conta e preferências do FrevAI</p>
      </div>

      <div class="space-y-3">
        <!-- Modo de Teste de Papel -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100">
          <label class="block text-[11px] font-bold text-ink uppercase mb-2">Alternar Perfil de Teste</label>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="switchTestRole('guest'); closeModal();" class="p-2 text-xs rounded-xl border ${currentUserSession.role === 'guest' ? 'border-frevo-orange bg-white font-bold text-frevo-orange' : 'border-gray-200 bg-white text-ink hover:bg-gray-50'}">
              Visitante
            </button>
            <button onclick="switchTestRole('user'); closeModal();" class="p-2 text-xs rounded-xl border ${currentUserSession.role === 'user' ? 'border-frevo-orange bg-white font-bold text-frevo-orange' : 'border-gray-200 bg-white text-ink hover:bg-gray-50'}">
              Folião / Fã
            </button>
            <button onclick="switchTestRole('artist'); closeModal();" class="p-2 text-xs rounded-xl border ${currentUserSession.role === 'artist' ? 'border-frevo-orange bg-white font-bold text-frevo-orange' : 'border-gray-200 bg-white text-ink hover:bg-gray-50'}">
              Artista Oficial
            </button>
            <button onclick="switchTestRole('admin'); closeModal();" class="p-2 text-xs rounded-xl border ${currentUserSession.role === 'admin' ? 'border-frevo-orange bg-white font-bold text-frevo-orange' : 'border-gray-200 bg-white text-ink hover:bg-gray-50'}">
              Administrador
            </button>
          </div>
        </div>

        <!-- Notificações Push -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between">
          <div>
            <h4 class="text-xs font-bold text-ink">Notificações Culturais</h4>
            <p class="text-[10px] text-muted">Avisos de novos lançamentos e partituras</p>
          </div>
          <button onclick="togglePushNotifications()" class="btn btn-outline text-xs px-3 py-1.5 rounded-xl font-bold">
            Ativar
          </button>
        </div>

        <!-- Sair da Conta -->
        <div class="pt-2">
          <button onclick="logoutSession(); closeModal();" class="btn btn-destructive w-full text-xs rounded-xl py-2.5 font-bold flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Desconectar Conta
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function openAccountDropdownModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Gerenciar Conta</h3>
        <p class="text-[11px] text-muted">${currentUserSession.name} (${currentUserSession.handle})</p>
      </div>

      <div class="space-y-2">
        <button onclick="closeModal(); openEditProfileModal();" class="w-full p-3 rounded-2xl bg-surface-soft hover:bg-gray-100 flex items-center gap-3 transition-colors text-left">
          <div class="w-8 h-8 rounded-xl bg-frevo-orange/10 text-frevo-orange flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </div>
          <div>
            <h4 class="text-xs font-bold text-ink">Editar Informações do Perfil</h4>
            <p class="text-[10px] text-muted">Alterar foto, nome, @handle e biografia</p>
          </div>
        </button>

        <button onclick="closeModal(); openSettingsModal();" class="w-full p-3 rounded-2xl bg-surface-soft hover:bg-gray-100 flex items-center gap-3 transition-colors text-left">
          <div class="w-8 h-8 rounded-xl bg-frevo-cyan/10 text-frevo-cyan flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
          <div>
            <h4 class="text-xs font-bold text-ink">Configurações & Papel de Teste</h4>
            <p class="text-[10px] text-muted">Mudar papel, preferências e notificações</p>
          </div>
        </button>

        <button onclick="logoutSession(); closeModal();" class="w-full p-3 rounded-2xl bg-red-50 hover:bg-red-100 flex items-center gap-3 transition-colors text-left text-red-600">
          <div class="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          </div>
          <div>
            <h4 class="text-xs font-bold leading-tight">Desconectar da Plataforma</h4>
            <p class="text-[10px] text-red-500">Encerrar sessão atual no navegador</p>
          </div>
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function initAuth() {
  loadArtistRequestsLocal();
  loadNotificationsLocal();
  updateSessionUI();
}

function renderAuthUI() {
  updateSessionUI();
  updateProfileUI();
}

// Exportações Globais
window.currentUserSession = currentUserSession;
window.currentUserProfile = currentUserSession;
window.hasCustomAvatar = hasCustomAvatar;
window.getUserAvatarUrl = getUserAvatarUrl;
window.saveCurrentSession = saveCurrentSession;
window.updateSessionUI = updateSessionUI;
window.switchTestRole = switchTestRole;
window.logoutSession = logoutSession;
window.handleUserAvatarUpload = handleUserAvatarUpload;
window.openEditProfileModal = openEditProfileModal;
window.saveProfileChanges = saveProfileChanges;
window.openSettingsModal = openSettingsModal;
window.openAccountDropdownModal = openAccountDropdownModal;
window.switchProfileTab = switchProfileTab;
window.updateProfileUI = updateProfileUI;
window.renderProfileGallery = renderProfileGallery;
window.initAuth = initAuth;
window.renderAuthUI = renderAuthUI;


