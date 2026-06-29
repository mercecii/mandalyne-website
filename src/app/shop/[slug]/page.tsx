import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductVisual from "@/components/ProductVisual";
import ProductCard from "@/components/ProductCard";
import {
  amazonUrlFor,
  formatPrice,
  getProductBySlug,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product — Mandalyne" };
  return {
    title: `${product.name} — Mandalyne`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} — Mandalyne`,
      description: product.description,
      url: `/shop/${slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Mandalyne",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: amazonUrlFor(product),
      seller: {
        "@type": "Organization",
        name: "Mandalyne",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="px-6 pt-32 pb-24 sm:px-10 md:pb-32">
        <nav className="mx-auto max-w-5xl font-[family-name:var(--font-playfair)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
          <Link href="/shop" className="hover:text-[var(--gold)]">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[var(--gold)]"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text-light)]">{product.name}</span>
        </nav>

        <div className="mx-auto mt-10 grid max-w-5xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
          <ProductVisual category={product.category} size="lg" />

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-[30px] text-[var(--text-light)] sm:text-[36px]">
              {product.name}
            </h1>
            <p className="mt-2 font-[family-name:var(--font-cormorant)] text-[17px] italic text-[var(--gold)]">
              {product.tagline}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-light)]">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="font-[family-name:var(--font-cormorant)] text-base text-[var(--text-muted)] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            <p className="mt-6 font-[family-name:var(--font-cormorant)] text-[16px] leading-[1.8] text-[var(--text-muted)]">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2 border-t border-[var(--line)] pt-6">
              {product.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-2 font-[family-name:var(--font-cormorant)] text-[15px] text-[var(--text-muted)]"
                >
                  <span className="text-[var(--gold)]">•</span>
                  {detail}
                </li>
              ))}
            </ul>

            <a
              href={amazonUrlFor(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-sm bg-[var(--gold)] px-8 py-4 text-center font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.1em] text-[var(--bg-dark)] transition-colors hover:bg-[var(--text-light)]"
            >
              Buy on Amazon ↗
            </a>
            <p className="mt-3 text-center font-[family-name:var(--font-cormorant)] text-[13px] text-[var(--text-muted)]">
              You&apos;ll be redirected to Amazon to complete your purchase
              securely.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-24 max-w-5xl border-t border-[var(--line)] pt-16">
            <p className="eyebrow text-center">You may also like</p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-x-6 gap-y-12 sm:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
