-- ==============================================================================
-- FREVIA DATABASE SCHEMA & ROW LEVEL SECURITY (SUPABASE / POSTGRESQL)
-- ==============================================================================

-- 1. EXTENSIONS
create extension if not exists "uuid-ossp";

-- 2. ENUMS & TYPES
create type user_role as enum ('user', 'artist', 'admin');
create type post_type as enum ('event', 'news', 'music', 'score', 'culture', 'artist');
create type content_status as enum ('draft', 'pending_review', 'published', 'archived');
create type comment_status as enum ('visible', 'hidden', 'pending');

-- 3. PROFILES TABLE (Linked with auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  bio text,
  role user_role not null default 'user',
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 4. ARTISTS TABLE
create table if not exists public.artists (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references public.profiles(id) on delete set null,
  slug text unique not null,
  name text not null,
  genre text default 'Frevo de Rua', -- Frevo de Rua, Frevo Canção, Frevo de Bloco, Frevo Livre
  bio text,
  avatar_url text,
  cover_url text,
  instagram_url text,
  youtube_url text,
  website_url text,
  is_authorized_editor boolean default false,
  is_published boolean default false,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 5. ARTIST PERMISSIONS (Explicit granular editorial authorization)
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

-- 6. SONGS TABLE (Lyrics & Sheet Music)
create table if not exists public.songs (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid not null references public.artists(id) on delete cascade,
  title text not null,
  slug text unique not null,
  genre text default 'Frevo de Rua',
  description text,
  lyrics text,
  score_path text, -- Supabase Storage Path
  score_is_private boolean default false,
  cover_url text,
  status content_status not null default 'draft',
  submitted_by uuid references public.profiles(id),
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 7. SONG VERSIONS (History of lyrics / scores)
create table if not exists public.song_versions (
  id uuid primary key default uuid_generate_v4(),
  song_id uuid not null references public.songs(id) on delete cascade,
  version integer not null,
  lyrics text,
  score_path text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default timezone('utc'::text, now())
);

-- 8. POSTS TABLE (Social Feed)
create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  artist_id uuid references public.artists(id) on delete set null,
  source_song_id uuid references public.songs(id) on delete set null,
  type post_type not null default 'culture',
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  cover_url text,
  tags text[] default '{}',
  status content_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 9. POST LIKES
create table if not exists public.post_likes (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default timezone('utc'::text, now()),
  unique(post_id, user_id)
);

-- 10. COMMENTS
create table if not exists public.comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  status comment_status not null default 'visible',
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 11. FOLLOWS
create table if not exists public.follows (
  id uuid primary key default uuid_generate_v4(),
  follower_id uuid not null references public.profiles(id) on delete cascade,
  artist_id uuid not null references public.artists(id) on delete cascade,
  created_at timestamptz not null default timezone('utc'::text, now()),
  unique(follower_id, artist_id)
);

-- 12. FREVO STEPS (Passos do Frevo)
create table if not exists public.frevo_steps (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text not null,
  instructions text not null,
  media_url text,
  media_type text default 'image', -- image, gif, video
  difficulty text default 'Iniciante', -- Iniciante, Intermediário, Avançado
  category text default 'Tradicional', -- Tradicional, Acrobático, Tesouras, Pontas
  is_published boolean default false,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 13. HISTORY ENTRIES (História do Frevo)
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
  is_published boolean default false,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 14. MAP POINTS (Mapa Cultural)
create table if not exists public.map_points (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text not null,
  address text not null,
  latitude double precision not null,
  longitude double precision not null,
  image_url text,
  category text default 'Patrimônio', -- Museu, Polo de Carnaval, Agremiação, Marco Histórico, Espaço Cultural
  period_label text,
  source_text text,
  source_url text,
  is_published boolean default false,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- ==============================================================================
-- INDEXES FOR PERFORMANCE
-- ==============================================================================
create index if not exists idx_posts_status_published on public.posts (status, published_at desc);
create index if not exists idx_posts_type on public.posts (type);
create index if not exists idx_artists_slug on public.artists (slug);
create index if not exists idx_artists_published on public.artists (is_published);
create index if not exists idx_songs_artist on public.songs (artist_id);
create index if not exists idx_songs_status on public.songs (status);
create index if not exists idx_comments_post on public.comments (post_id, created_at desc);
create index if not exists idx_follows_artist on public.follows (artist_id);
create index if not exists idx_map_points_coords on public.map_points (latitude, longitude);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

alter table public.profiles enable row level security;
alter table public.artists enable row level security;
alter table public.artist_permissions enable row level security;
alter table public.songs enable row level security;
alter table public.song_versions enable row level security;
alter table public.posts enable row level security;
alter table public.post_likes enable row level security;
alter table public.comments enable row level security;
alter table public.follows enable row level security;
alter table public.frevo_steps enable row level security;
alter table public.history_entries enable row level security;
alter table public.map_points enable row level security;

-- Helper function to check if user is admin
create or replace function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
end;
$$ language plpgsql security definer;

-- Helper function to check if user owns artist record
create or replace function public.is_artist_owner(artist_id uuid)
returns boolean as $$
begin
  return exists (
    select 1 from public.artists
    where id = artist_id and profile_id = auth.uid()
  );
end;
$$ language plpgsql security definer;

-- PROFILES RLS
create policy "Public profiles are readable by everyone"
  on public.profiles for select using (true);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- ARTISTS RLS
create policy "Published artists are readable by everyone"
  on public.artists for select using (is_published = true or is_artist_owner(id) or is_admin());

create policy "Admins can manage artists"
  on public.artists for all using (is_admin());

create policy "Artists can update own details"
  on public.artists for update using (is_artist_owner(id));

-- ARTIST PERMISSIONS RLS
create policy "Artist permissions readable by owner and admin"
  on public.artist_permissions for select using (is_artist_owner(artist_id) or is_admin());

create policy "Admins can manage artist permissions"
  on public.artist_permissions for all using (is_admin());

-- SONGS RLS
create policy "Published songs are readable by everyone"
  on public.songs for select using (status = 'published' or is_artist_owner(artist_id) or is_admin());

create policy "Artists can submit songs for own profile"
  on public.songs for insert with check (
    is_artist_owner(artist_id) or is_admin()
  );

create policy "Artists can update own drafts and pending songs"
  on public.songs for update using (
    (is_artist_owner(artist_id) and status in ('draft', 'pending_review')) or is_admin()
  );

-- POSTS RLS
create policy "Published posts are readable by everyone"
  on public.posts for select using (status = 'published' or auth.uid() = author_id or is_admin());

create policy "Admins and Authors can create posts"
  on public.posts for insert with check (auth.uid() = author_id or is_admin());

create policy "Authors can edit own unpublished posts and Admins can edit all"
  on public.posts for update using (auth.uid() = author_id or is_admin());

-- POST LIKES RLS
create policy "Likes are readable by everyone"
  on public.post_likes for select using (true);

create policy "Authenticated users can toggle their likes"
  on public.post_likes for insert with check (auth.uid() = user_id);

create policy "Users can delete their own likes"
  on public.post_likes for delete using (auth.uid() = user_id);

-- COMMENTS RLS
create policy "Visible comments are readable by everyone"
  on public.comments for select using (status = 'visible' or auth.uid() = user_id or is_admin());

create policy "Authenticated users can insert comments"
  on public.comments for insert with check (auth.uid() = user_id);

create policy "Users can update or delete their own comments"
  on public.comments for update using (auth.uid() = user_id);

create policy "Users can delete own comments, admin can delete any"
  on public.comments for delete using (auth.uid() = user_id or is_admin());

-- FOLLOWS RLS
create policy "Follows are readable by everyone"
  on public.follows for select using (true);

create policy "Users can follow artists"
  on public.follows for insert with check (auth.uid() = follower_id);

create policy "Users can unfollow artists"
  on public.follows for delete using (auth.uid() = follower_id);

-- FREVO STEPS, HISTORY & MAP POINTS RLS
create policy "Published steps are readable by everyone"
  on public.frevo_steps for select using (is_published = true or is_admin());

create policy "Admins can manage steps"
  on public.frevo_steps for all using (is_admin());

create policy "Published history is readable by everyone"
  on public.history_entries for select using (is_published = true or is_admin());

create policy "Admins can manage history"
  on public.history_entries for all using (is_admin());

create policy "Published map points are readable by everyone"
  on public.map_points for select using (is_published = true or is_admin());

create policy "Admins can manage map points"
  on public.map_points for all using (is_admin());
