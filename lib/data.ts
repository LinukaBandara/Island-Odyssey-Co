export type Destination = {
  slug: string;
  name: string;
  subtitle: string;
  desc: string;
  img: string;
  thumb: string;
  alt: string;
  tag: "beach" | "wildlife" | "culture" | "hiking";
  mapPos: { top: string; left: string };
  coordinates: { lat: number; lng: number };
};

export const destinations: Destination[] = [
  {
    slug: "galle",
    name: "Galle",
    subtitle: "Fort & coast",
    desc: "Ramparts, rain trees, and a reef right off the seawall — Galle moves at the pace of a town that stopped rushing decades ago.",
    img: "/images/galle.jpg",
    thumb: "/images/galle-thumb.jpg",
    alt: "Aerial view of Galle Fort's lighthouse and coastline at dusk, Sri Lanka",
    tag: "beach",
    mapPos: { top: "83%", left: "34%" },
    coordinates: { lat: 6.0329, lng: 80.2168 },
  },
  {
    slug: "kandy",
    name: "Kandy",
    subtitle: "Highland tea",
    desc: "Lake, temple bells, and terraces of tea climbing into the mist — Kandy is where the island's pace first slows down.",
    img: "/images/kandy.jpg",
    thumb: "/images/kandy-thumb.jpg",
    alt: "The Temple of the Sacred Tooth Relic illuminated at dusk in Kandy, Sri Lanka",
    tag: "culture",
    mapPos: { top: "48%", left: "52%" },
    coordinates: { lat: 7.2906, lng: 80.6337 },
  },
  {
    slug: "yala",
    name: "Yala",
    subtitle: "Leopard country",
    desc: "The densest leopard population anywhere on earth, shared with elephants, crocodiles, and more bird calls than you can place.",
    img: "/images/yala.jpg",
    thumb: "/images/yala-thumb.jpg",
    alt: "A family of wild elephants walking through the bush in Yala National Park, Sri Lanka",
    tag: "wildlife",
    mapPos: { top: "78%", left: "68%" },
    coordinates: { lat: 6.3725, lng: 81.5185 },
  },
  {
    slug: "dambulla",
    name: "Dambulla",
    subtitle: "Ancient rock",
    desc: "A citadel carved into a granite outcrop fifteen centuries ago, still standing over the plains it was built to watch.",
    img: "/images/dambulla.jpg",
    thumb: "/images/dambulla-thumb.jpg",
    alt: "Sigiriya rock fortress rising above the forest canopy near Dambulla, Sri Lanka",
    tag: "culture",
    mapPos: { top: "32%", left: "55%" },
    coordinates: { lat: 7.8731, lng: 80.7718 },
  },
  {
    slug: "ella",
    name: "Ella",
    subtitle: "Hill trails",
    desc: "Train smoke, tea rows, and a nine-arch viaduct — Ella rewards anyone willing to walk twenty minutes past the lookout crowd.",
    img: "/images/ella.jpg",
    thumb: "/images/ella-thumb.jpg",
    alt: "A blue train crossing the Nine Arch Bridge through the forest near Ella, Sri Lanka",
    tag: "hiking",
    mapPos: { top: "64%", left: "58%" },
    coordinates: { lat: 6.8667, lng: 81.0466 },
  },
];

export type Tour = {
  id: string;
  name: string;
  days: number;
  price: number;
  img: string;
  alt: string;
  highlights: string[];
  tag: Destination["tag"];
};

export const tours: Tour[] = [
  {
    id: "southern-shoreline",
    name: "Southern Shoreline",
    days: 5,
    price: 640,
    img: "/images/galle-thumb.jpg",
    alt: "Aerial view of Galle Fort's lighthouse and coastline, Sri Lanka",
    highlights: ["Sunrise on the Galle ramparts", "Snorkeling off Unawatuna", "A quiet fishing village lunch"],
    tag: "beach",
  },
  {
    id: "highland-rail",
    name: "The Highland Rail",
    days: 6,
    price: 760,
    img: "/images/ella-thumb.jpg",
    alt: "Train crossing the Nine Arch Bridge near Ella, Sri Lanka",
    highlights: ["Kandy–Ella window-seat train", "Nine Arch at first light", "A working tea factory tour"],
    tag: "hiking",
  },
  {
    id: "leopard-tracks",
    name: "Leopard Tracks",
    days: 4,
    price: 610,
    img: "/images/yala-thumb.jpg",
    alt: "Wild elephants in Yala National Park, Sri Lanka",
    highlights: ["Two dawn safari drives", "A tracker who reads pug marks", "Wetland birding at Bundala"],
    tag: "wildlife",
  },
  {
    id: "stone-and-scripture",
    name: "Stone & Scripture",
    days: 7,
    price: 910,
    img: "/images/dambulla-thumb.jpg",
    alt: "Sigiriya rock fortress near Dambulla, Sri Lanka",
    highlights: ["Sunrise climb up Dambulla rock", "Cave temple frescoes", "Temple of the Tooth ceremony, Kandy"],
    tag: "culture",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Naledi M.",
    location: "Cape Town, South Africa",
    quote:
      "We told them we didn't want a checklist and they actually listened — three stops instead of eight, and time to sit still at each one. The tea factory detour wasn't even on the original plan.",
    rating: 5,
  },
  {
    name: "Tomás R.",
    location: "Lisbon, Portugal",
    quote:
      "Our tracker in Yala predicted the leopard sighting almost to the minute. Every transfer after that ran the same way — quietly, and exactly on time.",
    rating: 5,
  },
  {
    name: "Haruki F.",
    location: "Fukuoka, Japan",
    quote:
      "Traveling with two kids usually means compromise. Here it meant a shorter list and longer mornings — Dambulla before the heat, home by nap time.",
    rating: 4,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  readTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "monsoon-timing-guide",
    title: "Two coasts, two monsoons — how to time a route",
    excerpt: "The weather that ruins a beach week in the south is often perfect in the hills. Here's the split.",
    img: "/images/kandy-thumb.jpg",
    alt: "Temple of the Sacred Tooth Relic in Kandy, Sri Lanka",
    readTime: "6 min read",
    body: [
      "Sri Lanka runs on two monsoons, not one, and most of the frustration people report after a trip comes down to timing a route around only one of them.",
      "The southwest monsoon runs roughly May to September and soaks the west and south coasts — Galle, Unawatuna, Hikkaduwa — along with the hill country. The northeast monsoon runs roughly October to January and does the same to the east coast and the cultural triangle around Dambulla and Sigiriya.",
      "The practical upshot: if you're visiting between May and September, favor the east coast and the cultural triangle, and treat the south coast as a bonus rather than the anchor of the trip. Flip that between November and March, when the south and west coasts are at their driest and the east coast is at its wettest.",
      "Ella and Kandy sit in a kind of middle ground — rain is possible year-round in the hills, but mornings are reliably clear even in shoulder months, which is why we build hill-country mornings and coastal afternoons into the same itinerary whenever the calendar allows it.",
      "None of this is exact — weather in Sri Lanka moves fast and locally — but planning the rough shape of a route around these two systems, instead of ignoring them, is the single biggest lever for a trip that doesn't get rained out.",
    ],
  },
  {
    slug: "nine-arch-quiet-hours",
    title: "Nine Arch Bridge without the 9am crowd",
    excerpt: "Two trains pass daily. Miss the tour-bus window and you'll likely have the tracks to yourself.",
    img: "/images/ella-thumb.jpg",
    alt: "Train crossing the Nine Arch Bridge near Ella, Sri Lanka",
    readTime: "4 min read",
    body: [
      "The Nine Arch Bridge photo you've seen — a blue train curving through green forest on a century-old viaduct — is real, but it only happens twice a day, and everyone knows the times.",
      "The 9:30am train from Ella and the early-afternoon service from Badulla both draw a genuine crowd; by 9:15 the viewing platforms are shoulder to shoulder and the walking path in from town is a slow shuffle.",
      "The bridge itself is worth visiting even without a train in frame. Arrive at first light, around 6am, and you'll likely have the arches to yourself — the light is better anyway, low and warm through the mist that regularly sits in this valley.",
      "If you do want the train-crossing shot, the trick isn't the platform everyone stands on — it's the second viewpoint a short walk further along the track, less obvious from the main path, where you get the same curve of the bridge without forty other people in frame.",
      "Either way, budget the twenty-minute walk from Ella town rather than a tuk-tuk to the main entrance — the walk itself, through tea rows and small farms, is a big part of why people end up loving this stop.",
    ],
  },
  {
    slug: "yala-second-drive",
    title: "Why the second safari drive beats the first",
    excerpt: "Everyone books the sunrise slot. The quieter mid-morning drive is when the cats actually move.",
    img: "/images/yala-thumb.jpg",
    alt: "Wild elephants in Yala National Park, Sri Lanka",
    readTime: "5 min read",
    body: [
      "Almost every visitor to Yala books the 6am drive, on the reasonable assumption that dawn is when wildlife is most active. It's not wrong, exactly — but it overlooks something trackers here have known for years.",
      "The 6am slot sends every jeep in the park through the same two or three access roads at once, which means the animals nearest those roads scatter early. By 8am, the park is quieter, fewer engines are running, and leopards that moved away from the entrance roads at dawn often circle back.",
      "We now book most guests on a two-drive plan: an early-but-not-earliest departure, followed by a second drive starting mid-morning once the first wave of jeeps has thinned out. Sightings on the second drive, especially of leopards and sloth bears, have been noticeably better across the trackers we work with.",
      "It also just makes for a better morning — less jostling for position at a sighting, more time to actually watch an animal rather than photograph it and move on.",
      "If you can only do one drive, ask your tracker which entrance is quietest that day rather than defaulting to the earliest possible start time. Timing within the park matters more than the alarm clock.",
    ],
  },
];

export const filterTags: { label: string; value: Destination["tag"] | "all" }[] = [
  { label: "All trips", value: "all" },
  { label: "Beach", value: "beach" },
  { label: "Wildlife", value: "wildlife" },
  { label: "Culture", value: "culture" },
  { label: "Hiking", value: "hiking" },
];
