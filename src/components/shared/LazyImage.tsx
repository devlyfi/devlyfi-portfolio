'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { getShimmerPlaceholder } from '@/lib/image-utils';

interface LazyImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  /**
   * Whether to use intersection observer for lazy loading
   * Default: true for images below the fold
   */
  useLazyLoad?: boolean;
  
  /**
   * Custom blur placeholder (optional)
   * If not provided, uses shimmer effect
   */
  customBlurDataURL?: string;
  
  /**
   * Root margin for intersection observer
   * Default: '50px' (load images 50px before they enter viewport)
   */
  rootMargin?: string;
}

/**
 * LazyImage - Optimized image component with intersection observer
 * Automatically lazy loads images below the fold
 */
export function LazyImage({
  useLazyLoad = true,
  customBlurDataURL,
  rootMargin = '50px',
  priority = false,
  ...props
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(!useLazyLoad || priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!useLazyLoad || priority || isInView) return;

    const element = imgRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [useLazyLoad, priority, isInView, rootMargin]);

  // Determine blur placeholder
  const blurDataURL = customBlurDataURL || getShimmerPlaceholder(
    typeof props.width === 'number' ? props.width : 700,
    typeof props.height === 'number' ? props.height : 475
  );

  return (
    <div ref={imgRef}>
      {isInView ? (
        <Image
          {...props}
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataURL}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : (
        <div
          className="bg-muted animate-pulse"
          style={{
            width: props.width,
            height: props.height,
            aspectRatio: props.fill ? undefined : 'auto',
          }}
        />
      )}
    </div>
  );
}
