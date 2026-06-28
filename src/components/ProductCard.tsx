import Link from "next/link";
import ProductVisual from "@/components/ProductVisual";
import { formatPrice, type Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block text-left">
      <ProductVisual category={product.category} />
      <div className="mt-4">
        <p className="font-[family-name:var(--font-playfair)] text-[11px] uppercase tracking-[0.14em] text-[var(--gold)]">
          {product.category}
        </p>
        <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-base text-[var(--text-light)] transition-colors group-hover:text-[var(--gold)]">
          {product.name}
        </h3>
        <p className="mt-1 flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-[15px] text-[var(--text-muted)]">
          {formatPrice(product.price)}
          {product.compareAtPrice && (
            <span className="text-xs line-through opacity-60">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
