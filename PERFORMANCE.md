# Performance Optimization Guide

This document outlines all the performance optimizations implemented in the Devlyfi portfolio website.

## Table of Contents

1. [Image Optimization](#image-optimization)
2. [Lazy Loading](#lazy-loading)
3. [Next.js Configuration](#nextjs-configuration)
4. [Font Optimization](#font-optimization)
5. [Code Splitting](#code-splitting)
6. [Caching Strategy](#caching-strategy)
7. [Performance Monitoring](#performance-monitoring)
8. [Best Practices](#best-practices)

## Image Optimization

### Next.js Image Component

All images use the Next.js `Image` component for automatic optimization:

```tsx
import Image from 'next/image';
import { getShimmerPlaceholder } from '@/lib/image-utils';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL={getShimmerPlaceholder(800, 600)}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Image Formats

- **WebP**: Primary format for modern browsers (smaller file size)
- **AVIF**: Next-gen format for even better compression
- **Automatic fallback**: PNG/JPEG for older browsers

### Blur Placeholders

Custom shimmer effect for better perceived performance:

```tsx
import { getShimmerPlaceholder } from '@/lib/image-utils';

// Use shimmer placeholder
blurDataURL={getShimmerPlaceholder(width, height)}
```

### Responsive Images

Proper `sizes` attribute for optimal image loading:

```tsx
// For grid cards
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// For full-width images
sizes="100vw"

// For list layout
sizes="(max-width: 768px) 100vw, 40vw"
```

## Lazy Loading

### Component Lazy Loading

Heavy components are lazy-loaded using Next.js dynamic imports:

```tsx
import { LazyAnimatedSection } from '@/lib/lazy-loading';

// Use lazy-loaded component
<LazyAnimatedSection animation="fadeInUp">
  <YourContent />
</LazyAnimatedSection>
```

### Available Lazy Components

- `LazyAnimatedSection` - Animation wrapper (no SSR)
- `LazyServiceCard` - Service card with skeleton
- `LazyProjectCard` - Project card with skeleton
- `LazyBlogCard` - Blog card with skeleton
- `LazyContactForm` - Contact form (no SSR)
- `LazyServiceDetail` - Service detail page
- `LazyWorkDetail` - Work detail page
- `LazyBlogDetail` - Blog detail page

### Image Lazy Loading

Images below the fold are automatically lazy-loaded:

```tsx
import { LazyImage } from '@/components/shared/LazyImage';

<LazyImage
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  useLazyLoad={true}
  rootMargin="50px" // Load 50px before entering viewport
/>
```

### Intersection Observer

Custom hook for lazy loading on scroll:

```tsx
import { useIntersectionObserver } from '@/lib/lazy-loading';

const ref = useRef(null);
const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

return (
  <div ref={ref}>
    {isVisible && <HeavyComponent />}
  </div>
);
```

## Next.js Configuration

### Image Configuration

```typescript
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

### Package Optimization

```typescript
experimental: {
  optimizePackageImports: [
    'gsap',
    'lucide-react',
    '@radix-ui/react-label',
    '@radix-ui/react-slot',
    'react-hook-form',
    'zod',
  ],
  optimizeCss: true,
  optimizeServerReact: true,
}
```

### Production Optimizations

```typescript
compiler: {
  removeConsole: process.env.NODE_ENV === 'production' ? {
    exclude: ['error', 'warn'],
  } : false,
}
```

### Caching Headers

Static assets are cached for 1 year:

```typescript
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
  ];
}
```

## Font Optimization

### next/font Integration

Fonts are optimized using `next/font/google`:

```tsx
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
```

### Benefits

- **Self-hosted**: Fonts are self-hosted for better privacy and performance
- **Zero layout shift**: Font metrics are calculated at build time
- **Automatic subsetting**: Only required characters are included
- **Preloading**: Critical fonts are automatically preloaded

## Code Splitting

### Automatic Code Splitting

Next.js automatically splits code by route:

- Each page is a separate bundle
- Shared code is extracted into common chunks
- Dynamic imports create separate bundles

### Manual Code Splitting

Use dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false, // Disable SSR if not needed
});
```

### Bundle Analysis

Run bundle analyzer to identify large dependencies:

```bash
npm run build
# Check .next/analyze/ for bundle visualization
```

## Caching Strategy

### Static Generation

All content pages use Static Site Generation (SSG):

```tsx
// Automatically cached at build time
export default function Page() {
  return <YourContent />;
}

// Dynamic routes with static generation
export async function generateStaticParams() {
  return [
    { slug: 'service-1' },
    { slug: 'service-2' },
  ];
}
```

### Browser Caching

- **Static assets**: 1 year cache
- **HTML pages**: Revalidated on each request
- **API routes**: Custom cache headers

### CDN Caching

When deployed to Vercel:

- Static assets cached at edge locations
- Automatic cache invalidation on deployment
- Global CDN for fast delivery

## Performance Monitoring

### Web Vitals

Monitor Core Web Vitals in production:

```tsx
import { reportWebVitals } from '@/lib/performance';

// In layout.tsx or _app.tsx
export function reportWebVitals(metric) {
  reportWebVitals(metric);
}
```

### Custom Performance Monitoring

```tsx
import { performanceMonitor } from '@/lib/performance';

// Mark start
performanceMonitor.mark('operation-start');

// Do something expensive
await heavyOperation();

// Measure duration
performanceMonitor.measure('operation', 'operation-start');
```

### Device Capability Detection

Optimize based on device capabilities:

```tsx
import {
  isLowEndDevice,
  shouldReduceAnimations,
  getConnectionSpeed,
} from '@/lib/performance';

// Reduce animations on low-end devices
if (shouldReduceAnimations()) {
  // Use simpler animations
}

// Adjust image quality based on connection
const quality = getOptimalImageQuality();
```

## Best Practices

### Images

1. ✅ Always use Next.js `Image` component
2. ✅ Provide `width` and `height` or use `fill`
3. ✅ Use `priority` for above-the-fold images
4. ✅ Use `loading="lazy"` for below-the-fold images
5. ✅ Provide appropriate `sizes` attribute
6. ✅ Use blur placeholders for better UX
7. ✅ Optimize source images before uploading

### Components

1. ✅ Use dynamic imports for heavy components
2. ✅ Implement loading states for async components
3. ✅ Use React.memo() for expensive renders
4. ✅ Avoid unnecessary re-renders
5. ✅ Use useCallback and useMemo appropriately

### Animations

1. ✅ Respect `prefers-reduced-motion`
2. ✅ Use CSS transforms instead of position changes
3. ✅ Lazy load animation libraries (GSAP)
4. ✅ Disable animations on low-end devices
5. ✅ Use will-change sparingly

### Data Fetching

1. ✅ Use Static Generation when possible
2. ✅ Implement proper error boundaries
3. ✅ Show loading states
4. ✅ Cache API responses
5. ✅ Use SWR or React Query for client-side fetching

### Bundle Size

1. ✅ Analyze bundle size regularly
2. ✅ Use tree-shaking friendly imports
3. ✅ Remove unused dependencies
4. ✅ Use package optimization in next.config.ts
5. ✅ Consider lighter alternatives for heavy packages

## Performance Targets

### Lighthouse Scores

Target scores for production:

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Bundle Size

- **First Load JS**: < 200KB
- **Total Page Size**: < 1MB
- **Time to Interactive**: < 3s

## Testing Performance

### Local Testing

```bash
# Build for production
npm run build

# Start production server
npm start

# Run Lighthouse audit
npx lighthouse http://localhost:3000 --view
```

### Production Testing

1. Deploy to production
2. Run Lighthouse audit on live URL
3. Test on real devices (mobile, tablet, desktop)
4. Test on slow 3G connection
5. Monitor Web Vitals in production

## Continuous Optimization

1. **Regular audits**: Run Lighthouse monthly
2. **Monitor metrics**: Track Web Vitals in production
3. **Update dependencies**: Keep Next.js and packages updated
4. **Optimize images**: Compress and convert to modern formats
5. **Review bundle**: Analyze and optimize bundle size
6. **Test on real devices**: Ensure good performance on target devices

## Resources

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals](https://web.dev/vitals/)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
