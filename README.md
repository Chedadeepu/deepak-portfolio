# Deepak — Portfolio

A premium, interactive personal portfolio — built as an award-style storytelling experience.

**AI & Full-Stack Engineer** · Building web products, intelligent automation, and interactive experiences people remember.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** — animations & micro-interactions
- **React Three Fiber / Three.js** — 3D hero scene
- **Lenis** — smooth inertia scrolling
- **Web Audio API** — live-generated lo-fi soundtrack (no audio files)

## Features

- Immersive 3D hero with a mouse-reactive animated avatar
- Scroll-driven journey timeline & animated counters
- Interactive skill "galaxy" with live network connections
- Cinematic project cards with 3D tilt + case-study modals
- Custom cursor, magnetic buttons, glassmorphism, ambient gradients
- Optional background music with audio-reactive visualizer (saved to localStorage)
- Full SEO: Open Graph share card, JSON-LD, sitemap & robots

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Optimized for [Vercel](https://vercel.com). After deploying, update the
`SITE_URL` / domain placeholders in `app/layout.js`, `app/robots.js`, and
`app/sitemap.js` to your real domain.
