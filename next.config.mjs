/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress responses with Gzip/Brotli
  compress: true,

  // Only render on client what needs JS — reduce the JS bundle for non-interactive pages
  reactStrictMode: true,

  // Bundle optimizations — tree-shake specific packages
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options",        value: "DENY" },
        ],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|svg|ico|woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
