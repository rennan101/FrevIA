// ==========================================
// FrevAI - Session & Auth Modals
// Gerenciamento de login, cadastro, esqueci minha senha e solicitação de artista
// ==========================================

let currentAuthTab = 'login';
let signupRoleSelected = 'fan';

function switchAuthTab(tab) {
  currentAuthTab = tab;
  openSessionModal();
}

function setSignupRole(role) {
  signupRoleSelected = role;
  const fanBtn = document.getElementById('signup-role-fan-btn');
  const artistBtn = document.getElementById('signup-role-artist-btn');
  const artistFields = document.getElementById('signup-artist-fields');

  if (role === 'artist') {
    if (fanBtn) {
      fanBtn.className = 'flex-1 p-2.5 rounded-xl border border-gray-200 bg-surface-soft text-left transition-all opacity-60';
    }
    if (artistBtn) {
      artistBtn.className = 'flex-1 p-2.5 rounded-xl border-2 border-frevo-orange bg-frevo-orange/10 text-left transition-all';
    }
    if (artistFields) artistFields.classList.remove('hidden');
  } else {
    if (fanBtn) {
      fanBtn.className = 'flex-1 p-2.5 rounded-xl border-2 border-frevo-cyan bg-frevo-cyan/10 text-left transition-all';
    }
    if (artistBtn) {
      artistBtn.className = 'flex-1 p-2.5 rounded-xl border border-gray-200 bg-surface-soft text-left transition-all opacity-60';
    }
    if (artistFields) artistFields.classList.add('hidden');
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  if (btn) {
    btn.innerHTML = isPass
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="7" r="3"></circle></svg>`;
  }
}

function handleGenreSelectChange(selectId, containerId) {
  const select = document.getElementById(selectId);
  const container = document.getElementById(containerId);
  if (!select || !container) return;
  if (select.value === 'Outro' || select.value === 'Outro...') {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
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

function openSessionModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const isGuest = currentUserSession.role === 'guest';
  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-start gap-3.5 pb-3 border-b border-gray-100 pr-10">
        <div class="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">${isGuest ? 'Acessar o FrevAI' : 'Minha Conta FrevAI'}</h3>
          <p class="text-xs text-muted">${isGuest ? 'Entre ou cadastre-se para vivenciar o universo do Frevo' : `Logado como: ${currentUserSession.name}`}</p>
        </div>
      </div>

      ${isGuest ? `
        <!-- Abas de Navegação: Entrar vs Criar Conta -->
        <div class="flex items-center p-1 bg-gray-100 rounded-xl">
          <button type="button" onclick="switchAuthTab('login')" class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${currentAuthTab === 'login' ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'}">
            Entrar
          </button>
          <button type="button" onclick="switchAuthTab('signup')" class="flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${currentAuthTab === 'signup' ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'}">
            Criar Conta
          </button>
        </div>

        ${currentAuthTab === 'login' ? `
          <!-- Formulário de Login (E-mail e Senha) -->
          <form onsubmit="handleEmailLogin(event)" class="space-y-3.5">
            <div id="login-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 flex items-start gap-2"></div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail</label>
              <input type="email" id="auth-email" required placeholder="seuemail@exemplo.com" oninput="document.getElementById('login-error-msg')?.classList.add('hidden')" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
            </div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-[11px] font-bold text-ink uppercase">Senha</label>
                <button type="button" onclick="openForgotPasswordModal()" class="text-[11px] font-semibold text-frevo-orange hover:underline focus:outline-none">
                  Esqueci minha senha
                </button>
              </div>
              <div class="relative">
                <input type="password" id="auth-password" required placeholder="••••••••" oninput="document.getElementById('login-error-msg')?.classList.add('hidden')" class="w-full pl-4 pr-11 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
                <button type="button" onclick="togglePasswordVisibility('auth-password', this)" class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-ink transition-colors" aria-label="Ver senha" title="Ver senha">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                    <circle cx="12" cy="7" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-full text-xs sm:text-sm rounded-xl py-2.5 font-bold shadow-md">
              Entrar
            </button>
          </form>
        ` : `
          <!-- Formulário de Cadastro (Fã vs Artista) -->
          <form onsubmit="handleEmailSignUp(event)" class="space-y-3.5">
            <div id="signup-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 flex items-start gap-2"></div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome Completo *</label>
              <input type="text" id="signup-name" required placeholder="Seu nome ou como quer ser chamado" oninput="document.getElementById('signup-error-msg')?.classList.add('hidden')" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome de Usuário (@) *</label>
              <input type="text" id="signup-handle" required placeholder="@seunome" oninput="formatSignupHandleInput(this)" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition font-medium" />
              <span class="block text-[10px] text-muted mt-0.5">Identificador exclusivo na comunidade (ex: @mariasilva).</span>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail *</label>
              <input type="email" id="signup-email" required placeholder="seuemail@exemplo.com" oninput="document.getElementById('signup-error-msg')?.classList.add('hidden')" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">Criar Senha *</label>
              <div class="relative">
                <input type="password" id="signup-password" required minlength="6" placeholder="Mínimo 6 caracteres" oninput="document.getElementById('signup-error-msg')?.classList.add('hidden')" class="w-full pl-4 pr-11 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
                <button type="button" onclick="togglePasswordVisibility('signup-password', this)" class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-ink transition-colors" aria-label="Ver senha" title="Ver senha">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                    <circle cx="12" cy="7" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Seletor: Fã vs Artista -->
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1.5">Como deseja participar?</label>
              <div class="flex gap-2">
                <button type="button" id="signup-role-fan-btn" onclick="setSignupRole('fan')" class="flex-1 p-2.5 rounded-xl border-2 border-frevo-cyan bg-frevo-cyan/10 text-left transition-all">
                  <span class="block text-xs font-bold text-ink">Folião / Fã</span>
                  <span class="block text-[10px] text-muted">Curtir, salvar e ouvir</span>
                </button>
                <button type="button" id="signup-role-artist-btn" onclick="setSignupRole('artist')" class="flex-1 p-2.5 rounded-xl border border-gray-200 bg-surface-soft text-left transition-all opacity-60">
                  <span class="block text-xs font-bold text-ink">Artista / Músico</span>
                  <span class="block text-[10px] text-muted">Publicar partituras e acervo</span>
                </button>
              </div>
            </div>

            <!-- Campos Condicionais para Artista -->
            <div id="signup-artist-fields" class="space-y-2.5 p-3 rounded-xl bg-frevo-orange/5 border border-frevo-orange/20 hidden">
              <div class="text-[11px] text-amber-800 leading-snug">
                <strong>Aprovação de Curadoria:</strong> Sua conta entrará inicialmente como fã comum. O comitê gestor aprovará seu projeto para liberação das ferramentas de publicação.
              </div>
              <div>
                <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Nome Artístico / Grupo *</label>
                <input type="text" id="signup-artist-name" placeholder="Ex: Orquestra Som da Terra" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
              </div>
              <div>
                <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Gênero Tradicional</label>
                <select id="signup-artist-genre" onchange="handleGenreSelectChange('signup-artist-genre', 'signup-custom-genre-container')" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
                  <option value="Frevo de Rua">Frevo de Rua</option>
                  <option value="Frevo Canção">Frevo Canção</option>
                  <option value="Frevo de Bloco">Frevo de Bloco</option>
                  <option value="Frevo Livre Instrumental">Frevo Livre Instrumental</option>
                  <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
                  <option value="Outro">Outro</option>
                </select>
                <div id="signup-custom-genre-container" class="mt-1.5 hidden">
                  <input type="text" id="signup-custom-genre" placeholder="Especifique o gênero tradicional..." class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
                </div>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">WhatsApp / Contato</label>
                <input type="text" id="signup-artist-whatsapp" placeholder="(81) 99999-9999" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
              </div>
              <div class="pt-1">
                <label class="flex items-start gap-2 cursor-pointer text-[11px] text-ink-soft select-none">
                  <input type="checkbox" id="signup-terms-consent-artist" required checked class="mt-0.5 w-3.5 h-3.5 rounded text-frevo-orange focus:ring-frevo-orange border-gray-300" />
                  <span>Declaro ser titular legítimo ou ter autorização para os materiais artísticos, concordando com o <button type="button" onclick="openCopyrightModal()" class="text-frevo-orange font-bold hover:underline inline">Licenciamento Autoral</button>.</span>
                </label>
              </div>
            </div>

            <!-- Consentimento de Termos de Uso & LGPD -->
            <div class="pt-1">
              <label class="flex items-start gap-2 cursor-pointer text-[11px] text-ink-soft select-none">
                <input type="checkbox" id="signup-terms-consent" required checked class="mt-0.5 w-3.5 h-3.5 rounded text-frevo-orange focus:ring-frevo-orange border-gray-300" />
                <span>Li e concordo com os <button type="button" onclick="openTermsModal()" class="text-frevo-orange font-bold hover:underline inline">Termos de Uso</button> e a <button type="button" onclick="openPrivacyModal()" class="text-frevo-orange font-bold hover:underline inline">Política de Privacidade (LGPD)</button>.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary w-full text-xs rounded-xl py-2.5 font-bold shadow-md">
              Cadastrar Conta
            </button>
          </form>
        `}

        <div class="flex items-center my-3 text-center">
          <div class="flex-1 border-t border-gray-200"></div>
          <span class="px-2 text-[10px] text-muted uppercase font-bold tracking-wider">Ou continue com</span>
          <div class="flex-1 border-t border-gray-200"></div>
        </div>

        <!-- Botão Google OAuth Oficial -->
        <button onclick="loginWithGoogle()" class="btn btn-outline w-full py-2.5 rounded-2xl flex items-center justify-center gap-2.5 text-xs font-bold shadow-sm hover:bg-gray-50 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          Entrar com a Google
        </button>
      ` : `
        <!-- Usuário Logado -->
        <div class="p-4 bg-surface-soft rounded-2xl flex items-center gap-3.5 border border-gray-100">
          <div class="relative flex-shrink-0">
            <img id="session-avatar-preview" src="${getUserAvatarUrl(currentUserSession.avatar)}" alt="${currentUserSession.name}" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
            <label for="session-avatar-file-input" class="absolute -bottom-1 -right-1 w-6 h-6 bg-ink text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-frevo-orange transition-colors" title="Alterar foto">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </label>
            <input type="file" id="session-avatar-file-input" accept="image/*" class="hidden" onchange="handleUserAvatarUpload(event)" />
          </div>
          <div class="min-w-0 flex-1">
            <h4 class="font-display font-bold text-sm text-ink truncate">${currentUserSession.name}</h4>
            <span class="text-xs text-muted block truncate">${currentUserSession.handle}</span>
            <span class="text-[11px] text-ink-soft block truncate">${currentUserSession.email || 'Conta Local'}</span>
            <span class="badge ${currentUserSession.role === 'admin' ? 'bg-frevo-red/15 text-frevo-red' : currentUserSession.role === 'artist' ? 'bg-frevo-orange/15 text-frevo-orange' : 'bg-gray-200 text-ink'} text-[10px] font-bold mt-1">
              ${currentUserSession.role === 'admin' ? 'Administrador' : currentUserSession.role === 'artist' ? 'Artista Oficial' : 'Folião'}
            </span>
          </div>
        </div>

        <!-- Banner de Status de Artista se Houver Solicitação Pendente -->
        ${currentUserSession.artist_request_status === 'pending' ? `
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-2.5 text-xs text-amber-800">
            <div class="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <strong class="block">Solicitação Artística em Análise</strong>
              <span class="text-[11px] text-amber-700">Aguardando aprovação do administrador para liberação do perfil de artista.</span>
            </div>
          </div>
        ` : ''}

        ${currentUserSession.role === 'user' && currentUserSession.artist_request_status !== 'pending' ? `
          <button onclick="closeModal(); openArtistRequestModal();" class="w-full py-2.5 px-3 rounded-2xl bg-frevo-orange/10 hover:bg-frevo-orange/20 border border-frevo-orange/30 text-frevo-orange text-xs font-bold flex items-center justify-center gap-2 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3C6.5 3 2 7.5 2 13C2 13 4.5 11.5 7 13C9.5 14.5 12 13 12 13C12 13 14.5 14.5 17 13C19.5 11.5 22 13 22 13C22 7.5 17.5 3 12 3Z" fill="currentColor" fill-opacity="0.2"/><path d="M12 3V19C12 20.1 11.1 21 10 21C8.9 21 8 20.1 8 19"/></svg>
            <span>Quero solicitar perfil de Artista</span>
          </button>
        ` : ''}

        <button onclick="logoutSession()" class="btn btn-outline text-xs w-full rounded-xl py-2 font-bold text-frevo-red hover:bg-red-50">
          Encerrar Sessão (Sair)
        </button>
      `}

      <!-- Atalhos de Simulação e Teste de Papéis -->
      <div class="pt-3 border-t border-gray-100 space-y-1.5">
        <span class="text-[10px] font-bold text-muted uppercase tracking-wider block">Simular Papel para Testes:</span>
        <div class="grid grid-cols-2 gap-1.5">
          <button onclick="switchTestRole('guest')" class="p-2 rounded-xl text-[11px] font-bold bg-gray-100 hover:bg-gray-200 text-ink text-left">
            Visitante (Sem Login)
          </button>
          <button onclick="switchTestRole('user')" class="p-2 rounded-xl text-[11px] font-bold bg-frevo-cyan/15 hover:bg-frevo-cyan/25 text-ink text-left">
            Folião Comum
          </button>
          <button onclick="switchTestRole('artist')" class="p-2 rounded-xl text-[11px] font-bold bg-frevo-orange/15 hover:bg-frevo-orange/25 text-ink text-left">
            Artista (SpokFrevo)
          </button>
          <button onclick="switchTestRole('admin')" class="p-2 rounded-xl text-[11px] font-bold bg-frevo-red/15 hover:bg-frevo-red/25 text-ink text-left">
            Administrador (CMS)
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// Modal de Recuperação de Senha (Esqueci minha senha)
function openForgotPasswordModal() {
  if (typeof pushModalHistory === 'function') pushModalHistory();

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const hasHistory = window.modalHistoryStack && window.modalHistoryStack.length > 0;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-start gap-3.5 pb-3 border-b border-gray-100 pr-10">
        <div class="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Recuperar Senha</h3>
          <p class="text-xs text-muted">Informe seu e-mail cadastrado para receber as instruções de redefinição de senha.</p>
        </div>
      </div>

      <div id="forgot-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 flex items-start gap-2"></div>
      <div id="forgot-success-msg" class="hidden text-xs text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200 leading-relaxed"></div>

      <form id="forgot-password-form" onsubmit="handleForgotPasswordSubmit(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail Cadastrado *</label>
          <input type="email" id="forgot-email" required placeholder="seuemail@exemplo.com" oninput="document.getElementById('forgot-error-msg')?.classList.add('hidden')" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
        </div>

        <button type="submit" id="forgot-submit-btn" class="btn btn-primary w-full text-xs sm:text-sm rounded-xl py-2.5 font-bold shadow-md">
          Enviar Link de Recuperação
        </button>
      </form>

      <div class="text-center pt-2 border-t border-gray-100">
        <button type="button" onclick="${hasHistory ? 'goBackModal()' : 'openSessionModal(); switchAuthTab(\'login\');'}" class="text-xs text-muted hover:text-ink font-semibold transition-colors flex items-center justify-center gap-1.5 mx-auto">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Voltar para o Login
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

async function handleForgotPasswordSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('forgot-email');
  const errorMsg = document.getElementById('forgot-error-msg');
  const successMsg = document.getElementById('forgot-success-msg');
  const submitBtn = document.getElementById('forgot-submit-btn');
  const form = document.getElementById('forgot-password-form');

  if (!emailInput || !emailInput.value.trim()) return;
  const email = emailInput.value.trim();

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'Enviando instruções...';
  }

  if (window.awsService && window.awsService.isConnected()) {
    const res = await window.awsService.resetPasswordForEmail(email);
    if (res?.error) {
      if (errorMsg) {
        errorMsg.innerText = res.error.message || 'Não foi possível enviar o e-mail de recuperação. Verifique o endereço digitado.';
        errorMsg.classList.remove('hidden');
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Enviar Link de Recuperação';
      }
      return;
    }
  }

  // Sucesso
  if (form) form.classList.add('hidden');
  if (errorMsg) errorMsg.classList.add('hidden');
  if (successMsg) {
    successMsg.innerHTML = `<strong>E-mail de recuperação enviado!</strong><br/>Enviamos as instruções para <strong>${email}</strong>. Verifique sua caixa de entrada e spam para redefinir sua senha com segurança.`;
    successMsg.classList.remove('hidden');
  }
}

async function loginWithGoogle() {
  const clientId = window.FREVIA_CONFIG?.GOOGLE_CLIENT_ID;
  const isRealGoogleClientId = clientId && !clientId.includes('frevai-auth') && clientId.includes('.apps.googleusercontent.com');

  // 1. Se houver um Client ID real configurado no Google Cloud Console, abrir o seletor nativo
  if (isRealGoogleClientId && window.google && window.google.accounts && window.google.accounts.oauth2) {
    try {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'email profile openid',
        prompt: 'select_account',
        callback: async (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            try {
              const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
              });
              if (res.ok) {
                const googleUser = await res.json();
                await authenticateWithGoogleProfile({
                  name: googleUser.name || googleUser.given_name || googleUser.email.split('@')[0],
                  email: googleUser.email,
                  avatar: googleUser.picture || null,
                  sub: googleUser.sub || null
                });
                return;
              }
            } catch (err) {
              console.warn('[Google OAuth] Erro ao obter perfil Google:', err);
            }
          }
        },
        error_callback: (err) => {
          console.warn('[Google OAuth] Erro ou cancelamento:', err);
          openGoogleAuthModal();
        }
      });

      client.requestAccessToken({ prompt: 'select_account' });
      return;
    } catch (err) {
      console.warn('[Google OAuth] Falha ao invocar Google Token Client:', err);
    }
  }

  // 2. Se o Client ID ainda não estiver cadastrado no console do Google Cloud, abrir o modal de login seguro
  openGoogleAuthModal();
}

async function authenticateWithGoogleProfile({ name, email, avatar, sub }) {
  if (!email) return;

  const cleanName = name || email.split('@')[0];
  const handle = '@' + email.split('@')[0].toLowerCase().replace(/[^a-z0-9_]/g, '');
  const googleId = sub ? `google_${sub}` : ('google_' + btoa(email).replace(/[^a-zA-Z0-9]/g, '').slice(0, 16));
  const userAvatar = avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(cleanName)}&background=4285F4&color=fff&rounded=true`;

  if (window.awsService && window.awsService.isConnected()) {
    try {
      let dbProfile = await window.awsService.getProfile(googleId);
      if (!dbProfile) {
        dbProfile = await window.awsService.upsertProfile({
          id: googleId,
          email: email,
          display_name: cleanName,
          name: cleanName,
          handle: handle,
          role: 'user',
          avatar_url: userAvatar
        });
      }

      const isApprovedArtist = dbProfile?.role === 'artist' && dbProfile?.artist_id;
      const userRole = dbProfile?.role === 'admin' ? 'admin' : isApprovedArtist ? 'artist' : 'user';

      currentUserSession = {
        id: googleId,
        role: userRole,
        name: dbProfile?.display_name || cleanName,
        handle: dbProfile?.handle || handle,
        avatar: dbProfile?.avatar_url || userAvatar,
        email: email,
        artist_id: isApprovedArtist ? dbProfile.artist_id : null,
        artist_request_status: dbProfile?.artist_request_status || 'none',
        favorites: [],
        saved_scores: ['s1', 's3'],
        saved_posts: ['p1', 'p2'],
        liked_posts: ['p1']
      };

      const social = await window.awsService.getUserSocialState(googleId);
      if (social) {
        currentUserSession.favorites = social.favoriteArtistIds || [];
      }
    } catch (err) {
      console.warn('[Google Auth] Erro ao sincronizar AWS:', err);
    }
  }

  if (!currentUserSession || currentUserSession.role === 'guest') {
    currentUserSession = {
      id: googleId,
      role: 'user',
      name: cleanName,
      handle: handle,
      avatar: userAvatar,
      email: email,
      artist_id: null,
      artist_request_status: 'none',
      favorites: ['a1'],
      saved_scores: ['s1', 's3'],
      saved_posts: ['p1', 'p2'],
      liked_posts: ['p1']
    };
  }

  if (typeof currentUserProfile !== 'undefined') {
    currentUserProfile.name = currentUserSession.name;
    currentUserProfile.handle = currentUserSession.handle;
    currentUserProfile.email = email;
    currentUserProfile.avatar = currentUserSession.avatar;
  }

  saveCurrentSession();
  updateProfileUI();
  closeModal();

  if (typeof showPlatformAlert === 'function') {
    showPlatformAlert(`Conta Google conectada com sucesso!\n\nBem-vindo ao FrevAI, ${cleanName}!`, 'Login Google');
  } else if (typeof showAlertModal === 'function') {
    showAlertModal(`Conta Google conectada com sucesso!\n\nBem-vindo ao FrevAI, ${cleanName}!`);
  }
}

function openGoogleAuthModal() {
  const modalBody = document.getElementById('modal-body');
  if (!modalBody) return;
  
  modalBody.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Entrar com a Google</h3>
          <p class="text-xs text-muted">Acesse ou crie sua conta FrevAI de forma rápida e segura</p>
        </div>
      </div>

      <form id="google-auth-direct-form" onsubmit="handleGoogleAuthSubmit(event)" class="space-y-3.5 pt-2">
        <div>
          <label class="block text-xs font-bold text-ink mb-1">Seu E-mail da Conta Google *</label>
          <input type="email" id="google-auth-email" required placeholder="seu.email@gmail.com" class="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl bg-surface-soft text-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
        </div>
        <div>
          <label class="block text-xs font-bold text-ink mb-1">Seu Nome Completo (Opcional)</label>
          <input type="text" id="google-auth-name" placeholder="Ex: Maria Freire" class="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl bg-surface-soft text-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
        </div>

        <div class="pt-2 flex items-center gap-2">
          <button type="button" onclick="openSessionModal('signup')" class="btn btn-outline flex-1 py-2.5 rounded-xl text-xs font-bold">
            Voltar
          </button>
          <button type="submit" class="btn bg-blue-600 hover:bg-blue-700 text-white flex-1 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            Continuar com Google
          </button>
        </div>
      </form>
    </div>
  `;
  openModal();
}

async function handleGoogleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('google-auth-email')?.value?.trim();
  const nameInput = document.getElementById('google-auth-name')?.value?.trim();
  if (!email) return;

  await authenticateWithGoogleProfile({
    name: nameInput || email.split('@')[0],
    email: email,
    avatar: null
  });
}

async function handleEmailLogin(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email')?.value?.trim();
  const password = document.getElementById('auth-password')?.value;
  const errEl = document.getElementById('login-error-msg');
  if (errEl) {
    errEl.classList.add('hidden');
    errEl.innerText = '';
  }

  if (!email || !password) return;

  if (window.awsService && window.awsService.isConnected()) {
    const { data, error } = await window.awsService.signInWithEmail(email, password);
    if (error) {
      if (errEl) {
        let msg = error.message;
        const lower = msg.toLowerCase();
        if (lower.includes('invalid login credentials') || lower.includes('invalid_grant')) {
          msg = 'E-mail ou senha incorretos. Verifique os dados digitados e tente novamente.';
        } else if (lower.includes('email not confirmed')) {
          msg = 'Seu e-mail ainda não foi confirmado. Verifique a caixa de entrada (e spam) do seu e-mail.';
        } else {
          msg = `Erro ao entrar: ${error.message}`;
        }
        errEl.innerText = msg;
        errEl.classList.remove('hidden');
      } else {
        showAlertModal('Erro no login AWS: ' + error.message);
      }
      return;
    }

    // Carregar perfil real no AWS
    let dbProfile = await window.awsService.getProfile(data.user.id);
    if (!dbProfile) {
      dbProfile = await window.awsService.upsertProfile(data.user);
    }

    // Regra de Ouro: artist_id só é vinculado se role === 'artist' E aprovado pelo admin
    const isApprovedArtist = dbProfile?.role === 'artist' && dbProfile?.artist_id;
    const userRole = dbProfile?.role === 'admin' ? 'admin' : isApprovedArtist ? 'artist' : 'user';
    const artistId = isApprovedArtist ? dbProfile.artist_id : null;

    currentUserSession = {
      id: data.user.id,
      role: userRole,
      name: dbProfile?.display_name || data.user.user_metadata?.display_name || email.split('@')[0],
      handle: dbProfile?.handle || ('@' + email.split('@')[0]),
      avatar: hasCustomAvatar(dbProfile?.avatar_url) ? dbProfile.avatar_url : (hasCustomAvatar(data.user.user_metadata?.avatar_url) ? data.user.user_metadata.avatar_url : null),
      email: email,
      artist_id: artistId,
      artist_request_status: dbProfile?.artist_request_status || 'none',
      favorites: [],
      saved_scores: ['s1', 's3'],
      saved_posts: ['p1', 'p2'],
      liked_posts: ['p1']
    };

    // Sincronizar estado social (likes, salvos, favoritos)
    const social = await window.awsService.getUserSocialState(data.user.id);
    if (social) {
      currentUserSession.favorites = social.favoriteArtistIds || [];
      currentUserSession.liked_posts = social.likedPostIds || [];
      currentUserSession.saved_posts = social.savedPostIds || [];
      DB.posts.forEach(p => {
        p.is_liked = (currentUserSession.liked_posts || []).includes(p.id);
        p.is_saved = (currentUserSession.saved_posts || []).includes(p.id);
      });
    }

    saveCurrentSession();
    updateProfileUI();
    if (typeof renderFeed === 'function') renderFeed();
    if (typeof renderArtists === 'function') renderArtists();
    closeModal();
  } else {
    // Fallback local
    currentUserSession = {
      role: email.includes('admin') ? 'admin' : email.includes('artista') ? 'artist' : 'user',
      name: email.split('@')[0],
      handle: '@' + email.split('@')[0],
      avatar: null,
      email: email,
      artist_id: null,
      artist_request_status: email.includes('artista') ? 'pending' : 'none',
      favorites: ['a1'],
      saved_scores: ['s1', 's3'],
      saved_posts: ['p1', 'p2'],
      liked_posts: ['p1']
    };
    if (typeof currentUserProfile !== 'undefined') {
      currentUserProfile.name = currentUserSession.name;
      currentUserProfile.handle = currentUserSession.handle;
      currentUserProfile.email = email;
    }
    saveCurrentSession();
    updateProfileUI();
    closeModal();
  }
}

async function handleEmailSignUp(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name')?.value?.trim();
  const rawHandle = document.getElementById('signup-handle')?.value?.trim();
  const handle = sanitizeHandle(rawHandle);
  const email = document.getElementById('signup-email')?.value?.trim();
  const password = document.getElementById('signup-password')?.value;
  const errEl = document.getElementById('signup-error-msg');
  if (errEl) {
    errEl.classList.add('hidden');
    errEl.innerText = '';
  }

  if (!name || !email || !password) return;

  // Validação de formato e tamanho do @handle
  if (!handle || handle.length < 4) {
    if (errEl) {
      errEl.innerText = 'O nome de usuário (@) deve conter pelo menos 3 caracteres (letras, números ou sublinhados).';
      errEl.classList.remove('hidden');
    } else {
      showAlertModal('O nome de usuário (@) deve conter pelo menos 3 caracteres após o @.');
    }
    document.getElementById('signup-handle')?.focus();
    return;
  }

  // Validação de unicidade do @handle em toda a plataforma
  const handleCheck = await isHandleTaken(handle);
  if (handleCheck.taken) {
    if (errEl) {
      errEl.innerText = handleCheck.reason;
      errEl.classList.remove('hidden');
    } else {
      showAlertModal(handleCheck.reason);
    }
    document.getElementById('signup-handle')?.focus();
    return;
  }

  const isArtistChoice = signupRoleSelected === 'artist';
  const termsConsent = document.getElementById('signup-terms-consent')?.checked;
  const artistConsent = document.getElementById('signup-terms-consent-artist')?.checked;

  if (!termsConsent) {
    if (errEl) {
      errEl.innerText = 'É necessário concordar com os Termos de Uso e a Política de Privacidade (LGPD) para prosseguir.';
      errEl.classList.remove('hidden');
    } else {
      showAlertModal('É necessário aceitar os Termos de Uso e a Política de Privacidade (LGPD).');
    }
    return;
  }

  if (isArtistChoice && !artistConsent) {
    if (errEl) {
      errEl.innerText = 'É necessário declarar a titularidade autoral para cadastrar o perfil de artista.';
      errEl.classList.remove('hidden');
    } else {
      showAlertModal('É necessário aceitar o Termo de Licenciamento Autoral.');
    }
    return;
  }
  const artistName = document.getElementById('signup-artist-name')?.value || name;
  const genreSelect = document.getElementById('signup-artist-genre')?.value || 'Frevo de Rua';
  const customGenre = document.getElementById('signup-custom-genre')?.value?.trim();
  const genre = (genreSelect === 'Outro' && customGenre) ? customGenre : genreSelect;
  const whatsapp = document.getElementById('signup-artist-whatsapp')?.value || '';

  if (window.awsService && window.awsService.isConnected()) {
    // Cadastra com o @handle escolhido e role inicial 'user'
    const { data, error } = await window.awsService.signUpWithEmail(email, password, {
      display_name: name,
      name: name,
      handle: handle,
      role: 'user',
      is_artist_applicant: isArtistChoice ? 'true' : 'false',
      artist_name: artistName,
      artist_genre: genre,
      artist_whatsapp: whatsapp
    });

    if (error) {
      if (errEl) {
        let msg = error.message;
        const lower = msg.toLowerCase();
        if (lower.includes('database error saving new user')) {
          msg = 'Erro interno no banco do AWS ao salvar usuário. Execute a migração 005_unique_handles_and_artist_requests.sql no SQL Editor do AWS.';
        } else if (lower.includes('user already registered') || lower.includes('already exists')) {
          msg = 'Este e-mail já está cadastrado. Alterne para a aba "Entrar" para acessar sua conta.';
        } else if (lower.includes('password should be at least')) {
          msg = 'A senha deve ter no mínimo 6 caracteres.';
        } else if (lower.includes('valid email')) {
          msg = 'Por favor, insira um endereço de e-mail válido.';
        } else {
          msg = `Erro no cadastro: ${error.message}`;
        }
        errEl.innerText = msg;
        errEl.classList.remove('hidden');
      } else {
        showAlertModal('Erro no cadastro AWS: ' + error.message);
      }
      return;
    }

    // Se escolheu ser artista, registra a solicitação no AWS e no DB local
    if (isArtistChoice) {
      const reqId = 'req-' + Date.now();
      const targetUserId = data?.user?.id || ('user-' + Date.now());

      if (data?.user) {
        await window.awsService.requestArtistRole(data.user.id, {
          requested_name: artistName,
          genre: genre,
          whatsapp: whatsapp
        });
      }

      // Adicionar à fila local de solicitações para o admin visualizar imediatamente
      loadArtistRequestsLocal();
      DB.artistRequests.unshift({
        id: reqId,
        user_id: targetUserId,
        requested_name: artistName,
        genre: genre,
        whatsapp: whatsapp,
        status: 'pending',
        created_at: new Date().toISOString(),
        user: {
          display_name: name,
          handle: handle,
          avatar_url: null
        }
      });
      saveArtistRequestsLocal();

      // Notificar o admin
      loadNotificationsLocal();
      DB.notifications.unshift({
        id: 'notif-artist-' + Date.now(),
        type: 'artist_request',
        targetId: reqId,
        author: artistName,
        author_avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
        title: 'Nova Solicitação de Artista',
        message: `${artistName} (${handle}) solicitou verificação de perfil de artista no gênero ${genre}.`,
        time_ago: 'Agora mesmo',
        read: false,
        forRole: 'admin'
      });
      saveNotificationsLocal();
      updateNotificationBadge();

      showPlatformAlert('Conta criada com sucesso!\n\nSua solicitação para se tornar Artista foi enviada para aprovação da moderação.\n\nEnquanto o administrador analisa seu projeto, você já pode navegar e aproveitar o FrevAI como fã!', 'Conta Criada');
    } else {
      showPlatformAlert('Conta criada com sucesso! Seja bem-vindo ao FrevAI!', 'Cadastro Realizado');
    }

    closeModal();
    // Alterna para tela de login com o email pré-preenchido
    switchAuthTab('login');
  } else {
    // Modo local / offline
    const reqId = 'req-' + Date.now();
    const newLocalUser = {
      id: 'local-u-' + Date.now(),
      name: name,
      email: email,
      handle: handle,
      role: 'user',
      avatar: null,
      artist_request_status: isArtistChoice ? 'pending' : 'none'
    };

    try {
      const localUsers = JSON.parse(localStorage.getItem('frevia_local_users') || '[]');
      localUsers.push(newLocalUser);
      localStorage.setItem('frevia_local_users', JSON.stringify(localUsers));
    } catch (e) {}

    if (isArtistChoice) {
      loadArtistRequestsLocal();
      DB.artistRequests.unshift({
        id: reqId,
        user_id: newLocalUser.id,
        requested_name: artistName,
        genre: genre,
        whatsapp: whatsapp,
        status: 'pending',
        created_at: new Date().toISOString(),
        user: {
          display_name: name,
          handle: handle,
          avatar_url: newLocalUser.avatar
        }
      });
      saveArtistRequestsLocal();

      loadNotificationsLocal();
      DB.notifications.unshift({
        id: 'notif-artist-' + Date.now(),
        type: 'artist_request',
        targetId: reqId,
        author: artistName,
        author_avatar: newLocalUser.avatar,
        title: 'Nova Solicitação de Artista',
        message: `${artistName} (${handle}) solicitou verificação de perfil de artista no gênero ${genre}.`,
        time_ago: 'Agora mesmo',
        read: false,
        forRole: 'admin'
      });
      saveNotificationsLocal();
      updateNotificationBadge();

      showAlertModal('Conta criada com sucesso!\n\nSua solicitação para se tornar Artista foi enviada para aprovação da moderação.\n\nEnquanto o administrador analisa seu projeto, você já pode navegar e aproveitar o FrevAI como fã!');
    } else {
      showAlertModal('Conta criada com sucesso! Seja bem-vindo ao FrevAI!');
    }

    closeModal();
    switchAuthTab('login');
  }
}

function openArtistRequestModal() {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  if (currentUserSession.role === 'artist') {
    showAlertModal('Você já possui um perfil de artista verificado no FrevAI!');
    return;
  }

  if (typeof pushModalHistory === 'function') pushModalHistory();

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const hasHistory = window.modalHistoryStack && window.modalHistoryStack.length > 0;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left max-h-[85vh] overflow-y-auto pr-1">
      <div class="flex items-start gap-3.5 pb-3 border-b border-gray-100 pr-10">
        <div class="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Solicitar Perfil de Artista</h3>
          <p class="text-xs text-muted">Junte-se à galeria de mestres e fazedores de cultura do Frevo</p>
        </div>
      </div>

      <div class="p-3.5 bg-orange-50/80 border border-orange-200/70 rounded-2xl text-xs text-ink space-y-1.5">
        <div class="font-bold flex items-center gap-1.5 text-orange-700">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Como funciona a aprovação de curadoria?
        </div>
        <p class="text-[11px] text-orange-950/80 leading-relaxed">Você continuará navegando como folião normalmente. O comitê gestor analisará suas informações e, após a aprovação, as abas de partituras, álbuns e shows serão liberadas no seu perfil.</p>
      </div>

      <form onsubmit="handleArtistRequestSubmit(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Nome Artístico / Grupo / Orquestra *</label>
          <input type="text" id="req-artist-name" required placeholder="Ex: Orquestra Frevo Tropical" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Gênero Tradicional</label>
          <select id="req-artist-genre" onchange="handleGenreSelectChange('req-artist-genre', 'req-custom-genre-container')" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition">
            <option value="Frevo de Rua">Frevo de Rua</option>
            <option value="Frevo Canção">Frevo Canção</option>
            <option value="Frevo de Bloco">Frevo de Bloco</option>
            <option value="Frevo Livre Instrumental">Frevo Livre Instrumental</option>
            <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
            <option value="Outro">Outro</option>
          </select>
          <div id="req-custom-genre-container" class="mt-2 hidden">
            <input type="text" id="req-custom-genre" placeholder="Especifique o gênero tradicional..." class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition" />
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Breve Biografia / Histórico Cultural</label>
          <textarea id="req-artist-bio" rows="4" placeholder="Conte um pouco sobre sua trajetória no Frevo, participações em carnavais ou festivais..." class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition resize-y min-h-[110px] max-h-[450px] leading-relaxed"></textarea>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Instagram (@usuario)</label>
            <input type="text" id="req-artist-instagram" placeholder="@seuinstagram" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition font-medium" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">WhatsApp de Contato</label>
            <input type="text" id="req-artist-whatsapp" placeholder="(81) 99999-9999" class="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-100 rounded-xl bg-white text-ink outline-none transition font-mono" />
          </div>
        </div>

        <div class="flex gap-2.5 pt-2">
          <button type="button" onclick="${hasHistory ? 'goBackModal()' : 'closeModal()'}" class="btn btn-outline flex-1 text-xs sm:text-sm py-2.5 rounded-xl font-bold">
            ${hasHistory ? 'Voltar' : 'Cancelar'}
          </button>
          <button type="submit" class="btn btn-primary flex-1 text-xs sm:text-sm py-2.5 rounded-xl shadow-md font-bold">Enviar para Curadoria</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function handleArtistRequestSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('req-artist-name')?.value?.trim();
  const genreSelect = document.getElementById('req-artist-genre')?.value || 'Frevo de Rua';
  const customGenre = document.getElementById('req-custom-genre')?.value?.trim();
  const genre = (genreSelect === 'Outro' && customGenre) ? customGenre : genreSelect;
  const bio = document.getElementById('req-artist-bio')?.value?.trim();
  const instagram = document.getElementById('req-artist-instagram')?.value?.trim();
  const whatsapp = document.getElementById('req-artist-whatsapp')?.value?.trim();

  if (!name) return;

  const reqId = 'req-' + Date.now();
  if (window.awsService && window.awsService.isConnected()) {
    const { error } = await window.awsService.requestArtistRole(currentUserSession.id, {
      requested_name: name,
      genre: genre,
      bio: bio,
      instagram_url: instagram,
      whatsapp: whatsapp
    });
    if (error) {
      console.warn('[AWS] Aviso ao enviar solicitação:', error.message);
    }
  }

  currentUserSession.artist_request_status = 'pending';
  saveCurrentSession();

  // Salvar no DB.artistRequests local para o admin visualizar imediatamente
  loadArtistRequestsLocal();
  DB.artistRequests.unshift({
    id: reqId,
    user_id: currentUserSession.id || ('u-' + Date.now()),
    requested_name: name,
    genre: genre,
    bio: bio,
    instagram_url: instagram,
    whatsapp: whatsapp,
    status: 'pending',
    created_at: new Date().toISOString(),
    user: {
      display_name: currentUserSession.name,
      handle: currentUserSession.handle,
      avatar_url: currentUserSession.avatar
    }
  });
  saveArtistRequestsLocal();

  // Disparar notificação para o administrador
  loadNotificationsLocal();
  DB.notifications.unshift({
    id: 'notif-artist-' + Date.now(),
    type: 'artist_request',
    targetId: reqId,
    author: name,
    author_avatar: currentUserSession.avatar,
    title: 'Nova Solicitação de Artista',
    message: `${name} (${currentUserSession.handle}) solicitou verificação de perfil de artista no gênero ${genre}.`,
    time_ago: 'Agora mesmo',
    read: false,
    forRole: 'admin'
  });
  saveNotificationsLocal();
  updateNotificationBadge();

  closeModal();
  updateProfileUI();
  showAlertModal('Sua solicitação de perfil artístico foi enviada com sucesso!\n\nNossa curadoria analisará as informações. Você continua com acesso normal de folião.');
}

function logoutSession() {
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.signOut();
  }
  switchTestRole('guest');
}

// Anexar ao escopo global para compatibilidade com inline event handlers
window.openSessionModal = openSessionModal;
window.switchAuthTab = switchAuthTab;
window.setSignupRole = setSignupRole;
window.togglePasswordVisibility = togglePasswordVisibility;
window.handleGenreSelectChange = handleGenreSelectChange;
window.formatSignupHandleInput = formatSignupHandleInput;
window.openForgotPasswordModal = openForgotPasswordModal;
window.handleForgotPasswordSubmit = handleForgotPasswordSubmit;
window.loginWithGoogle = loginWithGoogle;
window.openGoogleAuthModal = openGoogleAuthModal;
window.handleGoogleAuthSubmit = handleGoogleAuthSubmit;
window.handleEmailLogin = handleEmailLogin;
window.handleEmailSignUp = handleEmailSignUp;
window.openArtistRequestModal = openArtistRequestModal;
window.handleArtistRequestSubmit = handleArtistRequestSubmit;
window.logoutSession = logoutSession;

