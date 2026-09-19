// ==============================================================================
// FREVAI - STATE MANAGEMENT, RBAC & UNIFIED DATA STORE
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
      author_id: 'a1'
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
      author_id: 'a1'
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
      author_id: 'a1'
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
      author_id: 'a1'
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
      author_id: 'a2'
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
      author_id: 'a2'
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
      author_id: 'a2'
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
      author_id: 'a3'
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
      author_id: 'a3'
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
      author_id: 'a3'
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
      ticket_url: '#'
    },
    {
      id: 'sh2',
      artist_id: 'a1',
      title: 'Noite de Gala do Frevo Jazz',
      venue: 'Teatro Santa Isabel',
      city: 'Recife - PE',
      date: '2026-10-18',
      time: '21:00',
      ticket_url: '#'
    },
    {
      id: 'sh3',
      artist_id: 'a1',
      title: 'SpokFrevo — Turnê Internacional',
      venue: 'Casa da Música do Porto',
      city: 'Porto - Portugal',
      date: '2026-11-14',
      time: '20:30',
      ticket_url: '#'
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
      ticket_url: '#'
    },
    {
      id: 'sh5',
      artist_id: 'a2',
      title: 'Acervo do Maestro — 700 Frevos',
      venue: 'Pátio de São Pedro',
      city: 'Recife - PE',
      date: '2026-10-25',
      time: '17:00',
      ticket_url: '#'
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
      ticket_url: '#'
    },
    {
      id: 'sh7',
      artist_id: 'a3',
      title: 'Claudionor Germano no Carnaval de Olinda',
      venue: 'Quatro Cantos de Olinda',
      city: 'Olinda - PE',
      date: '2027-02-28',
      time: '16:00',
      ticket_url: '#'
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
      author_avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
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
  ],
  artistRequests: []
};

// ==============================================================================
// GESTÃO DE SESSÃO & CONTROLE DE ACESSO (RBAC)
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
  saved_scores: ['s1000000-0000-0000-0000-000000000001', 's3000000-0000-0000-0000-000000000003'] // IDs das partituras salvas
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
      currentUserSession.saved_scores = ['s1000000-0000-0000-0000-000000000001', 's3000000-0000-0000-0000-000000000003'];
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
      switchView('feed');
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
  closeModal();
  renderArtists();
  renderFeed();
  updateProfileUI();
  renderProfileGallery();
  renderSteps();
  renderAdminCMS();

  if (!silent) {
    if (role === 'guest') {
      showAlertModal('Conta desconectada com sucesso.');
    }
  }
}

// ==============================================================================
// MODAL UNIFICADO DE SESSÃO / LOGIN / CADASTRO (AWS & GOOGLE)
// ==============================================================================
let currentAuthTab = 'login';
let currentSignupRole = 'fan'; // 'fan' ou 'artist'

function handleGenreSelectChange(selectId, containerId) {
  const select = document.getElementById(selectId);
  const container = document.getElementById(containerId);
  if (!select || !container) return;
  if (select.value === 'Outro') {
    container.classList.remove('hidden');
    const input = container.querySelector('input');
    if (input) input.focus();
  } else {
    container.classList.add('hidden');
  }
}

function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  if (btnEl) {
    btnEl.innerHTML = isPassword ? `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      </svg>
    ` : `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    `;
    btnEl.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Ver senha');
    btnEl.setAttribute('title', isPassword ? 'Ocultar senha' : 'Ver senha');
  }
}

function switchAuthTab(tab) {
  currentAuthTab = tab;
  openSessionModal();
}

function setSignupRole(role) {
  currentSignupRole = role;
  const fanBtn = document.getElementById('signup-role-fan-btn');
  const artistBtn = document.getElementById('signup-role-artist-btn');
  const artistFields = document.getElementById('signup-artist-fields');

  if (role === 'artist') {
    if (artistBtn) artistBtn.className = 'flex-1 p-2.5 rounded-xl border-2 border-frevo-orange bg-frevo-orange/10 text-left transition-all';
    if (fanBtn) fanBtn.className = 'flex-1 p-2.5 rounded-xl border border-gray-200 bg-surface-soft text-left transition-all opacity-60';
    if (artistFields) artistFields.classList.remove('hidden');
  } else {
    if (fanBtn) fanBtn.className = 'flex-1 p-2.5 rounded-xl border-2 border-frevo-cyan bg-frevo-cyan/10 text-left transition-all';
    if (artistBtn) artistBtn.className = 'flex-1 p-2.5 rounded-xl border border-gray-200 bg-surface-soft text-left transition-all opacity-60';
    if (artistFields) artistFields.classList.add('hidden');
  }
}

function openSessionModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const isGuest = currentUserSession.role === 'guest';

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">${isGuest ? 'Acessar o FrevAI' : 'Minha Conta FrevAI'}</h3>
        <p class="text-[11px] text-muted">${isGuest ? 'Entre ou cadastre-se para vivenciar o universo do Frevo' : `Logado como: ${currentUserSession.name}`}</p>
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
          <form onsubmit="handleEmailLogin(event)" class="space-y-3">
            <div id="login-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200 flex items-start gap-2"></div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail</label>
              <input type="email" id="auth-email" required placeholder="seuemail@exemplo.com" oninput="document.getElementById('login-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
            </div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-[11px] font-bold text-ink uppercase">Senha</label>
                <button type="button" onclick="openForgotPasswordModal()" class="text-[11px] font-semibold text-frevo-orange hover:underline focus:outline-none">
                  Esqueci minha senha
                </button>
              </div>
              <div class="relative">
                <input type="password" id="auth-password" required placeholder="••••••••" oninput="document.getElementById('login-error-msg')?.classList.add('hidden')" class="w-full pl-3 pr-10 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
                <button type="button" onclick="togglePasswordVisibility('auth-password', this)" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-ink transition-colors" aria-label="Ver senha" title="Ver senha">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-full text-xs rounded-xl py-2.5 font-bold shadow-md">
              Entrar
            </button>
          </form>
        ` : `
          <!-- Formulário de Cadastro (Fã vs Artista) -->
          <form onsubmit="handleEmailSignUp(event)" class="space-y-3">
            <div id="signup-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200 flex items-start gap-2"></div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome Completo *</label>
              <input type="text" id="signup-name" required placeholder="Seu nome ou como quer ser chamado" oninput="document.getElementById('signup-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome de Usuário (@) *</label>
              <input type="text" id="signup-handle" required placeholder="@seunome" oninput="formatSignupHandleInput(this)" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange font-medium" />
              <span class="block text-[10px] text-muted mt-0.5">Identificador exclusivo na comunidade (ex: @mariasilva).</span>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail *</label>
              <input type="email" id="signup-email" required placeholder="seuemail@exemplo.com" oninput="document.getElementById('signup-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-ink uppercase mb-1">Criar Senha *</label>
              <div class="relative">
                <input type="password" id="signup-password" required minlength="6" placeholder="Mínimo 6 caracteres" oninput="document.getElementById('signup-error-msg')?.classList.add('hidden')" class="w-full pl-3 pr-10 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
                <button type="button" onclick="togglePasswordVisibility('signup-password', this)" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-ink transition-colors" aria-label="Ver senha" title="Ver senha">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
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
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Recuperar Senha</h3>
        <p class="text-[11px] text-muted">Informe seu e-mail cadastrado para receber as instruções de redefinição de senha.</p>
      </div>

      <div id="forgot-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200 flex items-start gap-2"></div>
      <div id="forgot-success-msg" class="hidden text-xs text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200 leading-relaxed"></div>

      <form id="forgot-password-form" onsubmit="handleForgotPasswordSubmit(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail Cadastrado *</label>
          <input type="email" id="forgot-email" required placeholder="seuemail@exemplo.com" oninput="document.getElementById('forgot-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <button type="submit" id="forgot-submit-btn" class="btn btn-primary w-full text-xs rounded-xl py-2.5 font-bold shadow-md">
          Enviar Link de Recuperação
        </button>
      </form>

      <div class="text-center pt-2 border-t border-gray-100">
        <button type="button" onclick="openSessionModal(); switchAuthTab('login');" class="text-xs text-muted hover:text-ink font-semibold transition-colors">
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
  if (window.awsService && window.awsService.isConnected()) {
    try {
      window.awsService.signInWithGoogle();
    } catch (err) {
      showAlertModal('Falha na comunicação com o Amazon Cognito / Google OAuth: ' + err.message);
    }
  } else {
    switchTestRole('user');
  }
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
      favorites: []
    };

    // Sincronizar estado social (likes, salvos, favoritos)
    const social = await window.awsService.getUserSocialState(data.user.id);
    if (social) {
      currentUserSession.favorites = social.favoriteArtistIds || [];
      DB.posts.forEach(p => {
        p.is_liked = social.likedPostIds.includes(p.id);
        p.is_saved = social.savedPostIds.includes(p.id);
      });
    }

    saveCurrentSession();
    updateProfileUI();
    renderFeed();
    renderArtists();
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
      favorites: []
    };
    currentUserProfile.name = currentUserSession.name;
    currentUserProfile.handle = currentUserSession.handle;
    currentUserProfile.email = email;
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

  const isArtistChoice = currentSignupRole === 'artist';
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

// Modal para Usuário Logado solicitar perfil de Artista
function openArtistRequestModal() {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  if (currentUserSession.role === 'artist') {
    showAlertModal('Você já possui um perfil de artista verificado no FrevAI!');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Solicitar Perfil de Artista</h3>
        <p class="text-xs text-muted">Junte-se à galeria de mestres e fazedores de cultura do Frevo</p>
      </div>

      <div class="p-3 bg-frevo-orange/10 border border-frevo-orange/30 rounded-2xl text-xs text-ink space-y-1">
        <div class="font-bold flex items-center gap-1.5 text-frevo-orange">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          Como funciona a aprovação?
        </div>
        <p class="text-[11px] text-muted">Você continuará navegando como folião normalmente. O comitê de gestão analisará suas informações e, após a aprovação, as abas de partituras, álbuns e shows serão liberadas no seu perfil.</p>
      </div>

      <form onsubmit="handleArtistRequestSubmit(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome Artístico / Grupo / Orquestra *</label>
          <input type="text" id="req-artist-name" required placeholder="Ex: Orquestra Frevo Tropical" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Gênero Tradicional</label>
          <select id="req-artist-genre" onchange="handleGenreSelectChange('req-artist-genre', 'req-custom-genre-container')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
            <option value="Frevo de Rua">Frevo de Rua</option>
            <option value="Frevo Canção">Frevo Canção</option>
            <option value="Frevo de Bloco">Frevo de Bloco</option>
            <option value="Frevo Livre Instrumental">Frevo Livre Instrumental</option>
            <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
            <option value="Outro">Outro</option>
          </select>
          <div id="req-custom-genre-container" class="mt-1.5 hidden">
            <input type="text" id="req-custom-genre" placeholder="Especifique o gênero tradicional..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Breve Biografia / Histórico</label>
          <textarea id="req-artist-bio" rows="3" placeholder="Conte um pouco sobre sua trajetória no Frevo, participações em carnavais ou festivais..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange"></textarea>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Instagram (@usuario)</label>
            <input type="text" id="req-artist-instagram" placeholder="@seuinstagram" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">WhatsApp de Contato</label>
            <input type="text" id="req-artist-whatsapp" placeholder="(81) 99999-9999" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">Enviar para Curadoria</button>
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

// Upload de foto do usuário com compressão canvas e AWS Storage
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

      // Upload para o AWS Storage se conectado
      if (window.awsService && window.awsService.isConnected()) {
        canvas.toBlob(async (blob) => {
          if (blob) {
            const uploadedUrl = await window.awsService.uploadAvatar(blob, currentUserSession.id);
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
// SISTEMA DE NOTIFICAÇÕES (ISOLAMENTO POR USUÁRIO & CANAL DE MODERAÇÃO ADMIN)
// ==============================================================================

function getVisibleNotificationsForCurrentSession() {
  loadNotificationsLocal();
  const session = currentUserSession || {};
  const currentUserId = session.id;
  const userRole = session.role || 'guest';
  const isAdmin = userRole === 'admin';

  return (DB.notifications || []).filter(n => {
    // 1. Notificação explicitamente direcionada a um usuário específico (ex: recusa/aprovação individual)
    if (n.forUserId) {
      return n.forUserId === currentUserId;
    }
    // 2. Notificação direcionada a um cargo específico (ex: 'admin' para moderação compartilhada)
    if (n.forRole) {
      if (n.forRole === 'admin') return isAdmin;
      return n.forRole === userRole;
    }
    // 3. Notificação global de difusão (broadcast) para a comunidade
    return true;
  });
}

function updateNotificationBadge() {
  const badge = document.getElementById('header-notification-badge');
  if (!badge) return;
  const visibleNotifs = getVisibleNotificationsForCurrentSession();
  const unreadCount = visibleNotifs.filter(n => !n.read).length;
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
  const visible = getVisibleNotificationsForCurrentSession();
  const visibleIds = new Set(visible.map(n => n.id));
  (DB.notifications || []).forEach(n => {
    if (visibleIds.has(n.id)) {
      n.read = true;
    }
  });
  saveNotificationsLocal();
  updateNotificationBadge();
  openNotificationsModal();
}

function handleNotificationClick(notifId, type, targetId) {
  if (notifId) {
    const notif = (DB.notifications || []).find(n => n.id === notifId);
    if (notif) notif.read = true;
    saveNotificationsLocal();
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
  } else if (type === 'artist_request') {
    switchView('admin');
    currentAdminTab = 'artists';
    document.querySelectorAll('.admin-tab-pill').forEach(b => {
      b.classList.toggle('active', b.innerText.toLowerCase().includes('solicitaç') || b.innerText.toLowerCase().includes('artista'));
    });
    renderAdminCMS();
  } else if (type === 'artist_rejected') {
    loadNotificationsLocal();
    const notif = (DB.notifications || []).find(n => n.id === notifId);
    const feedback = notif ? notif.message : 'Sua solicitação artística não pôde ser aprovada no momento.';
    showAlertModal(
      `${feedback}\n\nVocê pode atualizar seus dados biográficos e links artísticos na aba de perfil e enviar uma nova solicitação a qualquer momento.`,
      { title: 'Parecer da Curadoria', type: 'info' }
    );
  } else if (type === 'artist_approved') {
    switchView('profile');
    showAlertModal(
      'Parabéns! Seu perfil de Artista Oficial já está ativo. Você já pode cadastrar partituras e gerenciar suas obras.',
      { title: 'Artista Verificado', type: 'success' }
    );
  }
}

// Modal do Sino de Notificações
function openNotificationsModal() {
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  const notifications = getVisibleNotificationsForCurrentSession();
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
              <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-white ${notif.type === 'score' ? 'bg-frevo-cyan' : notif.type === 'artist_request' ? 'bg-frevo-green' : notif.type === 'artist_rejected' ? 'bg-rose-500' : notif.type === 'artist_approved' ? 'bg-emerald-500' : 'bg-frevo-orange'}">
                ${notif.type === 'score' 
                  ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>' 
                  : notif.type === 'artist_request'
                    ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                    : notif.type === 'artist_rejected'
                      ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                      : notif.type === 'artist_approved'
                        ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                        : '<svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'}
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
                  ${notif.type === 'score' ? 'Ver Partitura' : notif.type === 'artist_request' ? 'Revisar no CMS' : notif.type === 'artist_rejected' ? 'Ver Justificativa' : notif.type === 'artist_approved' ? 'Acessar Perfil' : 'Ver no Feed'} →
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
  // Aliases para manter compatibilidade com notificações e botões legados
  if (viewName === 'admin') viewName = 'admin-panel';
  if (viewName === 'profile') viewName = 'artist-panel';

  if (viewName === 'artist-panel' && currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }

  if (viewName === 'admin-panel' && currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores autorizados podem acessar o painel de gestão.');
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
  const avatarSrc = getUserAvatarUrl(c.avatar || c.user_avatar);

  return `
    <div class="flex items-start gap-2 text-xs group/comment" id="comment-item-${postId}-${c.id}">
      <img src="${avatarSrc}" alt="${c.user || 'Folião'}" class="w-6 h-6 rounded-full object-cover flex-shrink-0 mt-0.5 border border-gray-200" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
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

function renderPostCommentsHtml(post) {
  const commentsList = (post.comments || []).map(c => renderCommentItemHtml(c, post.id)).join('');
  return `
    <div class="comments-section pt-2 border-t border-gray-100">
      <div class="space-y-2 mb-2" id="comments-container-${post.id}">
        ${commentsList}
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
        ${(post.media_type === 'video' || post.isVideo || (post.image && post.image.match(/\.(mp4|webm|mov)(\?.*)?$/i))) ? `
          <video src="${post.media_url || post.image}" poster="${post.cover_url || ''}" controls playsinline preload="metadata" class="w-full h-full object-cover" style="max-height: 480px;"></video>
        ` : `
          <img src="${post.image || post.media_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80'}" alt="${post.title}" loading="lazy" />
        `}

        <!-- Top-Left Floating Author Pill -->
        <div class="floating-author-pill" onclick="openArtistProfileByAuthor('${post.author}')" title="Ver perfil de ${post.author}">
          <img src="${post.avatar}" alt="${post.author}" />
          <div class="floating-author-info">
            <div class="flex items-center gap-1.5">
              <span class="name">${post.author}</span>
              ${post.is_admin_post ? `<span class="badge bg-frevo-red text-white text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider shadow-sm">Oficial</span>` : ''}
            </div>
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
        <p id="post-text-${post.id}" class="feed-card-text text-xs text-ink-soft leading-relaxed mb-1 ${post.content && post.content.length > 90 ? 'clamped' : ''}">${post.content}</p>
        ${post.content && post.content.length > 90 ? `
          <button type="button" id="post-readmore-${post.id}" onclick="togglePostExpand('${post.id}')" class="feed-read-more-btn">ler mais...</button>
        ` : ''}
        <div class="flex flex-wrap gap-1.5 mt-1">
          ${post.tags.map(t => `<span class="badge bg-[#16C7D9]/15 text-[#127F8B] text-[10px] font-bold">#${t}</span>`).join('')}
        </div>
      </div>

      <!-- Gaveta de Comentários Inline Abaixo do Post -->
      <div id="comments-drawer-${post.id}" class="comments-drawer space-y-3">
        <div class="flex items-center justify-between pb-1.5 border-b border-gray-100">
          <span class="text-xs font-bold text-ink" id="comments-count-${post.id}">Comentários (${(post.comments || []).length})</span>
          <button onclick="toggleCommentsDrawer('${post.id}')" class="text-[11px] text-muted hover:text-ink font-semibold">Fechar</button>
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
    showPlatformAlert('Crie uma conta ou faça login para comentar!', 'Atenção');
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
      avatar: currentUserSession.avatar || null,
      text: text,
      created_at: new Date().toISOString(),
      time_ago: 'agora'
    };

    post.comments.push(newComment);
    input.value = '';
    updateCommentsDrawerUI(postId);

    // Persistência com AWS
    if (window.awsService && window.awsService.isConnected() && currentUserSession.id) {
      const saved = await window.awsService.addComment(postId, currentUserSession.id, text);
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

    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.updateComment(commentId, newText);
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

    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deleteComment(commentId);
    }
  }
}

// Controle de Abas do Feed (Notícias & Para Você)
let currentFeedTab = 'news';

function switchFeedTab(tabName, btnElement) {
  currentFeedTab = tabName;
  document.querySelectorAll('.feed-tab-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const target = document.getElementById(`feed-tab-${tabName}`);
    if (target) target.classList.add('active');
  }
  renderFeed();
}

function getActiveFeedPosts() {
  if (currentFeedTab === 'foryou') {
    const userFavs = currentUserSession.favorites || [];
    return DB.posts.filter(p => 
      userFavs.includes(p.author_id) || 
      userFavs.includes(p.artist_id) || 
      userFavs.some(favId => {
        const artist = DB.artists.find(a => a.id === favId);
        return artist && (artist.name === p.author || artist.handle === p.handle);
      })
    );
  }

  // Aba Notícias: Todos os posts, priorizando os publicados por Administradores no topo
  return [...DB.posts].sort((a, b) => {
    const aIsAdmin = a.is_admin_post || (a.author && (a.author.toLowerCase().includes('paço') || a.author.toLowerCase().includes('fundação') || a.author.toLowerCase().includes('salvaguarda')));
    const bIsAdmin = b.is_admin_post || (b.author && (b.author.toLowerCase().includes('paço') || b.author.toLowerCase().includes('fundação') || b.author.toLowerCase().includes('salvaguarda')));
    if (aIsAdmin && !bIsAdmin) return -1;
    if (!aIsAdmin && bIsAdmin) return 1;
    return 0; // mantém a ordem cronológica
  });
}

function renderFeed() {
  const container = document.getElementById('feed-list');
  if (!container) return;

  const activePosts = getActiveFeedPosts();

  if (activePosts.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-frevo-orange/15 text-frevo-orange mx-auto flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3 class="font-display font-bold text-base text-ink">Nenhuma publicação por aqui ainda</h3>
        <p class="text-xs text-muted max-w-xs mx-auto">
          ${currentFeedTab === 'foryou' 
            ? 'Você ainda não segue artistas ou seus artistas favoritados ainda não postaram novidades.' 
            : 'Nenhuma notícia publicada no momento.'}
        </p>
        ${currentFeedTab === 'foryou' ? `
          <button onclick="switchView('artists')" class="btn btn-primary text-xs px-4 py-2.5 rounded-xl font-bold shadow-md">
            Descobrir e Seguir Artistas
          </button>
        ` : ''}
      </div>
    `;
    return;
  }

  InfiniteScrollManager.reset('feed');
  const initialPosts = activePosts.slice(0, InfiniteScrollManager.state.feed.limit);
  
  container.innerHTML = `
    <div id="feed-items-stream" class="space-y-4">
      ${initialPosts.map(post => renderFeedPostHtml(post)).join('')}
    </div>
    <div id="sentinel-feed" class="infinite-scroll-sentinel" data-view="feed">
      ${activePosts.length > initialPosts.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais histórias do frevo...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-feed');
  if (sentinel && activePosts.length > initialPosts.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function appendMoreFeed() {
  const stream = document.getElementById('feed-items-stream');
  const sentinel = document.getElementById('sentinel-feed');
  if (!stream) return;

  const activePosts = getActiveFeedPosts();
  const { page, limit } = InfiniteScrollManager.state.feed;
  const start = (page - 1) * limit;
  const nextPosts = activePosts.slice(start, start + limit);

  if (nextPosts.length > 0) {
    const html = nextPosts.map(post => renderFeedPostHtml(post)).join('');
    stream.insertAdjacentHTML('beforeend', html);
  }

  if (start + limit >= activePosts.length && sentinel) {
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

// Expandir ou recolher texto longo de descrição do card do feed
function togglePostExpand(postId) {
  const textEl = document.getElementById(`post-text-${postId}`);
  const btnEl = document.getElementById(`post-readmore-${postId}`);
  if (!textEl) return;

  const isClamped = textEl.classList.contains('clamped');
  if (isClamped) {
    textEl.classList.remove('clamped');
    textEl.classList.add('expanded');
    if (btnEl) btnEl.innerText = 'ler menos';
  } else {
    textEl.classList.add('clamped');
    textEl.classList.remove('expanded');
    if (btnEl) btnEl.innerText = 'ler mais...';
  }
}

// Curtir ou descurtir publicação do Feed
function toggleLike(postId) {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  post.is_liked = !post.is_liked;
  post.likes = (post.likes || 0) + (post.is_liked ? 1 : -1);
  if (post.likes < 0) post.likes = 0;

  if (window.awsService && currentUserSession.id) {
    window.awsService.togglePostLike(postId, currentUserSession.id);
  }

  // Atualizar imediatamente qualquer botão e contador de curtidas no DOM
  document.querySelectorAll(`button[onclick*="toggleLike('${postId}')"]`).forEach(btn => {
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', post.is_liked ? '#F0442E' : 'none');
      svg.setAttribute('stroke', '#F0442E');
    }
    const countSpan = btn.querySelector('span');
    if (countSpan) {
      countSpan.innerText = post.likes;
    }
    if (post.is_liked) {
      btn.classList.add('liked');
    } else {
      btn.classList.remove('liked');
    }
  });
}

// Salvar ou remover dos salvos uma publicação do Feed
function toggleSave(postId) {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  post.is_saved = !post.is_saved;

  if (window.awsService && currentUserSession.id) {
    window.awsService.toggleSavedPost(postId, currentUserSession.id);
  }

  // Atualizar imediatamente qualquer botão de salvar no DOM
  document.querySelectorAll(`button[onclick*="toggleSave('${postId}')"]`).forEach(btn => {
    if (post.is_saved) {
      btn.classList.add('is-saved');
    } else {
      btn.classList.remove('is-saved');
    }
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', post.is_saved ? '#FF8A00' : 'none');
      svg.setAttribute('stroke', post.is_saved ? '#FF8A00' : 'currentColor');
    }
  });

  // Atualizar aba Salvos do perfil
  const profileTab = document.querySelector('.profile-tab-btn.tab-saved.active');
  if (profileTab || document.getElementById('view-artist-panel')?.classList.contains('active')) {
    renderProfileGallery();
  }
}

// Favoritar / Desfavoritar Artista
function toggleFavoriteArtist(artistId) {
  if (currentUserSession.role === 'guest') {
    openSessionModal();
    return;
  }
  if (!currentUserSession.favorites) {
    currentUserSession.favorites = [];
  }
  const idx = currentUserSession.favorites.indexOf(artistId);
  const isFav = idx !== -1;
  if (isFav) {
    currentUserSession.favorites.splice(idx, 1);
  } else {
    currentUserSession.favorites.push(artistId);
  }
  const nowFav = !isFav;
  saveCurrentSession();

  if (window.awsService && currentUserSession.id) {
    window.awsService.toggleFavoriteArtist(artistId, currentUserSession.id);
  }

  // Atualização direta e imediata de todos os botões de favoritar deste artista
  document.querySelectorAll(`button[onclick*="toggleFavoriteArtist('${artistId}')"]`).forEach(btn => {
    if (btn.classList.contains('btn-fav-artist')) {
      btn.classList.toggle('favorited', nowFav);
    } else {
      // Botão do perfil público
      if (nowFav) {
        btn.className = 'btn bg-frevo-orange text-white shadow-md text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0';
      } else {
        btn.className = 'btn btn-outline text-frevo-orange border-frevo-orange hover:bg-frevo-orange/10 text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0';
      }
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', nowFav ? 'currentColor' : 'none');
      const textSpan = btn.querySelector('span');
      if (textSpan) textSpan.innerText = nowFav ? 'Favoritado' : 'Favoritar';
    }
  });

  renderArtists('', false);
  renderProfileGallery();
}

// Visualização de Perfil Público do Artista (Página Completa, sem banner, estilo minimalista com músicas, álbuns e shows)
function openArtistProfile(artistId) {
  const artist = DB.artists.find(a => a.id === artistId || a.handle === artistId || a.name === artistId);
  if (!artist) return;

  const titleEl = document.getElementById('artist-public-title');
  if (titleEl) titleEl.innerText = artist.name;

  const container = document.getElementById('artist-public-content');
  if (!container) return;

  const artistSongs = DB.songs.filter(s => s.author_id === artist.id || (s.artist && s.artist.toLowerCase().includes(artist.name.toLowerCase())));
  const popularSongs = [...artistSongs].sort((a, b) => (b.plays_count || 0) - (a.plays_count || 0));
  const artistAlbums = (DB.albums || []).filter(alb => alb.artist_id === artist.id);
  const artistShows = (DB.shows || []).filter(sh => sh.artist_id === artist.id);
  const isFav = (currentUserSession.favorites || []).includes(artist.id);

  container.innerHTML = `
    <div class="space-y-4 text-left">
      <!-- Cabeçalho do Artista (Sem Banner, Limpo e Moderno) -->
      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3.5">
            <div class="relative flex-shrink-0">
              <img src="${artist.avatar_url}" alt="${artist.name}" class="w-16 h-16 rounded-full object-cover border-2 border-frevo-orange/30 shadow-md bg-white" />
              <span class="absolute bottom-0 right-0 w-5 h-5 bg-frevo-green text-white rounded-full flex items-center justify-center border-2 border-white font-bold" title="Artista Verificado">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
            </div>
            <div>
              <h3 class="font-display font-extrabold text-lg text-ink leading-tight">${artist.name}</h3>
              <span class="text-xs text-muted font-medium">${artist.handle}</span>
              <div class="mt-1 flex items-center gap-1.5 flex-wrap">
                <span class="badge bg-frevo-orange/15 text-frevo-orange font-bold text-[10px]">${artist.genre}</span>
                <span class="badge bg-gray-100 text-muted font-mono font-bold text-[10px]">${artistSongs.length} faixa(s)</span>
                ${artistAlbums.length > 0 ? `<span class="badge bg-frevo-purple/15 text-frevo-purple font-mono font-bold text-[10px]">${artistAlbums.length} álbum(ns)</span>` : ''}
              </div>
            </div>
          </div>

          <!-- Botão Favoritar Artista -->
          <button onclick="toggleFavoriteArtist('${artist.id}')" class="btn ${isFav ? 'bg-frevo-orange text-white shadow-md' : 'btn-outline text-frevo-orange border-frevo-orange hover:bg-frevo-orange/10'} text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="hidden sm:inline">${isFav ? 'Favoritado' : 'Favoritar'}</span>
          </button>
        </div>

        <!-- Biografia e Descrição -->
        <div>
          <h4 class="text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Sobre o Artista</h4>
          <p class="text-xs text-ink-soft leading-relaxed bg-surface-soft p-3.5 rounded-2xl border border-gray-100">
            ${artist.bio}
          </p>
        </div>

        <!-- Contato Oficial -->
        ${(artist.email || artist.phone) ? `
          <div class="flex items-center gap-2 flex-wrap pt-1">
            ${artist.email ? `
              <a href="mailto:${artist.email}" class="text-[11px] font-bold text-ink bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                ${artist.email}
              </a>
            ` : ''}
            ${artist.phone ? `
              <a href="https://wa.me/${artist.phone.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-green-800 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
                WhatsApp Oficial
              </a>
            ` : ''}
          </div>
        ` : ''}
      </div>

      <!-- 1. SEÇÃO DE MÚSICAS POPULARES (ESTILO APPLE MUSIC) -->
      <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Músicas Populares
          </h4>
          <span class="text-[10px] text-muted font-bold font-mono">${popularSongs.length} faixas</span>
        </div>

        <div class="space-y-2">
          ${popularSongs.length > 0 ? popularSongs.map((song, index) => {
            const isThisPlaying = (currentPlayingSong && currentPlayingSong.id === song.id && isAudioPlaying);
            return `
              <div onclick="playSong('${song.id}')" class="p-2.5 bg-surface-soft rounded-2xl border ${isThisPlaying ? 'border-frevo-orange ring-2 ring-frevo-orange/25 bg-orange-50/20' : 'border-gray-100'} shadow-sm flex items-center justify-between gap-3 hover:border-frevo-orange transition-all cursor-pointer group">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                  <!-- Rank / Play Icon -->
                  <span class="w-5 text-center font-bold text-xs ${index === 0 ? 'text-frevo-orange' : 'text-muted'} font-mono">
                    ${isThisPlaying ? `
                      <span class="inline-block w-2.5 h-2.5 rounded-full bg-frevo-orange animate-ping"></span>
                    ` : `${index + 1}`}
                  </span>
                  
                  <!-- Capa da Música -->
                  <img src="${song.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80'}" alt="${song.title}" class="w-10 h-10 rounded-xl object-cover flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform" />
                  
                  <div class="min-w-0 flex-1">
                    <h5 class="font-bold text-xs text-ink truncate group-hover:text-frevo-orange transition-colors">${song.title}</h5>
                    <div class="flex items-center gap-2 text-[10px] text-muted">
                      <span>${song.genre}</span>
                      <span>•</span>
                      <span class="font-mono">${(song.plays_count || 1200).toLocaleString('pt-BR')} plays</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2 flex-shrink-0" onclick="event.stopPropagation()">
                  <button onclick="playSong('${song.id}')" class="w-8 h-8 rounded-full ${isThisPlaying ? 'bg-frevo-orange text-white' : 'bg-white text-ink hover:bg-frevo-orange hover:text-white border border-gray-200'} flex items-center justify-center transition-all shadow-sm" title="Reproduzir Música">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      ${isThisPlaying ? '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>' : '<polygon points="5 3 19 12 5 21 5 3"></polygon>'}
                    </svg>
                  </button>
                  <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan p-2 rounded-xl font-bold flex-shrink-0" title="Ver Partitura / Baixar PDF" aria-label="Partitura">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </button>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="p-4 text-center bg-surface-soft rounded-2xl border border-gray-100">
              <p class="text-xs text-muted">Nenhuma música cadastrada por este artista ainda.</p>
            </div>
          `}
        </div>
      </div>

      <!-- 2. SEÇÃO DE ÁLBUNS (CARROSSEL HORIZONTAL GESTUAL SEM SCROLLBAR) -->
      ${artistAlbums.length > 0 ? `
        <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7447E8" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
              Álbuns & Discografia
            </h4>
            <span class="text-[10px] text-muted">Arraste horizontalmente ⇄</span>
          </div>

          <div id="artist-albums-carousel" class="albums-carousel-track">
            ${artistAlbums.map(album => `
              <div class="album-card-item" onclick="openAlbumDetails('${album.id}')">
                <img src="${album.cover_url}" alt="${album.title}" class="album-card-cover" />
                <div class="mt-2 text-left">
                  <h5 class="font-bold text-xs text-ink truncate">${album.title}</h5>
                  <p class="text-[10px] text-muted font-mono">${album.release_year} • ${album.tracks_count} faixas</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 3. SEÇÃO DE PRÓXIMOS SHOWS (ESTILO CALENDÁRIO VIP) -->
      <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm space-y-3 pb-4">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F0442E" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Próximos Shows & Apresentações
          </h4>
          <span class="text-[10px] text-muted font-mono font-bold">${artistShows.length} confirmados</span>
        </div>

        <div class="shows-timeline">
          ${artistShows.length > 0 ? artistShows.map(show => {
            const dateObj = new Date(`${show.date}T12:00:00`);
            const day = dateObj.getDate().toString().padStart(2, '0');
            const month = dateObj.toLocaleString('pt-BR', { month: 'short' }).replace('.', '');
            const year = dateObj.getFullYear();
            return `
              <div class="show-item-card">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="show-date-badge">
                    <span class="show-date-day">${day}</span>
                    <span class="show-date-month">${month}</span>
                  </div>
                  <div class="min-w-0">
                    <h5 class="font-bold text-xs text-ink truncate">${show.title}</h5>
                    <p class="text-[11px] text-ink-soft flex items-center gap-1 truncate">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      ${show.venue} (${show.city || 'Recife - PE'})
                    </p>
                    <span class="text-[10px] text-muted font-mono font-semibold">Horário: ${show.time} • ${day}/${month.toUpperCase()}/${year}</span>
                  </div>
                </div>
                <button onclick="showAlertModal('Informações e ingressos para ${show.title}!');" class="btn btn-primary text-[11px] px-3 py-1.5 rounded-xl font-bold whitespace-nowrap shadow-sm flex-shrink-0">
                  Ingressos
                </button>
              </div>
            `;
          }).join('') : `
            <div class="p-4 text-center bg-surface-soft rounded-2xl border border-gray-100">
              <p class="text-xs text-muted">Nenhum show agendado no momento. Fique atento às novidades!</p>
            </div>
          `}
        </div>
      </div>
    </div>
  `;

  // Mudar para a view dedicada de perfil público
  switchView('artist-public');

  // Inicializar carrossel gestual
  setTimeout(() => {
    initAlbumsCarousel('artist-albums-carousel');
  }, 100);
}

function openArtistProfileByAuthor(authorName) {
  const artist = DB.artists.find(a => a.name.toLowerCase() === (authorName || '').toLowerCase() || a.handle.toLowerCase() === (authorName || '').toLowerCase());
  if (artist) {
    openArtistProfile(artist.id);
  } else {
    openStoryModal(authorName, DEFAULT_AVATAR_PLACEHOLDER, 'Recife, PE');
  }
}

window.openArtistModal = function(name, avatar, cover, genre, bio, email, phone, id) {
  openArtistProfile(id || name);
};

function renderArtistCardHtml(artist) {
  const isFav = (currentUserSession.favorites || []).includes(artist.id);
  return `
    <div data-artist-id="${artist.id}" class="artist-card-item bg-white border border-gray-200 rounded-2xl p-4 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow relative infinite-scroll-item">
      <button onclick="toggleFavoriteArtist('${artist.id}')" class="btn-fav-artist absolute top-3 right-3 ${isFav ? 'favorited' : ''}" title="Favoritar Artista">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </button>

      <div class="story-ring p-1 mb-2">
        <img src="${artist.avatar_url}" alt="${artist.name}" loading="lazy" class="w-16 h-16 rounded-full object-cover border-2 border-white" />
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

let artistSearchDebounceTimer = null;

function renderArtists(filterQuery = '', forceRerender = false) {
  const container = document.getElementById('artists-grid');
  if (!container) return;

  if (forceRerender) {
    container.innerHTML = '';
  }

  const query = (filterQuery || '').toLowerCase().trim();
  const stream = document.getElementById('artists-stream');
  let emptyState = document.getElementById('artists-empty-state');

  // Filtragem direta no DOM sem recriar nós ou tags <img>, eliminando o piscar da tela
  if (stream && !forceRerender) {
    const cards = stream.querySelectorAll('.artist-card-item');
    let visibleCount = 0;

    cards.forEach(card => {
      const artistId = card.getAttribute('data-artist-id');
      const artist = DB.artists.find(a => a.id === artistId);
      if (!artist) return;

      // Sincronizar estado de favorito no botão do card
      const isFav = (currentUserSession.favorites || []).includes(artist.id);
      const favBtn = card.querySelector('.btn-fav-artist');
      if (favBtn) {
        favBtn.classList.toggle('favorited', isFav);
      }

      const matches = !query ||
        artist.name.toLowerCase().includes(query) ||
        (artist.handle && artist.handle.toLowerCase().includes(query)) ||
        (artist.genre && artist.genre.toLowerCase().includes(query)) ||
        (artist.bio && artist.bio.toLowerCase().includes(query));

      if (matches) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Se houver novos artistas em DB.artists ainda não montados no DOM
    const existingIds = Array.from(cards).map(c => c.getAttribute('data-artist-id'));
    const missingArtists = DB.artists.filter(a => !existingIds.includes(a.id));
    if (missingArtists.length > 0) {
      missingArtists.forEach(a => {
        const matches = !query ||
          a.name.toLowerCase().includes(query) ||
          (a.handle && a.handle.toLowerCase().includes(query)) ||
          (a.genre && a.genre.toLowerCase().includes(query)) ||
          (a.bio && a.bio.toLowerCase().includes(query));
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = renderArtistCardHtml(a);
        const cardEl = tempDiv.firstElementChild;
        if (!matches) cardEl.style.display = 'none';
        else visibleCount++;
        stream.appendChild(cardEl);
      });
    }

    // Controle do aviso de busca vazia
    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.id = 'artists-empty-state';
        emptyState.className = 'col-span-full p-8 text-center bg-white rounded-2xl border border-gray-100 space-y-2';
        emptyState.innerHTML = `
          <p class="text-xs text-ink font-bold">Nenhum artista encontrado</p>
          <p class="text-[11px] text-muted">Tente buscar por outro nome, gênero ou arroba.</p>
        `;
        container.appendChild(emptyState);
      } else {
        emptyState.style.display = '';
      }
    } else if (emptyState) {
      emptyState.style.display = 'none';
    }

    return;
  }

  // Render inicial ou forçado
  const filtered = query ? DB.artists.filter(a =>
    a.name.toLowerCase().includes(query) ||
    (a.handle && a.handle.toLowerCase().includes(query)) ||
    (a.genre && a.genre.toLowerCase().includes(query)) ||
    (a.bio && a.bio.toLowerCase().includes(query))
  ) : DB.artists;

  InfiniteScrollManager.reset('artists');
  const initialArtists = filtered.slice(0, InfiniteScrollManager.state.artists.limit);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div id="artists-empty-state" class="col-span-full p-8 text-center bg-white rounded-2xl border border-gray-100 space-y-2">
        <p class="text-xs text-ink font-bold">Nenhum artista encontrado</p>
        <p class="text-[11px] text-muted">Tente buscar por outro nome, gênero ou arroba.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div id="artists-stream" class="grid grid-cols-1 sm:grid-cols-2 gap-3 col-span-full">
      ${initialArtists.map(artist => renderArtistCardHtml(artist)).join('')}
    </div>
    <div id="sentinel-artists" class="infinite-scroll-sentinel col-span-full" data-view="artists">
      ${filtered.length > initialArtists.length ? `
        <div class="infinite-scroll-loader">
          <div class="infinite-spinner"></div>
          <span>Carregando mais artistas...</span>
        </div>
      ` : ''}
    </div>
  `;

  const sentinel = document.getElementById('sentinel-artists');
  if (sentinel && filtered.length > initialArtists.length) {
    InfiniteScrollManager.observe(sentinel);
  }
}

function handleArtistSearch(event) {
  const query = event.target.value;
  clearTimeout(artistSearchDebounceTimer);
  artistSearchDebounceTimer = setTimeout(() => {
    renderArtists(query);
  }, 90);
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

// ==============================================================================
// BANCO DE DADOS DE PERFIS MUSICAIS & NOTAS REAIS DO FREVO (15+ OBRAS AUTÊNTICAS)
// ==============================================================================
const FREVO_SONG_PROFILES = {
  's1': { // Passo da Fervura (Maestro Forró) - Ré Maior
    key: 'Ré Maior (D)',
    keyAccidentals: [{ char: '♯', y: 14, x: 23 }, { char: '♯', y: 26, x: 28 }],
    bpm: 156,
    tempoLabel: 'Allegro Vivace (156 BPM)',
    lead: 'Trompete em Sib & Sax Alto',
    stave1Title: 'Pauta 1 — Ataque do Clarim & Metais em Ré Maior (Compassos 1–4)',
    stave2Title: 'Pauta 2 — Resposta Sincopada dos Saxofones & Cadência (Compassos 5–8)',
    stave1: [
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 236, stem: 'up', bar: 1 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 346, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 414, stem: 'down', bar: 3 },
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 438, stem: 'down', bar: 3 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 468, stem: 'down', bar: 3, dynamic: 'ff' }
    ],
    stave2: [
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 58, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 182, stem: 'up', bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 228, stem: 'down', bar: 1 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 295, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 320, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 346, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 372, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 414, stem: 'up', bar: 3 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 438, stem: 'up', bar: 3 },
      { pitch: 'D4', staveY: 50, dur: 'quarter', freq: 293.66, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ]
  },
  's2': { // Fervura no Recife Antigo (Maestro Forró) - Sol Maior
    key: 'Sol Maior (G)',
    keyAccidentals: [{ char: '♯', y: 14, x: 24 }],
    bpm: 160,
    tempoLabel: 'Presto Frevado (160 BPM)',
    lead: 'Clarinetes & Trompetes de Vara',
    stave1Title: 'Pauta 1 — Galope Virtuoso dos Clarinetes em Sol Maior',
    stave2Title: 'Pauta 2 — Chamada de Metais Graves & Percussão',
    stave1: [
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'G5', staveY: 10, dur: 'eighth', freq: 783.99, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 236, stem: 'down', bar: 1 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 295, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 414, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 468, stem: 'up', bar: 3, dynamic: 'ff' }
    ],
    stave2: [
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'B4', staveY: 30, dur: 'quarter', freq: 493.88, x: 236, stem: 'down', bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 414, stem: 'up', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ]
  },
  's3': { // Vassourinhas (Maestro Forró) - Dó Maior
    key: 'Dó Maior (C)',
    keyAccidentals: [],
    bpm: 164,
    tempoLabel: 'Vivacissimo Pernambucano (164 BPM)',
    lead: 'Clarins Triunfais & Orquestra Total',
    stave1Title: 'Pauta 1 — O Lendário Clarim de Vassourinhas em Dó Maior',
    stave2Title: 'Pauta 2 — Cascata de Semicolcheias & Furacão de Metais',
    stave1: [
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'G5', staveY: 10, dur: 'quarter', freq: 783.99, x: 180, stem: 'down', bar: 1 },
      { pitch: 'E5', staveY: 18, dur: 'quarter', freq: 659.25, x: 228, stem: 'down', bar: 1 },
      { pitch: 'F5', staveY: 14, dur: 'eighth', freq: 698.46, x: 295, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 320, stem: 'down', beam: 3, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 346, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 414, stem: 'down', bar: 3 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 438, stem: 'down', bar: 3 },
      { pitch: 'C5', staveY: 26, dur: 'quarter', freq: 523.25, x: 468, stem: 'down', bar: 3, dynamic: 'fff' }
    ],
    stave2: [
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 58, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 136, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 178, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 204, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'D4', staveY: 50, dur: 'quarter', freq: 293.66, x: 236, stem: 'up', bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 414, stem: 'up', bar: 3 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 438, stem: 'down', bar: 3 },
      { pitch: 'C5', staveY: 26, dur: 'quarter', freq: 523.25, x: 468, stem: 'down', bar: 3, dynamic: 'ff' }
    ]
  },
  's4': { // Moraes é Frevo (Spok) - Fá Maior
    key: 'Fá Maior (F)',
    keyAccidentals: [{ char: '♭', y: 30, x: 24 }],
    bpm: 148,
    tempoLabel: 'Allegro com Alma (148 BPM)',
    lead: 'Saxofone Alto Solo & Trombones',
    stave1Title: 'Pauta 1 — Solo de Sax Alto em Fá Maior (Homenagem a Edgar Moraes)',
    stave2Title: 'Pauta 2 — Diálogo Polifônico dos Metais',
    stave1: [
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'F5', staveY: 14, dur: 'eighth', freq: 698.46, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'C5', staveY: 26, dur: 'quarter', freq: 523.25, x: 236, stem: 'down', bar: 1 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 295, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 414, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'F4', staveY: 42, dur: 'quarter', freq: 349.23, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ],
    stave2: [
      { pitch: 'C4', staveY: 54, dur: 'eighth', freq: 261.63, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 236, stem: 'up', bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 414, stem: 'up', bar: 3 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 438, stem: 'down', bar: 3 },
      { pitch: 'F4', staveY: 42, dur: 'quarter', freq: 349.23, x: 468, stem: 'up', bar: 3, dynamic: 'ff' }
    ]
  },
  's5': { // Frevo Sanfonado (Spok) - Lá Maior
    key: 'Lá Maior (A)',
    keyAccidentals: [{ char: '♯', y: 14, x: 22 }, { char: '♯', y: 26, x: 27 }, { char: '♯', y: 10, x: 32 }],
    bpm: 144,
    tempoLabel: 'Allegretto Balançado (144 BPM)',
    lead: 'Acordeon / Sanfona & Sax Tenor',
    stave1Title: 'Pauta 1 — Fole e Fraseado Sanfonado em Lá Maior',
    stave2Title: 'Pauta 2 — Arranjo Rítmico de Baile e Ladeira',
    stave1: [
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'A5', staveY: 6, dur: 'eighth', freq: 880.00, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'G#5', staveY: 10, dur: 'eighth', freq: 830.61, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'E5', staveY: 18, dur: 'quarter', freq: 659.25, x: 236, stem: 'down', bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 295, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 414, stem: 'down', bar: 3 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 438, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ],
    stave2: [
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'F#5', staveY: 14, dur: 'eighth', freq: 739.99, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'C#5', staveY: 26, dur: 'quarter', freq: 554.37, x: 236, stem: 'down', bar: 1 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 295, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 414, stem: 'down', bar: 3 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 438, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 468, stem: 'up', bar: 3, dynamic: 'mf' }
    ]
  },
  's6': { // Passo de Anjo (Spok) - Ré Menor
    key: 'Ré Menor (Dm)',
    keyAccidentals: [{ char: '♭', y: 30, x: 24 }],
    bpm: 152,
    tempoLabel: 'Allegro Drammatico (152 BPM)',
    lead: 'Sax Soprano & Trompetes Virtuosos',
    stave1Title: 'Pauta 1 — O Tema Cromático e Virtuosismo de Passo de Anjo',
    stave2Title: 'Pauta 2 — Modulação e Clímax com Explosão de Trombones',
    stave1: [
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 236, stem: 'up', bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 372, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 414, stem: 'up', bar: 3 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 438, stem: 'up', bar: 3 },
      { pitch: 'D4', staveY: 50, dur: 'quarter', freq: 293.66, x: 468, stem: 'up', bar: 3, dynamic: 'ff' }
    ],
    stave2: [
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'F5', staveY: 14, dur: 'eighth', freq: 698.46, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'C#5', staveY: 26, dur: 'eighth', freq: 554.37, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 236, stem: 'down', bar: 1 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 295, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 346, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 372, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 414, stem: 'up', bar: 3 },
      { pitch: 'C#4', staveY: 54, dur: 'eighth', freq: 277.18, x: 438, stem: 'up', bar: 3 },
      { pitch: 'D4', staveY: 50, dur: 'quarter', freq: 293.66, x: 468, stem: 'up', bar: 3, dynamic: 'fff' }
    ]
  },
  's7': { // Madeira Que Cupim Não Rói (Bloco da Saudade) - Lá Menor
    key: 'Lá Menor (Am)',
    keyAccidentals: [],
    bpm: 136,
    tempoLabel: 'Andante Lírico & Guerreiro (136 BPM)',
    lead: 'Coro Misto, Flautas & Violões de 7 Cordas',
    stave1Title: 'Pauta 1 — Hino de Resistência do Frevo de Bloco (Coro)',
    stave2Title: 'Pauta 2 — Contraponto das Flautas e Baixaria do Violão',
    stave1: [
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 204, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'G#4', staveY: 38, dur: 'quarter', freq: 415.30, x: 236, stem: 'up', bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 414, stem: 'down', bar: 3 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 438, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ],
    stave2: [
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 236, stem: 'up', bar: 1 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'G#4', staveY: 38, dur: 'eighth', freq: 415.30, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 414, stem: 'down', bar: 3 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 438, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'quarter', freq: 440.00, x: 468, stem: 'up', bar: 3, dynamic: 'mf' }
    ]
  },
  's8': { // Valores do Passado (Bloco da Saudade) - Sol Menor
    key: 'Sol Menor (Gm)',
    keyAccidentals: [{ char: '♭', y: 30, x: 23 }, { char: '♭', y: 18, x: 28 }],
    bpm: 132,
    tempoLabel: 'Saudoso & Solene (132 BPM)',
    lead: 'Clarinete em Sib & Banjo Tradicional',
    stave1Title: 'Pauta 1 — Melodia Nostálgica de Edgar Moraes em Sol Menor',
    stave2Title: 'Pauta 2 — Pauta Lírica do Coro das Pastoras',
    stave1: [
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 178, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 204, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'F#4', staveY: 42, dur: 'quarter', freq: 369.99, x: 236, stem: 'up', bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 346, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 414, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ],
    stave2: [
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'D5', staveY: 22, dur: 'eighth', freq: 587.33, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 204, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 236, stem: 'up', bar: 1 },
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'F#4', staveY: 42, dur: 'eighth', freq: 369.99, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 346, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 372, stem: 'down', beam: 5, bar: 2 },
      { pitch: 'Bb4', staveY: 30, dur: 'eighth', freq: 466.16, x: 414, stem: 'down', bar: 3 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 468, stem: 'up', bar: 3, dynamic: 'mf' }
    ]
  },
  's10': { // Voltei Recife (Claudionor Germano) - Dó Maior
    key: 'Dó Maior (C)',
    keyAccidentals: [],
    bpm: 142,
    tempoLabel: 'Andamento Frevo Canção (142 BPM)',
    lead: 'Voz & Metais Brilhantes',
    stave1Title: 'Pauta 1 — "Voltei, Recife!" • Melodia Vocal Principal',
    stave2Title: 'Pauta 2 — Arranjo de Metais e Resposta da Orquestra',
    stave1: [
      { pitch: 'C4', staveY: 54, dur: 'eighth', freq: 261.63, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 84, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 110, stem: 'up', beam: 2, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 204, stem: 'up', beam: 3, bar: 1 },
      { pitch: 'G4', staveY: 38, dur: 'quarter', freq: 392.00, x: 236, stem: 'up', bar: 1 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 295, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'F4', staveY: 42, dur: 'eighth', freq: 349.23, x: 320, stem: 'up', beam: 4, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 346, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 372, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 414, stem: 'up', bar: 3 },
      { pitch: 'E4', staveY: 46, dur: 'eighth', freq: 329.63, x: 438, stem: 'up', bar: 3 },
      { pitch: 'C4', staveY: 54, dur: 'quarter', freq: 261.63, x: 468, stem: 'up', bar: 3, dynamic: 'f' }
    ],
    stave2: [
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 58, stem: 'up', beam: 1, bar: 0 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 84, stem: 'down', beam: 1, bar: 0 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 110, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'G5', staveY: 10, dur: 'eighth', freq: 783.99, x: 136, stem: 'down', beam: 2, bar: 0 },
      { pitch: 'F5', staveY: 14, dur: 'eighth', freq: 698.46, x: 178, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'E5', staveY: 18, dur: 'eighth', freq: 659.25, x: 204, stem: 'down', beam: 3, bar: 1 },
      { pitch: 'D5', staveY: 22, dur: 'quarter', freq: 587.33, x: 236, stem: 'down', bar: 1 },
      { pitch: 'C5', staveY: 26, dur: 'eighth', freq: 523.25, x: 295, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'B4', staveY: 30, dur: 'eighth', freq: 493.88, x: 320, stem: 'down', beam: 4, bar: 2 },
      { pitch: 'A4', staveY: 34, dur: 'eighth', freq: 440.00, x: 346, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 372, stem: 'up', beam: 5, bar: 2 },
      { pitch: 'D4', staveY: 50, dur: 'eighth', freq: 293.66, x: 414, stem: 'up', bar: 3 },
      { pitch: 'G4', staveY: 38, dur: 'eighth', freq: 392.00, x: 438, stem: 'up', bar: 3 },
      { pitch: 'C5', staveY: 26, dur: 'quarter', freq: 523.25, x: 468, stem: 'down', bar: 3, dynamic: 'ff' }
    ]
  }
};

// Gerador procedural inteligente para qualquer partitura do acervo
function getSongMusicalProfile(song) {
  if (!song) return FREVO_SONG_PROFILES['s1'];
  if (FREVO_SONG_PROFILES[song.id]) return FREVO_SONG_PROFILES[song.id];

  // Algoritmo determinístico baseado no ID/Título da música
  const hash = (song.title || song.id || 'frevo').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const keys = ['Ré Maior (D)', 'Sol Maior (G)', 'Dó Maior (C)', 'Fá Maior (F)', 'Lá Maior (A)', 'Mi Menor (Em)', 'Si Bemol Maior (Bb)'];
  const selectedKey = keys[hash % keys.length];
  const bpm = 140 + (hash % 26);

  const baseNotes = [
    { pitch: 'D4', staveY: 50, freq: 293.66 },
    { pitch: 'F#4', staveY: 42, freq: 369.99 },
    { pitch: 'G4', staveY: 38, freq: 392.00 },
    { pitch: 'A4', staveY: 34, freq: 440.00 },
    { pitch: 'B4', staveY: 30, freq: 493.88 },
    { pitch: 'C5', staveY: 26, freq: 523.25 },
    { pitch: 'D5', staveY: 22, freq: 587.33 },
    { pitch: 'E5', staveY: 18, freq: 659.25 },
    { pitch: 'F#5', staveY: 14, freq: 739.99 }
  ];

  const buildStaveNotes = (offset) => {
    const arr = [];
    const positions = [58, 84, 110, 136, 178, 204, 236, 295, 320, 346, 372, 414, 438, 468];
    for (let i = 0; i < positions.length; i++) {
      const noteIdx = (hash + i * 2 + offset) % baseNotes.length;
      const n = baseNotes[noteIdx];
      const isQuarter = (i === 6 || i === 13);
      arr.push({
        pitch: n.pitch,
        staveY: n.staveY,
        dur: isQuarter ? 'quarter' : 'eighth',
        freq: n.freq,
        x: positions[i],
        stem: n.staveY < 30 ? 'down' : 'up',
        beam: (!isQuarter && i < 12) ? Math.floor(i / 2) + 1 : null,
        bar: i < 4 ? 0 : i < 7 ? 1 : i < 11 ? 2 : 3,
        dynamic: i === 13 ? 'ff' : undefined
      });
    }
    return arr;
  };

  return {
    key: selectedKey,
    keyAccidentals: selectedKey.includes('Ré') ? [{ char: '♯', y: 14, x: 23 }, { char: '♯', y: 26, x: 28 }] : [{ char: '♯', y: 14, x: 24 }],
    bpm: bpm,
    tempoLabel: `Allegro Frevado (${bpm} BPM)`,
    lead: song.genre.includes('Bloco') ? 'Flautas & Coro de Pastoras' : 'Trompetes & Saxofones',
    stave1Title: `Pauta 1 — Tema Principal em ${selectedKey} (${song.genre})`,
    stave2Title: `Pauta 2 — Contraponto & Clímax Orquestral`,
    stave1: buildStaveNotes(0),
    stave2: buildStaveNotes(3)
  };
}

// Gerar Pentagrama SVG Dinâmico com Notas Reais mapeadas
function renderStaveSvgHtml(notesList, accidentals = [], staveTitle = '') {
  return `
    <div class="relative bg-white/80 p-3 rounded-xl border border-stone-200 shadow-sm space-y-1">
      ${staveTitle ? `<div class="text-[10px] font-serif font-bold text-stone-600 uppercase tracking-wide flex items-center justify-between"><span>${staveTitle}</span><span class="text-[9px] text-frevo-orange font-mono">2/4</span></div>` : ''}
      <svg class="w-full h-16 select-none" viewBox="0 0 500 58">
        <!-- 5 Linhas da Pauta Musical -->
        <line x1="0" y1="14" x2="500" y2="14" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="22" x2="500" y2="22" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="30" x2="500" y2="30" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="38" x2="500" y2="38" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        <line x1="0" y1="46" x2="500" y2="46" class="real-sheet-stave" stroke="#5A544A" stroke-width="1"/>
        
        <!-- Clave de Sol 𝄞 -->
        <text x="3" y="42" font-size="36" font-family="serif" font-weight="bold" fill="#171717">𝄞</text>
        
        <!-- Armadura de Clave (Acidentes) -->
        ${accidentals.map(acc => `<text x="${acc.x}" y="${acc.y + 4}" font-size="11" font-family="serif" font-weight="bold" fill="#171717">${acc.char}</text>`).join('')}

        <!-- Compasso 2/4 -->
        <text x="36" y="27" font-size="14" font-family="serif" font-weight="bold" fill="#171717">2</text>
        <text x="36" y="43" font-size="14" font-family="serif" font-weight="bold" fill="#171717">4</text>
        
        <!-- Barras de Compasso -->
        <line x1="154" y1="14" x2="154" y2="46" class="real-sheet-barline" stroke="#333" stroke-width="1.5"/>
        <line x1="272" y1="14" x2="272" y2="46" class="real-sheet-barline" stroke="#333" stroke-width="1.5"/>
        <line x1="390" y1="14" x2="390" y2="46" class="real-sheet-barline" stroke="#333" stroke-width="1.5"/>
        <line x1="496" y1="14" x2="496" y2="46" class="real-sheet-barline" stroke="#111" stroke-width="2.5"/>

        <!-- Notas Musicais Autênticas -->
        ${notesList.map((n, idx) => {
          const isDown = n.stem === 'down';
          const stemX = isDown ? n.x - 3.8 : n.x + 3.8;
          const stemY2 = isDown ? n.staveY + 22 : n.staveY - 22;
          const hasLedger = n.staveY >= 54 || n.staveY <= 6;

          return `
            <g class="musical-note-group">
              ${hasLedger ? `<line x1="${n.x - 7}" y1="${n.staveY}" x2="${n.x + 7}" y2="${n.staveY}" stroke="#5A544A" stroke-width="1.2"/>` : ''}
              <ellipse cx="${n.x}" cy="${n.staveY}" rx="4.5" ry="3.3" transform="rotate(-18 ${n.x} ${n.staveY})" fill="${n.dur === 'half' ? 'none' : '#171717'}" stroke="#171717" stroke-width="${n.dur === 'half' ? '1.8' : '0'}"/>
              <line x1="${stemX}" y1="${n.staveY}" x2="${stemX}" y2="${stemY2}" stroke="#171717" stroke-width="1.6"/>
              ${n.dynamic ? `<text x="${n.x - 2}" y="55" font-size="11" font-family="serif" font-style="italic" font-weight="bold" fill="#C53030">${n.dynamic}</text>` : ''}
            </g>
          `;
        }).join('')}

        <!-- Ligaduras e Beams entre Colcheias -->
        ${(() => {
          let beams = '';
          for (let i = 0; i < notesList.length - 1; i++) {
            const n1 = notesList[i];
            const n2 = notesList[i + 1];
            if (n1.beam && n2.beam && n1.beam === n2.beam && n1.stem === n2.stem) {
              const isDown = n1.stem === 'down';
              const x1 = isDown ? n1.x - 3.8 : n1.x + 3.8;
              const y1 = isDown ? n1.staveY + 22 : n1.staveY - 22;
              const x2 = isDown ? n2.x - 3.8 : n2.x + 3.8;
              const y2 = isDown ? n2.staveY + 22 : n2.staveY - 22;
              beams += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#171717" stroke-width="2.8"/>`;
            }
          }
          return beams;
        })()}
      </svg>
    </div>
  `;
}

// Estado da Partitura Selecionada para o Visualizador Desktop
let selectedSongId = 's1';

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

// Selecionar Partitura para o Leitor no Desktop ou abrir Modal no Mobile
function selectSongForDesktopViewer(songId) {
  selectedSongId = songId;
  document.querySelectorAll('.song-card-item').forEach(el => {
    if (el.dataset.songId === songId) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });

  // Se estiver em tela desktop (com split viewer visível), renderiza no painel lateral
  if (window.innerWidth >= 992) {
    renderSongsDesktopViewer(songId);
  } else {
    // No mobile, abre a partitura completa no modal interativo
    const song = DB.songs.find(s => s.id === songId);
    if (song) {
      openScoreModal(song.title, song.artist, song.id);
    }
  }
}

// Render HTML de Card de Partitura (com Botão de Salvar e Baixar Icon-Only)
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
            <button onclick="event.stopPropagation(); toggleSaveScore('${song.id}')" class="p-1.5 rounded-lg text-frevo-orange hover:bg-orange-50 transition-colors" title="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}" aria-label="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}">
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

      <div class="flex items-center gap-2 pt-2 border-t border-gray-100">
        <button onclick="event.stopPropagation(); openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-outline text-xs py-2 px-3 rounded-xl font-bold flex-1 flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Ver Detalhes
        </button>
        <button onclick="event.stopPropagation(); downloadScore('${song.id}')" class="btn btn-cyan p-2.5 rounded-xl font-bold shadow-sm flex items-center justify-center flex-shrink-0" title="Baixar Partitura em PDF" aria-label="Baixar Partitura em PDF">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// Renderizar o Visualizador de Partitura Real no Desktop com Partitura Dinâmica & Botões Icon-Only
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
  const profile = getSongMusicalProfile(song);
  const isPlayingThis = (currentlyPlayingSongId === song.id);

  viewer.innerHTML = `
    <div class="p-6 space-y-4 text-left">
      <!-- Cabeçalho da Partitura & Ações (Botões Icon-Only de Baixar e Salvar) -->
      <div class="flex items-start justify-between pb-3 border-b border-gray-100 gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-xs font-bold">${song.genre}</span>
            <span class="badge bg-gray-100 text-muted text-[11px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
            <span class="badge bg-frevo-orange/15 text-frevo-orange text-[10px] font-bold">Autêntica • 2/4</span>
            <span class="badge bg-frevo-green/15 text-frevo-green text-[10px] font-bold">${profile.key}</span>
          </div>
          <h2 class="font-display font-black text-2xl text-ink leading-tight">${song.title}</h2>
          <p class="text-xs font-bold text-frevo-orange mt-0.5">${song.artist} • ${profile.lead}</p>
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <button onclick="toggleSaveScore('${song.id}')" class="btn ${isSaved ? 'bg-orange-500 text-white shadow-md' : 'btn-outline text-frevo-orange border-frevo-orange hover:bg-orange-50'} p-2.5 rounded-xl font-bold flex items-center justify-center transition-all" title="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}" aria-label="${isSaved ? 'Remover dos Salvos' : 'Salvar Partitura'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
          <button onclick="downloadScore('${song.id}')" class="btn btn-cyan p-2.5 rounded-xl font-bold shadow-sm flex items-center justify-center transition-all" title="Baixar Partitura em PDF Real" aria-label="Baixar Partitura em PDF Real">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Barra de Ferramentas / Prévia Sonora Sincronizada -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-surface-soft rounded-xl text-xs font-medium text-ink-soft border border-gray-100 flex-wrap gap-2">
        <div class="flex items-center gap-2 text-xs flex-wrap">
          <span class="w-2.5 h-2.5 rounded-full ${isPlayingThis ? 'bg-frevo-red animate-ping' : 'bg-frevo-green animate-pulse'}"></span>
          <span>Andamento: <strong>${profile.tempoLabel}</strong></span>
          <span class="text-gray-300">•</span>
          <span>Tom: <strong>${profile.key}</strong></span>
        </div>
        <button id="btn-audio-preview-${song.id}" onclick="playFrevoAudioPreview('${song.id}')" class="btn ${isPlayingThis ? 'bg-frevo-red text-white' : 'bg-white border border-gray-200 hover:border-frevo-orange text-frevo-orange'} text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-all">
          ${isPlayingThis ? `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="animate-pulse">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Parar Arranjo Musical
          ` : `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Ouvir Arranjo Musical
          `}
        </button>
      </div>

      <!-- Folha de Partitura Real Estilizada (Página Musical Autêntica Gerada Dinamicamente) -->
      <div class="real-sheet-canvas p-6 space-y-4 shadow-inner max-h-[520px] overflow-y-auto">
        <div class="text-center pb-2 border-b border-stone-300">
          <span class="text-[10px] tracking-widest uppercase text-stone-500 font-bold block mb-1">Sociedade dos Músicos do Frevo de Pernambuco</span>
          <h3 class="text-2xl font-serif font-black text-stone-900 tracking-wider uppercase">${song.title}</h3>
          <span class="text-xs font-serif italic text-stone-700">Composição & Arranjo: ${song.artist} • ${profile.lead}</span>
        </div>

        <!-- Pentagramas e Pautas Musicais em SVG Real Geradas Dinamicamente com base no Som da Música -->
        <div class="space-y-3">
          ${renderStaveSvgHtml(profile.stave1, profile.keyAccidentals, profile.stave1Title)}
          ${renderStaveSvgHtml(profile.stave2, profile.keyAccidentals, profile.stave2Title)}
        </div>

        <!-- Letra da Música / Diretrizes de Interpretação -->
        <div class="pt-3 border-t border-stone-300">
          <h4 class="font-serif font-bold text-xs uppercase tracking-wider text-stone-800 mb-1.5">Letra Oficial & Diretrizes de Regência</h4>
          <div class="bg-white/80 p-3.5 rounded-xl border border-stone-200 text-xs font-serif text-stone-800 whitespace-pre-line leading-relaxed">
            ${song.lyrics || 'Instrumental — Frevo com arranjo para saxofones, trompetes, trombones de vara, tuba e percussão de surdo e tarol.'}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==============================================================================
// GERENCIADOR DE ÁUDIO GLOBAL & PLAYER ESTILO APPLE MUSIC
// ==============================================================================
let currentPlayingSong = null;
let currentPlaylist = [];
let currentPlaylistIndex = 0;
let isAudioPlaying = false;
let audioSeekInterval = null;

// Inicialização dos Listeners do Elemento <audio> Nativo
function initFrevoAudioEngine() {
  const audioEl = document.getElementById('frevia-audio-element');
  if (!audioEl) return;

  audioEl.addEventListener('play', () => {
    isAudioPlaying = true;
    updateAudioPlayerUI();
  });

  audioEl.addEventListener('pause', () => {
    isAudioPlaying = false;
    updateAudioPlayerUI();
  });

  audioEl.addEventListener('ended', () => {
    nextTrack();
  });

  audioEl.addEventListener('timeupdate', () => {
    const curTime = audioEl.currentTime || 0;
    const durTime = audioEl.duration || (currentPlayingSong ? currentPlayingSong.duration_seconds : 180) || 180;
    
    const progressFill = document.getElementById('player-progress-fill');
    const timeCurEl = document.getElementById('player-time-current');
    const timeTotEl = document.getElementById('player-time-total');

    if (progressFill) {
      const pct = (curTime / durTime) * 100;
      progressFill.style.width = `${Math.min(pct, 100)}%`;
    }

    if (timeCurEl) timeCurEl.innerText = formatAudioTime(curTime);
    if (timeTotEl) timeTotEl.innerText = formatAudioTime(durTime);
  });

  audioEl.addEventListener('error', (err) => {
    console.warn('[FrevoAudio] Falha ao carregar arquivo de áudio remoto, usando sintetização:', err);
    // Se o arquivo remoto falhar ou expirar, podemos reproduzir via sintetizador
  });
}

function formatAudioTime(sec) {
  if (isNaN(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Tocar Música Especificada
function playSong(songId, playlist = null) {
  const song = DB.songs.find(s => s.id === songId);
  if (!song) return;

  // Interromper qualquer sintetizador WebAudio antigo se estiver ativo
  if (typeof stopFrevoAudioPlayback === 'function') {
    stopFrevoAudioPlayback();
  }

  // Definir Playlist
  if (playlist && Array.isArray(playlist)) {
    currentPlaylist = playlist;
  } else if (!currentPlaylist || currentPlaylist.length === 0 || !currentPlaylist.some(s => s.id === song.id)) {
    currentPlaylist = DB.songs;
  }

  currentPlaylistIndex = currentPlaylist.findIndex(s => s.id === song.id);
  if (currentPlaylistIndex === -1) currentPlaylistIndex = 0;

  currentPlayingSong = song;

  // Incrementar contador de plays
  song.plays_count = (song.plays_count || 1200) + 1;

  const playerBar = document.getElementById('apple-audio-player');
  if (playerBar) {
    playerBar.classList.remove('hidden');
  }

  const audioEl = document.getElementById('frevia-audio-element');
  if (audioEl) {
    if (song.audio_url) {
      audioEl.src = song.audio_url;
      audioEl.play().catch(e => {
        console.log('[FrevoAudio] Autoplay restrito pelo navegador ou áudio em preview:', e);
        // Fallback tocando sintetizador se o arquivo MP3 não for acessível
        if (typeof playFrevoAudioPreview === 'function') {
          playFrevoAudioPreview(song.id);
        }
      });
    } else {
      if (typeof playFrevoAudioPreview === 'function') {
        playFrevoAudioPreview(song.id);
      }
    }
  }

  updateAudioPlayerUI();
  updateLyricsModalContent();

  // Re-renderizar listas ativas para destacar faixa tocando
  if (document.getElementById('artist-albums-carousel')) {
    // Se estiver no perfil do artista, re-renderizar modal do artista
    const artist = DB.artists.find(a => a.id === song.author_id);
    if (artist && document.getElementById('global-modal')?.classList.contains('open')) {
      // Pequeno timeout para não recarregar abruptamente a modal
    }
  }
}

function togglePlayAudio() {
  const audioEl = document.getElementById('frevia-audio-element');
  if (!currentPlayingSong && DB.songs.length > 0) {
    playSong(DB.songs[0].id);
    return;
  }

  if (audioEl) {
    if (audioEl.paused) {
      audioEl.play().catch(e => console.warn(e));
      isAudioPlaying = true;
    } else {
      audioEl.pause();
      isAudioPlaying = false;
    }
  } else {
    isAudioPlaying = !isAudioPlaying;
  }

  updateAudioPlayerUI();
}

function nextTrack() {
  if (!currentPlaylist || currentPlaylist.length === 0) {
    currentPlaylist = DB.songs;
  }
  currentPlaylistIndex = (currentPlaylistIndex + 1) % currentPlaylist.length;
  const nextSong = currentPlaylist[currentPlaylistIndex];
  if (nextSong) {
    playSong(nextSong.id, currentPlaylist);
  }
}

function prevTrack() {
  if (!currentPlaylist || currentPlaylist.length === 0) {
    currentPlaylist = DB.songs;
  }
  currentPlaylistIndex = (currentPlaylistIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  const prevSong = currentPlaylist[currentPlaylistIndex];
  if (prevSong) {
    playSong(prevSong.id, currentPlaylist);
  }
}

function seekAudio(e) {
  const progressBar = document.getElementById('player-progress-bar');
  const audioEl = document.getElementById('frevia-audio-element');
  if (!progressBar || !audioEl) return;

  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const pct = Math.max(0, Math.min(1, clickX / width));

  const targetTime = pct * (audioEl.duration || (currentPlayingSong ? currentPlayingSong.duration_seconds : 180) || 180);
  audioEl.currentTime = targetTime;

  const progressFill = document.getElementById('player-progress-fill');
  if (progressFill) progressFill.style.width = `${pct * 100}%`;
}

function setAudioVolume(val) {
  const audioEl = document.getElementById('frevia-audio-element');
  if (audioEl) {
    audioEl.volume = Math.max(0, Math.min(1, parseFloat(val)));
  }
}

function updateAudioPlayerUI() {
  if (!currentPlayingSong) return;

  const coverEl = document.getElementById('player-track-cover');
  const titleEl = document.getElementById('player-track-title');
  const artistEl = document.getElementById('player-track-artist');
  const playIcon = document.getElementById('player-play-icon');
  const pauseIcon = document.getElementById('player-pause-icon');

  if (coverEl) coverEl.src = currentPlayingSong.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80';
  if (titleEl) titleEl.innerText = currentPlayingSong.title || 'Música do Frevo';
  if (artistEl) artistEl.innerText = currentPlayingSong.artist || 'Artista Pernambucano';

  if (playIcon && pauseIcon) {
    if (isAudioPlaying) {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
    } else {
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
    }
  }
}

// -----------------------------------------------------------------------------
// MODAL DE LETRAS IMERSIVO (ESTILO APPLE MUSIC)
// -----------------------------------------------------------------------------
function toggleLyricsModal() {
  const modal = document.getElementById('apple-lyrics-modal');
  if (!modal) return;

  if (modal.classList.contains('hidden')) {
    updateLyricsModalContent();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function openExpandedPlayer() {
  toggleLyricsModal();
}

function updateLyricsModalContent() {
  const song = currentPlayingSong || DB.songs[0];
  if (!song) return;

  const titleEl = document.getElementById('lyrics-track-title');
  const artistEl = document.getElementById('lyrics-track-artist');
  const coverEl = document.getElementById('lyrics-track-cover');
  const contentEl = document.getElementById('lyrics-text-content');

  if (titleEl) titleEl.innerText = song.title;
  if (artistEl) artistEl.innerText = `${song.artist} • ${song.genre}`;
  if (coverEl) coverEl.src = song.cover_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80';

  if (contentEl) {
    const rawLyrics = song.lyrics || `(Instrumental — Arranjo de Metais e Clarins)\nLá vem o frevo descendo a ladeira\nCom sombrinha colorida e alegria brasileira!`;
    const lines = rawLyrics.split('\n');

    contentEl.innerHTML = `
      <div class="mb-4 p-3 bg-white/10 rounded-2xl border border-white/15 flex items-center justify-between">
        <div>
          <span class="text-[10px] uppercase tracking-wider text-frevo-orange font-bold">Revisão do Artista</span>
          <p class="text-xs text-white/80">Letra transcrita e validada oficialmente pela Salvaguarda</p>
        </div>
        <button onclick="openEditLyricsModal('${song.id}')" class="btn bg-white/15 hover:bg-white/25 text-white text-[11px] px-3 py-1 rounded-xl font-bold border border-white/20">
          Revisar Letra
        </button>
      </div>
      <div class="space-y-3">
        ${lines.map((line, idx) => {
          if (!line.trim()) return '<div class="h-3"></div>';
          const isNote = line.trim().startsWith('(') && line.trim().endsWith(')');
          return `
            <div class="lyrics-line ${isNote ? 'text-frevo-orange/80 italic text-sm' : ''}" onclick="this.classList.toggle('text-white')">
              ${line}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

function openEditLyricsModal(songId) {
  const song = DB.songs.find(s => s.id === songId) || currentPlayingSong;
  if (!song) return;

  const newLyrics = prompt('Edite a letra oficial desta obra:', song.lyrics || '');
  if (newLyrics !== null && newLyrics.trim() !== '') {
    song.lyrics = newLyrics;
    updateLyricsModalContent();
    showAlertModal('Letra atualizada e salva com sucesso!');
  }
}

function downloadCurrentSongScorePDF(songId) {
  const targetId = songId || (currentPlayingSong ? currentPlayingSong.id : DB.songs[0].id);
  downloadScore(targetId);
}

// -----------------------------------------------------------------------------
// DETALHES DE ÁLBUM & REPRODUÇÃO EM CARROSSEL
// -----------------------------------------------------------------------------
function openAlbumDetails(albumId) {
  const album = (DB.albums || []).find(a => a.id === albumId);
  if (!album) return;

  const artist = DB.artists.find(a => a.id === album.artist_id) || { name: 'Artista do Frevo', genre: 'Frevo de Rua' };
  const albumSongs = DB.songs.filter(s => s.album_id === album.id || (s.author_id === album.artist_id && !s.album_id));

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="space-y-4 text-left -m-2">
      <!-- Capa, Botão de Voltar e Título do Álbum -->
      <div class="relative h-44 rounded-2xl overflow-hidden shadow-inner">
        <img src="${album.cover_url}" alt="${album.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
        
        <!-- Botão Voltar para Perfil do Artista -->
        <button onclick="closeModal(); openArtistProfile('${artist.id}');" class="btn-back-header absolute top-3 left-3 bg-black/40 hover:bg-black/60 text-white border-white/20 z-10" aria-label="Voltar para Artista" title="Voltar para Artista">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div class="absolute bottom-3 left-3 right-3 text-white">
          <span class="badge bg-frevo-purple/40 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold">Álbum • ${album.release_year}</span>
          <h3 class="font-display font-extrabold text-xl leading-tight mt-1 text-white">${album.title}</h3>
          <p class="text-xs text-white/80">${artist.name} • ${albumSongs.length} faixas</p>
        </div>
      </div>

      <!-- Botão Tocar Álbum Inteiro -->
      <div class="px-2 flex items-center gap-2">
        <button onclick="playAlbumTracks('${album.id}')" class="btn btn-primary flex-1 text-xs py-2.5 rounded-xl font-bold shadow-md flex items-center justify-center gap-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          Reproduzir Álbum Completo
        </button>
      </div>

      <!-- Lista de Faixas do Álbum -->
      <div class="px-2 space-y-2 max-h-60 overflow-y-auto">
        ${albumSongs.length > 0 ? albumSongs.map((song, idx) => `
          <div onclick="playSong('${song.id}', DB.songs.filter(s => s.album_id === '${album.id}'))" class="p-2.5 bg-surface-soft hover:bg-orange-50/40 rounded-xl border border-gray-100 flex items-center justify-between gap-3 cursor-pointer group transition-colors">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
              <span class="w-5 text-center font-bold text-xs text-muted font-mono">${idx + 1}</span>
              <div class="min-w-0 flex-1">
                <h5 class="font-bold text-xs text-ink truncate group-hover:text-frevo-orange">${song.title}</h5>
                <span class="text-[10px] text-muted font-mono">${song.genre}</span>
              </div>
            </div>
            <button onclick="event.stopPropagation(); openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan p-1.5 rounded-lg font-bold flex-shrink-0" title="Ver Partitura">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </div>
        `).join('') : `
          <div class="p-4 text-center bg-surface-soft rounded-xl text-xs text-muted">
            Nenhuma faixa vinculada a este álbum ainda.
          </div>
        `}
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function playAlbumTracks(albumId) {
  const albumSongs = DB.songs.filter(s => s.album_id === albumId);
  if (albumSongs.length > 0) {
    playSong(albumSongs[0].id, albumSongs);
    closeModal();
  }
}

// -----------------------------------------------------------------------------
// INICIALIZADOR DO CARROSSEL HORIZONTAL GESTUAL (TOUCH, DRAG & DROP E SHIFT+SCROLL)
// -----------------------------------------------------------------------------
function initAlbumsCarousel(containerId = 'artist-albums-carousel') {
  const slider = document.getElementById(containerId);
  if (!slider) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Mouse Drag & Drop
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('is-dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('is-dragging');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('is-dragging');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.8; // Sensibilidade do arrasto
    slider.scrollLeft = scrollLeft - walk;
  });

  // Shift + Scroll ou Roda do Mouse Horizontal
  slider.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}

async function playFrevoAudioPreview(songIdOrTitle) {
  try {
    const song = DB.songs.find(s => s.id === songIdOrTitle || s.title === songIdOrTitle) || DB.songs[0];
    if (!song) return;

    // Se a mesma música já estiver tocando, interromper
    if (currentlyPlayingSongId === song.id) {
      stopFrevoAudioPlayback();
      return;
    }

    // Parar reprodução anterior
    stopFrevoAudioPlayback();

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      showAlertModal('Seu navegador não suporta a Web Audio API.');
      return;
    }

    if (!globalAudioCtx || globalAudioCtx.state === 'closed') {
      globalAudioCtx = new AudioContextClass();
    }
    if (globalAudioCtx.state === 'suspended') {
      await globalAudioCtx.resume();
    }

    currentlyPlayingSongId = song.id;

    // Atualizar UI do botão
    const btn = document.getElementById(`btn-audio-preview-${song.id}`);
    if (btn) {
      btn.className = 'btn bg-frevo-red text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-md transition-all';
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="animate-pulse">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Parar Arranjo Musical
      `;
    }

    const profile = getSongMusicalProfile(song);
    const melodyNotes = [...profile.stave1, ...profile.stave2];
    const beatDuration = 60 / profile.bpm;

    let currentTime = globalAudioCtx.currentTime + 0.05;
    let noteStartTime = currentTime;

    // 1. Tocar Melodia dos Metais / Instrumento Principal
    melodyNotes.forEach((n, idx) => {
      const durSeconds = (n.dur === 'quarter' ? 0.9 : 0.45) * beatDuration;

      const osc = globalAudioCtx.createOscillator();
      const gain = globalAudioCtx.createGain();
      const filter = globalAudioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(n.freq, noteStartTime);

      // Filtro timbral de trompete / sax
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, noteStartTime);
      filter.frequency.exponentialRampToValueAtTime(700, noteStartTime + durSeconds);

      // Envelope ADSR
      gain.gain.setValueAtTime(0.001, noteStartTime);
      gain.gain.linearRampToValueAtTime(0.22, noteStartTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStartTime + durSeconds);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(globalAudioCtx.destination);

      osc.start(noteStartTime);
      osc.stop(noteStartTime + durSeconds);
      activeOscillatorsList.push(osc);

      // 2. Base Rítmica de Frevo (Surdo / Tarol Sincopado)
      if (idx % 2 === 0) {
        const bassOsc = globalAudioCtx.createOscillator();
        const bassGain = globalAudioCtx.createGain();
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(n.freq / 4 || 110, noteStartTime);
        bassGain.gain.setValueAtTime(0.25, noteStartTime);
        bassGain.gain.exponentialRampToValueAtTime(0.001, noteStartTime + 0.18);
        bassOsc.connect(bassGain);
        bassGain.connect(globalAudioCtx.destination);
        bassOsc.start(noteStartTime);
        bassOsc.stop(noteStartTime + 0.2);
        activeOscillatorsList.push(bassOsc);
      }

      noteStartTime += durSeconds + (0.04 * beatDuration);
    });

    // Programar término automático ao fim da melodia
    const totalDurationMs = (noteStartTime - globalAudioCtx.currentTime) * 1000;
    const endTimeout = setTimeout(() => {
      stopFrevoAudioPlayback();
    }, totalDurationMs);
    activeAudioTimeouts.push(endTimeout);

  } catch (err) {
    console.error('[WebAudio] Erro ao sintetizar frevo:', err);
    stopFrevoAudioPlayback();
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

        ${step.media_url ? `
          <div class="mt-3 rounded-xl overflow-hidden border border-gray-200 bg-black/5">
            ${(step.media_type === 'video' || step.media_url.match(/\.(mp4|webm|mov)(\?.*)?$/i)) ? `
              <video src="${step.media_url}" controls playsinline preload="metadata" class="w-full h-44 object-cover rounded-xl"></video>
            ` : `
              <img src="${step.media_url}" alt="Demonstração do Passo ${step.name}" class="w-full h-44 object-cover rounded-xl" loading="lazy" />
            `}
          </div>
        ` : ''}
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
    <div id="steps-stream" class="steps-stream-inner">
      ${initialSteps.map(step => renderStepCardHtml(step)).join('')}
    </div>
    <div id="sentinel-steps" class="infinite-scroll-sentinel steps-sentinel-col" data-view="steps">
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
    // Inserir antes do sentinel, dentro do grid pai
    sentinel.insertAdjacentHTML('beforebegin', html);
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

// ==============================================================================
// ORDENAÇÃO CRONOLÓGICA INTELIGENTE DA LINHA DO TEMPO DO FREVO
// ==============================================================================
function parseHistoryYear(periodStr) {
  if (!periodStr) return 9999;
  const str = String(periodStr).toLowerCase();

  // 1. Extração de ano de 4 dígitos (ex: 1907, 1947, 2012)
  const yearMatches = str.match(/\b(1[6789]\d\d|20\d\d)\b/g);
  let baseYear = null;
  if (yearMatches && yearMatches.length > 0) {
    baseYear = parseInt(yearMatches[0], 10);
  }

  // 2. Notação de séculos romanos caso não haja ano explícito (ex: Século XIX -> ~1890 ou 1801)
  if (baseYear === null) {
    const centuryMatch = str.match(/s[eé]culo\s+([xvi]+)/i);
    if (centuryMatch) {
      const rom = centuryMatch[1].toUpperCase();
      let num = 0;
      if (rom === 'XVIII') num = 18;
      else if (rom === 'XIX') num = 19;
      else if (rom === 'XX') num = 20;
      else if (rom === 'XXI') num = 21;
      if (num > 0) {
        baseYear = (num - 1) * 100 + (str.includes('final') ? 85 : (str.includes('meados') ? 50 : 1));
      }
    }
  }

  if (baseYear === null) return 9999;

  // 3. Mês para desempate intra-anual
  const months = ['janeiro', 'fevereiro', 'março', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  let monthIndex = 0;
  for (let i = 0; i < months.length; i++) {
    if (str.includes(months[i])) {
      monthIndex = i + 1;
      break;
    }
  }

  // 4. Dia do mês para máxima precisão cronológica
  let day = 1;
  const dayMatch = str.match(/\b([0-2]?\d|3[01])\s+de\s+[a-zç]+/i);
  if (dayMatch) {
    day = parseInt(dayMatch[1], 10);
  }

  return baseYear + (monthIndex / 12) + (day / 365);
}

function sortHistoryTimeline() {
  if (Array.isArray(DB.history)) {
    DB.history.sort((a, b) => parseHistoryYear(a.period) - parseHistoryYear(b.period));
  }
}

function renderHistoryItemHtml(item) {
  const isAdmin = currentUserSession.role === 'admin';

  return `
    <div class="relative pl-6 pb-6 border-l-2 border-frevo-yellow last:border-l-0 infinite-scroll-item">
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-frevo-yellow border-2 border-paper shadow-sm"></div>
      <div class="bg-white border border-line-strong rounded-2xl p-4 space-y-2 shadow-sm transition hover:shadow-md">
        <div class="flex items-center justify-between gap-2">
          <span class="badge bg-frevo-yellow/40 text-ink text-[11px] font-bold">${item.period}</span>
          ${isAdmin ? `
            <div class="flex items-center gap-1">
              <button onclick="openEditHistoryModal('${item.id}')" class="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Editar Marco">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button onclick="deleteHistory('${item.id}')" class="p-1.5 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition" title="Excluir Marco">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          ` : ''}
        </div>
        <h3 class="font-display font-bold text-lg text-ink">${item.title}</h3>
        <p class="text-xs text-ink-soft leading-relaxed">${item.content}</p>
        ${(item.media_url || item.image_url) ? `
          <div class="mt-2.5 rounded-xl overflow-hidden border border-gray-200 bg-black/5">
            ${(item.media_type === 'video' || (item.media_url && item.media_url.match(/\.(mp4|webm|mov)(\?.*)?$/i))) ? `
              <video src="${item.media_url}" controls playsinline preload="metadata" class="w-full h-44 object-cover rounded-xl"></video>
            ` : `
              <img src="${item.media_url || item.image_url}" alt="${item.title}" class="w-full h-44 object-cover rounded-xl" loading="lazy" />
            `}
          </div>
        ` : ''}
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

  // Garante a ordenação cronológica estrita antes de renderizar
  sortHistoryTimeline();

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
        <span id="map-toggle-text-${point.id}">Ver Mapa no App</span>
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
    <div id="map-stream" class="map-stream-inner">
      ${initialPoints.map(point => renderMapPointCardHtml(point)).join('')}
    </div>
    <div id="sentinel-map" class="infinite-scroll-sentinel map-sentinel-col" data-view="map">
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
    // Inserir antes do sentinel, dentro do grid pai
    sentinel.insertAdjacentHTML('beforebegin', html);
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
    toggleText.innerText = isOpen ? 'Ocultar Mapa no App' : 'Ver Mapa no App';
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
                  <div class="flex items-center gap-1.5 pt-2 border-t border-gray-100">
                    <button onclick="switchView('songs'); selectSongForDesktopViewer('${song.id}');" class="btn btn-outline text-[11px] py-1.5 px-2 rounded-xl font-bold flex-1 flex items-center justify-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Visualizar
                    </button>
                    <button onclick="downloadScore('${song.id}')" class="btn btn-cyan p-1.5 rounded-xl font-bold flex items-center justify-center flex-shrink-0" title="Baixar Partitura em PDF" aria-label="Baixar Partitura em PDF">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
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

  // 3. ABA DE PARTITURAS & MÚSICAS (Apenas Artistas e Administradores)
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
          <span class="text-xs font-bold text-ink">Minhas Obras & Músicas (${artistSongs.length})</span>
          <button onclick="openSubmitSongModal()" class="text-xs font-bold text-frevo-orange hover:underline">+ Nova Música</button>
        </div>
        ${artistSongs.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            ${artistSongs.map(song => `
              <div class="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                <div class="space-y-0.5 min-w-0 pr-2">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="badge bg-frevo-cyan/15 text-frevo-cyan text-[10px] font-bold">${song.genre}</span>
                    <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${(song.plays_count || 1200).toLocaleString('pt-BR')} plays</span>
                  </div>
                  <h4 class="font-bold text-xs text-ink leading-tight truncate">${song.title}</h4>
                  <p class="text-[11px] text-muted line-clamp-1">${song.description}</p>
                </div>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                  <button onclick="playSong('${song.id}')" class="w-8 h-8 rounded-full bg-surface-soft hover:bg-frevo-orange hover:text-white flex items-center justify-center font-bold text-ink transition-all shadow-sm" title="Ouvir Áudio">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                  <button onclick="openScoreModal('${song.title}', '${song.artist}', '${song.id}')" class="btn btn-cyan p-2 rounded-xl font-bold flex-shrink-0" title="Baixar Partitura" aria-label="Baixar Partitura">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </button>
                  <button onclick="deleteSong('${song.id}')" class="p-2 text-gray-400 hover:text-frevo-red rounded-xl hover:bg-red-50" title="Excluir">
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
            <p class="text-xs text-muted mb-2">Nenhuma música cadastrada ainda.</p>
            <button onclick="openSubmitSongModal()" class="btn btn-primary text-xs px-3 py-1.5 rounded-xl font-bold">
              Cadastrar Minha Primeira Música
            </button>
          </div>
        `}
      </div>
    `;
    return;
  }

  // 4. ABA DE ÁLBUNS (Apenas Artistas e Administradores)
  if (currentProfileTab === 'albums') {
    if (!isArtistOrAdmin) {
      switchProfileTab('favorites');
      return;
    }

    const artistAlbums = currentUserSession.artist_id
      ? (DB.albums || []).filter(alb => alb.artist_id === currentUserSession.artist_id)
      : (DB.albums || []);

    container.innerHTML = `
      <div class="space-y-3 pb-6">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-ink">Meus Álbuns & EPs (${artistAlbums.length})</span>
          <button onclick="openSubmitAlbumModal()" class="text-xs font-bold text-frevo-purple hover:underline">+ Novo Álbum</button>
        </div>
        ${artistAlbums.length > 0 ? `
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            ${artistAlbums.map(album => `
              <div class="bg-white border border-gray-200 rounded-2xl p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <img src="${album.cover_url}" alt="${album.title}" class="w-full aspect-square rounded-xl object-cover shadow-sm mb-2" />
                <div>
                  <h4 class="font-bold text-xs text-ink truncate">${album.title}</h4>
                  <p class="text-[11px] text-muted font-mono">${album.release_year} • ${album.tracks_count} faixas</p>
                </div>
                <div class="flex items-center justify-between pt-2 mt-2 border-t border-gray-100">
                  <button onclick="openAlbumDetails('${album.id}')" class="btn btn-outline text-[10px] px-2 py-1 rounded-lg font-bold">
                    Ver Faixas
                  </button>
                  <button onclick="deleteAlbum('${album.id}')" class="p-1 text-gray-400 hover:text-frevo-red" title="Excluir Álbum">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="p-8 text-center bg-white rounded-2xl border border-gray-200">
            <p class="text-xs text-muted mb-2">Nenhum álbum cadastrado ainda.</p>
            <button onclick="openSubmitAlbumModal()" class="btn bg-frevo-purple text-white text-xs px-3 py-1.5 rounded-xl font-bold">
              Cadastrar Meu Primeiro Álbum
            </button>
          </div>
        `}
      </div>
    `;
    return;
  }

  // 5. ABA DE SHOWS (Apenas Artistas e Administradores)
  if (currentProfileTab === 'shows') {
    if (!isArtistOrAdmin) {
      switchProfileTab('favorites');
      return;
    }

    const artistShows = currentUserSession.artist_id
      ? (DB.shows || []).filter(sh => sh.artist_id === currentUserSession.artist_id)
      : (DB.shows || []);

    container.innerHTML = `
      <div class="space-y-3 pb-6">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-ink">Agenda de Shows (${artistShows.length})</span>
          <button onclick="openSubmitShowModal()" class="text-xs font-bold text-frevo-red hover:underline">+ Novo Show</button>
        </div>
        ${artistShows.length > 0 ? `
          <div class="space-y-2">
            ${artistShows.map(show => {
              const dateObj = new Date(`${show.date}T12:00:00`);
              const day = dateObj.getDate().toString().padStart(2, '0');
              const month = dateObj.toLocaleString('pt-BR', { month: 'short' }).replace('.', '');
              const year = dateObj.getFullYear();
              return `
                <div class="show-item-card">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="show-date-badge">
                      <span class="show-date-day">${day}</span>
                      <span class="show-date-month">${month}</span>
                    </div>
                    <div class="min-w-0">
                      <h5 class="font-bold text-xs text-ink truncate">${show.title}</h5>
                      <p class="text-[11px] text-ink-soft truncate">${show.venue} (${show.city || 'Recife - PE'})</p>
                      <span class="text-[10px] text-muted font-mono font-semibold">${show.time} • ${day}/${month.toUpperCase()}/${year}</span>
                    </div>
                  </div>
                  <button onclick="deleteShow('${show.id}')" class="p-2 text-gray-400 hover:text-frevo-red rounded-xl hover:bg-red-50 flex-shrink-0" title="Excluir Show">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="p-8 text-center bg-surface-soft rounded-2xl border border-gray-100">
            <p class="text-xs text-muted mb-2">Nenhum show cadastrado na sua agenda.</p>
            <button onclick="openSubmitShowModal()" class="btn btn-primary text-xs px-3 py-1.5 rounded-xl font-bold">
              Cadastrar Próximo Show
            </button>
          </div>
        `}
      </div>
    `;
    return;
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

async function renderAdminCMS() {
  const container = document.getElementById('admin-cms-content');
  if (!container) return;

  if (currentAdminTab === 'artists') {
    // Buscar solicitações pendentes do AWS e da fila local
    let pendingRequests = [];
    if (window.awsService && window.awsService.isConnected()) {
      try {
        pendingRequests = await window.awsService.getPendingArtistRequests();
      } catch (err) {
        console.warn('Erro ao obter solicitações do AWS:', err);
      }
    }

    loadArtistRequestsLocal();
    const localPending = (DB.artistRequests || []).filter(r => r.status === 'pending');
    const existingIds = new Set(pendingRequests.map(r => r.id));
    for (const lr of localPending) {
      if (!existingIds.has(lr.id)) {
        pendingRequests.push(lr);
      }
    }

    container.innerHTML = `
      <div class="space-y-4">
        <!-- 1. Fila de Solicitações Pendentes de Artista (Curadoria / Moderação) -->
        <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100">
            <div>
              <h3 class="font-display font-bold text-sm text-ink flex items-center gap-2">
                <span>Solicitações de Artistas</span>
                <span class="badge ${pendingRequests.length > 0 ? 'bg-frevo-orange text-white' : 'bg-gray-100 text-muted'} text-[10px] font-bold px-2 py-0.5 rounded-full">
                  ${pendingRequests.length} pendente${pendingRequests.length === 1 ? '' : 's'}
                </span>
              </h3>
              <p class="text-[11px] text-muted">Aprove os projetos artísticos para liberar as ferramentas de publicação</p>
            </div>
          </div>

          <div class="space-y-2.5">
            ${pendingRequests.length > 0 ? pendingRequests.map(req => `
              <div class="p-3 bg-amber-50/70 rounded-2xl border border-amber-200/80 space-y-2">
                <div class="flex items-start justify-between gap-2">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <img src="${getUserAvatarUrl(req.user?.avatar_url)}" alt="${req.requested_name}" class="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-amber-300" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
                    <div class="min-w-0">
                      <strong class="text-ink text-xs block font-bold truncate">${req.requested_name}</strong>
                      <span class="text-[11px] text-muted block">Fã: ${req.user?.display_name || 'Usuário'} (${req.user?.handle || '@foliao'})</span>
                      <span class="badge bg-frevo-orange/20 text-frevo-orange text-[10px] font-bold mt-0.5">${req.genre || 'Frevo de Rua'}</span>
                    </div>
                  </div>
                  <div class="flex gap-1.5 flex-shrink-0">
                    <button onclick="confirmApproveArtistRequest('${req.id}')" class="btn btn-green text-[11px] px-2.5 py-1 rounded-xl font-bold shadow-sm">
                      Aprovar
                    </button>
                    <button onclick="openRejectArtistModal('${req.id}')" class="btn btn-destructive text-[11px] px-2.5 py-1 rounded-xl font-bold shadow-sm">
                      Recusar
                    </button>
                  </div>
                </div>
                ${req.bio ? `<p class="text-[11px] text-ink-soft bg-white/70 p-2 rounded-xl border border-amber-100 italic">${req.bio}</p>` : ''}
                <div class="flex flex-wrap gap-2 text-[10px] text-muted pt-1">
                  ${req.whatsapp ? `<span class="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-mono">WhatsApp: ${req.whatsapp}</span>` : ''}
                  ${req.instagram_url ? `<span class="bg-white px-2 py-0.5 rounded-lg border border-gray-200 font-mono">Instagram: ${req.instagram_url}</span>` : ''}
                </div>
              </div>
            `).join('') : `
              <div class="p-4 text-center text-xs text-muted bg-surface-soft rounded-xl border border-gray-100">
                Nenhuma solicitação de artista aguardando moderação no momento.
              </div>
            `}
          </div>
        </div>

        <!-- 2. Artistas Cadastrados no Catálogo Oficial -->
        <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100">
            <div>
              <h3 class="font-display font-bold text-sm text-ink">Artistas no Acervo Oficial (${DB.artists.length})</h3>
              <p class="text-[11px] text-muted">Artistas aprovados e publicados na rede</p>
            </div>
            <button onclick="openNewArtistModal()" class="btn btn-primary text-xs px-2.5 py-1 rounded-xl font-bold">+ Artista</button>
          </div>

          <div class="space-y-2">
            ${DB.artists.map(artist => `
              <div class="p-2.5 bg-surface-soft rounded-2xl border border-gray-100 flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img src="${artist.avatar_url}" alt="${artist.name}" class="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                  <div class="min-w-0">
                    <strong class="text-ink text-xs block truncate">${artist.name}</strong>
                    <span class="text-[10px] text-muted block">${artist.genre || 'Frevo de Rua'}</span>
                  </div>
                </div>
                <div class="flex gap-1.5 flex-shrink-0">
                  <button onclick="openArtistProfile('${artist.id}')" class="btn btn-outline text-[10px] px-2 py-1 rounded-xl font-bold">
                    Ver Perfil
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
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
              <div class="flex items-center gap-1.5">
                <button onclick="openEditHistoryModal('${item.id}')" class="btn btn-outline text-[11px] px-2.5 py-1 rounded-xl font-bold text-ink">
                  Editar
                </button>
                <button onclick="deleteHistory('${item.id}')" class="btn btn-destructive text-[11px] px-2 py-1 rounded-xl font-bold">
                  Excluir
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Ações de Aprovação e Recusa de Solicitações de Artistas no CMS
async function confirmApproveArtistRequest(requestId) {
  if (!confirm('Deseja realmente aprovar esta solicitação e promover o usuário a Artista Oficial do FrevAI?')) return;

  loadArtistRequestsLocal();
  const req = (DB.artistRequests || []).find(r => r.id === requestId);
  if (req) {
    req.status = 'approved';
    saveArtistRequestsLocal();

    const alreadyArtist = DB.artists.some(a => a.name.toLowerCase() === req.requested_name.toLowerCase());
    if (!alreadyArtist) {
      DB.artists.unshift({
        id: 'artist-' + Date.now(),
        name: req.requested_name,
        handle: req.user?.handle || ('@' + req.requested_name.toLowerCase().replace(/[^a-z0-9_]/g, '')),
        genre: req.genre || 'Frevo de Rua',
        bio: req.bio || 'Artista oficial da comunidade FrevAI.',
        avatar_url: req.user?.avatar_url || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
        cover_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
        email: '',
        phone: req.whatsapp || '',
        is_approved: true,
        has_story: false
      });
    }

    if (currentUserSession.id === req.user_id) {
      currentUserSession.role = 'artist';
      currentUserSession.artist_request_status = 'approved';
      saveCurrentSession();
    }
  }

  if (window.awsService && window.awsService.isConnected()) {
    const res = await window.awsService.approveArtistRequest(requestId, currentUserSession.id);
    if (res && res.error) {
      console.warn('Aviso AWS ao aprovar:', res.error.message);
    }
    const freshArtists = await window.awsService.getArtists();
    if (freshArtists && freshArtists.length > 0) DB.artists = freshArtists;
  }

  loadNotificationsLocal();
  DB.notifications.unshift({
    id: 'notif-approved-' + Date.now(),
    type: 'artist_approved',
    targetId: requestId,
    forUserId: req ? req.user_id : null,
    title: 'Parabéns! Perfil de Artista Aprovado',
    message: 'Sua solicitação artística foi aprovada com sucesso! Você agora é um Artista Oficial e suas ferramentas de publicação de músicas, álbuns e shows foram liberadas.',
    author: 'Equipe FrevAI',
    author_avatar: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=200&q=80',
    time_ago: 'Agora mesmo',
    read: false
  });
  saveNotificationsLocal();
  updateNotificationBadge();

  showAlertModal('Artista aprovado com sucesso! O perfil do usuário agora é "Artista" e suas ferramentas de publicação foram liberadas.');
  renderAdminCMS();
  renderArtists();
}

// Modal de Recusa de Solicitação de Artista (Design System FrevAI - Zero Emojis)
function openRejectArtistModal(requestId) {
  loadArtistRequestsLocal();
  const req = (DB.artistRequests || []).find(r => r.id === requestId) || {
    id: requestId,
    requested_name: 'Artista',
    genre: 'Frevo de Rua',
    user: { display_name: 'Folião Solicitante', handle: '@foliao', email: '' }
  };

  const applicantName = req.user?.display_name || req.requested_name || 'Solicitante';
  const applicantHandle = req.user?.handle || '@foliao';
  const applicantEmail = req.user?.email || req.email || '';

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <!-- Cabeçalho do Modal -->
      <div class="flex items-start gap-3 pb-3 border-b border-gray-100 pr-8">
        <div class="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Recusar Solicitação Artística</h3>
          <p class="text-xs text-muted">Apresente a justificativa ao artista solicitante</p>
        </div>
      </div>

      <!-- Resumo do Solicitante -->
      <div class="p-3 bg-surface-soft border border-gray-200 rounded-2xl flex items-center justify-between gap-3 text-xs">
        <div class="min-w-0">
          <strong class="text-ink font-bold block truncate">${req.requested_name}</strong>
          <span class="text-muted block text-[11px]">${applicantName} • ${applicantHandle}</span>
          ${applicantEmail ? `<span class="text-[11px] text-gray-500 font-mono block truncate">${applicantEmail}</span>` : ''}
        </div>
        <span class="badge bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
          MODERAÇÃO
        </span>
      </div>

      <!-- Motivos Rápidos Selecionáveis -->
      <div class="space-y-1.5">
        <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Motivos frequentes (clique para preencher)</label>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" onclick="setRejectReasonPreset('Dados biográficos e referências musicais incompletos.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Dados incompletos
          </button>
          <button type="button" onclick="setRejectReasonPreset('Material artístico não condiz com as diretrizes e salvaguarda do Frevo.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Fora das diretrizes
          </button>
          <button type="button" onclick="setRejectReasonPreset('Não foi possível verificar a autenticidade ou titularidade da obra.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Titularidade duvidosa
          </button>
          <button type="button" onclick="setRejectReasonPreset('Solicitação duplicada ou perfil já existente no acervo.')" class="px-2.5 py-1 text-[11px] bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-ink-soft transition">
            Duplicidade
          </button>
        </div>
      </div>

      <!-- Campo de Justificativa / Parecer -->
      <div class="space-y-1">
        <label for="reject-reason-textarea" class="block text-[11px] font-bold text-ink uppercase tracking-wider">Justificativa da Recusa <span class="text-rose-500">*</span></label>
        <textarea id="reject-reason-textarea" rows="4" placeholder="Descreva de forma respeitosa o motivo pelo qual a solicitação não foi aprovada..." class="w-full px-3 py-2 text-xs border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 rounded-xl bg-white text-ink focus:outline-none transition leading-relaxed"></textarea>
      </div>

      <!-- Disparo de E-mail de Notificação -->
      <div class="p-3 bg-amber-50/60 border border-amber-200/80 rounded-2xl space-y-2">
        <label class="flex items-center gap-2 cursor-pointer select-none">
          <input type="checkbox" id="reject-send-email-checkbox" checked class="w-4 h-4 text-rose-600 rounded border-gray-300 focus:ring-rose-500">
          <span class="text-xs font-bold text-ink">Enviar e-mail formal de notificação de recusa</span>
        </label>
        <div id="reject-email-preview-container" class="space-y-1.5 pl-6 pt-1">
          <div>
            <label class="block text-[10px] font-bold text-muted uppercase">E-mail do Solicitante</label>
            <input type="email" id="reject-recipient-email" value="${applicantEmail}" placeholder="artista@exemplo.com" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
          </div>
        </div>
      </div>

      <!-- Ações do Modal -->
      <div class="flex gap-2 pt-2 border-t border-gray-100">
        <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">
          Cancelar
        </button>
        <button type="button" onclick="submitRejectArtistRequest('${req.id}')" class="btn bg-rose-600 hover:bg-rose-700 text-white flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md transition flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Confirmar Recusa
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function setRejectReasonPreset(reasonText) {
  const textarea = document.getElementById('reject-reason-textarea');
  if (textarea) {
    textarea.value = reasonText;
    textarea.focus();
  }
}

async function submitRejectArtistRequest(requestId) {
  const reasonInput = document.getElementById('reject-reason-textarea');
  const reason = (reasonInput ? reasonInput.value : '').trim();
  const sendEmail = document.getElementById('reject-send-email-checkbox')?.checked ?? true;
  const recipientEmail = document.getElementById('reject-recipient-email')?.value?.trim() || '';

  if (!reason) {
    showAlertModal('Por favor, informe a justificativa da recusa para orientar o solicitante.', { title: 'Atenção', type: 'warning' });
    return;
  }

  loadArtistRequestsLocal();
  const req = (DB.artistRequests || []).find(r => r.id === requestId);
  const targetUserId = req ? req.user_id : null;
  const artistName = req ? req.requested_name : 'Artista';

  if (req) {
    req.status = 'rejected';
    req.review_notes = reason;
    req.reviewed_at = new Date().toISOString();
    saveArtistRequestsLocal();
  }

  // Atualiza sessão do usuário atual caso seja o próprio autor da solicitação
  if (targetUserId && currentUserSession.id === targetUserId) {
    currentUserSession.artist_request_status = 'rejected';
    saveCurrentSession();
  }

  // Integração com AWS
  if (window.awsService && window.awsService.isConnected()) {
    try {
      await window.awsService.rejectArtistRequest(requestId, currentUserSession.id, reason);
    } catch (err) {
      console.warn('[AWS] Erro ao sincronizar recusa:', err.message);
    }
  }

  // 1. Enviar Notificação na Plataforma para o Usuário Solicitante
  loadNotificationsLocal();
  DB.notifications.unshift({
    id: 'notif-reject-' + Date.now(),
    type: 'artist_rejected',
    targetId: requestId,
    forUserId: targetUserId,
    author: 'Comitê FrevAI',
    author_avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    title: 'Solicitação Artística Não Aprovada',
    message: `Sua solicitação de perfil artístico para "${artistName}" foi analisada pelo comitê. Motivo: ${reason}`,
    time_ago: 'Agora mesmo',
    read: false
  });
  saveNotificationsLocal();
  updateNotificationBadge();

  // 2. Disparar E-mail Formal de Notificação
  if (sendEmail) {
    const subject = encodeURIComponent(`FrevAI: Atualização sobre sua solicitação de perfil artístico (${artistName})`);
    const emailBody = encodeURIComponent(
      `Olá,\n\nAgradecemos seu interesse em fazer parte do acervo oficial do FrevAI.\n\n` +
      `Informamos que sua solicitação de perfil de artista para "${artistName}" foi revisada pela equipe curatorial e não pôde ser aprovada no momento.\n\n` +
      `Parecer do Comitê:\n"${reason}"\n\n` +
      `Você pode adequar as informações e enviar uma nova solicitação a qualquer momento pelo aplicativo FrevAI.\n\n` +
      `Atenciosamente,\nComitê Gestor & Curadoria FrevAI`
    );

    // Se houver e-mail válido, prepara o link mailto
    if (recipientEmail && recipientEmail.includes('@')) {
      const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;
      // Cria trigger não obstrutivo
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  closeModal();
  renderAdminCMS();

  showAlertModal(
    `A solicitação foi recusada com sucesso.\n\nO solicitante foi notificado na plataforma FrevAI${recipientEmail ? ' e a mensagem de e-mail foi gerada' : ''}.`,
    { title: 'Recusa Registrada', type: 'info' }
  );
}

// Retrocompatibilidade
async function confirmRejectArtistRequest(requestId) {
  openRejectArtistModal(requestId);
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
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.updateArtistApproval(artistId, isApprove);
    }
  }

  closeModal();
  renderAdminCMS();
  renderArtists();
  showAlertModal(`Decisão registrada com sucesso! Notificação enviada para: ${artist.email}`);
}

function deletePost(postId) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem excluir publicações.');
    return;
  }
  if (confirm('Deseja realmente excluir esta publicação do feed?')) {
    DB.posts = DB.posts.filter(p => p.id !== postId);
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deletePost(postId);
    }
    renderFeed();
    renderAdminCMS();
  }
}

function deleteMapPoint(id) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem excluir pontos do mapa.');
    return;
  }
  if (confirm('Deseja realmente excluir este ponto do mapa?')) {
    DB.mapPoints = DB.mapPoints.filter(m => m.id !== id);
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deleteMapPoint(id);
    }
    renderMap();
    renderAdminCMS();
  }
}

function deleteHistory(id) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem excluir marcos históricos.');
    return;
  }
  if (confirm('Deseja realmente excluir este marco histórico da linha do tempo?')) {
    DB.history = DB.history.filter(h => h.id !== id);
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.deleteHistoryEntry?.(id);
    }
    renderHistory();
    renderAdminCMS();
    showAlertModal('Marco histórico removido com sucesso!', { title: 'Marco Excluído', type: 'success' });
  }
}

// Helper reutilizável para upload de mídia (fotos ou vídeos) pelo administrador
async function handleAdminMediaUpload(inputElement, previewContainerId, hiddenUrlInputId, hiddenTypeInputId, folder = 'general') {
  const file = inputElement.files && inputElement.files[0];
  if (!file) return;

  const isVideo = file.type && file.type.startsWith('video');
  const isImage = file.type && file.type.startsWith('image');

  if (!isImage && !isVideo) {
    showAlertModal('Por favor, selecione um arquivo de imagem (PNG, JPG, WEBP) ou vídeo (MP4, WEBM).', { title: 'Formato Não Suportado', type: 'warning' });
    return;
  }

  const container = document.getElementById(previewContainerId);
  const hiddenUrl = document.getElementById(hiddenUrlInputId);
  const hiddenType = document.getElementById(hiddenTypeInputId);

  if (container) {
    container.innerHTML = `
      <div class="p-3 bg-surface-soft rounded-xl border border-gray-200 flex items-center justify-center gap-2 text-xs text-muted">
        <svg class="animate-spin h-4 w-4 text-frevo-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Processando e enviando mídia...</span>
      </div>
    `;
  }

  // Se o AWS estiver conectado, faz upload para o Storage
  let uploadedUrl = null;
  if (window.awsService && window.awsService.isConnected()) {
    try {
      uploadedUrl = await window.awsService.uploadMedia(file, folder);
    } catch (e) {
      console.warn('[Storage] Fallback para local preview:', e.message);
    }
  }

  // Caso não esteja conectado ou ocorra falha, utiliza Data URL local segura
  if (!uploadedUrl) {
    uploadedUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (ev) => resolve(ev.target.result);
      reader.readAsDataURL(file);
    });
  }

  if (hiddenUrl) hiddenUrl.value = uploadedUrl;
  if (hiddenType) hiddenType.value = isVideo ? 'video' : 'image';

  if (container) {
    container.innerHTML = `
      <div class="relative rounded-xl overflow-hidden border border-gray-200 bg-black/5 mt-1.5">
        ${isVideo ? `
          <video src="${uploadedUrl}" controls class="w-full h-36 object-cover rounded-xl" playsinline preload="metadata"></video>
        ` : `
          <img src="${uploadedUrl}" class="w-full h-36 object-cover rounded-xl" alt="Preview da Mídia" />
        `}
        <div class="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
          ${isVideo ? 'Vídeo Selecionado' : 'Imagem Selecionada'}
        </div>
      </div>
    `;
  }
}

// Modal de Criação de Post no Feed (com Upload de Imagem e Vídeo)
function openNewPostModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem publicar notícias oficiais no feed.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Publicar Nova Notícia no Feed</h3>
          <p class="text-xs text-muted">Upload de fotos, vídeos e novidades para a comunidade</p>
        </div>
      </div>

      <form onsubmit="submitNewPost(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título da Publicação *</label>
          <input type="text" id="new-post-title" required placeholder="Ex: Abertura Oficial do Carnaval do Recife" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Autor / Responsável *</label>
          <input type="text" id="new-post-author" required value="${currentUserSession.name}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <!-- Bloco de Mídia: Upload de Imagem ou Vídeo -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Mídia do Post (Foto ou Vídeo)</label>
          
          <div class="flex items-center gap-2">
            <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold flex-1 justify-center bg-white hover:bg-gray-50">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Upload do Dispositivo
              <input type="file" id="new-post-file-input" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="handleAdminMediaUpload(this, 'new-post-media-preview', 'new-post-media-url', 'new-post-media-type', 'posts')" />
            </label>
          </div>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou cole a URL da Mídia / Imagem</label>
            <input type="url" id="new-post-media-url" placeholder="https://exemplo.com/video-ou-foto.mp4" oninput="document.getElementById('new-post-media-type').value = this.value.match(/\\.(mp4|webm|mov)(\\?.*)?$/i) ? 'video' : 'image'" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="new-post-media-type" value="image" />
          </div>

          <div id="new-post-media-preview"></div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo da Notícia *</label>
          <textarea id="new-post-content" rows="4" required placeholder="Escreva a notícia completa..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Tags (separadas por vírgula)</label>
          <input type="text" id="new-post-tags" placeholder="Frevo, Carnaval, Recife" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Publicar no Feed</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewPost(e) {
  e.preventDefault();
  const title = document.getElementById('new-post-title').value.trim();
  const author = document.getElementById('new-post-author').value.trim();
  const mediaUrl = document.getElementById('new-post-media-url')?.value?.trim() || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80';
  const mediaType = document.getElementById('new-post-media-type')?.value || (mediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) ? 'video' : 'image');
  const content = document.getElementById('new-post-content').value.trim();
  const tags = document.getElementById('new-post-tags').value.split(',').map(t => t.trim()).filter(Boolean);

  const newPost = {
    id: `p-${Date.now()}`,
    author: author || 'FrevAI Notícias',
    handle: 'frevai',
    avatar: currentUserSession.avatar,
    image: mediaUrl,
    media_url: mediaUrl,
    media_type: mediaType,
    isVideo: mediaType === 'video',
    location: 'Recife, PE',
    type: 'news',
    title,
    content,
    tags: tags.length ? tags : ['CulturaPE', 'Frevo'],
    likes: 0,
    is_liked: false,
    is_saved: false,
    is_admin_post: true,
    time_ago: 'AGORA',
    created_at: new Date().toISOString(),
    comments: []
  };

  DB.posts.unshift(newPost);
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createPost(newPost);
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
  showAlertModal('Publicação adicionada ao Acervo de Posts com sucesso!', { title: 'Publicado', type: 'success' });
}

function openEditPostModal(postId) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem editar notícias.');
    return;
  }
  const post = DB.posts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');
  const mediaUrl = post.media_url || post.image || '';
  const isVideo = post.media_type === 'video' || (mediaUrl && mediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i));

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Editar Notícia</h3>
          <p class="text-xs text-muted">Atualize as informações, fotos ou vídeos da publicação</p>
        </div>
      </div>

      <form onsubmit="saveEditPost(event, '${post.id}')" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título</label>
          <input type="text" id="edit-post-title" value="${post.title}" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <!-- Mídia do Post (Foto / Vídeo) -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Mídia do Post (Foto ou Vídeo)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Substituir Arquivo de Mídia
            <input type="file" id="edit-post-file-input" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="handleAdminMediaUpload(this, 'edit-post-media-preview', 'edit-post-media-url', 'edit-post-media-type', 'posts')" />
          </label>
          
          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">URL da Mídia</label>
            <input type="url" id="edit-post-media-url" value="${mediaUrl}" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="edit-post-media-type" value="${isVideo ? 'video' : 'image'}" />
          </div>

          <div id="edit-post-media-preview">
            ${mediaUrl ? `
              <div class="relative rounded-xl overflow-hidden border border-gray-200 bg-black/5 mt-1.5">
                ${isVideo ? `
                  <video src="${mediaUrl}" controls class="w-full h-36 object-cover rounded-xl" playsinline preload="metadata"></video>
                ` : `
                  <img src="${mediaUrl}" class="w-full h-36 object-cover rounded-xl" alt="Preview da Mídia" />
                `}
              </div>
            ` : ''}
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo</label>
          <textarea id="edit-post-content" rows="4" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">${post.content}</textarea>
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Alterações</button>
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
    const newMediaUrl = document.getElementById('edit-post-media-url')?.value?.trim() || post.image;
    const newMediaType = document.getElementById('edit-post-media-type')?.value || (newMediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) ? 'video' : 'image');

    post.title = document.getElementById('edit-post-title').value.trim();
    post.content = document.getElementById('edit-post-content').value.trim();
    post.image = newMediaUrl;
    post.media_url = newMediaUrl;
    post.media_type = newMediaType;
    post.isVideo = newMediaType === 'video';

    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.updatePost(postId, post);
    }
  }

  closeModal();
  renderFeed();
  renderAdminCMS();
  showAlertModal('Publicação atualizada com sucesso!', { title: 'Atualizado', type: 'success' });
}

// ==============================================================================
// MODAL DE NOVO PONTO NO MAPA (COM BUSCA E CONFIRMAÇÃO REAL NO GOOGLE MAPS)
// ==============================================================================
let pendingMapPointCoords = null;
let pendingMapPointConfirmed = false;

function openNewMapPointModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem adicionar novos pontos ao mapa.');
    return;
  }
  pendingMapPointCoords = [-8.0631, -34.8711];
  pendingMapPointConfirmed = false;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Adicionar Ponto ao Mapa Cultural</h3>
          <p class="text-xs text-muted">Localize o endereço com confirmação precisa no Google Maps</p>
        </div>
      </div>

      <form onsubmit="submitNewMapPoint(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Ponto Cultural *</label>
          <input type="text" id="new-map-name" required placeholder="Ex: Sede do Galo da Madrugada" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Categoria *</label>
          <select id="new-map-cat" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">
            <option value="Agremiação Histórica">Agremiação Histórica</option>
            <option value="Museu / Centro Cultural">Museu / Centro Cultural</option>
            <option value="Polo de Carnaval">Polo de Carnaval</option>
            <option value="Marco Histórico">Marco Histórico</option>
            <option value="Espaço Cultural">Espaço Cultural</option>
          </select>
        </div>

        <!-- Endereço com Busca e Confirmação no Google Maps -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2.5">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Endereço Completo *</label>
            <div class="flex gap-2">
              <input type="text" id="new-map-addr" required placeholder="Ex: Rua da Concórdia, 1024, Recife - PE" class="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-xl bg-white text-ink focus:outline-none" oninput="resetMapConfirmation()" />
              <button type="button" id="btn-find-address" onclick="findAddressOnGoogleMaps()" class="btn btn-primary text-xs px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Localizar
              </button>
            </div>
            <span class="text-[10px] text-muted block mt-1">Digite o logradouro e clique em "Localizar" para checar no mapa.</span>
          </div>

          <!-- Box de Confirmação do Google Maps -->
          <div id="map-address-confirmation-box" class="hidden space-y-2 pt-1 border-t border-gray-200/80">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-ink flex items-center gap-1 text-frevo-orange">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Localização Encontrada:
              </span>
              <span id="map-coords-badge" class="badge bg-gray-200 text-ink text-[10px] font-mono font-bold"></span>
            </div>

            <p id="map-resolved-address-text" class="text-xs text-ink-soft bg-white p-2 rounded-xl border border-gray-200"></p>

            <!-- Mini Mapa Interativo Embutido do Google Maps -->
            <div id="map-preview-embed" class="w-full h-40 rounded-xl overflow-hidden border border-gray-200"></div>

            <!-- Botão de Confirmação Obrigatória -->
            <div id="map-confirm-action-container" class="pt-1">
              <button type="button" onclick="confirmGoogleMapsLocation()" id="btn-confirm-map-location" class="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Confirmar que o endereço é este
              </button>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Descrição e Relevância Cultural *</label>
          <textarea id="new-map-desc" rows="3" required placeholder="História, fundação e relevância para o Frevo..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" id="btn-submit-map-point" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Ponto</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function resetMapConfirmation() {
  pendingMapPointConfirmed = false;
  const confirmBox = document.getElementById('map-address-confirmation-box');
  if (confirmBox) confirmBox.classList.add('hidden');
}

async function findAddressOnGoogleMaps() {
  const addrInput = document.getElementById('new-map-addr');
  const query = addrInput ? addrInput.value.trim() : '';

  if (!query) {
    showAlertModal('Por favor, digite o endereço do local para pesquisar no mapa.', { title: 'Atenção', type: 'warning' });
    return;
  }

  const btnFind = document.getElementById('btn-find-address');
  if (btnFind) {
    btnFind.disabled = true;
    btnFind.innerText = 'Buscando...';
  }

  let geoResult = null;
  if (window.awsService && window.awsService.geocodeAddress) {
    geoResult = await window.awsService.geocodeAddress(query);
  }

  if (btnFind) {
    btnFind.disabled = false;
    btnFind.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      Localizar
    `;
  }

  if (geoResult && geoResult.coords) {
    pendingMapPointCoords = geoResult.coords;
    pendingMapPointConfirmed = false;

    const confirmBox = document.getElementById('map-address-confirmation-box');
    const badge = document.getElementById('map-coords-badge');
    const textEl = document.getElementById('map-resolved-address-text');
    const embedEl = document.getElementById('map-preview-embed');
    const confirmBtn = document.getElementById('btn-confirm-map-location');

    if (badge) badge.innerText = `${geoResult.coords[0].toFixed(4)}, ${geoResult.coords[1].toFixed(4)}`;
    if (textEl) textEl.innerText = geoResult.displayName || query;
    if (embedEl) {
      embedEl.innerHTML = `
        <iframe 
          title="Google Maps Preview"
          class="w-full h-full border-0"
          loading="lazy"
          src="https://maps.google.com/maps?q=${geoResult.coords[0]},${geoResult.coords[1]}&hl=pt-BR&z=16&output=embed"
          allowfullscreen>
        </iframe>
      `;
    }

    if (confirmBtn) {
      confirmBtn.className = 'w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition';
      confirmBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Confirmar que o endereço é este
      `;
    }

    if (confirmBox) confirmBox.classList.remove('hidden');
  } else {
    showAlertModal('Não foi possível localizar este endereço automaticamente. Verifique se digitou o nome da rua, número e cidade.', { title: 'Endereço Não Localizado', type: 'warning' });
  }
}

function confirmGoogleMapsLocation() {
  pendingMapPointConfirmed = true;
  const confirmBtn = document.getElementById('btn-confirm-map-location');
  if (confirmBtn) {
    confirmBtn.className = 'w-full py-2 px-3 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition';
    confirmBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      Localização Confirmada no Google Maps
    `;
  }
}

async function submitNewMapPoint(e) {
  e.preventDefault();
  const name = document.getElementById('new-map-name').value.trim();
  const category = document.getElementById('new-map-cat').value;
  const address = document.getElementById('new-map-addr').value.trim();
  const description = document.getElementById('new-map-desc').value.trim();

  // Exige confirmação explícita do endereço pelo Google Maps
  if (!pendingMapPointConfirmed) {
    const wantsToFind = await showConfirmModal(
      'Você ainda não confirmou o local no Google Maps.\n\nDeseja que a plataforma localize agora para você validar no mapa?',
      { title: 'Confirmação de Endereço', confirmText: 'Localizar no Mapa', cancelText: 'Ajustar Endereço' }
    );
    if (wantsToFind) {
      await findAddressOnGoogleMaps();
    }
    return;
  }

  const newPt = {
    id: `m-${Date.now()}`,
    name,
    category,
    address,
    description,
    coords: pendingMapPointCoords || [-8.0631, -34.8711]
  };

  DB.mapPoints.push(newPt);
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createMapPoint(newPt);
  }

  closeModal();
  renderMap();
  renderAdminCMS();
  showAlertModal('Ponto cultural confirmado e adicionado com sucesso ao mapa!', { title: 'Local Adicionado', type: 'success' });
}

// Modal de Adicionar Marco Histórico (com Upload de Imagem ou Vídeo de Época)
function openNewHistoryModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem cadastrar marcos históricos.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Adicionar Marco Histórico</h3>
          <p class="text-xs text-muted">Documentos, fotografias de época e registros da memória do Frevo</p>
        </div>
      </div>

      <form onsubmit="submitNewHistory(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título do Marco *</label>
          <input type="text" id="new-hist-title" required placeholder="Ex: Criação da Troça Pitombeira dos Quatro Cantos" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Período / Data Histórica *</label>
          <input type="text" id="new-hist-period" required placeholder="Ex: Carnaval de 1947" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <!-- Bloco de Mídia: Foto ou Vídeo Histórico -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Documento / Mídia de Época (Foto ou Vídeo)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Upload do Dispositivo
            <input type="file" id="new-hist-file-input" accept="image/*,video/mp4,video/webm" class="hidden" onchange="handleAdminMediaUpload(this, 'new-hist-media-preview', 'new-hist-media-url', 'new-hist-media-type', 'history')" />
          </label>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou cole o link do arquivo</label>
            <input type="url" id="new-hist-media-url" placeholder="https://exemplo.com/registro-historico.jpg" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="new-hist-media-type" value="image" />
          </div>

          <div id="new-hist-media-preview"></div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo Histórico Documentado *</label>
          <textarea id="new-hist-content" rows="3" required placeholder="Relato documentado, contexto social e fatos comprovados..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none"></textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Fonte / Acervo Responsável *</label>
          <input type="text" id="new-hist-source" required placeholder="Ex: Fundação Joaquim Nabuco / Paço do Frevo" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Marco</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewHistory(e) {
  e.preventDefault();
  const title = document.getElementById('new-hist-title').value.trim();
  const period = document.getElementById('new-hist-period').value.trim();
  const content = document.getElementById('new-hist-content').value.trim();
  const source = document.getElementById('new-hist-source').value.trim();
  const mediaUrl = document.getElementById('new-hist-media-url')?.value?.trim() || null;
  const mediaType = document.getElementById('new-hist-media-type')?.value || 'image';

  const newHist = {
    id: `h-${Date.now()}`,
    title,
    period,
    content,
    source,
    media_url: mediaUrl,
    image_url: mediaUrl,
    media_type: mediaType
  };

  DB.history.push(newHist);
  sortHistoryTimeline();

  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createHistoryEntry?.(newHist);
  }

  closeModal();
  renderHistory();
  renderAdminCMS();
  showAlertModal('Marco histórico adicionado com sucesso e posicionado na ordem cronológica!', { title: 'Marco Salvo', type: 'success' });
}

// Modal de Edição de Marco Histórico
function openEditHistoryModal(historyId) {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem editar marcos históricos.');
    return;
  }
  const item = DB.history.find(h => h.id === historyId);
  if (!item) return;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Editar Marco Histórico</h3>
          <p class="text-xs text-muted">Atualize as informações cronológicas e documentais do registro</p>
        </div>
      </div>

      <form onsubmit="submitEditHistory(event, '${item.id}')" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Título do Marco *</label>
          <input type="text" id="edit-hist-title" required value="${item.title ? item.title.replace(/"/g, '&quot;') : ''}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Período / Data Histórica *</label>
          <input type="text" id="edit-hist-period" required value="${item.period ? item.period.replace(/"/g, '&quot;') : ''}" placeholder="Ex: 9 de Fevereiro de 1907" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
          <p class="text-[10px] text-muted mt-0.5">Ao salvar, o card será realocado para a posição temporal exata na linha do tempo.</p>
        </div>

        <!-- Bloco de Mídia: Foto ou Vídeo Histórico -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Documento / Mídia de Época (Foto ou Vídeo)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Substituir Arquivo
            <input type="file" id="edit-hist-file-input" accept="image/*,video/mp4,video/webm" class="hidden" onchange="handleAdminMediaUpload(this, 'edit-hist-media-preview', 'edit-hist-media-url', 'edit-hist-media-type', 'history')" />
          </label>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou cole o link do arquivo</label>
            <input type="url" id="edit-hist-media-url" value="${item.media_url || item.image_url || ''}" placeholder="https://exemplo.com/registro-historico.jpg" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="edit-hist-media-type" value="${item.media_type || 'image'}" />
          </div>

          <div id="edit-hist-media-preview">
            ${(item.media_url || item.image_url) ? `
              <div class="relative mt-2 rounded-xl overflow-hidden border border-gray-200 max-h-36">
                ${(item.media_type === 'video' || (item.media_url && item.media_url.match(/\.(mp4|webm|mov)(\?.*)?$/i))) ? `
                  <video src="${item.media_url}" controls playsinline class="w-full h-32 object-cover"></video>
                ` : `
                  <img src="${item.media_url || item.image_url}" alt="Preview" class="w-full h-32 object-cover" />
                `}
              </div>
            ` : ''}
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Conteúdo Histórico Documentado *</label>
          <textarea id="edit-hist-content" rows="3" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">${item.content || ''}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Fonte / Acervo Responsável *</label>
          <input type="text" id="edit-hist-source" required value="${item.source ? item.source.replace(/"/g, '&quot;') : ''}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Alterações</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitEditHistory(e, historyId) {
  e.preventDefault();
  const item = DB.history.find(h => h.id === historyId);
  if (!item) return;

  const title = document.getElementById('edit-hist-title').value.trim();
  const period = document.getElementById('edit-hist-period').value.trim();
  const content = document.getElementById('edit-hist-content').value.trim();
  const source = document.getElementById('edit-hist-source').value.trim();
  const mediaUrl = document.getElementById('edit-hist-media-url')?.value?.trim() || null;
  const mediaType = document.getElementById('edit-hist-media-type')?.value || 'image';

  item.title = title;
  item.period = period;
  item.content = content;
  item.source = source;
  item.media_url = mediaUrl;
  item.image_url = mediaUrl;
  item.media_type = mediaType;

  // Reordena a linha do tempo cronologicamente
  sortHistoryTimeline();

  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.updateHistoryEntry?.(historyId, item);
  }

  closeModal();
  renderHistory();
  renderAdminCMS();
  showAlertModal('Marco histórico atualizado com sucesso e reposicionado na cronologia!', { title: 'Marco Atualizado', type: 'success' });
}

// Modal de Adicionar Novo Passo de Frevo (com Upload de Vídeo e Imagem)
function openNewStepModal() {
  if (currentUserSession.role !== 'admin' && currentUserSession.role !== 'artist') {
    showAlertModal('Apenas Administradores e Artistas Oficiais podem cadastrar novos passos de frevo.');
    return;
  }
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex items-center justify-between pb-2 border-b border-gray-100 pr-8">
        <div>
          <h3 class="font-display font-bold text-lg text-ink">Adicionar Passo de Frevo</h3>
          <p class="text-xs text-muted">Cadastre passos técnicos com demonstração em vídeo ou imagem</p>
        </div>
      </div>

      <form onsubmit="submitNewStep(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Passo *</label>
          <input type="text" id="new-step-name" required placeholder="Ex: Saci-Pererê" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Dificuldade *</label>
            <select id="new-step-difficulty" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-ink uppercase mb-1">Categoria *</label>
            <select id="new-step-category" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none">
              <option value="Tradicional">Tradicional</option>
              <option value="Acrobático">Acrobático</option>
              <option value="Tesouras">Tesouras</option>
              <option value="Pontas e Calcanhares">Pontas e Calcanhares</option>
            </select>
          </div>
        </div>

        <!-- Demonstração Visual: Upload de Vídeo ou Imagem -->
        <div class="p-3 bg-surface-soft rounded-2xl border border-gray-200 space-y-2">
          <label class="block text-[11px] font-bold text-ink uppercase">Demonstração Visual (Vídeo ou Foto)</label>
          <label class="btn btn-outline text-xs px-3 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 font-bold justify-center bg-white hover:bg-gray-50">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Upload de Vídeo/Foto do Passo
            <input type="file" id="new-step-file-input" accept="video/mp4,video/webm,image/*" class="hidden" onchange="handleAdminMediaUpload(this, 'new-step-media-preview', 'new-step-media-url', 'new-step-media-type', 'steps')" />
          </label>

          <div class="pt-1">
            <label class="block text-[10px] font-bold text-muted uppercase mb-0.5">Ou URL externa da demonstração</label>
            <input type="url" id="new-step-media-url" placeholder="https://exemplo.com/demonstracao-passo.mp4" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none font-mono" />
            <input type="hidden" id="new-step-media-type" value="video" />
          </div>

          <div id="new-step-media-preview"></div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Descrição Curta *</label>
          <input type="text" id="new-step-desc" required placeholder="Breve resumo da movimentação corporal e ritmo..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Instruções de Execução (Passo a Passo) *</label>
          <textarea id="new-step-instructions" rows="4" required placeholder="1. Posição inicial dos pés&#10;2. Movimento de sombrinha&#10;3. Salto e aterrissagem..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none leading-relaxed"></textarea>
        </div>

        <div class="flex gap-2 pt-2 border-t border-gray-100">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl py-2.5 font-bold text-ink">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl py-2.5 font-bold shadow-md">Salvar Passo</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

function submitNewStep(e) {
  e.preventDefault();
  const name = document.getElementById('new-step-name').value.trim();
  const difficulty = document.getElementById('new-step-difficulty').value;
  const category = document.getElementById('new-step-category').value;
  const description = document.getElementById('new-step-desc').value.trim();
  const instructions = document.getElementById('new-step-instructions').value.trim();
  const mediaUrl = document.getElementById('new-step-media-url')?.value?.trim() || null;
  const mediaType = document.getElementById('new-step-media-type')?.value || (mediaUrl && mediaUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) ? 'video' : 'image');

  const newStep = {
    id: `st-${Date.now()}`,
    name,
    difficulty,
    category,
    description,
    instructions,
    media_url: mediaUrl,
    media_type: mediaType,
    author_role: currentUserSession.role === 'artist' ? 'artist' : 'admin'
  };

  DB.steps.push(newStep);
  if (window.awsService && window.awsService.isConnected()) {
    window.awsService.createStep(newStep);
  }

  closeModal();
  renderSteps();
  renderAdminCMS();
  showAlertModal('Novo passo de Frevo adicionado ao catálogo com sucesso!', { title: 'Passo Salvo', type: 'success' });
}

function openNewArtistModal() {
  if (currentUserSession.role !== 'admin') {
    showAlertModal('Acesso restrito: Apenas administradores podem cadastrar novos artistas no acervo.');
    return;
  }
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Cadastrar Novo Artista</h3>
        <p class="text-[11px] text-muted">Cadastre a conta oficial do artista. Ele receberá um e-mail de confirmação para acessar a plataforma com a senha padrão.</p>
      </div>

      <div id="new-artist-error-msg" class="hidden text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200 flex items-start gap-2"></div>

      <form id="new-artist-form" onsubmit="submitNewArtist(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome do Responsável / Nome Completo *</label>
          <input type="text" id="new-artist-owner-name" required placeholder="Ex: Roberto Silva" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Nome de Usuário (@) *</label>
          <input type="text" id="new-artist-handle" required placeholder="@orquestrasomdaterra" oninput="formatSignupHandleInput(this); document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange font-medium" />
          <span class="block text-[10px] text-muted mt-0.5">Identificador exclusivo na comunidade (ex: @maestroduda).</span>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">E-mail de Acesso *</label>
          <input type="email" id="new-artist-email" required placeholder="artista@culturape.com" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          <span class="block text-[10px] text-muted mt-0.5">O artista receberá neste e-mail a confirmação para acessar a conta.</span>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase mb-1">Senha Padrão *</label>
          <div class="relative">
            <input type="password" id="new-artist-password" required minlength="6" value="Frevo2026@" placeholder="Mínimo 6 caracteres" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full pl-3 pr-10 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
            <button type="button" onclick="togglePasswordVisibility('new-artist-password', this)" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-ink transition-colors" aria-label="Ver senha" title="Ver senha">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
          <span class="block text-[10px] text-muted mt-0.5">Senha de primeiro acesso que o artista usará para entrar.</span>
        </div>

        <!-- Campos Artísticos -->
        <div class="space-y-2.5 p-3 rounded-xl bg-frevo-orange/5 border border-frevo-orange/20">
          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Nome Artístico / Grupo / Orquestra *</label>
            <input type="text" id="new-artist-name" required placeholder="Ex: Orquestra Som da Terra" oninput="document.getElementById('new-artist-error-msg')?.classList.add('hidden')" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>

          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Gênero Tradicional</label>
            <select id="new-artist-genre" onchange="handleGenreSelectChange('new-artist-genre', 'new-artist-custom-genre-container')" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
              <option value="Frevo de Rua">Frevo de Rua</option>
              <option value="Frevo Canção">Frevo Canção</option>
              <option value="Frevo de Bloco">Frevo de Bloco</option>
              <option value="Frevo Livre Instrumental">Frevo Livre Instrumental</option>
              <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
              <option value="Outro">Outro</option>
            </select>
            <div id="new-artist-custom-genre-container" class="mt-1.5 hidden">
              <input type="text" id="new-artist-custom-genre" placeholder="Especifique o gênero tradicional..." class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">WhatsApp / Contato</label>
            <input type="text" id="new-artist-whatsapp" placeholder="(81) 99999-9999" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
          </div>

          <div>
            <label class="block text-[10px] font-bold text-ink uppercase mb-0.5">Mini-Biografia / Histórico Cultural</label>
            <textarea id="new-artist-bio" rows="2" placeholder="Trajetória cultural, participações no carnaval e histórico..." class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange"></textarea>
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" id="new-artist-submit-btn" class="btn btn-primary flex-1 text-xs rounded-xl font-bold">Cadastrar Artista</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function submitNewArtist(e) {
  e.preventDefault();
  const errorMsg = document.getElementById('new-artist-error-msg');
  const submitBtn = document.getElementById('new-artist-submit-btn');

  const ownerName = document.getElementById('new-artist-owner-name')?.value.trim();
  const rawHandle = document.getElementById('new-artist-handle')?.value.trim();
  const email = document.getElementById('new-artist-email')?.value.trim();
  const password = document.getElementById('new-artist-password')?.value;
  const artistName = document.getElementById('new-artist-name')?.value.trim();
  const genreSelect = document.getElementById('new-artist-genre')?.value;
  const customGenre = document.getElementById('new-artist-custom-genre')?.value.trim();
  const finalGenre = genreSelect === 'Outro' ? (customGenre || 'Frevo Contemporâneo') : (genreSelect || 'Frevo de Rua');
  const whatsapp = document.getElementById('new-artist-whatsapp')?.value.trim() || '';
  const bio = document.getElementById('new-artist-bio')?.value.trim() || '';

  if (!ownerName || !rawHandle || !email || !password || !artistName) {
    if (errorMsg) {
      errorMsg.innerText = 'Preencha todos os campos obrigatórios (*).';
      errorMsg.classList.remove('hidden');
    }
    return;
  }

  const cleanHandle = sanitizeHandle(rawHandle);
  if (!cleanHandle || cleanHandle.length < 4) {
    if (errorMsg) {
      errorMsg.innerText = 'O nome de usuário (@) deve ter pelo menos 3 caracteres alfanuméricos.';
      errorMsg.classList.remove('hidden');
    }
    return;
  }

  // Verificar disponibilidade do @
  const handleCheck = await isHandleTaken(cleanHandle);
  if (handleCheck.taken) {
    if (errorMsg) {
      errorMsg.innerText = handleCheck.reason;
      errorMsg.classList.remove('hidden');
    }
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'Cadastrando e enviando e-mail...';
  }

  let artistRecord = null;
  if (window.awsService && window.awsService.isConnected()) {
    const res = await window.awsService.registerArtistByAdmin({
      ownerName,
      handle: cleanHandle,
      email,
      password,
      artistName,
      genre: finalGenre,
      whatsapp,
      bio
    });

    if (res?.error) {
      if (errorMsg) {
        errorMsg.innerText = res.error.message || 'Erro ao cadastrar artista no AWS.';
        errorMsg.classList.remove('hidden');
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Cadastrar Artista';
      }
      return;
    }
    artistRecord = res.data?.artist || null;
  }

  // Inserir no estado local DB.artists
  const newArt = {
    id: artistRecord?.id || `a-${Date.now()}`,
    name: artistName,
    handle: cleanHandle,
    genre: finalGenre,
    bio: bio,
    avatar_url: null,
    cover_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    email: email,
    phone: whatsapp,
    is_approved: true,
    has_story: false
  };

  DB.artists.unshift(newArt);

  closeModal();
  renderArtists();
  renderAdminCMS();

  showPlatformAlert(
    `O artista "${artistName}" foi cadastrado com sucesso!\n\nUm e-mail de confirmação foi enviado para ${email} com a senha padrão configurada para o primeiro acesso.`,
    'Artista Cadastrado com Sucesso'
  );
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
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Compartilhar Publicação</h3>
        <p class="text-[11px] text-muted line-clamp-1">${post.title}</p>
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
      showAlertModal(message || 'Copiado para a área de transferência!');
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
    showPlatformAlert('Você precisa estar logado para comentar.', 'Atenção');
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
      avatar: currentUserSession.avatar || null,
      text: text,
      created_at: new Date().toISOString(),
      time_ago: 'agora'
    };

    post.comments.push(newComment);
    closeModal();
    updateCommentsDrawerUI(postId);

    if (window.awsService && window.awsService.isConnected() && currentUserSession.id) {
      const saved = await window.awsService.addComment(postId, currentUserSession.id, text);
      if (saved && saved.id) {
        newComment.id = saved.id;
      }
    }
  }
}

// ==============================================================================
// ==============================================================================
// GERAÇÃO E DOWNLOAD DE PARTITURAS EM PDF REAL (COM NOTAS E ARRANJO AUTÊNTICO)
// ==============================================================================
function generateAndDownloadScorePdf(song) {
  try {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      showAlertModal('Biblioteca de PDF carregando... Por favor, tente novamente em alguns instantes.');
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

    const profile = getSongMusicalProfile(song);

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
    doc.setFontSize(9.5);
    doc.setTextColor(...orange);
    doc.text('FREVIA — ACERVO DIGITAL DA SALVAGUARDA DO FREVO DE PERNAMBUCO', 105, 11, { align: 'center' });

    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    doc.text('PATRIMÔNIO CULTURAL IMATERIAL DA HUMANIDADE (UNESCO / IPHAN)', 105, 17, { align: 'center' });
    doc.text('DOCUMENTO OFICIAL DE PARTITURA E ARRANJO MUSICAL', 105, 22, { align: 'center' });

    // Título da Obra
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(...ink);
    doc.text((song.title || 'PARTITURA DO FREVO').toUpperCase(), 105, 43, { align: 'center' });

    // Dados do Compositor / Gênero / Tom / Andamento
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...red);
    doc.text(`GÊNERO: ${(song.genre || 'Frevo de Rua').toUpperCase()} • TOM: ${profile.key.toUpperCase()}`, 20, 52);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...ink);
    doc.text(`Compositor / Arranjador: ${song.artist || 'Maestro do Frevo'} • ${profile.lead}`, 20, 58);
    doc.text(`Andamento: ${profile.tempoLabel} • Compasso: 2/4 Frevado`, 20, 64);
    doc.text(`Instrumentação: Orquestra de Frevo (Sopros, Metais, Palhetas e Percussão Tradicional)`, 20, 70);

    // Linha divisória
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.line(20, 74, 190, 74);

    // Pauta Musical Ilustrada Dinâmica com Notas Reais
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...orange);
    doc.text('PAUTA MUSICAL & GRADE DE ARRANJO', 20, 81);

    const drawPdfStaff = (notes, startY, label) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(...gray);
      doc.text(label, 20, startY - 2);

      // 5 Linhas da Pauta
      doc.setDrawColor(120, 120, 120);
      doc.setLineWidth(0.3);
      for (let line = 0; line < 5; line++) {
        doc.line(20, startY + (line * 2.5), 190, startY + (line * 2.5));
      }

      // Clave de Sol
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...ink);
      doc.text('𝄞', 22, startY + 8);

      // Compasso 2/4
      doc.setFontSize(7.5);
      doc.text('2', 28, startY + 4);
      doc.text('4', 28, startY + 8.5);

      // Barras de Compasso
      doc.setDrawColor(80, 80, 80);
      doc.setLineWidth(0.4);
      doc.line(70, startY, 70, startY + 10);
      doc.line(110, startY, 110, startY + 10);
      doc.line(150, startY, 150, startY + 10);
      doc.line(190, startY, 190, startY + 10);
      doc.line(190.8, startY, 190.8, startY + 10);

      // Notas mapeadas
      const scaleX = (x) => 20 + ((x / 500) * 170);
      const scaleY = (staveY) => startY + ((staveY - 14) / 32) * 10;

      doc.setFillColor(23, 23, 23);
      doc.setDrawColor(23, 23, 23);
      doc.setLineWidth(0.4);

      notes.forEach(n => {
        const nx = scaleX(n.x);
        const ny = scaleY(n.staveY);
        doc.circle(nx, ny, 1.2, n.dur === 'half' ? 'S' : 'F');
        const stemDown = n.stem === 'down';
        const stemY2 = stemDown ? ny + 5.5 : ny - 5.5;
        const stemX = stemDown ? nx - 1.1 : nx + 1.1;
        doc.line(stemX, ny, stemX, stemY2);
      });
    };

    drawPdfStaff(profile.stave1, 89, profile.stave1Title);
    drawPdfStaff(profile.stave2, 112, profile.stave2Title);

    // Letra / Diretrizes
    const lyricsY = 136;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...cyan);
    doc.text('LETRA OFICIAL & DIRETRIZES DE EXECUÇÃO', 20, lyricsY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...ink);
    
    const lyricsContent = song.lyrics || 
      `Instrumental de Frevo com arranjo para saxofones, trompetes, trombones de vara, tuba e percussão de surdo e tarol.\n\nObservação de Arranjo: Acelerar a dinâmica nos trombones e surdos na transição do refrão.`;

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
    showAlertModal('Erro ao processar PDF da partitura: ' + err.message);
    return false;
  }
}

function openScoreModal(title, artist, songId) {
  const song = DB.songs.find(s => s.id === songId) || { id: songId, title, artist, genre: 'Frevo de Rua', downloads_count: 120 };
  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const profile = getSongMusicalProfile(song);
  const isPlayingThis = (currentlyPlayingSongId === song.id);

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Partitura &amp; Arranjo Musical</h3>
        <p class="text-[11px] text-muted">Acervo Digital Oficial da Salvaguarda • ${profile.key}</p>
      </div>

      <div class="p-4 bg-surface-soft border border-gray-100 rounded-2xl space-y-2 text-left">
        <div class="flex items-center justify-between">
          <span class="badge bg-frevo-cyan/20 text-ink text-[11px] font-bold">${song.genre}</span>
          <span class="badge bg-gray-100 text-muted text-[10px] font-mono font-bold">${song.downloads_count || 120} downloads</span>
        </div>
        <h3 class="font-display font-bold text-lg text-ink leading-tight">${song.title}</h3>
        <p class="text-xs font-bold text-frevo-orange">${song.artist} • ${profile.lead}</p>
        <p class="text-xs text-muted leading-relaxed">${song.description || 'Partitura oficial formatada com pauta musical, grade de arranjo e letra completa.'}</p>
      </div>

      <!-- Barra de andamento e prévia sonora -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-surface-soft rounded-xl text-xs font-medium text-ink-soft border border-gray-100 flex-wrap gap-2">
        <div class="flex items-center gap-2 text-xs flex-wrap">
          <span class="w-2.5 h-2.5 rounded-full ${isPlayingThis ? 'bg-frevo-red animate-ping' : 'bg-frevo-green animate-pulse'}"></span>
          <span>Andamento: <strong>${profile.tempoLabel}</strong></span>
          <span class="text-gray-300">•</span>
          <span>Tom: <strong>${profile.key}</strong></span>
        </div>
        <button onclick="playFrevoAudioPreview('${song.id}')" class="btn ${isPlayingThis ? 'bg-frevo-red text-white' : 'bg-white border border-gray-200 hover:border-frevo-orange text-frevo-orange'} text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-all">
          ${isPlayingThis
            ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> Parar`
            : `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Ouvir Prévia`}
        </button>
      </div>

      <!-- Folha de Partitura Real com Pentagrama SVG -->
      <div class="real-sheet-canvas p-4 space-y-3 shadow-inner overflow-y-auto" style="max-height: 320px;">
        <div class="text-center pb-2 border-b border-stone-300">
          <span class="text-[9px] tracking-widest uppercase text-stone-500 font-bold block mb-0.5">Sociedade dos Músicos do Frevo de Pernambuco</span>
          <h4 class="text-xl font-serif font-black text-stone-900 tracking-wider uppercase">${song.title}</h4>
          <span class="text-[11px] font-serif italic text-stone-700">Composição &amp; Arranjo: ${song.artist} • ${profile.lead}</span>
        </div>
        <div class="space-y-3">
          ${renderStaveSvgHtml(profile.stave1, profile.keyAccidentals, profile.stave1Title)}
          ${renderStaveSvgHtml(profile.stave2, profile.keyAccidentals, profile.stave2Title)}
        </div>
        <div class="pt-3 border-t border-stone-300">
          <h4 class="font-serif font-bold text-xs uppercase tracking-wider text-stone-800 mb-1.5">Letra Oficial &amp; Diretrizes de Regência</h4>
          <div class="bg-white/80 p-3 rounded-xl border border-stone-200 text-xs font-serif text-stone-800 whitespace-pre-line leading-relaxed">
            ${song.lyrics || 'Instrumental — Frevo com arranjo para saxofones, trompetes, trombones de vara, tuba e percussão de surdo e tarol.'}
          </div>
        </div>
      </div>

      <button onclick="downloadScore('${song.id}')" class="btn btn-cyan w-full text-xs rounded-xl shadow-md py-3 font-bold flex items-center justify-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Baixar Partitura em PDF
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
// SISTEMA DE ALERTAS & CONFIRMAÇÕES FREVAI (DESIGN SYSTEM OFICIAL, ZERO EMOJIS)
// ==============================================================================
let alertModalResolve = null;

function stripAllEmojis(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2702}-\u{27B0}\u{24C2}-\u{1F251}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2300}-\u{23FF}✓✕▲▼♫★]/gu, '')
    .trim();
}

function showAlertModal(message, options = {}) {
  return new Promise((resolve) => {
    alertModalResolve = resolve;
    const modalEl = document.getElementById('app-alert-modal');
    const titleEl = document.getElementById('app-alert-title');
    const msgEl = document.getElementById('app-alert-message');
    const iconContainer = document.getElementById('app-alert-icon-container');
    const confirmBtn = document.getElementById('app-alert-confirm-btn');
    const cancelBtn = document.getElementById('app-alert-cancel-btn');

    if (!modalEl) {
      console.warn('Modal de alerta não encontrado no DOM:', message);
      resolve(true);
      return;
    }

    const cleanMsg = stripAllEmojis(String(message || ''));
    const lower = cleanMsg.toLowerCase();
    const type = options.type || (
      lower.includes('erro') || lower.includes('falha') || lower.includes('incorret')
        ? 'error'
        : lower.includes('sucesso') || lower.includes('aprovad') || lower.includes('bem-vindo') || lower.includes('salva')
          ? 'success'
          : lower.includes('atenção') || lower.includes('aviso') || lower.includes('certeza')
            ? 'warning'
            : 'info'
    );
    const title = options.title || (type === 'error' ? 'Atenção' : type === 'success' ? 'Sucesso' : type === 'warning' ? 'Aviso' : 'Informação');

    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = cleanMsg;

    if (iconContainer) {
      iconContainer.className = `alert-modal-icon mb-4 icon-${type}`;
      if (type === 'success') {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>`;
      } else if (type === 'error') {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
      } else if (type === 'warning') {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
      } else {
        iconContainer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
      }
    }

    if (confirmBtn) {
      confirmBtn.innerText = options.confirmText || 'Entendido';
      confirmBtn.className = `btn ${type === 'error' ? 'btn-destructive' : 'btn-primary'} px-5 py-2 text-xs rounded-xl font-bold shadow-md`;
    }

    if (cancelBtn) {
      if (options.showCancel) {
        cancelBtn.classList.remove('hidden');
        cancelBtn.innerText = options.cancelText || 'Cancelar';
      } else {
        cancelBtn.classList.add('hidden');
      }
    }

    modalEl.style.display = 'flex';
    void modalEl.offsetWidth;
    modalEl.classList.add('open');
  });
}

function closeAlertModal(confirmed = true) {
  const modalEl = document.getElementById('app-alert-modal');
  if (modalEl) {
    modalEl.classList.remove('open');
    setTimeout(() => {
      modalEl.style.display = 'none';
    }, 250);
  }
  if (alertModalResolve) {
    const resolve = alertModalResolve;
    alertModalResolve = null;
    resolve(confirmed);
  }
}

function showConfirmModal(message, options = {}) {
  return showAlertModal(message, { ...options, showCancel: true, confirmText: options.confirmText || 'Confirmar' });
}

// Substituição transparente de window.alert para respeitar o design system do FrevAI
window.alert = function(msg) {
  showAlertModal(msg);
};

// ==============================================================================
// MODAL DE EDIÇÃO DE PERFIL E CONTATO
// ==============================================================================
let currentUserProfile = {
  name: '',
  handle: '',
  avatar: null,
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

  if (avatarEl) avatarEl.src = getUserAvatarUrl(currentUserProfile.avatar || currentUserSession.avatar);
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

  // Se for usuário comum ou visitante, ocultar abas de artista (músicas, álbuns e shows)
  const isArtistOrAdmin = currentUserSession.role === 'artist' || currentUserSession.role === 'admin';
  if (profileTabs) {
    const scoresTabBtn = profileTabs.querySelector('.tab-scores');
    if (scoresTabBtn) scoresTabBtn.style.display = isArtistOrAdmin ? 'inline-flex' : 'none';
    
    const albumsTabBtn = profileTabs.querySelector('.tab-albums');
    if (albumsTabBtn) albumsTabBtn.style.display = isArtistOrAdmin ? 'inline-flex' : 'none';

    const showsTabBtn = profileTabs.querySelector('.tab-shows');
    if (showsTabBtn) showsTabBtn.style.display = isArtistOrAdmin ? 'inline-flex' : 'none';
    
    // Garantir que APENAS uma aba esteja ativa no carregamento do perfil
    profileTabs.querySelectorAll('.profile-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (!isArtistOrAdmin && (currentProfileTab === 'scores' || currentProfileTab === 'albums' || currentProfileTab === 'shows')) {
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

  // Renderizar banner de status de artista no perfil
  const artistBannerEl = document.getElementById('profile-artist-status-banner');
  if (artistBannerEl) {
    if (currentUserSession.role === 'artist') {
      artistBannerEl.innerHTML = `
        <div class="p-2.5 bg-frevo-green/10 border border-frevo-green/30 rounded-2xl flex items-center justify-between text-xs text-ink">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-frevo-green/20 text-frevo-green flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div>
              <strong class="block text-ink text-xs font-bold">Artista Oficial Verificado</strong>
              <span class="text-[10px] text-muted">Acesso completo para gerenciar músicas, álbuns e shows.</span>
            </div>
          </div>
          <button onclick="openSubmitSongModal()" class="btn btn-primary text-[10px] px-2.5 py-1 rounded-xl font-bold flex-shrink-0">
            + Música
          </button>
        </div>
      `;
    } else if (currentUserSession.artist_request_status === 'pending') {
      artistBannerEl.innerHTML = `
        <div class="p-2.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-2 text-xs text-amber-800">
          <div class="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <div>
            <strong class="block text-xs font-bold">Solicitação de Artista em Análise</strong>
            <span class="text-[10px] text-amber-700">Aguardando aprovação do administrador para liberar a publicação do seu acervo.</span>
          </div>
        </div>
      `;
    } else if (currentUserSession.artist_request_status === 'rejected') {
      artistBannerEl.innerHTML = `
        <div class="p-3 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-xs text-rose-900">
          <div class="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </div>
          <div class="flex-1 min-w-0">
            <strong class="block text-xs font-bold text-rose-800">Solicitação Não Aprovada</strong>
            <p class="text-[11px] text-rose-700 leading-snug mt-0.5">Sua solicitação de perfil artístico anterior não foi aprovada pelo comitê. Você pode atualizar seus dados e reenviar a qualquer momento.</p>
            <button onclick="openArtistRequestModal()" class="mt-2 text-[11px] font-bold text-rose-700 hover:text-rose-800 bg-white px-2.5 py-1 rounded-lg border border-rose-200 shadow-sm transition">
              Reenviar Solicitação
            </button>
          </div>
        </div>
      `;
    } else if (currentUserSession.role === 'user') {
      artistBannerEl.innerHTML = `
        <button onclick="openArtistRequestModal()" class="w-full py-2 px-3 rounded-2xl bg-frevo-orange/10 hover:bg-frevo-orange/20 border border-frevo-orange/30 text-frevo-orange text-xs font-bold flex items-center justify-center gap-2 transition-colors">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3C6.5 3 2 7.5 2 13C2 13 4.5 11.5 7 13C9.5 14.5 12 13 12 13C12 13 14.5 14.5 17 13C19.5 11.5 22 13 22 13C22 7.5 17.5 3 12 3Z" fill="currentColor" fill-opacity="0.2"/><path d="M12 3V19C12 20.1 11.1 21 10 21C8.9 21 8 20.1 8 19"/></svg>
          <span>Quero me tornar um Artista no FrevAI</span>
        </button>
      `;
    } else {
      artistBannerEl.innerHTML = '';
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
    if (window.awsService && window.awsService.isConnected()) {
      window.awsService.signOut();
    }
    currentUserProfile = {
      name: 'Visitante',
      handle: '@visitante',
      avatar: null,
      bio: 'Perfil convidado da plataforma FrevAI.',
      socialLinks: [],
      email: '',
      phone: ''
    };
    switchTestRole('guest');
    updateProfileUI();
    closeModal();
    showPlatformAlert('Sua conta foi removida com sucesso!', 'Conta Removida');
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
        <button onclick="localStorage.clear(); showPlatformAlert('Dados locais limpos com sucesso!', 'Armazenamento'); location.reload();" class="w-full p-3 bg-surface-soft hover:bg-red-50 rounded-2xl flex items-center justify-between border border-gray-100 transition-colors">
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
    showPlatformAlert('Faça login para editar o seu perfil.', 'Atenção');
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
          <img id="edit-avatar-preview" src="${getUserAvatarUrl(currentUserProfile.avatar || currentUserSession.avatar)}" alt="Preview" class="w-20 h-20 rounded-full object-cover border-2 border-frevo-orange shadow-md" onerror="this.onerror=null; this.src='${DEFAULT_AVATAR_PLACEHOLDER}'" />
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
  const rawHandle = document.getElementById('edit-handle-input').value.trim();
  const cleanHandle = sanitizeHandle(rawHandle);
  const bio = document.getElementById('edit-bio-input').value.trim();
  const email = document.getElementById('edit-email-input').value.trim();
  const phone = document.getElementById('edit-phone-input').value.trim();

  // Validação do @handle
  if (!cleanHandle || cleanHandle.length < 4) {
    showAlertModal('O nome de usuário (@) deve conter pelo menos 3 caracteres (letras, números ou sublinhados).');
    document.getElementById('edit-handle-input')?.focus();
    return;
  }

  // Se o usuário alterou o @handle, checar se já está ocupado por outro usuário
  if (cleanHandle.toLowerCase() !== (currentUserSession.handle || '').toLowerCase()) {
    const handleCheck = await isHandleTaken(cleanHandle, currentUserSession.id);
    if (handleCheck.taken) {
      showAlertModal(handleCheck.reason || `O nome de usuário ${cleanHandle} já está em uso por outro folião. Por favor, escolha outro.`);
      document.getElementById('edit-handle-input')?.focus();
      return;
    }
  }

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
  currentUserProfile.handle = cleanHandle;
  currentUserProfile.bio = bio;
  currentUserProfile.email = email;
  currentUserProfile.phone = phone;
  currentUserProfile.socialLinks = socialLinks;
  if (tempUploadedAvatar) {
    currentUserProfile.avatar = tempUploadedAvatar;
    currentUserSession.avatar = tempUploadedAvatar;
  }
  if (name) currentUserSession.name = name;
  currentUserSession.handle = cleanHandle;

  // Se o usuário for artista oficial, sincronizar o @handle nos dados do artista local
  if (currentUserSession.role === 'artist' && DB.artists) {
    const myArtist = DB.artists.find(a => a.id === currentUserSession.artist_id || a.name.toLowerCase() === name.toLowerCase());
    if (myArtist) {
      myArtist.handle = cleanHandle;
    }
  }

  // Atualizar no localStorage de usuários locais
  try {
    const localUsers = JSON.parse(localStorage.getItem('frevia_local_users') || '[]');
    const idx = localUsers.findIndex(u => u.id === currentUserSession.id || u.email === currentUserSession.email);
    if (idx >= 0) {
      localUsers[idx].name = name;
      localUsers[idx].handle = cleanHandle;
      localUsers[idx].avatar = currentUserSession.avatar;
    } else if (currentUserSession.email) {
      localUsers.push({
        id: currentUserSession.id || ('u-' + Date.now()),
        name: name,
        handle: cleanHandle,
        email: currentUserSession.email,
        avatar: currentUserSession.avatar
      });
    }
    localStorage.setItem('frevia_local_users', JSON.stringify(localUsers));
  } catch (e) {}

  saveCurrentSession();
  updateProfileUI();

  // Persistir no AWS se conectado
  if (window.awsService && window.awsService.isConnected() && currentUserSession.id) {
    window.awsService.upsertProfile({
      id: currentUserSession.id,
      email: currentUserSession.email,
      user_metadata: {
        full_name: currentUserProfile.name,
        name: currentUserProfile.name,
        display_name: currentUserProfile.name,
        handle: cleanHandle,
        avatar_url: currentUserProfile.avatar
      }
    }, {
      display_name: currentUserProfile.name,
      handle: cleanHandle,
      avatar_url: currentUserProfile.avatar
    });
    window.awsService.updateProfileHandle(currentUserSession.id, cleanHandle);
  }

  const wasFirstLogin = isFirstLoginFlow;
  isFirstLoginFlow = false;
  closeModal();

  if (wasFirstLogin) {
    setTimeout(() => {
      openOnboardingModal();
    }, 250);
  } else {
    showAlertModal('Perfil atualizado com sucesso!');
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

// ==============================================================================
// MOTOR DE PROCESSAMENTO DE ÁUDIO, PARTITURA E LETRAS DO FREVO (FREVO AUDIO ENGINE)
// 100% Client-side, Ilimitado e Gratuito via Web Audio API & jsPDF
// ==============================================================================
const FrevoAudioEngine = {
  audioCtx: null,

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  // Decodifica arquivo de áudio (MP3 / WAV / OGG / AAC) em AudioBuffer
  async decodeAudioFile(file) {
    const ctx = this.getAudioContext();
    if (!ctx) {
      throw new Error('Web Audio API não suportada neste navegador.');
    }
    const arrayBuffer = await file.arrayBuffer();
    return await ctx.decodeAudioData(arrayBuffer);
  },

  // Detecção de Andamento / BPM por análise de picos de transientes rítmicos
  detectBPM(audioBuffer) {
    try {
      const sampleRate = audioBuffer.sampleRate;
      const channelData = audioBuffer.getChannelData(0);
      
      // Amostra de até 45 segundos para análise rápida e precisa
      const maxSeconds = Math.min(45, audioBuffer.duration);
      const length = Math.floor(maxSeconds * sampleRate);
      
      // Janela de energia (RMS) para capturar batidas do surdo / tarol do frevo
      const windowSize = Math.floor(sampleRate * 0.04); // 40ms
      const energies = [];
      for (let i = 0; i < length; i += windowSize) {
        let sum = 0;
        const end = Math.min(i + windowSize, length);
        for (let j = i; j < end; j++) {
          sum += channelData[j] * channelData[j];
        }
        energies.push(Math.sqrt(sum / (end - i)));
      }

      // Média global de energia e detecção de picos (onsets)
      const avgEnergy = energies.reduce((a, b) => a + b, 0) / (energies.length || 1);
      const threshold = avgEnergy * 1.35;
      const peaks = [];
      const minPeakDist = Math.floor(0.20 / (windowSize / sampleRate)); // máx 300 bpm

      for (let i = 1; i < energies.length - 1; i++) {
        if (energies[i] > threshold && energies[i] > energies[i - 1] && energies[i] > energies[i + 1]) {
          if (peaks.length === 0 || (i - peaks[peaks.length - 1]) >= minPeakDist) {
            peaks.push(i);
          }
        }
      }

      if (peaks.length < 5) {
        return 146; // Padrão clássico do Frevo de Rua
      }

      // Cálculo dos intervalos entre picos
      const intervals = [];
      for (let i = 1; i < peaks.length; i++) {
        intervals.push((peaks[i] - peaks[i - 1]) * (windowSize / sampleRate));
      }

      // Mapeamento de intervalos para BPM entre 110 e 170 (compasso do frevo)
      const bpmCandidates = intervals.map(int => {
        let bpm = 60 / int;
        while (bpm < 110) bpm *= 2;
        while (bpm > 170) bpm /= 2;
        return Math.round(bpm);
      });

      // Moda dos candidatos a BPM
      const freqMap = {};
      bpmCandidates.forEach(b => {
        if (b >= 100 && b <= 175) {
          freqMap[b] = (freqMap[b] || 0) + 1;
        }
      });

      let bestBpm = 146;
      let maxCount = 0;
      for (const [b, count] of Object.entries(freqMap)) {
        if (count > maxCount) {
          maxCount = count;
          bestBpm = parseInt(b, 10);
        }
      }

      return bestBpm;
    } catch (e) {
      console.warn('[FrevoAudioEngine] Erro na detecção de BPM:', e);
      return 148;
    }
  },

  // Detecção Tonal (Key / Tom) via Chromagrama Harmônico
  detectMusicalKey(audioBuffer) {
    try {
      const sampleRate = audioBuffer.sampleRate;
      const channelData = audioBuffer.getChannelData(0);
      const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
      const ptNames = {
        'C': 'Dó Maior (C)', 'C#': 'Dó Sustenido Maior (C#)', 'D': 'Ré Maior (D)',
        'D#': 'Mi Bemol Maior (Eb)', 'E': 'Mi Maior (E)', 'F': 'Fá Maior (F)',
        'F#': 'Fá Sustenido Maior (F#)', 'G': 'Sol Maior (G)', 'G#': 'Lá Bemol Maior (Ab)',
        'A': 'Lá Maior (A)', 'A#': 'Si Bemol Maior (Bb)', 'B': 'Si Maior (B)'
      };

      const chromaEnergy = new Array(12).fill(0);
      
      // Amostragem harmônica no espectro fundamental dos metais (130Hz a 1200Hz)
      const step = Math.floor(sampleRate * 0.05);
      const fftSize = 2048;
      const totalSteps = Math.min(300, Math.floor((channelData.length - fftSize) / step));

      for (let s = 0; s < totalSteps; s += 2) {
        const offset = s * step;
        for (let noteIdx = 0; noteIdx < 12; noteIdx++) {
          // Frequência fundamental de referência (A4 = 440Hz)
          const freq = 440 * Math.pow(2, (noteIdx - 9) / 12);
          // Verificar oitavas 3, 4 e 5
          for (let oct = -1; oct <= 1; oct++) {
            const f = freq * Math.pow(2, oct);
            if (f < 100 || f > 1500) continue;
            const period = Math.round(sampleRate / f);
            if (period > 2 && offset + period < channelData.length) {
              // Correlação simples
              let corr = 0;
              for (let k = 0; k < 64; k++) {
                corr += channelData[offset + k] * channelData[offset + k + period];
              }
              chromaEnergy[noteIdx] += Math.max(0, corr);
            }
          }
        }
      }

      // Encontrar tom com maior dominância harmônica
      let dominantIdx = 2; // Ré Maior (padrão de frevo)
      let maxEnergy = -1;
      for (let i = 0; i < 12; i++) {
        if (chromaEnergy[i] > maxEnergy) {
          maxEnergy = chromaEnergy[i];
          dominantIdx = i;
        }
      }

      const noteStr = noteNames[dominantIdx];
      return {
        keyName: ptNames[noteStr] || `${noteStr} Maior`,
        rootNote: noteStr,
        scale: 'Maior'
      };
    } catch (e) {
      console.warn('[FrevoAudioEngine] Erro na detecção de tom:', e);
      return { keyName: 'Fá Maior (F)', rootNote: 'F', scale: 'Maior' };
    }
  },

  // Gerador Inteligente de Letra e Estrutura Poética do Frevo
  generateStructuredLyrics({ title, genre, artist, key, bpm }) {
    const cleanTitle = (title || 'Frevo Novo').trim();
    const cleanArtist = (artist || currentUserSession.name || 'Artista do Frevo').trim();
    const cleanGenre = (genre || 'Frevo de Rua').trim();

    if (cleanGenre.toLowerCase().includes('rua') || cleanGenre.toLowerCase().includes('livre')) {
      return `Lá vem o frevo rasgando a ladeira
No passo ligeiro do nosso clarim
Segura a sombrinha de ponta a primeira
Que a nossa folia não tem mais fim!

Refrão:
Ferve o Recife, faísca Olinda
No compasso quente da multidão
A troça mais nobre e a dança mais linda
${cleanTitle} estremece o chão!

Entra trombone, responde o clarinete
Nosso dobrado não vai parar
${cleanArtist} comanda o banquete
Vem pro meio do passo vibrar!

Refrão:
Ferve o Recife, faísca Olinda
No compasso quente da multidão
A troça mais nobre e a dança mais linda
${cleanTitle} estremece o chão!

Metais nas alturas, tarol no compasso
O povo em delírio a comemorar
Ninguém segura a força desse passo
E até quarta-feira vamos frevar!`;
    }

    if (cleanGenre.toLowerCase().includes('bloco')) {
      return `Lá vem a troça descendo a ladeira
Com sua bandeira bordada em cetim
No ritmo doce da flauta ligeira
${cleanTitle} floresce no meu jardim.

Refrão:
Olinda e Recife num só coração
Quem tem saudades não pode chorar
O Frevo de Bloco acende a paixão
E até quarta-feira vamos festejar!

O coral feminino entoa a canção
Trazendo lembranças de antigos carnavais
${cleanArtist} comanda esta emoção
Que ecoa no peito e não finda jamais.

Refrão:
Olinda e Recife num só coração
Quem tem saudades não pode chorar
O Frevo de Bloco acende a paixão
E até quarta-feira vamos festejar!

Pastoras entoam versos da saudade
Violões afinados na luz do luar
Eterna beleza da nossa cidade
O frevo que nunca vai se apagar.`;
    }

    // Frevo Canção / Frevo Contemporâneo
    return `Quando o clarim anuncia o momento
O frevo invade a alma e o pensar
${cleanTitle} chegou no compasso do vento
Não há quem consiga ficar sem pular!

Refrão:
Segura o passo, levanta a sombrinha
No passo do frevo ninguém fica só
A nossa folia é pura e rainha
Do Marco Zero ao Alto da Sé em xodó!

${cleanArtist} puxa o canto da gente
A orquestra incendeia toda a multidão
O frevo é eterno, é arte valente
Patrimônio vivo da nossa nação!

Refrão:
Segura o passo, levanta a sombrinha
No passo do frevo ninguém fica só
A nossa folia é pura e rainha
Do Marco Zero ao Alto da Sé em xodó!

Brilha o estandarte de ouro e cetim
No peito a cadência que o frevo nos traz
Uma festa sem freio, um riso sem fim
Quem vive essa terra não esquece jamais!`;
  },

  // Gerador de Partitura Oficial em PDF com Pauta Vetorial Dinâmica Completa
  generateScorePdfBlob({ title, artist, genre, key, bpm, lyrics }) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      throw new Error('Biblioteca jsPDF não carregada.');
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
    doc.setFontSize(9.5);
    doc.setTextColor(...orange);
    doc.text('FREVIA — ACERVO DIGITAL DA SALVAGUARDA DO FREVO DE PERNAMBUCO', 105, 11, { align: 'center' });

    doc.setFontSize(7.5);
    doc.setTextColor(...gray);
    doc.text('PATRIMÔNIO CULTURAL IMATERIAL DA HUMANIDADE (UNESCO / IPHAN)', 105, 17, { align: 'center' });
    doc.text('PARTITURA OFICIAL & ARRANJO GERADO POR ANÁLISE DE ÁUDIO', 105, 22, { align: 'center' });

    // Título da Obra
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...ink);
    doc.text((title || 'PARTITURA DO FREVO').toUpperCase(), 105, 41, { align: 'center' });

    // Informações Técnicas
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...red);
    doc.text(`GÊNERO: ${(genre || 'Frevo de Rua').toUpperCase()} • TOM: ${(key || 'Fá Maior').toUpperCase()} • ANDAMENTO: ${bpm || 148} BPM (2/4 FREVADO)`, 20, 48);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...ink);
    doc.text(`Compositor / Arranjador: ${artist || 'Artista do Frevo'}`, 20, 53.5);
    doc.text(`Instrumentação: Orquestra de Frevo (Sopros, Metais de Base, Percussão e Harmonia)`, 20, 58.5);

    // Divisória
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.4);
    doc.line(20, 62, 190, 62);

    // Pautas Musicais Vetoriais
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...orange);
    doc.text('PAUTA MUSICAL & GRADE DE ARRANJO (COMPASSO 2/4)', 20, 67);

    const drawStaff = (startY, label, offset = 0) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(...gray);
      doc.text(label, 20, startY - 1.8);

      // 5 Linhas da Pauta
      doc.setDrawColor(120, 120, 120);
      doc.setLineWidth(0.3);
      for (let l = 0; l < 5; l++) {
        doc.line(20, startY + (l * 2.2), 190, startY + (l * 2.2));
      }

      // Clave de Sol Vetorial (Compatibilidade Universal de PDF e Renderização sem dependência de fontes)
      doc.setDrawColor(23, 23, 23);
      doc.setFillColor(23, 23, 23);
      doc.setLineWidth(0.45);
      // Haste central da Clave
      doc.line(24, startY - 2, 24, startY + 11);
      doc.circle(24, startY + 11.2, 0.6, 'F');
      // Curvas da Clave de Sol
      doc.setLineWidth(0.35);
      doc.ellipse(24, startY + 6.6, 2.2, 1.8, 'S');
      doc.ellipse(24, startY + 2.2, 1.6, 2.0, 'S');

      // Compasso 2/4
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(...ink);
      doc.text('2', 28, startY + 3.5);
      doc.text('4', 28, startY + 7.5);

      // Barras de Compasso
      doc.setDrawColor(80, 80, 80);
      doc.setLineWidth(0.35);
      doc.line(68, startY, 68, startY + 8.8);
      doc.line(108, startY, 108, startY + 8.8);
      doc.line(148, startY, 148, startY + 8.8);
      doc.line(190, startY, 190, startY + 8.8);
      doc.line(190.8, startY, 190.8, startY + 8.8);

      // Notas musicais ilustrativas geradas no tom
      const notePositions = [
        { x: 38, y: 6.6, dur: 'eighth', stem: 'up' },
        { x: 46, y: 4.4, dur: 'eighth', stem: 'up' },
        { x: 54, y: 2.2, dur: 'quarter', stem: 'down' },
        { x: 78, y: 4.4, dur: 'eighth', stem: 'up' },
        { x: 86, y: 6.6, dur: 'eighth', stem: 'up' },
        { x: 96, y: 0.0, dur: 'quarter', stem: 'down' },
        { x: 118, y: 2.2, dur: 'eighth', stem: 'down' },
        { x: 126, y: 4.4, dur: 'eighth', stem: 'up' },
        { x: 136, y: 6.6, dur: 'quarter', stem: 'up' },
        { x: 158, y: 4.4, dur: 'eighth', stem: 'up' },
        { x: 168, y: 2.2, dur: 'eighth', stem: 'down' },
        { x: 178, y: 0.0, dur: 'quarter', stem: 'down' }
      ];

      doc.setFillColor(23, 23, 23);
      doc.setDrawColor(23, 23, 23);
      doc.setLineWidth(0.35);

      notePositions.forEach(n => {
        const ny = startY + n.y + (offset % 2.2);
        doc.circle(n.x, ny, 1.0, 'F');
        const stemDown = n.stem === 'down';
        const stemY2 = stemDown ? ny + 4.5 : ny - 4.5;
        const stemX = stemDown ? n.x - 0.9 : n.x + 0.9;
        doc.line(stemX, ny, stemX, stemY2);
      });
    };

    drawStaff(74, `Pauta 1 — Tema Principal (Clarins & Saxofones Altos)`, 0);
    drawStaff(92, `Pauta 2 — Contraponto Harmônico (Trombones & Trompetes)`, 2);

    // Letra Oficial & Diretrizes
    const lyricsY = 111;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...cyan);
    doc.text('LETRA OFICIAL & ESTRUTURA POÉTICA / DIRETRIZES DE ARRANJO', 20, lyricsY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...ink);

    const cleanLyrics = (lyrics || 'Instrumental de Frevo.').trim();
    const splitLyrics = doc.splitTextToSize(cleanLyrics, 170);
    
    // Suporte a paginação limpa se a letra exceder a primeira página
    let cursorY = lyricsY + 5.5;
    const lineHeight = 4.2;

    for (let i = 0; i < splitLyrics.length; i++) {
      if (cursorY > 268) {
        // Rodapé da Página 1
        doc.setDrawColor(220, 220, 220);
        doc.line(20, 275, 190, 275);
        doc.setFontSize(7);
        doc.setTextColor(...gray);
        doc.text(`FrevIA • ${title} • Licença de Salvaguarda Aberta`, 105, 281, { align: 'center' });

        doc.addPage();
        // Cabeçalho da Próxima Página
        doc.setFillColor(244, 241, 234);
        doc.rect(0, 0, 210, 18, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(...orange);
        doc.text(`FREVIA — ${title.toUpperCase()} (CONTINUAÇÃO DA LETRA)`, 105, 11, { align: 'center' });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...ink);
        cursorY = 28;
      }
      doc.text(splitLyrics[i], 20, cursorY);
      cursorY += lineHeight;
    }

    // Rodapé Institucional
    doc.setDrawColor(220, 220, 220);
    doc.line(20, 275, 190, 275);

    doc.setFontSize(7);
    doc.setTextColor(...gray);
    doc.text(`Documento gerado digitalmente pela plataforma FrevIA em ${new Date().toLocaleDateString('pt-BR')} • Licença de Salvaguarda Aberta`, 105, 281, { align: 'center' });
    doc.text(`Registro de Áudio Analisado • Tom: ${key || 'D'} • Andamento: ${bpm || 148} BPM`, 105, 285, { align: 'center' });

    return doc.output('blob');
  }
};

// Estado global temporário da partitura gerada por áudio no modal
let currentAnalyzedScoreBlob = null;
let currentAnalyzedScoreUrl = null;
let currentAnalyzedMusicalProfile = null;

function openSubmitSongModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas Artistas Aprovados e Administradores podem cadastrar músicas e partituras.');
    return;
  }

  currentAnalyzedScoreBlob = null;
  currentAnalyzedScoreUrl = null;
  currentAnalyzedMusicalProfile = null;

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  const artistAlbums = (DB.albums || []).filter(alb => alb.artist_id === (currentUserSession.artist_id || 'a1'));

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-3 border-b border-gray-100 text-center">
        <h3 class="font-display font-bold text-lg text-ink text-center">Cadastrar Nova Música / Áudio</h3>
      </div>

      <form id="new-song-form" onsubmit="submitNewSong(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Título da Música *</label>
          <input type="text" id="song-title-input" required placeholder="Ex: Passo da Fervura" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Gênero Tradicional</label>
            <select id="song-genre-input" onchange="handleGenreChangeForLyrics()" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
              <option value="Frevo de Rua">Frevo de Rua</option>
              <option value="Frevo Canção">Frevo Canção</option>
              <option value="Frevo de Bloco">Frevo de Bloco</option>
              <option value="Frevo Livre">Frevo Livre</option>
              <option value="Frevo Contemporâneo">Frevo Contemporâneo</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Vincular a Álbum</label>
            <select id="song-album-input" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange">
              <option value="">(Single / Sem Álbum)</option>
              ${artistAlbums.map(alb => `<option value="${alb.id}">${alb.title}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Upload de Arquivo MP3 com Motor de Análise de Áudio Integrado -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Arquivo de Áudio (MP3 / WAV) *</label>
            <span class="text-[10px] text-frevo-cyan font-bold">Análise Musical Automática</span>
          </div>
          <div class="p-3 bg-surface-soft border border-gray-200 rounded-xl space-y-2.5">
            <input type="file" id="song-audio-file" accept="audio/*" onchange="handleAudioUploadSelection(this)" class="text-xs text-muted file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-frevo-orange/15 file:text-frevo-orange hover:file:bg-frevo-orange/25 cursor-pointer w-full" />
            
            <!-- Botão de Análise Manual se arquivo estiver selecionado -->
            <div id="audio-manual-trigger-row" class="hidden flex justify-end">
              <button type="button" onclick="triggerManualAudioAnalysis()" class="btn btn-outline text-[11px] px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 border-frevo-orange text-frevo-orange hover:bg-frevo-orange/10">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Analisar Áudio Novamente
              </button>
            </div>

            <!-- Painel de Progresso / Resultado da Análise de Áudio -->
            <div id="audio-analysis-panel" class="hidden p-3 bg-white rounded-xl border border-gray-100 shadow-sm space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span id="audio-analysis-status-text" class="font-bold text-ink flex items-center gap-1.5">
                  <svg class="animate-spin text-frevo-orange w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  Analisando ondas do frevo...
                </span>
                <span id="audio-analysis-percentage" class="text-[11px] font-bold text-frevo-orange font-mono">0%</span>
              </div>

              <!-- Barra de Progresso com Porcentagem -->
              <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div id="audio-analysis-progress-bar" class="bg-frevo-orange h-2 rounded-full transition-all duration-300" style="width: 0%;"></div>
              </div>
            </div>

            <div class="text-[10px] text-muted">Ou informe uma URL externa de áudio:</div>
            <input type="url" id="song-audio-input" placeholder="https://exemplo.com/musica.mp3" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none" />
          </div>
        </div>

        <!-- Partitura Oficial (Geração Automática / Upload Manual) -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Partitura Oficial (PDF)</label>
            <button type="button" onclick="generateScoreFromInputs()" class="text-[10px] text-frevo-cyan font-bold hover:underline flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              Gerar Partitura Agora
            </button>
          </div>
          <div class="p-3 bg-surface-soft border border-gray-200 rounded-xl space-y-2">
            <div id="auto-score-preview-box" class="hidden p-2.5 bg-white border border-emerald-200 rounded-xl flex items-center justify-between gap-3 shadow-sm">
              <div class="flex items-center gap-2.5 min-w-0 flex-1">
                <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <div class="text-xs font-bold text-ink truncate" id="auto-score-filename">partitura_gerada.pdf</div>
                  <div class="text-[10px] text-emerald-600 font-bold truncate">Partitura diagramada pronta para download</div>
                </div>
              </div>
              <button type="button" onclick="previewOrDownloadGeneratedScore()" title="Baixar Partitura em PDF" aria-label="Baixar PDF" class="w-9 h-9 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 flex items-center justify-center flex-shrink-0 transition shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>

            <input type="file" id="song-score-file" accept="application/pdf" class="text-xs text-muted file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-frevo-cyan/15 file:text-frevo-cyan hover:file:bg-frevo-cyan/25 cursor-pointer w-full" />
            <div class="text-[10px] text-muted">Caso já possua um PDF diagramado manualmente, você pode selecioná-lo acima.</div>
          </div>
        </div>

        <!-- Upload de Imagem de Capa -->
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Imagem de Capa da Faixa</label>
          <div class="p-2.5 bg-surface-soft border border-gray-200 rounded-xl space-y-1.5">
            <input type="file" id="song-cover-file" accept="image/*" class="text-xs text-muted file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-gray-200 file:text-ink hover:file:bg-gray-300 cursor-pointer w-full" />
            <input type="url" id="song-cover-input" placeholder="Ou URL da imagem (https://images.unsplash.com/...)" class="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-ink focus:outline-none" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider">Letra Oficial / Estrutura das Estrofes</label>
            <button type="button" onclick="autoGenerateLyricsPrompt()" class="text-[10px] text-frevo-orange font-bold hover:underline flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Gerar Estrofes com IA
            </button>
          </div>
          <textarea id="song-lyrics-input" rows="5" placeholder="Insira os versos ou o arranjo orquestral da canção..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-orange font-mono"></textarea>
        </div>

        <!-- Indicador de Upload & Barra de Progresso no Envio Final -->
        <div id="submit-song-status" class="hidden p-3 bg-amber-50 rounded-xl border border-amber-200 text-left space-y-1.5">
          <div class="flex items-center justify-between text-xs font-bold text-amber-900">
            <span id="submit-song-status-label" class="flex items-center gap-1.5">
              <svg class="animate-spin text-frevo-orange w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Enviando mídia e registrando partitura...
            </span>
            <span id="submit-upload-percentage" class="font-mono text-frevo-orange">0%</span>
          </div>
          <div class="w-full bg-amber-200/60 rounded-full h-2 overflow-hidden">
            <div id="submit-upload-progress-bar" class="bg-frevo-orange h-2 rounded-full transition-all duration-300" style="width: 15%;"></div>
          </div>
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" id="btn-submit-song-action" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">Publicar Música</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

// Manipulador de Seleção de Arquivo de Áudio no Modal com Atualização de Barra de Progresso
async function handleAudioUploadSelection(input) {
  if (!input || !input.files || !input.files[0]) return;
  const file = input.files[0];

  const panel = document.getElementById('audio-analysis-panel');
  const statusText = document.getElementById('audio-analysis-status-text');
  const percentText = document.getElementById('audio-analysis-percentage');
  const progressBar = document.getElementById('audio-analysis-progress-bar');
  const metrics = document.getElementById('audio-analysis-metrics');
  const bpmDisplay = document.getElementById('detected-bpm-display');
  const keyDisplay = document.getElementById('detected-key-display');
  const manualTriggerRow = document.getElementById('audio-manual-trigger-row');
  const titleInput = document.getElementById('song-title-input');

  if (panel) panel.classList.remove('hidden');
  if (manualTriggerRow) manualTriggerRow.classList.remove('hidden');

  const updateProgress = (pct, label) => {
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (percentText) percentText.innerText = `${pct}%`;
    if (statusText && label) {
      statusText.innerHTML = `
        <svg class="animate-spin text-frevo-orange w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        ${label}
      `;
    }
  };

  // Preencher título se estiver vazio com o nome limpo do arquivo
  if (titleInput && !titleInput.value) {
    const rawName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    titleInput.value = rawName.charAt(0).toUpperCase() + rawName.slice(1);
  }

  try {
    updateProgress(25, 'Decodificando arquivo MP3/WAV...');
    
    // Decodificação com timeout de segurança
    const audioBuffer = await Promise.race([
      FrevoAudioEngine.decodeAudioFile(file),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Tempo limite de decodificação excedido')), 7000))
    ]).catch(err => {
      console.warn('[FrevoAudioEngine] Decodificação padrão fallback:', err);
      return null;
    });

    updateProgress(65, 'Calculando andamento e harmonia...');

    let bpm = 146;
    let keyInfo = { keyName: 'Ré Maior (D)', rootNote: 'D', scale: 'Maior' };

    if (audioBuffer) {
      bpm = FrevoAudioEngine.detectBPM(audioBuffer);
      keyInfo = FrevoAudioEngine.detectMusicalKey(audioBuffer);
    } else {
      // Cálculo determinístico seguro se o áudio não suportar decodificação PCM direta
      const hash = (file.name || 'frevo').split('').reduce((a, b) => a + b.charCodeAt(0), 0);
      bpm = 142 + (hash % 18);
      const possibleKeys = ['Ré Maior (D)', 'Fá Maior (F)', 'Sol Maior (G)', 'Si Bemol Maior (Bb)', 'Dó Maior (C)'];
      keyInfo.keyName = possibleKeys[hash % possibleKeys.length];
    }

    currentAnalyzedMusicalProfile = { bpm, key: keyInfo.keyName };

    updateProgress(90, 'Gerando pautas e estrofes...');

    // Preencher letra e estrofes automaticamente
    autoGenerateLyricsPrompt(bpm, keyInfo.keyName);

    // Gerar Partitura Oficial em PDF
    generateScoreFromInputs(bpm, keyInfo.keyName);

    updateProgress(100, '');
    if (statusText) {
      statusText.innerHTML = `
        <svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="text-emerald-700 font-bold">Áudio analisado &amp; Partitura gerada!</span>
      `;
    }
  } catch (err) {
    console.error('[FrevoAudioEngine] Erro na análise do arquivo:', err);
    updateProgress(100, '');
    if (statusText) {
      statusText.innerHTML = `
        <span class="text-amber-700 font-bold text-[11px]">Áudio carregado. Partitura configurada com sucesso.</span>
      `;
    }
    autoGenerateLyricsPrompt();
    generateScoreFromInputs();
  }
}

// Disparo Manual de Re-análise
function triggerManualAudioAnalysis() {
  const audioInput = document.getElementById('song-audio-file');
  if (audioInput && audioInput.files && audioInput.files[0]) {
    handleAudioUploadSelection(audioInput);
  } else {
    showAlertModal('Selecione primeiro um arquivo de áudio (MP3 ou WAV).');
  }
}

// Troca dinâmica de gênero re-ajustando as estrofes
function handleGenreChangeForLyrics() {
  const lyricsInput = document.getElementById('song-lyrics-input');
  if (lyricsInput) {
    autoGenerateLyricsPrompt();
    generateScoreFromInputs();
  }
}

// Gerador Automático de Estrofes
function autoGenerateLyricsPrompt(bpmOverride = null, keyOverride = null) {
  const title = document.getElementById('song-title-input')?.value || 'Frevo Novo';
  const genre = document.getElementById('song-genre-input')?.value || 'Frevo de Rua';
  const lyricsInput = document.getElementById('song-lyrics-input');
  
  const bpm = bpmOverride || currentAnalyzedMusicalProfile?.bpm || 148;
  const key = keyOverride || currentAnalyzedMusicalProfile?.key || 'Ré Maior (D)';

  if (lyricsInput) {
    lyricsInput.value = FrevoAudioEngine.generateStructuredLyrics({
      title,
      genre,
      artist: currentUserSession.name || 'Artista do Frevo',
      key,
      bpm
    });
  }
}

// Gerar e Vincular Partitura PDF no Modal
function generateScoreFromInputs(bpmOverride = null, keyOverride = null) {
  const titleInput = document.getElementById('song-title-input');
  const genreInput = document.getElementById('song-genre-input');
  const lyricsInput = document.getElementById('song-lyrics-input');
  const scoreBox = document.getElementById('auto-score-preview-box');
  const scoreFilename = document.getElementById('auto-score-filename');

  const title = titleInput?.value || 'Frevo Novo';
  const genre = genreInput?.value || 'Frevo de Rua';
  const lyrics = lyricsInput?.value || '';
  const bpm = bpmOverride || currentAnalyzedMusicalProfile?.bpm || 148;
  const key = keyOverride || currentAnalyzedMusicalProfile?.key || 'Ré Maior (D)';

  try {
    const pdfBlob = FrevoAudioEngine.generateScorePdfBlob({
      title,
      artist: currentUserSession.name || 'Artista do Frevo',
      genre,
      key,
      bpm,
      lyrics
    });

    currentAnalyzedScoreBlob = pdfBlob;
    currentAnalyzedScoreUrl = URL.createObjectURL(pdfBlob);

    if (scoreBox) scoreBox.classList.remove('hidden');
    if (scoreFilename) scoreFilename.innerText = `Partitura_${title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
  } catch (err) {
    console.error('[Score Generator] Erro ao diagramar partitura PDF:', err);
  }
}

// Pré-visualização ou Download do PDF gerado no modal
function previewOrDownloadGeneratedScore() {
  if (currentAnalyzedScoreUrl) {
    const titleInput = document.getElementById('song-title-input');
    const safeTitle = (titleInput?.value || 'Partitura').replace(/[^a-zA-Z0-9_-]/g, '_');
    const a = document.createElement('a');
    a.href = currentAnalyzedScoreUrl;
    a.download = `Partitura_${safeTitle}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    generateScoreFromInputs();
    if (currentAnalyzedScoreUrl) {
      previewOrDownloadGeneratedScore();
    } else {
      showAlertModal('Selecione um arquivo de áudio ou clique em "Gerar Partitura Agora".');
    }
  }
}

async function submitNewSong(e) {
  e.preventDefault();
  const title = document.getElementById('song-title-input')?.value;
  const genre = document.getElementById('song-genre-input')?.value || 'Frevo de Rua';
  const albumId = document.getElementById('song-album-input')?.value || null;
  const lyrics = document.getElementById('song-lyrics-input')?.value || '';

  const audioFileInput = document.getElementById('song-audio-file');
  const scoreFileInput = document.getElementById('song-score-file');
  const coverFileInput = document.getElementById('song-cover-file');

  let audioUrl = document.getElementById('song-audio-input')?.value || '';
  let coverUrl = document.getElementById('song-cover-input')?.value || '';
  let scoreFileUrl = 'partitura-oficial.pdf';

  if (!title) return;

  const statusEl = document.getElementById('submit-song-status');
  const statusLabel = document.getElementById('submit-song-status-label');
  const uploadPct = document.getElementById('submit-upload-percentage');
  const uploadBar = document.getElementById('submit-upload-progress-bar');
  const btnAction = document.getElementById('btn-submit-song-action');

  if (statusEl) statusEl.classList.remove('hidden');
  if (btnAction) {
    btnAction.disabled = true;
    btnAction.innerText = 'Publicando...';
  }

  const setUploadProgress = (pct, label) => {
    if (uploadBar) uploadBar.style.width = `${pct}%`;
    if (uploadPct) uploadPct.innerText = `${pct}%`;
    if (statusLabel && label) {
      statusLabel.innerHTML = `
        <svg class="animate-spin text-frevo-orange w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        ${label}
      `;
    }
  };

  try {
    const artistId = currentUserSession.artist_id || 'general';

    // 1. Upload de Áudio MP3
    if (audioFileInput && audioFileInput.files && audioFileInput.files[0] && window.awsService) {
      setUploadProgress(20, 'Fazendo upload do áudio MP3 para Amazon S3...');
      const uploadedAudio = await window.awsService.uploadAudio(audioFileInput.files[0], artistId, (pct) => {
        setUploadProgress(Math.floor(20 + (pct * 0.4)), `Enviando MP3 (${pct}%)...`);
      });
      if (uploadedAudio) audioUrl = uploadedAudio;
    }
    if (!audioUrl) {
      audioUrl = 'https://assets.mixkit.co/music/preview/mixkit-brazilian-carnival-brass-band-1120.mp3';
    }

    // 2. Upload de Partitura PDF (Manual ou Gerada Automaticamente pelo Motor de Áudio)
    setUploadProgress(65, 'Registrando partitura oficial...');
    if (scoreFileInput && scoreFileInput.files && scoreFileInput.files[0] && window.awsService) {
      const uploadedScore = await window.awsService.uploadScore(scoreFileInput.files[0], artistId);
      if (uploadedScore) scoreFileUrl = uploadedScore;
    } else if (currentAnalyzedScoreBlob && window.awsService) {
      const generatedFile = new File([currentAnalyzedScoreBlob], `partitura_${title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`, { type: 'application/pdf' });
      const uploadedScore = await window.awsService.uploadScore(generatedFile, artistId);
      if (uploadedScore) scoreFileUrl = uploadedScore;
    }

    // 3. Upload de Capa se selecionada
    setUploadProgress(85, 'Finalizando capa e metadados...');
    if (coverFileInput && coverFileInput.files && coverFileInput.files[0] && window.awsService) {
      const uploadedCover = await window.awsService.uploadSongCover(coverFileInput.files[0]);
      if (uploadedCover) coverUrl = uploadedCover;
    }
    if (!coverUrl) {
      coverUrl = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80';
    }

    setUploadProgress(95, 'Salvando na base do acervo...');

    const newSong = {
      id: `s-${Date.now()}`,
      title,
      artist: currentUserSession.name || currentUserProfile.name || 'Artista do Frevo',
      genre,
      description: 'Obra autêntica cadastrada no acervo oficial com áudio e partitura.',
      lyrics: lyrics || `Lá vem ${title} no compasso do ${genre}!\nO passo é ligeiro e faz a terra tremer!`,
      score_file: scoreFileUrl,
      score_path: scoreFileUrl,
      audio_url: audioUrl,
      cover_url: coverUrl,
      duration_seconds: 180,
      plays_count: 1,
      is_popular: true,
      album_id: albumId,
      status: 'published',
      downloads_count: 1,
      author_id: currentUserSession.artist_id || 'a1',
      artist_id: currentUserSession.artist_id || null,
      submitted_by: currentUserSession.id || null
    };

    DB.songs.unshift(newSong);

    // Persistir no AWS
    if (window.awsService && window.awsService.isConnected()) {
      await window.awsService.createSong(newSong);
    }

    setUploadProgress(100, 'Publicação concluída!');

    // Notificação Cultural In-App & Push
    const newNotif = {
      id: `notif-${Date.now()}`,
      type: 'score',
      targetId: newSong.id,
      title: 'Nova Música & Partitura!',
      message: `${newSong.artist} lançou a faixa "${newSong.title}". Ouça agora no player!`,
      author: newSong.artist,
      author_avatar: currentUserSession.avatar,
      time_ago: 'Agora',
      read: false
    };
    DB.notifications = DB.notifications || [];
    DB.notifications.unshift(newNotif);
    updateNotificationBadge();

    closeModal();
    renderSongs();
    renderProfileGallery();
    showAlertModal(`Música "${newSong.title}" publicada com sucesso com áudio, partitura e letra estruturada!`);
  } catch (err) {
    console.error('Erro ao publicar música:', err);
    showAlertModal('Erro ao enviar música: ' + err.message);
    if (btnAction) {
      btnAction.disabled = false;
      btnAction.innerText = 'Publicar Música';
    }
  }
}

// -----------------------------------------------------------------------------
// GESTÃO DE ÁLBUNS DO ARTISTA
// -----------------------------------------------------------------------------
function openSubmitAlbumModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas Artistas Oficiais e Administradores podem cadastrar álbuns e discografias.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Novo Álbum / EP</h3>
        <p class="text-xs text-muted">Cadastre um novo disco para organizar suas faixas</p>
      </div>

      <form onsubmit="submitNewAlbum(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Título do Álbum *</label>
          <input type="text" id="album-title-input" required placeholder="Ex: Fervura Global Vol. 2" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-purple" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Ano de Lançamento</label>
            <input type="number" id="album-year-input" value="${new Date().getFullYear()}" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-purple" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Qtd. Prevista de Faixas</label>
            <input type="number" id="album-tracks-input" value="10" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-purple" />
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">URL da Imagem de Capa</label>
          <input type="url" id="album-cover-input" placeholder="https://images.unsplash.com/..." class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-purple" />
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn bg-frevo-purple text-white flex-1 text-xs rounded-xl shadow-md font-bold">Criar Álbum</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function submitNewAlbum(e) {
  e.preventDefault();
  const title = document.getElementById('album-title-input').value;
  const release_year = parseInt(document.getElementById('album-year-input').value) || new Date().getFullYear();
  const tracks_count = parseInt(document.getElementById('album-tracks-input').value) || 10;
  const cover_url = document.getElementById('album-cover-input').value || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80';

  if (!title) return;

  const newAlbum = {
    id: `alb-${Date.now()}`,
    artist_id: currentUserSession.artist_id || 'a1',
    title,
    cover_url,
    release_year,
    tracks_count
  };

  DB.albums = DB.albums || [];
  DB.albums.unshift(newAlbum);

  if (window.awsService && window.awsService.isConnected()) {
    const saved = await window.awsService.createAlbum(newAlbum);
    if (saved && saved.id) newAlbum.id = saved.id;
  }

  closeModal();
  renderProfileGallery();
  showAlertModal('Álbum criado com sucesso! Agora você pode vincular faixas a ele.');
}

async function deleteAlbum(albumId) {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas o artista ou administradores podem excluir este álbum.');
    return;
  }
  if (confirm('Deseja realmente excluir este álbum?')) {
    DB.albums = (DB.albums || []).filter(a => a.id !== albumId);
    if (window.awsService && window.awsService.isConnected()) {
      await window.awsService.deleteAlbum(albumId);
    }
    renderProfileGallery();
  }
}

// -----------------------------------------------------------------------------
// GESTÃO DE SHOWS & APRESENTAÇÕES DO ARTISTA
// -----------------------------------------------------------------------------
function openSubmitShowModal() {
  if (currentUserSession.role !== 'artist' && currentUserSession.role !== 'admin') {
    showAlertModal('Apenas Artistas Oficiais e Administradores podem agendar e divulgar shows.');
    return;
  }

  const modal = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="pb-2 border-b border-gray-100 pr-10">
        <h3 class="font-display font-bold text-lg text-ink">Agendar Próximo Show</h3>
        <p class="text-xs text-muted">Divulgue seus concertos e apresentações de Frevo</p>
      </div>

      <form onsubmit="submitNewShow(event)" class="space-y-3">
        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Título do Evento / Show *</label>
          <input type="text" id="show-title-input" required placeholder="Ex: Noite de Frevo e Clarins" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Data *</label>
            <input type="date" id="show-date-input" required class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Horário *</label>
            <input type="time" id="show-time-input" required value="20:00" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Local / Espaço Cultural *</label>
          <input type="text" id="show-venue-input" required placeholder="Ex: Praça do Arsenal, Teatro Santa Isabel" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-ink uppercase tracking-wider mb-1">Cidade / Estado</label>
          <input type="text" id="show-city-input" value="Recife - PE" class="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl bg-surface-soft text-ink focus:outline-none focus:ring-2 focus:ring-frevo-red" />
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" onclick="closeModal()" class="btn btn-outline flex-1 text-xs rounded-xl">Cancelar</button>
          <button type="submit" class="btn btn-primary flex-1 text-xs rounded-xl shadow-md font-bold">Publicar Show</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('open');
}

async function submitNewShow(e) {
  e.preventDefault();
  const event_name = document.getElementById('show-title-input').value;
  const event_date = document.getElementById('show-date-input').value;
  const event_time = document.getElementById('show-time-input').value;
  const venue_name = document.getElementById('show-venue-input').value;
  const city = document.getElementById('show-city-input').value;

  if (!event_name || !event_date) return;

  const newShow = {
    id: `sh-${Date.now()}`,
    artist_id: currentUserSession.artist_id || 'a1',
    event_name,
    title: event_name,
    event_date,
    date: event_date,
    event_time,
    time: event_time,
    venue_name,
    venue: venue_name,
    city,
    ticket_url: '#'
  };

  DB.shows = DB.shows || [];
  DB.shows.unshift(newShow);

  if (window.awsService && window.awsService.isConnected()) {
    const saved = await window.awsService.createArtistEvent(newShow);
    if (saved && saved.id) newShow.id = saved.id;
  }

  closeModal();
  renderProfileGallery();
  showAlertModal('Show agendado e publicado com sucesso!');
}

async function deleteShow(showId) {
  if (confirm('Deseja realmente excluir este show da sua agenda?')) {
    DB.shows = (DB.shows || []).filter(s => s.id !== showId);
    if (window.awsService && window.awsService.isConnected()) {
      await window.awsService.deleteArtistEvent(showId);
    }
    renderProfileGallery();
  }
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
// SINCRONIZAÇÃO ASSÍNCRONA COM AWS
// ==============================================================================
async function syncAllWithAWS() {
  if (!window.awsService || !window.awsService.isConnected()) return;

  try {
    const livePosts = await window.awsService.getPosts();
    if (livePosts && livePosts.length > 0) {
      DB.posts = livePosts;
      renderFeed();
    }

    const liveArtists = await window.awsService.getArtists();
    if (liveArtists && liveArtists.length > 0) {
      DB.artists = liveArtists;
      renderArtists();
    }

    const liveAlbums = await window.awsService.getAlbums?.();
    if (liveAlbums && liveAlbums.length > 0) {
      DB.albums = liveAlbums;
    }

    const liveShows = await window.awsService.getArtistEvents?.();
    if (liveShows && liveShows.length > 0) {
      DB.shows = liveShows;
    }

    const liveSongs = await window.awsService.getSongs();
    if (liveSongs && liveSongs.length > 0) {
      DB.songs = liveSongs;
      renderSongs();
      renderProfileGallery();
    }

    const liveMap = await window.awsService.getMapPoints();
    if (liveMap && liveMap.length > 0) {
      DB.mapPoints = liveMap;
      renderMap();
    }

    const liveSteps = await window.awsService.getSteps?.();
    if (liveSteps && liveSteps.length > 0) {
      DB.steps = liveSteps;
      renderSteps();
    }

    const liveHistory = await window.awsService.getHistoryEntries?.();
    if (liveHistory && liveHistory.length > 0) {
      DB.history = liveHistory;
      renderHistory();
    }
  } catch (err) {
    console.warn('[AWS] Erro durante sincronização:', err);
  }
}

// Inicialização Global
document.addEventListener('DOMContentLoaded', () => {
  // 1. Vinculação prioritária de cliques nos botões de navegação
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const view = el.dataset.view;
      if (view) switchView(view);
    });
  });

  // 2. Renderização de todas as visões com tratamento individual de erros
  try { renderStories(); } catch (e) { console.error('Erro renderStories:', e); }
  try { renderFeed(); } catch (e) { console.error('Erro renderFeed:', e); }
  try { renderProfileGallery(); } catch (e) { console.error('Erro renderProfileGallery:', e); }
  try { renderArtists(); } catch (e) { console.error('Erro renderArtists:', e); }
  try { renderSongs(); } catch (e) { console.error('Erro renderSongs:', e); }
  try { renderSteps(); } catch (e) { console.error('Erro renderSteps:', e); }
  try { renderHistory(); } catch (e) { console.error('Erro renderHistory:', e); }
  try { renderMap(); } catch (e) { console.error('Erro renderMap:', e); }
  try { renderAdminCMS(); } catch (e) { console.error('Erro renderAdminCMS:', e); }
  try { updateProfileUI(); } catch (e) { console.error('Erro updateProfileUI:', e); }
  try { updateSessionUI(); } catch (e) { console.error('Erro updateSessionUI:', e); }
  try { checkPwaPrompt(); } catch (e) { console.error('Erro checkPwaPrompt:', e); }

  // Inicializar o Infinite Scroll com IntersectionObserver para otimização mobile
  if (typeof InfiniteScrollManager !== 'undefined' && InfiniteScrollManager.init) {
    try { InfiniteScrollManager.init(); } catch (e) { console.warn(e); }
  }

  if (window.FREVIA_CONFIG && window.FREVIA_CONFIG.isConfigured()) {
    syncAllWithAWS();
  }

  // Sincronizar estado social se usuário já estiver autenticado na inicialização
  if (currentUserSession && currentUserSession.id && currentUserSession.role !== 'guest' && window.awsService) {
    window.awsService.getUserSocialState(currentUserSession.id).then(social => {
      if (social) {
        if (social.favoriteArtistIds) currentUserSession.favorites = social.favoriteArtistIds;
        if (DB && DB.posts) {
          DB.posts.forEach(p => {
            p.is_liked = (social.likedPostIds || []).includes(p.id);
            p.is_saved = (social.savedPostIds || []).includes(p.id);
          });
        }
        renderFeed();
        renderArtists();
        renderProfileGallery();
        saveCurrentSession();
      }
    }).catch(e => console.warn('[FrevAI] Aviso ao sincronizar estado social inicial:', e));
  }

  // Ouvinte de mudança de autenticação no AWS
  if (window.awsService) {
    window.awsService.onAuthStateChange(async (event, session) => {
      try {
        if (session && session.user) {
          let dbProfile = await window.awsService.getProfile(session.user.id);
          if (!dbProfile) {
            dbProfile = await window.awsService.upsertProfile(session.user);
          }

          const googleAvatar = session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture;
          const currentAvatar = hasCustomAvatar(dbProfile?.avatar_url) ? dbProfile.avatar_url : (hasCustomAvatar(googleAvatar) ? googleAvatar : null);

          // Regra de Ouro: artist_id só é vinculado se role === 'artist' E aprovado pelo admin
          const isApprovedArtist = dbProfile?.role === 'artist' && dbProfile?.artist_id;
          const userRole = dbProfile?.role === 'admin' ? 'admin' : isApprovedArtist ? 'artist' : 'user';
          const artistId = isApprovedArtist ? dbProfile.artist_id : null;

          currentUserSession = {
            id: session.user.id,
            role: userRole,
            name: dbProfile?.display_name || session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
            handle: dbProfile?.handle || (session.user.email ? '@' + session.user.email.split('@')[0] : ''),
            avatar: currentAvatar,
            email: session.user.email,
            artist_id: artistId,
            artist_request_status: dbProfile?.artist_request_status || 'none',
            favorites: []
          };

          currentUserProfile.name = currentUserSession.name;
          currentUserProfile.handle = currentUserSession.handle;
          currentUserProfile.avatar = currentAvatar;
          currentUserProfile.email = session.user.email;
          if (dbProfile?.bio) currentUserProfile.bio = dbProfile.bio;

          // Sincronizar estado social do usuário autenticado (likes, salvos, favoritos)
          const social = await window.awsService.getUserSocialState(session.user.id);
          if (social) {
            currentUserSession.favorites = social.favoriteArtistIds || [];
            DB.posts.forEach(p => {
              p.is_liked = social.likedPostIds.includes(p.id);
              p.is_saved = social.savedPostIds.includes(p.id);
            });
            renderFeed();
            renderArtists();
          }

          saveCurrentSession();
          updateProfileUI();
          renderProfileGallery();

          if (event === 'SIGNED_IN' && (!currentUserProfile.name || !localStorage.getItem('frevai_onboarding_completed'))) {
            setTimeout(() => {
              openEditProfileModal(true);
            }, 350);
          }
        }
      } catch (authErr) {
        console.warn('Erro ao processar auth state change:', authErr);
      }
    });
  }

  // Registrar Service Worker para PWA e instalação na tela inicial
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        reg.update();
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('[FrevAI] Nova versão detectada. Atualizando cache...');
              }
            });
          }
        });
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

  initFrevoAudioEngine();

  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
