"use client";

import { useEffect, useState } from "react";
import { useItineraryModal } from "./ItineraryModalContext";
import Mark from "./Mark";

const links = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useItineraryModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      id="top"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-primary/95 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-black/35 to-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-[64px] text-white">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Mark />
          <span className="font-display italic font-semibold text-[17px] tracking-tight">
            Island Odyssey Co.
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-[13px] font-semibold tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-white/70 cursor-pointer">
            EN <span aria-hidden className="text-[9px]">▾</span>
          </div>
          <button
            onClick={() => openModal()}
            className="rounded-[3px] border border-white/70 px-5 py-[9px] text-[11px] font-bold tracking-widest uppercase text-white hover:bg-white hover:text-primary transition-colors duration-300"
          >
            Free Itinerary
          </button>
        </div>

        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-[4px] border border-white/25"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative w-4 h-3.5 block">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 top-[6px]" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-4 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 bottom-[6px]" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 pb-6 pt-1 text-white">
          {links.map((l) => (
            <li key={l.href} className="border-b hairline-dark">
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3.5 text-[13px] font-semibold tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <button
              onClick={() => {
                setMenuOpen(false);
                openModal();
              }}
              className="w-full rounded-[3px] border border-white/70 py-3 text-[11px] font-bold tracking-widest uppercase"
            >
              Free Itinerary
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
