import Link from "next/link";
import { blogPosts } from "@/lib/data";
import LazyImage from "./LazyImage";
import Reveal from "./Reveal";

export default function BlogPreview() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <p className="kicker text-green1 mb-4">From the journal</p>
          <h2 className="font-display italic font-medium text-3xl sm:text-4xl">Field notes</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {blogPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link href={`/blog/${p.slug}`} className="group flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-[3px] border border-line mb-4">
                  <LazyImage
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-elegant"
                  />
                </div>
                <span className="text-[10px] font-semibold text-green1 tracking-wide uppercase">{p.readTime}</span>
                <h3 className="font-display italic font-medium text-lg mt-2 mb-2 leading-snug link-underline inline">
                  {p.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed font-light">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
