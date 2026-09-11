import { tripNotes } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <p className="kicker text-green1 mb-4">A few things we consider</p>
          <h2 className="font-display italic font-medium text-3xl sm:text-4xl">
            Good trips are mostly about timing
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {tripNotes.map((note, i) => (
            <Reveal
              key={note.title}
              delay={i * 100}
              className="p-7 sm:p-8 bg-white flex flex-col"
            >
              <span className="text-[10px] tracking-widest uppercase text-muted mb-5">
                0{i + 1}
              </span>
              <h3 className="font-display italic font-medium text-xl sm:text-2xl text-green1 mb-4">
                {note.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted font-light">
                {note.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
