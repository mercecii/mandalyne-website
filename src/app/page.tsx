import { MandalaMotif, MandalyneScriptmark } from "@/components/Logo";
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
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10">
        <MandalyneScriptmark className="text-xl text-[var(--text-light)] sm:text-2xl" />
        <span className="hidden items-center gap-2 rounded-full border border-[var(--gold)]/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--gold)] sm:inline-flex">
          Launching Soon
        </span>
      </header>

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
          <a
            href="#notify"
            className="rounded-sm bg-[var(--gold)] px-8 py-3.5 font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.1em] text-[var(--bg-dark)] transition-colors hover:bg-[var(--text-light)]"
          >
            Notify Me
          </a>
          <a
            href="#collections"
            className="rounded-sm border border-[var(--line)] px-8 py-3.5 font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.1em] text-[var(--text-light)] transition-colors hover:border-[var(--gold)]"
          >
            What&apos;s Coming
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
        <p className="eyebrow">What&apos;s Coming</p>
        <h2 className="mx-auto mt-4 max-w-md font-[family-name:var(--font-playfair)] text-[32px] italic text-[var(--text-light)] sm:text-[38px]">
          Three ways to wear symmetry
        </h2>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {categories.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 rounded-sm border border-[var(--line)] px-8 py-14 transition-colors hover:border-[var(--gold)]/60"
            >
              <Icon className="h-10 w-10 text-[var(--gold)]" />
              <span className="font-[family-name:var(--font-playfair)] text-base uppercase tracking-[0.12em] text-[var(--text-light)]">
                {label}
              </span>
              <span className="font-[family-name:var(--font-cormorant)] text-sm italic text-[var(--text-muted)]">
                Coming Soon
              </span>
            </div>
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

      {/* Footer */}
      <footer className="flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-10">
        <MandalyneScriptmark className="text-lg text-[var(--text-light)]" />

        <div className="flex justify-center gap-[18px]">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram (add handle once created)"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--line)] text-[var(--text-muted)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.62.07 4.81 0 3.2 0 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.56 0-4.81-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.61-.07-4.81 0-3.19.01-3.56.07-4.81.15-3.23 1.67-4.77 4.92-4.92C8.44 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-2.27.1-3.39 1.24-3.49 3.49-.06 1.23-.07 1.58-.07 4.73 0 3.15.01 3.5.07 4.73.1 2.25 1.22 3.39 3.49 3.49 1.23.06 1.58.07 4.73.07 3.15 0 3.5-.01 4.73-.07 2.26-.1 3.39-1.23 3.49-3.49.06-1.23.07-1.58.07-4.73 0-3.15-.01-3.5-.07-4.73-.1-2.25-1.22-3.39-3.49-3.49C15.5 4.01 15.15 4 12 4zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm5.5-2.95a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
            </svg>
          </a>
          <a
            href="mailto:d9572712747@gmail.com"
            aria-label="Email"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--line)] text-[var(--text-muted)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current">
              <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2.2.5 7.55 6.16a.4.4 0 0 0 .5 0L19.8 6H4.2zM20 7.7l-6.96 5.68a2.4 2.4 0 0 1-3.08 0L4 7.7v10.8h16V7.7z" />
            </svg>
          </a>
        </div>

        <p className="text-xs tracking-[0.04em] text-[var(--text-muted)]">
          &copy; 2026 Mandalyne. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
