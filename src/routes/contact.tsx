import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/primitives";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pride Digital" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact — Pride Digital" },
      { property: "og:description", content: "We respond within one business day." },
      { property: "og:url", content: "https://pride-redesign-1.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://pride-redesign-1.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      await fetch("/api/public/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {}
    setSubmitting(false);
    setSent(true);
  }

  return (
    <>
      <PageHeader marker="00" eyebrow="Contact" title={<>Let's talk.</>} lede="The fastest way to start is to book a call. Or tell us a bit about the project and we'll come back within one business day." />
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4 space-y-8">
          <div>
            <div className="section-marker mb-3">Book directly</div>
            <Link to="/book" className="inline-flex items-center rounded-full bg-ink text-paper px-5 py-3 text-sm font-medium hover:opacity-90 transition">Book a Consultation →</Link>
          </div>
          <div className="border-t border-rule pt-6">
            <div className="section-marker mb-3">Or write</div>
            <ul className="space-y-2 text-sm">
              <li>contact@pridemarketing.co.in</li>
              <li>Response time · &lt; 1 business day</li>
            </ul>
          </div>
        </aside>
        <div className="lg:col-span-8">
          {sent ? (
            <div className="border border-rule p-10">
              <div className="section-marker">Received</div>
              <h2 className="font-display text-3xl mt-3">Thanks — we'll be in touch.</h2>
              <p className="text-warm-5 mt-2">If it's urgent, just book a time directly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" required />
              <Field name="email" type="email" label="Email" required />
              <Field name="company" label="Company" />
              <Field name="budget" label="Budget range" placeholder="e.g. $25k–$50k" />
              <div className="sm:col-span-2">
                <label htmlFor="contact-project" className="section-marker">Project</label>
                <textarea id="contact-project" name="project" required rows={6} className="mt-2 block w-full border border-rule bg-paper px-4 py-3 text-sm focus:outline-none focus:border-ink" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={submitting} className="inline-flex items-center rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-60">
                  {submitting ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required = false, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="section-marker">{label}</label>
      <input id={id} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 block w-full border border-rule bg-paper px-4 py-3 text-sm focus:outline-none focus:border-ink" />
    </div>
  );
}

