"use client";

import { useEffect, useState } from "react";

export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-primary text-white rounded-[3px] border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-2xl">
        <p className="text-[13px] text-white/70 leading-relaxed font-light flex-1">
          We use a small number of cookies to understand site traffic and improve your visit. See our{" "}
          <a href="/privacy" className="link-underline text-white font-medium">
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => choose("declined")}
            className="rounded-[2px] border border-white/30 text-white text-[11px] font-semibold tracking-wide uppercase px-5 py-2.5 hover:border-white/60 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-[2px] bg-white text-primary text-[11px] font-semibold tracking-wide uppercase px-5 py-2.5 hover:bg-gold transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
