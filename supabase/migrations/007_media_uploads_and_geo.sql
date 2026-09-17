-- ==============================================================================
-- FREVAI MIGRATION 007: UPLOADS DE MÍDIA (VÍDEO/IMAGEM) E COORDENADAS PRECISAS
-- ==============================================================================

-- 1. ADICIONAR SUPORTE A VÍDEO E TIPO DE MÍDIA EM POSTS
alter table public.posts 
  add column if not exists media_url text,
  add column if not exists media_type text default 'image'; -- 'image' ou 'video'

-- 2. ADICIONAR SUPORTE A MÍDIA EM HISTÓRIA DO FREVO (HISTORY_ENTRIES)
alter table public.history_entries
  add column if not exists media_url text,
  add column if not exists media_type text default 'image'; -- 'image' ou 'video'

-- 3. GARANTIR CAMPOS EM PASSOS DO FREVO (FREVO_STEPS)
alter table public.frevo_steps
  add column if not exists media_url text,
  add column if not exists media_type text default 'image'; -- 'image' ou 'video'

-- 4. ATUALIZAR POLÍTICAS DO STORAGE PARA SUPORTAR VÍDEOS E IMAGENS
-- Adiciona suporte a bucket 'media' além de 'covers', 'scores' e 'avatars'
insert into storage.buckets (id, name, public)
values 
  ('media', 'media', true)
on conflict (id) do update set public = true;

drop policy if exists "Public media access" on storage.objects;
create policy "Public media access" on storage.objects
  for select using (bucket_id in ('media', 'covers', 'scores', 'avatars'));

drop policy if exists "Authenticated media uploads" on storage.objects;
create policy "Authenticated media uploads" on storage.objects
  for insert with check (bucket_id in ('media', 'covers', 'scores', 'avatars'));

drop policy if exists "Public uploads fallback" on storage.objects;
create policy "Public uploads fallback" on storage.objects
  for insert with check (true);
