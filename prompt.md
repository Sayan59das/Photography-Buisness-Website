# Photography Business Website — Build Spec

## 1. Analysis of Reference Sites

Both **Safarsaga Films** and **Red Veds** are WordPress/Elementor wedding-photography sites. Common strengths and weaknesses:

**Strengths worth keeping:**
- Big, photo-first hero sections — the work sells itself
- Clear portfolio/gallery grids organized by shoot
- Testimonials and Instagram social proof
- Direct WhatsApp/call CTA for a service business

**Weaknesses to fix:**
- Slow load (unoptimized images, heavy plugin bloat)
- No dark mode, no real theme system
- Cluttered/duplicated navigation menus
- Generic slider animations, weak micro-interactions
- No real booking/inquiry flow — just a static contact form
- Poor mobile-first design (feels like a shrunk desktop layout)
- No structured SEO per shoot/category (bad for "wedding photographer in X city" search intent)
- No admin/CMS control visible to the business owner beyond WordPress backend

**Goal for the new site:** A fast, cinematic, image-forward site with buttery animations, true light/dark themes, a real inquiry/booking pipeline, and an admin dashboard so the photographer can update the portfolio without a developer.

---

## 2. Recommended Tech Stack

### Frontend
- **Next.js 15 (App Router) + TypeScript** — SSR/SSG for SEO, fast image-heavy pages
- **Tailwind CSS v4** — utility styling, easy theme tokens
- **shadcn/ui** — accessible base components (dialogs, forms, nav)
- **Framer Motion** — page transitions, scroll reveals, hero parallax
- **Lenis** — smooth/inertia scrolling (the "premium studio" feel)
- **next/image** + **Cloudinary or Imgix** — automatic image optimization, responsive srcsets, blur-up placeholders
- **next-themes** — light/dark theme toggle with system-preference detection, no flash-of-wrong-theme
- **Embla Carousel** or **Swiper** — portfolio/testimonial carousels
- **React Hook Form + Zod** — booking/contact form validation

### Backend
- **Node.js + Next.js API routes / Route Handlers** (or a separate **NestJS** service if you want backend fully decoupled)
- **PostgreSQL** via **Prisma ORM** — portfolio items, categories, bookings, testimonials, blog
- **NextAuth.js (Auth.js)** — admin login for the photographer's dashboard
- **Cloudinary SDK** — image/video upload, transformation, storage
- **Resend or Nodemailer + SMTP** — booking confirmation & inquiry emails
- **Zod** — shared validation schema between frontend and API

### Admin / CMS
- Either:
  - **Custom admin dashboard** (Next.js protected routes) for full control, or
  - **Sanity.io / Payload CMS** if you want a ready-made content editor without building one from scratch (recommended if you're not deeply technical — faster to ship)

### Infra / Deployment
- **Vercel** (frontend + API routes) — best fit for Next.js, free SSL, edge caching
- **Neon or Supabase** — managed Postgres
- **Cloudinary** — media CDN
- **Plausible or Vercel Analytics** — privacy-friendly traffic analytics
- **Upstash Redis** (optional) — rate-limit the contact form, cache popular galleries

### Why this stack
- Next.js + Vercel = near-instant image-heavy pages, great Core Web Vitals, strong SEO out of the box (crucial for local search like "wedding photographer in Chandigarh")
- Prisma + Postgres = structured, queryable portfolio/booking data instead of static WordPress posts
- Cloudinary = the single biggest lever for a photography site — auto-format (WebP/AVIF), auto-crop, lazy loading
- Framer Motion + Lenis = the "expensive studio" feel you're describing, without hand-rolling animation code

---

## 3. Site Structure / Pages

1. **Home** — full-bleed video/image hero, featured work strip, about teaser, services teaser, testimonials, Instagram feed, CTA footer
2. **Portfolio** — filterable by category (Wedding, Pre-Wedding, Maternity, Fashion, Events, Commercial), masonry grid, lightbox with keyboard/swipe nav
3. **Individual Shoot / Story page** — dynamic route `/portfolio/[slug]`, full story gallery + short narrative (good for SEO long-tail)
4. **Services & Packages** — service cards with pricing tiers (or "starting at ₹X, get custom quote")
5. **About** — team, philosophy, behind-the-scenes
6. **Videos/Films** — embedded reels (YouTube/Vimeo lazy-loaded, not autoplaying heavy embeds)
7. **Blog** (optional, for SEO) — wedding planning tips, location guides
8. **Contact / Book a Shoot** — multi-step inquiry form (event type → date → location → budget → contact info), WhatsApp deep link, embedded map
9. **Admin Dashboard** (auth-gated, `/studio` or `/admin`) — upload/manage portfolio items, view & respond to bookings, manage testimonials

---

## 4. Theming (Light/Dark)

- Define design tokens once (CSS variables) — background, surface, text, accent, muted, border — and swap values per theme via `next-themes` + Tailwind's `dark:` variant
- **Light theme:** warm off-white background (#FAFAF8), charcoal text, one accent color (e.g. deep gold/burgundy — matches wedding-photography branding)
- **Dark theme:** near-black background (#0B0B0C), soft off-white text, same accent color popped against dark for contrast — gives the "premium editorial" look many photography portfolios use
- Persist user choice in localStorage, respect `prefers-color-scheme` on first visit
- Toggle should animate (icon morph, not a jarring flash) — Framer Motion `AnimatePresence` on the toggle icon

---

## 5. Animation & Interaction Ideas

- Hero: subtle Ken Burns zoom on background image/video, staggered fade-up on headline + CTA
- Scroll-triggered reveals on portfolio grid items (Framer Motion `whileInView`)
- Magnetic/hover-scale on portfolio thumbnails, cursor-follow caption on hover (desktop only)
- Page transitions: soft cross-fade between routes (Next.js + Framer Motion `AnimatePresence`)
- Smooth inertia scrolling via Lenis (matches Awwwards-style studio sites)
- Sticky nav that shrinks/blurs (`backdrop-blur`) on scroll, auto-hides on scroll-down / reveals on scroll-up
- Lightbox gallery with swipe gestures + keyboard arrows, image counter, smooth zoom transition from grid to full view
- Skeleton/blur-up loaders for images (never a blank flash)

Keep animations under ~400ms and respect `prefers-reduced-motion` — accessibility matters and it'll also make the site feel snappier, not gimmicky.

---

## 6. Frontend Build Prompt (copy-paste into Claude Code / Cursor / v0)

```
Build a Next.js 15 (App Router, TypeScript) photography studio website with the following requirements:

STACK: Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Lenis smooth-scroll, next-themes, next/image with a Cloudinary loader, React Hook Form + Zod, Embla Carousel.

THEME: Implement a light/dark theme system using next-themes and CSS variables (not hardcoded Tailwind colors), no flash-of-incorrect-theme on load, animated toggle in the navbar. Light theme = warm off-white background with charcoal text; dark theme = near-black background with off-white text; single shared accent color (deep gold, #C9A24B) used consistently across both themes for CTAs, links, and active states.

NAVIGATION: Single sticky navbar (no duplicate desktop/mobile logo blocks like typical WordPress themes), backdrop-blur on scroll, shrinks in height after scrolling past hero, auto-hides on scroll-down and reappears on scroll-up. Mobile: full-screen slide-in menu with staggered link animation. Links: Home, Portfolio, Services, About, Videos, Blog, Contact. Include theme toggle and a prominent "Book a Shoot" button styled differently from nav links.

PAGES:
1. Home — full-bleed hero (video or image carousel) with Ken Burns zoom effect and staggered fade-up text; featured work strip (6-8 images, hover scale + caption); services teaser (3-4 cards); about teaser with a portrait image; testimonial carousel; Instagram-style photo grid; footer CTA banner.
2. /portfolio — masonry/grid gallery, filterable by category via animated tab pills (Wedding, Pre-Wedding, Maternity, Events, Commercial), lightbox on click with swipe/keyboard navigation and image counter, infinite scroll or "load more" with skeleton loaders.
3. /portfolio/[slug] — individual shoot page: hero image, short narrative/story text, full image gallery for that shoot, "next shoot" navigation at the bottom, dynamic SEO metadata per shoot.
4. /services — pricing/package cards (Basic, Premium, Custom) with feature lists and a "Get Custom Quote" CTA.
5. /about — team bios, studio philosophy, timeline of milestones with scroll-triggered reveal animations.
6. /videos — responsive grid of lazy-loaded YouTube/Vimeo embeds (facade pattern — don't load the iframe until clicked, to keep initial load fast).
7. /contact — multi-step inquiry form (Step 1: event type, Step 2: date + location, Step 3: budget range, Step 4: contact details) built with React Hook Form + Zod validation, animated step transitions, WhatsApp deep-link button, embedded Google Map.

INTERACTIONS: Scroll-triggered fade/slide-in on all major sections using Framer Motion whileInView. Soft cross-fade page transitions via AnimatePresence. Magnetic hover-scale on portfolio thumbnails. All animations respect prefers-reduced-motion. Use blur-up placeholders for every image (never show a blank flash while loading).

PERFORMANCE: All images through next/image with a Cloudinary loader, responsive sizes, lazy loading below the fold, priority loading for the hero. Lighthouse target: 90+ on mobile for Performance, Accessibility, and SEO.

ACCESSIBILITY: Semantic HTML, proper alt text fields for every uploaded image, keyboard-navigable lightbox and menu, visible focus states, color contrast AA-compliant in both themes.

Structure the codebase with a clean /app directory, reusable /components (ui/ for shadcn primitives, sections/ for page blocks), /lib for utilities, and a typed API client in /lib/api.ts that will call the backend described separately.
```

---

## 7. Backend Build Prompt

```
Build a backend for a photography studio website using Next.js Route Handlers (or a standalone NestJS service if decoupling), TypeScript, PostgreSQL, and Prisma ORM.

DATABASE SCHEMA (Prisma):
- User (id, name, email, passwordHash, role [ADMIN/EDITOR], createdAt) — for admin dashboard auth via NextAuth (credentials provider)
- Category (id, name, slug) — e.g. Wedding, Pre-Wedding, Maternity, Events, Commercial
- Shoot (id, title, slug, categoryId, coverImageUrl, story text, location, shootDate, isFeatured, publishedAt, seoTitle, seoDescription)
- ShootImage (id, shootId, imageUrl, altText, sortOrder) — images uploaded via Cloudinary, store the returned secure_url and public_id
- Testimonial (id, clientName, eventType, quote, rating, imageUrl, isApproved, createdAt)
- Booking (id, name, email, phone, eventType, eventDate, location, budgetRange, message, status [NEW/CONTACTED/CONFIRMED/CLOSED], createdAt)
- Service (id, name, description, priceLabel, features string[], sortOrder)
- BlogPost (id, title, slug, excerpt, content, coverImageUrl, publishedAt, seoTitle, seoDescription) — optional

API ROUTES:
- GET /api/shoots?category=&page= — paginated, filterable portfolio list
- GET /api/shoots/[slug] — single shoot with images
- POST /api/bookings — public inquiry submission, validate with Zod, rate-limit by IP (Upstash Redis or in-memory for MVP), send confirmation email to client + notification email to studio owner via Resend
- GET /api/testimonials — approved testimonials only
- GET /api/services — service/package list
- Admin-only (protected by NextAuth session + role check):
  - POST/PATCH/DELETE /api/admin/shoots — create/edit/delete shoots and reorder images
  - POST /api/admin/upload — signed Cloudinary upload endpoint (generate a signed upload signature server-side, never expose the API secret to the client)
  - GET/PATCH /api/admin/bookings — view inquiries, update status
  - POST/PATCH/DELETE /api/admin/testimonials — manage testimonials

AUTH: NextAuth.js with a Credentials provider for the single studio admin account (or a small team), bcrypt-hashed passwords, JWT session strategy, middleware protecting all /admin and /api/admin/* routes.

VALIDATION: Shared Zod schemas between frontend forms and API route handlers so validation logic isn't duplicated.

EMAIL: On new booking, send (1) an auto-reply to the client confirming receipt, and (2) a notification to the studio's inbox with the inquiry details, using Resend (or Nodemailer + SMTP as a fallback).

IMAGE HANDLING: Never store raw image binaries in the database or on the app server. Use Cloudinary signed uploads — the admin dashboard requests a signature from POST /api/admin/upload, uploads directly to Cloudinary from the browser, then saves the returned secure_url + public_id to ShootImage.

SECURITY: Rate-limit the public booking endpoint, sanitize all text inputs, CSRF protection on admin forms, environment variables for all secrets (DATABASE_URL, NEXTAUTH_SECRET, CLOUDINARY_API_SECRET, RESEND_API_KEY), never commit .env.

Set up Prisma migrations, a seed script with sample categories/services, and a typed Prisma client exported from /lib/db.ts.
```

---

## 8. Suggested Build Order

1. Scaffold Next.js + Tailwind + shadcn/ui, set up theme system first (it touches every component)
2. Build static layout: navbar, footer, home page sections with placeholder images
3. Add Framer Motion + Lenis for animation polish once layout is stable
4. Set up Prisma + Postgres, define schema, run migrations
5. Build public API routes (shoots, testimonials, services) and wire the frontend to real data
6. Build the booking form + email notifications
7. Build admin auth + dashboard (upload, manage shoots, view bookings)
8. Wire Cloudinary signed uploads
9. SEO pass (metadata, sitemap.xml, robots.txt, structured data for LocalBusiness)
10. Performance pass (Lighthouse audit, image sizing, font loading strategy)
11. Deploy to Vercel, connect custom domain, set up analytics

---

## 9. Notes
- If you're not coding this yourself, feed sections 6 and 7 directly into Claude Code, Cursor, or a similar AI coding tool — they're written as standalone prompts.
- If you want zero backend maintenance, swap the custom admin dashboard for **Sanity.io** — same frontend stack, but content editing happens in Sanity Studio instead of a custom-built dashboard. This cuts backend build time roughly in half at the cost of some customization flexibility.