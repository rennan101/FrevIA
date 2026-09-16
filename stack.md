# stack.md — Stack, Arquitetura e Infraestrutura

## 1. Stack recomendada

### Frontend

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- shadcn/ui somente para componentes estruturais, customizando completamente o visual
- React Hook Form
- Zod
- TanStack Query quando necessário para dados altamente interativos
- SVG customizado para ícones

### Backend / BaaS

**Supabase**

Usar:
- Supabase Auth;
- PostgreSQL;
- Row Level Security;
- Storage;
- Realtime somente onde fizer sentido;
- Edge Functions para operações privilegiadas.

### Mapas

Opções:
- MapLibre GL JS;
- OpenStreetMap como fonte de dados/base quando os termos de uso forem respeitados;
- serviço de tiles adequado para produção.

Evitar depender de uma API de mapas proprietária cara sem necessidade.

### Hosting

Recomendação de arquitetura:

```text
GitHub
   ↓
Vercel
   ↓
Next.js
   ↓
Supabase
 ├── Auth
 ├── PostgreSQL
 ├── Storage
 └── Edge Functions
```

---

# 2. Por que Supabase

O produto possui muitos dados relacionais:

```text
artista
  ├── músicas
  ├── partituras
  ├── letras
  ├── posts
  └── seguidores
```

Além de:

```text
post
 ├── comentários
 ├── likes
 └── autor
```

PostgreSQL facilita:
- relações;
- filtros;
- pesquisa;
- joins;
- permissões;
- integridade referencial;
- relatórios;
- RLS.

O Storage resolve:
- fotos;
- partituras;
- imagens;
- GIFs;
- arquivos editoriais.

---

# 3. Quando considerar Firebase

Firebase é uma alternativa válida caso o projeto priorize:
- ecossistema Google;
- Firestore;
- Firebase Storage;
- Firebase Authentication;
- infraestrutura serverless Google.

Para este produto, a modelagem relacional favorece PostgreSQL/Supabase.

---

# 4. Estrutura de banco

## profiles

```sql
id uuid primary key references auth.users(id)
display_name text
avatar_url text
bio text
role text
created_at timestamptz
updated_at timestamptz
```

Roles:

```text
user
artist
admin
```

Nunca confiar no valor de `role` enviado pelo frontend.

---

# artists

```sql
id uuid primary key
profile_id uuid references profiles(id)
slug text unique
name text
bio text
avatar_url text
cover_url text
instagram_url text
youtube_url text
website_url text
is_authorized_editor boolean default false
is_published boolean default false
created_at timestamptz
updated_at timestamptz
```

---

# artist_permissions

Separar permissões críticas da simples existência do perfil.

```sql
id uuid primary key
artist_id uuid references artists(id)
can_edit_lyrics boolean default false
can_edit_scores boolean default false
can_submit_content boolean default true
approved_by uuid references profiles(id)
approved_at timestamptz
created_at timestamptz
```

O RLS deve verificar essa permissão.

---

# posts

```sql
id uuid primary key
author_id uuid references profiles(id)
artist_id uuid references artists(id)
type text
title text
slug text unique
excerpt text
content text
cover_url text
status text
published_at timestamptz
created_at timestamptz
updated_at timestamptz
```

Tipos:

```text
event
news
music
score
culture
artist
```

Status:

```text
draft
pending_review
published
archived
```

---

# post_likes

```sql
id uuid primary key
post_id uuid references posts(id) on delete cascade
user_id uuid references profiles(id) on delete cascade
created_at timestamptz

unique(post_id, user_id)
```

---

# comments

```sql
id uuid primary key
post_id uuid references posts(id) on delete cascade
user_id uuid references profiles(id)
content text
status text
created_at timestamptz
updated_at timestamptz
```

Status:

```text
visible
hidden
pending
```

---

# follows

```sql
id uuid primary key
follower_id uuid references profiles(id) on delete cascade
artist_id uuid references artists(id) on delete cascade
created_at timestamptz

unique(follower_id, artist_id)
```

---

# songs

```sql
id uuid primary key
artist_id uuid references artists(id)
title text
slug text unique
description text
lyrics text
score_path text
cover_url text
status text
submitted_by uuid references profiles(id)
published_at timestamptz
created_at timestamptz
updated_at timestamptz
```

Status:

```text
draft
pending_review
published
archived
```

---

# song_versions

Recomendado para preservar histórico editorial:

```sql
id uuid primary key
song_id uuid references songs(id) on delete cascade
version integer
lyrics text
score_path text
created_by uuid references profiles(id)
created_at timestamptz
```

Isso permite recuperar versões anteriores.

---

# frevo_steps

```sql
id uuid primary key
name text
slug text unique
description text
instructions text
media_url text
media_type text
difficulty text
category text
is_published boolean default false
created_at timestamptz
updated_at timestamptz
```

---

# history_entries

```sql
id uuid primary key
title text
slug text unique
period_label text
year_start integer
year_end integer
content text
image_url text
source_text text
source_url text
sort_order integer
is_published boolean default false
created_at timestamptz
updated_at timestamptz
```

---

# map_points

```sql
id uuid primary key
name text
slug text unique
description text
address text
latitude double precision
longitude double precision
image_url text
category text
period_label text
source_text text
source_url text
is_published boolean default false
created_at timestamptz
updated_at timestamptz
```

---

# media

Opcional, para centralizar assets:

```sql
id uuid primary key
owner_id uuid references profiles(id)
bucket text
path text
mime_type text
size_bytes bigint
alt_text text
created_at timestamptz
```

---

# 5. Storage

Buckets sugeridos:

```text
avatars
artist-covers
post-media
song-scores
song-covers
frevo-steps
history
map-points
```

Regras:
- avatar público quando o perfil for público;
- mídia editorial publicada pode ser pública;
- arquivos em revisão podem permanecer privados;
- partitura privada deve usar signed URL;
- limitar MIME types;
- limitar tamanho;
- gerar thumbnails quando necessário.

---

# 6. RLS

RLS é obrigatório.

## Conteúdo público

Visitantes podem:

```text
SELECT posts publicados
SELECT artistas publicados
SELECT músicas publicadas
SELECT passos publicados
SELECT história publicada
SELECT pontos publicados
```

## Usuário autenticado

Pode:

```text
INSERT likes próprios
DELETE likes próprios
INSERT comentários próprios
UPDATE comentários próprios
DELETE comentários próprios
INSERT follows próprios
DELETE follows próprios
```

## Artista

Pode:
- atualizar próprio perfil;
- inserir/editar próprias músicas;
- submeter conteúdo;
- editar letras/partituras somente quando `artist_permissions` permitir;
- não alterar `status = published` sem regra de aprovação apropriada.

## Admin

Pode:
- CRUD completo;
- publicar;
- arquivar;
- moderar;
- autorizar artistas.

---

# 7. Fluxo de publicação de música

```text
Artista cria rascunho
        ↓
Preenche letra
        ↓
Upload de partitura
        ↓
Enviar para revisão
        ↓
pending_review
        ↓
Administrador revisa
        ↓
published
        ↓
Perfil do artista atualizado
        ↓
Post automático opcional
```

Se o artista não tiver autorização editorial:

```text
Artista
  ↓
pode cadastrar/submeter
  ↓
não pode alterar campos editoriais protegidos
```

---

# 8. Feed automático de música

Ao publicar música:

Criar uma publicação:

```text
type = music
title = "Nova música: {nome}"
artist_id = artista
```

A publicação deve permitir edição pelo administrador.

Não duplicar posts se a música for editada.

Criar relação opcional:

```sql
source_song_id uuid references songs(id)
```

---

# 9. Autenticação

Login:
- email + senha;
- recuperação de senha;
- magic link opcional;
- OAuth opcional.

Após login:
- consultar `profiles`;
- verificar role;
- redirecionar para área correta.

Não colocar autorização somente em middleware/frontend.

---

# 10. Upload

Fluxo:

```text
selecionar arquivo
↓
validar tamanho
↓
validar MIME
↓
preview
↓
upload Supabase Storage
↓
salvar path no PostgreSQL
```

Para imagens:
- aceitar JPG;
- PNG;
- WebP;
- AVIF quando suportado.

Para partituras:
- PDF;
- imagens conforme regra definida pelo admin.

---

# 11. Busca

MVP:
- PostgreSQL `ILIKE`;
- índices básicos.

Escala maior:
- Full Text Search;
- `tsvector`;
- busca por:
  - artista;
  - música;
  - título;
  - conteúdo;
  - tags.

---

# 12. Índices

Criar índices para:

```text
posts.status
posts.published_at
posts.type
artists.slug
artists.is_published
songs.artist_id
songs.status
comments.post_id
comments.status
follows.artist_id
map_points.latitude
map_points.longitude
```

---

# 13. Hospedagem

## Opção principal

**Vercel + Supabase + GitHub**

Fluxo:

```text
GitHub
→ Vercel
→ produção
```

Benefícios:
- deploy automático;
- preview deployments;
- HTTPS;
- CDN;
- fácil integração com Next.js.

## Alternativas

### Cloudflare Pages/Workers
Boa alternativa para reduzir dependência de um único fornecedor.

### Netlify
Boa opção para deploy frontend, embora Vercel tenha integração particularmente direta com Next.js.

### VPS
DigitalOcean, Hetzner ou similar.

Usar VPS apenas quando houver necessidade real de maior controle.

---

# 14. Domínio

Priorizar:

```text
nomedoprojeto.com.br
```

ou:

```text
nomedoprojeto.org.br
```

Para projeto cultural/institucional:

`.org.br` pode comunicar organização/projeto.

Para uma marca digital:

`.com.br` é simples de reconhecer no Brasil.

Registrar domínios `.br` pelo **Registro.br** ou por registrador autorizado.

Antes de decidir:
- pesquisar disponibilidade;
- verificar marca;
- evitar nome excessivamente longo;
- evitar hífen;
- garantir fácil pronúncia;
- garantir que o nome funcione em URL.

Sugestões de padrão:

```text
frevoteca.com.br
frevoteca.org.br
frevo[marca].com.br
[marca]frevo.com.br
```

Não registrar nenhum nome sem verificar disponibilidade e eventual conflito de marca.

---

# 15. Ambientes

Criar:

```text
development
staging
production
```

Variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

A service role:
- somente servidor;
- nunca no bundle do cliente;
- nunca no GitHub.

---

# 16. CI/CD

GitHub Actions ou integração nativa da Vercel.

Pipeline:

```text
pull request
↓
lint
↓
typecheck
↓
tests
↓
build
↓
preview
```

Production:

```text
merge main
↓
build
↓
deploy
```

---

# 17. Observabilidade

Adicionar:
- logs;
- monitoramento de erros;
- métricas de performance;
- auditoria de ações administrativas.

Registrar especialmente:
- quem publicou;
- quem alterou;
- quem autorizou artista;
- quando ocorreu.

---

# 18. Backup

Banco:
- backups automáticos conforme plano;
- export periódico adicional para dados críticos.

Mídia:
- não depender exclusivamente de uma cópia local;
- documentar política de retenção.

---

# 19. Custos

Começar com infraestrutura gerenciada e gratuita/baixo custo quando os limites forem suficientes.

Estratégia:

```text
MVP
→ Supabase
→ Vercel
→ domínio .br
```

Escalar somente quando:
- volume de mídia crescer;
- tráfego aumentar;
- consultas aumentarem;
- necessidade de processamento aparecer.

Evitar contratar servidores complexos antes da necessidade.

---

# 20. Estrutura de repositório

```text
frevo-platform/
├── app/
├── components/
├── lib/
├── types/
├── public/
│   ├── icons/
│   └── brand/
├── supabase/
│   ├── migrations/
│   ├── seed.sql
│   └── functions/
├── docs/
│   ├── design.md
│   └── stack.md
├── .env.example
├── README.md
├── package.json
└── tsconfig.json
```

---

# 21. Regras de desenvolvimento

1. TypeScript strict.
2. Componentes pequenos.
3. Evitar duplicação.
4. Validar formulários com Zod.
5. RLS sempre ativo.
6. Nenhum segredo no cliente.
7. Nenhum emoji como ícone.
8. SVG para ícones.
9. Imagens otimizadas.
10. Conteúdo real somente quando fornecido/verificado.
11. Acessibilidade desde o início.
12. Mobile-first.
13. Design tokens centralizados.
14. Documentar decisões arquiteturais relevantes.

---

# 22. Definição de pronto

O projeto só está pronto quando:

- frontend compila;
- TypeScript passa;
- lint passa;
- banco está versionado;
- migrations funcionam do zero;
- RLS está testado;
- Auth funciona;
- Storage funciona;
- Admin funciona;
- Artista funciona;
- Feed funciona;
- Likes funcionam;
- Comentários funcionam;
- Follow funciona;
- Música/letra/partitura funcionam;
- Passos funcionam;
- História funciona;
- Mapa funciona;
- mobile funciona;
- desktop funciona;
- SEO básico funciona;
- `.env.example` existe;
- README explica instalação e deploy.
