"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { CONSENT_KEY, CONSENT_EVENT } from "./CookieConsent";

export default function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(localStorage.getItem(CONSENT_KEY) === "accepted");
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setAllowed(detail === "accepted");
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!siteConfig.gaMeasurementId || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.gaMeasurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
