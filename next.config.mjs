/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All destination photos are now bundled locally under /public/images
    // and served through next/image's built-in optimizer (automatic
    // resizing, AVIF/WebP negotiation, lazy loading) — no remote hosts
    // needed anymore.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Force HTTPS on every future visit for a year, including subdomains.
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
