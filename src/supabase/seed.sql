-- Create table
create table if not exists courses (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  progress   integer not null default 0,
  icon_name  text not null,
  created_at timestamptz default now()
);

-- Enable RLS
alter table courses enable row level security;

-- Public read policy
create policy "Public read"
  on courses for select using (true);

-- Seed data — icon_name must be exact Lucide component names
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns',   75, 'Code2'),
  ('UI/UX Design Fundamentals', 45, 'Palette'),
  ('Data Science Essentials',   30, 'BarChart3'),
  ('Full Stack Development',    60, 'Code2'),
  ('Cloud Computing Basics',    20, 'Cloud'),
  ('Mobile App Development',    15, 'Smartphone');