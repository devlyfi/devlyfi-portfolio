import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Image optimization configuration
  images: {
    // Use modern image formats for better compression
    formats: ['image/webp', 'image/avif'],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache optimized images for 60 seconds
    minimumCacheTTL: 60,
    
    // Allow SVG images (with security restrictions)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Disable static image imports optimization for better control
    disableStaticImages: false,
    
    // Remote patterns for external images (if needed)
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },

  // Experimental optimizations
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      'gsap',
      'lucide-react',
      '@radix-ui/react-label',
      '@radix-ui/react-slot',
      'react-hook-form',
      'zod',
    ],
    
    // Enable optimized CSS loading
    optimizeCss: true,
    
    // Enable optimized font loading
    optimizeServerReact: true,
  },

  // Compiler options for better performance
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    
    // Enable React strict mode for better development experience
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? {
      properties: ['^data-test'],
    } : false,
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // Generate standalone output for optimal deployment
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,
  
  // Turbopack configuration (Next.js 16+)
  turbopack: {},
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
