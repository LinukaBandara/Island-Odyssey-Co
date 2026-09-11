import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
};

const updated = "September 9, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Privacy Policy" subtitle={`Last updated ${updated}`} />
      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="space-y-10 text-[15px] leading-relaxed text-muted font-light">
          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">1. Who we are</h2>
            <p>
              {siteConfig.name} ("we", "us") plans custom Sri Lanka itineraries. This policy explains
              what information we collect through {siteConfig.url}, why we collect it, and the choices
              you have. If you have questions, contact us at{" "}
              <a href="mailto:hello@islandodysseyco.com" className="link-underline text-ink font-medium">
                hello@islandodysseyco.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">2. Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-ink font-semibold">Itinerary requests:</strong> name, email,
                destination interests, trip length, and travel-party size, submitted through the "Get
                Free Itinerary" form.
              </li>
              <li>
                <strong className="text-ink font-semibold">Newsletter sign-up:</strong> your email
                address, if you subscribe.
              </li>
              <li>
                <strong className="text-ink font-semibold">Usage data:</strong> pages visited, device
                and browser type, and approximate location, collected via analytics — only after you
                accept cookies in the banner.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">3. How we use it</h2>
            <p>
              To respond to itinerary requests, send the newsletter (only if you subscribed), improve
              this website, and meet legal obligations. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">4. Cookies</h2>
            <p>
              We use essential cookies to run the site, and — only with your consent — analytics
              cookies to understand traffic. You can change your choice at any time by clearing your
              browser's site data for this domain, which will show the consent banner again.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">5. Data retention & sharing</h2>
            <p>
              We keep itinerary requests only as long as needed to plan your trip and follow up, and
              newsletter addresses until you unsubscribe. We share data with service providers (such
              as email delivery and analytics) strictly to operate the site, under their own
              confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">6. Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct, or delete your
              personal information, or to opt out of marketing emails (every newsletter includes an
              unsubscribe link). To exercise any of these rights, email{" "}
              <a href="mailto:hello@islandodysseyco.com" className="link-underline text-ink font-medium">
                hello@islandodysseyco.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display italic text-xl font-medium text-ink mb-3">7. Changes</h2>
            <p>
              We may update this policy occasionally. Material changes will be reflected by the "last
              updated" date above.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
