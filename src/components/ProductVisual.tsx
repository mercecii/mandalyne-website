import { RingIcon, EarringIcon, NecklaceIcon } from "@/components/Icons";
import { MandalaMotif } from "@/components/Logo";
import type { Category } from "@/data/products";

const iconByCategory: Record<Category, typeof RingIcon> = {
  Rings: RingIcon,
  Earrings: EarringIcon,
  Necklaces: NecklaceIcon,
};

// Original, non-photographic product visual — a motif-driven placeholder
// standing in for real product photography until it's shot.
export default function ProductVisual({
  category,
  size = "md",
  className = "",
}: {
  category: Category;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const Icon = iconByCategory[category];
  const iconSize =
    size === "lg" ? "h-20 w-20" : size === "sm" ? "h-9 w-9" : "h-14 w-14";

  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-[var(--line)] ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at center, var(--bg-dark-2) 0%, var(--bg-dark) 75%)",
      }}
    >
      <MandalaMotif
        ringColor="#C9A227"
        petalColor="#C9A227"
        className="pointer-events-none absolute h-[140%] w-[140%] opacity-[0.08]"
      />
      <Icon className={`relative z-10 text-[var(--gold)] ${iconSize}`} />
    </div>
  );
}
