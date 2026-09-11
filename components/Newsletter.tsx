"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const mountedAtRef = useRef(0);

  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);

    if (String(data.get("website") || "").trim().length > 0) {
      setDone(true); // honeypot tripped — pretend success, don't process
      return;
    }
    if (Date.now() - mountedAtRef.current < 800) {
      setError("Please try again.");
      return;
    }
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setDone(true);
    // Wire this up to your email provider (Mailchimp, ConvertKit, etc.)
  }

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-12 bg-green1">
      <Reveal className="max-w-xl mx-auto text-center text-white">
        <p className="kicker text-gold mb-4">Stay in the loop</p>
        <h2 className="font-display italic font-medium text-2xl sm:text-3xl mb-3">
          Route ideas, twice a month
        </h2>
        <p className="text-white/60 text-sm mb-8 max-w-sm mx-auto font-light leading-relaxed">
          No spam — just new itineraries, seasonal timing tips, and the odd flight deal.
        </p>
        {done ? (
          <p className="text-sm tracking-wide uppercase text-gold font-semibold">You're on the list — welcome.</p>
        ) : (
          <form className="max-w-md mx-auto" onSubmit={handleSubmit} noValidate>
            <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
              <label htmlFor="newsletter-website">Website</label>
              <input id="newsletter-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-[2px] px-5 py-3.5 text-sm text-ink outline-none border border-transparent focus:border-gold bg-white"
              />
              <button
                type="submit"
                className="rounded-[2px] border border-white/30 text-white text-xs font-semibold tracking-wide uppercase px-7 py-3.5 shrink-0 hover:bg-white hover:text-primary transition-colors"
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p role="alert" className="mt-3 text-xs font-semibold text-gold">
                {error}
              </p>
            )}
          </form>
        )}
      </Reveal>
    </section>
  );
}
