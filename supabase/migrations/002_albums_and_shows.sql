-- ==============================================================================
-- MIGRATION 002: ALBUMS, ARTIST SHOWS & EXTENDED AUDIO PLAYLIST METADATA
-- ==============================================================================

-- 1. ALBUMS TABLE
create table if not exists public.albums (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid not null references public.artists(id) on delete cascade,
  title text not null,
  slug text not null,
  cover_url text,
  release_year integer default 2026,
  description text,
  tracks_count integer default 1,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- 2. ARTIST SHOWS / EVENTS (AGENDA CULTURAL)
create table if not exists public.artist_events (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid not null references public.artists(id) on delete cascade,
  event_name text not null,
  venue_name text not null,
  city text default 'Recife, PE',
  event_date date not null,
  event_time text default '20:00',
  ticket_url text,
  is_published boolean default true,
  created_at timestamptz not null default timezone('utc'::text, now())
);

-- 3. EXTEND SONGS TABLE WITH AUDIO ATTRIBUTES
alter table public.songs add column if not exists audio_url text;
alter table public.songs add column if not exists album_id uuid references public.albums(id) on delete set null;
alter table public.songs add column if not exists plays_count integer default 0;
alter table public.songs add column if not exists duration_seconds integer default 180;
alter table public.songs add column if not exists is_popular boolean default false;
alter table public.songs add column if not exists score_pdf_url text;

-- 4. RLS FOR ALBUMS AND EVENTS
alter table public.albums enable row level security;
alter table public.artist_events enable row level security;

create policy "Public albums are readable by everyone"
  on public.albums for select using (true);

create policy "Artists can manage own albums"
  on public.albums for all using (is_artist_owner(artist_id) or is_admin());

create policy "Public events are readable by everyone"
  on public.artist_events for select using (is_published = true or is_artist_owner(artist_id) or is_admin());

create policy "Artists can manage own events"
  on public.artist_events for all using (is_artist_owner(artist_id) or is_admin());
