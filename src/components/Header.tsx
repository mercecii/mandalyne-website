import Link from "next/link";
import { MandalyneScriptmark } from "@/components/Logo";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10">
      <Link href="/">
        <MandalyneScriptmark className="text-xl text-[var(--text-light)] sm:text-2xl" />
      </Link>
      <nav className="hidden items-center gap-8 sm:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-[family-name:var(--font-playfair)] text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
          >
            {link.label}
          </Link>
        ))}
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">
          Launching Soon
        </span>
      </nav>
      <Link
        href="/shop"
        className="rounded-sm border border-[var(--line)] px-4 py-2 font-[family-name:var(--font-playfair)] text-[11px] uppercase tracking-[0.12em] text-[var(--text-light)] transition-colors hover:border-[var(--gold)] sm:hidden"
      >
        Shop
      </Link>
    </header>
  );
}
