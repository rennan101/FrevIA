-- ==============================================================================
-- FREVAI MIGRATION 005: @HANDLE ÚNICO & CORREÇÃO DE SOLICITAÇÕES DE ARTISTA
-- ==============================================================================

-- 1. ADICIONAR COLUNA HANDLE NA TABELA PROFILES (SE NÃO EXISTIR)
alter table public.profiles 
  add column if not exists handle text,
  add column if not exists artist_id uuid references public.artists(id) on delete set null,
  add column if not exists artist_request_status text not null default 'none';

-- 2. PREENCHER HANDLES NULOS ANTES DE APLICAR ÍNDICE ÚNICO
update public.profiles
set handle = '@' || lower(regexp_replace(coalesce(display_name, 'foliao_' || substr(id::text, 1, 6)), '[^a-zA-Z0-9_]', '', 'g'))
where handle is null or handle = '';

-- 3. CRIAR ÍNDICE ÚNICO CASE-INSENSITIVE PARA @HANDLE
create unique index if not exists idx_profiles_handle_lower on public.profiles (lower(handle));

-- 4. FUNÇÃO AUXILIAR DE SEGURANÇA PARA CHECAGEM DE ADMIN (SEM RECURSÃO RLS)
create or replace function public.is_admin(uid uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = uid and role = 'admin'
  );
$$;

-- 5. TABELA ARTIST_REQUESTS (GARANTIR ESTRUTURA E RLS APROPRIADO)
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

alter table public.artist_requests enable row level security;

-- Políticas de RLS para artist_requests:
drop policy if exists "Users and admins can view artist requests" on public.artist_requests;
drop policy if exists "Users can see their own artist requests" on public.artist_requests;
create policy "Users and admins can view artist requests"
  on public.artist_requests for select
  using (
    auth.uid() = user_id 
    or public.is_admin(auth.uid())
    or auth.uid() is null -- permite leitura anônima/fallback se configurado
  );

drop policy if exists "Users can create their artist request" on public.artist_requests;
create policy "Users can create their artist request"
  on public.artist_requests for insert
  with check (true); -- permite inserção de solicitações durante ou após o signup

drop policy if exists "Admins can update artist requests" on public.artist_requests;
create policy "Admins can update artist requests"
  on public.artist_requests for update
  using (public.is_admin(auth.uid()) or auth.uid() is null);

-- 6. ATUALIZAR TRIGGER HANDLE_NEW_USER COM SUPORTE A @HANDLE E SOLICITAÇÃO AUTOMÁTICA
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  d_name text;
  d_handle text;
  d_avatar text;
  d_role public.user_role := 'user';
  is_applicant text;
begin
  begin
    d_name := coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      new.raw_user_meta_data->>'display_name',
      split_part(new.email, '@', 1),
      'Folião'
    );

    d_handle := coalesce(
      new.raw_user_meta_data->>'handle',
      '@' || lower(regexp_replace(split_part(new.email, '@', 1), '[^a-zA-Z0-9_]', '', 'g'))
    );
    if not (d_handle like '@%') then
      d_handle := '@' || d_handle;
    end if;

    d_avatar := coalesce(
      new.raw_user_meta_data->>'avatar_url',
      new.raw_user_meta_data->>'picture',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    );

    if (new.raw_user_meta_data->>'role' = 'admin') then
      d_role := 'admin';
    elsif (new.raw_user_meta_data->>'role' = 'artist') then
      d_role := 'artist';
    else
      d_role := 'user';
    end if;

    insert into public.profiles (id, display_name, handle, avatar_url, role)
    values (new.id, d_name, d_handle, d_avatar, d_role)
    on conflict (id) do update set
      display_name = coalesce(excluded.display_name, public.profiles.display_name),
      handle = coalesce(public.profiles.handle, excluded.handle),
      avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
      updated_at = now();

    -- Se o usuário optou por solicitar perfil de artista durante o cadastro:
    is_applicant := coalesce(new.raw_user_meta_data->>'is_artist_applicant', 'false');
    if (is_applicant = 'true') then
      insert into public.artist_requests (
        user_id,
        requested_name,
        genre,
        whatsapp,
        status
      ) values (
        new.id,
        coalesce(new.raw_user_meta_data->>'artist_name', d_name),
        coalesce(new.raw_user_meta_data->>'artist_genre', 'Frevo de Rua'),
        coalesce(new.raw_user_meta_data->>'artist_whatsapp', ''),
        'pending'
      );

      update public.profiles
      set artist_request_status = 'pending'
      where id = new.id;
    end if;

  exception
    when others then
      -- Se ocorrer qualquer erro, registra aviso nos logs e não bloqueia a criação do usuário
      raise warning 'Erro no trigger handle_new_user: %', SQLERRM;
  end;

  return new;
end;
$$;
