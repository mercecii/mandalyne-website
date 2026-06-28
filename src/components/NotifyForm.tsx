"use client";

import { useState } from "react";

export default function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: front-end only for now. Wire this up to a real endpoint
    // (Formspree, Google Forms, Mailchimp, etc.) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mb-2 font-[family-name:var(--font-cormorant)] text-[15px] text-[var(--gold)]">
        Thank you — we&apos;ll be in touch when Mandalyne launches.
      </p>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-[18px] flex max-w-[420px] flex-wrap justify-center gap-[10px]"
      >
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="min-w-[220px] flex-1 rounded-sm border border-[var(--line)] bg-transparent px-4 py-[14px] font-[family-name:var(--font-cormorant)] text-base text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--gold)]"
        />
        <button
          type="submit"
          className="rounded-sm bg-[var(--gold)] px-[26px] py-[14px] font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.08em] text-[var(--bg-dark)] transition-colors hover:bg-[var(--text-light)]"
        >
          Notify Me
        </button>
      </form>
      <p className="text-[13px] text-[var(--text-muted)]">
        We&apos;ll only email you about launch — no spam.
      </p>
    </>
  );
}
