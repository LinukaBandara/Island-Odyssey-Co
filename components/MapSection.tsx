"use client";

import Image from "next/image";
import { useState } from "react";
import { destinations } from "@/lib/data";
import Reveal from "./Reveal";

export default function MapSection() {
  const [active, setActive] = useState(destinations[0].slug);
  const activeDest = destinations.find((d) => d.slug === active)!;

  return (
    <section id="destinations" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-primary text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="kicker text-gold mb-4">Destinations</p>
          <h2 className="font-display italic font-medium text-3xl sm:text-4xl mb-3">
            Where you'll go
          </h2>
          <p className="text-white/55 text-[15px] max-w-md mb-8 font-light leading-relaxed">
            Tap a pin to preview the region, or a name below to jump straight to it.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {destinations.map((d) => (
              <button
                key={d.slug}
                onClick={() => setActive(d.slug)}
                className={`rounded-[3px] px-4 py-2 text-[11px] font-bold tracking-wide border transition-colors duration-300 ${
                  active === d.slug
                    ? "bg-white text-primary border-white"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          <div className="flex gap-4 items-center bg-white/[0.04] rounded-[3px] p-4 border border-white/10">
            <div className="relative w-20 h-20 shrink-0 overflow-hidden">
              <Image src={activeDest.thumb} alt={activeDest.alt} fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <p className="font-display italic font-medium text-lg mb-1">{activeDest.name}</p>
              <p className="text-white/55 text-xs leading-relaxed font-light">{activeDest.desc}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
            <Image
              src="/images/map-bg.jpg"
              alt=""
              fill
              sizes="400px"
              className="object-contain opacity-80"
            />
            {destinations.map((d) => (
              <button
                key={d.slug}
                onClick={() => setActive(d.slug)}
                aria-label={`Show ${d.name} on map`}
                style={{ top: d.mapPos.top, left: d.mapPos.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    active === d.slug
                      ? "w-3 h-3 bg-gold ring-1 ring-offset-2 ring-offset-primary ring-gold"
                      : "w-2 h-2 bg-white/60 group-hover:bg-gold"
                  }`}
                />
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap text-[10px] font-semibold tracking-wide px-2 py-1 rounded-[2px] bg-white text-primary transition-opacity duration-300 ${
                    active === d.slug ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {d.name}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
