"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { destinations } from "@/lib/data";
import { useItineraryModal } from "./ItineraryModalContext";

const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const { openModal } = useItineraryModal();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % destinations.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reducedMotion]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % destinations.length) + destinations.length) % destinations.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  const active = destinations[current];
  const next = destinations[(current + 1) % destinations.length];

  return (
    <section
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        setPaused(true);
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        setPaused(false);
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) {
          goTo(delta < 0 ? current + 1 : current - 1);
        }
        touchStartX.current = null;
      }}
      aria-roledescription="carousel"
      aria-label="Featured destinations"
    >
      <link rel="preload" as="image" href={next.img} />

      {destinations.map((d, i) => (
        <div
          key={d.slug}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            i === current ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          <div className={`absolute inset-0 ${i === current && !reducedMotion ? "animate-kenburns" : ""}`}>
            <Image
              src={d.img}
              alt={d.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/5 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-black/10 pointer-events-none" />

      {/* thin vertical index ticks, not glowing dots */}
      <div className="hidden sm:flex flex-col gap-4 absolute left-6 top-1/2 -translate-y-1/2 z-[6]">
        {destinations.map((d, i) => (
          <button
            key={d.slug}
            onClick={() => goTo(i)}
            aria-label={`Go to ${d.name}`}
            aria-current={i === current}
            className="group flex items-center"
          >
            <span
              className={`block transition-all duration-500 ${
                i === current ? "w-[3px] h-7 bg-gold" : "w-[3px] h-3 bg-white/35 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="relative z-[5] h-full flex items-center px-5 sm:px-8 lg:px-14">
        <div className="max-w-md pt-16 sm:pt-0 sm:pl-6">
          <p className="kicker text-white/60 mb-5">
            {String(current + 1).padStart(2, "0")} — {String(destinations.length).padStart(2, "0")}
          </p>
          <h1
            key={active.slug}
            className="font-display italic font-medium text-[42px] sm:text-6xl lg:text-[72px] leading-[0.92] mb-5 animate-fadein text-white"
          >
            {active.name}
          </h1>
          <p
            key={active.slug + "-desc"}
            className="text-white/80 text-[15px] leading-relaxed max-w-sm mb-8 animate-fadein font-light"
          >
            {active.desc}
          </p>
          <button
            onClick={() => openModal(active.name)}
            className="group inline-flex items-center gap-3 text-white text-[12px] font-bold tracking-[0.18em] uppercase"
          >
            <span className="link-underline">Explore {active.name}</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* card rail */}
      <div className="absolute z-[6] right-0 left-0 sm:left-auto bottom-24 sm:bottom-16 px-4 sm:px-8 lg:px-14">
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar snap-x snap-mandatory sm:justify-end">
          {destinations.map((d, i) => {
            const isCurrent = i === current;
            return (
              <button
                key={d.slug}
                onClick={() => goTo(i)}
                aria-label={`Show ${d.name}`}
                className={`relative shrink-0 snap-start overflow-hidden border transition-all duration-500 ${
                  isCurrent
                    ? "w-28 h-40 sm:w-36 sm:h-56 border-white/50 brightness-100"
                    : "w-20 h-32 sm:w-24 sm:h-44 border-white/10 brightness-[0.6] translate-y-2 sm:translate-y-3"
                }`}
              >
                <Image src={d.thumb} alt="" fill sizes="150px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span className="absolute left-2.5 bottom-2.5 text-left leading-tight">
                  <b className="block text-white text-[11px] sm:text-[13px] font-semibold">{d.name}</b>
                  <span className="block text-white/70 text-[9px] sm:text-[10.5px] tracking-wide">
                    {d.subtitle}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* arrows: quiet outline, identical treatment */}
      <div className="absolute z-[6] left-4 sm:left-8 lg:left-14 bottom-6 flex gap-2">
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Previous destination"
          className="w-10 h-10 border border-white/25 text-white/85 flex items-center justify-center hover:border-white/60 hover:text-white transition-colors duration-300"
        >
          ←
        </button>
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next destination"
          className="w-10 h-10 border border-white/25 text-white/85 flex items-center justify-center hover:border-white/60 hover:text-white transition-colors duration-300"
        >
          →
        </button>
      </div>
    </section>
  );
}
