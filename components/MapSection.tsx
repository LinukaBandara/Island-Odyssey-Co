"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { destinations } from "@/lib/data";
import Reveal from "./Reveal";

function buildMapUrl(lat: number, lng: number) {
  const latDelta = 0.045;
  const lngDelta = 0.055;
  const bbox = [
    lng - lngDelta,
    lat - latDelta,
    lng + lngDelta,
    lat + latDelta,
  ].join(",");

  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
    bbox
  )}&layer=mapnik&marker=${lat},${lng}`;
}

function buildMapLink(lat: number, lng: number) {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=12/${lat}/${lng}`;
}

export default function MapSection() {
  const [active, setActive] = useState(destinations[0].slug);
  const activeDest = destinations.find((d) => d.slug === active)!;
  const mapUrl = useMemo(
    () => buildMapUrl(activeDest.coordinates.lat, activeDest.coordinates.lng),
    [activeDest]
  );
  const mapLink = buildMapLink(activeDest.coordinates.lat, activeDest.coordinates.lng);

  return (
    <section id="destinations" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-primary text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="kicker text-gold mb-4">Destinations</p>
          <h2 className="font-display italic font-medium text-3xl sm:text-4xl mb-3">
            Where you'll go
          </h2>
          <p className="text-white/55 text-[15px] max-w-md mb-8 font-light leading-relaxed">
            Tap a destination to see its real location on the map, then explore the area with the map controls.
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
          <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden rounded-[3px] border border-white/10 bg-white/[0.03] shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full">
                <iframe
                  key={activeDest.slug}
                  title={`${activeDest.name} location map`}
                  src={mapUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-primary px-4 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Current location</p>
                  <p className="mt-1 text-sm font-medium text-white">{activeDest.name}, Sri Lanka</p>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold transition-opacity hover:opacity-70"
                >
                  Open map ↗
                </a>
              </div>
            </div>
            <p className="mt-3 text-center text-[9px] tracking-wide text-white/30">
              Map data © OpenStreetMap contributors
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
