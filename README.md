# 📸 Photography Studio — Cinematic Portfolio & Booking Platform

A premium, Awwwards-inspired photography studio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed to captivate clients from the first scroll — with cinematic animations, glassmorphism effects, and a luxury editorial aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-purple?logo=framer)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🎬 Cinematic Experience
- **Crossfading hero carousel** with Ken Burns zoom and word-by-word headline animation
- **Floating gold particles** and bokeh effects throughout the site
- **Lenis smooth scrolling** for a premium inertia feel
- **Parallax depth** on scroll for images and backgrounds
- **Page transitions** with Framer Motion `AnimatePresence`

### 🖼️ Portfolio Showcase
- **Asymmetric masonry grid** with varied aspect ratios
- Numbered overlay indices and glassmorphism category pills
- Hover-reveal CTAs with image zoom
- Scroll-triggered entrance animations with clip-mask reveals

### 💎 Premium Design System
- **Playfair Display + Inter** font pairing (luxury serif + modern sans)
- **Light & Dark themes** with system preference detection (no flash of wrong theme)
- **Gold shimmer gradient** animations on CTAs and accents
- **Glassmorphism cards** with backdrop-blur and 3D tilt effect on mouse movement
- Custom scrollbar, text selection, and noise texture overlay

### 📱 Fully Responsive
- Mobile-first design with full-screen slide-in navigation
- Adaptive layouts from mobile to 4K
- Touch-friendly interactions and swipe gestures
- `prefers-reduced-motion` respected for accessibility

### 🏗️ Architecture
- **Next.js 15 App Router** with TypeScript for type safety
- **shadcn/ui** accessible component primitives
- **Prisma ORM** with PostgreSQL for structured data (portfolio, bookings, testimonials)
- **React Hook Form + Zod** for validated multi-step booking forms
- Clean separation: `/components/sections/` for page blocks, `/components/ui/` for primitives

---

## 🖥️ Pages & Sections

| Page / Section | Description |
|---|---|
| **Hero** | Full-bleed crossfading image carousel, animated stats counter (500+ Weddings, 10+ Years, 50+ Awards), gold shimmer CTAs |
| **Selected Works** | Asymmetric masonry portfolio grid with parallax, hover captions, and numbered indices |
| **About Teaser** | Split layout with parallax portrait, floating glass stats card, and handwritten signature |
| **Services** | Glassmorphism pricing cards with 3D tilt, gradient borders, bokeh particles, "Most Popular" shimmer badge |
| **Testimonials** | Editorial split layout — large client photo + serif quote, auto-playing with crossfade transitions |
| **Instagram Grid** | 6-photo responsive grid with hover overlays and staggered scroll reveal |
| **CTA Banner** | Cinematic full-bleed parallax with bokeh overlay and gold shimmer text |
| **Footer** | Always-dark editorial footer with social hover glow effects and gold accents |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, CSS Variables |
| **UI Components** | shadcn/ui (Base UI) |
| **Animations** | Framer Motion |
| **Smooth Scroll** | Lenis |
| **Theming** | next-themes |
| **Forms** | React Hook Form + Zod |
| **Carousel** | Embla Carousel |
| **Database** | PostgreSQL + Prisma ORM |
| **Auth** | NextAuth.js |
| **Icons** | Lucide React |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/photography-studio.git
cd photography-studio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL, auth secrets, etc.

# Run database migrations (optional — for backend features)
npx prisma migrate dev

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, themes, smooth scroll
│   ├── page.tsx            # Homepage assembling all sections
│   └── globals.css         # Design tokens, animations, utility classes
├── components/
│   ├── sections/
│   │   ├── hero.tsx              # Cinematic hero with crossfade carousel
│   │   ├── featured-work.tsx     # Asymmetric masonry portfolio
│   │   ├── about-teaser.tsx      # About section with parallax portrait
│   │   ├── services-teaser.tsx   # Glassmorphism pricing cards
│   │   ├── testimonial-carousel.tsx  # Editorial split testimonials
│   │   ├── instagram-grid.tsx    # Social proof photo grid
│   │   └── cta-banner.tsx        # Full-bleed CTA with bokeh
│   ├── ui/
│   │   └── button.tsx            # shadcn/ui button variants
│   ├── navbar.tsx          # Sticky glassmorphism navbar
│   ├── footer.tsx          # Dark editorial footer
│   ├── smooth-scroll.tsx   # Lenis smooth scroll wrapper
│   ├── theme-provider.tsx  # next-themes provider
│   └── theme-toggle.tsx    # Light/dark theme toggle
└── lib/
    └── utils.ts            # Utility functions (cn)
```

---

## 🎨 Design Philosophy

> *"The most powerful photographs aren't posed — they're felt."*

This website is designed with the same philosophy. Every interaction, from the floating gold particles to the 3D-tilting service cards, is crafted to evoke the feeling of luxury and artistry that a premium photography studio represents.

**Key design decisions:**
- **Playfair Display** for headings — an editorial serif that instantly communicates luxury
- **Gold (#C9A24B)** as the accent color — the universal signifier of premium quality
- **Always-dark footer** — a photography industry convention that feels editorial
- **Asymmetric layouts** — break the monotony of uniform grids to create visual interest
- **Restraint in animation** — all animations are under 400ms and respect `prefers-reduced-motion`

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for the beautiful photography placeholders
- [shadcn/ui](https://ui.shadcn.com) for accessible component primitives
- [Framer Motion](https://www.framer.com/motion/) for buttery animations
- [Lenis](https://lenis.darkroom.engineering/) for smooth scroll
