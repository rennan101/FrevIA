// ==============================================================================
// FREVAI - STATE MANAGEMENT & UNIFIED DATA STORE (DB)
// ==============================================================================

const DB = {
  artists: [
    {
      id: 'a1',
      name: 'SpokFrevo Orquestra',
      handle: '@spokfrevo',
      genre: 'Frevo de Rua',
      bio: 'Comandada pelo maestro e saxofonista Spok (Silvério Pessoa), a big band de 18 músicos é o maior nome do frevo instrumental na atualidade. Criadores de um estilo único que fundiu frevo pernambucano com jazz e música de câmara, levando o gênero aos maiores festivais internacionais.',
      avatar_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
      email: 'contato@spokfrevo.com.br',
      phone: '+5581999990001',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a2',
      name: 'Maestro Duda',
      handle: '@maestroduda',
      genre: 'Frevo de Rua',
      bio: 'Ivan da Silva Bezerra, o Maestro Duda (1935–2018), foi o maior compositor de frevo do século XX. Autor de mais de 700 frevos, ganhou o prêmio de melhor compositor do carnaval pernambucano 12 vezes. Sua obra é fundamental para a compreensão e preservação do gênero.',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
      email: 'acervo@maestroduda.com.br',
      phone: '+5581999990002',
      is_approved: true,
      has_story: true,
    },
    {
      id: 'a3',
      name: 'Claudionor Germano',
      handle: '@claudionorgermano',
      genre: 'Frevo Canção',
      bio: 'Patrimônio Vivo de Pernambuco e o cantor mais completo do frevo-canção. Com 70 anos de carreira, Claudionor Germano gravou dezenas de discos interpretando os maiores clássicos de Capiba e Nelson Ferreira, tornando-se referência máxima da voz do frevo pernambucano.',
      avatar_url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80',
      cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      email: 'contato@claudionorgermano.art.br',
      phone: '+5581999990003',
      is_approved: true,
      has_story: true,
    }
  ],

  posts: [
    {
      id: 'p1',
      author: 'Paço do Frevo',
      handle: 'pacodofrevo',
      avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80',
      location: 'Praça do Arsenal, Recife Antigo',
      type: 'event',
      title: 'Acerto de Marcha no Recife Antigo',
      content: 'O som estridente e alegre dos clarins e corais líricos tomará conta da Praça do Arsenal neste domingo a partir das 16h! Traga sua sombrinha e junte-se ao cortejo da nossa cultura viva.',
      tags: ['CarnavalDePernambuco', 'RecifeAntigo', 'AcertoDeMarcha'],
      likes: 342,
      is_liked: false,
      is_saved: false,
      is_admin_post: true,
      author_id: 'admin_paco',
      artist_id: null,
      time_ago: 'HÁ 2 HORAS',
      created_at: '2026-09-16T12:00:00Z',
      comments: [
        { id: 'c1', user: 'Mariana Silva', user_handle: 'mariana.passista', user_id: 'u_mariana', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', text: 'Estarei lá com toda a turma do passo!', created_at: '2026-09-16T12:30:00Z', time_ago: 'HÁ 1 HORA' },
        { id: 'c2', user: 'Carlos Metais', user_handle: 'carlos_metais', user_id: 'u_carlos', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', text: 'Os arranjos deste ano estão impecáveis.', created_at: '2026-09-16T13:00:00Z', time_ago: 'HÁ 30 MIN' }
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
      title: 'Nova Partitura: "Bomba em Brasa"',
      content: 'Disponibilizamos a partitura completa com arranjo para saxofones e trompetes no acervo aberto do FrevAI! Músicos e orquestras de todo o Brasil já podem baixar gratuitamente.',
      tags: ['FrevoDeRua', 'PartiturasAbertas', 'Arranjos'],
      likes: 589,
      is_liked: true,
      is_saved: true,
      is_admin_post: false,
      author_id: 'a1',
      artist_id: 'a1',
      time_ago: 'HÁ 6 HORAS',
      created_at: '2026-09-16T08:30:00Z',
      comments: [
        { id: 'c3', user: 'Orquestra Olinda', user_handle: 'orquestra_olinda', user_id: 'u_olinda', avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=150&q=80', text: 'Já baixamos e vamos ensaiar hoje à noite!', created_at: '2026-09-16T09:15:00Z', time_ago: 'HÁ 5 HORAS' }
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
      is_admin_post: false,
      author_id: 'a2',
      artist_id: 'a2',
      time_ago: 'ONTEM',
      created_at: '2026-09-15T20:00:00Z',
      comments: []
    },
    {
      id: 'p4',
      author: 'Bloco da Saudade',
      handle: 'blocodasaudade',
      avatar: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80',
      location: 'Sede do Bloco, Recife',
      type: 'culture',
      title: 'Ensaio Aberto dos Clarins e Coral Feminino',
      content: 'Neste sábado abriremos as portas para o ensaio geral dos nossos clássicos líricos. Convidamos todos os amantes do Frevo de Bloco para cantar conosco!',
      tags: ['FrevoDeBloco', 'BlocoDaSaudade', 'CoralLirico'],
      likes: 412,
      is_liked: false,
      is_saved: false,
      is_admin_post: false,
      author_id: 'a3',
      artist_id: 'a3',
      time_ago: 'HÁ 1 DIA',
      created_at: '2026-09-15T15:00:00Z',
      comments: []
    },
    {
      id: 'p5',
      author: 'Giselle Andrade',
      handle: 'giselleandrade',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80',
      location: 'Quatro Cantos, Olinda',
      type: 'culture',
      title: 'Oficina Aberta: Passo da Tesoura e Parafuso',
      content: 'Aprenda os segredos da agilidade e do equilíbrio na dança do frevo com passistas premiados de Olinda e Recife.',
      tags: ['PassosDoFrevo', 'Danca', 'Olinda'],
      likes: 678,
      is_liked: true,
      is_saved: false,
      is_admin_post: false,
      author_id: 'a6',
      artist_id: 'a6',
      time_ago: 'HÁ 2 DIAS',
      created_at: '2026-09-14T18:00:00Z',
      comments: []
    }
  ],

  songs: [
    // ========================================================
    // MÚSICAS — SpokFrevo Orquestra (a1)
    // ========================================================
    {
      id: 's1',
      title: 'Vassourinhas (SpokFrevo)',
      artist: 'SpokFrevo Orquestra',
      genre: 'Frevo de Rua',
      description: 'Releitura magistral da mais célebre marcha pernambucana de todos os tempos, com arranjo de big band criado por Spok para o álbum "Ao Vivo em Lisboa".',
      lyrics: `(Instrumental — Frevo de Rua com Big Band)

Vassourinhas que varrem as ruas do Recife
No carnaval que o pernambucano nunca esquece
O sax de Spok conduz os 18 músicos
Num voo rasante sobre o coração do frevo!

(Improviso de saxofone alto — cadência livre)
Quando a trompete ataca as ladeiras cantam
E o mundo inteiro aprende como frevo se faz!`,
      score_file: 'spokfrevo-vassourinhas-bigband.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-brazilian-carnival-brass-band-1120.mp3',
      cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 247,
      plays_count: 58400,
      is_popular: true,
      album_id: 'alb1',
      status: 'published',
      downloads_count: 3220,
      author_id: 'a1',
      allow_download: true
    },
    {
      id: 's2',
      title: 'Passo de Anjo',
      artist: 'SpokFrevo Orquestra',
      genre: 'Frevo de Rua',
      description: 'Composição original premiada internacionalmente, com arranjo para big band e improv de saxofone alto em Re Maior. Destaque do álbum "Spok Frevo Orquestra".',
      lyrics: `(Instrumental — Frevo de Rua para Big Band de 18 Músicos)

Anjos de sombrinha colorida descem as ladeiras
Enquanto os metais sobem até o marco zero
O Passo de Anjo é leve mas com garra
No coração de Recife que não para!

(Solo de saxofone em improviso livre)
Trombones, trompetes e a caixa marcando
O passo mais bonito que eu já vi tocando!`,
      score_file: 'spokfrevo-passo-de-anjo.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-carnival-brass-groove-1121.mp3',
      cover_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 198,
      plays_count: 41200,
      is_popular: true,
      album_id: 'alb1',
      status: 'published',
      downloads_count: 2180,
      author_id: 'a1',
      allow_download: true
    },
    {
      id: 's3',
      title: 'Moraes é Frevo',
      artist: 'SpokFrevo Orquestra',
      genre: 'Frevo de Rua',
      description: 'Homenagem ao lendário compositor Moraes Moreira. Arranjo exclusivo de Spok para big band com seção rítmica percussiva e improvisação de sopros.',
      lyrics: `(Instrumental — Tributo a Moraes Moreira)

Moderna orquestra, ancestral pulsação
O frevo é a alma desse povo em festa
Moraes nos ensinou que a tradição
Não se perde — ela se reinventa!

(Cadência de bateria e naipe de metais)`,
      score_file: 'spokfrevo-moraes-e-frevo.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-latin-carnival-party-1122.mp3',
      cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 224,
      plays_count: 29700,
      is_popular: true,
      album_id: 'alb2',
      status: 'published',
      downloads_count: 1890,
      author_id: 'a1',
      allow_download: true
    },
    {
      id: 's4',
      title: 'Frevo Sanfonado',
      artist: 'SpokFrevo Orquestra',
      genre: 'Frevo Instrumental',
      description: 'Fusão única entre o sax de Spok e a sanfona nordestina. Destaque do álbum "Frevo Nação" — uma viagem sonora da periferia ao palco internacional.',
      lyrics: `(Instrumental — Diálogo entre saxofone e fole nordestino)

O fole responde ao sopro do sax
Pernambuco dialoga com o mundo
Frevo e baião na mesma cadência
Nordeste fundo!`,
      score_file: 'spokfrevo-frevo-sanfonado.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-samba-brazil-fiesta-1124.mp3',
      cover_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 212,
      plays_count: 18600,
      is_popular: true,
      album_id: 'alb2',
      status: 'published',
      downloads_count: 1340,
      author_id: 'a1',
      allow_download: true
    },

    // ========================================================
    // MÚSICAS — Maestro Duda (a2)
    // ========================================================
    {
      id: 's5',
      title: 'Frevo Nº 1 — Maestro Duda',
      artist: 'Maestro Duda',
      genre: 'Frevo de Rua',
      description: 'Uma das composições mais executadas do carnaval pernambucano. Arranjo original para orquestra de frevo com metais em destaque e percussão marcante.',
      lyrics: `(Instrumental — Frevo de Rua Clássico)

Essa é a marca do maior compositor
Sete notas que valem um carnaval
Duda escreveu o coração pernambucano
Em cada pauta, em cada festival!

(Metais em tutti — tutti fortíssimo)
Não tem um frevo igual no mundo inteiro
Maestro Duda, nosso maior guerreiro!`,
      score_file: 'maestroduda-frevo-num1.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-brazilian-carnival-brass-band-1120.mp3',
      cover_url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 176,
      plays_count: 52000,
      is_popular: true,
      album_id: 'alb3',
      status: 'published',
      downloads_count: 4100,
      author_id: 'a2',
      allow_download: true
    },
    {
      id: 's6',
      title: 'Escurinho',
      artist: 'Maestro Duda',
      genre: 'Frevo de Rua',
      description: 'Um dos frevos mais populares e executados do carnaval do Recife. Ritmo irresistível com naipes de saxofones e trompetes em pergunta e resposta.',
      lyrics: `(Instrumental — Frevo de Rua)

Quando o escurinho chega nas ruas do Recife
As sombrinhas sobem e o povo vai à loucura
A orquestra toca e ninguém fica parado
Escurinho é frevo de segunda e de segunda-feira!`,
      score_file: 'maestroduda-escurinho.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-carnival-brass-groove-1121.mp3',
      cover_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 163,
      plays_count: 38900,
      is_popular: true,
      album_id: 'alb3',
      status: 'published',
      downloads_count: 2960,
      author_id: 'a2',
      allow_download: true
    },
    {
      id: 's7',
      title: 'Foguete',
      artist: 'Maestro Duda',
      genre: 'Frevo de Rua',
      description: 'Frevo veloz e energético, um dos mais desafiadores para as orquestras. Considerado por muitos músicos como o "frevo dos frevos" pela exigência técnica.',
      lyrics: `(Instrumental — Frevo de Rua de alta velocidade)

Rapidez é tudo no Foguete de Duda
Os músicos respiram fundo e partem
Em cada nota uma explosão de alegria
Pernambuco em chamas que ninguém parte!`,
      score_file: 'maestroduda-foguete.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-latin-carnival-party-1122.mp3',
      cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 148,
      plays_count: 27400,
      is_popular: true,
      album_id: 'alb4',
      status: 'published',
      downloads_count: 2210,
      author_id: 'a2',
      allow_download: true
    },

    // ========================================================
    // MÚSICAS — Claudionor Germano (a3)
    // ========================================================
    {
      id: 's8',
      title: 'Voltei Recife',
      artist: 'Claudionor Germano',
      genre: 'Frevo Canção',
      description: 'Uma das mais belas canções de saudade do carnaval recifense. Claudionor Germano interpreta com emoção incomparável o retorno à cidade amada.',
      lyrics: `Voltei, Recife!
Foi a saudade que me trouxe pelo braço
Quero rever a Rua da Aurora
O Passo da Pátria e o meu pedaço!

Recife, linda cidade formosa
Das pontes cortando o Capibaribe
Vim pra cantar o meu Frevo com você
Do Marco Zero até o fim do Recife!

(Refrão)
Voltei! Voltei! Voltei, meu bem!
A saudade do frevo
Não tem quem segure, não!`,
      score_file: 'claudionor-voltei-recife.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-samba-brazil-fiesta-1124.mp3',
      cover_url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 210,
      plays_count: 67000,
      is_popular: true,
      album_id: 'alb5',
      status: 'published',
      downloads_count: 3540,
      author_id: 'a3',
      allow_download: true
    },
    {
      id: 's9',
      title: 'É de Fazer Chorar (Capiba)',
      artist: 'Claudionor Germano',
      genre: 'Frevo Canção',
      description: 'O mais emocionante frevo-canção de Capiba, na interpretação definitiva de Claudionor Germano. Arranjo para orquestra com metais e coro.',
      lyrics: `Quero ver quem não chora quando o frevo começa a tocar
No meio da multidão a gente não pode parar
É de fazer chorar de tanta alegria!

Capiba escreveu a alma pernambucana
E Claudionor canta com toda a emoção
Quando o frevo toca ninguém fica na cama
É festa, é amor, é celebração!`,
      score_file: 'claudionor-capiba-chorar.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-carnival-brass-groove-1121.mp3',
      cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 192,
      plays_count: 45200,
      is_popular: true,
      album_id: 'alb5',
      status: 'published',
      downloads_count: 2780,
      author_id: 'a3',
      allow_download: true
    },
    {
      id: 's10',
      title: 'Hino do Frevo (Nelson Ferreira)',
      artist: 'Claudionor Germano',
      genre: 'Frevo Canção',
      description: 'A mais famosa composição de Nelson Ferreira interpretada pelo maior cantor de frevo-canção da história. Partitura completa com arranjo vocal e orquestral.',
      lyrics: `O frevo não é para quem quer, é para quem pode
Quando a orquestra ataca ninguém fica parado!

Nelson Ferreira escreveu com o coração
E Claudionor traz ao mundo em voz e emoção
Pernambuco ensina ao mundo o que é frevo
Nossa tradição é o nosso maior tesouro!

(Tutti orquestral)
Viva o frevo! Viva Recife!
Viva Pernambuco e sua gente!`,
      score_file: 'claudionor-hino-frevo-nelson.pdf',
      audio_url: 'https://assets.mixkit.co/music/preview/mixkit-latin-carnival-party-1122.mp3',
      cover_url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=400&q=80',
      duration_seconds: 225,
      plays_count: 31800,
      is_popular: false,
      album_id: 'alb6',
      status: 'published',
      downloads_count: 1920,
      author_id: 'a3',
      allow_download: true
    }
  ],

  albums: [
    // ========= SpokFrevo Orquestra (a1) =========
    {
      id: 'alb1',
      artist_id: 'a1',
      title: 'Ao Vivo em Lisboa',
      cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80',
      release_year: 2010,
      tracks_count: 14
    },
    {
      id: 'alb2',
      artist_id: 'a1',
      title: 'Frevo Nação',
      cover_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=500&q=80',
      release_year: 2016,
      tracks_count: 12
    },
    {
      id: 'alb2b',
      artist_id: 'a1',
      title: 'SpokFrevo Orquestra',
      cover_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80',
      release_year: 2003,
      tracks_count: 16
    },
    // ========= Maestro Duda (a2) =========
    {
      id: 'alb3',
      artist_id: 'a2',
      title: '700 Frevos — Obra Completa Vol. 1',
      cover_url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=500&q=80',
      release_year: 2008,
      tracks_count: 20
    },
    {
      id: 'alb4',
      artist_id: 'a2',
      title: 'Maestro Duda — Frevos Imortais',
      cover_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      release_year: 2015,
      tracks_count: 18
    },
    // ========= Claudionor Germano (a3) =========
    {
      id: 'alb5',
      artist_id: 'a3',
      title: 'Vozes de Capiba',
      cover_url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=500&q=80',
      release_year: 2012,
      tracks_count: 16
    },
    {
      id: 'alb6',
      artist_id: 'a3',
      title: '70 Anos de Frevo Canção',
      cover_url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=500&q=80',
      release_year: 2020,
      tracks_count: 22
    }
  ],

  shows: [
    // SpokFrevo Orquestra (a1)
    {
      id: 'sh1',
      artist_id: 'a1',
      title: 'SpokFrevo Ao Vivo — Festival do Frevo 2026',
      venue: 'Paço do Frevo',
      city: 'Recife - PE',
      date: '2027-02-08',
      time: '20:00',
      ticket_url: 'https://sympla.com.br/spokfrevo-festival-2026'
    },
    {
      id: 'sh2',
      artist_id: 'a1',
      title: 'Noite de Gala do Frevo Jazz',
      venue: 'Teatro Santa Isabel',
      city: 'Recife - PE',
      date: '2026-10-18',
      time: '21:00',
      ticket_url: 'https://bileto.sympla.com.br/event/teatro-santa-isabel-spokfrevo'
    },
    {
      id: 'sh3',
      artist_id: 'a1',
      title: 'SpokFrevo — Turnê Internacional',
      venue: 'Casa da Música do Porto',
      city: 'Porto - Portugal',
      date: '2026-11-14',
      time: '20:30',
      ticket_url: 'https://casadamusica.com/eventos/spokfrevo'
    },
    // Maestro Duda (a2)
    {
      id: 'sh4',
      artist_id: 'a2',
      title: 'Concerto Tributo ao Maestro Duda',
      venue: 'Teatro do Parque',
      city: 'Recife - PE',
      date: '2026-09-30',
      time: '19:00',
      ticket_url: 'https://sympla.com.br/tributo-maestro-duda'
    },
    {
      id: 'sh5',
      artist_id: 'a2',
      title: 'Acervo do Maestro — 700 Frevos',
      venue: 'Pátio de São Pedro',
      city: 'Recife - PE',
      date: '2026-10-25',
      time: '17:00',
      ticket_url: 'https://cultura.pe.gov.br/eventos/patio-sao-pedro-maestro-duda'
    },
    // Claudionor Germano (a3)
    {
      id: 'sh6',
      artist_id: 'a3',
      title: '70 Anos de Frevo Canção',
      venue: 'Paço do Frevo',
      city: 'Recife - PE',
      date: '2026-11-08',
      time: '18:30',
      ticket_url: 'https://sympla.com.br/claudionor-germano-70-anos'
    },
    {
      id: 'sh7',
      artist_id: 'a3',
      title: 'Claudionor Germano no Carnaval de Olinda',
      venue: 'Quatro Cantos de Olinda',
      city: 'Olinda - PE',
      date: '2027-02-28',
      time: '16:00',
      ticket_url: 'https://carnavaldeolinda.pe.gov.br'
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
    // 1. Notificações para Administradores (forRole: 'admin')
    {
      id: 'notif-admin-1',
      type: 'artist_request',
      targetId: 'req-seed-1',
      forRole: 'admin',
      title: 'Solicitação de Artista Pendente',
      message: 'Orquestra Revelação do Frevo solicitou análise curatorial de perfil.',
      author: 'Comitê Gestor',
      author_avatar: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      time_ago: 'Há 1 hora',
      read: false,
      readBy: []
    },
    {
      id: 'notif-admin-2',
      type: 'post',
      targetId: 'p1',
      forRole: 'admin',
      title: 'Métricas Diárias Consolidadas',
      message: 'O relatório diário de engajamento e acessos às 00:00 foi consolidado com sucesso.',
      author: 'FrevAI Analytics',
      author_avatar: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=200&q=80',
      time_ago: 'Hoje',
      read: true,
      readBy: ['user-admin-1']
    },
    // 2. Notificações para Maestro Forró (forUserId: 'user-forro-2')
    {
      id: 'notif-artist-1',
      type: 'score',
      targetId: 's1',
      forUserId: 'user-forro-2',
      title: 'Sua Obra é Destaque no Acervo!',
      message: 'A partitura "Passo da Fervura" atingiu a marca de 500 execuções e downloads.',
      author: 'Acervo FrevAI',
      author_avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      time_ago: 'Há 2 horas',
      read: false,
      readBy: []
    },
    {
      id: 'notif-artist-2',
      type: 'post',
      targetId: 'p2',
      forUserId: 'user-forro-2',
      title: 'Novo Comentário em sua Notícia',
      message: 'Orquestra Olinda comentou na publicação do seu novo arranjo.',
      author: 'Orquestra Olinda',
      author_avatar: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      time_ago: 'Há 4 horas',
      read: false,
      readBy: []
    },
    // 3. Notificações para Folião do Passo (forUserId: 'user-foliao-3')
    {
      id: 'notif-foliao-1',
      type: 'score',
      targetId: 's2',
      forUserId: 'user-foliao-3',
      title: 'Lançamento de Artista Favorito',
      message: 'SpokFrevo disponibilizou a partitura de "Moraes é Frevo". Confira no acervo!',
      author: 'SpokFrevo',
      author_avatar: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
      time_ago: 'Há 3 horas',
      read: false,
      readBy: []
    },
    {
      id: 'notif-foliao-2',
      type: 'post',
      targetId: 'p1',
      forUserId: 'user-foliao-3',
      title: 'Ensaio Aberto Confirmado',
      message: 'Acerto de Marcha confirmado na Praça do Arsenal neste domingo!',
      author: 'Paço do Frevo',
      author_avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
      time_ago: 'Ontem',
      read: true,
      readBy: ['user-foliao-3']
    },
    // 4. Notificações para Visitante (forRole: 'guest')
    {
      id: 'notif-guest-1',
      type: 'post',
      targetId: 'p1',
      forRole: 'guest',
      title: 'Bem-vindo ao FrevAI!',
      message: 'Cadastre-se gratuitamente para salvar partituras e seguir seus mestres favoritos.',
      author: 'FrevAI',
      author_avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
      time_ago: 'Recentemente',
      read: false,
      readBy: []
    }
  ],
  artistRequests: [],
  takedownReports: []
};

function initDB() {
  if (typeof loadTakedownsLocal === 'function') {
    loadTakedownsLocal();
  }
  return DB;
}

window.DB = DB;
window.initDB = initDB;


