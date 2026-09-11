import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [post.img] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article>
      <div className="relative h-[42vh] min-h-[280px] bg-primary">
        <Image src={post.img} alt={post.alt} fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-black/50" />
        <div className="relative h-full flex flex-col justify-end max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 pb-12 pt-28">
          <p className="kicker text-gold mb-4">{post.readTime}</p>
          <h1 className="font-display italic font-medium text-3xl sm:text-4xl text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="space-y-5 text-[16px] leading-relaxed text-muted font-light">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-line">
          <Link href="/blog" className="link-underline text-xs font-semibold tracking-wide uppercase text-ink">
            ← Back to field notes
          </Link>
        </div>
      </div>
    </article>
  );
}
