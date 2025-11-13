# Performance Optimization - Quick Reference

## Image Optimization

### Basic Image Usage
```tsx
import Image from 'next/image';
import { getShimmerPlaceholder, IMAGE_SIZES } from '@/lib/image-utils';

// Above the fold (priority)
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority
  placeholder="blur"
  blurDataURL={getShimmerPlaceholder(1920, 1080)}
  sizes={IMAGE_SIZES.hero}
/>

// Below the fold (lazy)
<Image
  src="/card.jpg"
  alt="Card"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL={getShimmerPlaceholder(800, 600)}
  sizes={IMAGE_SIZES.cardGrid}
/>
```

### Lazy Image with Intersection Observer
```tsx
import { LazyImage } from '@/components/shared/LazyImage';

<LazyImage
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  useLazyLoad={true}
  rootMargin="50px"
/>
```

## Component Lazy Loading

### Import Lazy Components
```tsx
import {
  LazyAnimatedSection,
  LazyProjectCard,
  LazyBlogCard,
  LazyContactForm,
} from '@/lib/lazy-loading';

// Use like regular components
<LazyAnimatedSection animation="fadeInUp">
  <Content />
</LazyAnimatedSection>

<LazyProjectCard project={project} />
<LazyBlogCard post={post} />
<LazyContactForm />
```

### Custom Lazy Loading
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
});
```

## Performance Monitoring

### Web Vitals
```tsx
import { getPerformanceRating, reportWebVitals } from '@/lib/performance';

// Automatic in layout.tsx via WebVitals component
// Manual usage:
const rating = getPerformanceRating('LCP', 2400);
// Returns: 'good' | 'needs-improvement' | 'poor'
```

### Custom Performance Marks
```tsx
import { performanceMonitor } from '@/lib/performance';

// Mark start
performanceMonitor.mark('operation-start');

// Do work
await heavyOperation();

// Measure
const duration = performanceMonitor.measure('operation', 'operation-start');
console.log(`Operation took ${duration}ms`);
```

### Device Detection
```tsx
import {
  isLowEndDevice,
  shouldReduceAnimations,
  getConnectionSpeed,
  getOptimalImageQuality,
} from '@/lib/performance';

// Adjust behavior based on device
if (shouldReduceAnimations()) {
  // Use simpler animations
}

// Adjust image quality
const quality = getOptimalImageQuality();
// Returns: 60 (slow) | 75 (medium) | 85 (fast)
```

## Responsive Image Sizes

### Predefined Sizes
```tsx
import { IMAGE_SIZES } from '@/lib/image-utils';

IMAGE_SIZES.small      // Icons, avatars
IMAGE_SIZES.medium     // Cards, thumbnails
IMAGE_SIZES.large      // Featured images
IMAGE_SIZES.full       // Full-width images
IMAGE_SIZES.cardGrid   // Grid cards
IMAGE_SIZES.cardList   // List layout
IMAGE_SIZES.hero       // Hero images
IMAGE_SIZES.avatar     // User avatars
```

## Loading States

### Loading Spinner
```tsx
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

<LoadingSpinner size="sm" />  // Small
<LoadingSpinner size="md" />  // Medium (default)
<LoadingSpinner size="lg" />  // Large
```

### Skeleton Cards
```tsx
import { SkeletonCard } from '@/components/shared/SkeletonCard';

<SkeletonCard variant="service" />
<SkeletonCard variant="project" />
<SkeletonCard variant="blog" />
```

## Utility Functions

### Debounce
```tsx
import { debounce } from '@/lib/performance';

const handleSearch = debounce((query: string) => {
  // Search logic
}, 300);
```

### Throttle
```tsx
import { throttle } from '@/lib/performance';

const handleScroll = throttle(() => {
  // Scroll logic
}, 100);
```

## Performance Checklist

### Images
- [ ] Use Next.js Image component
- [ ] Add width/height or use fill
- [ ] Use priority for above-the-fold
- [ ] Use loading="lazy" for below-the-fold
- [ ] Add blur placeholders
- [ ] Provide sizes attribute
- [ ] Optimize source images

### Components
- [ ] Lazy load heavy components
- [ ] Add loading states
- [ ] Use React.memo for expensive renders
- [ ] Implement error boundaries

### Animations
- [ ] Respect prefers-reduced-motion
- [ ] Lazy load GSAP
- [ ] Use CSS transforms
- [ ] Disable on low-end devices

### Monitoring
- [ ] Track Web Vitals
- [ ] Monitor bundle size
- [ ] Test on real devices
- [ ] Test slow connections

## Performance Targets

| Metric | Target | Threshold |
|--------|--------|-----------|
| LCP | < 2.5s | Good |
| FID | < 100ms | Good |
| CLS | < 0.1 | Good |
| INP | < 200ms | Good |
| Performance Score | 90+ | Excellent |
| First Load JS | < 200KB | Optimal |

## Common Patterns

### Hero Section with Optimized Image
```tsx
<section className="relative h-screen">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    priority
    className="object-cover"
    placeholder="blur"
    blurDataURL={getShimmerPlaceholder(1920, 1080)}
    sizes="100vw"
  />
</section>
```

### Card Grid with Lazy Loading
```tsx
<div className="grid grid-cols-3 gap-6">
  {items.map((item) => (
    <LazyProjectCard key={item.id} project={item} />
  ))}
</div>
```

### Conditional Animation
```tsx
import { shouldReduceAnimations } from '@/lib/performance';

const AnimationWrapper = shouldReduceAnimations()
  ? 'div'
  : LazyAnimatedSection;

<AnimationWrapper animation="fadeInUp">
  <Content />
</AnimationWrapper>
```

## Testing Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Run Lighthouse
npx lighthouse http://localhost:3000 --view

# Analyze bundle
npm run build
# Check .next/analyze/
```

## Resources

- Full documentation: `PERFORMANCE.md`
- Next.js docs: https://nextjs.org/docs/app/building-your-application/optimizing
- Web Vitals: https://web.dev/vitals/
- Image optimization: https://nextjs.org/docs/app/building-your-application/optimizing/images
