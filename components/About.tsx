import LazyImage from "./LazyImage";
import Reveal from "./Reveal";

const points = [
  { value: "South", label: "Coast, hill country, and the cultural triangle" },
  { value: "Local", label: "Routes built around real places, not checklists" },
  { value: "Flexible", label: "Plans that can change when the road does" },
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
          <p className="kicker text-green1 mb-5">How we plan</p>
          <h2 className="font-display italic font-medium text-4xl sm:text-5xl lg:text-[54px] mb-6 leading-[0.98]">
            Start with the route,<br className="hidden sm:block" /> not the brochure
          </h2>
          <p className="text-muted text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-xl font-light">
            Island Odyssey Co. plans trips around the way Sri Lanka actually works. Distances,
            weather, opening times, train schedules, and the time it takes to get from one place
            to the next all matter. The result is a route with room to breathe, rather than a list
            of sights to rush through.
          </p>
          <div className="grid grid-cols-3 gap-5 sm:gap-8 max-w-xl pt-7 border-t border-line">
            {points.map((point) => (
              <div key={point.value}>
                <p className="font-display italic font-medium text-2xl sm:text-3xl text-green1">
                  {point.value}
                </p>
                <p className="text-[11px] sm:text-xs text-muted leading-snug mt-2 font-light">{point.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
