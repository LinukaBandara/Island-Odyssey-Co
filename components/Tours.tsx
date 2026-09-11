"use client";

import { useMemo, useState } from "react";
import { tours, filterTags, Destination } from "@/lib/data";
import LazyImage from "./LazyImage";
import { useItineraryModal } from "./ItineraryModalContext";
import Reveal from "./Reveal";

export default function Tours() {
  const [tag, setTag] = useState<Destination["tag"] | "all">("all");
  const { openModal } = useItineraryModal();

  const filtered = useMemo(
    () => (tag === "all" ? tours : tours.filter((t) => t.tag === tag)),
    [tag]
  );

  return (
    <section id="tours" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="kicker text-green1 mb-4">Popular routes</p>
            <h2 className="font-display italic font-medium text-3xl sm:text-4xl mb-3">
              Starting itineraries
            </h2>
            <p className="text-muted max-w-md text-sm font-light leading-relaxed">
              Reshape any of these entirely — swap a day, add a region, change the pace.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="flex gap-2 overflow-x-auto no-scrollbar mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTags.map((f) => (
            <button
              key={f.value}
              onClick={() => setTag(f.value)}
              className={`shrink-0 rounded-[3px] px-4 py-2 text-[11px] font-semibold tracking-wide border transition-colors duration-300 ${
                tag === f.value
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-muted border-black/15 hover:border-black/35"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 90}
              className="group rounded-[3px] overflow-hidden bg-white border border-line flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <LazyImage
                  src={t.img}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-elegant"
                />
                <span className="absolute top-3 left-3 bg-white/95 rounded-[2px] px-2.5 py-1 text-[10px] font-semibold tracking-wide">
                  {t.days} days
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display italic font-medium text-xl mb-2.5">{t.name}</h3>
                <ul className="text-[12.5px] text-muted space-y-1.5 mb-5 flex-1 font-light">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-green1">—</span> {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-line">
                  <div>
                    <span className="text-[10px] text-muted block tracking-wide uppercase">from</span>
                    <span className="font-display italic font-medium text-lg">${t.price}</span>
                  </div>
                  <button
                    onClick={() => openModal(t.name)}
                    className="rounded-[2px] border border-primary text-primary text-[11px] font-semibold tracking-wide uppercase px-4 py-2.5 hover:bg-primary hover:text-white transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
