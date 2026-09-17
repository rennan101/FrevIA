-- ==============================================================================
-- SEED DATA: ARTISTS & SHEET MUSIC / SCORES
-- ==============================================================================

-- 1. Insert Fake / Official Artists
INSERT INTO public.artists (id, slug, name, genre, bio, avatar_url, cover_url, instagram_url, youtube_url, website_url, is_authorized_editor, is_published)
VALUES
  (
    'a1000000-0000-0000-0000-000000000001',
    'maestro-forro',
    'Maestro Forró & Orquestra Popular da Bomba do Hemetério',
    'Frevo de Rua',
    'Criador de uma das orquestras mais vibrantes de Pernambuco, misturando frevo tradicional com arranjos modernos e afro-brasileiros. Levou o frevo ao redor do mundo com o projeto da Bomba do Hemetério.',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
    'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&q=80',
    'https://instagram.com/maestroforro',
    'https://youtube.com',
    'https://maestroforro.com.br',
    true,
    true
  ),
  (
    'a2000000-0000-0000-0000-000000000002',
    'spokfrevo-orquestra',
    'SpokFrevo Orquestra',
    'Frevo Livre / Instrumental',
    'Referência mundial em frevo instrumental contemporâneo, trazendo improvisação jazzística e precisão rítmica impecável pelas mãos do Maestro Spok.',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
    'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&q=80',
    'https://instagram.com/spokfrevo',
    'https://youtube.com',
    'https://spokfrevo.com.br',
    true,
    true
  ),
  (
    'a3000000-0000-0000-0000-000000000003',
    'bloco-da-saudade',
    'Coral e Orquestra Bloco da Saudade',
    'Frevo de Bloco',
    'Fundado em 1974 para resgatar a poesia e o lirismo dos blocos tradicionais do Recife, com violões, cavaquinhos, flautas e coral feminino inconfundível.',
    'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80',
    'https://instagram.com/blocodasaudade',
    'https://youtube.com',
    'https://blocodasaudade.org.br',
    true,
    true
  ),
  (
    'a4000000-0000-0000-0000-000000000004',
    'claudionor-germano',
    'Claudionor Germano',
    'Frevo Canção',
    'A voz clássica do Carnaval de Pernambuco e o maior intérprete de Capiba e Nelson Ferreira. Com mais de 70 anos de carreira dedicada ao frevo canção.',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80',
    'https://instagram.com/claudionorgermano',
    'https://youtube.com',
    'https://claudionorgermano.com.br',
    true,
    true
  ),
  (
    'a5000000-0000-0000-0000-000000000005',
    'orquestra-popular-do-recife',
    'Orquestra Popular do Recife',
    'Frevo de Rua',
    'Coletivo de mestres dos metais e percussão dedicado a manter viva a tradição das marchas frenéticas e dos arranjos dos grandes mestres do século XX.',
    'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400&q=80',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
    'https://instagram.com/orquestrapopularrecife',
    'https://youtube.com',
    'https://oprecife.org.br',
    true,
    true
  ),
  (
    'a6000000-0000-0000-0000-000000000006',
    'giselle-andrade-passistas',
    'Giselle Andrade & Passistas de Olinda',
    'Dança & Música',
    'Coreógrafa e multi-instrumentista que une o ensino dos passos históricos do frevo com a preservação de partituras para orquestras de rua.',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80',
    'https://instagram.com/gisellepassistas',
    'https://youtube.com',
    'https://passistasdeolinda.com.br',
    true,
    true
  )
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  genre = EXCLUDED.genre,
  bio = EXCLUDED.bio,
  avatar_url = EXCLUDED.avatar_url,
  cover_url = EXCLUDED.cover_url,
  instagram_url = EXCLUDED.instagram_url,
  youtube_url = EXCLUDED.youtube_url,
  website_url = EXCLUDED.website_url,
  is_authorized_editor = EXCLUDED.is_authorized_editor,
  is_published = EXCLUDED.is_published;

-- 2. Insert Songs and Sheet Music (Linked to the Artists)
INSERT INTO public.songs (id, artist_id, title, slug, genre, description, lyrics, score_path, status, published_at)
VALUES
  (
    's1000000-0000-0000-0000-000000000001',
    'a1000000-0000-0000-0000-000000000001',
    'Bomba em Brasa',
    'bomba-em-brasa',
    'Frevo de Rua',
    'Arranjo completo para Big Band e orquestra de rua em andamento 152 BPM, com solo virtuosístico de trompete.',
    'Instrumental — Arr. Maestro Forró',
    'scores/bomba_em_brasa_grade.pdf',
    'published',
    now()
  ),
  (
    's2000000-0000-0000-0000-000000000002',
    'a1000000-0000-0000-0000-000000000001',
    'Frevando na Ladeira',
    'frevando-na-ladeira',
    'Frevo de Rua',
    'Frevo de rua frenético em Ré Maior, consagrado nas ladeiras de Olinda e nos polos do Recife Antigo.',
    'Instrumental — Arr. Maestro Forró',
    'scores/frevando_ladeira.pdf',
    'published',
    now()
  ),
  (
    's3000000-0000-0000-0000-000000000003',
    'a2000000-0000-0000-0000-000000000002',
    'Passo de Anjo',
    'passo-de-anjo',
    'Frevo Livre / Instrumental',
    'Grande clássico contemporâneo de Spok e Ademir Araújo com harmonias sofisticadas e solos de sax alto.',
    'Instrumental — Composição Spok & Maestro Formiga',
    'scores/passo_de_anjo_spok.pdf',
    'published',
    now()
  ),
  (
    's4000000-0000-0000-0000-000000000004',
    'a2000000-0000-0000-0000-000000000002',
    'Neném Mulher',
    'nenem-mulher',
    'Frevo Livre / Instrumental',
    'Arranjo arrojado com contrapontos de saxofones e metais, um dos pontos altos do repertório da SpokFrevo.',
    'Instrumental — Arr. Spok',
    'scores/nenem_mulher.pdf',
    'published',
    now()
  ),
  (
    's5000000-0000-0000-0000-000000000005',
    'a3000000-0000-0000-0000-000000000003',
    'Valores do Passado',
    'valores-do-passado',
    'Frevo de Bloco',
    'Obra-prima lírica de Edgar Moraes, hino de exaltação aos antigos carnavais e blocos saudosos do Recife.',
    'Bloco das Flores, Andaluzas, Pirilampos, Apôs-fum...\nDos clarins anunciando a folia\nNão existe mais nenhum...',
    'scores/valores_do_passado.pdf',
    'published',
    now()
  ),
  (
    's6000000-0000-0000-0000-000000000006',
    'a3000000-0000-0000-0000-000000000003',
    'Evocação Nº 1',
    'evocacao-no-1',
    'Frevo de Bloco',
    'Clássico imortal de Nelson Ferreira, partitura adaptada para coro feminino a 3 vozes e orquestra de pau e corda.',
    'Felinto, Pedro Salgado, Guilherme, Fenelon...\nCadê seus blocos famosos?\nAdeus, adeus, que a vida é curta...',
    'scores/evocacao_numero_1.pdf',
    'published',
    now()
  ),
  (
    's7000000-0000-0000-0000-000000000007',
    'a4000000-0000-0000-0000-000000000004',
    'Madeira que Cupim Não Rói',
    'madeira-que-cupim-nao-roi',
    'Frevo Canção',
    'O hino de resistência do frevo pernambucano composto por Capiba e imortalizado na voz de Claudionor Germano.',
    'Madeira do Rosarinho nunca desceu para morrer...\nE se faltar o frevo, a gente faz o frevo acontecer!\nMadeira de lei que cupim não rói!',
    'scores/madeira_que_cupim_nao_roi.pdf',
    'published',
    now()
  ),
  (
    's8000000-0000-0000-0000-000000000008',
    'a4000000-0000-0000-0000-000000000004',
    'É de Fazer Chorar',
    'e-de-fazer-chorar',
    'Frevo Canção',
    'Clássica composição de Luiz Bandeira, partitura completa com linha melódica para voz e cifra de acompanhamento.',
    'Quarta-feira ingrata, chega tão depressa...\nDeixa a gente na saudade do frevo que se despede...',
    'scores/e_de_fazer_chorar.pdf',
    'published',
    now()
  ),
  (
    's9000000-0000-0000-0000-000000000009',
    'a5000000-0000-0000-0000-000000000005',
    'Vassourinhas',
    'vassourinhas',
    'Frevo de Rua',
    'O hino supremo do Carnaval pernambucano composto por Matias da Rocha e Joana Batista. Grade de orquestra completa.',
    'Instrumental — Marcha de Frevo',
    'scores/vassourinhas_grade_completa.pdf',
    'published',
    now()
  ),
  (
    's1000000-0000-0000-0000-000000000010',
    'a5000000-0000-0000-0000-000000000005',
    'Cabelo de Fogo',
    'cabelo-de-fogo',
    'Frevo de Rua',
    'Marcha frenética do Maestro Nunes com solos rápidos de trombone de vara e pistões.',
    'Instrumental — Comp. Maestro Nunes',
    'scores/cabelo_de_fogo.pdf',
    'published',
    now()
  ),
  (
    's1100000-0000-0000-0000-000000000011',
    'a6000000-0000-0000-0000-000000000006',
    'Marcha dos Passistas',
    'marcha-dos-passistas',
    'Frevo de Rua',
    'Composição rítmica especialmente desenhada para compassos de passos tesoura, dobradiça e parafuso.',
    'Instrumental com marcações de coreografia',
    'scores/marcha_dos_passistas.pdf',
    'published',
    now()
  )
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  genre = EXCLUDED.genre,
  description = EXCLUDED.description,
  lyrics = EXCLUDED.lyrics,
  score_path = EXCLUDED.score_path,
  status = EXCLUDED.status,
  published_at = EXCLUDED.published_at;
