-- Run this file once in Supabase Dashboard > SQL Editor.
-- It creates a secure, single-record CMS for this portfolio.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_portfolio_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;

create table if not exists public.portfolio_content (
  id text primary key default 'primary' check (id = 'primary'),
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;

drop policy if exists "Public can read portfolio content" on public.portfolio_content;
create policy "Public can read portfolio content" on public.portfolio_content for select using (true);

drop policy if exists "Admins can create portfolio content" on public.portfolio_content;
create policy "Admins can create portfolio content" on public.portfolio_content for insert to authenticated with check (public.is_portfolio_admin());

drop policy if exists "Admins can update portfolio content" on public.portfolio_content;
create policy "Admins can update portfolio content" on public.portfolio_content for update to authenticated using (public.is_portfolio_admin()) with check (public.is_portfolio_admin());

insert into public.portfolio_content (id, content) values ('primary', '{}'::jsonb)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public) values ('portfolio-images', 'portfolio-images', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can view portfolio images" on storage.objects;
create policy "Public can view portfolio images" on storage.objects for select using (bucket_id = 'portfolio-images');

drop policy if exists "Admins can upload portfolio images" on storage.objects;
create policy "Admins can upload portfolio images" on storage.objects for insert to authenticated with check (bucket_id = 'portfolio-images' and public.is_portfolio_admin());

drop policy if exists "Admins can update portfolio images" on storage.objects;
create policy "Admins can update portfolio images" on storage.objects for update to authenticated using (bucket_id = 'portfolio-images' and public.is_portfolio_admin()) with check (bucket_id = 'portfolio-images' and public.is_portfolio_admin());

drop policy if exists "Admins can delete portfolio images" on storage.objects;
create policy "Admins can delete portfolio images" on storage.objects for delete to authenticated using (bucket_id = 'portfolio-images' and public.is_portfolio_admin());

-- After you create your administrator in Authentication > Users, run this once.
-- Replace the email below with your own admin email address.
-- insert into public.admin_users (user_id)
-- select id from auth.users where email = 'your-admin-email@example.com'
-- on conflict do nothing;
