export const siteConfig = {
  name: "Island Odyssey Co.",
  tagline: "Crafted journeys for the curious traveler",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.islandodysseyco.com",
  description:
    "Handcrafted Sri Lanka itineraries across coastline, hill country, ancient cities, and wildlife parks.",
  ogImage: "/og-image.jpg",
  // Set these in your hosting provider's environment variables — never
  // commit real IDs to the repo. Analytics only loads once a value is
  // present here AND the visitor has accepted cookies.
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID || "",
};
