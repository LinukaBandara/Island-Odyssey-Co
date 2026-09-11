import LazyImage from "./LazyImage";
import Reveal from "./Reveal";

const stats = [
  { value: "12", label: "years planning routes across the island" },
  { value: "3,400+", label: "travelers guided door to door" },
  { value: "4.9", label: "average rating across every trip" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-36 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-20 items-center">
        <Reveal className="relative h-80 sm:h-[30rem] lg:h-[34rem] rounded-[3px] overflow-hidden order-2 lg:order-1 border border-line">
          <LazyImage
            src="/images/kandy.jpg"
            alt="The Temple of the Sacred Tooth Relic illuminated at dusk in Kandy, Sri Lanka"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="kicker text-green1 mb-5">Who plans this</p>
          <h2 className="font-display italic font-medium text-4xl sm:text-5xl lg:text-[54px] mb-6 leading-[0.98]">
            Built by people who drove<br className="hidden sm:block" /> the route first
          </h2>
          <p className="text-muted text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-xl font-light">
            Island Odyssey Co. is a small team based between Colombo and the hill country. Nobody
            drafts an itinerary for a place they haven't slept in — so timings, detours, and the
            occasional closed road all come from someone who's actually been there this season.
          </p>
          <div className="grid grid-cols-3 gap-5 sm:gap-8 max-w-xl pt-7 border-t border-line">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display italic font-medium text-3xl sm:text-4xl text-green1">
                  {s.value}
                </p>
                <p className="text-[11px] sm:text-xs text-muted leading-snug mt-2 font-light">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
