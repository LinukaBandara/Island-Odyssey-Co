import Mark from "./Mark";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/siteConfig";

const socials = [
  { label: "Facebook", value: siteConfig.social.facebook, short: "f" },
  { label: "Instagram", value: siteConfig.social.instagram, short: "ig" },
  { label: "TikTok", value: siteConfig.social.tiktok, short: "tt" },
].filter((social) => social.value);

export default function Footer() {
  return (
    <footer className="bg-primary text-white/55 pt-20 pb-8 px-4 sm:px-8 lg:px-12">
      <Reveal className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        <div>
          <a href="/" className="flex items-center gap-2.5 font-display italic font-medium text-lg text-white mb-4">
            <Mark />
            Island Odyssey Co.
          </a>
          <p className="text-xs leading-relaxed max-w-[220px] font-light">
            Crafted journeys for the curious traveler.
          </p>
        </div>

        <div>
          <p className="text-white text-[11px] font-semibold tracking-wide uppercase mb-4">Explore</p>
          <ul className="space-y-2.5 text-[13px] font-light">
            <li><a href="/destinations" className="hover:text-white transition-colors">Destinations</a></li>
            <li><a href="/tours" className="hover:text-white transition-colors">Tours</a></li>
            <li><a href="/reviews" className="hover:text-white transition-colors">Reviews</a></li>
            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-[11px] font-semibold tracking-wide uppercase mb-4">Contact</p>
          <ul className="space-y-2.5 text-[13px] font-light">
            {siteConfig.contact.email && <li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a></li>}
            {siteConfig.contact.phone && <li><a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a></li>}
            {siteConfig.contact.location && <li>{siteConfig.contact.location}</li>}
          </ul>
        </div>

        <div>
          <p className="text-white text-[11px] font-semibold tracking-wide uppercase mb-4">Follow</p>
          {socials.length > 0 ? (
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="w-9 h-9 rounded-[3px] border border-white/15 flex items-center justify-center text-xs hover:border-white/40 hover:text-white transition-colors"
                >
                  {social.short}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-xs font-light">Social links coming soon.</p>
          )}
        </div>
      </Reveal>
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[11px] font-light">
        <p>© {new Date().getFullYear()} Island Odyssey Co. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          <span className="text-white/20">•</span>
          <a
            href="https://ark-ii.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-white/70 transition-colors"
            aria-label="Built by ARK II"
          >
            Built by ARK II
          </a>
        </div>
      </div>
    </footer>
  );
}
