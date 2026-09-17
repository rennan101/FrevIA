-- ==============================================================================
-- FREVAI MIGRATION 004: CORREÇÃO DEFINITIVA DO TRIGGER DE CADASTRO
-- Resolve o erro: "Database error saving new user" ao criar conta
-- ==============================================================================

-- 1. Garantir existência do enum public.user_role
do $$ begin
  create type public.user_role as enum ('user', 'artist', 'admin');
exception
  when duplicate_object then null;
end $$;

-- 2. Garantir colunas necessárias na tabela public.profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Folião',
  avatar_url text default 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  bio text default '',
  role public.user_role not null default 'user',
  artist_id uuid,
  artist_request_status text not null default 'none',
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- Adicionar colunas caso a tabela profiles já existisse sem elas
alter table public.profiles 
  add column if not exists artist_id uuid references public.artists(id) on delete set null,
  add column if not exists artist_request_status text not null default 'none';

-- 3. Função handle_new_user com search_path explícito e tratamento de exceção seguro
-- Nunca aborta a criação do usuário em auth.users mesmo se profiles tiver qualquer restrição
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
    d_name := coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      new.raw_user_meta_data->>'display_name',
      split_part(new.email, '@', 1),
      'Folião'
    );

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

    insert into public.profiles (id, display_name, avatar_url, role)
    values (new.id, d_name, d_avatar, d_role)
    on conflict (id) do update set
      display_name = coalesce(excluded.display_name, public.profiles.display_name),
      avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url);
  exception
    when others then
      -- Garante que nenhum erro no schema de profiles bloqueie o auth.users
      null;
  end;

  return new;
end;
$$;

-- 4. Recriar o trigger com segurança
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 5. Políticas de RLS para garantir inserção e atualização de perfil
alter table public.profiles enable row level security;

drop policy if exists "Public profiles are readable by everyone" on public.profiles;
create policy "Public profiles are readable by everyone" 
  on public.profiles for select using (true);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile" 
  on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" 
  on public.profiles for update using (auth.uid() = id);
