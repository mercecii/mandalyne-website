// Builds design-system CSS using the project's own PostCSS + Tailwind v4 pipeline.
import postcss from 'postcss';
import plugin from '@tailwindcss/postcss';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = readFileSync('./src/app/globals.css', 'utf8');
mkdirSync('./src/ds-css-out', { recursive: true });

const result = await postcss([plugin]).process(input, {
  from: './src/app/globals.css',
  to: './src/ds-css-out/styles.css',
});

writeFileSync('./src/ds-css-out/styles.css', result.css);
console.log(`CSS built: ${(result.css.length / 1024).toFixed(1)} KB`);
