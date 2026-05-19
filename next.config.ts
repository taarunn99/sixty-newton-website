import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: false,

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  outputFileTracingRoot: path.resolve(process.cwd()),

  // Security headers (sec section of pre-prod checklist)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  // 301 redirect map
  async redirects() {
    return [
      // /clients merged into /portfolio
      { source: "/clients", destination: "/portfolio", permanent: true },
      // /contact absorbed into /request-a-quote
      { source: "/contact", destination: "/request-a-quote", permanent: true },
      // /applicator-certifications absorbed into /approach (first sections)
      { source: "/applicator-certifications", destination: "/approach", permanent: true },
      { source: "/applicator-certifications/:path*", destination: "/approach", permanent: true },
    ];
  },

  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion", "gsap", "@radix-ui/react-icons"],
  },
};

export default nextConfig;
