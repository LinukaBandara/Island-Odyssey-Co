import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What travelers say about planning a Sri Lanka trip with Island Odyssey Co.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageBanner label="Island Odyssey Co. / Reviews" />
      <Testimonials />
    </>
  );
}
