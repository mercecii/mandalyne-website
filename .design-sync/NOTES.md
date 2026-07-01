# Mandalyne Design Sync Notes

## Repo context
This is a Next.js app, not a standalone component library. The design-sync setup treats `src/components/` as the design system.

## Build setup
- `src/ds-entry.ts` — custom entry re-exporting all components (no dist/ exists)
- `tsconfig.ds.json` — extends `tsconfig.json` with `next/link` aliased to `src/stubs/next-link.tsx`
- `build-ds-css.mjs` — compiles `src/app/globals.css` via Tailwind v4 PostCSS to `src/ds-css-out/styles.css`
- CSS build command: `node build-ds-css.mjs`

## next/link stub
`src/stubs/next-link.tsx` replaces Next.js `Link` with a plain `<a>` tag for the standalone bundle. This is intentional — the Next.js router context is unavailable in preview iframes.

## Fonts
Playfair Display and Cormorant Garamond are served by Google Fonts at runtime (via Next.js `next/font`). Set as `runtimeFontPrefixes` — no font files to ship.

## Tailwind CSS
Tailwind v4 installed; `@tailwindcss/postcss` used for CSS compilation. CLI binary (`tailwindcss`) not present — use `node build-ds-css.mjs` to rebuild CSS.

## Re-sync risks
- If new components are added to `src/components/`, add them manually to `cfg.componentSrcMap` in `design-sync.config.json`
- If Tailwind class names change significantly, rebuild CSS with `node build-ds-css.mjs`
- The `next/link` stub only covers `href`, standard anchor props, and Next.js-specific boolean props (prefetch, replace, scroll, shallow). If the Next.js Link API expands, update the stub.
- `products` data array is baked into `src/ds-entry.ts` exports for use in previews — when product catalog updates, re-run the converter
