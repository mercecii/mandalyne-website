"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-[460px] text-center">
        <p className="font-[family-name:var(--font-playfair)] text-[15px] text-[var(--gold)]">
          Message received.
        </p>
        <p className="mt-2 font-[family-name:var(--font-cormorant)] text-[15px] text-[var(--text-muted)]">
          We&apos;ve sent a confirmation to {email}. We&apos;ll reply shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "rounded-sm border border-[var(--line)] bg-transparent px-4 py-[14px] font-[family-name:var(--font-cormorant)] text-base text-[var(--text-light)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--gold)] disabled:opacity-50";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-[460px] flex-col gap-4 text-left"
    >
      <input
        type="text"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={status === "loading"}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className={inputClass}
      />
      <textarea
        required
        rows={4}
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={status === "loading"}
        className={`resize-none ${inputClass}`}
      />

      {status === "error" && (
        <p className="font-[family-name:var(--font-cormorant)] text-[14px] text-red-400">
          Something went wrong — please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-sm bg-[var(--gold)] px-[26px] py-[14px] font-[family-name:var(--font-playfair)] text-[13px] uppercase tracking-[0.08em] text-[var(--bg-dark)] transition-colors hover:bg-[var(--text-light)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
