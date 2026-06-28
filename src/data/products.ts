export type Category = "Rings" | "Earrings" | "Necklaces";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  tagline: string;
  description: string;
  details: string[];
  featured?: boolean;
};

// NOTE: Sample catalog only — placeholder products for layout/launch purposes.
// Swap in real photography, copy, and pricing once production stock is ready.
export const products: Product[] = [
  {
    slug: "aanya-solitaire-ring",
    name: "Aanya Solitaire Ring",
    category: "Rings",
    price: 1499,
    compareAtPrice: 1899,
    tagline: "A single radial stone, set in symmetry.",
    description:
      "A clean solitaire silhouette inspired by the mandala's center point — one stone, perfectly balanced, designed to sit quietly on the hand without competing for attention.",
    details: [
      "Gold-plated brass, tarnish-resistant coating",
      "AAA cubic zirconia centerstone",
      "Available in sizes 6–9 (US)",
      "Imitation/artificial jewelry — not a precious metal or gemstone product",
    ],
    featured: true,
  },
  {
    slug: "meera-halo-ring",
    name: "Meera Halo Ring",
    category: "Rings",
    price: 1799,
    tagline: "Petals in orbit around a single light.",
    description:
      "A ring of micro-set stones circling a center stone, echoing the radial petals of the Mandalyne motif. Pairs well stacked or worn alone.",
    details: [
      "Gold-plated brass, tarnish-resistant coating",
      "Cubic zirconia halo + centerstone",
      "Available in sizes 6–9 (US)",
      "Imitation/artificial jewelry — not a precious metal or gemstone product",
    ],
  },
  {
    slug: "ira-twist-band",
    name: "Ira Twist Band",
    category: "Rings",
    price: 1299,
    tagline: "Two lines, woven into one.",
    description:
      "A minimal twist band for everyday wear — two interlaced bands finished in warm gold, made to be worn alone or layered with the Aanya or Meera.",
    details: [
      "Gold-plated brass, tarnish-resistant coating",
      "Adjustable fit, sizes 5–10 (US)",
      "Imitation/artificial jewelry — not a precious metal product",
    ],
  },
  {
    slug: "saanvi-drop-earrings",
    name: "Saanvi Drop Earrings",
    category: "Earrings",
    price: 1699,
    tagline: "Movement, suspended.",
    description:
      "A lightweight drop earring with a single petal-shaped charm that catches light as it moves — designed from the same radial geometry as the Mandalyne mark.",
    details: [
      "Gold-plated brass, tarnish-resistant coating",
      "Hypoallergenic stainless steel posts",
      "Approx. 3.8cm drop length",
      "Imitation/artificial jewelry — not a precious metal or gemstone product",
    ],
    featured: true,
  },
  {
    slug: "diya-hoop-earrings",
    name: "Diya Hoop Earrings",
    category: "Earrings",
    price: 1399,
    tagline: "A circle, traced in gold.",
    description:
      "Classic hoops with a textured edge inspired by the rings of the mandala — sized to wear daily, from desk to dinner.",
    details: [
      "Gold-plated brass, tarnish-resistant coating",
      "Hypoallergenic stainless steel posts",
      "Approx. 2.5cm diameter",
      "Imitation/artificial jewelry — not a precious metal product",
    ],
  },
  {
    slug: "kiara-pendant-necklace",
    name: "Kiara Pendant Necklace",
    category: "Necklaces",
    price: 1999,
    compareAtPrice: 2399,
    tagline: "The center point, worn close.",
    description:
      "A fine chain finished with a small mandala-inspired pendant — the brand's signature motif, scaled down to an everyday piece.",
    details: [
      "Gold-plated brass, tarnish-resistant coating",
      "Chain length 45cm + 5cm extender",
      "Imitation/artificial jewelry — not a precious metal or gemstone product",
    ],
    featured: true,
  },
  {
    slug: "anaya-layer-chain",
    name: "Anaya Layer Chain",
    category: "Necklaces",
    price: 1599,
    tagline: "Built for layering, designed to stand alone.",
    description:
      "A simple flat-link chain in warm gold, sized to layer with the Kiara pendant or wear solo for a quieter look.",
    details: [
      "Gold-plated brass, tarnish-resistant coating",
      "Chain length 50cm",
      "Imitation/artificial jewelry — not a precious metal product",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
}

export const categories: Category[] = ["Rings", "Earrings", "Necklaces"];

// Placeholder outbound link until individual Amazon ASINs are live.
// Replace with the real product deep link per item once listed.
export function amazonUrlFor(product: Product): string {
  return `https://www.amazon.in/s?k=${encodeURIComponent(
    `Mandalyne ${product.name}`
  )}`;
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
