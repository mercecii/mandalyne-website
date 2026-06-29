import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Mandalyne",
  description:
    "Terms of use for the Mandalyne website — product information, purchases via Amazon, and intellectual property.",
};

export default function TermsPage() {
  return (
    <main className="px-6 pt-32 pb-24 sm:px-10 md:pb-32">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-[28px] italic text-[var(--text-light)] sm:text-[32px]">
          Terms of Service
        </h1>
        <p className="mt-2 font-[family-name:var(--font-cormorant)] text-[14px] text-[var(--text-muted)]">
          Last updated: June 2026
        </p>

        <div className="mt-8 space-y-6 font-[family-name:var(--font-cormorant)] text-[16px] leading-[1.8] text-[var(--text-muted)]">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              About this site
            </h2>
            <p className="mt-2">
              This website showcases the Mandalyne catalog. It is informational
              and does not currently process payments, orders, or accounts —
              all purchases happen on Amazon under Amazon&apos;s own terms of
              sale.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              Product information
            </h2>
            <p className="mt-2">
              Mandalyne jewelry shown here is artificial (imitation) fashion
              jewelry. Prices, materials, and availability shown on this site
              are for reference; the listing on Amazon is the source of truth
              at the time of purchase.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              Intellectual property
            </h2>
            <p className="mt-2">
              The Mandalyne name, logo, and mandala motif are the property of
              Mandalyne. Please don&apos;t reproduce them without permission.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              Contact
            </h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a
                href="mailto:d9572712747@gmail.com"
                className="text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4"
              >
                d9572712747@gmail.com
              </a>
              .
            </p>
          </div>

          <p className="border-t border-[var(--line)] pt-6 text-[13px] italic">
            This is a general template, not legal advice. Review it with a
            qualified professional before launch.
          </p>
        </div>
      </div>
    </main>
  );
}
