import Link from "next/link";
import { MandalaMotif } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20 text-center sm:px-10">
      <MandalaMotif
        ringColor="#C9A227"
        petalColor="#C9A227"
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[min(560px,140vw)] w-[min(560px,140vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      />
      <p className="eyebrow relative z-10">404</p>
      <h1 className="relative z-10 mt-4 font-[family-name:var(--font-playfair)] text-[32px] italic text-[var(--text-light)] sm:text-[38px]">
        This page wandered off symmetry.
      </h1>
      <p className="relative z-10 mt-4 max-w-[420px] font-[family-name:var(--font-cormorant)] text-[16px] leading-[1.7] text-[var(--text-muted)]">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="relative z-10 mt-8 rounded-sm bg-[var(--gold)] px-8 py-3.5 font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.1em] text-[var(--bg-dark)] transition-colors hover:bg-[var(--text-light)]"
      >
        Back to Home
      </Link>
    </main>
  );
}
