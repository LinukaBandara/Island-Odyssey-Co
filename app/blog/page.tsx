import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogPreview from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Timing, routes, and quiet-hours tips for Sri Lanka's most-visited spots.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageBanner label="Island Odyssey Co. / Journal" />
      <BlogPreview />
    </>
  );
}
