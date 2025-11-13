/**
 * Performance monitoring and optimization utilities
 */

/**
 * Get performance rating based on metric thresholds
 * Returns 'good', 'needs-improvement', or 'poor'
 */
export function getPerformanceRating(
  metricName: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  // Core Web Vitals thresholds
  const thresholds: Record<string, { good: number; poor: number }> = {
    CLS: { good: 0.1, poor: 0.25 },
    FID: { good: 100, poor: 300 },
    LCP: { good: 2500, poor: 4000 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 },
  };

  const threshold = thresholds[metricName];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Report Web Vitals to analytics
 * This can be used in _app.tsx or layout.tsx
 */
export function reportWebVitals(metric: {
  id: string;
  name: string;
  label: string;
  value: number;
}) {
  const rating = getPerformanceRating(metric.name, metric.value);

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', { ...metric, rating });
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js Metric',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        metric_rating: rating,
        non_interaction: true,
      });
    }

    // Example: Send to custom analytics endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   body: JSON.stringify({ ...metric, rating }),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  }
}

/**
 * Preload critical resources
 * Call this in layout.tsx or page.tsx for critical resources
 */
export function preloadResource(href: string, as: string, type?: string) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
}

/**
 * Prefetch resources for better navigation
 */
export function prefetchResource(href: string) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Check if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get connection speed information
 */
export function getConnectionSpeed(): 'slow' | 'medium' | 'fast' | 'unknown' {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }

  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType;

  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 'slow';
    case '3g':
      return 'medium';
    case '4g':
      return 'fast';
    default:
      return 'unknown';
  }
}

/**
 * Lazy load images based on connection speed
 */
export function shouldLazyLoadImages(): boolean {
  const speed = getConnectionSpeed();
  return speed === 'slow' || speed === 'medium';
}

/**
 * Check if device has limited resources
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') return false;

  // Check for device memory (if available)
  const deviceMemory = (navigator as any).deviceMemory;
  if (deviceMemory && deviceMemory < 4) {
    return true;
  }

  // Check for hardware concurrency (CPU cores)
  const hardwareConcurrency = navigator.hardwareConcurrency;
  if (hardwareConcurrency && hardwareConcurrency < 4) {
    return true;
  }

  return false;
}

/**
 * Optimize animations based on device capabilities
 */
export function shouldReduceAnimations(): boolean {
  return prefersReducedMotion() || isLowEndDevice();
}

/**
 * Performance marks for custom measurements
 */
export class PerformanceMonitor {
  private marks: Map<string, number> = new Map();

  mark(name: string) {
    if (typeof performance === 'undefined') return;
    this.marks.set(name, performance.now());
    performance.mark(name);
  }

  measure(name: string, startMark: string, endMark?: string) {
    if (typeof performance === 'undefined') return;

    try {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }

      const measure = performance.getEntriesByName(name, 'measure')[0];
      if (measure && process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}: ${measure.duration.toFixed(2)}ms`);
      }

      return measure?.duration;
    } catch (error) {
      console.error('Performance measurement error:', error);
    }
  }

  getDuration(startMark: string): number | undefined {
    if (typeof performance === 'undefined') return;

    const startTime = this.marks.get(startMark);
    if (!startTime) return;

    return performance.now() - startTime;
  }

  clear() {
    if (typeof performance === 'undefined') return;
    performance.clearMarks();
    performance.clearMeasures();
    this.marks.clear();
  }
}

/**
 * Global performance monitor instance
 */
export const performanceMonitor = new PerformanceMonitor();

/**
 * Image loading priority helper
 * Determines if an image should be loaded with priority based on viewport position
 */
export function shouldPrioritizeImage(elementPosition: 'above-fold' | 'below-fold'): boolean {
  return elementPosition === 'above-fold';
}

/**
 * Calculate optimal image quality based on connection speed
 */
export function getOptimalImageQuality(): number {
  const speed = getConnectionSpeed();

  switch (speed) {
    case 'slow':
      return 60; // Lower quality for slow connections
    case 'medium':
      return 75; // Medium quality
    case 'fast':
      return 85; // High quality
    default:
      return 75; // Default to medium
  }
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
