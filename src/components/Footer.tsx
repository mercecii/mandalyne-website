import Link from "next/link";
import { MandalyneScriptmark } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-10">
      <MandalyneScriptmark className="text-lg text-[var(--text-light)]" />

      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        <Link
          href="/shop"
          className="font-[family-name:var(--font-playfair)] text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
        >
          Shop
        </Link>
        <Link
          href="/contact"
          className="font-[family-name:var(--font-playfair)] text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
        >
          Contact
        </Link>
        <Link
          href="/faq"
          className="font-[family-name:var(--font-playfair)] text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
        >
          FAQ
        </Link>
        <Link
          href="/legal/privacy-policy"
          className="font-[family-name:var(--font-playfair)] text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
        >
          Privacy
        </Link>
        <Link
          href="/legal/terms"
          className="font-[family-name:var(--font-playfair)] text-[12px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
        >
          Terms
        </Link>
      </nav>

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
  );
}
