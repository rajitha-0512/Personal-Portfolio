
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  tech_stack text[] not null default '{}',
  image_url text,
  github_url text,
  live_url text,
  display_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.projects enable row level security;
create policy "Projects are viewable by everyone" on public.projects for select using (true);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);
alter table public.contact_messages enable row level security;
create policy "Anyone can submit contact messages" on public.contact_messages for insert with check (
  char_length(name) between 1 and 100
  and char_length(email) between 3 and 255
  and char_length(message) between 1 and 2000
);

insert into public.projects (title, description, tech_stack, github_url, live_url, display_order)
values ('MediBook', 'Online OP management system that informs patients about their OP status and queue updates in real time.', ARRAY['HTML','CSS','TypeScript'], 'https://github.com/', '#', 1);
