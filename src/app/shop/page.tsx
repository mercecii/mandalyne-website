import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop — Mandalyne",
  description: "Browse the Mandalyne signature collection.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category && categories.includes(category as never) ? category : "All";
  const products = getProductsByCategory(active);

  const tabs = ["All", ...categories];

  return (
    <main className="px-6 pt-32 pb-24 sm:px-10 md:pb-32">
      <div className="text-center">
        <p className="eyebrow">Signature Collection</p>
        <h1 className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-playfair)] text-[32px] italic text-[var(--text-light)] sm:text-[42px]">
          Shop the catalog
        </h1>
        <p className="mx-auto mt-4 max-w-[460px] font-[family-name:var(--font-cormorant)] text-[16px] leading-[1.7] text-[var(--text-muted)]">
          A first look at the Mandalyne collection. Every piece purchases
          securely through our Amazon storefront.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <Link
            key={tab}
            href={tab === "All" ? "/shop" : `/shop?category=${encodeURIComponent(tab)}`}
            className={`rounded-full border px-5 py-2 font-[family-name:var(--font-playfair)] text-[11px] uppercase tracking-[0.14em] transition-colors ${
              active === tab
                ? "border-[var(--gold)] text-[var(--gold)]"
                : "border-[var(--line)] text-[var(--text-muted)] hover:border-[var(--gold)]/60"
            }`}
          >
            {tab}
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="mt-14 text-center font-[family-name:var(--font-cormorant)] text-[var(--text-muted)]">
          No pieces in this category yet — check back soon.
        </p>
      )}
    </main>
  );
}
