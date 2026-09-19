-- ==============================================================================
-- FREVAI - SCHEMA COMPLETO PARA AMAZON AURORA POSTGRESQL SERVERLESS V2
-- Região: sa-east-1 (São Paulo) | Projeto: 196156785860
-- ==============================================================================

-- 1. EXTENSÕES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TIPOS E ENUMS
DO $$ BEGIN
  CREATE TYPE user_role AS ENUM ('user', 'artist', 'admin');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE post_type AS ENUM ('event', 'news', 'music', 'score', 'culture', 'artist');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE content_status AS ENUM ('draft', 'pending_review', 'published', 'archived');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- 3. PERFIS DE USUÁRIOS (Vinculado ao Amazon Cognito sub / ID)
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY, -- Cognito Sub / UUID
  display_name TEXT NOT NULL,
  handle TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  phone TEXT,
  role user_role NOT NULL DEFAULT 'user',
  artist_id TEXT,
  artist_request_status TEXT DEFAULT 'none',
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. ARTISTAS E AGREMIAÇÕES
CREATE TABLE IF NOT EXISTS public.artists (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  profile_id TEXT REFERENCES public.profiles(id) ON DELETE SET NULL,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  genre TEXT DEFAULT 'Frevo de Rua',
  bio TEXT,
  avatar_url TEXT,
  cover_url TEXT,
  instagram_url TEXT,
  youtube_url TEXT,
  website_url TEXT,
  is_authorized_editor BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. ÁLBUNS E DISCOGRAFIA
CREATE TABLE IF NOT EXISTS public.albums (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  artist_id TEXT NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  release_year INT NOT NULL,
  cover_url TEXT,
  tracks_count INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. MÚSICAS, LETRAS E PARTITURAS
CREATE TABLE IF NOT EXISTS public.songs (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  artist_id TEXT NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
  album_id TEXT REFERENCES public.albums(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  genre TEXT DEFAULT 'Frevo de Rua',
  description TEXT,
  lyrics TEXT,
  audio_url TEXT, -- URL direta no Amazon S3
  score_file TEXT, -- URL da partitura PDF no Amazon S3
  cover_url TEXT, -- Capa no Amazon S3
  duration_seconds INT DEFAULT 0,
  plays_count INT DEFAULT 0,
  downloads_count INT DEFAULT 0,
  allow_download BOOLEAN DEFAULT true,
  is_popular BOOLEAN DEFAULT false,
  status content_status DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 7. SHOWS E APRESENTAÇÕES
CREATE TABLE IF NOT EXISTS public.shows (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  artist_id TEXT NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  venue TEXT NOT NULL,
  city TEXT NOT NULL DEFAULT 'Recife - PE',
  date DATE NOT NULL,
  time TIME NOT NULL,
  ticket_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 8. FEED CULTURAL (POSTS E NOTÍCIAS)
CREATE TABLE IF NOT EXISTS public.posts (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  author_id TEXT REFERENCES public.profiles(id) ON DELETE SET NULL,
  title TEXT,
  content TEXT NOT NULL,
  media_url TEXT, -- Imagem ou Vídeo no Amazon S3
  media_type TEXT DEFAULT 'image', -- 'image' | 'video'
  post_type post_type DEFAULT 'culture',
  likes_count INT DEFAULT 0,
  comments_count INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 9. COMENTÁRIOS E CURTIDAS
CREATE TABLE IF NOT EXISTS public.comments (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  post_id TEXT NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.post_likes (
  post_id TEXT NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (post_id, user_id)
);

-- 10. MAPA CULTURAL & PASSOS DO FREVO
CREATE TABLE IF NOT EXISTS public.map_points (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  address TEXT NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.steps (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  name TEXT NOT NULL,
  difficulty TEXT DEFAULT 'Iniciante',
  category TEXT DEFAULT 'Tradicional',
  description TEXT,
  instructions TEXT,
  video_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 11. SOLICITAÇÕES ARTÍSTICAS & NOTIFICAÇÕES
CREATE TABLE IF NOT EXISTS public.artist_requests (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  requested_name TEXT NOT NULL,
  genre TEXT NOT NULL,
  whatsapp TEXT,
  status TEXT DEFAULT 'pending',
  rejection_reason TEXT,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.notifications (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  user_id TEXT REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);
