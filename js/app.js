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
      bio: 'Regente, compositor e arranjador à frente da OPBH (Orquestra Popular da Bomba do Hemetério). Revolucionando o Frevo através de fusões rítmicas globais com jazz, maracatu e música sinfônica contemporânea.',
      avatar_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      email: 'forro@cultura.pe.gov.br',
      phone: '+55 (81) 99876-1111',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a2',
      name: 'SpokFrevo Orquestra',
      handle: '@spokfrevo',
      genre: 'Frevo de Rua',
      bio: 'Comandada pelo virtuoso saxofonista e maestro Spok, a big band de 18 músicos eleva o Frevo de Rua instrumental ao circuito dos maiores festivais internacionais de jazz com técnica e improvisações viscerais.',
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
      bio: 'Fundado em 1974 para reviver os tradicionais blocos líricos de pau e corda do Recife. Composto por coro feminino impecável, violões, banjos, cavaquinhos, flautas e clarinetes inspirados na poesia carnavalesca.',
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
      bio: 'Patrimônio Vivo de Pernambuco. A voz definitiva dos frevos de Capiba e Nelson Ferreira. Ao longo de 70 anos de carreira gravou dezenas de discos icônicos celebrando a memória e a alma do carnaval do Recife.',
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
      bio: 'Coletivo de jovens instrumentistas e percussionistas da Bomba do Hemetério no Recife. Exploram novas harmonias, metais velozes e a pulsação contagiante do frevo de rua para as novas gerações.',
      avatar_url: 'https://images.unsplash.com/photo-1520523839898-507127053c37?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      email: 'contato@opbh.com.br',
      phone: '+55 (81) 99876-5555',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a6',
      name: 'Giselle Andrade',
      handle: '@gisellepassista',
      genre: 'Dança & Passos de Frevo',
      bio: 'Passista premiada, coreógrafa e pesquisadora corporal do Frevo. Diretora de oficinas no Paço do Frevo, dedicando sua trajetória à formação de passistas e inovação dos passos acrobáticos pernambucanos.',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
      email: 'giselle@passistaspe.org',
      phone: '+55 (81) 99876-6666',
      is_approved: true,
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
      created_at: '2026-09-16T12:00:00Z',
      comments: [
        { id: 'c1', user: 'Mariana Silva', user_handle: 'mariana.passista', user_id: 'u_mariana', text: 'Estarei lá com toda a turma do passo!', created_at: '2026-09-16T12:30:00Z', time_ago: 'HÁ 1 HORA' },
        { id: 'c2', user: 'Carlos Metais', user_handle: 'carlos_metais', user_id: 'u_carlos', text: 'Os arranjos deste ano estão impecáveis.', created_at: '2026-09-16T13:00:00Z', time_ago: 'HÁ 30 MIN' }
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
        { id: 'c3', user: 'Orquestra Olinda', user_handle: 'orquestra_olinda', user_id: 'u_olinda', text: 'Já baixamos e vamos ensaiar hoje à noite!', created_at: '2026-09-16T09:15:00Z', time_ago: 'HÁ 5 HORAS' }
      ]
    },
    {
      id: 'p3',
      author: 'SpokFrevo Orquestra',
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
      title: 'Passo da Fervura',
      artist: 'Maestro Forró',
      genre: 'Frevo Livre',
      description: 'Arranjo completo para saxofones, trompetes e base rítmica sincopada.',
      lyrics: '(Instrumental - Diálogo dinâmico entre naipes de metais e percussão de rua)',
      score_file: 'passo-da-fervura-metais.pdf',
      status: 'published',
      downloads_count: 1420,
      author_id: 'a1'
    },
    {
      id: 's2',
      title: 'Fervura no Recife Antigo',
      artist: 'Maestro Forró',
      genre: 'Frevo de Rua',
      description: 'Partitura orquestral com cadência acelerada executada nas ladeiras e pontes do Recife.',
      lyrics: '(Instrumental - Clássico contemporâneo da OPBH)',
      score_file: 'fervura-recife-antigo.pdf',
      status: 'published',
      downloads_count: 890,
      author_id: 'a1'
    },
    {
      id: 's3',
      title: 'Vassourinhas (Arranjo OPBH)',
      artist: 'Maestro Forró',
      genre: 'Frevo de Rua',
      description: 'Releitura sinfônica vigorosa da marcha mais célebre do carnaval pernambucano.',
      lyrics: '(Instrumental - Arranjo oficial para orquestras de frevo)',
      score_file: 'vassourinhas-opbh.pdf',
      status: 'published',
      downloads_count: 2150,
      author_id: 'a1'
    },
    {
      id: 's4',
      title: 'Moraes é Frevo',
      artist: 'SpokFrevo Orquestra',
      genre: 'Frevo de Rua',
      description: 'Partitura completa para Big Band com solos expressivos de sax alto.',
      lyrics: '(Instrumental - Homenagem instrumental a Edgar Moraes com solos virtuosísticos)',
      score_file: 'moraes-e-frevo-bigband.pdf',
      status: 'published',
      downloads_count: 1780,
      author_id: 'a2'
    },
    {
      id: 's5',
      title: 'Frevo Sanfonado',
      artist: 'SpokFrevo Orquestra',
      genre: 'Frevo Instrumental',
      description: 'Fusão primorosa de saxofone com sanfona e naipes de trombones.',
      lyrics: '(Instrumental - Fusão entre a tradição dos bailes e a pulsação de rua)',
      score_file: 'frevo-sanfonado-spok.pdf',
      status: 'published',
      downloads_count: 1340,
      author_id: 'a2'
    },
    {
      id: 's6',
      title: 'Passo de Anjo',
      artist: 'SpokFrevo Orquestra',
      genre: 'Frevo de Rua',
      description: 'Pauta e partes orquestrais para concerto e cortejos carnavalescos.',
      lyrics: '(Instrumental - Arranjo instrumental premiado internacionalmente)',
      score_file: 'passo-de-anjo.pdf',
      status: 'published',
      downloads_count: 960,
      author_id: 'a2'
    },
    {
      id: 's7',
      title: 'Madeira Que Cupim Não Rói',
      artist: 'Bloco da Saudade',
      genre: 'Frevo de Bloco',
      description: 'Hino lírico da resistência e orgulho carnavalesco com arranjo para coro e cordas.',
      lyrics: 'Madeira do Rosário vem a ver contar / Como é que se faz pra vencer / Pernambuco é terra de cabra da peste / Não há quem conteste o nosso valor...',
      score_file: 'madeira-cupim-coro.pdf',
      status: 'published',
      downloads_count: 1980,
      author_id: 'a3'
    },
    {
      id: 's8',
      title: 'Valores do Passado',
      artist: 'Bloco da Saudade',
      genre: 'Frevo de Bloco',
      description: 'Poesia nostálgica de Edgar Moraes para flautas, clarinetes e coro feminino.',
      lyrics: 'Bloco das Flores, Batutas de São José / Pavão Dourado, Flor da Lira / Um bloco em cada esquina a desfilar / Fazendo o coração palpitar...',
      score_file: 'valores-do-passado.pdf',
      status: 'published',
      downloads_count: 1250,
      author_id: 'a3'
    },
    {
      id: 's9',
      title: 'Minha Saudade Lírica',
      artist: 'Bloco da Saudade',
      genre: 'Frevo de Bloco',
      description: 'Marcha de bloco com violões de 7 cordas, banjos e coro a quatro vozes.',
      lyrics: 'Quanta saudade eu tenho dos carnavais de outrora / Das noites enluaradas sob os clarins da aurora...',
      score_file: 'minha-saudade-lirica.pdf',
      status: 'published',
      downloads_count: 740,
      author_id: 'a3'
    },
    {
      id: 's10',
      title: 'Voltei Recife',
      artist: 'Claudionor Germano',
      genre: 'Frevo Canção',
      description: 'Melodia imortalizada com cifras e arranjo vocal para orquestra de frevo.',
      lyrics: 'Voltei, Recife! Foi a saudade que me trouxe pelo braço / Quero rever a Rua da Aurora / O Passo da Pátria e o meu pedaço...',
      score_file: 'voltei-recife-cifras.pdf',
      status: 'published',
      downloads_count: 2430,
      author_id: 'a4'
    },
    {
      id: 's11',
      title: 'Hino de Capiba (É de Fazer Chorar)',
      artist: 'Claudionor Germano',
      genre: 'Frevo Canção',
      description: 'Pauta vocal com arranjo de sopros e introdução de trompetes.',
      lyrics: 'Quero ver quem não chora quando o frevo começa a tocar / No meio da multidão a gente não pode parar...',
      score_file: 'hino-capiba-metais.pdf',
      status: 'published',
      downloads_count: 1620,
      author_id: 'a4'
    },
    {
      id: 's12',
      title: 'Frevo Nº 1 de Nelson Ferreira',
      artist: 'Claudionor Germano',
      genre: 'Frevo Canção',
      description: 'Arranjo histórico com naipe de clarinetes e percussão tradicional.',
      lyrics: 'O frevo não é para quem quer, é para quem pode / Quando a orquestra ataca ninguém fica parado...',
      score_file: 'frevo-num1-nelson.pdf',
      status: 'published',
      downloads_count: 1110,
      author_id: 'a4'
    },
    {
      id: 's13',
      title: 'Fervura da Bomba',
      artist: 'Orquestra Popular da Bomba',
      genre: 'Frevo Contemporâneo',
      description: 'Partitura enérgica com trombones em destaque e percussão de maracatu.',
      lyrics: '(Instrumental - Ritmo afro-pernambucano com pegada urbana)',
      score_file: 'fervura-bomba.pdf',
      status: 'published',
      downloads_count: 530,
      author_id: 'a5'
    },
    {
      id: 's14',
      title: 'Clarins da Aurora',
      artist: 'Orquestra Popular da Bomba',
      genre: 'Frevo de Rua',
      description: 'Abertura festiva para grupos juvenis e bandas escolares de frevo.',
      lyrics: '(Instrumental - Ideal para ensaios de iniciação musical)',
      score_file: 'clarins-da-aurora.pdf',
      status: 'published',
      downloads_count: 480,
      author_id: 'a5'
    },
    {
      id: 's15',
      title: 'Marcha Rítmica dos Passistas',
      artist: 'Giselle Andrade',
      genre: 'Dança & Passos',
      description: 'Partitura com marcação rítmica precisa para sincronização de passos acrobáticos.',
      lyrics: '(Guia rítmico instrumental para treino do Ferrolho e Tesoura)',
      score_file: 'marcha-passistas.pdf',
      status: 'published',
      downloads_count: 820,
      author_id: 'a6'
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
  ],

  notifications: [
    {
      id: 'notif-1',
      type: 'score',
      targetId: 's1',
      title: 'Nova Partitura Disponível!',
      message: 'Maestro Forró publicou o arranjo de "Último Regresso".',
      author: 'Maestro Forró',
      author_avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      time_ago: 'Há 2 horas',
      read: false
    },
    {
      id: 'notif-2',
      type: 'post',
      targetId: 'p1',
      title: 'Comunicado Cultural',
      message: 'Edital do Festival Nacional do Frevo 2026 bate recorde de inscrições!',
      author: 'FrevAI Notícias',
      author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      time_ago: 'Há 5 horas',
      read: false
    },
    {
      id: 'notif-3',
      type: 'score',
      targetId: 's2',
      title: 'Novo Frevo Instrumental!',
      message: 'SpokFrevo lançou a partitura de "Moraes é Frevo".',
      author: 'SpokFrevo',
      author_avatar: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      time_ago: 'Ontem',
      read: true
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
  favorites: ['a1'], // IDs dos artistas favoritados
  saved_scores: ['s1000000-0000-0000-0000-000000000001', 's3000000-0000-0000-0000-000000000003'] // IDs das partituras salvas
};

// Carregar sessão salva do LocalStorage se houver
const savedSession = localStorage.getItem('frevai_user_session');
if (savedSession) {
  try {
    currentUserSession = Object.assign(currentUserSession, JSON.parse(savedSession));
    if (!currentUserSession.saved_scores) {
      currentUserSession.saved_scores = ['s1000000-0000-0000-0000-000000000001', 's3000000-0000-0000-0000-000000000003'];
    }
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
  const submitSongBtn = document.getElementById('btn-submit-song');

  if (userNameEl) {
    if (currentUserSession.role === 'guest') {
      userNameEl.innerText = 'Entrar';
    } else {
      userNameEl.innerText = (currentUserSession.name || 'Folião').split(' ')[0];
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
  updateProfileUI();
  renderProfileGallery();
  renderSteps();
  renderAdminCMS();

  if (!silent) {
    if (role === 'guest') {
      alert('Conta desconectada com sucesso.');
    }
  }
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
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">${isGuest ? 'Acessar o FrevAI' : 'Minha Conta FrevAI'}</h3>
        <p class="text-[11px] text-muted">${isGuest ? 'Entre para comentar e favoritar artistas' : `Logado como: ${currentUserSession.name}`}</p>
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
        <div class="p-4 bg-surface-soft rounded-2xl flex items-center gap-3.5 border border-gray-100">
          <div class="relative flex-shrink-0">
            <img id="session-avatar-preview" src="${currentUserSession.avatar}" alt="${currentUserSession.name}" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
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
    const isNewProfile = !currentUserProfile.name;
    currentUserSession = {
      role: data.user.user_metadata?.role || 'user',
      name: data.user.user_metadata?.display_name || '',
      handle: '',
      avatar: data.user.user_metadata?.avatar_url || data.user.user_metadata?.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      email: email,
      artist_id: null,
      favorites: []
    };
    saveCurrentSession();
    updateProfileUI();
    closeModal();
    setTimeout(() => {
      openEditProfileModal(true);
    }, 300);
  } else {
    // Fallback local
    currentUserSession = {
      role: email.includes('admin') ? 'admin' : email.includes('artista') ? 'artist' : 'user',
      name: '',
      handle: '',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      email: email,
      artist_id: null,
      favorites: []
    };
    currentUserProfile.name = '';
    currentUserProfile.handle = '';
    currentUserProfile.bio = '';
    currentUserProfile.email = email;
    currentUserProfile.socialLinks = [];
    saveCurrentSession();
    updateProfileUI();
    closeModal();
    setTimeout(() => {
      openEditProfileModal(true);
    }, 300);
  }
}

function logoutSession() {
  if (window.supabaseService && window.supabaseService.isConnected()) {
    window.supabaseService.signOut();
  }
  switchTestRole('guest');
}

// Upload de foto do usuário com compressão canvas e Supabase Storage
async function handleUserAvatarUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Compressão em canvas para máxima leveza mobile
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

      // Atualiza preview imediatamente
      const sessionPreview = document.getElementById('session-avatar-preview');
      if (sessionPreview) sessionPreview.src = base64Avatar;

      const editPreview = document.getElementById('edit-avatar-preview');
      if (editPreview) editPreview.src = base64Avatar;

      currentUserSession.avatar = base64Avatar;
      currentUserProfile.avatar = base64Avatar;
      saveCurrentSession();
      updateProfileUI();

      // Upload para o Supabase Storage se conectado
      if (window.supabaseService && window.supabaseService.isConnected()) {
        canvas.toBlob(async (blob) => {
          if (blob) {
            const uploadedUrl = await window.supabaseService.uploadAvatar(blob, currentUserSession.id);
            if (uploadedUrl) {
              currentUserSession.avatar = uploadedUrl;
              currentUserProfile.avatar = uploadedUrl;
              saveCurrentSession();
              updateProfileUI();
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

// ==============================================================================
// SISTEMA DE NOTIFICAÇÕES & PUSH COM DEEP LINKING
// ==============================================================================

function updateNotificationBadge() {
  const badge = document.getElementById('header-notification-badge');
  if (!badge) return;
  const unreadCount = (DB.notifications || []).filter(n => !n.read).length;
  badge.style.display = unreadCount > 0 ? 'block' : 'none';
}

function sendCulturalPushNotification({ title, message, url, type, targetId }) {
  if (!('Notification' in window)) return;

  const notifUrl = url || (type === 'post' ? `/#feed?post=${targetId}` : `/#songs?score=${targetId}`);

  if (Notification.permission === 'granted') {
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, {
          body: message,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          vibrate: [100, 50, 100],
          data: {
            url: notifUrl,
            type,
            targetId
          }
        });
      }).catch(err => {
        console.warn('SW push notification fallback:', err);
      });
    } else {
      try {
        const nativeNotif = new Notification(title, {
          body: message,
          icon: '/icon-192.png'
        });
        nativeNotif.onclick = () => {
          window.focus();
          handleNotificationClick(null, type, targetId);
        };
      } catch (e) {}
    }
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission();
  }
}

function markAllNotificationsAsRead() {
  (DB.notifications || []).forEach(n => { n.read = true; });
  updateNotificationBadge();
  openNotificationsModal();
}

function handleNotificationClick(notifId, type, targetId) {
  if (notifId) {
    const notif = (DB.notifications || []).find(n => n.id === notifId);
    if (notif) notif.read = true;
  }
  updateNotificationBadge();
  closeModal();

  if (type === 'post') {
    switchView('feed');
    setTimeout(() => {
      const el = document.getElementById(`post-card-${targetId}`) || document.querySelector(`[data-post-id="${targetId}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlight-pulse');
        setTimeout(() => el.classList.remove('highlight-pulse'), 3500);
      }
    }, 280);
  } else if (type === 'score') {
    switchView('songs');
    const song = (DB.songs || []).find(s => s.id === targetId);
    if (song) {
      setTimeout(() => {
        openScoreModal(song.title, song.artist, song.id);
      }, 250);
    }
  }
}

// Modal do Sino de Notificações
function openNotificationsModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  const notifications = DB.notifications || [];
  const unreadCount = notifications.filter(n => !n.read).length;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Notificações Culturais</h3>
          <p class="text-xs text-muted">${unreadCount > 0 ? `${unreadCount} não lida(s)` : 'Tudo em dia!'}</p>
        </div>
        ${unreadCount > 0 ? `
          <button onclick="markAllNotificationsAsRead()" class="text-[11px] font-bold text-frevo-orange hover:underline">
            Marcar todas como lidas
          </button>
        ` : ''}
      </div>

      <div class="space-y-2.5 max-h-72 overflow-y-auto pr-1">
        ${notifications.length > 0 ? notifications.map(notif => `
          <div onclick="handleNotificationClick('${notif.id}', '${notif.type}', '${notif.targetId}')" class="notification-item p-3.5 ${notif.read ? 'bg-white border border-gray-100 opacity-80' : 'bg-surface-soft border border-frevo-orange/30 shadow-sm'} rounded-2xl flex items-start gap-3 cursor-pointer hover:border-frevo-orange transition-all">
            <div class="relative flex-shrink-0">
              <img src="${notif.author_avatar || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80'}" alt="${notif.author || 'FrevAI'}" class="w-10 h-10 rounded-full object-cover border border-gray-200" />
              <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${notif.type === 'score' ? 'bg-frevo-cyan' : 'bg-frevo-orange'}">
                ${notif.type === 'score' ? '♫' : '★'}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-1 mb-0.5">
                <strong class="text-ink text-xs font-bold truncate block">${notif.title}</strong>
                ${!notif.read ? '<span class="w-2 h-2 rounded-full bg-frevo-orange flex-shrink-0 animate-pulse"></span>' : ''}
              </div>
              <p class="text-[11px] text-ink-soft leading-snug line-clamp-2">${notif.message}</p>
              <div class="flex items-center justify-between mt-1.5 pt-1 border-t border-gray-100/60">
                <span class="text-[10px] text-muted font-medium">${notif.time_ago || 'Recentemente'}</span>
                <span class="text-[10px] font-bold text-frevo-orange flex items-center gap-0.5">
                  ${notif.type === 'score' ? 'Ver Partitura' : 'Ver no Feed'} →
                </span>
              </div>
            </div>
          </div>
        `).join('') : `
          <div class="p-6 text-center bg-surface-soft rounded-2xl border border-gray-100">
            <p class="text-xs text-muted">Nenhuma notificação recebida ainda.</p>
          </div>
        `}
      </div>

      <button onclick="closeModal()" class="btn btn-outline w-full text-xs rounded-xl py-2 font-bold text-ink">
        Fechar
      </button>
    </div>
  `;

  modal.classList.add('open');
}

// ==============================================================================
// GERENCIADOR DE INFINITE SCROLL DE ALTA PERFORMANCE (MOBILE-FIRST)
// ==============================================================================
const InfiniteScrollManager = {
  observer: null,
  state: {
    feed: { page: 1, limit: 6 },
    artists: { page: 1, limit: 8 },
    songs: { page: 1, limit: 8 },
    steps: { page: 1, limit: 6 },
    history: { page: 1, limit: 6 },
    map: { page: 1, limit: 6 }
  },

  init() {
    if (this.observer) this.observer.disconnect();
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const view = entry.target.dataset.view;
          if (view) this.loadMore(view);
        }
      });
    }, {
      rootMargin: '250px' // Dispara 250px antes do final para scroll imperceptível
    });
  },

  observe(element) {
    if (this.observer && element) {
      this.observer.observe(element);
    }
  },

  loadMore(view) {
    const s = this.state[view];
    if (!s) return;
    s.page++;
    
    if (view === 'feed') appendMoreFeed();
    else if (view === 'artists') appendMoreArtists();
    else if (view === 'songs') appendMoreSongs();
    else if (view === 'steps') appendMoreSteps();
    else if (view === 'history') appendMoreHistory();
    else if (view === 'map') appendMoreMap();
  },

  reset(view) {
    if (this.state[view]) this.state[view].page = 1;
  }
};

// ==============================================================================
// RENDERIZADORES DO APLICATIVO
// ==============================================================================

function switchView(viewName) {
  if (viewName === 'admin-panel' && currentUserSession.role !== 'admin') {
    alert('Acesso restrito: Apenas administradores autorizados podem acessar o painel de gestão.');
    viewName = 'feed';
  }

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

function formatCommentRelativeTime(dateStr) {
  if (!dateStr) return 'agora';
  try {
    const d = new Date(dateStr);
    const diffMs = Date.now() - d.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSecs < 45) return 'agora';
    if (diffMins < 60) return `há ${diffMins} min`;
    if (diffHours < 24) return `há ${diffHours} h`;
    if (diffDays === 1) return 'ontem';
    if (diffDays < 7) return `há ${diffDays} dias`;
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  } catch {
    return 'recente';
  }
}

function renderCommentItemHtml(c, postId) {
  const currentUserId = currentUserSession.id || '';
  const currentUserName = currentUserSession.name || '';
  const currentUserHandle = (currentUserSession.handle || '').replace('@', '');
  const isAdmin = currentUserSession.role === 'admin';

  const isAuthor = (c.user_id && currentUserId && c.user_id === currentUserId) ||
                   (c.user && currentUserName && c.user.toLowerCase() === currentUserName.toLowerCase()) ||
                   (c.user_handle && currentUserHandle && c.user_handle.toLowerCase() === currentUserHandle.toLowerCase()) ||
                   (c.user && currentUserHandle && c.user.toLowerCase() === currentUserHandle.toLowerCase());

  const canEdit = isAuthor;
  const canDelete = isAuthor || isAdmin;
  const timeLabel = c.time_ago || formatCommentRelativeTime(c.created_at);

  return `
    <div class="flex items-start gap-2 text-xs group/comment" id="comment-item-${postId}-${c.id}">
      <div class="w-6 h-6 rounded-full bg-frevo-orange/20 text-frevo-orange font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
        ${(c.user || 'F').charAt(0).toUpperCase()}
      </div>
      <div class="comment-bubble flex-1 text-left relative">
        <div class="flex items-center justify-between gap-1 mb-0.5">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-bold text-ink text-[11px]">${c.user || 'Folião'}</span>
            <span class="text-[9px] text-muted font-medium">${timeLabel}</span>
          </div>
          
          <!-- Ações de Editar / Excluir (Disponíveis para Autor ou Admin) -->
          ${(canEdit || canDelete) ? `
            <div class="flex items-center gap-0.5">
              ${canEdit ? `
                <button type="button" onclick="editComment('${postId}', '${c.id}')" class="comment-action-btn edit" title="Editar comentário" aria-label="Editar">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
              ` : ''}
              ${canDelete ? `
                <button type="button" onclick="deleteComment('${postId}', '${c.id}')" class="comment-action-btn delete" title="${isAdmin && !isAuthor ? 'Excluir comentário (Administrador)' : 'Excluir comentário'}" aria-label="Excluir">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
        
        <div id="comment-text-container-${postId}-${c.id}">
          <span class="text-ink-soft text-[11px] leading-relaxed block">${c.text}</span>
        </div>
      </div>
    </div>
  `;
}

// Render HTML de Post do Feed com Comentários Inline e Infinite Scroll
function renderFeedPostHtml(post) {
  const commentsList = (post.comments || []).map(c => renderCommentItemHtml(c, post.id)).join('');

  return `
    <article class="feed-card-immersive infinite-scroll-item" id="post-card-${post.id}">
      <div class="feed-card-media">
        <img src="${post.image}" alt="${post.title}" loading="lazy" />

        <!-- Top-Left Floating Author Pill -->
        <div class="floating-author-pill" onclick="openArtistProfileByAuthor('${post.author}')" title="Ver perfil de ${post.author}">
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
            <button onclick="toggleCommentsDrawer('${post.id}')" class="floating-circle-btn" aria-label="Comentários" title="Ver e fazer comentários">
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${post.is_liked ? '#F0442E' : 'none'}" stroke="#F0442E" stroke-width="2">
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

      <!-- Gaveta de Comentários Inline Abaixo do Post -->
      <div id="comments-drawer-${post.id}" class="comments-drawer space-y-3">
        <div class="flex items-center justify-between pb-1.5 border-b border-gray-100">
          <span class="text-xs font-bold text-ink" id="comments-count-${post.id}">Comentários (${(post.comments || []).length})</span>
          <button onclick="toggleCommentsDrawer('${post.id}')" class="text-[11px] text-muted hover:text-ink font-semibold">Fechar ✕</button>
        </div>

        <div id="comments-list-${post.id}" class="space-y-2.5 max-h-56 overflow-y-auto pr-1">
          ${commentsList || `<p class="text-[11px] text-muted py-2 text-center">Seja o primeiro folião a comentar!</p>`}
        </div>

        <!-- Formulário de Comentário Inline -->
        <form onsubmit="submitInlineComment(event, '${post.id}')" class="flex gap-2 items-center pt-1 border-t border-gray-200/80">
          <input 
            type="text" 
            id="inline-comment-input-${post.id}" 
            required 
            placeholder="${currentUserSession.role === 'guest' ? 'Faça login para comentar...' : 'Escreva um comentário folião...'}" 
            class="flex-1 px-3.5 py-2 text-xs border border-gray-200 rounded-xl bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange transition-all shadow-inner" 
          />
          <button type="submit" class="btn btn-primary text-white p-2.5 rounded-xl font-bold shadow-sm flex-shrink-0 flex items-center justify-center hover:opacity-95 active:scale-95 transition-all" aria-label="Enviar comentário" title="Enviar comentário">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>
    </article>
  `;
}

function updateCommentsDrawerUI(postId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const countEl = document.getElementById(`comments-count-${postId}`);
  if (countEl) countEl.innerText = `Comentários (${(post.comments || []).length})`;

  const list = document.getElementById(`comments-list-${postId}`);
  if (list) {
    if (post.comments && post.comments.length > 0) {
      list.innerHTML = post.comments.map(c => renderCommentItemHtml(c, postId)).join('');
    } else {
      list.innerHTML = `<p class="text-[11px] text-muted py-2 text-center">Seja o primeiro folião a comentar!</p>`;
    }
  }
}

// Submeter comentário inline diretamente no Feed
async function submitInlineComment(event, postId) {
  event.preventDefault();
  if (currentUserSession.role === 'guest') {
    alert('Crie uma conta ou faça login para comentar!');
    openSessionModal();
    return;
  }

  const input = document.getElementById(`inline-comment-input-${postId}`);
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  const post = DB.posts.find(p => p.id === postId);

  if (post) {
    if (!post.comments) post.comments = [];
    
    const newComment = {
      id: 'c_' + Date.now(),
      user_id: currentUserSession.id || null,
      user_handle: currentUserSession.handle.replace('@', ''),
      user: currentUserSession.name || currentUserSession.handle.replace('@', ''),
      text: text,
      created_at: new Date().toISOString(),
      time_ago: 'agora'
    };

    post.comments.push(newComment);
    input.value = '';
    updateCommentsDrawerUI(postId);

    // Persistência com Supabase
    if (window.supabaseService && window.supabaseService.isConnected() && currentUserSession.id) {
      const saved = await window.supabaseService.addComment(postId, currentUserSession.id, text);
      if (saved && saved.id) {
        newComment.id = saved.id;
      }
    }
  }
}

// Editar comentário inline
function editComment(postId, commentId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;
  const comment = (post.comments || []).find(c => c.id === commentId);
  if (!comment) return;

  const container = document.getElementById(`comment-text-container-${postId}-${commentId}`);
  if (!container) return;

  container.innerHTML = `
    <form onsubmit="saveEditedComment(event, '${postId}', '${commentId}')" class="space-y-1.5 pt-1">
      <input 
        type="text" 
        id="edit-comment-input-${postId}-${commentId}" 
        value="${comment.text.replace(/"/g, '&quot;')}" 
        required 
        class="w-full px-2.5 py-1.5 text-xs border border-frevo-orange rounded-lg bg-white text-ink focus:outline-none" 
      />
      <div class="flex gap-1.5 justify-end">
        <button type="button" onclick="cancelCommentEdit('${postId}', '${commentId}')" class="px-2 py-0.5 text-[10px] font-bold text-muted hover:text-ink">
          Cancelar
        </button>
        <button type="submit" class="px-2.5 py-0.5 text-[10px] font-bold bg-frevo-orange text-white rounded-md shadow-sm">
          Salvar
        </button>
      </div>
    </form>
  `;

  const editInput = document.getElementById(`edit-comment-input-${postId}-${commentId}`);
  if (editInput) editInput.focus();
}

// Salvar comentário editado
async function saveEditedComment(event, postId, commentId) {
  event.preventDefault();
  const input = document.getElementById(`edit-comment-input-${postId}-${commentId}`);
  if (!input || !input.value.trim()) return;

  const newText = input.value.trim();
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const comment = (post.comments || []).find(c => c.id === commentId);
  if (comment) {
    comment.text = newText;
    comment.time_ago = 'editado agora';
    updateCommentsDrawerUI(postId);

    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.updateComment(commentId, newText);
    }
  }
}

// Cancelar edição de comentário
function cancelCommentEdit(postId, commentId) {
  updateCommentsDrawerUI(postId);
}

// Excluir comentário (autor ou Administrador)
async function deleteComment(postId, commentId) {
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const comment = (post.comments || []).find(c => c.id === commentId);
  if (!comment) return;

  const isAdmin = currentUserSession.role === 'admin';
  const confirmMsg = isAdmin && comment.user_id !== currentUserSession.id
    ? `Administrador: Deseja realmente excluir o comentário de "${comment.user}"?`
    : 'Deseja excluir este comentário?';

  if (confirm(confirmMsg)) {
    post.comments = post.comments.filter(c => c.id !== commentId);
    updateCommentsDrawerUI(postId);

    if (window.supabaseService && window.supabaseService.isConnected()) {
      window.supabaseService.deleteComment(commentId);
    }
  }
}

function renderFeed() {
  const container = document.getElementById('feed-list');
  if (!container) return;

  InfiniteScrollManager.reset('feed');
  const initialPosts = DB.posts.slice(0, InfiniteScrollManager.state.feed.limit);
  
  container.innerHTML = `
    <div id="feed-items-stream" class="space-y-4">
      ${initialPosts.map(post => renderFeedPostHtml(post)).join('')}
    </div>
    <div id="sentinel-feed" class="infinite-scroll-sentinel" data-view="feed">
      ${DB.posts.length > initialPosts.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais histórias do frevo...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-feed');
  if (sentinel && DB.posts.length > initialPosts.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreFeed() {
  const stream = document.getElementById('feed-items-stream');
  const sentinel = document.getElementById('sentinel-feed');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.feed;
  const start = (page - 1) * limit;
  const nextPosts = DB.posts.slice(start, start + limit);

  if (nextPosts.length > 0) {
    const html = nextPosts.map(post => renderFeedPostHtml(post)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= DB.posts.length && sentinel) {
    sentinel.innerHTML = '';
  }
}

// Abrir e fechar gaveta de comentários inline com scroll elástico até o campo de texto
function toggleCommentsDrawer(postId) {
  const drawer = document.getElementById(`comments-drawer-${postId}`);
  if (!drawer) return;
  const isOpen = drawer.classList.toggle('open');
  if (isOpen) {
    setTimeout(() => {
      const input = document.getElementById(`inline-comment-input-${postId}`);
      if (input) {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        input.focus();
      }
    }, 280);
  }
}

// Modal Completo de Perfil do Artista (Visualização Pública com Obras e Partituras)
function openArtistProfile(artistId) {
  const artist = DB.artists.find(a => a.id === artistId || a.handle === artistId || a.name === artistId);
  if (!artist) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const artistSongs = DB.songs.filter(s => s.author_id === artist.id || (s.artist && s.artist.toLowerCase().includes(artist.name.toLowerCase())));
  const isFav = (currentUserSession.favorites || []).includes(artist.id);

  modalBody.innerHTML = `
    <div class="text-left space-y-4 -m-2">
      <!-- Banner de Capa com Botão Fechar -->
      <div class="relative h-28 sm:h-32 rounded-2xl overflow-hidden bg-gradient-to-r from-frevo-orange to-frevo-red shadow-inner">
        <img src="${artist.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'}" alt="${artist.name}" class="w-full h-full object-cover opacity-85" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
        <button onclick="closeModal()" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10" aria-label="Fechar">
          ✕
        </button>
      </div>

      <!-- Avatar & Informações Principais -->
      <div class="px-2 -mt-10 relative flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3 text-center sm:text-left">
        <div class="flex flex-col sm:flex-row items-center gap-3.5">
          <div class="relative">
            <img src="${artist.avatar_url}" alt="${artist.name}" class="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md bg-white" />
            <span class="absolute bottom-0 right-0 w-5 h-5 bg-frevo-green text-white rounded-full flex items-center justify-center text-[10px] border-2 border-white font-bold" title="Artista Verificado">✓</span>
          </div>
          <div>
            <h3 class="font-display font-bold text-lg text-ink leading-tight">${artist.name}</h3>
            <span class="text-xs text-muted font-medium">${artist.handle}</span>
            <div class="mt-1 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
              <span class="badge bg-frevo-orange/15 text-frevo-orange font-bold text-[10px]">${artist.genre}</span>
              <span class="badge bg-gray-100 text-muted font-mono font-bold text-[10px]">${artistSongs.length} partitura(s)</span>
            </div>
          </div>
        </div>

        <!-- Botão Favoritar Artista -->
        <button onclick="toggleFavoriteArtist('${artist.id}'); openArtistProfile('${artist.id}');" class="btn ${isFav ? 'bg-frevo-orange text-white shadow-md' : 'btn-outline text-frevo-orange border-frevo-orange hover:bg-frevo-orange/10'} text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>${isFav ? 'Favoritado ★' : 'Favoritar'}</span>
        </button>
      </div>

      <!-- Biografia e Trajetória -->
      <div class="px-2 pt-2">
        <h4 class="text-xs font-bold text-ink uppercase tracking-wider mb-1">Sobre o Artista</h4>
        <p class="text-xs text-ink-soft leading-relaxed bg-surface-soft p-3.5 rounded-2xl border border-gray-100">
          ${artist.bio}
        </p>
      </div>

      <!-- Contato Oficial -->
      ${(artist.email || artist.phone) ? `
        <div class="px-2 flex items-center gap-2 flex-wrap">
          ${artist.email ? `
            <a href="mailto:${artist.email}" class="text-[11px] font-bold text-ink bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              ${artist.email}
            </a>
          ` : ''}
          ${artist.phone ? `
            <a href="https://wa.me/${artist.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-frevo-green bg-frevo-green/10 hover:bg-frevo-green/20 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
              WhatsApp Oficial
            </a>
          ` : ''}
        </div>
      ` : ''}

      <!-- Obras e Partituras Publicadas do Artista -->
      <div class="px-2 pt-1 pb-2">
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs font-bold text-ink uppercase tracking-wider">Obras & Partituras (${artistSongs.length})</h4>
        </div>

        <div class="space-y-2 max-h-52 overflow-y-auto pr-1">
          ${artistSongs.length > 0 ? artistSongs.map(song => `
            <div class="p-3 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between gap-3 hover:border-frevo-orange transition-colors">
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 mb-0.5">
                  <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-[9px] font-bold">${song.genre}</span>
                  <span class="text-[10px] text-muted font-mono font-semibold">${song.downloads_count || 120} downloads</span>
                </div>
                <h5 class="font-bold text-xs text-ink truncate">${song.title}</h5>
                <p class="text-[10px] text-muted truncate">${song.description}</p>
              </div>
              <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan text-xs py-1.5 px-3 rounded-xl font-bold flex-shrink-0">
                Baixar PDF
              </button>
            </div>
          `).join('') : `
            <div class="p-4 text-center bg-surface-soft rounded-2xl border border-gray-100">
              <p class="text-xs text-muted">Este artista ainda não publicou partituras no acervo.</p>
            </div>
          `}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function openArtistProfileByAuthor(authorName) {
  const artist = DB.artists.find(a => a.name.toLowerCase() === (authorName || '').toLowerCase() || a.handle.toLowerCase() === (authorName || '').toLowerCase());
  if (artist) {
    openArtistProfile(artist.id);
  } else {
    openStoryModal(authorName, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', 'Recife, PE');
  }
}

window.openArtistModal = function(name, avatar, cover, genre, bio, email, phone, id) {
  openArtistProfile(id || name);
};

function renderArtistCardHtml(artist) {
  const isFav = currentUserSession.favorites.includes(artist.id);
  return `
    <div class="bg-white border border-gray-200 rounded-2xl p-4 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow relative infinite-scroll-item">
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

      <button onclick="openArtistProfile('${artist.id}')" class="btn btn-primary w-full text-xs h-8 rounded-xl font-bold mt-1 shadow-sm flex items-center justify-center gap-1.5">
        Ver Perfil & Partituras
      </button>
    </div>
  `;
}

function renderArtists() {
  const container = document.getElementById('artists-grid');
  if (!container) return;

  InfiniteScrollManager.reset('artists');
  const initialArtists = DB.artists.slice(0, InfiniteScrollManager.state.artists.limit);

  container.innerHTML = `
    <div id="artists-stream" class="grid grid-cols-1 sm:grid-cols-2 gap-3 col-span-full">
      ${initialArtists.map(artist => renderArtistCardHtml(artist)).join('')}
    </div>
    <div id="sentinel-artists" class="infinite-scroll-sentinel col-span-full" data-view="artists">
      ${DB.artists.length > initialArtists.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais artistas...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-artists');
  if (sentinel && DB.artists.length > initialArtists.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreArtists() {
  const stream = document.getElementById('artists-stream');
  const sentinel = document.getElementById('sentinel-artists');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.artists;
  const start = (page - 1) * limit;
  const nextArtists = DB.artists.slice(start, start + limit);

  if (nextArtists.length > 0) {
    const html = nextArtists.map(artist => renderArtistCardHtml(artist)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= DB.artists.length && sentinel) {
    sentinel.innerHTML = '';
  }
}

// Estado da Partitura Selecionada para o Visualizador Desktop
let selectedSongId = 's1000000-0000-0000-0000-000000000001';

// Salvar / Favoritar Partitura
function toggleSaveScore(songId) {
  if (!currentUserSession.saved_scores) {
    currentUserSession.saved_scores = [];
  }
  const idx = currentUserSession.saved_scores.indexOf(songId);
  const isSaved = idx !== -1;
  if (isSaved) {
    currentUserSession.saved_scores.splice(idx, 1);
  } else {
    currentUserSession.saved_scores.push(songId);
  }
  saveCurrentSession();
  
  // Atualizar visualização do Feed/Partituras e Perfil
  renderSongs();
  renderProfileGallery();
}

// Selecionar Partitura para o Leitor no Desktop
function selectSongForDesktopViewer(songId) {
  selectedSongId = songId;
  document.querySelectorAll('.song-card-item').forEach(el => {
    if (el.dataset.songId === songId) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });
  renderSongsDesktopViewer(songId);
}

// Render HTML de Card de Partitura (com Botão de Salvar e Seleção no Desktop)
function renderSongCardHtml(song) {
  const isSelected = song.id === selectedSongId;
  const isSaved = (currentUserSession.saved_scores || []).includes(song.id);

  return `
    <div onclick="selectSongForDesktopViewer('${song.id}')" data-song-id="${song.id}" class="song-card-item bg-white border ${isSelected ? 'border-frevo-orange ring-2 ring-frevo-orange/30 bg-orange-50/20' : 'border-gray-200'} rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all infinite-scroll-item cursor-pointer">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-xs font-bold">${song.genre}</span>
          <div class="flex items-center gap-1.5">
            <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
            <button onclick="event.stopPropagation(); toggleSaveScore('${song.id}')" class="p-1.5 rounded-lg text-frevo-orange hover:bg-orange-50 transition-colors" title="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}" aria-label="Salvar Partitura">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <h3 class="font-display font-bold text-lg text-ink leading-snug">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange mb-1.5">${song.artist}</p>
        <p class="text-xs text-ink-soft mb-2.5 leading-relaxed line-clamp-2">${song.description}</p>
      </div>

      <div class="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
        <button onclick="event.stopPropagation(); openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-outline text-xs py-2 rounded-xl font-bold flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Ver Detalhes
        </button>
        <button onclick="event.stopPropagation(); downloadScore('${song.id}')" class="btn btn-cyan text-xs font-bold py-2 rounded-xl shadow-sm flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Baixar PDF
        </button>
      </div>
    </div>
  `;
}

// Renderizar o Visualizador de Partitura Real no Desktop (Split Screen)
function renderSongsDesktopViewer(songId) {
  const viewer = document.getElementById('songs-desktop-viewer');
  if (!viewer) return;

  const song = DB.songs.find(s => s.id === songId) || DB.songs[0];
  if (!song) {
    viewer.innerHTML = `
      <div class="p-12 text-center text-muted">
        <p class="text-sm font-bold">Selecione uma partitura ao lado para visualizar.</p>
      </div>
    `;
    return;
  }

  const isSaved = (currentUserSession.saved_scores || []).includes(song.id);

  viewer.innerHTML = `
    <div class="p-6 space-y-4 text-left">
      <!-- Cabeçalho da Partitura & Ações -->
      <div class="flex items-start justify-between pb-3 border-b border-gray-100 gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-xs font-bold">${song.genre}</span>
            <span class="badge bg-gray-100 text-muted text-[11px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
            <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">Autêntica • 2/4</span>
          </div>
          <h2 class="font-display font-black text-2xl text-ink leading-tight">${song.title}</h2>
          <p class="text-xs font-bold text-frevo-orange mt-0.5">${song.artist}</p>
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="toggleSaveScore('${song.id}')" class="btn ${isSaved ? 'bg-orange-500 text-white shadow-md' : 'btn-outline text-frevo-orange border-frevo-orange'} text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            ${isSaved ? 'Salva' : 'Salvar'}
          </button>
          <button onclick="downloadScore('${song.id}')" class="btn btn-cyan text-xs px-4 py-2 rounded-xl font-bold shadow-sm flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Baixar PDF Real
          </button>
        </div>
      </div>

      <!-- Barra de Ferramentas / Prévia Sonora -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-surface-soft rounded-xl text-xs font-medium text-ink-soft border border-gray-100">
        <div class="flex items-center gap-2 text-xs">
          <span class="w-2.5 h-2.5 rounded-full bg-frevo-green animate-pulse"></span>
          <span>Andamento: <strong>Allegro Vivace (152 BPM)</strong></span>
          <span class="text-gray-300">•</span>
          <span>Tom: <strong>Ré Maior / Sol Menor</strong></span>
        </div>
        <button onclick="playFrevoAudioPreview('${song.title.replace(/'/g, "\\'")}')" class="btn bg-white border border-gray-200 hover:border-frevo-orange text-frevo-orange text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Ouvir Arranjo Musical
        </button>
      </div>

      <!-- Folha de Partitura Real Estilizada (Página Musical Autêntica) -->
      <div class="real-sheet-canvas p-6 space-y-5 shadow-inner max-h-[520px] overflow-y-auto">
        <div class="text-center pb-2 border-b border-stone-300">
          <span class="text-[10px] tracking-widest uppercase text-stone-500 font-bold block mb-1">Sociedade dos Músicos do Frevo de Pernambuco</span>
          <h3 class="text-2xl font-serif font-black text-stone-900 tracking-wider uppercase">${song.title}</h3>
          <span class="text-xs font-serif italic text-stone-700">Composição & Arranjo: ${song.artist}</span>
        </div>

        <!-- Pentagramas e Pautas Musicais em SVG Real -->
        <div class="space-y-4">
          <!-- Pauta 1 -->
          <div class="relative bg-white/70 p-2.5 rounded-lg border border-stone-200 shadow-sm">
            <svg class="w-full h-16" viewBox="0 0 500 50">
              <!-- 5 Linhas da Pauta -->
              <line x1="0" y1="10" x2="500" y2="10" class="real-sheet-stave"/>
              <line x1="0" y1="18" x2="500" y2="18" class="real-sheet-stave"/>
              <line x1="0" y1="26" x2="500" y2="26" class="real-sheet-stave"/>
              <line x1="0" y1="34" x2="500" y2="34" class="real-sheet-stave"/>
              <line x1="0" y1="42" x2="500" y2="42" class="real-sheet-stave"/>
              
              <!-- Clave de Sol 𝄞 -->
              <text x="5" y="38" font-size="34" font-family="serif" font-weight="bold" fill="#171717">𝄞</text>
              <!-- Compasso 2/4 -->
              <text x="32" y="24" font-size="14" font-family="serif" font-weight="bold" fill="#171717">2</text>
              <text x="32" y="38" font-size="14" font-family="serif" font-weight="bold" fill="#171717">4</text>
              
              <!-- Barras de Compasso -->
              <line x1="140" y1="10" x2="140" y2="42" class="real-sheet-barline"/>
              <line x1="260" y1="10" x2="260" y2="42" class="real-sheet-barline"/>
              <line x1="380" y1="10" x2="380" y2="42" class="real-sheet-barline"/>
              <line x1="496" y1="10" x2="496" y2="42" class="real-sheet-barline" stroke-width="2.5"/>

              <!-- Notas Compasso 1 (Colcheias & Sincopado) -->
              <circle cx="56" cy="26" r="4" class="real-sheet-note"/>
              <line x1="60" y1="26" x2="60" y2="8" stroke="#171717" stroke-width="1.8"/>
              <circle cx="78" cy="18" r="4" class="real-sheet-note"/>
              <line x1="82" y1="18" x2="82" y2="2" stroke="#171717" stroke-width="1.8"/>
              <line x1="60" y1="6" x2="82" y2="6" stroke="#171717" stroke-width="3"/>

              <circle cx="102" cy="18" r="4" class="real-sheet-note"/>
              <line x1="106" y1="18" x2="106" y2="4" stroke="#171717" stroke-width="1.8"/>
              <circle cx="122" cy="10" r="4" class="real-sheet-note"/>
              <line x1="126" y1="10" x2="126" y2="0" stroke="#171717" stroke-width="1.8"/>
              <line x1="106" y1="3" x2="126" y2="3" stroke="#171717" stroke-width="3"/>

              <!-- Notas Compasso 2 -->
              <circle cx="165" cy="10" r="4" class="real-sheet-note"/>
              <line x1="169" y1="10" x2="169" y2="-4" stroke="#171717" stroke-width="1.8"/>
              <circle cx="195" cy="18" r="4" class="real-sheet-note"/>
              <line x1="199" y1="18" x2="199" y2="4" stroke="#171717" stroke-width="1.8"/>
              <circle cx="225" cy="26" r="4" class="real-sheet-note"/>
              <line x1="229" y1="26" x2="229" y2="10" stroke="#171717" stroke-width="1.8"/>

              <!-- Notas Compasso 3 (Frase de Trombone) -->
              <circle cx="285" cy="34" r="4" class="real-sheet-note"/>
              <line x1="289" y1="34" x2="289" y2="18" stroke="#171717" stroke-width="1.8"/>
              <circle cx="315" cy="26" r="4" class="real-sheet-note"/>
              <line x1="319" y1="26" x2="319" y2="10" stroke="#171717" stroke-width="1.8"/>
              <circle cx="345" cy="18" r="4" class="real-sheet-note"/>
              <line x1="349" y1="18" x2="349" y2="4" stroke="#171717" stroke-width="1.8"/>

              <!-- Notas Compasso 4 (Cadência Final com Dinâmica ff) -->
              <circle cx="410" cy="10" r="4.5" class="real-sheet-note"/>
              <line x1="414" y1="10" x2="414" y2="-4" stroke="#171717" stroke-width="2"/>
              <circle cx="450" cy="18" r="5" class="real-sheet-note" fill="none" stroke="#171717" stroke-width="2"/>
              <line x1="455" y1="18" x2="455" y2="2" stroke="#171717" stroke-width="2"/>
              <text x="470" y="46" font-size="11" font-family="serif" font-style="italic" font-weight="bold" fill="#C53030">ff</text>
            </svg>
          </div>

          <!-- Pauta 2 -->
          <div class="relative bg-white/70 p-2.5 rounded-lg border border-stone-200 shadow-sm">
            <svg class="w-full h-16" viewBox="0 0 500 50">
              <line x1="0" y1="10" x2="500" y2="10" class="real-sheet-stave"/>
              <line x1="0" y1="18" x2="500" y2="18" class="real-sheet-stave"/>
              <line x1="0" y1="26" x2="500" y2="26" class="real-sheet-stave"/>
              <line x1="0" y1="34" x2="500" y2="34" class="real-sheet-stave"/>
              <line x1="0" y1="42" x2="500" y2="42" class="real-sheet-stave"/>
              
              <text x="5" y="38" font-size="34" font-family="serif" font-weight="bold" fill="#171717">𝄞</text>
              
              <line x1="140" y1="10" x2="140" y2="42" class="real-sheet-barline"/>
              <line x1="260" y1="10" x2="260" y2="42" class="real-sheet-barline"/>
              <line x1="380" y1="10" x2="380" y2="42" class="real-sheet-barline"/>
              <line x1="496" y1="10" x2="496" y2="42" class="real-sheet-barline" stroke-width="2.5"/>

              <circle cx="50" cy="18" r="4" class="real-sheet-note"/>
              <line x1="54" y1="18" x2="54" y2="2" stroke="#171717" stroke-width="1.8"/>
              <circle cx="70" cy="10" r="4" class="real-sheet-note"/>
              <line x1="74" y1="10" x2="74" y2="-4" stroke="#171717" stroke-width="1.8"/>
              <circle cx="90" cy="18" r="4" class="real-sheet-note"/>
              <line x1="94" y1="18" x2="94" y2="2" stroke="#171717" stroke-width="1.8"/>
              <circle cx="110" cy="26" r="4" class="real-sheet-note"/>
              <line x1="114" y1="26" x2="114" y2="10" stroke="#171717" stroke-width="1.8"/>

              <circle cx="165" cy="18" r="4" class="real-sheet-note"/>
              <line x1="169" y1="18" x2="169" y2="2" stroke="#171717" stroke-width="1.8"/>
              <circle cx="205" cy="10" r="4" class="real-sheet-note"/>
              <line x1="209" y1="10" x2="209" y2="-4" stroke="#171717" stroke-width="1.8"/>

              <circle cx="285" cy="10" r="4" class="real-sheet-note"/>
              <line x1="289" y1="10" x2="289" y2="-4" stroke="#171717" stroke-width="1.8"/>
              <circle cx="325" cy="18" r="4" class="real-sheet-note"/>
              <line x1="329" y1="18" x2="329" y2="2" stroke="#171717" stroke-width="1.8"/>

              <circle cx="410" cy="18" r="5" class="real-sheet-note" fill="none" stroke="#171717" stroke-width="2"/>
              <line x1="415" y1="18" x2="415" y2="2" stroke="#171717" stroke-width="2"/>
            </svg>
          </div>
        </div>

        <!-- Letra da Música / Diretrizes de Interpretação -->
        <div class="pt-3 border-t border-stone-300">
          <h4 class="font-serif font-bold text-xs uppercase tracking-wider text-stone-800 mb-1.5">Letra Oficial & Diretrizes de Regência</h4>
          <div class="bg-white/80 p-3.5 rounded-xl border border-stone-200 text-xs font-serif text-stone-800 whitespace-pre-line leading-relaxed">
            ${song.lyrics || 'Instrumental — Frevo de Rua com arranjo para saxofones, trompetes, trombones de vara, tuba e percussão de surdo e tarol.'}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Sintetizador Web Audio API: Tocar Prévia Sonora do Frevo Instantaneamente
function playFrevoAudioPreview(songTitle) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Notas da fanfarra de Frevo (Trompetes e Metais em Ré Maior)
    const notes = [
      { freq: 293.66, dur: 0.12, type: 'sawtooth' }, // D4
      { freq: 369.99, dur: 0.12, type: 'sawtooth' }, // F#4
      { freq: 440.00, dur: 0.16, type: 'sawtooth' }, // A4
      { freq: 587.33, dur: 0.28, type: 'sawtooth' }, // D5
      { freq: 554.37, dur: 0.14, type: 'sawtooth' }, // C#5
      { freq: 587.33, dur: 0.35, type: 'sawtooth' }  // D5 sustenta
    ];

    let now = ctx.currentTime;

    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = n.type;
      osc.frequency.setValueAtTime(n.freq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + n.dur);
      now += n.dur + 0.04;
    });

  } catch (err) {
    console.log('[WebAudio] Prévia não suportada:', err);
  }
}

function renderSongs(filterQuery = '') {
  const container = document.getElementById('songs-grid');
  if (!container) return;

  const query = filterQuery.toLowerCase().trim();
  const filtered = query ? DB.songs.filter(s => 
    s.title.toLowerCase().includes(query) ||
    s.artist.toLowerCase().includes(query) ||
    s.genre.toLowerCase().includes(query) ||
    (s.description && s.description.toLowerCase().includes(query)) ||
    (s.lyrics && s.lyrics.toLowerCase().includes(query))
  ) : DB.songs;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-2xl border border-gray-100 space-y-2">
        <p class="text-xs text-ink font-bold">Nenhuma partitura encontrada</p>
        <p class="text-[11px] text-muted">Tente buscar por outro termo, compositor ou gênero.</p>
      </div>
    `;
    const viewer = document.getElementById('songs-desktop-viewer');
    if (viewer) viewer.innerHTML = '';
    return;
  }

  // Garantir que a primeira partitura esteja sempre selecionada no Desktop
  if (!selectedSongId || !filtered.some(s => s.id === selectedSongId)) {
    selectedSongId = filtered[0].id;
  }

  InfiniteScrollManager.reset('songs');
  const initialSongs = filtered.slice(0, InfiniteScrollManager.state.songs.limit);

  container.innerHTML = `
    <div id="songs-stream" class="space-y-3.5">
      ${initialSongs.map(song => renderSongCardHtml(song)).join('')}
    </div>
    <div id="sentinel-songs" class="infinite-scroll-sentinel" data-view="songs">
      ${filtered.length > initialSongs.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais partituras...</span>
        </div>
      ` : ''}
    </div>
  `;

  // Renderizar a partitura ativa no leitor desktop
  renderSongsDesktopViewer(selectedSongId);

  const sentinel = document.getElementById('sentinel-songs');
  if (sentinel && filtered.length > initialSongs.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreSongs() {
  const stream = document.getElementById('songs-stream');
  const sentinel = document.getElementById('sentinel-songs');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.songs;
  const start = (page - 1) * limit;
  const nextSongs = DB.songs.slice(start, start + limit);

  if (nextSongs.length > 0) {
    const html = nextSongs.map(song => renderSongCardHtml(song)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= DB.songs.length && sentinel) {
    sentinel.innerHTML = '';
  }
}

function handleSongsSearch(event) {
  const query = event.target.value;
  renderSongs(query);
}

// Render HTML de Passo de Frevo
function renderStepCardHtml(step) {
  const canManage = currentUserSession.role === 'admin';
  return `
    <div class="bg-white border border-line-strong rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-sm relative infinite-scroll-item">
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
  `;
}

function renderSteps() {
  const container = document.getElementById('steps-grid');
  if (!container) return;

  InfiniteScrollManager.reset('steps');
  const initialSteps = DB.steps.slice(0, InfiniteScrollManager.state.steps.limit);

  container.innerHTML = `
    <div id="steps-stream" class="space-y-4">
      ${initialSteps.map(step => renderStepCardHtml(step)).join('')}
    </div>
    <div id="sentinel-steps" class="infinite-scroll-sentinel" data-view="steps">
      ${DB.steps.length > initialSteps.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais passos...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-steps');
  if (sentinel && DB.steps.length > initialSteps.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreSteps() {
  const stream = document.getElementById('steps-stream');
  const sentinel = document.getElementById('sentinel-steps');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.steps;
  const start = (page - 1) * limit;
  const nextSteps = DB.steps.slice(start, start + limit);

  if (nextSteps.length > 0) {
    const html = nextSteps.map(step => renderStepCardHtml(step)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= DB.steps.length && sentinel) {
    sentinel.innerHTML = '';
  }
}

function deleteStep(stepId) {
  if (confirm('Deseja realmente excluir este passo?')) {
    DB.steps = DB.steps.filter(s => s.id !== stepId);
    renderSteps();
    renderAdminCMS();
  }
}

function renderHistoryItemHtml(item) {
  return `
    <div class="relative pl-6 pb-6 border-l-2 border-frevo-yellow last:border-l-0 infinite-scroll-item">
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
  `;
}

function renderHistory() {
  const container = document.getElementById('history-timeline');
  if (!container) return;

  InfiniteScrollManager.reset('history');
  const initialHistory = DB.history.slice(0, InfiniteScrollManager.state.history.limit);

  container.innerHTML = `
    <div id="history-stream">
      ${initialHistory.map(item => renderHistoryItemHtml(item)).join('')}
    </div>
    <div id="sentinel-history" class="infinite-scroll-sentinel" data-view="history">
      ${DB.history.length > initialHistory.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais fatos históricos...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-history');
  if (sentinel && DB.history.length > initialHistory.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreHistory() {
  const stream = document.getElementById('history-stream');
  const sentinel = document.getElementById('sentinel-history');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.history;
  const start = (page - 1) * limit;
  const nextHistory = DB.history.slice(start, start + limit);

  if (nextHistory.length > 0) {
    const html = nextHistory.map(item => renderHistoryItemHtml(item)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= DB.history.length && sentinel) {
    sentinel.innerHTML = '';
  }
}

// Render HTML de Ponto do Mapa com Google Maps e Waze
function renderMapPointCardHtml(point) {
  return `
    <div class="map-point-card space-y-3 infinite-scroll-item">
      <div>
        <div class="flex items-center justify-between mb-1">
          <span class="badge bg-frevo-orange/20 text-ink text-[11px] font-bold">${point.category}</span>
          <span class="text-[10px] text-muted font-semibold">Ponto Histórico</span>
        </div>
        <h3 class="font-display font-bold text-base text-ink">${point.name}</h3>
        <p class="text-xs text-muted font-medium mb-1">${point.address}</p>
        <p class="text-xs text-ink-soft leading-relaxed">${point.description}</p>
      </div>

      <!-- Ações de Rotas e Navegação (Google Maps & Waze) -->
      <div class="flex gap-2 pt-1">
        <a href="https://www.google.com/maps/search/?api=1&query=${point.coords[0]},${point.coords[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-gmaps text-xs flex-1 rounded-xl flex items-center justify-center gap-1.5 py-2.5 font-bold shadow-sm" title="Abrir rota no Google Maps">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Google Maps
        </a>

        <a href="https://waze.com/ul?ll=${point.coords[0]},${point.coords[1]}&navigate=yes" target="_blank" rel="noopener noreferrer" class="btn btn-waze text-xs flex-1 rounded-xl flex items-center justify-center gap-1.5 py-2.5 font-bold shadow-sm" title="Navegar pelo Waze">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.42 3.12 7.24L4 22l3.05-.98C8.56 21.64 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-3.5 11c-.83 0-1.5-.67-1.5-1.5S7.67 10 8.5 10s1.5.67 1.5 1.5S9.33 13 8.5 13zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
          Waze
        </a>
      </div>

      <button onclick="toggleMapEmbed('${point.id}')" class="btn btn-outline text-xs w-full rounded-xl flex items-center justify-center gap-1.5 py-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
        <span id="map-toggle-text-${point.id}">Ver Mapa Embutido no App ▼</span>
      </button>

      <div id="map-embed-${point.id}" class="map-embed-container">
        <iframe 
          title="Mapa de ${point.name}"
          loading="lazy"
          src="https://maps.google.com/maps?q=${point.coords[0]},${point.coords[1]}&hl=pt-BR&z=16&output=embed"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
}

function renderMap() {
  const container = document.getElementById('map-points-list');
  if (!container) return;

  InfiniteScrollManager.reset('map');
  const initialPoints = DB.mapPoints.slice(0, InfiniteScrollManager.state.map.limit);

  container.innerHTML = `
    <div id="map-stream" class="space-y-4">
      ${initialPoints.map(point => renderMapPointCardHtml(point)).join('')}
    </div>
    <div id="sentinel-map" class="infinite-scroll-sentinel" data-view="map">
      ${DB.mapPoints.length > initialPoints.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais pontos do mapa...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-map');
  if (sentinel && DB.mapPoints.length > initialPoints.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreMap() {
  const stream = document.getElementById('map-stream');
  const sentinel = document.getElementById('sentinel-map');
  if (!stream) return;

  const { page, limit } = InfiniteScrollManager.state.map;
  const start = (page - 1) * limit;
  const nextPoints = DB.mapPoints.slice(start, start + limit);

  if (nextPoints.length > 0) {
    const html = nextPoints.map(point => renderMapPointCardHtml(point)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= DB.mapPoints.length && sentinel) {
    sentinel.innerHTML = '';
  }
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
// PERFIL DO USUÁRIO & ARTISTA (ARTISTAS FAVORITOS, ITENS SALVOS OU PARTITURAS)
// ==============================================================================
let currentProfileTab = 'favorites';

function switchProfileTab(tabName, btnElement) {
  const isArtistOrAdmin = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';
  if (!isArtistOrAdmin && tabName === 'scores') {
    tabName = 'favorites';
  }

  currentProfileTab = tabName;
  document.querySelectorAll('.profile-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const targetBtn = document.querySelector(`.profile-tab-btn.tab-${tabName}`);
    if (targetBtn) targetBtn.classList.add('active');
  }
  renderProfileGallery();
}

function renderProfileGallery() {
  const container = document.getElementById('profile-gallery-container');
  if (!container) return;

  const isArtistOrAdmin = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';

  // 1. ABA DE ARTISTAS FAVORITADOS
  if (currentProfileTab === 'favorites') {
    const favoriteArtists = DB.artists.filter(a => (currentUserSession.favorites || []).includes(a.id));

    container.innerHTML = `
      <div class="space-y-3 pb-6">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-ink">Artistas Favoritados (${favoriteArtists.length})</span>
          <button onclick="switchView('artists')" class="text-xs font-bold text-frevo-orange hover:underline">+ Descobrir Artistas</button>
        </div>

        ${favoriteArtists.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${favoriteArtists.map(artist => `
              <div class="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                <div onclick="openArtistModal('${artist.name}', '${artist.avatar_url}', '${artist.cover_url}', '${artist.genre}', '${artist.bio}', '${artist.email}', '${artist.phone}', '${artist.id}')" class="flex items-center gap-3 min-w-0 cursor-pointer flex-1 mr-2">
                  <img src="${artist.avatar_url}" alt="${artist.name}" class="w-12 h-12 rounded-full object-cover border border-gray-200 flex-shrink-0" />
                  <div class="min-w-0 flex-1">
                    <h5 class="font-bold text-xs text-ink truncate">${artist.name}</h5>
                    <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold inline-block truncate mt-0.5">${artist.genre}</span>
                  </div>
                </div>
                <button onclick="toggleFavoriteArtist('${artist.id}')" class="p-2 rounded-xl text-frevo-orange bg-frevo-orange/10 hover:bg-frevo-orange/20 transition-colors flex-shrink-0" title="Desfavoritar Artista">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </button>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="p-8 text-center bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div class="w-12 h-12 rounded-full bg-frevo-orange/15 text-frevo-orange mx-auto flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <p class="text-xs text-muted mb-3 font-medium">Você ainda não favoritou nenhum artista do acervo.</p>
            <button onclick="switchView('artists')" class="btn btn-primary text-xs px-4 py-2 rounded-xl font-bold">
              Explorar Artistas do Frevo
            </button>
          </div>
        `}
      </div>
    `;
    return;
  }

  // 2. ABA DE ITENS SALVOS (PARTITURAS E PUBLICAÇÕES DO FEED)
  if (currentProfileTab === 'saved') {
    const savedPosts = DB.posts.filter(p => p.is_saved);
    const savedScores = DB.songs.filter(s => (currentUserSession.saved_scores || []).includes(s.id));
    const totalSaved = savedPosts.length + savedScores.length;

    container.innerHTML = `
      <div class="space-y-5 pb-6">
        <!-- Partituras & Músicas Salvas -->
        <div>
          <div class="flex items-center justify-between px-1 mb-2">
            <span class="text-xs font-bold text-ink flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16C7D9" stroke-width="2.5">
                <rect x="3" y="3" width="18" height="18" rx="6"></rect>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              Partituras Salvas (${savedScores.length})
            </span>
            <button onclick="switchView('songs')" class="text-xs font-bold text-frevo-orange hover:underline">+ Explorar Partituras</button>
          </div>

          ${savedScores.length > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${savedScores.map(song => `
                <div class="bg-white border border-gray-200 rounded-2xl p-3.5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div class="space-y-1 mb-2.5">
                    <div class="flex items-center justify-between">
                      <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-[10px] font-bold">${song.genre}</span>
                      <button onclick="toggleSaveScore('${song.id}')" class="p-1 text-frevo-orange hover:text-gray-400" title="Remover dos Salvos">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </button>
                    </div>
                    <h4 class="font-bold text-xs text-ink truncate">${song.title}</h4>
                    <p class="text-[11px] text-frevo-orange font-semibold truncate">${song.artist}</p>
                    <p class="text-[10px] text-muted line-clamp-1">${song.description}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-1.5 pt-2 border-t border-gray-100">
                    <button onclick="switchView('songs'); selectSongForDesktopViewer('${song.id}');" class="btn btn-outline text-[11px] py-1.5 rounded-xl font-bold">
                      Visualizar
                    </button>
                    <button onclick="downloadScore('${song.id}')" class="btn btn-cyan text-[11px] py-1.5 rounded-xl font-bold flex items-center justify-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      PDF
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="p-4 text-center bg-white rounded-2xl border border-dashed border-gray-200">
              <p class="text-xs text-muted">Nenhuma partitura salva ainda. Toque no ícone de salvar em qualquer partitura!</p>
            </div>
          `}
        </div>

        <!-- Publicações Salvas do Feed -->
        <div class="pt-2 border-t border-gray-100">
          <div class="flex items-center justify-between px-1 mb-2">
            <span class="text-xs font-bold text-ink flex items-center gap-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7447E8" stroke-width="2.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              Publicações Salvas (${savedPosts.length})
            </span>
            <button onclick="switchView('feed')" class="text-xs font-bold text-frevo-cyan hover:underline">Ver Feed</button>
          </div>

          ${savedPosts.length > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${savedPosts.map(post => `
                <div class="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div onclick="handleNotificationClick(null, 'post', '${post.id}')" class="flex items-center gap-3 min-w-0 cursor-pointer flex-1 mr-2">
                    <img src="${post.image}" alt="${post.title}" class="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                    <div class="min-w-0 flex-1">
                      <h4 class="font-bold text-xs text-ink truncate">${post.title}</h4>
                      <span class="text-[11px] text-muted truncate block">${post.author}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-1.5 flex-shrink-0">
                    <button onclick="toggleSave('${post.id}')" class="btn btn-outline text-xs px-2.5 py-1 rounded-xl text-frevo-red hover:bg-red-50 font-bold whitespace-nowrap">
                      Remover
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="p-4 text-center bg-white rounded-2xl border border-dashed border-gray-200">
              <p class="text-xs text-muted">Você ainda não salvou publicações do feed.</p>
            </div>
          `}
        </div>
      </div>
    `;
    return;
  }

  // 3. ABA DE PARTITURAS (Apenas Artistas e Administradores)
  if (currentProfileTab === 'scores') {
    if (!isArtistOrAdmin) {
      switchProfileTab('favorites');
      return;
    }

    const artistSongs = currentUserSession.artist_id 
      ? DB.songs.filter(s => s.author_id === currentUserSession.artist_id)
      : DB.songs;

    container.innerHTML = `
      <div class="space-y-3 pb-6">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-ink">Minhas Obras & Partituras (${artistSongs.length})</span>
          <button onclick="openSubmitSongModal()" class="text-xs font-bold text-frevo-orange hover:underline">+ Nova Obra</button>
        </div>
        ${artistSongs.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            ${artistSongs.map(song => `
              <div class="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                <div class="space-y-0.5 min-w-0 pr-2">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-[10px] font-bold">${song.genre}</span>
                    <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
                  </div>
                  <h4 class="font-bold text-xs text-ink leading-tight truncate">${song.title}</h4>
                  <p class="text-[11px] text-muted line-clamp-1">${song.description}</p>
                </div>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                  <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan text-xs py-1.5 px-3 h-8 rounded-xl font-bold flex-shrink-0">
                    Baixar
                  </button>
                  <button onclick="deleteSong('${song.id}')" class="p-1.5 text-gray-400 hover:text-frevo-red" title="Excluir">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="p-8 text-center bg-white rounded-2xl border border-gray-200">
            <p class="text-xs text-muted mb-2">Nenhuma partitura cadastrada ainda.</p>
            <button onclick="openSubmitSongModal()" class="btn btn-primary text-xs px-3 py-1.5 rounded-xl font-bold">
              Cadastrar Minha Primeira Partitura
            </button>
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

  // Notificação Cultural In-App & Push
  const newNotif = {
    id: `notif-${Date.now()}`,
    type: 'post',
    targetId: newPost.id,
    title: 'Nova Publicação Oficial!',
    message: `${newPost.author}: "${newPost.title}"`,
    author: newPost.author,
    author_avatar: newPost.avatar,
    time_ago: 'Agora',
    read: false
  };
  DB.notifications = DB.notifications || [];
  DB.notifications.unshift(newNotif);
  updateNotificationBadge();
  sendCulturalPushNotification({
    title: newNotif.title,
    message: newNotif.message,
    url: `/#feed?post=${newPost.id}`,
    type: 'post',
    targetId: newPost.id
  });

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
        <h3 class="font-display font-bold text-lg text-ink">Comentários (${(post.comments || []).length})</h3>
        <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">${post.title}</span>
      </div>
      <div class="space-y-2.5 max-h-60 overflow-y-auto pr-1" id="modal-comments-list-${post.id}">
        ${(post.comments && post.comments.length > 0) ? post.comments.map(c => renderCommentItemHtml(c, post.id)).join('') : '<p class="text-xs text-muted py-4 text-center">Seja o primeiro a comentar!</p>'}
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
          <input type="text" id="new-comment-input" placeholder="Adicionar comentário como ${currentUserSession.name || currentUserSession.handle}..." class="flex-1 px-3 py-2.5 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          <button onclick="addComment('${post.id}')" class="btn btn-primary text-xs rounded-xl px-4 font-bold">Publicar</button>
        </div>
      `}
    </div>
  `;

  modal.classList.add('open');
}

async function addComment(postId) {
  if (currentUserSession.role === 'guest') {
    alert('Você precisa estar logado para comentar.');
    openSessionModal();
    return;
  }

  const input = document.getElementById('new-comment-input');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  const post = DB.posts.find(p => p.id === postId);
  if (post) {
    if (!post.comments) post.comments = [];
    
    const newComment = {
      id: 'c_' + Date.now(),
      user_id: currentUserSession.id || null,
      user_handle: currentUserSession.handle.replace('@', ''),
      user: currentUserSession.name || currentUserSession.handle.replace('@', ''),
      text: text,
      created_at: new Date().toISOString(),
      time_ago: 'agora'
    };

    post.comments.push(newComment);
    closeModal();
    updateCommentsDrawerUI(postId);

    if (window.supabaseService && window.supabaseService.isConnected() && currentUserSession.id) {
      const saved = await window.supabaseService.addComment(postId, currentUserSession.id, text);
      if (saved && saved.id) {
        newComment.id = saved.id;
      }
    }
  }
}

// ==============================================================================
// GERAÇÃO E DOWNLOAD DE PARTITURAS EM PDF REAL
// ==============================================================================
function generateAndDownloadScorePdf(song) {
  try {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      alert('Biblioteca de PDF carregando... Por favor, tente novamente em alguns instantes.');
      return false;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const cyan = [22, 199, 217];
    const orange = [255, 138, 0];
    const red = [240, 68, 46];
    const ink = [23, 23, 23];
    const gray = [115, 115, 115];

    // Cabeçalho Oficial
    doc.setFillColor(244, 241, 234);
    doc.rect(0, 0, 210, 30, 'F');

    // Faixa colorida Frevo
    doc.setFillColor(...cyan);
    doc.rect(0, 30, 70, 2.5, 'F');
    doc.setFillColor(...orange);
    doc.rect(70, 30, 70, 2.5, 'F');
    doc.setFillColor(...red);
    doc.rect(140, 30, 70, 2.5, 'F');

    // Títulos Institucionais
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...orange);
    doc.text('FREVIA — ACERVO DIGITAL DA SALVAGUARDA DO FREVO DE PERNAMBUCO', 105, 11, { align: 'center' });

    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    doc.text('PATRIMÔNIO CULTURAL IMATERIAL DA HUMANIDADE (UNESCO / IPHAN)', 105, 17, { align: 'center' });
    doc.text('DOCUMENTO OFICIAL DE PARTITURA E ARRANJO', 105, 22, { align: 'center' });

    // Título da Obra
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(...ink);
    doc.text((song.title || 'PARTITURA DO FREVO').toUpperCase(), 105, 45, { align: 'center' });

    // Dados do Compositor / Gênero
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...red);
    doc.text(`GÊNERO: ${(song.genre || 'Frevo de Rua').toUpperCase()}`, 20, 56);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...ink);
    doc.text(`Compositor / Arranjador: ${song.artist || 'Maestro do Frevo'}`, 20, 63);
    doc.text(`Andamento: Allegro Vivace (140 - 152 BPM) • Tom: Do Maior / Re Menor`, 20, 70);
    doc.text(`Instrumentação: Orquestra de Frevo (Sopros, Metais, Palhetas e Percussão Tradicional)`, 20, 77);

    // Linha divisória
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.line(20, 82, 190, 82);

    // Pauta Musical Ilustrada (Pentagramas)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...orange);
    doc.text('PAUTA MUSICAL / GRADE INSTRUMENTAL', 20, 90);

    let startY = 96;
    for (let staff = 0; staff < 4; staff++) {
      const currentStaffY = startY + (staff * 18);
      doc.setDrawColor(180, 180, 180);
      doc.setLineWidth(0.3);
      for (let line = 0; line < 5; line++) {
        doc.line(20, currentStaffY + (line * 2.2), 190, currentStaffY + (line * 2.2));
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(...ink);
      doc.text('𝄞', 23, currentStaffY + 6.5);
      doc.setFontSize(7.5);
      doc.text('2', 29, currentStaffY + 3.5);
      doc.text('4', 29, currentStaffY + 7.5);

      // Compassos
      doc.line(65, currentStaffY, 65, currentStaffY + 8.8);
      doc.line(105, currentStaffY, 105, currentStaffY + 8.8);
      doc.line(145, currentStaffY, 145, currentStaffY + 8.8);
      doc.line(190, currentStaffY, 190, currentStaffY + 8.8);
      doc.line(190.8, currentStaffY, 190.8, currentStaffY + 8.8);
    }

    // Letra / Diretrizes
    const lyricsY = startY + 78;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...cyan);
    doc.text('LETRA & DIRETRIZES DE EXECUÇÃO', 20, lyricsY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...ink);
    
    const lyricsContent = song.lyrics || 
      `1ª Estrofe:\nNo passo ligeiro o clarim já tocou,\nO frevo ferveu, o Recife acordou!\nCom sombrinha no ar e tesoura no chão,\nÉ frevo no sangue de cada folião.\n\nRefrão:\nFreva, freva sem parar!\nDe Olinda até o cais,\nNa ponta do pé ninguém cansa jamais!\n\nObservação de Arranjo: Acelerar a dinâmica nos trombones e surdos na transição do refrão.`;

    const splitLyrics = doc.splitTextToSize(lyricsContent, 170);
    doc.text(splitLyrics, 20, lyricsY + 6);

    // Rodapé de Autenticidade
    doc.setDrawColor(220, 220, 220);
    doc.line(20, 275, 190, 275);

    doc.setFontSize(7);
    doc.setTextColor(...gray);
    doc.text(`Documento gerado digitalmente pela plataforma FrevIA em ${new Date().toLocaleDateString('pt-BR')} • Licença de Salvaguarda Aberta`, 105, 281, { align: 'center' });
    doc.text(`ID do Registro: FREV-${(song.id || '00000000').substring(0, 8).toUpperCase()} • Autenticado para pesquisa e execução cultural`, 105, 285, { align: 'center' });

    // Download do arquivo
    const safeTitle = (song.title || 'Partitura').replace(/[^a-zA-Z0-9_-]/g, '_');
    doc.save(`Partitura_${safeTitle}.pdf`);
    return true;
  } catch (err) {
    console.error('[PDF] Erro ao gerar partitura em PDF:', err);
    alert('Erro ao processar PDF da partitura: ' + err.message);
    return false;
  }
}

function openScoreModal(title, artist, songId) {
  const song = DB.songs.find(s => s.id === songId) || { id: songId, title, artist, genre: 'Frevo de Rua', downloads_count: 120 };
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Partitura & Arranjo</h3>
        <p class="text-[11px] text-muted">Acervo Digital Oficial da Salvaguarda</p>
      </div>

      <div class="p-4 bg-surface-soft border border-gray-100 rounded-2xl space-y-2 text-left">
        <div class="flex items-center justify-between">
          <span class="badge bg-frevo-cyan/20 text-ink text-[11px] font-bold">${song.genre}</span>
          <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
        </div>
        <h3 class="font-display font-bold text-lg text-ink leading-tight">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange">${song.artist}</p>
        <p class="text-xs text-muted leading-relaxed">${song.description || 'Partitura oficial formatada com pauta musical, grade de arranjo e letra completa.'}</p>
      </div>

      <button onclick="downloadScore('${song.id}')" class="btn btn-cyan w-full text-xs rounded-xl shadow-md py-3 font-bold flex items-center justify-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Baixar Partitura em PDF (.pdf)
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function downloadScore(songId) {
  const song = DB.songs.find(s => s.id === songId) || { id: songId, title: 'Frevo da Saudade', artist: 'Maestro do Frevo', genre: 'Frevo de Rua', downloads_count: 120 };
  
  const success = generateAndDownloadScorePdf(song);
  if (success !== false) {
    song.downloads_count = (song.downloads_count || 120) + 1;
    renderSongs();
    renderProfileGallery();
    closeModal();
  }
}

function openStoryModal(name, avatar, subtitle) {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <div class="text-center space-y-4">
      <div class="story-ring p-1.5 inline-block">
        <img src="${avatar}" alt="${name}" class="w-24 h-24 rounded-full object-cover border-2 border-white" />
      </div>
      <div class="pr-10">
        <h3 class="font-display font-bold text-xl text-ink">${name}</h3>
        <span class="text-xs text-muted">${subtitle}</span>
      </div>
      <div class="p-4 bg-surface-soft rounded-2xl text-xs text-ink leading-relaxed border border-gray-100">
        "O frevo é a pulsação do nosso povo nas ladeiras e no asfalto."
      </div>
      <button onclick="closeModal()" class="btn btn-primary w-full text-xs rounded-xl py-2.5">Fechar Story</button>
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
  name: '',
  handle: '',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  bio: '',
  socialLinks: [],
  email: '',
  phone: ''
};

function updateProfileUI() {
  const avatarEl = document.getElementById('profile-display-avatar');
  const nameEl = document.getElementById('profile-display-name');
  const handleEl = document.getElementById('profile-display-handle');
  const bioEl = document.getElementById('profile-display-bio');
  const socialsContainer = document.getElementById('profile-display-socials');
  const profileTabs = document.getElementById('profile-tabs');

  // Sincronizar dados se o usuário estiver logado
  if (currentUserSession.role !== 'guest') {
    currentUserProfile.name = currentUserSession.name || currentUserProfile.name || '';
    currentUserProfile.handle = currentUserSession.handle || currentUserProfile.handle || '';
    currentUserProfile.avatar = currentUserSession.avatar || currentUserProfile.avatar;
    if (currentUserSession.email) currentUserProfile.email = currentUserSession.email;
  }

  if (avatarEl) avatarEl.src = currentUserProfile.avatar || currentUserSession.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
  if (nameEl) nameEl.innerText = currentUserProfile.name || (currentUserSession.role === 'guest' ? 'Visitante' : 'Novo Folião');
  if (handleEl) handleEl.innerText = currentUserProfile.handle || (currentUserSession.role === 'guest' ? '@visitante' : '@foliao');
  if (bioEl) {
    if (currentUserProfile.bio) {
      bioEl.innerText = currentUserProfile.bio;
    } else {
      bioEl.innerText = currentUserSession.role === 'guest'
        ? 'Acesse ou crie sua conta para personalizar seu perfil, salvar itens e acompanhar artistas.'
        : 'Toque em "Editar Perfil" para adicionar sua biografia e redes sociais!';
    }
  }
  
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

  // Se for usuário comum ou visitante, ocultar a aba de partituras criadas (ele não cria partituras)
  const isArtistOrAdmin = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';
  if (profileTabs) {
    const scoresTabBtn = profileTabs.querySelector('.tab-scores');
    if (scoresTabBtn) {
      scoresTabBtn.style.display = isArtistOrAdmin ? 'inline-flex' : 'none';
    }
    
    // Garantir que APENAS uma aba esteja ativa no carregamento do perfil
    profileTabs.querySelectorAll('.profile-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (!isArtistOrAdmin && currentProfileTab === 'scores') {
      currentProfileTab = 'favorites';
    }
    const currentTabBtn = profileTabs.querySelector(`.profile-tab-btn.tab-${currentProfileTab}`);
    if (currentTabBtn) {
      currentTabBtn.classList.add('active');
    } else {
      const favBtn = profileTabs.querySelector('.profile-tab-btn.tab-favorites');
      if (favBtn) favBtn.classList.add('active');
    }
  }
}

function openAccountDropdownModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Gerenciar Conta</h3>
        <p class="text-xs text-frevo-orange font-bold">${currentUserProfile.handle}</p>
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
      <div class="pb-2 border-b border-gray-100 pr-10">
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
let isFirstLoginFlow = false;

function openEditProfileModal(isFirstLogin = false) {
  if (currentUserSession.role === 'guest') {
    alert('Faça login para editar o seu perfil.');
    openSessionModal();
    return;
  }

  isFirstLoginFlow = isFirstLogin;
  tempUploadedAvatar = currentUserProfile.avatar;
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <div class="flex items-center gap-2">
          ${isFirstLogin ? '<span class="badge bg-frevo-orange text-white text-[10px] font-bold px-2 py-0.5">Bem-vindo(a)!</span>' : ''}
          <h3 class="font-display font-bold text-lg text-ink">${isFirstLogin ? 'Complete seu Perfil' : 'Editar Perfil'}</h3>
        </div>
        <p class="text-[11px] text-muted mt-0.5">${isFirstLogin ? 'Configure seu nome e foto antes de explorar o universo do Frevo.' : 'Atualize suas informações visíveis no FrevAI'}</p>
      </div>

      <div class="flex flex-col items-center justify-center space-y-2 py-2">
        <div class="relative">
          <img id="edit-avatar-preview" src="${currentUserProfile.avatar || currentUserSession.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}" alt="Preview" class="w-20 h-20 rounded-full object-cover border-2 border-frevo-orange shadow-md" />
          <label for="profile-avatar-file-input" class="absolute bottom-0 right-0 w-7 h-7 bg-ink text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-frevo-orange transition-colors" title="Carregar nova foto">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </label>
        </div>
        <input type="file" id="profile-avatar-file-input" accept="image/*" class="hidden" onchange="handleUserAvatarUpload(event)" />
        <span class="text-[11px] text-muted">Toque no ícone para enviar uma foto do seu aparelho</span>
      </div>

      <form id="edit-profile-form" onsubmit="saveProfileChanges(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Nome de Exibição</label>
          <input type="text" id="edit-name-input" value="${currentUserProfile.name}" placeholder="Seu nome ou apelido carnavalesco" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Nome de Usuário (@)</label>
          <input type="text" id="edit-handle-input" value="${currentUserProfile.handle}" placeholder="@seu_usuario" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Mini-Biografia</label>
          <textarea id="edit-bio-input" rows="2" placeholder="Ex: Amante do Frevo de Rua e passista nas horas vagas!" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange leading-relaxed">${currentUserProfile.bio}</textarea>
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
            <input type="email" id="edit-email-input" value="${currentUserProfile.email}" placeholder="seu@email.com" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Telefone / WhatsApp</label>
            <input type="tel" id="edit-phone-input" value="${currentUserProfile.phone}" placeholder="(81) 99999-9999" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          ${isFirstLogin ? `
            <button type="button" onclick="skipProfileAndOpenOnboarding()" class="btn btn-outline flex-1 text-xs rounded-xl">Pular por enquanto</button>
          ` : `
            <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          `}
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">${isFirstLogin ? 'Salvar e Continuar →' : 'Salvar Perfil'}</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function skipProfileAndOpenOnboarding() {
  closeModal();
  setTimeout(() => {
    openOnboardingModal();
  }, 250);
}
function handleUserAvatarUpload(event) {
  handleAvatarFileSelect(event);
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

async function saveProfileChanges(e) {
  e.preventDefault();
  const name = document.getElementById('edit-name-input').value.trim();
  const handle = document.getElementById('edit-handle-input').value.trim();
  const bio = document.getElementById('edit-bio-input').value.trim();
  const email = document.getElementById('edit-email-input').value.trim();
  const phone = document.getElementById('edit-phone-input').value.trim();

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
  currentUserProfile.handle = handle ? (handle.startsWith('@') ? handle : '@' + handle) : '';
  currentUserProfile.bio = bio;
  currentUserProfile.email = email;
  currentUserProfile.phone = phone;
  currentUserProfile.socialLinks = socialLinks;
  if (tempUploadedAvatar) {
    currentUserProfile.avatar = tempUploadedAvatar;
    currentUserSession.avatar = tempUploadedAvatar;
  }
  if (name) currentUserSession.name = name;
  if (handle) currentUserSession.handle = currentUserProfile.handle;

  saveCurrentSession();
  updateProfileUI();

  // Persistir no Supabase se conectado
  if (window.supabaseService && window.supabaseService.isConnected() && currentUserSession.id) {
    window.supabaseService.upsertProfile({
      id: currentUserSession.id,
      email: currentUserSession.email,
      user_metadata: {
        full_name: currentUserProfile.name,
        name: currentUserProfile.name,
        display_name: currentUserProfile.name,
        avatar_url: currentUserProfile.avatar
      }
    }, {
      display_name: currentUserProfile.name,
      avatar_url: currentUserProfile.avatar
    });
  }

  const wasFirstLogin = isFirstLoginFlow;
  isFirstLoginFlow = false;
  closeModal();

  if (wasFirstLogin) {
    setTimeout(() => {
      openOnboardingModal();
    }, 250);
  } else {
    alert('Perfil atualizado com sucesso!');
  }
}

// ==============================================================================
// ONBOARDING INTERATIVO EM CARDS (SWIPABLE / NAVEGÁVEL COM BREADCRUMBS)
// ==============================================================================
let currentOnboardingIndex = 0;
const totalOnboardingSlides = 5;

function openOnboardingModal() {
  currentOnboardingIndex = 0;
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="text-left space-y-4">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-frevo-orange animate-pulse"></span>
          <span class="font-display font-bold text-sm text-ink uppercase tracking-wider">Tour do FrevAI</span>
        </div>
        <button type="button" onclick="closeModal(); localStorage.setItem('frevai_onboarding_completed', 'true');" class="text-xs text-muted hover:text-ink font-bold">
          Pular Tour
        </button>
      </div>

      <!-- Carrossel de Cards -->
      <div class="onboarding-carousel relative rounded-3xl overflow-hidden shadow-inner bg-surface-soft p-1">
        <div id="onboarding-track" class="onboarding-track flex">
          
          <!-- Slide 1: Boas-vindas -->
          <div class="onboarding-slide">
            <div class="bg-gradient-to-br from-[#FF8A00] to-[#F0442E] p-5 rounded-2xl text-white min-h-[260px] flex flex-col justify-between shadow-lg">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 .55.45 1 1 1h7v6c0 1.1.9 2 2 2s2-.9 2-2c0-.55-.45-1-1-1s-1 .45-1 1v-6h9c.55 0 1-.45 1-1 0-5.52-4.48-10-10-10zm-1.5 9.5C6.36 11.5 3.96 8.54 3.58 4.67 5.6 3.6 7.91 3 10.5 3v8.5zm3 0V3c2.59 0 4.9.6 6.92 1.67-.38 3.87-2.78 6.83-6.92 6.83z"/>
                  </svg>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-white/80">Bem-vindo(a) ao FrevAI</span>
                <h4 class="font-display font-extrabold text-xl leading-tight mt-1 text-white">O Universo do Frevo no seu Bolso</h4>
                <p class="text-xs text-white/90 mt-2 leading-relaxed">
                  Conecte-se com a tradição pernambucana: partituras, passos acrobáticos, rotas históricas e os grandes mestres do Frevo.
                </p>
              </div>
              <div class="flex items-center gap-2 pt-3 border-t border-white/20 text-[11px] font-semibold text-white/90">
                <span class="w-2 h-2 rounded-full bg-white"></span>
                Patrimônio Cultural Imaterial da Humanidade
              </div>
            </div>
          </div>

          <!-- Slide 2: Feed & Comunidade -->
          <div class="onboarding-slide">
            <div class="bg-gradient-to-br from-[#7447E8] to-[#F04FA3] p-5 rounded-2xl text-white min-h-[260px] flex flex-col justify-between shadow-lg">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                  </svg>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-white/80">Feed & Interações</span>
                <h4 class="font-display font-extrabold text-xl leading-tight mt-1 text-white">Comunidade e Notícias Vivas</h4>
                <p class="text-xs text-white/90 mt-2 leading-relaxed">
                  Curta publicações, salve seus posts favoritos e participe das conversas com a caixa de comentários instantânea abaixo de cada publicação.
                </p>
              </div>
              <div class="flex items-center gap-2 pt-3 border-t border-white/20 text-[11px] font-semibold text-white/90">
                <span class="w-2 h-2 rounded-full bg-white"></span>
                Comente e interaja com mestres e passistas
              </div>
            </div>
          </div>

          <!-- Slide 3: Letras & Partituras -->
          <div class="onboarding-slide">
            <div class="bg-gradient-to-br from-[#00A86B] to-[#16C7D9] p-5 rounded-2xl text-white min-h-[260px] flex flex-col justify-between shadow-lg">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-white/80">Acervo Musical</span>
                <h4 class="font-display font-extrabold text-xl leading-tight mt-1 text-white">Partituras & Letras em PDF</h4>
                <p class="text-xs text-white/90 mt-2 leading-relaxed">
                  Acesse arranjos autênticos de Frevo de Rua, Canção e Bloco. Toque no botão de download para salvar a pauta musical formatada em PDF.
                </p>
              </div>
              <div class="flex items-center gap-2 pt-3 border-t border-white/20 text-[11px] font-semibold text-white/90">
                <span class="w-2 h-2 rounded-full bg-white"></span>
                Download de partituras e letras para ensaiar
              </div>
            </div>
          </div>

          <!-- Slide 4: Passos & Mapa Cultural -->
          <div class="onboarding-slide">
            <div class="bg-gradient-to-br from-[#FFD928] to-[#FF8A00] p-5 rounded-2xl text-ink min-h-[260px] flex flex-col justify-between shadow-lg">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-ink/10 backdrop-blur-md flex items-center justify-center mb-3 text-ink">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-ink/70">Passos & Mapa Cultural</span>
                <h4 class="font-display font-extrabold text-xl leading-tight mt-1 text-ink">Aprenda e Trace sua Rota</h4>
                <p class="text-xs text-ink/90 mt-2 leading-relaxed">
                  Aprenda passos como Ferrolho e Tesoura com guias passo a passo, e visite pontos históricos com rotas diretas no Google Maps ou Waze.
                </p>
              </div>
              <div class="flex items-center gap-2 pt-3 border-t border-ink/20 text-[11px] font-semibold text-ink/80">
                <span class="w-2 h-2 rounded-full bg-ink"></span>
                Navegação via Waze e Google Maps integrada
              </div>
            </div>
          </div>

          <!-- Slide 5: Artistas & Conexão -->
          <div class="onboarding-slide">
            <div class="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-5 rounded-2xl text-white min-h-[260px] flex flex-col justify-between shadow-lg">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-frevo-orange">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest text-white/70">Tudo Pronto!</span>
                <h4 class="font-display font-extrabold text-xl leading-tight mt-1 text-white">Viva o Frevo o Ano Inteiro</h4>
                <p class="text-xs text-white/80 mt-2 leading-relaxed">
                  Explore o catálogo de artistas, favorite seus mestres prediletos e mantenha a chama do carnaval de Pernambuco acesa.
                </p>
              </div>
              <div class="flex items-center gap-2 pt-3 border-t border-white/20 text-[11px] font-semibold text-white/90">
                <span class="w-2 h-2 rounded-full bg-frevo-orange"></span>
                Experiência cultural fluida e responsiva
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Breadcrumbs em Bolinhas (Dots) -->
      <div class="flex items-center justify-center gap-2 py-1">
        <button onclick="goToOnboardingSlide(0)" class="onboarding-dot active" id="onb-dot-0" aria-label="Slide 1"></button>
        <button onclick="goToOnboardingSlide(1)" class="onboarding-dot" id="onb-dot-1" aria-label="Slide 2"></button>
        <button onclick="goToOnboardingSlide(2)" class="onboarding-dot" id="onb-dot-2" aria-label="Slide 3"></button>
        <button onclick="goToOnboardingSlide(3)" class="onboarding-dot" id="onb-dot-3" aria-label="Slide 4"></button>
        <button onclick="goToOnboardingSlide(4)" class="onboarding-dot" id="onb-dot-4" aria-label="Slide 5"></button>
      </div>

      <!-- Ações de Navegação -->
      <div class="flex items-center gap-2 pt-1">
        <button id="onb-btn-prev" onclick="onboardingPrev()" class="btn btn-outline text-xs rounded-xl px-4 py-2.5 font-bold opacity-40 cursor-not-allowed" disabled>
          Anterior
        </button>
        <button id="onb-btn-next" onclick="onboardingNext()" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">
          Próximo
        </button>
      </div>
    </div>
  `;

  // Suporte avançado e prazeroso a gestos de arrasto (Touch e Mouse Drag com Física e Rotação)
  const carousel = document.querySelector('.onboarding-carousel');
  const track = document.getElementById('onboarding-track');

  if (carousel && track) {
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let deltaX = 0;

    const startDrag = (clientX) => {
      isDragging = true;
      startX = clientX;
      currentX = clientX;
      deltaX = 0;
      carousel.classList.add('is-dragging');
      track.style.transition = 'none';
      const activeCard = track.children[currentOnboardingIndex]?.firstElementChild;
      if (activeCard) {
        activeCard.style.transition = 'none';
      }
    };

    const moveDrag = (clientX) => {
      if (!isDragging) return;
      currentX = clientX;
      deltaX = currentX - startX;

      // Resistência elástica nos extremos (primeiro e último card)
      let effectiveDelta = deltaX;
      if ((currentOnboardingIndex === 0 && deltaX > 0) || (currentOnboardingIndex === totalOnboardingSlides - 1 && deltaX < 0)) {
        effectiveDelta = deltaX * 0.32;
      }

      // Rotação suave baseada no deslocamento para sensação física orgânica e prazerosa
      const tilt = (effectiveDelta / 280) * 6; // até ~6 graus
      const scale = 1 - Math.min(Math.abs(effectiveDelta) / 3000, 0.035);

      track.style.transform = `translateX(calc(-${currentOnboardingIndex * 100}% + ${effectiveDelta}px))`;

      const activeCard = track.children[currentOnboardingIndex]?.firstElementChild;
      if (activeCard) {
        activeCard.style.transform = `rotate(${tilt}deg) scale(${scale})`;
      }
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove('is-dragging');

      track.style.transition = 'transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.2)';

      const activeCard = track.children[currentOnboardingIndex]?.firstElementChild;
      if (activeCard) {
        activeCard.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2), box-shadow 0.4s ease';
        activeCard.style.transform = '';
      }

      // Se arrastou mais que o limiar (45px)
      if (deltaX < -45) {
        onboardingNext();
      } else if (deltaX > 45) {
        onboardingPrev();
      } else {
        updateOnboardingView();
      }
    };

    // Touch events
    carousel.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length === 1) startDrag(e.touches[0].clientX);
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length === 1) moveDrag(e.touches[0].clientX);
    }, { passive: true });

    carousel.addEventListener('touchend', endDrag, { passive: true });
    carousel.addEventListener('touchcancel', endDrag, { passive: true });

    // Mouse drag events
    carousel.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) moveDrag(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) endDrag();
    });
  }

  modal.classList.add('open');
}

function updateOnboardingView() {
  const track = document.getElementById('onboarding-track');
  if (track) {
    track.style.transition = 'transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.2)';
    track.style.transform = `translateX(-${currentOnboardingIndex * 100}%)`;
    
    // Limpar transformações inline dos cards filhos
    Array.from(track.children).forEach(slide => {
      const card = slide.firstElementChild;
      if (card) {
        card.style.transform = '';
      }
    });
  }

  // Atualizar dots
  for (let i = 0; i < totalOnboardingSlides; i++) {
    const dot = document.getElementById(`onb-dot-${i}`);
    if (dot) {
      if (i === currentOnboardingIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    }
  }

  // Atualizar botões
  const btnPrev = document.getElementById('onb-btn-prev');
  const btnNext = document.getElementById('onb-btn-next');

  if (btnPrev) {
    if (currentOnboardingIndex === 0) {
      btnPrev.disabled = true;
      btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
      btnPrev.disabled = false;
      btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }
  }

  if (btnNext) {
    if (currentOnboardingIndex === totalOnboardingSlides - 1) {
      btnNext.innerText = 'Começar a Explorar';
    } else {
      btnNext.innerText = 'Próximo';
    }
  }
}

function onboardingNext() {
  if (currentOnboardingIndex < totalOnboardingSlides - 1) {
    currentOnboardingIndex++;
    updateOnboardingView();
  } else {
    localStorage.setItem('frevai_onboarding_completed', 'true');
    closeModal();
  }
}

function onboardingPrev() {
  if (currentOnboardingIndex > 0) {
    currentOnboardingIndex--;
    updateOnboardingView();
  }
}

function goToOnboardingSlide(index) {
  if (index >= 0 && index < totalOnboardingSlides) {
    currentOnboardingIndex = index;
    updateOnboardingView();
  }
}

function openContactModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Contato com o Artista</h3>
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
      <div class="pb-2 border-b border-gray-100 pr-10">
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

  // Notificação Cultural In-App & Push (Nova Partitura de Artista)
  const newNotif = {
    id: `notif-${Date.now()}`,
    type: 'score',
    targetId: newSong.id,
    title: 'Nova Partitura Lançada!',
    message: `${newSong.artist} disponibilizou a partitura de "${newSong.title}".`,
    author: newSong.artist,
    author_avatar: currentUserSession.avatar,
    time_ago: 'Agora',
    read: false
  };
  DB.notifications = DB.notifications || [];
  DB.notifications.unshift(newNotif);
  updateNotificationBadge();
  sendCulturalPushNotification({
    title: newNotif.title,
    message: newNotif.message,
    url: `/#songs?score=${newSong.id}`,
    type: 'score',
    targetId: newSong.id
  });

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

  // Inicializar o Infinite Scroll com IntersectionObserver para otimização mobile
  if (typeof InfiniteScrollManager !== 'undefined' && InfiniteScrollManager.init) {
    InfiniteScrollManager.init();
  }

  if (window.FREVIA_CONFIG && window.FREVIA_CONFIG.isConfigured()) {
    syncAllWithSupabase();
  }

  // Ouvinte de mudança de autenticação no Supabase
  if (window.supabaseService) {
    window.supabaseService.onAuthStateChange(async (event, session) => {
      if (session && session.user) {
        // Tenta obter perfil do banco ou cria se não existir
        let dbProfile = await window.supabaseService.getProfile(session.user.id);
        const isBrandNew = !dbProfile;
        if (!dbProfile) {
          dbProfile = await window.supabaseService.upsertProfile(session.user);
        }

        const googleAvatar = session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture;
        const currentAvatar = dbProfile?.avatar_url || googleAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';

        currentUserSession = {
          id: session.user.id,
          role: dbProfile?.role || session.user.user_metadata?.role || 'user',
          name: dbProfile?.display_name || session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
          handle: dbProfile?.handle || (session.user.email ? '@' + session.user.email.split('@')[0] : ''),
          avatar: currentAvatar,
          email: session.user.email,
          artist_id: null,
          favorites: []
        };

        currentUserProfile.name = currentUserSession.name;
        currentUserProfile.handle = currentUserSession.handle;
        currentUserProfile.avatar = currentAvatar;
        currentUserProfile.email = session.user.email;
        if (dbProfile?.bio) currentUserProfile.bio = dbProfile.bio;

        saveCurrentSession();
        updateProfileUI();
        renderProfileGallery();

        // Se o usuário acabou de entrar e o perfil está em branco ou é novo login, abrir modal de edição
        if (event === 'SIGNED_IN' && (!currentUserProfile.name || !localStorage.getItem('frevai_onboarding_completed'))) {
          setTimeout(() => {
            openEditProfileModal(true);
          }, 350);
        }
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

  updateNotificationBadge();

  // Tratamento de Deep Linking de Notificações / Push (Hash e Query)
  const handleDeepLink = () => {
    const hash = window.location.hash || '';
    if (hash.includes('post=')) {
      const postId = hash.split('post=')[1]?.split('&')[0];
      if (postId) {
        switchView('feed');
        setTimeout(() => {
          const el = document.getElementById(`post-card-${postId}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('highlight-pulse');
            setTimeout(() => el.classList.remove('highlight-pulse'), 3500);
          }
        }, 300);
      }
    } else if (hash.includes('score=')) {
      const scoreId = hash.split('score=')[1]?.split('&')[0];
      if (scoreId) {
        switchView('songs');
        const song = (DB.songs || []).find(s => s.id === scoreId);
        if (song) {
          setTimeout(() => {
            openScoreModal(song.title, song.artist, song.id);
          }, 300);
        }
      }
    }
  };

  handleDeepLink();
  window.addEventListener('hashchange', handleDeepLink);

  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
