-- ==============================================================================
-- FREVAI / FREVIA COMPLETE SUPABASE CONFIGURATION & AUTO-SYNC SCRIPT
-- ==============================================================================
-- Execute este script no SQL Editor do Supabase para configurar:
-- 1. Criação de Tabelas, Enums e RLS
-- 2. Trigger automático para sincronizar novos logins (Google/Email) na tabela 'profiles'
-- 3. Backfill imediato para preencher os usuários que já logaram pelo Google
-- 4. Buckets de Storage públicos ('avatars', 'covers', 'scores') e suas permissões
-- ==============================================================================

-- 1. EXTENSÕES
create extension if not exists "uuid-ossp";

-- 2. ENUMS & TYPES
do $$ begin
  create type user_role as enum ('user', 'artist', 'admin');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type post_type as enum ('event', 'news', 'music', 'score', 'culture', 'artist');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type content_status as enum ('draft', 'pending_review', 'published', 'archived');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type comment_status as enum ('visible', 'hidden', 'pending');
exception
  when duplicate_object then null;
end $$;

-- 3. TABELA DE PERFIS (PROFILES)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  bio text,
  role user_role not null default 'user',
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 4. TABELA DE ARTISTAS
create table if not exists public.artists (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references public.profiles(id) on delete set null,
  slug text unique not null,
  name text not null,
  genre text default 'Frevo de Rua',
  bio text,
  avatar_url text,
  cover_url text,
  instagram_url text,
  youtube_url text,
  website_url text,
  is_authorized_editor boolean default false,
  is_published boolean default true,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 5. PERMISSÕES DE ARTISTA
create table if not exists public.artist_permissions (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid not null references public.artists(id) on delete cascade,
  can_edit_lyrics boolean default false,
  can_edit_scores boolean default false,
  can_submit_content boolean default true,
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  created_at timestamptz not null default timezone('utc'::text, now()),
  unique(artist_id)
);

-- 6. TABELA DE MÚSICAS / PARTITURAS
create table if not exists public.songs (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid not null references public.artists(id) on delete cascade,
  title text not null,
  slug text unique not null,
  genre text default 'Frevo de Rua',
  description text,
  lyrics text,
  score_path text,
  score_is_private boolean default false,
  cover_url text,
  status content_status not null default 'published',
  submitted_by uuid references public.profiles(id),
  published_at timestamptz default timezone('utc'::text, now()),
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 7. TABELA DE POSTS (FEED SOCIAL)
create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid references public.profiles(id) on delete cascade,
  artist_id uuid references public.artists(id) on delete set null,
  source_song_id uuid references public.songs(id) on delete set null,
  type post_type not null default 'culture',
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  cover_url text,
  tags text[] default '{}',
  status content_status not null default 'published',
  published_at timestamptz default timezone('utc'::text, now()),
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 8. POST LIKES
create table if not exists public.post_likes (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default timezone('utc'::text, now()),
  unique(post_id, user_id)
);

-- 9. COMENTÁRIOS
create table if not exists public.comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  status comment_status not null default 'visible',
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 10. SEGUIDORES
create table if not exists public.follows (
  id uuid primary key default uuid_generate_v4(),
  follower_id uuid not null references public.profiles(id) on delete cascade,
  artist_id uuid not null references public.artists(id) on delete cascade,
  created_at timestamptz not null default timezone('utc'::text, now()),
  unique(follower_id, artist_id)
);

-- 11. PASSOS DO FREVO
create table if not exists public.frevo_steps (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text not null,
  instructions text not null,
  media_url text,
  media_type text default 'image',
  difficulty text default 'Iniciante',
  category text default 'Tradicional',
  is_published boolean default true,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 12. HISTÓRIA DO FREVO
create table if not exists public.history_entries (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  period_label text not null,
  year_start integer,
  year_end integer,
  content text not null,
  image_url text,
  source_text text,
  source_url text,
  sort_order integer default 0,
  is_published boolean default true,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 13. PONTOS DO MAPA
create table if not exists public.map_points (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text not null,
  address text not null,
  latitude double precision not null,
  longitude double precision not null,
  image_url text,
  category text default 'Patrimônio',
  period_label text,
  source_text text,
  source_url text,
  is_published boolean default true,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- ==============================================================================
-- AUTOMAÇÃO DE PERFIS: TRIGGER ON AUTH.USERS (GOOGLE OAUTH & EMAIL)
-- ==============================================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  d_name text;
  d_avatar text;
  d_role public.user_role := 'user';
begin
  begin
    -- Extrai display_name do Google ou do formulário de email
    d_name := coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      new.raw_user_meta_data->>'display_name',
      split_part(new.email, '@', 1),
      'Folião'
    );

    -- Extrai foto do Google ou metadata
    d_avatar := coalesce(
      new.raw_user_meta_data->>'avatar_url',
      new.raw_user_meta_data->>'picture',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    );

    -- Define papel inicial
    if (new.raw_user_meta_data->>'role' = 'admin') then
      d_role := 'admin';
    elsif (new.raw_user_meta_data->>'role' = 'artist') then
      d_role := 'artist';
    else
      d_role := 'user';
    end if;

    insert into public.profiles (id, display_name, avatar_url, role)
    values (new.id, d_name, d_avatar, d_role)
    on conflict (id) do update set
      display_name = coalesce(excluded.display_name, public.profiles.display_name),
      avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url);
  exception
    when others then
      -- Garante que nunca trave a criação de usuário em auth.users
      null;
  end;

  return new;
end;
$$;

-- Trigger para novas contas criadas
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Sincronizar usuários que já existem em auth.users imediatamente para public.profiles
insert into public.profiles (id, display_name, avatar_url, role)
select 
  id,
  coalesce(
    raw_user_meta_data->>'full_name', 
    raw_user_meta_data->>'name', 
    raw_user_meta_data->>'display_name', 
    split_part(email, '@', 1)
  ) as display_name,
  coalesce(
    raw_user_meta_data->>'avatar_url', 
    raw_user_meta_data->>'picture', 
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  ) as avatar_url,
  case 
    when raw_user_meta_data->>'role' = 'admin' then 'admin'::user_role
    when raw_user_meta_data->>'role' = 'artist' then 'artist'::user_role
    else 'user'::user_role
  end as role
from auth.users
on conflict (id) do update set
  display_name = coalesce(excluded.display_name, public.profiles.display_name),
  avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

alter table public.profiles enable row level security;
alter table public.artists enable row level security;
alter table public.artist_permissions enable row level security;
alter table public.songs enable row level security;
alter table public.posts enable row level security;
alter table public.post_likes enable row level security;
alter table public.comments enable row level security;
alter table public.follows enable row level security;
alter table public.frevo_steps enable row level security;
alter table public.history_entries enable row level security;
alter table public.map_points enable row level security;

-- Helper functions
create or replace function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
end;
$$ language plpgsql security definer;

create or replace function public.is_artist()
returns boolean as $$
begin
  return exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('artist', 'admin')
  );
end;
$$ language plpgsql security definer;

create or replace function public.is_artist_owner(artist_id uuid)
returns boolean as $$
begin
  return exists (
    select 1 from public.artists
    where id = artist_id and (profile_id = auth.uid() or public.is_admin())
  );
end;
$$ language plpgsql security definer;

-- Políticas de Profiles
drop policy if exists "Public profiles are readable by everyone" on public.profiles;
create policy "Public profiles are readable by everyone" on public.profiles for select using (true);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id or is_admin());

-- Políticas de Artists & Content
drop policy if exists "Published artists are readable by everyone" on public.artists;
create policy "Published artists are readable by everyone" on public.artists for select using (is_published = true or is_artist_owner(id) or is_admin());

drop policy if exists "Admins can manage artists" on public.artists;
create policy "Admins can manage artists" on public.artists for all using (is_admin());

drop policy if exists "Published songs are readable by everyone" on public.songs;
create policy "Published songs are readable by everyone" on public.songs for select using (status = 'published' or is_artist_owner(artist_id) or is_admin());

drop policy if exists "Authenticated users can create songs" on public.songs;
drop policy if exists "Artists and Admins can create songs" on public.songs;
create policy "Artists and Admins can create songs" on public.songs for insert with check (is_artist() or is_admin());

drop policy if exists "Artists can update own songs and admins all" on public.songs;
create policy "Artists can update own songs and admins all" on public.songs for update using (is_artist_owner(artist_id) or is_admin());

drop policy if exists "Published posts are readable by everyone" on public.posts;
create policy "Published posts are readable by everyone" on public.posts for select using (status = 'published' or auth.uid() = author_id or is_admin());

drop policy if exists "Authenticated users can create posts" on public.posts;
drop policy if exists "Artists and Admins can create posts" on public.posts;
create policy "Artists and Admins can create posts" on public.posts for insert with check (is_artist() or is_admin());

drop policy if exists "Likes are readable by everyone" on public.post_likes;
create policy "Likes are readable by everyone" on public.post_likes for select using (true);

drop policy if exists "Authenticated users can toggle likes" on public.post_likes;
create policy "Authenticated users can toggle likes" on public.post_likes for all using (auth.uid() = user_id);

drop policy if exists "Comments are readable by everyone" on public.comments;
create policy "Comments are readable by everyone" on public.comments for select using (true);

drop policy if exists "Authenticated users can post comments" on public.comments;
create policy "Authenticated users can post comments" on public.comments for insert with check (auth.uid() = user_id);

drop policy if exists "Frevo steps are readable by everyone" on public.frevo_steps;
create policy "Frevo steps are readable by everyone" on public.frevo_steps for select using (true);

drop policy if exists "Admins can manage steps" on public.frevo_steps;
create policy "Admins can manage steps" on public.frevo_steps for all using (is_admin());

drop policy if exists "History is readable by everyone" on public.history_entries;
create policy "History is readable by everyone" on public.history_entries for select using (true);

drop policy if exists "Admins can manage history" on public.history_entries;
create policy "Admins can manage history" on public.history_entries for all using (is_admin());

drop policy if exists "Map points are readable by everyone" on public.map_points;
create policy "Map points are readable by everyone" on public.map_points for select using (true);

drop policy if exists "Admins can manage map points" on public.map_points;
create policy "Admins can manage map points" on public.map_points for all using (is_admin());

-- ==============================================================================
-- STORAGE BUCKETS SETUP ('avatars', 'covers', 'scores')
-- ==============================================================================

insert into storage.buckets (id, name, public)
values 
  ('avatars', 'avatars', true),
  ('covers', 'covers', true),
  ('scores', 'scores', true)
on conflict (id) do update set public = true;

-- Políticas de Storage para leitura e upload
drop policy if exists "Public bucket access" on storage.objects;
create policy "Public bucket access" on storage.objects
  for select using (bucket_id in ('avatars', 'covers', 'scores'));

drop policy if exists "Authenticated uploads" on storage.objects;
create policy "Authenticated uploads" on storage.objects
  for insert with check (bucket_id in ('avatars', 'covers', 'scores') and auth.role() = 'authenticated');

drop policy if exists "Users can update own files" on storage.objects;
create policy "Users can update own files" on storage.objects
  for update using (bucket_id in ('avatars', 'covers', 'scores') and auth.uid() = owner);
