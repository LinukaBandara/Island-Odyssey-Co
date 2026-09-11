import LazyImage from "./LazyImage";
import Reveal from "./Reveal";

const stats = [
  { value: "12", label: "years planning routes across the island" },
  { value: "3,400+", label: "travelers guided door to door" },
  { value: "4.9", label: "average rating across every trip" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="relative h-72 sm:h-[26rem] rounded-[3px] overflow-hidden order-2 lg:order-1 border border-line">
          <LazyImage
            src="/images/kandy.jpg"
            alt="The Temple of the Sacred Tooth Relic illuminated at dusk in Kandy, Sri Lanka"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="kicker text-green1 mb-4">Who plans this</p>
          <h2 className="font-display italic font-medium text-3xl sm:text-4xl mb-4 leading-tight">
            Built by people who drove<br className="hidden sm:block" /> the route first
          </h2>
          <p className="text-muted text-sm sm:text-[15px] leading-relaxed mb-8 max-w-md font-light">
            Island Odyssey Co. is a small team based between Colombo and the hill country. Nobody
            drafts an itinerary for a place they haven't slept in — so timings, detours, and the
            occasional closed road all come from someone who's actually been there this season.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-line">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display italic font-medium text-2xl sm:text-3xl text-green1">
                  {s.value}
                </p>
                <p className="text-[11px] sm:text-xs text-muted leading-snug mt-1.5 font-light">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
