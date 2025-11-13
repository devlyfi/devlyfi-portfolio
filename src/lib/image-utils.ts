/**
 * Image optimization utilities for Next.js Image component
 */

/**
 * Generate a shimmer effect for image placeholders
 * This creates a better loading experience than a solid color
 */
export function shimmer(w: number, h: number): string {
  return `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="20%" />
      <stop stop-color="#f6f7f8" offset="40%" />
      <stop stop-color="#f6f7f8" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
}

/**
 * Convert SVG to base64 data URL for use as blur placeholder
 */
export function toBase64(str: string): string {
  return typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
}

/**
 * Generate a shimmer placeholder data URL
 * Usage: placeholder="blur" blurDataURL={getShimmerPlaceholder(700, 475)}
 */
export function getShimmerPlaceholder(w: number = 700, h: number = 475): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}

/**
 * Generate a solid color placeholder data URL
 * Useful for consistent brand color placeholders
 */
export function getSolidColorPlaceholder(color: string = '#f6f7f8'): string {
  const svg = `
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="${color}"/>
</svg>`;
  return `data:image/svg+xml;base64,${toBase64(svg)}`;
}

/**
 * Recommended image sizes for responsive images
 * These match the Next.js config deviceSizes and imageSizes
 */
export const IMAGE_SIZES = {
  // For small images (icons, avatars)
  small: '(max-width: 640px) 64px, 96px',
  
  // For medium images (cards, thumbnails)
  medium: '(max-width: 640px) 256px, (max-width: 1024px) 384px, 512px',
  
  // For large images (featured images, hero images)
  large: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  
  // For full-width images
  full: '100vw',
  
  // For blog/work cards in grid
  cardGrid: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  
  // For featured/list layout
  cardList: '(max-width: 768px) 100vw, 40vw',
  
  // For hero images
  hero: '100vw',
  
  // For avatars
  avatar: '64px',
};

/**
 * Image quality settings for different use cases
 */
export const IMAGE_QUALITY = {
  thumbnail: 75,
  standard: 85,
  high: 90,
  maximum: 95,
};
