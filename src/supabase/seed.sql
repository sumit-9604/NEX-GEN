-- Create courses table with rich metadata
create table if not exists courses (
  id                uuid primary key default gen_random_uuid(),
  title             text not null,
  description       text,
  progress          integer not null default 0,
  icon_name         text not null,
  category          text default 'Development',
  total_lessons     integer default 20,
  completed_lessons integer default 0,
  duration          text default '10h',
  level             text default 'Intermediate',
  created_at        timestamptz default now()
);

-- Enable RLS
alter table courses enable row level security;

-- Public read policy
drop policy if exists "Public read" on courses;
create policy "Public read"
  on courses for select using (true);

-- Seed data — 12 showcase courses
insert into courses (title, description, progress, icon_name, category, total_lessons, completed_lessons, duration, level) values
  ('Advanced React & Next.js Masterclass', 'Master React 19, Server Components, Suspense, and state management patterns.', 78, 'code', 'Development', 32, 25, '14h 20m', 'Advanced'),
  ('UI/UX Design Systems & Glassmorphism', 'Design stunning modern web components, color theory, and dark mode aesthetics.', 45, 'design', 'Design', 20, 9, '8h 45m', 'Intermediate'),
  ('Data Engineering & Analytics Architecture', 'Build robust data pipelines, PostgreSQL indexing, and real-time visualization dashboards.', 92, 'data', 'Data Science', 28, 26, '12h 10m', 'Advanced'),
  ('Cloud Native DevOps & Kubernetes', 'Deploy scalable microservices with Docker, Kubernetes, CI/CD, and Supabase integration.', 30, 'cloud', 'DevOps', 24, 7, '10h 30m', 'Intermediate'),
  ('React Native & Cross-Platform Mobile', 'Create sleek native mobile apps with shared logic and animated interactions.', 60, 'mobile', 'Mobile', 18, 11, '7h 15m', 'Beginner'),
  ('Full-Stack AI Application Development', 'Integrate LLM APIs, vector stores, and automated agents into production web applications.', 15, 'code', 'AI & ML', 40, 6, '18h 00m', 'Advanced'),
  ('Ethical Hacking & Cybersecurity Defense', 'Learn penetration testing, OWASP Top 10 vulnerabilities, and security auditing.', 50, 'code', 'Development', 26, 13, '11h 20m', 'Intermediate'),
  ('Machine Learning with Python & PyTorch', 'Build neural networks, image classifiers, and natural language models from scratch.', 85, 'data', 'AI & ML', 35, 30, '16h 40m', 'Advanced'),
  ('Distributed Systems & System Design', 'Design high-availability architectures, load balancing, caching, and sharding strategies.', 40, 'cloud', 'DevOps', 22, 9, '9h 50m', 'Advanced'),
  ('Web3 & Smart Contract Engineering', 'Develop decentralized applications, Solidity smart contracts, and Web3 frontend integrations.', 25, 'code', 'Development', 25, 6, '10h 15m', 'Intermediate'),
  ('PostgreSQL Performance & Query Tuning', 'Master EXPLAIN ANALYZE, query execution plans, connection pooling, and table partitioning.', 70, 'data', 'Data Science', 16, 11, '6h 40m', 'Advanced'),
  ('Product Management for Tech Leaders', 'Formulate product strategy, run user discovery sprints, and define technical roadmaps.', 100, 'design', 'Design', 15, 15, '5h 30m', 'Beginner')
on conflict do nothing;