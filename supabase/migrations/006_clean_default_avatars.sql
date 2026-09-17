-- ==============================================================================
-- MIGRAÇÃO 006: Remoção de foto padrão genérica de avatar
-- Garante que novos cadastros e perfis existentes sem foto própria tenham avatar_url = NULL,
-- permitindo que a interface utilize o placeholder neutro em SVG (silhueta minimalista).
-- ==============================================================================

-- 1. Remover default de avatar_url na tabela profiles
alter table public.profiles alter column avatar_url drop default;

-- 2. Limpar a foto da modelo Unsplash de perfis existentes no banco
update public.profiles 
set avatar_url = null, updated_at = now()
where avatar_url like '%photo-1534528741775-53994a69daeb%'
   or avatar_url = '';

-- 3. Atualizar trigger handle_new_user para não gravar foto padrão genérica
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
  d_handle text;
  base_handle text;
  final_handle text;
  counter int := 0;
begin
  begin
    d_name := coalesce(
      new.raw_user_meta_data->>'display_name',
      new.raw_user_meta_data->>'name',
      new.raw_user_meta_data->>'full_name',
      split_part(new.email, '@', 1),
      'Folião'
    );

    -- Pega foto do Google se existir; senão, mantém NULL
    d_avatar := coalesce(
      new.raw_user_meta_data->>'avatar_url',
      new.raw_user_meta_data->>'picture',
      null
    );

    if (new.raw_user_meta_data->>'role' = 'admin') then
      d_role := 'admin';
    elsif (new.raw_user_meta_data->>'role' = 'artist') then
      d_role := 'artist';
    else
      d_role := 'user';
    end if;

    -- Obter ou gerar @handle único
    if new.raw_user_meta_data->>'handle' is not null and trim(new.raw_user_meta_data->>'handle') != '' then
      d_handle := trim(new.raw_user_meta_data->>'handle');
      if not d_handle like '@%' then
        d_handle := '@' || d_handle;
      end if;
    else
      base_handle := '@' || lower(regexp_replace(split_part(new.email, '@', 1), '[^a-z0-9_]', '', 'g'));
      if length(base_handle) < 4 then
        base_handle := '@foliao_' || substr(new.id::text, 1, 4);
      end if;
      final_handle := base_handle;
      while exists (select 1 from public.profiles where handle = final_handle) loop
        counter := counter + 1;
        final_handle := base_handle || counter::text;
      end loop;
      d_handle := final_handle;
    end if;

    insert into public.profiles (
      id,
      display_name,
      handle,
      avatar_url,
      bio,
      role,
      artist_id,
      artist_request_status,
      created_at,
      updated_at
    )
    values (
      new.id,
      d_name,
      d_handle,
      d_avatar,
      '',
      d_role,
      null,
      coalesce(new.raw_user_meta_data->>'artist_request_status', 'none'),
      now(),
      now()
    )
    on conflict (id) do update set
      display_name = coalesce(excluded.display_name, public.profiles.display_name),
      handle = coalesce(public.profiles.handle, excluded.handle),
      avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
      updated_at = now();

  exception
    when others then
      raise warning '[handle_new_user] Erro ao sincronizar profile para user %: %', new.id, SQLERRM;
  end;

  return new;
end;
$$;
