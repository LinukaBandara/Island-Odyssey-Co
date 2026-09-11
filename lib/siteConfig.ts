export const siteConfig = {
  name: "Island Odyssey Co.",
  tagline: "Crafted journeys for the curious traveler",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.islandodysseyco.com",
  description:
    "Handcrafted Sri Lanka itineraries across coastline, hill country, ancient cities, and wildlife parks.",
  ogImage: "/og-image.jpg",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID || "",
  newsletterFormUrl: process.env.NEXT_PUBLIC_NEWSLETTER_FORM_URL || "",
  contact: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
    location: process.env.NEXT_PUBLIC_CONTACT_LOCATION || "",
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
  },
};
