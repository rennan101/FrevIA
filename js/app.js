// ==============================================================================
// FrevIA Data Store & State Management (Instagram-style Layout)
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
      followers: '14.2k',
      following: '420',
      posts_count: 12,
      is_authorized_editor: true,
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
      followers: '38.9k',
      following: '190',
      posts_count: 24,
      is_authorized_editor: true,
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
      followers: '21.5k',
      following: '310',
      posts_count: 18,
      is_authorized_editor: false,
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
      followers: '54.0k',
      following: '85',
      posts_count: 45,
      is_authorized_editor: false,
      has_story: true,
    },
    {
      id: 'a5',
      name: 'Paço do Frevo',
      handle: '@pacodofrevo',
      genre: 'Centro Cultural',
      bio: 'O coração da salvaguarda do Frevo no Bairro do Recife. Memória, pesquisa e difusão.',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
      followers: '92.1k',
      following: '520',
      posts_count: 89,
      is_authorized_editor: true,
      has_story: true,
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
      content: 'Disponibilizamos a partitura completa com arranjo para saxofones e trompetes no acervo aberto do FrevIA! Músicos e orquestras de todo o Brasil já podem baixar gratuitamente.',
      tags: ['FrevoDeRua', 'PartiturasAbertas', 'Arranjos'],
      likes: 589,
      is_liked: true,
      is_saved: true,
      time_ago: 'HÁ 5 HORAS',
      comments: [
        { user: 'lucas_trompete', text: 'Baixei a partitura agora mesmo Maestro, muito obrigado!' }
      ]
    },
    {
      id: 'p3',
      author: 'SpokFrevo',
      handle: 'spokfrevo',
      avatar: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80',
      location: 'Teatro Santa Isabel',
      type: 'culture',
      title: 'Ensaio Geral da Temporada',
      content: 'A força do Frevo tocado na veia! Cada compasso acelerado homenageia os mestres que pavimentaram a estrada da nossa música imaterial.',
      tags: ['SpokFrevo', 'MusicaBrasileira', 'Saxofone'],
      likes: 812,
      is_liked: false,
      is_saved: false,
      time_ago: 'HÁ 1 DIA',
      comments: [
        { user: 'renata_cultura', text: 'Incrível ver essa orquestra ao vivo.' }
      ]
    }
  ],

  songs: [
    {
      id: 's1',
      title: 'Passo da Fervura',
      artist: 'Maestro Forró & OPBH',
      genre: 'Frevo Livre',
      description: 'Diálogo vigoroso entre trompetes e saxofones com andamento vivo a 152 BPM.',
      lyrics: `(Instrumental — Frevo de Rua Fervente)
Entrada vibrante de trompetes em staccato.
Trombones respondem com contracanto sincopado.
A percussão acelera o andamento a 152 BPM.
O solo de saxofone alto corta a multidão em espiral.`,
      score_file: 'passo-da-fervura.pdf',
      status: 'published'
    },
    {
      id: 's2',
      title: 'Valores do Passado',
      artist: 'Bloco da Saudade',
      genre: 'Frevo de Bloco',
      description: 'Hino memorável de Edgar Moraes que resgata a nostalgia dos antigos blocos líricos.',
      lyrics: `Bloco das Flores, Vassourinhas
Prateado, Toureiros, Lenhadores
Batutas de São José
Tanta saudade dos velhos carnavais

Quando a orquestra entoava a canção
Toda a cidade cantava com emoção
E pelas ruas de pedra a brilhar
O frevo não parava de ecoar...`,
      score_file: 'valores-do-passado.pdf',
      status: 'published'
    },
    {
      id: 's3',
      title: 'Voltei Recife',
      artist: 'Claudionor Germano',
      genre: 'Frevo Canção',
      description: 'Composição antológica de Luiz Bandeira que expressa o amor à cidade dos rios e pontes.',
      lyrics: `Voltei, Recife
Foi a saudade que me trouxe pelo braço
Quero rever a minha terra tão querida
E reencontrar velhos amigos no compasso...`,
      score_file: 'voltei-recife.pdf',
      status: 'published'
    }
  ],

  steps: [
    {
      id: 'st1',
      name: 'Tesoura',
      difficulty: 'Iniciante',
      category: 'Tradicional',
      description: 'Um dos movimentos mais emblemáticos do Frevo, com cruzamento ágil e rítmico das pernas.',
      instructions: '1. Inicie na ponta dos pés com joelhos semiflexionados.\n2. Cruze a perna direita pela frente da esquerda.\n3. Abra com salto suave e cruze a esquerda.\n4. Gire a sombrinha em contrapeso na mão direita.'
    },
    {
      id: 'st2',
      name: 'Ferrolho',
      difficulty: 'Intermediário',
      category: 'Acrobático',
      description: 'Agachamento em cócoras com extensão lateral veloz simulando o mecanismo de um ferrolho.',
      instructions: '1. Agache em posição de cócoras na ponta dos pés.\n2. Estenda o calcanhar direito para a lateral.\n3. Recolha e estenda alternadamente o esquerdo.\n4. Mantenha o equilíbrio com a sombrinha no alto.'
    },
    {
      id: 'st3',
      name: 'Dobradiça',
      difficulty: 'Avançado',
      category: 'Acrobático',
      description: 'Flexão profunda e rápida dos joelhos para frente enquanto o corpo desce em suspensão.',
      instructions: '1. Junte os pés na ponta.\n2. Lance os joelhos para a frente mantendo o tronco ereto.\n3. Retorne com impulsão potente no ritmo sincopado do Frevo.'
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
// App Router & View Controller
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
  
  document.querySelectorAll('.header-link').forEach(link => {
    link.classList.toggle('text-frevo-orange', link.dataset.view === viewName);
  });
}

// Renderizadores de Componentes
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

// ==============================================================================
// RENDERIZAÇÃO DO FEED (MATCH DO MOCKUP COM BOTÕES E PILL FLUTUANTES)
// ==============================================================================
function renderFeed() {
  const container = document.getElementById('feed-list');
  if (!container) return;

  container.innerHTML = DB.posts.map(post => `
    <article class="feed-card-immersive">
      <!-- Media Container com Elementos Flutuantes -->
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
        <button onclick="toggleSave('${post.id}')" class="floating-save-btn" aria-label="Salvar Publicação">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${post.is_saved ? '#171717' : 'none'}" stroke="currentColor" stroke-width="2.2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>

        <!-- Bottom Floating Actions Bar -->
        <div class="floating-actions-bar">
          <!-- Left: Comment & Share Circle Buttons -->
          <div class="flex items-center gap-2">
            <button onclick="openCommentsModal('${post.id}')" class="floating-circle-btn" aria-label="Comentários">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </button>
            <button onclick="sharePost('${post.title}')" class="floating-circle-btn" aria-label="Compartilhar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          <!-- Right: Like Button with Red Heart Pill -->
          <button onclick="toggleLike('${post.id}')" class="floating-like-btn" aria-label="Curtir">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${post.is_liked ? '#F0442E' : '#F0442E'}" stroke="#F0442E" stroke-width="${post.is_liked ? '0' : '2'}">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="text-xs font-bold text-ink">${post.likes}</span>
          </button>
        </div>
      </div>

      <!-- Caption & Tags Bottom Card Area -->
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

// ==============================================================================
// RENDERIZAÇÃO DO PERFIL E GALERIA ASSIMÉTRICA (MOCKUP MATCH)
// ==============================================================================
const profileGalleryItems = [
  {
    id: 'g1',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    type: 'tall',
    title: 'Acerto de Marcha no Recife Antigo'
  },
  {
    id: 'g2',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    type: 'tall',
    title: 'Arte e Expressão Visual'
  },
  {
    id: 'g3',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    type: 'regular',
    title: 'Céu e Sombrinhas de Frevo'
  },
  {
    id: 'g4',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    type: 'tall',
    title: 'Orquestra de Metais'
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
    type: 'regular',
    title: 'Carnaval Lírico e Saudade'
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80',
    type: 'regular',
    title: 'Trompetes e Ritmo Fervente'
  }
];

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

  if (currentProfileTab === 'scores') {
    // Aba 1: Partituras do Artista
    container.innerHTML = `
      <div class="space-y-3 pb-6">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-ink">Partituras & Obras Publicadas (${DB.songs.length})</span>
          <button onclick="openSubmitSongModal()" class="text-xs font-bold text-frevo-orange hover:underline">+ Nova Obra</button>
        </div>
        ${DB.songs.map(song => `
          <div class="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div class="space-y-0.5">
              <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-[10px] font-bold">${song.genre}</span>
              <h4 class="font-bold text-xs text-ink leading-tight">${song.title}</h4>
              <p class="text-[11px] text-muted line-clamp-1">${song.description}</p>
            </div>
            <button onclick="openScoreModal('${song.title}', '${song.artist}')" class="btn btn-cyan text-xs py-1.5 px-3 h-8 rounded-xl font-bold flex-shrink-0">
              Ver Partitura
            </button>
          </div>
        `).join('')}
      </div>
    `;
  } else if (currentProfileTab === 'saved') {
    // Aba 2: Itens Salvos / Bookmarks
    const savedPosts = DB.posts.filter(p => p.is_saved);
    if (savedPosts.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 px-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto text-gray-400 mb-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h4 class="font-bold text-xs text-ink">Nenhum item salvo ainda</h4>
          <p class="text-[11px] text-muted mt-0.5">Salve publicações tocando no ícone de bookmark nos cards do feed.</p>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="space-y-3 pb-6">
          <span class="text-xs font-bold text-ink px-1 block">Publicações Salvas (${savedPosts.length})</span>
          <div class="grid grid-cols-2 gap-3">
            ${savedPosts.map(p => `
              <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm cursor-pointer" onclick="openStoryModal('${p.author}', '${p.image}', '${p.title}')">
                <img src="${p.image}" alt="${p.title}" class="w-full aspect-square object-cover" />
                <div class="p-2.5">
                  <h5 class="font-bold text-[11px] text-ink line-clamp-1">${p.title}</h5>
                  <span class="text-[10px] text-muted">${p.author}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }
}

// ==============================================================================
// BUSCA GLOBAL ESTILO APPLE MUSIC NA SESSÃO DE ARTISTAS
// ==============================================================================
function handleGlobalSearch(event) {
  const query = (event.target.value || '').toLowerCase().trim();
  const resultsContainer = document.getElementById('artists-search-results-container');
  if (!resultsContainer) return;

  if (!query) {
    resultsContainer.innerHTML = `
      <div>
        <h3 class="text-xs font-bold text-muted uppercase tracking-wider mb-2">Mestres & Agremiações em Destaque</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="artists-grid"></div>
      </div>
    `;
    renderArtists();
    return;
  }

  // Filtragem de Artistas e Músicas
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
      <!-- Artistas Encontrados -->
      <div>
        <h4 class="text-xs font-bold text-ink mb-2">Artistas Encontrados (${filteredArtists.length})</h4>
        ${filteredArtists.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${filteredArtists.map(artist => `
              <div class="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                <img src="${artist.avatar_url}" alt="${artist.name}" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <h4 class="font-bold text-xs text-ink truncate">${artist.name}</h4>
                  <span class="badge bg-frevo-pink/15 text-frevo-pink text-[10px] font-bold">${artist.genre}</span>
                </div>
                <button onclick="switchView('artist-panel')" class="btn btn-outline text-xs px-2.5 py-1 h-7 rounded-xl font-bold">
                  Perfil
                </button>
              </div>
            `).join('')}
          </div>
        ` : `<p class="text-xs text-muted">Nenhum artista com este termo.</p>`}
      </div>

      <!-- Músicas & Partituras Encontradas -->
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
                <button onclick="openScoreModal('${song.title}', '${song.artist}')" class="btn btn-cyan text-xs py-1 px-3 h-7 rounded-xl font-bold">
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

  container.innerHTML = DB.artists.map(artist => `
    <div class="bg-white border border-gray-200 rounded-2xl p-4 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow">
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
  `).join('');
}

function renderSongs() {
  const container = document.getElementById('songs-grid');
  if (!container) return;

  container.innerHTML = DB.songs.map(song => `
    <div class="bg-white border border-line-strong rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-card">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="badge bg-frevo-cyan/20 text-ink text-xs font-bold">${song.genre}</span>
          <span class="text-[11px] text-muted font-semibold">Partitura Aberta</span>
        </div>
        <h3 class="font-display font-bold text-xl text-ink">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange mb-2">${song.artist}</p>
        <p class="text-xs text-ink-soft mb-3 leading-relaxed">${song.description}</p>
        
        <div class="p-3 rounded-lg bg-surface-soft border border-line text-xs font-mono text-ink-soft whitespace-pre-line max-h-28 overflow-y-auto mb-3">
          ${song.lyrics}
        </div>
      </div>

      <button onclick="openScoreModal('${song.title}', '${song.artist}')" class="btn btn-cyan w-full text-xs font-bold">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18V5L21 3V16"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
        Visualizar Partitura Digital
      </button>
    </div>
  `).join('');
}

function renderSteps() {
  const container = document.getElementById('steps-grid');
  if (!container) return;

  container.innerHTML = DB.steps.map(step => `
    <div class="bg-white border border-line-strong rounded-xl p-5 flex flex-col justify-between space-y-3 shadow-card">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="badge bg-frevo-green/20 text-ink text-xs font-bold">${step.difficulty}</span>
          <span class="text-xs text-muted font-semibold">${step.category}</span>
        </div>
        <h3 class="font-display font-bold text-xl text-ink mb-1.5">Passo: ${step.name}</h3>
        <p class="text-xs text-ink-soft leading-relaxed mb-3">${step.description}</p>
        
        <div class="p-3 rounded-lg bg-surface-soft border border-line text-xs space-y-1">
          <span class="font-bold text-[10px] text-muted uppercase tracking-wider block">Como Executar:</span>
          <div class="whitespace-pre-line text-xs font-medium leading-relaxed">${step.instructions}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderHistory() {
  const container = document.getElementById('history-timeline');
  if (!container) return;

  container.innerHTML = DB.history.map(item => `
    <div class="relative pl-6 pb-6 border-l-2 border-frevo-yellow last:border-l-0">
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-frevo-yellow border-2 border-paper shadow-sm"></div>
      <div class="bg-white border border-line-strong rounded-xl p-4 space-y-2 shadow-card">
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
  const container = document.getElementById('map-points-grid');
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

      <!-- Botão para Expandir o Mapa no Próprio App -->
      <button onclick="toggleMapEmbed('${point.id}')" class="btn btn-outline text-xs w-full rounded-xl flex items-center justify-center gap-1.5 py-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
        <span id="map-toggle-text-${point.id}">Ver Mapa no App ▼</span>
      </button>

      <!-- Container do Mapa Embutido Expansível -->
      <div id="map-embed-${point.id}" class="map-embed-container">
        <iframe 
          title="Mapa de ${point.name}"
          loading="lazy"
          src="https://maps.google.com/maps?q=${point.coords[0]},${point.coords[1]}&hl=pt-BR&z=16&output=embed"
          allowfullscreen>
        </iframe>
        
        <!-- Redirecionamento para o Google Maps em Nova Aba Abaixo das Informações -->
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
// ESTADO DO PERFIL COM MÚLTIPLOS LINKS E FOTO UPLOAD REAL
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

// Modal de Edição de Perfil com Upload de Foto e Múltiplas Redes
let tempUploadedAvatar = null;

function openEditProfileModal() {
  tempUploadedAvatar = currentUserProfile.avatar;
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center gap-2 pb-2 border-b border-gray-100">
        <div class="w-8 h-8 rounded-xl bg-frevo-orange/15 text-frevo-orange flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </div>
        <h3 class="font-display font-bold text-lg text-ink">Editar Perfil do Artista</h3>
      </div>

      <form id="edit-profile-form" onsubmit="saveProfileChanges(event)" class="space-y-3.5 max-h-[70vh] overflow-y-auto pr-1">
        
        <!-- Upload de Foto do Usuário (Arquivo Real) -->
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1.5">Foto de Perfil</label>
          <div class="flex items-center gap-3">
            <img id="preview-avatar-img" src="${currentUserProfile.avatar}" alt="Preview" class="w-14 h-14 rounded-full object-cover border-2 border-frevo-orange flex-shrink-0" />
            <div class="flex-1">
              <label class="btn btn-outline text-xs w-full rounded-xl cursor-pointer flex items-center justify-center gap-1.5 py-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span>Enviar Foto do Dispositivo</span>
                <input type="file" id="edit-avatar-file" accept="image/*" class="hidden" onchange="handleAvatarFileUpload(event)" />
              </label>
              <span class="text-[10px] text-muted block mt-0.5">Suporta PNG, JPG ou WEBP.</span>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Nome do Artista / Projeto</label>
          <input type="text" id="edit-name-input" value="${currentUserProfile.name}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Nome de Usuário (@handle)</label>
          <input type="text" id="edit-handle-input" value="${currentUserProfile.handle}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Minibio</label>
          <textarea id="edit-bio-input" rows="3" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">${currentUserProfile.bio}</textarea>
        </div>

        <!-- Múltiplos Links de Redes Sociais -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Links de Redes & Canais</label>
            <button type="button" onclick="addSocialLinkInput()" class="text-[11px] font-bold text-frevo-orange hover:underline">+ Adicionar Link</button>
          </div>
          <div id="social-links-inputs" class="space-y-2">
            ${currentUserProfile.socialLinks.map((s, index) => `
              <div class="flex gap-1.5 items-center social-link-row" data-index="${index}">
                <input type="text" placeholder="Nome (ex: Instagram)" value="${s.label}" class="w-1/3 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange social-label-input" required />
                <input type="url" placeholder="https://..." value="${s.url}" class="flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange social-url-input" required />
                <button type="button" onclick="removeSocialLinkInput(this)" class="p-1.5 text-gray-400 hover:text-frevo-red rounded-lg" aria-label="Remover">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 pt-1">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">E-mail de Contato</label>
            <input type="email" id="edit-email-input" value="${currentUserProfile.email}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">WhatsApp / Telefone</label>
            <input type="tel" id="edit-phone-input" value="${currentUserProfile.phone}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>
        </div>

        <div class="flex gap-2 pt-3">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md">Salvar Alterações</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function handleAvatarFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      tempUploadedAvatar = e.target.result;
      const previewImg = document.getElementById('preview-avatar-img');
      if (previewImg) previewImg.src = tempUploadedAvatar;
    };
    reader.readAsDataURL(file);
  }
}

function addSocialLinkInput() {
  const container = document.getElementById('social-links-inputs');
  if (!container) return;

  const newRow = document.createElement('div');
  newRow.className = 'flex gap-1.5 items-center social-link-row';
  newRow.innerHTML = `
    <input type="text" placeholder="Nome (ex: TikTok)" class="w-1/3 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange social-label-input" required />
    <input type="url" placeholder="https://..." class="flex-1 px-2.5 py-1.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange social-url-input" required />
    <button type="button" onclick="removeSocialLinkInput(this)" class="p-1.5 text-gray-400 hover:text-frevo-red rounded-lg" aria-label="Remover">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `;
  container.appendChild(newRow);
}

function removeSocialLinkInput(buttonEl) {
  const row = buttonEl.closest('.social-link-row');
  if (row) row.remove();
}

function saveProfileChanges(e) {
  e.preventDefault();
  
  if (tempUploadedAvatar) {
    currentUserProfile.avatar = tempUploadedAvatar;
  }
  
  currentUserProfile.name = document.getElementById('edit-name-input').value;
  currentUserProfile.handle = document.getElementById('edit-handle-input').value;
  currentUserProfile.bio = document.getElementById('edit-bio-input').value;
  currentUserProfile.email = document.getElementById('edit-email-input').value;
  currentUserProfile.phone = document.getElementById('edit-phone-input').value;

  // Coleta múltiplos links sociais
  const socialRows = document.querySelectorAll('.social-link-row');
  const links = [];
  socialRows.forEach(row => {
    const label = row.querySelector('.social-label-input')?.value?.trim();
    const url = row.querySelector('.social-url-input')?.value?.trim();
    if (label && url) {
      links.push({ label, url });
    }
  });
  currentUserProfile.socialLinks = links;

  updateProfileUI();
  closeModal();
}

// ==============================================================================
// MODAL DE CONTATO DIRETO
// ==============================================================================
function openContactModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="text-center space-y-4">
      <div class="story-ring p-1 inline-block mx-auto">
        <img src="${currentUserProfile.avatar}" alt="${currentUserProfile.name}" class="w-20 h-20 rounded-full object-cover border-2 border-white" />
      </div>
      <div>
        <h3 class="font-display font-bold text-xl text-ink">${currentUserProfile.name}</h3>
        <span class="text-xs text-muted font-medium">${currentUserProfile.handle}</span>
      </div>
      
      <p class="text-xs text-ink-soft leading-relaxed px-4">
        Entre em contato diretamente com o artista para apresentações, partituras ou parcerias culturais:
      </p>

      <div class="space-y-2.5 pt-1">
        <a href="mailto:${currentUserProfile.email}" class="btn btn-primary w-full text-xs rounded-xl flex items-center justify-center gap-2 py-2.5 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Enviar E-mail (${currentUserProfile.email})
        </a>

        <a href="https://wa.me/${currentUserProfile.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="btn btn-green w-full text-xs rounded-xl flex items-center justify-center gap-2 py-2.5 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          WhatsApp (${currentUserProfile.phone})
        </a>
      </div>

      <!-- Outras Redes do Artista -->
      ${currentUserProfile.socialLinks && currentUserProfile.socialLinks.length > 0 ? `
        <div class="pt-2 border-t border-gray-100">
          <span class="text-[10px] font-bold text-muted uppercase block mb-2">Redes Oficiais</span>
          <div class="flex flex-wrap justify-center gap-1.5">
            ${currentUserProfile.socialLinks.map(s => `
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="badge bg-surface-soft border border-gray-200 text-ink text-xs font-semibold hover:border-frevo-orange">
                ${s.label} ↗
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <button onclick="closeModal()" class="text-xs text-muted font-bold hover:underline block pt-2 mx-auto">
        Fechar
      </button>
    </div>
  `;

  modal.classList.add('open');
}

// ==============================================================================
// PWA AUTOMÁTICO PARA ANDROID E IOS
// ==============================================================================
let deferredPrompt = null;

function checkPwaPrompt() {
  const hasSeenPwa = localStorage.getItem('frevia_pwa_dismissed');
  if (!hasSeenPwa) {
    setTimeout(() => {
      const banner = document.getElementById('pwa-install-banner');
      if (banner) banner.classList.add('show');
    }, 1500);
  }
}

function dismissPwaBanner() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.classList.remove('show');
  localStorage.setItem('frevia_pwa_dismissed', 'true');
}

function openPwaInstructionsModal() {
  dismissPwaBanner();
  
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
    return;
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-center">
      <div class="w-14 h-14 rounded-2xl gradient-frevo flex items-center justify-center text-white mx-auto shadow-md">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3C6.5 3 2 7.5 2 13C2 13 4.5 11.5 7 13C9.5 14.5 12 13 12 13C12 13 14.5 14.5 17 13C19.5 11.5 22 13 22 13C22 7.5 17.5 3 12 3Z" fill="currentColor" fill-opacity="0.2"/>
          <path d="M12 3V19C12 20.1 11.1 21 10 21C8.9 21 8 20.1 8 19"/>
        </svg>
      </div>

      <div>
        <h3 class="font-display font-bold text-xl text-ink">Adicionar FrevIA à Tela Inicial</h3>
        <p class="text-xs text-muted mt-1">Tenha a melhor experiência com acesso instantâneo em tela cheia.</p>
      </div>

      ${isIOS ? `
        <!-- Instruções Específicas para iOS Safari -->
        <div class="bg-surface-soft p-4 rounded-2xl text-left text-xs space-y-2 border border-gray-100">
          <p class="font-bold text-ink">No seu iPhone / iPad:</p>
          <ol class="list-decimal list-inside space-y-1 text-ink-soft">
            <li>Toque no botão de <strong>Compartilhar</strong> (<svg class="inline" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>) no rodapé do Safari.</li>
            <li>Role para baixo e selecione <strong>"Adicionar à Tela de Início"</strong>.</li>
            <li>Toque em <strong>"Adicionar"</strong> no canto superior direito.</li>
          </ol>
        </div>
      ` : `
        <!-- Instruções Específicas para Android Chrome -->
        <div class="bg-surface-soft p-4 rounded-2xl text-left text-xs space-y-2 border border-gray-100">
          <p class="font-bold text-ink">No seu Android (Chrome):</p>
          <ol class="list-decimal list-inside space-y-1 text-ink-soft">
            <li>Toque nos <strong>três pontos (⋮)</strong> no canto superior do navegador.</li>
            <li>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
            <li>Confirme para ter o ícone do FrevIA no seu dispositivo!</li>
          </ol>
        </div>
      `}

      <button onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl py-2.5">
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
// MODAL DE SUBMISSÃO DE PARTITURAS
// ==============================================================================
function openSubmitSongModal() {
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
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md">Submeter Obra</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

// Modal de Story com Design Refinado
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

// Modal de Comentários com Design Refinado
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
      <div class="flex gap-2 pt-1">
        <input type="text" id="new-comment-input" placeholder="Adicionar comentário..." class="flex-1 px-3 py-2.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        <button onclick="addComment('${post.id}')" class="btn btn-primary text-xs rounded-xl px-4">Publicar</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function addComment(postId) {
  const input = document.getElementById('new-comment-input');
  if (!input || !input.value.trim()) return;

  const post = DB.posts.find(p => p.id === postId);
  if (post) {
    post.comments.push({
      user: currentUserProfile.handle.replace('@', ''),
      text: input.value.trim()
    });
    closeModal();
    renderFeed();
  }
}

// Modal de Partituras com Design Refinado
function openScoreModal(title, artist) {
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
        <h3 class="font-display font-bold text-xl text-ink">${title}</h3>
        <p class="text-xs font-bold text-frevo-orange mt-0.5">${artist}</p>
      </div>
      <div class="p-4 bg-surface-soft border border-gray-100 rounded-2xl text-xs text-muted space-y-1.5 text-left">
        <p class="text-ink font-semibold">Acervo Oficial Aberto para Download</p>
        <p>Partitura digitalizada em alta resolução com arranjo para orquestra e sopros.</p>
        <p class="font-mono text-ink text-[11px] pt-1">Formato: PDF Digital</p>
      </div>
      <button onclick="alert('Download da partitura iniciado!'); closeModal();" class="btn btn-cyan w-full text-xs rounded-xl shadow-md py-2.5">
        Baixar Partitura
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('global-modal');
  if (modal) modal.classList.remove('open');
}

function submitNewSong(e) {
  e.preventDefault();
  const title = document.getElementById('song-title-input').value;
  const genre = document.getElementById('song-genre-input').value;
  const lyrics = document.getElementById('song-lyrics-input').value;

  if (window.supabaseService && window.supabaseService.isConnected()) {
    window.supabaseService.createSong({
      title,
      genre,
      lyrics,
      description: 'Nova obra submetida para acervo e revisão.'
    });
  }

  DB.songs.unshift({
    id: `s-${Date.now()}`,
    title,
    artist: currentUserProfile.name,
    genre,
    description: 'Nova obra submetida para acervo e revisão.',
    lyrics: lyrics || '(Sem letra informada)',
    score_file: 'nova-partitura.pdf',
    status: 'pending_review'
  });

  closeModal();
  alert('Música enviada com sucesso para moderação e sincronizada!');
  renderSongs();
  switchView('songs');
}

// ==============================================================================
// MODAL DE CONFIGURAÇÃO DO SUPABASE
// ==============================================================================
function updateSupabaseStatusUI() {
  const badge = document.getElementById('supabase-status-badge');
  const dot = document.getElementById('supabase-status-dot');
  const text = document.getElementById('supabase-status-text');

  if (!badge || !dot || !text) return;

  const isConfigured = window.FREVIA_CONFIG && window.FREVIA_CONFIG.isConfigured();
  if (isConfigured) {
    dot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
    text.innerText = 'Supabase Conectado';
    badge.className = 'px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors';
  } else {
    dot.className = 'w-2 h-2 rounded-full bg-amber-400';
    text.innerText = 'Conectar Supabase';
    badge.className = 'px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center gap-1.5 bg-gray-100 text-muted hover:bg-amber-50 hover:text-amber-700 transition-colors';
  }
}

function openSupabaseConfigModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const currentUrl = (window.FREVIA_CONFIG && window.FREVIA_CONFIG.SUPABASE_URL) || '';
  const currentKey = (window.FREVIA_CONFIG && window.FREVIA_CONFIG.SUPABASE_ANON_KEY) || '';

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center gap-2 pb-2 border-b border-gray-100">
        <div class="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Conexão Supabase</h3>
          <p class="text-[11px] text-muted">Integração direta com o banco PostgreSQL e Storage</p>
        </div>
      </div>

      <form onsubmit="saveSupabaseConfig(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Project URL</label>
          <input type="url" id="cfg-supabase-url" value="${currentUrl}" required placeholder="https://xyzcompany.supabase.co" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <span class="text-[10px] text-muted">Encontre em: Project Settings > API > Project URL</span>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Anon Public Key</label>
          <textarea id="cfg-supabase-key" rows="2" required placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-[10px]">${currentKey}</textarea>
          <span class="text-[10px] text-muted">Encontre em: Project Settings > API > Project API keys (anon / public)</span>
        </div>

        <div class="bg-surface-soft p-3 rounded-xl border border-gray-100 text-[11px] space-y-1">
          <p class="font-bold text-ink">Banco de Dados e Schema:</p>
          <p class="text-muted">O script completo com as tabelas (artistas, partituras, feed, mapa) está pronto no arquivo <code>supabase/migrations/001_initial_schema.sql</code>.</p>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md bg-emerald-600 hover:bg-emerald-700">Salvar e Sincronizar</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function saveSupabaseConfig(e) {
  e.preventDefault();
  const url = document.getElementById('cfg-supabase-url').value;
  const key = document.getElementById('cfg-supabase-key').value;

  if (window.FREVIA_CONFIG) {
    window.FREVIA_CONFIG.saveCredentials(url, key);
  }
  if (window.supabaseService) {
    window.supabaseService.initClient();
  }

  updateSupabaseStatusUI();
  closeModal();
  syncAllWithSupabase();
  alert('Configurações do Supabase salvas com sucesso! Sincronizando dados...');
}

// Sincronização Assíncrona com Supabase
async function syncAllWithSupabase() {
  if (!window.supabaseService || !window.supabaseService.isConnected()) return;

  try {
    // 1. Posts
    const livePosts = await window.supabaseService.getPosts();
    if (livePosts && livePosts.length > 0) {
      DB.posts = livePosts;
      renderFeed();
    }

    // 2. Artistas
    const liveArtists = await window.supabaseService.getArtists();
    if (liveArtists && liveArtists.length > 0) {
      DB.artists = liveArtists;
      renderArtists();
    }

    // 3. Músicas
    const liveSongs = await window.supabaseService.getSongs();
    if (liveSongs && liveSongs.length > 0) {
      DB.songs = liveSongs;
      renderSongs();
    }

    // 4. Mapa
    const liveMap = await window.supabaseService.getMapPoints();
    if (liveMap && liveMap.length > 0) {
      DB.map_points = liveMap;
      renderMap();
    }

    console.log('[Supabase] Sincronização concluída!');
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
  updateProfileUI();
  checkPwaPrompt();
  updateSupabaseStatusUI();

  // Tentar sincronizar dados caso o Supabase já esteja configurado
  if (window.FREVIA_CONFIG && window.FREVIA_CONFIG.isConfigured()) {
    syncAllWithSupabase();
  }

  // Eventos de clique nas abas
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const view = el.dataset.view;
      if (view) switchView(view);
    });
  });

  // Fechar modal ao clicar fora
  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});

