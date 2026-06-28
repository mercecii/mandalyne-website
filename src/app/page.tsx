import Link from "next/link";
import { MandalaMotif } from "@/components/Logo";
import { RingIcon, EarringIcon, NecklaceIcon } from "@/components/Icons";
import NotifyForm from "@/components/NotifyForm";

const categories = [
  { label: "Rings", icon: RingIcon },
  { label: "Earrings", icon: EarringIcon },
  { label: "Necklaces", icon: NecklaceIcon },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20 text-center sm:px-10"
        style={{
          background:
            "radial-gradient(ellipse at top, var(--bg-dark-2) 0%, var(--bg-dark) 60%)",
        }}
      >
        <MandalaMotif
          ringColor="#C9A227"
          petalColor="#C9A227"
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[min(820px,150vw)] w-[min(820px,150vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] drop-shadow-[0_0_120px_rgba(201,162,39,0.35)]"
        />

        <p className="eyebrow relative z-10">Signature Collection — Coming Soon</p>

        <h1 className="relative z-10 mt-5 max-w-3xl font-[family-name:var(--font-playfair)] text-[42px] leading-[1.15] text-[var(--text-light)] sm:text-[64px]">
          Jewelry, inspired
          <br />
          <em className="font-[family-name:var(--font-cormorant)] not-italic italic text-[var(--gold)]">
            by symmetry.
          </em>
        </h1>

        <p className="relative z-10 mx-auto mt-6 max-w-[460px] font-[family-name:var(--font-cormorant)] text-lg leading-[1.7] text-[var(--text-muted)]">
          Where ornament meets everyday elegance — a jewelry box you&apos;ll
          want to step inside.
        </p>

        <a
          href="#story"
          className="relative z-10 mt-5 font-[family-name:var(--font-playfair)] text-[12px] uppercase tracking-[0.18em] text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4"
        >
          Step Inside ↓
        </a>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="rounded-sm bg-[var(--gold)] px-8 py-3.5 font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.1em] text-[var(--bg-dark)] transition-colors hover:bg-[var(--text-light)]"
          >
            Shop the Catalog
          </Link>
          <a
            href="#notify"
            className="rounded-sm border border-[var(--line)] px-8 py-3.5 font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.1em] text-[var(--text-light)] transition-colors hover:border-[var(--gold)]"
          >
            Notify Me
          </a>
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="grid gap-12 bg-[var(--bg-dark-2)] px-6 py-24 sm:px-10 md:grid-cols-2 md:items-center md:gap-16 md:py-32"
      >
        <div className="mx-auto max-w-[480px] text-center md:mx-0 md:text-left">
          <p className="eyebrow">Our Story</p>
          <p className="mt-5 font-[family-name:var(--font-playfair)] text-[28px] italic leading-[1.4] text-[var(--text-light)] sm:text-[34px]">
            &ldquo;Mandalyne takes its name from the mandala — radial,
            balanced, endlessly detailed.&rdquo;
          </p>
          <p className="mt-6 font-[family-name:var(--font-cormorant)] text-[17px] leading-[1.8] text-[var(--text-muted)]">
            We&apos;re building a collection of artificial jewelry that
            brings that same sense of ornament to everyday wear — pieces
            designed around symmetry, made to feel considered without ever
            feeling precious.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <MandalaMotif className="h-[260px] w-[260px] opacity-90 sm:h-[320px] sm:w-[320px]" />
        </div>
      </section>

      {/* Collections teaser */}
      <section id="collections" className="px-6 py-24 text-center sm:px-10 md:py-32">
        <p className="eyebrow">Browse the Catalog</p>
        <h2 className="mx-auto mt-4 max-w-md font-[family-name:var(--font-playfair)] text-[32px] italic text-[var(--text-light)] sm:text-[38px]">
          Three ways to wear symmetry
        </h2>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {categories.map(({ label, icon: Icon }) => (
            <Link
              key={label}
              href={`/shop?category=${encodeURIComponent(label)}`}
              className="flex flex-col items-center gap-4 rounded-sm border border-[var(--line)] px-8 py-14 transition-colors hover:border-[var(--gold)]/60"
            >
              <Icon className="h-10 w-10 text-[var(--gold)]" />
              <span className="font-[family-name:var(--font-playfair)] text-base uppercase tracking-[0.12em] text-[var(--text-light)]">
                {label}
              </span>
              <span className="font-[family-name:var(--font-cormorant)] text-sm italic text-[var(--gold)]">
                Shop {label} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Notify */}
      <section
        id="notify"
        className="bg-[var(--bg-dark-2)] px-6 py-24 text-center sm:px-10 md:py-32"
      >
        <p className="eyebrow">Be the first to know</p>
        <h2 className="mx-auto mt-4 max-w-md font-[family-name:var(--font-playfair)] text-[32px] italic text-[var(--text-light)] sm:text-[38px]">
          Join the list
        </h2>
        <p className="mx-auto mt-5 mb-9 max-w-[420px] font-[family-name:var(--font-cormorant)] text-[17px] leading-[1.7] text-[var(--text-muted)]">
          Leave your email and we&apos;ll let you know the moment Mandalyne
          opens.
        </p>

        <NotifyForm />
      </section>
    </main>
  );
}
