import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Mandalyne",
  description:
    "Answers to common questions about Mandalyne jewelry — materials, sizing, Amazon checkout, care, and shipping.",
};

const faqs = [
  {
    q: "Is Mandalyne jewelry real gold or silver?",
    a: "No — Mandalyne pieces are artificial (imitation) fashion jewelry, made from gold-plated brass with a tarnish-resistant coating. They're designed to look refined without precious-metal pricing.",
  },
  {
    q: "Why do I check out on Amazon instead of this site?",
    a: "For now, all Mandalyne purchases are fulfilled through our official Amazon storefront, so checkout, payment, and delivery are handled securely by Amazon. We're a new brand and wanted orders protected by Amazon's buyer policies from day one.",
  },
  {
    q: "What's Amazon's return policy for these items?",
    a: "Returns and replacements follow Amazon's standard policy for the listing you purchased — check the return window shown on the product's Amazon page at checkout.",
  },
  {
    q: "How do I find my ring size?",
    a: "Most Mandalyne rings are available in US sizes 5–10. If you're unsure of your size, wrap a strip of paper around your finger, mark where it overlaps, and measure against a ruler in millimetres — we're happy to help you convert that to a size over email.",
  },
  {
    q: "How should I care for my jewelry?",
    a: "Keep pieces dry, avoid perfume or lotion contact, and store them separately in a soft pouch to prevent scratching. This helps the gold-plated finish last as long as possible.",
  },
  {
    q: "Do you ship outside India?",
    a: "Shipping availability depends on the Amazon listing for each piece. Check the delivery options shown on the product's Amazon page for your location.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="px-6 pt-32 pb-24 sm:px-10 md:pb-32">
        <div className="text-center">
          <p className="eyebrow">Questions</p>
          <h1 className="mx-auto mt-4 max-w-md font-[family-name:var(--font-playfair)] text-[32px] italic text-[var(--text-light)] sm:text-[38px]">
            Frequently asked questions
          </h1>
        </div>

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-[var(--line)]">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-playfair)] text-[15px] text-[var(--text-light)] marker:content-none">
                {q}
                <span className="shrink-0 text-[var(--gold)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-[family-name:var(--font-cormorant)] text-[15px] leading-[1.7] text-[var(--text-muted)]">
                {a}
              </p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
