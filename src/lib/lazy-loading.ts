/**
 * Lazy loading utilities for optimizing component loading
 */

import dynamic from "next/dynamic";

/**
 * Create a lazy-loaded component with a loading fallback
 */
export function createLazyComponent<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options?: {
    ssr?: boolean;
  }
) {
  return dynamic(importFn, {
    ssr: options?.ssr ?? true,
  });
}

/**
 * Lazy-loaded heavy animation components
 * Use these for below-the-fold content
 */
export const LazyAnimatedSection = dynamic(
  () => import("@/components/animations/AnimatedSection"),
  {
    ssr: false,
  }
);

/**
 * Lazy-loaded card components with skeleton fallbacks
 */
export const LazyServiceCard = dynamic(
  () =>
    import("@/components/shared/ServiceCard").then((mod) => ({
      default: mod.ServiceCard,
    })),
  {
    ssr: true,
  }
);

export const LazyProjectCard = dynamic(
  () =>
    import("@/components/shared/ProjectCard").then((mod) => ({
      default: mod.ProjectCard,
    })),
  {
    ssr: true,
  }
);

export const LazyBlogCard = dynamic(
  () =>
    import("@/components/shared/BlogCard").then((mod) => ({
      default: mod.BlogCard,
    })),
  {
    ssr: true,
  }
);

/**
 * Lazy-loaded detail components
 */
export const LazyServiceDetail = dynamic(
  () => import("@/components/services/ServiceDetailNew"),
  {
    ssr: true,
  }
);

export const LazyWorkDetail = dynamic(
  () => import("@/components/works/WorkDetail"),
  {
    ssr: true,
  }
);

export const LazyBlogDetail = dynamic(
  () => import("@/components/blog/BlogDetail"),
  {
    ssr: true,
  }
);

/**
 * Lazy-loaded form components
 */
export const LazyContactForm = dynamic(
  () => import("@/components/shared/ContactForm"),
  {
    ssr: false, // Forms don't need SSR
  }
);

/**
 * Intersection Observer hook for lazy loading on scroll
 * Use this for custom lazy loading implementations
 */
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

// Re-export React for the hook
import React from "react";
