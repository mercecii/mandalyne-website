import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Mandalyne",
  description:
    "Have a question about a Mandalyne piece, sizing, or an Amazon order? Send us a message and we'll reply by email.",
};

export default function ContactPage() {
  return (
    <main className="px-6 pt-32 pb-24 text-center sm:px-10 md:pb-32">
      <p className="eyebrow">Get in Touch</p>
      <h1 className="mx-auto mt-4 max-w-md font-[family-name:var(--font-playfair)] text-[32px] italic text-[var(--text-light)] sm:text-[38px]">
        We&apos;d love to hear from you
      </h1>
      <p className="mx-auto mt-4 max-w-[420px] font-[family-name:var(--font-cormorant)] text-[16px] leading-[1.7] text-[var(--text-muted)]">
        Questions about a piece, sizing, or an order placed on Amazon? Send us
        a note and we&apos;ll get back to you by email.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>

      <p className="mt-10 font-[family-name:var(--font-cormorant)] text-[15px] text-[var(--text-muted)]">
        Or email us directly at{" "}
        <a
          href="mailto:d9572712747@gmail.com"
          className="text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4"
        >
          d9572712747@gmail.com
        </a>
      </p>
    </main>
  );
}
