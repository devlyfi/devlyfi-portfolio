import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Disable caching in development
  ...(isDev && {
    onDemandEntries: {
      maxInactiveAge: 0,
      pagesBufferLength: 0,
    },
  }),

  // Image optimization configuration
  images: {
    // Use modern image formats for better compression
    formats: ["image/webp", "image/avif"],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images - disable in dev for HMR
    minimumCacheTTL: process.env.NODE_ENV === "production" ? 60 : 0,

    // Allow SVG images (with security restrictions)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Disable static image imports optimization for better control
    disableStaticImages: false,

    // Remote patterns for external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net", // all facebook CDN regions
      },
      {
        protocol: "https",
        hostname: "lookaside.facebook.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "deveb.co",
      },
    ],
  },

  // Experimental optimizations
  experimental: {
    // Optimize package imports to reduce bundle size (only in production)
    ...(process.env.NODE_ENV === "production" && {
      optimizePackageImports: [
        "gsap",
        "lucide-react",
        "@radix-ui/react-label",
        "@radix-ui/react-slot",
        "react-hook-form",
        "zod",
      ],
    }),

    // Enable optimized CSS loading (only in production)
    optimizeCss: process.env.NODE_ENV === "production",

    // Enable optimized font loading (only in production)
    optimizeServerReact: process.env.NODE_ENV === "production",

    // Disable webpack cache in development
    ...(isDev && {
      webpackBuildWorker: false,
    }),
  },

  // Compiler options for better performance
  compiler: {
    // Remove console logs in production
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,

    // Enable React strict mode for better development experience
    reactRemoveProperties:
      process.env.NODE_ENV === "production"
        ? {
            properties: ["^data-test"],
          }
        : false,
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,

  // Generate standalone output for optimal deployment
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,

  // Turbopack configuration (Next.js 16+)
  turbopack: {},

  // Headers for better caching and security
  async headers() {
    if (isDev) {
      // Aggressive no-cache headers for development
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "Cache-Control",
              value:
                "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
            },
            {
              key: "Pragma",
              value: "no-cache",
            },
            {
              key: "Expires",
              value: "0",
            },
            {
              key: "Surrogate-Control",
              value: "no-store",
            },
          ],
        },
        {
          source: "/_next/:path*",
          headers: [
            {
              key: "Cache-Control",
              value: "no-store, no-cache, must-revalidate, max-age=0",
            },
          ],
        },
      ];
    }

    // Production caching
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
