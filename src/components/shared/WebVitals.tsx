'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { getPerformanceRating } from '@/lib/performance';

/**
 * WebVitals component for monitoring Core Web Vitals
 * Automatically reports metrics in development and production
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    const rating = getPerformanceRating(metric.name, metric.value);
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating,
        id: metric.id,
      });
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Example: Send to Google Analytics
      // window.gtag?.('event', metric.name, {
      //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      //   metric_id: metric.id,
      //   metric_rating: rating,
      //   metric_delta: metric.delta,
      // });

      // Example: Send to Vercel Analytics
      // if (window.va) {
      //   window.va('event', {
      //     name: metric.name,
      //     data: {
      //       value: metric.value,
      //       rating,
      //     },
      //   });
      // }
    }
  });

  return null;
}

export default WebVitals;
