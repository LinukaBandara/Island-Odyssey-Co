import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern use of ${siteConfig.name} and its trip-planning services.`,
  alternates: { canonical: "/terms" },
};

const updated = "September 9, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Terms & Conditions" subtitle={`Last updated ${updated}`} />
      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="space-y-10 text-[15px] leading-relaxed text-muted font-light">
          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">1. Agreement</h2>
            <p>
              By using {siteConfig.url} or submitting an itinerary request, you agree to these terms.
              If you don't agree, please don't use the site.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">2. What we provide</h2>
            <p>
              We provide trip-planning advice and custom itineraries for travel in Sri Lanka. Prices
              shown for tours are indicative starting prices per person and are confirmed only once we
              send you a written quote.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">3. Bookings & payment</h2>
            <p>
              A quote is not a confirmed booking. Bookings are confirmed once you've received written
              confirmation and any required deposit has been received. Cancellation and refund terms
              are provided with each individual quote, since they vary by season and supplier.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">4. Travel risk</h2>
            <p>
              Travel involves inherent risk — weather, wildlife, road conditions, and local
              circumstances beyond our control. We recommend comprehensive travel insurance for every
              trip we plan. We are not liable for delays, losses, or injuries caused by third-party
              suppliers, natural events, or circumstances outside our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">5. Website use</h2>
            <p>
              You agree not to misuse this site — including attempting to access it via automated
              means beyond normal browsing, or submitting false information through our forms. Content
              on this site (text, photos, and design) belongs to {siteConfig.name} or its licensors and
              may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">6. Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the site after changes are
              posted means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">7. Contact</h2>
            <p>
              Questions about these terms: {" "}
              <a href="mailto:hello@islandodysseyco.com" className="link-underline text-ink font-medium">
                hello@islandodysseyco.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
