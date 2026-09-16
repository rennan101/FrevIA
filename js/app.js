// ==============================================================================
// FREVAI - STATE MANAGEMENT, RBAC & UNIFIED DATA STORE
// ==============================================================================

const DB = {
  artists: [
    {
      id: 'a1',
      name: 'Maestro Forró',
      handle: '@maestroforro',
      genre: 'Frevo Livre',
      bio: 'Regente e arranjador à frente da OPBH. Transformando o Frevo com fusões globais e energia visceral.',
      avatar_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      email: 'forro@cultura.pe.gov.br',
      phone: '+55 (81) 99876-1111',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a2',
      name: 'SpokFrevo',
      handle: '@spokfrevo',
      genre: 'Frevo de Rua',
      bio: 'Liderada pelo saxofonista Spok, elevando o Frevo instrumental ao circuito mundial do jazz.',
      avatar_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
      email: 'spok@cultura.pe.gov.br',
      phone: '+55 (81) 99876-2222',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a3',
      name: 'Bloco da Saudade',
      handle: '@blocodasaudade',
      genre: 'Frevo de Bloco',
      bio: 'Tradição dos blocos líricos de pau e corda do Recife desde 1974 com coro feminino e poesia.',
      avatar_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
      email: 'saudade@cultura.pe.gov.br',
      phone: '+55 (81) 99876-3333',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a4',
      name: 'Claudionor Germano',
      handle: '@claudionorgermano',
      genre: 'Frevo Canção',
      bio: 'Patrimônio Vivo de Pernambuco, a mais marcante voz dos frevos de Capiba e Nelson Ferreira.',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
      email: 'claudionor@cultura.pe.gov.br',
      phone: '+55 (81) 99876-4444',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a5',
      name: 'Orquestra Popular da Bomba',
      handle: '@opbh_recife',
      genre: 'Frevo Contemporâneo',
      bio: 'Nova geração de metais e percussão unindo frevo de rua e ritmos afro-brasileiros.',
      avatar_url: 'https://images.unsplash.com/photo-1520523839898-507127053c37?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      email: 'contato@opbh.com.br',
      phone: '+55 (81) 99876-5555',
      is_approved: false, // Pendente de moderação CMS
      has_story: false,
    }
  ],

  posts: [
    {
      id: 'p1',
      author: 'Paço do Frevo',
      handle: 'pacodofrevo',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80',
      location: 'Praça do Arsenal, Recife Antigo',
      type: 'event',
      title: 'Acerto de Marcha no Recife Antigo',
      content: 'O som estridente e alegre dos clarins e corais líricos tomará conta da Praça do Arsenal neste domingo a partir das 16h! Traga sua sombrinha e junte-se ao cortejo da nossa cultura viva.',
      tags: ['CarnavalDePernambuco', 'RecifeAntigo', 'AcertoDeMarcha'],
      likes: 342,
      is_liked: false,
      is_saved: false,
      time_ago: 'HÁ 2 HORAS',
      created_at: '2026-09-16T12:00:00Z',
      comments: [
        { user: 'mariana.passista', text: 'Estarei lá com toda a turma do passo!' },
        { user: 'carlos_metais', text: 'Os arranjos deste ano estão impecáveis.' }
      ]
    },
    {
      id: 'p2',
      author: 'Maestro Forró',
      handle: 'maestroforro',
      avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
      location: 'Bomba do Hemetério, Recife',
      type: 'music',
      title: 'Nova Partitura: "Passo da Fervura"',
      content: 'Disponibilizamos a partitura completa com arranjo para saxofones e trompetes no acervo aberto do FrevAI! Músicos e orquestras de todo o Brasil já podem baixar gratuitamente.',
      tags: ['FrevoDeRua', 'PartiturasAbertas', 'Arranjos'],
      likes: 589,
      is_liked: true,
      is_saved: true,
      time_ago: 'HÁ 6 HORAS',
      created_at: '2026-09-16T08:30:00Z',
      comments: [
        { user: 'orquestra_olinda', text: 'Já baixamos e vamos ensaiar hoje à noite!' }
      ]
    },
    {
      id: 'p3',
      author: 'SpokFrevo',
      handle: 'spokfrevo',
      avatar: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80',
      location: 'Teatro Santa Isabel, Recife',
      type: 'culture',
      title: 'Concerto Sinfônico do Frevo Instrumental',
      content: 'Uma noite inesquecível de celebração aos mestres do Frevo de Rua com arranjos sinfônicos contemporâneos.',
      tags: ['SpokFrevo', 'Instrumental', 'SantaIsabel'],
      likes: 820,
      is_liked: false,
      is_saved: false,
      time_ago: 'ONTEM',
      created_at: '2026-09-15T20:00:00Z',
      comments: []
    }
  ],

  songs: [
    {
      id: 's1',
      title: 'Vassourinhas',
      artist: 'Matias da Rocha & Joana Batista',
      genre: 'Frevo de Rua',
      description: 'O mais emblemático e executado frevo instrumental de todos os tempos.',
      lyrics: '(Instrumental - Execução enérgica de sopros e percussão sincopada)',
      score_file: 'vassourinhas-orquestra.pdf',
      status: 'published',
      downloads_count: 1420,
      author_id: 'a1'
    },
    {
      id: 's2',
      title: 'Madeira Que Cupim Não Rói',
      artist: 'Capiba',
      genre: 'Frevo de Bloco',
      description: 'Hino lírico da resistência e orgulho carnavalesco pernambucano.',
      lyrics: 'Madeira do Rosário vem a ver contar / Como é que se faz pra vencer / Pernambuco é terra de cabra da peste...',
      score_file: 'madeira-cupim-coro.pdf',
      status: 'published',
      downloads_count: 980,
      author_id: 'a3'
    },
    {
      id: 's3',
      title: 'Valores do Passado',
      artist: 'Edgar Moraes',
      genre: 'Frevo de Bloco',
      description: 'Poesia nostálgica sobre os antigos carnavais de pau e corda do Recife.',
      lyrics: 'Bloco das Flores, Batutas de São José / Pavão Dourado, Flor da Lira...',
      score_file: 'valores-do-passado.pdf',
      status: 'published',
      downloads_count: 650,
      author_id: 'a3'
    },
    {
      id: 's4',
      title: 'Frevo Mulher',
      artist: 'Zé Ramalho',
      genre: 'Frevo Canção',
      description: 'Fusão antológica do frevo com a poesia telúrica nordestina.',
      lyrics: 'Quantos aqui ouvem a voz do povo / Que vem de dentro do coração...',
      score_file: 'frevo-mulher-metais.pdf',
      status: 'published',
      downloads_count: 830,
      author_id: 'a1'
    }
  ],

  steps: [
    {
      id: 'st1',
      name: 'Tesoura',
      difficulty: 'Iniciante',
      category: 'Tradicional',
      description: 'Cruzamento ágil dos pés com pequenos saltos no tempo da música, mantendo o tronco ereto e sombrinha em rotação.',
      instructions: '1. Inicie com os pés paralelos.\n2. Salte cruzando a perna direita à frente da esquerda.\n3. Salte novamente descruzando e invertendo a posição.\n4. Gire a sombrinha em sincronia rítmica.',
      author_role: 'admin'
    },
    {
      id: 'st2',
      name: 'Ferrolho',
      difficulty: 'Intermediário',
      category: 'Acrobático',
      description: 'Agachamento em cócoras com extensão lateral veloz simulando o mecanismo de um ferrolho.',
      instructions: '1. Agache em posição de cócoras na ponta dos pés.\n2. Estenda o calcanhar direito para a lateral.\n3. Recolha e estenda alternadamente o esquerdo.\n4. Mantenha o equilíbrio com a sombrinha no alto.',
      author_role: 'admin'
    },
    {
      id: 'st3',
      name: 'Dobradiça',
      difficulty: 'Avançado',
      category: 'Acrobático',
      description: 'Flexão profunda e rápida dos joelhos para frente enquanto o corpo desce em suspensão.',
      instructions: '1. Junte os pés na ponta.\n2. Lance os joelhos para a frente mantendo o tronco ereto.\n3. Retorne com impulsão potente no ritmo sincopado do Frevo.',
      author_role: 'admin'
    }
  ],

  history: [
    {
      id: 'h1',
      title: 'Origens e o "Frever" das Ruas',
      period: 'Final do Século XIX (1880–1907)',
      content: 'O Frevo nasceu no Recife da rivalidade entre bandas marciais e capoeiristas que protegiam os estandartes dos clubes de pedestres. O termo se origina do verbo popular "frever" (ferver).',
      source: 'Paço do Frevo & Fundação Joaquim Nabuco'
    },
    {
      id: 'h2',
      title: 'A Primeira Menção Oficial',
      period: '9 de Fevereiro de 1907',
      content: 'A palavra "Frevo" foi registrada pela primeira vez na imprensa pelo Jornal Pequeno do Recife, consagrando a data oficial do Dia do Frevo.',
      source: 'Arquivo Histórico de Pernambuco'
    },
    {
      id: 'h3',
      title: 'Patrimônio Imaterial da Humanidade',
      period: 'Dezembro de 2012',
      content: 'A UNESCO proclamou oficialmente o Frevo como Patrimônio Cultural Imaterial da Humanidade, celebrando a simbiose única entre música, dança, poesia e comunidade.',
      source: 'UNESCO Heritage Portal'
    }
  ],

  mapPoints: [
    {
      id: 'm1',
      name: 'Paço do Frevo',
      category: 'Museu / Centro Cultural',
      address: 'Praça do Arsenal da Marinha, s/n - Bairro do Recife, Recife - PE',
      coords: [-8.0617, -34.8711],
      description: 'Espaço de preservação, pesquisa, memória e escola viva de dança e música do Frevo.'
    },
    {
      id: 'm2',
      name: 'Sede do Vassourinhas',
      category: 'Agremiação Histórica',
      address: 'Largo do Amparo, Olinda / Recife - PE',
      coords: [-8.0534, -34.8778],
      description: 'Fundado em 1889, agremiação histórica autora da mais célebre marcha carnavalesca de Pernambuco.'
    },
    {
      id: 'm3',
      name: 'Quatro Cantos de Olinda',
      category: 'Polo Tradicional',
      address: 'Cruzamento das Ruas Amparo e Bernardo Vieira - Olinda - PE',
      coords: [-7.9996, -34.8488],
      description: 'Coração do carnaval de rua e ponto de encontro emblemático das orquestras de frevo.'
    }
  ]
};

// ==============================================================================
// GESTÃO DE SESSÃO & CONTROLE DE ACESSO (RBAC)
// Roles: 'guest' (Visitante), 'user' (Usuário Comum), 'artist' (Artista), 'admin' (Admin)
// ==============================================================================

let currentUserSession = {
  role: 'guest', // Inicia como visitante sem login por padrão
  name: 'Visitante',
  handle: '@visitante',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  email: '',
  artist_id: null,
  favorites: ['a1'] // IDs dos artistas favoritados
};

// Carregar sessão salva do LocalStorage se houver
const savedSession = localStorage.getItem('frevai_user_session');
if (savedSession) {
  try {
    currentUserSession = JSON.parse(savedSession);
  } catch (e) {}
}

function saveCurrentSession() {
  localStorage.setItem('frevai_user_session', JSON.stringify(currentUserSession));
  updateSessionUI();
}

function updateSessionUI() {
  const userNameEl = document.getElementById('header-user-name');
  const cmsBtn = document.getElementById('header-cms-btn');
  const addStepBtn = document.getElementById('btn-add-step');

  if (userNameEl) {
    if (currentUserSession.role === 'guest') {
      userNameEl.innerText = 'Entrar';
    } else {
      userNameEl.innerText = currentUserSession.name.split(' ')[0] + ` (${currentUserSession.role === 'admin' ? 'Admin' : currentUserSession.role === 'artist' ? 'Artista' : 'Usuário'})`;
    }
  }

  // Visibilidade de botões com base no papel
  if (cmsBtn) {
    cmsBtn.style.display = currentUserSession.role === 'admin' ? 'flex' : 'flex'; // Mantém acessível para testes
  }
  if (addStepBtn) {
    addStepBtn.style.display = (currentUserSession.role === 'artist' || currentUserSession.role === 'admin') ? 'block' : 'none';
  }
}

function switchTestRole(role) {
  if (role === 'admin') {
    currentUserSession = {
      role: 'admin',
      name: 'Administrador FrevAI',
      handle: '@admin_cultura',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
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
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      email: '',
      artist_id: null,
      favorites: []
    };
  }

  saveCurrentSession();
  closeModal();
  renderArtists();
  renderFeed();
  renderProfileGallery();
  renderSteps();
  renderAdminCMS();
  alert(`Papel alterado para: ${role.toUpperCase()} com sucesso!`);
}

// ==============================================================================
// MODAL UNIFICADO DE SESSÃO / LOGIN / CADASTRO (SUPABASE & GOOGLE)
// ==============================================================================
function openSessionModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const isGuest = currentUserSession.role === 'guest';

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">${isGuest ? 'Acessar o FrevAI' : 'Minha Conta FrevAI'}</h3>
          <p class="text-[11px] text-muted">${isGuest ? 'Entre para comentar e favoritar artistas' : `Logado como: ${currentUserSession.name}`}</p>
        </div>
        <span class="badge ${currentUserSession.role === 'admin' ? 'bg-frevo-red/15 text-frevo-red' : currentUserSession.role === 'artist' ? 'bg-frevo-orange/15 text-frevo-orange' : 'bg-frevo-cyan/15 text-frevo-cyan'} text-[11px] font-bold">
          ${currentUserSession.role.toUpperCase()}
        </span>
      </div>

      ${isGuest ? `
        <!-- Formulário E-mail e Senha (Primeiro) -->
        <form onsubmit="handleEmailLogin(event)" class="space-y-3">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail</label>
            <input type="email" id="auth-email" required placeholder="seuemail@exemplo.com" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Senha</label>
            <input type="password" id="auth-password" required placeholder="••••••••" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>
          <button type="submit" class="btn btn-primary w-full text-xs rounded-xl py-2.5 font-bold shadow-md">
            Entrar com E-mail e Senha
          </button>
        </form>

        <div class="flex items-center my-3 text-center">
          <div class="flex-1 border-t border-gray-200"></div>
          <span class="px-2 text-[10px] text-muted uppercase font-bold tracking-wider">Ou continue com</span>
          <div class="flex-1 border-t border-gray-200"></div>
        </div>

        <!-- Botão Google OAuth Oficial (Segundo) -->
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
        <div class="p-4 bg-surface-soft rounded-2xl flex items-center gap-3 border border-gray-100">
          <img src="${currentUserSession.avatar}" alt="${currentUserSession.name}" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
          <div>
            <h4 class="font-display font-bold text-sm text-ink">${currentUserSession.name}</h4>
            <span class="text-xs text-muted block">${currentUserSession.handle}</span>
            <span class="text-[11px] text-ink-soft">${currentUserSession.email || 'Conta Local'}</span>
          </div>
        </div>

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
            Usuário Comum
          </button>
          <button onclick="switchTestRole('artist')" class="p-2 rounded-xl text-[11px] font-bold bg-frevo-orange/15 hover:bg-frevo-orange/25 text-ink text-left">
            Artista (Maestro Forró)
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

async function loginWithGoogle() {
  if (window.supabaseService && window.supabaseService.isConnected()) {
    try {
      const { data, error } = await window.supabaseService.signInWithGoogle();
      if (error) {
        alert('Erro ao conectar com o Google: ' + error.message + '\n\nCertifique-se de habilitar o provedor Google no painel do Supabase (Authentication -> Providers -> Google).');
      }
    } catch (err) {
      alert('Falha na comunicação com o Google OAuth: ' + err.message);
    }
  } else {
    // Simulação caso as chaves não estejam online
    switchTestRole('user');
  }
}

async function handleEmailLogin(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;

  if (window.supabaseService && window.supabaseService.isConnected()) {
    const { data, error } = await window.supabaseService.signInWithEmail(email, password);
    if (error) {
      alert('Erro no login Supabase: ' + error.message);
      return;
    }
    currentUserSession = {
      role: data.user.user_metadata?.role || 'user',
      name: data.user.user_metadata?.display_name || email.split('@')[0],
      handle: '@' + email.split('@')[0],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      email: email,
      artist_id: null,
      favorites: []
    };
    saveCurrentSession();
    closeModal();
    alert('Login realizado com sucesso!');
  } else {
    // Fallback local
    currentUserSession = {
      role: email.includes('admin') ? 'admin' : email.includes('artista') ? 'artist' : 'user',
      name: email.split('@')[0],
      handle: '@' + email.split('@')[0],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      email: email,
      artist_id: null,
      favorites: []
    };
    saveCurrentSession();
    closeModal();
    alert(`Conectado com sucesso como: ${currentUserSession.role.toUpperCase()}`);
  }
}

function logoutSession() {
  if (window.supabaseService && window.supabaseService.isConnected()) {
    window.supabaseService.signOut();
  }
  switchTestRole('guest');
}

// Modal do Sino de Notificações
function openNotificationsModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-frevo-orange/15 text-frevo-orange flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
          <h3 class="font-display font-bold text-lg text-ink">Notificações</h3>
        </div>
        <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">3 Novas</span>
      </div>

      <div class="space-y-2.5 max-h-64 overflow-y-auto pr-1">
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-start gap-2.5">
          <div class="w-2 h-2 rounded-full bg-frevo-orange mt-1.5 flex-shrink-0"></div>
          <div>
            <strong class="text-ink text-xs block font-bold">Nova Partitura Disponível!</strong>
            <p class="text-[11px] text-muted">Maestro Forró publicou o arranjo de "Passo da Fervura".</p>
            <span class="text-[9px] text-gray-400 mt-1 block">Há 2 horas</span>
          </div>
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-start gap-2.5">
          <div class="w-2 h-2 rounded-full bg-frevo-cyan mt-1.5 flex-shrink-0"></div>
          <div>
            <strong class="text-ink text-xs block font-bold">Acerto de Marcha Confirmado</strong>
            <p class="text-[11px] text-muted">Domingo no Recife Antigo às 16h na Praça do Arsenal.</p>
            <span class="text-[9px] text-gray-400 mt-1 block">Há 5 horas</span>
          </div>
        </div>

        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-start gap-2.5">
          <div class="w-2 h-2 rounded-full bg-frevo-green mt-1.5 flex-shrink-0"></div>
          <div>
            <strong class="text-ink text-xs block font-bold">Novo Passo de Frevo</strong>
            <p class="text-[11px] text-muted">Aprenda o passo "Dobradiça" no guia pedagógico.</p>
            <span class="text-[9px] text-gray-400 mt-1 block">Ontem</span>
          </div>
        </div>
      </div>

      <button onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl py-2">
        Fechar Notificações
      </button>
    </div>
  `;

  modal.classList.add('open');
}

// ==============================================================================
// RENDERIZADORES DO APLICATIVO
// ==============================================================================

function switchView(viewName) {
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });
}

function renderStories() {
  const container = document.getElementById('stories-list');
  if (!container) return;

  container.innerHTML = DB.artists.map(artist => `
    <div onclick="openStoryModal('${artist.name}', '${artist.avatar_url}', '${artist.genre}')" class="story-item">
      <div class="story-ring">
        <img src="${artist.avatar_url}" alt="${artist.name}" class="story-avatar" />
      </div>
      <span class="story-label">${artist.name}</span>
    </div>
  `).join('');
}

function renderFeed() {
  const container = document.getElementById('feed-list');
  if (!container) return;

  container.innerHTML = DB.posts.map(post => `
    <article class="feed-card-immersive">
      <div class="feed-card-media">
        <img src="${post.image}" alt="${post.title}" loading="lazy" />

        <!-- Top-Left Floating Author Pill -->
        <div class="floating-author-pill" onclick="openStoryModal('${post.author}', '${post.avatar}', '${post.location}')">
          <img src="${post.avatar}" alt="${post.author}" />
          <div class="floating-author-info">
            <span class="name">${post.author}</span>
            <span class="sub">${post.location.split(',')[0]}</span>
          </div>
        </div>

        <!-- Top-Right Floating Bookmark Button -->
        <button onclick="toggleSave('${post.id}')" class="floating-save-btn ${post.is_saved ? 'is-saved' : ''}" aria-label="Salvar Publicação">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${post.is_saved ? '#FF8A00' : 'none'}" stroke="${post.is_saved ? '#FF8A00' : 'currentColor'}" stroke-width="2.2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>

        <!-- Bottom Floating Actions Bar -->
        <div class="floating-actions-bar">
          <div class="flex items-center gap-2">
            <button onclick="openCommentsModal('${post.id}')" class="floating-circle-btn" aria-label="Comentários">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </button>
            <button onclick="sharePost('${post.id}')" class="floating-circle-btn" aria-label="Compartilhar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          <button onclick="toggleLike('${post.id}')" class="floating-like-btn" aria-label="Curtir">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${post.is_liked ? '#F0442E' : '#F0442E'}" stroke="#F0442E" stroke-width="${post.is_liked ? '0' : '2'}">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="text-xs font-bold text-ink">${post.likes}</span>
          </button>
        </div>
      </div>

      <div class="feed-card-caption-container">
        <div class="flex items-center justify-between mb-1.5">
          <h4 class="font-bold text-xs text-ink">${post.title}</h4>
          <span class="text-[10px] text-muted">${post.time_ago}</span>
        </div>
        <p class="text-xs text-ink-soft leading-relaxed mb-2">${post.content}</p>
        <div class="flex flex-wrap gap-1.5">
          ${post.tags.map(t => `<span class="badge bg-[#16C7D9]/15 text-[#127F8B] text-[10px] font-bold">#${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function toggleLike(postId) {
  const post = DB.posts.find(p => p.id === postId);
  if (post) {
    post.is_liked = !post.is_liked;
    post.likes += post.is_liked ? 1 : -1;
    renderFeed();
  }
}

function toggleSave(postId) {
  const post = DB.posts.find(p => p.id === postId);
  if (post) {
    post.is_saved = !post.is_saved;
    renderFeed();
    renderProfileGallery();
  }
}

// Favoritar Artista (Apenas Usuários com Conta)
function toggleFavoriteArtist(artistId) {
  if (currentUserSession.role === 'guest') {
    alert('Crie uma conta ou faça login para favoritar seus artistas preferidos no FrevAI!');
    openSessionModal();
    return;
  }

  const idx = currentUserSession.favorites.indexOf(artistId);
  if (idx > -1) {
    currentUserSession.favorites.splice(idx, 1);
  } else {
    currentUserSession.favorites.push(artistId);
  }

  saveCurrentSession();
  renderArtists();
}

// Busca Global Estilo Apple Music
function handleGlobalSearch(event) {
  const query = event.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('artists-search-results-container');
  if (!resultsContainer) return;

  if (!query) {
    resultsContainer.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-ink">Artistas em Destaque</span>
          <span class="text-[11px] text-muted">${DB.artists.length} Cadastrados</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="artists-grid"></div>
      </div>
    `;
    renderArtists();
    return;
  }

  const filteredArtists = DB.artists.filter(a => 
    a.name.toLowerCase().includes(query) || 
    a.genre.toLowerCase().includes(query) ||
    a.bio.toLowerCase().includes(query)
  );

  const filteredSongs = DB.songs.filter(s =>
    s.title.toLowerCase().includes(query) ||
    s.artist.toLowerCase().includes(query) ||
    s.genre.toLowerCase().includes(query)
  );

  resultsContainer.innerHTML = `
    <div class="space-y-4">
      <div>
        <h4 class="text-xs font-bold text-ink mb-2">Artistas Encontrados (${filteredArtists.length})</h4>
        ${filteredArtists.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${filteredArtists.map(artist => `
              <div class="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm">
                <div class="flex items-center gap-3">
                  <img src="${artist.avatar_url}" alt="${artist.name}" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                  <div class="min-w-0">
                    <h4 class="font-bold text-xs text-ink truncate">${artist.name}</h4>
                    <span class="badge bg-frevo-pink/15 text-frevo-pink text-[10px] font-bold">${artist.genre}</span>
                  </div>
                </div>
                <button onclick="toggleFavoriteArtist('${artist.id}')" class="btn-fav-artist ${currentUserSession.favorites.includes(artist.id) ? 'favorited' : ''}" title="Favoritar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </button>
              </div>
            `).join('')}
          </div>
        ` : `<p class="text-xs text-muted">Nenhum artista com este termo.</p>`}
      </div>

      <div>
        <h4 class="text-xs font-bold text-ink mb-2">Partituras & Músicas (${filteredSongs.length})</h4>
        ${filteredSongs.length > 0 ? `
          <div class="space-y-2">
            ${filteredSongs.map(song => `
              <div class="bg-white border border-gray-200 rounded-2xl p-3.5 flex items-center justify-between shadow-sm">
                <div>
                  <h5 class="font-bold text-xs text-ink">${song.title}</h5>
                  <span class="text-[11px] text-muted">${song.genre} • ${song.artist}</span>
                </div>
                <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan text-xs py-1 px-3 h-7 rounded-xl font-bold">
                  Ver Obra
                </button>
              </div>
            `).join('')}
          </div>
        ` : `<p class="text-xs text-muted">Nenhuma partitura correspondente.</p>`}
      </div>
    </div>
  `;
}

function renderArtists() {
  const container = document.getElementById('artists-grid');
  if (!container) return;

  container.innerHTML = DB.artists.map(artist => {
    const isFav = currentUserSession.favorites.includes(artist.id);
    return `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow relative">
        <button onclick="toggleFavoriteArtist('${artist.id}')" class="btn-fav-artist absolute top-3 right-3 ${isFav ? 'favorited' : ''}" title="Favoritar Artista">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>

        <div class="story-ring p-1 mb-2">
          <img src="${artist.avatar_url}" alt="${artist.name}" class="w-16 h-16 rounded-full object-cover border-2 border-white" />
        </div>
        <div>
          <h3 class="font-display font-bold text-sm text-ink">${artist.name}</h3>
          <span class="text-[11px] text-muted block mb-1">${artist.handle}</span>
          <span class="badge bg-frevo-pink/15 text-frevo-pink font-bold text-[10px]">${artist.genre}</span>
        </div>
        <p class="text-xs text-ink-soft line-clamp-2 my-2.5 leading-relaxed">${artist.bio}</p>

        <button onclick="switchView('artist-panel')" class="btn btn-primary w-full text-xs h-8 rounded-xl font-bold mt-1">
          Acessar Perfil
        </button>
      </div>
    `;
  }).join('');
}

function renderSongs() {
  const container = document.getElementById('songs-grid');
  if (!container) return;

  container.innerHTML = DB.songs.map(song => `
    <div class="bg-white border border-line-strong rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="badge bg-frevo-cyan/20 text-ink text-xs font-bold">${song.genre}</span>
          <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
        </div>
        <h3 class="font-display font-bold text-xl text-ink">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange mb-2">${song.artist}</p>
        <p class="text-xs text-ink-soft mb-3 leading-relaxed">${song.description}</p>
        
        <div class="p-3 rounded-xl bg-surface-soft border border-line text-xs font-mono text-ink-soft whitespace-pre-line max-h-24 overflow-y-auto mb-3">
          ${song.lyrics}
        </div>
      </div>

      <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan w-full text-xs font-bold py-2.5 rounded-xl shadow-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18V5L21 3V16"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
        Baixar / Visualizar Partitura Digital
      </button>
    </div>
  `).join('');
}

function renderSteps() {
  const container = document.getElementById('steps-grid');
  if (!container) return;

  const canManage = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';

  container.innerHTML = DB.steps.map(step => `
    <div class="bg-white border border-line-strong rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm relative">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="badge bg-frevo-green/20 text-ink text-xs font-bold">${step.difficulty}</span>
          <span class="text-xs text-muted font-semibold">${step.category}</span>
        </div>
        <h3 class="font-display font-bold text-xl text-ink mb-1.5">Passo: ${step.name}</h3>
        <p class="text-xs text-ink-soft leading-relaxed mb-3">${step.description}</p>
        
        <div class="p-3 rounded-xl bg-surface-soft border border-line text-xs space-y-1">
          <span class="font-bold text-[10px] text-muted uppercase tracking-wider block">Como Executar:</span>
          <div class="whitespace-pre-line text-xs font-medium leading-relaxed">${step.instructions}</div>
        </div>
      </div>

      ${canManage ? `
        <div class="flex gap-2 pt-1 border-t border-gray-100">
          <button onclick="deleteStep('${step.id}')" class="text-xs text-frevo-red font-bold hover:underline">
            Excluir Passo
          </button>
        </div>
      ` : ''}
    </div>
  `).join('');
}

function deleteStep(stepId) {
  if (confirm('Deseja realmente excluir este passo?')) {
    DB.steps = DB.steps.filter(s => s.id !== stepId);
    renderSteps();
    renderAdminCMS();
  }
}

function openNewStepModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    alert('Apenas Artistas e Administradores podem cadastrar passos de frevo.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Cadastrar Novo Passo</h3>
      </div>

      <form onsubmit="submitNewStep(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Passo</label>
          <input type="text" id="new-step-name" required placeholder="Ex: Parafuso Invertido" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nível de Dificuldade</label>
          <select id="new-step-difficulty" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Descrição</label>
          <input type="text" id="new-step-desc" required placeholder="Breve resumo da movimentação..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Instruções Passo a Passo</label>
          <textarea id="new-step-instructions" rows="3" required placeholder="1. Posição inicial...\n2. Salto e giro..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl">Salvar Passo</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewStep(e) {
  e.preventDefault();
  const name = document.getElementById('new-step-name').value;
  const difficulty = document.getElementById('new-step-difficulty').value;
  const description = document.getElementById('new-step-desc').value;
  const instructions = document.getElementById('new-step-instructions').value;

  DB.steps.push({
    id: `st-${Date.now()}`,
    name,
    difficulty,
    category: 'Tradicional',
    description,
    instructions,
    author_role: currentUserSession.role
  });

  closeModal();
  renderSteps();
  renderAdminCMS();
  alert('Novo passo cadastrado com sucesso!');
}

function renderHistory() {
  const container = document.getElementById('history-timeline');
  if (!container) return;

  container.innerHTML = DB.history.map(item => `
    <div class="relative pl-6 pb-6 border-l-2 border-frevo-yellow last:border-l-0">
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-frevo-yellow border-2 border-paper shadow-sm"></div>
      <div class="bg-white border border-line-strong rounded-2xl p-4 space-y-2 shadow-sm">
        <span class="badge bg-frevo-yellow/40 text-ink text-[11px] font-bold">${item.period}</span>
        <h3 class="font-display font-bold text-lg text-ink">${item.title}</h3>
        <p class="text-xs text-ink-soft leading-relaxed">${item.content}</p>
        <div class="pt-2 text-[11px] text-muted border-t border-line">
          <strong>Fonte:</strong> ${item.source}
        </div>
      </div>
    </div>
  `).join('');
}

function renderMap() {
  const container = document.getElementById('map-points-list');
  if (!container) return;

  container.innerHTML = DB.mapPoints.map(point => `
    <div class="map-point-card space-y-3">
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="badge bg-frevo-orange/20 text-ink text-[11px] font-bold">${point.category}</span>
          <span class="text-[10px] text-muted font-semibold">Ponto Histórico</span>
        </div>
        <h3 class="font-display font-bold text-base text-ink">${point.name}</h3>
        <p class="text-xs text-muted font-medium mb-1">${point.address}</p>
        <p class="text-xs text-ink-soft leading-relaxed">${point.description}</p>
      </div>

      <button onclick="toggleMapEmbed('${point.id}')" class="btn btn-outline text-xs w-full rounded-xl flex items-center justify-center gap-1.5 py-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
        <span id="map-toggle-text-${point.id}">Ver Mapa no App ▼</span>
      </button>

      <div id="map-embed-${point.id}" class="map-embed-container">
        <iframe 
          title="Mapa de ${point.name}"
          loading="lazy"
          src="https://maps.google.com/maps?q=${point.coords[0]},${point.coords[1]}&hl=pt-BR&z=16&output=embed"
          allowfullscreen>
        </iframe>
        
        <a href="https://maps.google.com/?q=${point.coords[0]},${point.coords[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-xs w-full rounded-xl mt-2 flex items-center justify-center gap-1.5 py-2.5 shadow-sm">
          <span>Abrir Rota no Google Maps</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  `).join('');
}

function toggleMapEmbed(pointId) {
  const container = document.getElementById(`map-embed-${pointId}`);
  const toggleText = document.getElementById(`map-toggle-text-${pointId}`);
  if (!container) return;

  const isOpen = container.classList.toggle('open');
  if (toggleText) {
    toggleText.innerText = isOpen ? 'Ocultar Mapa no App ▲' : 'Ver Mapa no App ▼';
  }
}

// ==============================================================================
// PERFIL DO ARTISTA (PARTITURAS PRÓPRIAS & SALVOS)
// ==============================================================================
let currentProfileTab = 'scores';

function switchProfileTab(tabName, btnElement) {
  currentProfileTab = tabName;
  document.querySelectorAll('.profile-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderProfileGallery();
}

function renderProfileGallery() {
  const container = document.getElementById('profile-gallery-container');
  if (!container) return;

  const isArtistOrAdmin = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';

  if (currentProfileTab === 'scores') {
    container.innerHTML = `
      <div class="space-y-3 pb-6">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-ink">Partituras & Obras Publicadas (${DB.songs.length})</span>
          ${isArtistOrAdmin ? `
            <button onclick="openSubmitSongModal()" class="text-xs font-bold text-frevo-orange hover:underline">+ Nova Obra</button>
          ` : ''}
        </div>
        ${DB.songs.map(song => `
          <div class="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div class="space-y-0.5">
              <div class="flex items-center gap-1.5">
                <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-[10px] font-bold">${song.genre}</span>
                <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
              </div>
              <h4 class="font-bold text-xs text-ink leading-tight">${song.title}</h4>
              <p class="text-[11px] text-muted line-clamp-1">${song.description}</p>
            </div>
            <div class="flex items-center gap-1.5">
              <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan text-xs py-1.5 px-3 h-8 rounded-xl font-bold flex-shrink-0">
                Baixar
              </button>
              ${isArtistOrAdmin ? `
                <button onclick="deleteSong('${song.id}')" class="p-1.5 text-gray-400 hover:text-frevo-red" title="Excluir">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    // Aba 2: Itens Salvos
    const savedPosts = DB.posts.filter(p => p.is_saved);
    container.innerHTML = `
      <div class="space-y-3 pb-6">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-ink">Publicações Salvas (${savedPosts.length})</span>
        </div>
        ${savedPosts.length > 0 ? savedPosts.map(post => `
          <div class="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-sm">
            <div class="flex items-center gap-3 min-w-0">
              <img src="${post.image}" alt="${post.title}" class="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
              <div class="min-w-0">
                <h4 class="font-bold text-xs text-ink truncate">${post.title}</h4>
                <span class="text-[11px] text-muted">${post.author}</span>
              </div>
            </div>
            <button onclick="toggleSave('${post.id}')" class="btn btn-outline text-xs px-2.5 py-1 rounded-xl text-frevo-red hover:bg-red-50 font-bold whitespace-nowrap">
              Remover
            </button>
          </div>
        `).join('') : `
          <div class="p-8 text-center bg-white rounded-2xl border border-gray-200">
            <p class="text-xs text-muted">Nenhuma publicação salva no momento.</p>
          </div>
        `}
      </div>
    `;
  }
}

function deleteSong(songId) {
  if (confirm('Deseja realmente excluir esta partitura?')) {
    DB.songs = DB.songs.filter(s => s.id !== songId);
    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.deleteSong(songId);
    }
    renderProfileGallery();
    renderSongs();
    renderAdminCMS();
  }
}

// ==============================================================================
// PAINEL DE GESTÃO (CMS COMPLETO PARA ADMIN)
// ==============================================================================
let currentAdminTab = 'artists';

function switchAdminTab(tab, btnElement) {
  currentAdminTab = tab;
  document.querySelectorAll('.admin-tab-pill').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderAdminCMS();
}

function renderAdminCMS() {
  const container = document.getElementById('admin-cms-content');
  if (!container) return;

  if (currentAdminTab === 'artists') {
    // 1. Gestão e Aprovação de Artistas
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Fila de Aprovação de Artistas</h3>
            <p class="text-[11px] text-muted">Aprove ou recuse novos cadastros com notificação por e-mail</p>
          </div>
          <button onclick="openNewArtistModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Artista</button>
        </div>

        <div class="space-y-2.5">
          ${DB.artists.map(artist => `
            <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
              <div class="flex items-center gap-2.5 min-w-0">
                <img src="${artist.avatar_url}" alt="${artist.name}" class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div class="min-w-0">
                  <strong class="text-ink text-xs block truncate">${artist.name}</strong>
                  <span class="text-[11px] text-muted block">${artist.email || 'sem email'}</span>
                  <span class="badge ${artist.is_approved ? 'bg-frevo-green/20 text-ink' : 'bg-frevo-orange/20 text-frevo-orange'} text-[10px] font-bold">
                    ${artist.is_approved ? 'Aprovado' : 'Aguardando Moderação'}
                  </span>
                </div>
              </div>

              <div class="flex gap-1.5 flex-shrink-0">
                ${!artist.is_approved ? `
                  <button onclick="openDecisionEmailModal('${artist.id}', true)" class="btn btn-green text-[11px] px-2.5 py-1 rounded-xl font-bold">
                    Aprovar
                  </button>
                  <button onclick="openDecisionEmailModal('${artist.id}', false)" class="btn btn-destructive text-[11px] px-2.5 py-1 rounded-xl font-bold">
                    Recusar
                  </button>
                ` : `
                  <button onclick="openDecisionEmailModal('${artist.id}', false)" class="btn btn-outline text-[11px] px-2 py-1 rounded-xl font-bold text-frevo-red">
                    Suspender
                  </button>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'posts') {
    // 2. Acervo de Posts Separados por Data / Mês / Ano
    const sortedPosts = [...DB.posts].sort((a, b) => new Date(b.created_at || Date.now()) - new Date(a.created_at || Date.now()));

    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Acervo de Posts Cronológico</h3>
            <p class="text-[11px] text-muted">Organizado por Data / Mês / Ano com edição e exclusão</p>
          </div>
          <button onclick="openNewPostModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Post</button>
        </div>

        <div class="space-y-2.5">
          ${sortedPosts.map(post => {
            const dateObj = new Date(post.created_at || Date.now());
            const formattedDate = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
            return `
              <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
                <div class="min-w-0">
                  <span class="badge bg-gray-200 text-ink text-[10px] font-bold">${formattedDate}</span>
                  <strong class="text-ink text-xs block truncate mt-1">${post.title}</strong>
                  <span class="text-[11px] text-muted">${post.author} • ${post.likes} curtidas</span>
                </div>
                <div class="flex gap-1.5 flex-shrink-0">
                  <button onclick="openEditPostModal('${post.id}')" class="btn btn-outline text-[11px] px-2 py-1 rounded-xl font-bold">
                    Editar
                  </button>
                  <button onclick="deletePost('${post.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                    Excluir
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'map') {
    // 3. Gestão do Mapa Cultural
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Locais do Mapa Cultural</h3>
            <p class="text-[11px] text-muted">Gerenciamento de pontos de interesse</p>
          </div>
          <button onclick="openNewMapPointModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Local</button>
        </div>

        <div class="space-y-2.5">
          ${DB.mapPoints.map(point => `
            <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <strong class="text-ink text-xs block truncate">${point.name}</strong>
                <span class="text-[11px] text-muted">${point.category} • ${point.address}</span>
              </div>
              <button onclick="deleteMapPoint('${point.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                Excluir
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'steps') {
    // 4. Gestão de Passos
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Catálogo de Passos de Frevo</h3>
            <p class="text-[11px] text-muted">Passos técnicos e pedagógicos</p>
          </div>
          <button onclick="openNewStepModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Passo</button>
        </div>

        <div class="space-y-2.5">
          ${DB.steps.map(step => `
            <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
              <div>
                <strong class="text-ink text-xs block">${step.name}</strong>
                <span class="text-[11px] text-muted">${step.difficulty} • ${step.category}</span>
              </div>
              <button onclick="deleteStep('${step.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                Excluir
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentAdminTab === 'history') {
    // 5. Gestão de História
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h3 class="font-display font-bold text-sm text-ink">Linha do Tempo Histórica</h3>
            <p class="text-[11px] text-muted">Documentos e marcos temporais</p>
          </div>
          <button onclick="openNewHistoryModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Novo Marco</button>
        </div>

        <div class="space-y-2.5">
          ${DB.history.map(item => `
            <div class="p-3 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
              <div>
                <span class="badge bg-frevo-yellow/30 text-ink text-[10px] font-bold">${item.period}</span>
                <strong class="text-ink text-xs block mt-1">${item.title}</strong>
              </div>
              <button onclick="deleteHistory('${item.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                Excluir
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Modal de Decisão de Aprovação/Recusa de Artista com Disparo de E-mail
function openDecisionEmailModal(artistId, isApprove) {
  const artist = DB.artists.find(a => a.id === artistId);
  if (!artist) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const actionText = isApprove ? 'Aprovação' : 'Recusa / Suspensão';
  const defaultSubject = isApprove ? 'FrevAI: Sua conta de Artista foi Aprovada com sucesso!' : 'FrevAI: Atualização sobre a sua solicitação de Artista';
  const defaultBody = isApprove ? 
    `Prezado(a) ${artist.name},\n\nParabéns! Sua solicitação de cadastro como Artista/Fazedor de Cultura na plataforma FrevAI foi APROVADA pelo comitê gestor.\n\nVocê já pode publicar suas partituras, gerenciar seus passos e enriquecer a memória do nosso Frevo.` :
    `Prezado(a) ${artist.name},\n\nInformamos que sua solicitação de cadastro como Artista necessita de ajustes ou foi indeferida pelo comitê gestor. Entre em contato para mais detalhes.`;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">${actionText} de Artista</h3>
          <p class="text-[11px] text-muted">Disparo de e-mail de notificação oficial</p>
        </div>
        <span class="badge ${isApprove ? 'bg-frevo-green/20 text-ink' : 'bg-frevo-red/20 text-frevo-red'} text-[10px] font-bold">
          ${isApprove ? 'APROVADO' : 'RECUSADO'}
        </span>
      </div>

      <div class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Destinatário</label>
          <input type="text" readonly value="${artist.name} <${artist.email}>" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-gray-100 text-ink font-mono" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Assunto do E-mail</label>
          <input type="text" id="email-subject-input" value="${defaultSubject}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Mensagem Enviada</label>
          <textarea id="email-body-input" rows="5" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none leading-relaxed">${defaultBody}</textarea>
        </div>
      </div>

      <div class="flex gap-2 pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
        <button type="button" onclick="confirmArtistDecision('${artist.id}', ${isApprove})" class="btn ${isApprove ? 'btn-green' : 'btn-destructive'} flex-1 text-xs rounded-xl shadow-md font-bold">
          Confirmar & Disparar E-mail
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function confirmArtistDecision(artistId, isApprove) {
  const artist = DB.artists.find(a => a.id === artistId);
  if (artist) {
    artist.is_approved = isApprove;
    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.updateArtistApproval(artistId, isApprove);
    }
  }

  closeModal();
  renderAdminCMS();
  renderArtists();
  alert(`Decisão registrada com sucesso! Notificação enviada para: ${artist.email}`);
}

function deletePost(postId) {
  if (confirm('Deseja realmente excluir esta publicação do feed?')) {
    DB.posts = DB.posts.filter(p => p.id !== postId);
    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.deletePost(postId);
    }
    renderFeed();
    renderAdminCMS();
  }
}

function deleteMapPoint(id) {
  if (confirm('Deseja realmente excluir este ponto do mapa?')) {
    DB.mapPoints = DB.mapPoints.filter(m => m.id !== id);
    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.deleteMapPoint(id);
    }
    renderMap();
    renderAdminCMS();
  }
}

function deleteHistory(id) {
  if (confirm('Deseja excluir este marco histórico?')) {
    DB.history = DB.history.filter(h => h.id !== id);
    renderHistory();
    renderAdminCMS();
  }
}

// Modal de Criação de Post no Feed
function openNewPostModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Publicar Nova Notícia no Feed</h3>
      </div>

      <form onsubmit="submitNewPost(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título</label>
          <input type="text" id="new-post-title" required placeholder="Ex: Abertura Oficial do Carnaval" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Autor / Responsável</label>
          <input type="text" id="new-post-author" required value="${currentUserSession.name}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">URL da Foto de Capa</label>
          <input type="url" id="new-post-image" required value="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo da Notícia</label>
          <textarea id="new-post-content" rows="4" required placeholder="Escreva a notícia completa..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Tags (separadas por vírgula)</label>
          <input type="text" id="new-post-tags" placeholder="Frevo, Carnaval, Recife" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl font-bold">Publicar no Feed</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewPost(e) {
  e.preventDefault();
  const title = document.getElementById('new-post-title').value;
  const author = document.getElementById('new-post-author').value;
  const image = document.getElementById('new-post-image').value;
  const content = document.getElementById('new-post-content').value;
  const tags = document.getElementById('new-post-tags').value.split(',').map(t => t.trim()).filter(Boolean);

  const newPost = {
    id: `p-${Date.now()}`,
    author: author || 'FrevAI Notícias',
    handle: 'frevai',
    avatar: currentUserSession.avatar,
    image,
    location: 'Recife, PE',
    type: 'news',
    title,
    content,
    tags: tags.length ? tags : ['CulturaPE', 'Frevo'],
    likes: 0,
    is_liked: false,
    is_saved: false,
    time_ago: 'AGORA',
    created_at: new Date().toISOString(),
    comments: []
  };

  DB.posts.unshift(newPost);
  if (window.supabaseService && window.supabaseService.isConnected()) {
    window.supabaseService.createPost(newPost);
  }

  closeModal();
  renderFeed();
  renderAdminCMS();
  alert('Notícia publicada com sucesso!');
}

function openEditPostModal(postId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Editar Notícia</h3>
      </div>

      <form onsubmit="saveEditPost(event, '${post.id}')" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título</label>
          <input type="text" id="edit-post-title" value="${post.title}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo</label>
          <textarea id="edit-post-content" rows="4" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">${post.content}</textarea>
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl font-bold">Salvar Alterações</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function saveEditPost(e, postId) {
  e.preventDefault();
  const post = DB.posts.find(p => p.id === postId);
  if (post) {
    post.title = document.getElementById('edit-post-title').value;
    post.content = document.getElementById('edit-post-content').value;
    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.updatePost(postId, post);
    }
  }

  closeModal();
  renderFeed();
  renderAdminCMS();
  alert('Publicação atualizada com sucesso!');
}

function openNewMapPointModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Adicionar Ponto ao Mapa</h3>
      </div>

      <form onsubmit="submitNewMapPoint(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Local</label>
          <input type="text" id="new-map-name" required placeholder="Ex: Sede do Galo da Madrugada" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Categoria</label>
          <input type="text" id="new-map-cat" required placeholder="Agremiação / Polo / Museu" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Endereço Completo</label>
          <input type="text" id="new-map-addr" required placeholder="Rua da Concórdia, Recife - PE" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Descrição</label>
          <textarea id="new-map-desc" rows="3" required placeholder="História e relevância cultural..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl font-bold">Salvar Ponto</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewMapPoint(e) {
  e.preventDefault();
  const name = document.getElementById('new-map-name').value;
  const category = document.getElementById('new-map-cat').value;
  const address = document.getElementById('new-map-addr').value;
  const description = document.getElementById('new-map-desc').value;

  const newPt = {
    id: `m-${Date.now()}`,
    name,
    category,
    address,
    description,
    coords: [-8.0631, -34.8711]
  };

  DB.mapPoints.push(newPt);
  if (window.supabaseService && window.supabaseService.isConnected()) {
    window.supabaseService.createMapPoint(newPt);
  }

  closeModal();
  renderMap();
  renderAdminCMS();
  alert('Novo ponto histórico adicionado ao mapa!');
}

function openNewHistoryModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Adicionar Marco Histórico</h3>
      </div>

      <form onsubmit="submitNewHistory(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título do Marco</label>
          <input type="text" id="new-hist-title" required placeholder="Ex: Criação da Troça Pitombeira" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Período / Ano</label>
          <input type="text" id="new-hist-period" required placeholder="Ex: Carnaval de 1947" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo Histórico</label>
          <textarea id="new-hist-content" rows="3" required placeholder="Relato documentado..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Fonte / Acervo</label>
          <input type="text" id="new-hist-source" required placeholder="Fundação Joaquim Nabuco" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl font-bold">Salvar Marco</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewHistory(e) {
  e.preventDefault();
  const title = document.getElementById('new-hist-title').value;
  const period = document.getElementById('new-hist-period').value;
  const content = document.getElementById('new-hist-content').value;
  const source = document.getElementById('new-hist-source').value;

  DB.history.push({
    id: `h-${Date.now()}`,
    title,
    period,
    content,
    source
  });

  closeModal();
  renderHistory();
  renderAdminCMS();
  alert('Marco histórico adicionado com sucesso!');
}

function openNewArtistModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Cadastrar Novo Artista</h3>
      </div>

      <form onsubmit="submitNewArtist(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Artista / Orquestra</label>
          <input type="text" id="new-artist-name" required placeholder="Ex: Maestro Duda" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Gênero / Estilo</label>
          <input type="text" id="new-artist-genre" required placeholder="Frevo de Rua / Frevo Canção" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail de Contato</label>
          <input type="email" id="new-artist-email" required placeholder="artista@cultura.pe.gov.br" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Mini-Biografia</label>
          <textarea id="new-artist-bio" rows="3" required placeholder="Histórico cultural do artista..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl font-bold">Cadastrar Artista</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewArtist(e) {
  e.preventDefault();
  const name = document.getElementById('new-artist-name').value;
  const genre = document.getElementById('new-artist-genre').value;
  const email = document.getElementById('new-artist-email').value;
  const bio = document.getElementById('new-artist-bio').value;

  const newArt = {
    id: `a-${Date.now()}`,
    name,
    handle: '@' + name.toLowerCase().replace(/[^a-z0-9]+/g, ''),
    genre,
    bio,
    avatar_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    email,
    phone: '',
    is_approved: true,
    has_story: false
  };

  DB.artists.push(newArt);

  closeModal();
  renderArtists();
  renderAdminCMS();
  alert('Artista cadastrado e ativado no sistema!');
}

// ==============================================================================
// MODAIS DE COMPARTILHAMENTO, COMENTÁRIOS E PARTITURAS
// ==============================================================================

function sharePost(postId) {
  const post = DB.posts.find(p => p.id === postId) || { title: 'FrevAI - Cultura do Frevo', id: postId || 'feed' };
  const shareUrl = window.location.origin + window.location.pathname + '#post-' + post.id;
  const shareText = `Confira "${post.title}" no FrevAI: ${shareUrl}`;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Compartilhar Publicação</h3>
          <p class="text-[11px] text-muted line-clamp-1">${post.title}</p>
        </div>
        <div class="w-8 h-8 rounded-xl bg-frevo-orange/15 text-frevo-orange flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2.5 pt-1">
        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-all group">
          <div class="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform mb-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span class="text-[11px] font-bold text-ink">WhatsApp</span>
        </a>

        <a href="https://instagram.com/direct/inbox/" target="_blank" rel="noopener noreferrer" onclick="copyToClipboard('${shareUrl}', 'Link copiado para colar no Direct!')" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C]/20 transition-all group">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#E1306C] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform mb-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <span class="text-[11px] font-bold text-ink">Direct</span>
        </a>

        <a href="https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#0084FF]/10 text-[#0084FF] hover:bg-[#0084FF]/20 transition-all group">
          <div class="w-10 h-10 rounded-full bg-[#0084FF] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform mb-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span class="text-[11px] font-bold text-ink">Messenger</span>
        </a>
      </div>

      <div class="pt-2">
        <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1.5">Link Direto da Publicação</label>
        <div class="flex gap-2">
          <input type="text" id="share-link-input" readonly value="${shareUrl}" class="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink font-mono select-all focus:outline-none" />
          <button id="btn-copy-share-link" onclick="copyShareLink('${shareUrl}')" class="btn btn-primary text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span id="copy-btn-text">Copiar</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function copyShareLink(url) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      const btnText = document.getElementById('copy-btn-text');
      if (btnText) {
        btnText.innerText = 'Copiado!';
        setTimeout(() => {
          if (btnText) btnText.innerText = 'Copiar';
        }, 2000);
      }
    }).catch(() => {
      prompt('Copie o link abaixo:', url);
    });
  } else {
    prompt('Copie o link abaixo:', url);
  }
}

function copyToClipboard(text, message) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert(message || 'Copiado para a área de transferência!');
    });
  }
}

function openCommentsModal(postId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Comentários (${post.comments.length})</h3>
        <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">${post.title}</span>
      </div>
      <div class="space-y-2.5 max-h-60 overflow-y-auto pr-1">
        ${post.comments.length > 0 ? post.comments.map(c => `
          <div class="p-3 bg-surface-soft rounded-2xl text-xs border border-gray-100">
            <strong class="text-ink block mb-0.5">${c.user}</strong>
            <span class="text-ink-soft leading-relaxed">${c.text}</span>
          </div>
        `).join('') : '<p class="text-xs text-muted py-4 text-center">Seja o primeiro a comentar!</p>'}
      </div>
      
      ${currentUserSession.role === 'guest' ? `
        <div class="p-3 bg-amber-50 rounded-2xl border border-amber-100 text-center space-y-1.5">
          <p class="text-xs text-amber-900 font-bold">Deseja participar da conversa?</p>
          <p class="text-[11px] text-amber-700">Faça login ou crie uma conta gratuita para comentar.</p>
          <button onclick="openSessionModal()" class="btn btn-primary text-xs py-1.5 px-4 rounded-xl font-bold">
            Entrar / Criar Conta
          </button>
        </div>
      ` : `
        <div class="flex gap-2 pt-1">
          <input type="text" id="new-comment-input" placeholder="Adicionar comentário como ${currentUserSession.name}..." class="flex-1 px-3 py-2.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          <button onclick="addComment('${post.id}')" class="btn btn-primary text-xs rounded-xl px-4 font-bold">Publicar</button>
        </div>
      `}
    </div>
  `;

  modal.classList.add('open');
}

function addComment(postId) {
  if (currentUserSession.role === 'guest') {
    alert('Você precisa estar logado para comentar.');
    openSessionModal();
    return;
  }

  const input = document.getElementById('new-comment-input');
  if (!input || !input.value.trim()) return;

  const post = DB.posts.find(p => p.id === postId);
  if (post) {
    post.comments.push({
      user: currentUserSession.handle.replace('@', '') || currentUserSession.name,
      text: input.value.trim()
    });
    closeModal();
    renderFeed();
  }
}

function openScoreModal(title, artist, songId) {
  const song = DB.songs.find(s => s.id === songId) || { title, artist, downloads_count: 120 };
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="text-center space-y-4">
      <div class="w-14 h-14 rounded-2xl bg-frevo-cyan/20 flex items-center justify-center mx-auto text-frevo-cyan">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18V5L21 3V16"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      </div>
      <div>
        <h3 class="font-display font-bold text-xl text-ink">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange mt-0.5">${song.artist}</p>
        <span class="badge bg-gray-100 text-muted text-[10px] font-mono mt-1 font-bold">${song.downloads_count || 120} downloads registrados</span>
      </div>
      <div class="p-4 bg-surface-soft border border-gray-100 rounded-2xl text-xs text-muted space-y-1.5 text-left">
        <p class="text-ink font-semibold">Acervo Oficial Aberto para Download</p>
        <p>Partitura digitalizada em alta resolução com arranjo para orquestra e sopros.</p>
        <p class="font-mono text-ink text-[11px] pt-1">Formato: PDF Digital</p>
      </div>
      <button onclick="downloadScore('${song.id}')" class="btn btn-cyan w-full text-xs rounded-xl shadow-md py-2.5 font-bold">
        Baixar Partitura Oficial
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function downloadScore(songId) {
  const song = DB.songs.find(s => s.id === songId);
  if (song) {
    song.downloads_count = (song.downloads_count || 120) + 1;
    renderSongs();
    renderProfileGallery();
  }
  alert('Download da partitura iniciado com sucesso!');
  closeModal();
}

function openStoryModal(name, avatar, subtitle) {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div class="text-center space-y-4">
      <div class="story-ring p-1.5 inline-block">
        <img src="${avatar}" alt="${name}" class="w-24 h-24 rounded-full object-cover border-2 border-white" />
      </div>
      <div>
        <h3 class="font-display font-bold text-xl text-ink">${name}</h3>
        <span class="text-xs text-muted">${subtitle}</span>
      </div>
      <div class="p-4 bg-surface-soft rounded-2xl text-xs text-ink leading-relaxed border border-gray-100">
        "O frevo é a pulsação do nosso povo nas ladeiras e no asfalto."
      </div>
      <button onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl">Fechar Story</button>
    </div>
  `;
  modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('global-modal');
  if (modal) modal.classList.remove('open');
}

// ==============================================================================
// MODAL DE EDIÇÃO DE PERFIL E CONTATO
// ==============================================================================
let currentUserProfile = {
  name: 'Maestro & Fazedor de Cultura',
  handle: '@maestro_cultural',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  bio: 'Pesquisador musical e arranjador de orquestra de Frevo de Pernambuco. Preservando a memória sonora das nossas ladeiras.',
  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com/frevocultural' },
    { label: 'Spotify', url: 'https://spotify.com/artist/frevocultural' },
    { label: 'YouTube', url: 'https://youtube.com/@frevocultural' }
  ],
  email: 'maestro.frevo@cultura.pe.gov.br',
  phone: '+55 (81) 99876-5432'
};

function updateProfileUI() {
  const avatarEl = document.getElementById('profile-display-avatar');
  const nameEl = document.getElementById('profile-display-name');
  const handleEl = document.getElementById('profile-display-handle');
  const bioEl = document.getElementById('profile-display-bio');
  const socialsContainer = document.getElementById('profile-display-socials');

  if (avatarEl) avatarEl.src = currentUserProfile.avatar;
  if (nameEl) nameEl.innerText = currentUserProfile.name;
  if (handleEl) handleEl.innerText = currentUserProfile.handle;
  if (bioEl) bioEl.innerText = currentUserProfile.bio;
  
  if (socialsContainer) {
    if (currentUserProfile.socialLinks && currentUserProfile.socialLinks.length > 0) {
      socialsContainer.innerHTML = currentUserProfile.socialLinks.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="badge bg-[#F04FA3]/15 text-[#F04FA3] text-[11px] font-bold hover:bg-[#F04FA3]/25 transition-colors">
          ${s.label || 'Link'}
        </a>
      `).join('');
    } else {
      socialsContainer.innerHTML = '';
    }
  }
}

function openAccountDropdownModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Gerenciar Conta</h3>
          <p class="text-xs text-frevo-orange font-bold">${currentUserProfile.handle}</p>
        </div>
        <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">Opções</span>
      </div>

      <div class="space-y-2">
        <!-- 1. Trocar de Conta -->
        <button onclick="closeModal(); openSessionModal();" class="w-full p-3 rounded-2xl bg-surface-soft hover:bg-gray-100 border border-gray-100 flex items-center justify-between transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-frevo-cyan/15 text-frevo-cyan flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="text-left">
              <h4 class="font-bold text-xs text-ink">Trocar de Conta</h4>
              <p class="text-[11px] text-muted">Acessar com outro e-mail ou alternar usuário</p>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-gray-400">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <!-- 2. Sair da Conta -->
        <button onclick="logoutSession(); closeModal();" class="w-full p-3 rounded-2xl bg-surface-soft hover:bg-gray-100 border border-gray-100 flex items-center justify-between transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gray-200 text-ink-soft flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </div>
            <div class="text-left">
              <h4 class="font-bold text-xs text-ink">Sair da Conta</h4>
              <p class="text-[11px] text-muted">Encerrar sessão com segurança</p>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-gray-400">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <!-- 3. Deletar Conta -->
        <button onclick="confirmDeleteAccount()" class="w-full p-3 rounded-2xl bg-red-50 hover:bg-red-100 border border-red-100 flex items-center justify-between transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-frevo-red/15 text-frevo-red flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
            <div class="text-left">
              <h4 class="font-bold text-xs text-frevo-red">Deletar Conta</h4>
              <p class="text-[11px] text-frevo-red/80">Excluir permanentemente todos os dados</p>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-frevo-red">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div class="pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-outline w-full text-xs rounded-xl py-2 font-bold">
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function confirmDeleteAccount() {
  if (confirm('Tem certeza de que deseja deletar sua conta? Esta ação é irreversível e removerá seus dados salvos do FrevAI.')) {
    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.signOut();
    }
    currentUserProfile = {
      name: 'Visitante',
      handle: '@visitante',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Perfil convidado da plataforma FrevAI.',
      socialLinks: [],
      email: '',
      phone: ''
    };
    switchTestRole('guest');
    updateProfileUI();
    closeModal();
    alert('Sua conta foi removida com sucesso!');
  }
}

function openSettingsModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Configurações</h3>
      </div>

      <div class="space-y-2.5">
        <!-- Notificações -->
        <div class="p-3 bg-surface-soft rounded-2xl flex items-center justify-between border border-gray-100">
          <div>
            <span class="font-bold text-xs text-ink block">Notificações Push</span>
            <span class="text-[10px] text-muted">Avisos de novos passos e apresentações</span>
          </div>
          <input type="checkbox" checked class="w-4 h-4 accent-frevo-orange cursor-pointer" />
        </div>

        <!-- Reprodução de Áudio -->
        <div class="p-3 bg-surface-soft rounded-2xl flex items-center justify-between border border-gray-100">
          <div>
            <span class="font-bold text-xs text-ink block">Prévia Automática de Áudio</span>
            <span class="text-[10px] text-muted">Tocar amostras de partituras ao abrir</span>
          </div>
          <input type="checkbox" checked class="w-4 h-4 accent-frevo-orange cursor-pointer" />
        </div>

        <!-- Alternador de Papel de Teste -->
        <button onclick="closeModal(); openSessionModal();" class="w-full p-3 bg-surface-soft hover:bg-gray-100 rounded-2xl flex items-center justify-between border border-gray-100 transition-colors">
          <div>
            <span class="font-bold text-xs text-ink block">Acessos & Permissões</span>
            <span class="text-[10px] text-muted">Papel atual: ${currentUserSession.role.toUpperCase()}</span>
          </div>
          <span class="text-xs text-frevo-orange font-bold">Alternar</span>
        </button>

        <!-- Limpar Cache Local -->
        <button onclick="localStorage.clear(); alert('Dados locais limpos!'); location.reload();" class="w-full p-3 bg-surface-soft hover:bg-red-50 rounded-2xl flex items-center justify-between border border-gray-100 transition-colors">
          <div>
            <span class="font-bold text-xs text-frevo-red block">Limpar Armazenamento Local</span>
            <span class="text-[10px] text-muted">Restaurar padrões de fábrica do aplicativo</span>
          </div>
          <span class="text-xs text-frevo-red font-bold">Limpar</span>
        </button>
      </div>

      <div class="pt-2">
        <button type="button" onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl py-2.5 font-bold shadow-md">
          Concluído
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

let tempUploadedAvatar = null;

function openEditProfileModal() {
  if (currentUserSession.role === 'guest') {
    alert('Faça login para editar o seu perfil.');
    openSessionModal();
    return;
  }

  tempUploadedAvatar = currentUserProfile.avatar;
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Editar Perfil</h3>
        <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">Artista</span>
      </div>

      <div class="flex flex-col items-center justify-center space-y-2 py-2">
        <div class="relative">
          <img id="edit-avatar-preview" src="${currentUserProfile.avatar}" alt="Preview" class="w-20 h-20 rounded-full object-cover border-2 border-frevo-orange shadow-md" />
          <label for="profile-avatar-file-input" class="absolute bottom-0 right-0 w-7 h-7 bg-ink text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-frevo-orange transition-colors" title="Carregar nova foto">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </label>
        </div>
        <input type="file" id="profile-avatar-file-input" accept="image/*" class="hidden" onchange="handleAvatarFileSelect(event)" />
        <span class="text-[11px] text-muted">Toque no ícone para enviar uma foto do seu aparelho</span>
      </div>

      <form id="edit-profile-form" onsubmit="saveProfileChanges(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Nome de Exibição</label>
          <input type="text" id="edit-name-input" value="${currentUserProfile.name}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Nome de Usuário (@)</label>
          <input type="text" id="edit-handle-input" value="${currentUserProfile.handle}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Mini-Biografia</label>
          <textarea id="edit-bio-input" rows="2" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange leading-relaxed">${currentUserProfile.bio}</textarea>
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Links de Redes Sociais</label>
            <button type="button" onclick="addSocialLinkField()" class="text-[11px] font-bold text-frevo-orange hover:underline">+ Adicionar Link</button>
          </div>
          <div id="social-links-inputs-container" class="space-y-2">
            ${currentUserProfile.socialLinks.map((s, idx) => `
              <div class="flex gap-1.5 items-center social-link-row" data-index="${idx}">
                <input type="text" placeholder="Nome (ex: Instagram)" value="${s.label}" class="w-1/3 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none social-label-field" />
                <input type="url" placeholder="https://..." value="${s.url}" class="flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none social-url-field" />
                <button type="button" onclick="removeSocialLinkField(this)" class="p-1.5 text-gray-400 hover:text-frevo-red">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 pt-1">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">E-mail de Contato</label>
            <input type="email" id="edit-email-input" value="${currentUserProfile.email}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Telefone / WhatsApp</label>
            <input type="tel" id="edit-phone-input" value="${currentUserProfile.phone}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">Salvar Perfil</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function handleAvatarFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    tempUploadedAvatar = e.target.result;
    const previewEl = document.getElementById('edit-avatar-preview');
    if (previewEl) previewEl.src = tempUploadedAvatar;
  };
  reader.readAsDataURL(file);
}

function addSocialLinkField() {
  const container = document.getElementById('social-links-inputs-container');
  if (!container) return;

  const div = document.createElement('div');
  div.className = 'flex gap-1.5 items-center social-link-row';
  div.innerHTML = `
    <input type="text" placeholder="Nome (ex: TikTok)" class="w-1/3 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none social-label-field" />
    <input type="url" placeholder="https://..." class="flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none social-url-field" />
    <button type="button" onclick="removeSocialLinkField(this)" class="p-1.5 text-gray-400 hover:text-frevo-red">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  container.appendChild(div);
}

function removeSocialLinkField(btn) {
  const row = btn.closest('.social-link-row');
  if (row) row.remove();
}

function saveProfileChanges(e) {
  e.preventDefault();
  const name = document.getElementById('edit-name-input').value;
  const handle = document.getElementById('edit-handle-input').value;
  const bio = document.getElementById('edit-bio-input').value;
  const email = document.getElementById('edit-email-input').value;
  const phone = document.getElementById('edit-phone-input').value;

  const rows = document.querySelectorAll('.social-link-row');
  const socialLinks = [];
  rows.forEach(row => {
    const label = row.querySelector('.social-label-field').value.trim();
    const url = row.querySelector('.social-url-field').value.trim();
    if (url) {
      socialLinks.push({ label: label || 'Link', url });
    }
  });

  currentUserProfile.name = name;
  currentUserProfile.handle = handle.startsWith('@') ? handle : '@' + handle;
  currentUserProfile.bio = bio;
  currentUserProfile.email = email;
  currentUserProfile.phone = phone;
  currentUserProfile.socialLinks = socialLinks;
  if (tempUploadedAvatar) {
    currentUserProfile.avatar = tempUploadedAvatar;
  }

  updateProfileUI();
  closeModal();
  alert('Perfil atualizado com sucesso!');
}

function openContactModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100">
        <h3 class="font-display font-bold text-lg text-ink">Contato com o Artista</h3>
        <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">Oficial</span>
      </div>

      <div class="space-y-3">
        ${currentUserProfile.email ? `
          <a href="mailto:${currentUserProfile.email}" class="p-3 bg-surface-soft rounded-2xl flex items-center justify-between border border-gray-100 hover:border-frevo-orange transition-colors">
            <div>
              <span class="text-[10px] font-bold text-muted uppercase">E-mail Profissional</span>
              <p class="text-xs font-bold text-ink">${currentUserProfile.email}</p>
            </div>
            <span class="btn btn-primary text-xs px-3 py-1 rounded-xl">Escrever</span>
          </a>
        ` : ''}

        ${currentUserProfile.phone ? `
          <a href="tel:${currentUserProfile.phone.replace(/[^0-9+]/g, '')}" class="p-3 bg-surface-soft rounded-2xl flex items-center justify-between border border-gray-100 hover:border-frevo-orange transition-colors">
            <div>
              <span class="text-[10px] font-bold text-muted uppercase">Telefone / Agenciamento</span>
              <p class="text-xs font-bold text-ink">${currentUserProfile.phone}</p>
            </div>
            <span class="btn btn-outline text-xs px-3 py-1 rounded-xl font-bold">Ligar</span>
          </a>
        ` : ''}
      </div>

      <button onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl py-2 font-bold">
        Fechar
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function openSubmitSongModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    alert('Apenas Artistas e Administradores podem cadastrar partituras.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center gap-2 pb-2 border-b border-gray-100">
        <div class="w-8 h-8 rounded-xl bg-frevo-cyan/15 text-frevo-cyan flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <h3 class="font-display font-bold text-lg text-ink">Cadastrar Nova Partitura</h3>
      </div>

      <form id="new-song-form" onsubmit="submitNewSong(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Título da Música</label>
          <input type="text" id="song-title-input" required placeholder="Ex: Frevo da Saudade" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Gênero Tradicional</label>
          <select id="song-genre-input" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
            <option value="Frevo de Rua">Frevo de Rua</option>
            <option value="Frevo Canção">Frevo Canção</option>
            <option value="Frevo de Bloco">Frevo de Bloco</option>
            <option value="Frevo Livre">Frevo Livre</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Letra / Detalhes do Arranjo</label>
          <textarea id="song-lyrics-input" rows="3" placeholder="Insira a letra ou notas do arranjo instrumental..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange"></textarea>
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">Submeter Obra</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewSong(e) {
  e.preventDefault();
  const title = document.getElementById('song-title-input').value;
  const genre = document.getElementById('song-genre-input').value;
  const lyrics = document.getElementById('song-lyrics-input').value;

  if (!title) return;

  const newSong = {
    id: `s-${Date.now()}`,
    title,
    artist: currentUserSession.name || currentUserProfile.name,
    genre,
    description: 'Nova obra submetida para acervo e revisão.',
    lyrics: lyrics || '(Sem letra informada)',
    score_file: 'nova-partitura.pdf',
    status: 'published',
    downloads_count: 1,
    author_id: currentUserSession.artist_id || 'a1'
  };

  DB.songs.unshift(newSong);
  if (window.supabaseService && window.supabaseService.isConnected()) {
    window.supabaseService.createSong(newSong);
  }

  closeModal();
  renderSongs();
  renderProfileGallery();
  renderAdminCMS();
  alert('Música cadastrada no acervo oficial com sucesso!');
}

// ==============================================================================
// PWA BANNER & PROMPTS
// ==============================================================================
let deferredPrompt = null;

function checkPwaPrompt() {
  const banner = document.getElementById('pwa-install-banner');
  const hasSeenPwa = localStorage.getItem('frevai_pwa_dismissed');
  
  if (banner && !hasSeenPwa) {
    setTimeout(() => {
      banner.classList.add('show');
    }, 1800);
  }
}

function dismissPwaBanner() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) {
    banner.classList.remove('show');
  }
  localStorage.setItem('frevai_pwa_dismissed', 'true');
}

function openPwaInstructionsModal() {
  dismissPwaBanner();

  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou instalar o PWA');
      }
      deferredPrompt = null;
    });
    return;
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="text-center space-y-4">
      <div class="w-14 h-14 rounded-2xl gradient-frevo flex items-center justify-center mx-auto text-white shadow-md">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3C6.5 3 2 7.5 2 13C2 13 4.5 11.5 7 13C9.5 14.5 12 13 12 13C12 13 14.5 14.5 17 13C19.5 11.5 22 13 22 13C22 7.5 17.5 3 12 3Z" fill="currentColor" fill-opacity="0.2"/>
          <path d="M12 3V19C12 20.1 11.1 21 10 21C8.9 21 8 20.1 8 19"/>
        </svg>
      </div>

      <div>
        <h3 class="font-display font-bold text-xl text-ink">Adicionar FrevAI à Tela Inicial</h3>
        <p class="text-xs text-muted mt-1">Tenha a melhor experiência com acesso instantâneo em tela cheia.</p>
      </div>

      ${isIOS ? `
        <div class="bg-surface-soft p-4 rounded-2xl text-left text-xs space-y-2 border border-gray-100">
          <p class="font-bold text-ink">No seu iPhone / iPad:</p>
          <ol class="list-decimal list-inside space-y-1 text-ink-soft">
            <li>Toque no botão de <strong>Compartilhar</strong> (<svg class="inline" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>) no rodapé do Safari.</li>
            <li>Role para baixo e selecione <strong>"Adicionar à Tela de Início"</strong>.</li>
            <li>Toque em <strong>"Adicionar"</strong> no canto superior direito.</li>
          </ol>
        </div>
      ` : `
        <div class="bg-surface-soft p-4 rounded-2xl text-left text-xs space-y-2 border border-gray-100">
          <p class="font-bold text-ink">No seu Android (Chrome):</p>
          <ol class="list-decimal list-inside space-y-1 text-ink-soft">
            <li>Toque nos <strong>três pontos (⋮)</strong> no canto superior do navegador.</li>
            <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
            <li>Confirme para ter o ícone do FrevAI no seu dispositivo!</li>
          </ol>
        </div>
      `}

      <button onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl py-2.5 font-bold">
        Entendi, Concluído!
      </button>
    </div>
  `;

  modal.classList.add('open');
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  checkPwaPrompt();
});

// ==============================================================================
// SINCRONIZAÇÃO ASSÍNCRONA COM SUPABASE
// ==============================================================================
async function syncAllWithSupabase() {
  if (!window.supabaseService || !window.supabaseService.isConnected()) return;

  try {
    const livePosts = await window.supabaseService.getPosts();
    if (livePosts && livePosts.length > 0) {
      DB.posts = livePosts;
      renderFeed();
    }

    const liveArtists = await window.supabaseService.getArtists();
    if (liveArtists && liveArtists.length > 0) {
      DB.artists = liveArtists;
      renderArtists();
    }

    const liveSongs = await window.supabaseService.getSongs();
    if (liveSongs && liveSongs.length > 0) {
      DB.songs = liveSongs;
      renderSongs();
      renderProfileGallery();
    }

    const liveMap = await window.supabaseService.getMapPoints();
    if (liveMap && liveMap.length > 0) {
      DB.mapPoints = liveMap;
      renderMap();
    }
  } catch (err) {
    console.warn('[Supabase] Erro durante sincronização:', err);
  }
}

// Inicialização Global
document.addEventListener('DOMContentLoaded', () => {
  renderStories();
  renderFeed();
  renderProfileGallery();
  renderArtists();
  renderSongs();
  renderSteps();
  renderHistory();
  renderMap();
  renderAdminCMS();
  updateProfileUI();
  updateSessionUI();
  checkPwaPrompt();

  if (window.FREVIA_CONFIG && window.FREVIA_CONFIG.isConfigured()) {
    syncAllWithSupabase();
  }

  // Ouvinte de mudança de autenticação no Supabase
  if (window.supabaseService) {
    window.supabaseService.onAuthStateChange((event, session) => {
      if (session && session.user) {
        currentUserSession = {
          role: session.user.user_metadata?.role || 'user',
          name: session.user.user_metadata?.display_name || session.user.email.split('@')[0],
          handle: '@' + session.user.email.split('@')[0],
          avatar: session.user.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          email: session.user.email,
          artist_id: null,
          favorites: []
        };
        saveCurrentSession();
      }
    });
  }

  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const view = el.dataset.view;
      if (view) switchView(view);
    });
  });

  // Registrar Service Worker para PWA e instalação na tela inicial
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('[FrevAI] Service Worker registrado com sucesso:', reg.scope);
      }).catch((err) => {
        console.warn('[FrevAI] Falha ao registrar Service Worker:', err);
      });
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const banner = document.getElementById('pwa-install-banner');
    if (banner) {
      banner.classList.add('show');
    }
  });

  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
