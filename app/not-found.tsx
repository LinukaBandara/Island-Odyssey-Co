import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader
        kicker="404"
        title="This trail doesn't exist"
        subtitle="The page you're looking for may have moved, or the link might be out of date."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 text-center">
        <p className="text-muted text-sm mb-8 font-light">
          Try one of these instead:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Tours", href: "/tours" },
            { label: "Reviews", href: "/reviews" },
            { label: "Blog", href: "/blog" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-[2px] border border-primary text-primary text-xs font-semibold tracking-wide uppercase px-5 py-2.5 hover:bg-primary hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
