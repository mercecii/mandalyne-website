"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: front-end only for now. Wire this up to a real endpoint
    // (Formspree, a mailto fallback, or a backend) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-[family-name:var(--font-cormorant)] text-[15px] text-[var(--gold)]">
        Thank you for reaching out — we&apos;ll reply by email soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-[460px] flex-col gap-4 text-left"
    >
      <input
        type="text"
        required
        placeholder="Your name"
        className="rounded-sm border border-[var(--line)] bg-transparent px-4 py-[14px] font-[family-name:var(--font-cormorant)] text-base text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--gold)]"
      />
      <input
        type="email"
        required
        placeholder="your@email.com"
        className="rounded-sm border border-[var(--line)] bg-transparent px-4 py-[14px] font-[family-name:var(--font-cormorant)] text-base text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--gold)]"
      />
      <textarea
        required
        rows={4}
        placeholder="How can we help?"
        className="resize-none rounded-sm border border-[var(--line)] bg-transparent px-4 py-[14px] font-[family-name:var(--font-cormorant)] text-base text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--gold)]"
      />
      <button
        type="submit"
        className="rounded-sm bg-[var(--gold)] px-[26px] py-[14px] font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.08em] text-[var(--bg-dark)] transition-colors hover:bg-[var(--text-light)]"
      >
        Send Message
      </button>
    </form>
  );
}
