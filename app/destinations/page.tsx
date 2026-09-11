import type { Metadata } from "next";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Galle, Kandy, Yala, Dambulla, and Ella — five starting points for a Sri Lanka itinerary.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return <MapSection />;
}
