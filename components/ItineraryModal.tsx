"use client";

import { useEffect, useRef, useState } from "react";
import { useItineraryModal } from "./ItineraryModalContext";

const fieldClass =
  "w-full rounded-[2px] border border-black/15 px-4 py-3 text-sm outline-none focus:border-gold transition-colors bg-white";
const labelClass = "block text-[11px] font-semibold tracking-wide text-muted mb-1.5 uppercase";

export default function ItineraryModal() {
  const { state, closeModal } = useItineraryModal();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const openedAtRef = useRef(0);

  useEffect(() => {
    if (!state.open) {
      setSubmitted(false);
      setError("");
      return;
    }
    openedAtRef.current = Date.now();
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state.open, closeModal]);

  if (!state.open) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a field real visitors never see or fill. Bots that
    // auto-fill every input will trip it.
    if (String(data.get("company") || "").trim().length > 0) {
      // Pretend success so the bot doesn't learn it was caught.
      setSubmitted(true);
      return;
    }

    // Time-trap: a submission faster than a human could plausibly type
    // this form is almost certainly scripted.
    if (Date.now() - openedAtRef.current < 1200) {
      setError("Please take a moment to fill in the form.");
      return;
    }

    const name = String(data.get("name") || "").trim();
    if (name.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    setSubmitted(true);
    // Wire this up to your email/CRM provider of choice — this form is
    // front-end only for now.
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-primary/70 backdrop-blur-sm px-0 sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="itinerary-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        ref={dialogRef}
        className="w-full sm:max-w-md bg-white rounded-t-[4px] sm:rounded-[4px] p-7 sm:p-9 animate-fadein max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="kicker text-green1 mb-2">Free planning</p>
            <h2 id="itinerary-modal-title" className="font-display italic text-2xl font-medium">
              Get your itinerary
            </h2>
          </div>
          <button
            onClick={closeModal}
            aria-label="Close dialog"
            className="w-8 h-8 shrink-0 rounded-[2px] flex items-center justify-center hover:bg-black/5 text-muted hover:text-primary transition-colors text-base"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-green1 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#123D2C" strokeWidth="2">
                <path d="M4 12l5 5L20 6" />
              </svg>
            </div>
            <p className="font-display italic text-xl font-medium mb-1.5">Request sent</p>
            <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto font-light">
              A trip planner will reply within one business day with a draft route and pricing.
            </p>
            <button
              onClick={closeModal}
              className="mt-7 rounded-[2px] border border-primary text-primary text-xs font-semibold tracking-wide uppercase px-7 py-3 hover:bg-primary hover:text-white transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <p className="text-[13.5px] text-muted -mt-3 mb-5 font-light leading-relaxed">
              Tell us roughly what you want and we'll draft a day-by-day route, free of charge.
            </p>

            {/* Honeypot — hidden from real visitors, invisible to screen readers */}
            <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
              <label htmlFor="it-company">Company</label>
              <input id="it-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {error && (
              <p role="alert" className="text-xs font-semibold text-[#a13a2f] bg-[#a13a2f]/10 rounded-[2px] px-3 py-2.5">
                {error}
              </p>
            )}

            <div>
              <label htmlFor="it-name" className={labelClass}>Name</label>
              <input
                ref={firstFieldRef}
                id="it-name"
                name="name"
                required
                minLength={2}
                type="text"
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="it-email" className={labelClass}>Email</label>
              <input id="it-email" name="email" required type="email" placeholder="you@example.com" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="it-dest" className={labelClass}>Interested in</label>
              <input
                id="it-dest"
                name="destination"
                type="text"
                defaultValue={state.prefill}
                placeholder="e.g. Ella, Yala, whole island…"
                className={fieldClass}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="it-days" className={labelClass}>Trip length</label>
                <select id="it-days" name="tripLength" className={fieldClass}>
                  <option>3–5 days</option>
                  <option>6–9 days</option>
                  <option>10–14 days</option>
                  <option>15+ days</option>
                </select>
              </div>
              <div>
                <label htmlFor="it-people" className={labelClass}>Travelers</label>
                <select id="it-people" name="travelers" className={fieldClass}>
                  <option>Solo</option>
                  <option>Couple</option>
                  <option>Family</option>
                  <option>Group (5+)</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-[2px] bg-primary text-white font-semibold py-3.5 text-xs tracking-wide uppercase hover:bg-green1 transition-colors mt-2"
            >
              Send request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
