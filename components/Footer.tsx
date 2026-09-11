import Mark from "./Mark";
import Reveal from "./Reveal";

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
            <li>hello@islandodysseyco.com</li>
            <li>+94 77 000 0000</li>
            <li>Ella, Sri Lanka</li>
          </ul>
        </div>

        <div>
          <p className="text-white text-[11px] font-semibold tracking-wide uppercase mb-4">Follow</p>
          <div className="flex gap-2">
            {["f", "ig", "tt", "✉"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-[3px] border border-white/15 flex items-center justify-center text-xs hover:border-white/40 hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-[11px] font-light">
        <p>© {new Date().getFullYear()} Island Odyssey Co. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
