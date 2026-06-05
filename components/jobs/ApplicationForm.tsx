"use client";

import { useState, FormEvent } from "react";

const ROLES = [
  "Manager",
  "Assistant Manager",
  "Chef",
  "Housekeeping",
  "Restaurant Staff",
  "Maintenance Staff",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "306cdf2b-c9bd-4015-9d39-b82d4d4c6525",
          subject: `Job Application — ${data.role} | The Dandelion`,
          ...data,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-sage/30 bg-sage/5 px-8 py-12 text-center">
        <div className="text-3xl mb-4">✦</div>
        <h3 className="font-heading text-2xl text-gold-dark mb-3">Application received</h3>
        <p className="font-body text-sm text-brown-body leading-relaxed">
          Thank you for your interest in joining The Dandelion. We&apos;ll be in touch
          shortly. If you haven&apos;t already, please email your CV to{" "}
          <a href="mailto:Help@theDandelion.in" className="text-sage hover:text-gold transition-colors">
            Help@theDandelion.in
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-body text-xs tracking-[0.12em] uppercase text-brown-body/60">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="font-body text-sm text-brown-body bg-white border border-earthen/30 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors placeholder:text-brown-body/30"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-body text-xs tracking-[0.12em] uppercase text-brown-body/60">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="font-body text-sm text-brown-body bg-white border border-earthen/30 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors placeholder:text-brown-body/30"
          />
        </div>
      </div>

      {/* Phone + Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="font-body text-xs tracking-[0.12em] uppercase text-brown-body/60">
            Phone <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="font-body text-sm text-brown-body bg-white border border-earthen/30 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors placeholder:text-brown-body/30"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="role" className="font-body text-xs tracking-[0.12em] uppercase text-brown-body/60">
            Role applying for <span className="text-gold">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            defaultValue=""
            className="font-body text-sm text-brown-body bg-white border border-earthen/30 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors appearance-none"
          >
            <option value="" disabled>Select a role…</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-body text-xs tracking-[0.12em] uppercase text-brown-body/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a little about yourself and your experience…"
          className="font-body text-sm text-brown-body bg-white border border-earthen/30 rounded-lg px-4 py-3 focus:outline-none focus:border-sage transition-colors resize-none placeholder:text-brown-body/30"
        />
      </div>

      {/* CV note */}
      <p className="font-body text-xs text-brown-body/55 leading-relaxed">
        No file upload — please email your CV directly to{" "}
        <a href="mailto:Help@theDandelion.in" className="text-sage hover:text-gold transition-colors">
          Help@theDandelion.in
        </a>
        .
      </p>

      {status === "error" && (
        <p className="font-body text-xs text-red-600">
          Something went wrong. Please try again or email us directly at Help@theDandelion.in.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-8 py-3.5 rounded hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Submit Application"}
      </button>
    </form>
  );
}
