import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Mandalyne",
  description:
    "How Mandalyne handles your information — what we collect, how purchases work through Amazon, and our cookie policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-6 pt-32 pb-24 sm:px-10 md:pb-32">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-[28px] italic text-[var(--text-light)] sm:text-[32px]">
          Privacy Policy
        </h1>
        <p className="mt-2 font-[family-name:var(--font-cormorant)] text-[14px] text-[var(--text-muted)]">
          Last updated: June 2026
        </p>

        <div className="mt-8 space-y-6 font-[family-name:var(--font-cormorant)] text-[16px] leading-[1.8] text-[var(--text-muted)]">
          <p>
            This page describes, in plain terms, what happens with information
            you share with Mandalyne (&quot;we&quot;, &quot;us&quot;) through
            this website.
          </p>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              What we collect
            </h2>
            <p className="mt-2">
              The email signup and contact forms on this site currently run
              front-end only and are not yet connected to a backend or mailing
              list — no personal data submitted through those forms is stored
              or transmitted at this time. This will change once the brand
              launches; this policy will be updated before that happens.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              Purchases via Amazon
            </h2>
            <p className="mt-2">
              All purchases happen on Amazon, not on this site. Any personal
              or payment information you provide during checkout is collected
              and processed by Amazon under Amazon&apos;s own privacy policy —
              we do not see or store your payment details.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              Cookies &amp; analytics
            </h2>
            <p className="mt-2">
              This site does not currently use tracking or advertising
              cookies. Standard hosting logs (e.g. via Vercel) may record
              basic technical data such as IP address and browser type for
              security and performance purposes.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--text-light)]">
              Contact
            </h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
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
            qualified professional before this site collects real customer
            data or processes orders directly.
          </p>
        </div>
      </div>
    </main>
  );
}
