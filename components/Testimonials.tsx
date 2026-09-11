import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

function Rating({ value }: { value: number }) {
  return (
    <div className="flex gap-2.5 items-baseline mb-5">
      <span className="font-display italic font-medium text-lg text-green1">{value}.0</span>
      <span className="text-[10px] tracking-widest uppercase text-muted">/ 5</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <p className="kicker text-green1 mb-4">Reviews</p>
          <h2 className="font-display italic font-medium text-3xl sm:text-4xl">
            What travelers say
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="p-7 sm:p-8 bg-white flex flex-col"
            >
              <Rating value={t.rating} />
              <blockquote className="text-[15px] leading-relaxed text-muted flex-1 font-light">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line text-xs">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-muted font-light"> — {t.location}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
