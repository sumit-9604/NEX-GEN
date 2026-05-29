# NexLearn — Futuristic Student Dashboard

A next-generation student dashboard built with Next.js 15 App Router, Supabase, and Framer Motion.

---

## Tech Stack

- **Next.js 15.5** — App Router, React Server Components, dynamic rendering
- **Supabase** — PostgreSQL database with `@supabase/ssr` for server-side auth
- **Tailwind CSS** — utility-first dark-mode-only styling with custom glass morphism
- **Framer Motion** — spring physics animations, 3D tilt effects, staggered entrances
- **Lucide React** — dynamic icon rendering via `icon_name` field from database
- **TypeScript** — strict types throughout

---

## Architecture

### Server / Client Component Split

The biggest architectural challenge was correctly separating server and client components in App Router.

| Component | Type | Reason |
|---|---|---|
| `CourseCards.tsx` | Server Component | Fetches Supabase data at request time — zero client JS for data fetching |
| `CourseCard.tsx` | Client Component | Uses Framer Motion, `useState`, mouse event handlers |
| `CoursePageHeader.tsx` | Client Component | Uses `motion` from framer-motion |
| `ActivityGraph.tsx` | Client Component | Interactive, uses hooks |
| `Sidebar.tsx` | Client Component | Navigation state, interactivity |

The key rule followed throughout: **a client component cannot import a server component.** Pages that needed both (like `/courses`) were split — the page itself is a server component, and animated headers were extracted into dedicated `'use client'` components.

### Supabase Integration

- `src/supabase/server.ts` uses `@supabase/ssr` with `createServerClient` and Next.js `cookies()` from `next/headers`
- This only works in App Router (not `pages/`) — a hard requirement that drove the migration from `pages/` to `app/`
- Routes that read cookies are marked `export const dynamic = 'force-dynamic'` to prevent static rendering errors at build time
- Graceful error handling with empty array fallbacks so the UI never crashes on fetch failure

### Routing

All routes live under `app/` following Next.js 15 App Router conventions:

```
app/
  courses/page.tsx
  analytics/page.tsx
  messages/page.tsx
  schedule/page.tsx
  settings/page.tsx
  help/page.tsx
  layout.tsx
```

### Animation Strategy

- All animations use `transform` and `opacity` only — zero layout shifts
- Progress bars animate via `width` spring from `0` to `course.progress%`
- `CourseCard` uses `useMotionValue` + `useTransform` for 3D tilt on mouse move
- Staggered card entrance with `delay: index * 0.1`
- Particle burst effect on card hover using conditional rendering

### Responsive Design

- Desktop: full sidebar (240px) + 3-column course grid
- Tablet: collapsed sidebar (icon-only) + 2-column grid
- Mobile: hidden sidebar + bottom navigation + single column

---

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
3. Run the SQL in `supabase/seed.sql` in your Supabase SQL editor
4. `npm install && npm run dev`

---

## Challenges & Fixes

**`pages/` vs `app/` conflict** — `next/headers` (used by `server.ts`) is App Router only. Migrated all routes from `pages/` to `app/` to resolve webpack build errors.

**Static rendering + cookies** — Next.js 15 tries to statically render pages at build time. Routes using `cookies()` must opt out with `export const dynamic = 'force-dynamic'`.

**Client component wrapping server components** — original page files had `'use client'` at the top but also rendered server components like `CourseCards`. Fixed by removing `'use client'` from pages and extracting animated headers into separate client components.

**Next.js 15 config change** — `experimental.serverComponentsExternalPackages` was promoted to top-level `serverExternalPackages` in Next.js 15.

---

## Deployment

Deployed on Vercel. Environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) must be set in Vercel project settings under **Settings → Environment Variables**.
