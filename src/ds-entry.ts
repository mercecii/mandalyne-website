// Design-system entry — re-exports all standalone Mandalyne components.
// Used by design-sync to build the standalone bundle; not part of the Next.js app build.

export { MandalaMotif, MandalyneWordmark, MandalyneScriptmark } from './components/Logo';
export { RingIcon, EarringIcon, NecklaceIcon } from './components/Icons';
export { default as ProductVisual } from './components/ProductVisual';
export { default as ProductCard } from './components/ProductCard';
export { default as ContactForm } from './components/ContactForm';
export { default as NotifyForm } from './components/NotifyForm';
export { default as Header } from './components/Header';
export { default as Footer } from './components/Footer';
export type { Product, Category } from './data/products';
export { products, formatPrice } from './data/products';
