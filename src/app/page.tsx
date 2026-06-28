import { MandalaMotif, MandalyneWordmark } from "@/components/Logo";
import NotifyForm from "@/components/NotifyForm";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-x-hidden px-5 py-8">
      <MandalaMotif className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[min(900px,140vw)] w-[min(900px,140vw)] -translate-x-1/2 -translate-y-1/2 opacity-5" />

      <div className="relative z-10 w-full max-w-[560px] px-9 py-14 text-center">
        <MandalyneWordmark className="mx-auto mb-2 block h-auto w-[min(380px,80vw)]" />

        <p className="mt-1.5 font-[family-name:var(--font-cormorant)] text-xl italic font-medium tracking-[0.03em] text-[var(--bronze)]">
          Jewelry inspired by symmetry, made for everyday elegance
        </p>

        <div className="relative mx-auto my-7 h-px w-[120px] bg-[var(--gold)]">
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]" />
        </div>

        <p className="mb-2 font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.18em] text-[var(--bronze)]">
          Launching Soon
        </p>
        <p className="mx-auto mb-9 max-w-[440px] font-[family-name:var(--font-cormorant)] text-[17px] leading-[1.7] text-[var(--ink)]">
          Mandalyne takes its name from the mandala — radial, balanced, endlessly
          detailed. We&apos;re building a collection of artificial jewelry that
          brings that same sense of ornament to everyday wear. Leave your email
          and we&apos;ll let you know the moment we open.
        </p>

        <NotifyForm />

        <div className="mb-[30px] flex justify-center gap-[18px]">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram (add handle once created)"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--gold)] text-[var(--bronze)]"
          >
            <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-[var(--bronze)]">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.62.07 4.81 0 3.2 0 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.56 0-4.81-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.61-.07-4.81 0-3.19.01-3.56.07-4.81.15-3.23 1.67-4.77 4.92-4.92C8.44 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-2.27.1-3.39 1.24-3.49 3.49-.06 1.23-.07 1.58-.07 4.73 0 3.15.01 3.5.07 4.73.1 2.25 1.22 3.39 3.49 3.49 1.23.06 1.58.07 4.73.07 3.15 0 3.5-.01 4.73-.07 2.26-.1 3.39-1.23 3.49-3.49.06-1.23.07-1.58.07-4.73 0-3.15-.01-3.5-.07-4.73-.1-2.25-1.22-3.39-3.49-3.49C15.5 4.01 15.15 4 12 4zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm5.5-2.95a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
            </svg>
          </a>
          <a
            href="mailto:d9572712747@gmail.com"
            aria-label="Email"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--gold)] text-[var(--bronze)]"
          >
            <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-[var(--bronze)]">
              <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2.2.5 7.55 6.16a.4.4 0 0 0 .5 0L19.8 6H4.2zM20 7.7l-6.96 5.68a2.4 2.4 0 0 1-3.08 0L4 7.7v10.8h16V7.7z" />
            </svg>
          </a>
        </div>

        <footer className="text-xs tracking-[0.04em] text-[#9c8f73]">
          &copy; 2026 Mandalyne. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
