-- ==============================================================================
-- FREVAI MIGRATION 003: SOLICITAÇÕES DE ARTISTA & INTERAÇÕES SOCIAIS
-- ==============================================================================

-- 1. EXTENSÃO DO PERFIL
alter table public.profiles 
  add column if not exists artist_id uuid references public.artists(id) on delete set null,
  add column if not exists artist_request_status text not null default 'none';

-- 2. TABELA DE SOLICITAÇÕES PARA SE TORNAR ARTISTA (CURADORIA / ADMIN)
create table if not exists public.artist_requests (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  requested_name text not null,
  genre text default 'Frevo de Rua',
  bio text,
  instagram_url text,
  whatsapp text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  review_notes text,
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 3. TABELA DE POSTS SALVOS (BOOKMARKS)
create table if not exists public.saved_posts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.posts(id) on delete cascade,
  created_at timestamptz not null default timezone('utc'::text, now()),
  unique(user_id, post_id)
);

-- 4. TABELA DE ARTISTAS FAVORITADOS
create table if not exists public.artist_favorites (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  artist_id uuid not null references public.artists(id) on delete cascade,
  created_at timestamptz not null default timezone('utc'::text, now()),
  unique(user_id, artist_id)
);

-- 5. HABILITAR ROW LEVEL SECURITY (RLS)
alter table public.artist_requests enable row level security;
alter table public.saved_posts enable row level security;
alter table public.artist_favorites enable row level security;

-- 6. POLÍTICAS RLS - ARTIST_REQUESTS
drop policy if exists "Users can see their own artist requests" on public.artist_requests;
create policy "Users can see their own artist requests"
  on public.artist_requests for select
  using (auth.uid() = user_id or exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));

drop policy if exists "Users can create their artist request" on public.artist_requests;
create policy "Users can create their artist request"
  on public.artist_requests for insert
  with check (auth.uid() = user_id);

drop policy if exists "Admins can update artist requests" on public.artist_requests;
create policy "Admins can update artist requests"
  on public.artist_requests for update
  using (exists (select 1 from public.profiles where id = auth.uid() and role = 'admin'));

-- 7. POLÍTICAS RLS - SAVED_POSTS
drop policy if exists "Users can view their own saved posts" on public.saved_posts;
create policy "Users can view their own saved posts"
  on public.saved_posts for select
  using (auth.uid() = user_id);

drop policy if exists "Users can save posts" on public.saved_posts;
create policy "Users can save posts"
  on public.saved_posts for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can remove saved posts" on public.saved_posts;
create policy "Users can remove saved posts"
  on public.saved_posts for delete
  using (auth.uid() = user_id);

-- 8. POLÍTICAS RLS - ARTIST_FAVORITES
drop policy if exists "Users can view their own artist favorites" on public.artist_favorites;
create policy "Users can view their own artist favorites"
  on public.artist_favorites for select
  using (auth.uid() = user_id);

drop policy if exists "Users can favorite artists" on public.artist_favorites;
create policy "Users can favorite artists"
  on public.artist_favorites for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can unfavorite artists" on public.artist_favorites;
create policy "Users can unfavorite artists"
  on public.artist_favorites for delete
  using (auth.uid() = user_id);
