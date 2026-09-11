import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Tours from "@/components/Tours";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Starting itineraries across Sri Lanka's coastline, hill country, wildlife parks, and ancient cities — reshape any of them to fit your trip.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <PageBanner label="Island Odyssey Co. / Tours" />
      <Tours />
    </>
  );
}
