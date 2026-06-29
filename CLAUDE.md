# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

There are no tests configured in this project.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript 5**
- **Tailwind CSS v4** via PostCSS — no `tailwind.config` file; configuration is in `globals.css`
- No backend — forms (`NotifyForm`, `ContactForm`) are front-end only and need to be wired to a real endpoint before launch

## Architecture

**Path alias:** `@/*` maps to `src/*`.

**Product data** lives entirely in `src/data/products.ts` — a static array of `Product` objects with helper functions (`getProductBySlug`, `getProductsByCategory`, `formatPrice`, `amazonUrlFor`). There is no database or API. All "Buy" CTAs redirect to Amazon search URLs.

**Routing (App Router):**
- `/` — landing page with hero, story, category teaser, and email notify form
- `/shop` — catalog filtered by `?category=` query param (Rings / Earrings / Necklaces)
- `/shop/[slug]` — individual product page; uses `generateStaticParams` for SSG
- `/contact`, `/faq`, `/legal/privacy-policy`, `/legal/terms` — static content pages

**Layout:** `src/app/layout.tsx` wraps every page with `<Header>` and `<Footer>`. The header is fixed/overlaid, so all page `<main>` elements use `pt-32` to clear it.

**Design tokens** are CSS custom properties defined in `globals.css`:
- Colors: `--gold` (#C9A227), `--bg-dark` (#120f09), `--bg-dark-2`, `--text-light`, `--text-muted`, `--line`
- Fonts: `--font-playfair` (Playfair Display, loaded via Google Fonts in layout head) and `--font-cormorant` (Cormorant Garamond). Font families are referenced inline with `font-[family-name:var(--font-playfair)]` Tailwind syntax.
- Utility class: `.eyebrow` (small gold uppercase label)

**Visual components:**
- `MandalaMotif` — SVG logo/decorative element, accepts `ringColor`/`petalColor` props
- `ProductVisual` — placeholder product image using the mandala motif + category icon; stands in until real photography is shot
- `Icons.tsx` — inline SVG icons for `RingIcon`, `EarringIcon`, `NecklaceIcon`

**Client components** (marked `"use client"`): `NotifyForm`, `ContactForm` — both simulate submission locally with `useState`; real endpoint wiring is TODO.
