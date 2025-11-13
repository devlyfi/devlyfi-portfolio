'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if user prefers reduced motion
 * @returns boolean indicating if reduced motion is preferred
 */
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Fade in and slide up animation
 * @param element - The HTML element to animate
 * @param delay - Delay before animation starts (in seconds)
 * @returns GSAP animation instance
 */
export const fadeInUp = (element: HTMLElement, delay: number = 0) => {
  if (shouldReduceMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return null;
  }

  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      once: false,
      invalidateOnRefresh: true,
    },
  });
};

/**
 * Stagger fade in animation for multiple elements
 * @param elements - Array of HTML elements to animate
 * @param stagger - Time between each element's animation (in seconds)
 * @returns GSAP animation instance
 */
export const staggerFadeIn = (
  elements: HTMLElement[],
  stagger: number = 0.1
) => {
  if (shouldReduceMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return null;
  }

  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      once: false,
      invalidateOnRefresh: true,
    },
  });
};

/**
 * Parallax scrolling effect
 * @param element - The HTML element to apply parallax to
 * @param speed - Speed multiplier for parallax effect (0.5 = half speed)
 * @returns GSAP animation instance
 */
export const parallaxEffect = (element: HTMLElement, speed: number = 0.5) => {
  if (shouldReduceMotion()) {
    return null;
  }

  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1, // Smooth scrubbing with 1 second delay
      invalidateOnRefresh: true,
    },
  });
};

/**
 * Scale on hover effect
 * @param element - The HTML element to apply hover effect to
 * @param scale - Scale factor (default: 1.05)
 */
export const scaleOnHover = (element: HTMLElement, scale: number = 1.05) => {
  if (shouldReduceMotion()) {
    return;
  }

  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale, duration: 0.3, ease: 'power2.out' });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });
};

/**
 * Fade in from left animation
 * @param element - The HTML element to animate
 * @param delay - Delay before animation starts (in seconds)
 * @returns GSAP animation instance
 */
export const fadeInLeft = (element: HTMLElement, delay: number = 0) => {
  if (shouldReduceMotion()) {
    gsap.set(element, { opacity: 1, x: 0 });
    return null;
  }

  return gsap.from(element, {
    x: -60,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      once: false,
      invalidateOnRefresh: true,
    },
  });
};

/**
 * Fade in from right animation
 * @param element - The HTML element to animate
 * @param delay - Delay before animation starts (in seconds)
 * @returns GSAP animation instance
 */
export const fadeInRight = (element: HTMLElement, delay: number = 0) => {
  if (shouldReduceMotion()) {
    gsap.set(element, { opacity: 1, x: 0 });
    return null;
  }

  return gsap.from(element, {
    x: 60,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      once: false,
      invalidateOnRefresh: true,
    },
  });
};

/**
 * Scale in animation
 * @param element - The HTML element to animate
 * @param delay - Delay before animation starts (in seconds)
 * @returns GSAP animation instance
 */
export const scaleIn = (element: HTMLElement, delay: number = 0) => {
  if (shouldReduceMotion()) {
    gsap.set(element, { opacity: 1, scale: 1 });
    return null;
  }

  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    delay,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      once: false,
      invalidateOnRefresh: true,
    },
  });
};

/**
 * Setup scroll-triggered animation with custom configuration
 * @param element - The HTML element to animate
 * @param animationProps - GSAP animation properties
 * @param scrollTriggerConfig - ScrollTrigger configuration
 * @returns GSAP animation instance
 */
export const setupScrollAnimation = (
  element: HTMLElement,
  animationProps: gsap.TweenVars,
  scrollTriggerConfig?: ScrollTrigger.Vars
) => {
  if (shouldReduceMotion()) {
    gsap.set(element, { opacity: 1, x: 0, y: 0, scale: 1 });
    return null;
  }

  return gsap.from(element, {
    ...animationProps,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
      ...scrollTriggerConfig,
    },
  });
};

/**
 * Refresh all ScrollTrigger instances
 * Useful after dynamic content changes
 */
export const refreshScrollTriggers = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
};

/**
 * Kill all ScrollTrigger instances
 * Useful for cleanup
 */
export const killScrollTriggers = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
};

/**
 * Batch animate elements with scroll trigger
 * More performant for animating many elements
 * @param selector - CSS selector for elements to animate
 * @param animationProps - GSAP animation properties
 * @param batchConfig - Batch configuration options
 */
export const batchAnimate = (
  selector: string,
  animationProps: gsap.TweenVars = {},
  batchConfig: {
    interval?: number;
    batchMax?: number;
    start?: string;
    end?: string;
  } = {}
) => {
  if (shouldReduceMotion()) {
    const elements = document.querySelectorAll(selector);
    gsap.set(elements, { opacity: 1, y: 0, x: 0, scale: 1 });
    return null;
  }

  const {
    interval = 0.1,
    batchMax = 3,
    start = 'top 85%',
    end = 'top 20%',
  } = batchConfig;

  return ScrollTrigger.batch(selector, {
    interval,
    batchMax,
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        ...animationProps,
      });
    },
    start,
    end,
    once: false,
  });
};

/**
 * Create a reveal animation on scroll
 * Optimized for performance with will-change
 * @param element - The HTML element to animate
 * @param options - Animation options
 */
export const revealOnScroll = (
  element: HTMLElement,
  options: {
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
    duration?: number;
    delay?: number;
  } = {}
) => {
  if (shouldReduceMotion()) {
    gsap.set(element, { opacity: 1, x: 0, y: 0 });
    return null;
  }

  const {
    direction = 'up',
    distance = 60,
    duration = 0.8,
    delay = 0,
  } = options;

  const fromVars: gsap.TweenVars = {
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
      once: false,
      invalidateOnRefresh: true,
    },
  };

  // Set direction
  switch (direction) {
    case 'up':
      fromVars.y = distance;
      break;
    case 'down':
      fromVars.y = -distance;
      break;
    case 'left':
      fromVars.x = distance;
      break;
    case 'right':
      fromVars.x = -distance;
      break;
  }

  // Add will-change for performance
  element.style.willChange = 'transform, opacity';

  const animation = gsap.from(element, fromVars);

  // Remove will-change after animation
  animation.eventCallback('onComplete', () => {
    element.style.willChange = 'auto';
  });

  return animation;
};

/**
 * Configure ScrollTrigger defaults for optimal performance
 * Call this once during app initialization
 */
export const configureScrollTriggerDefaults = () => {
  if (typeof window === 'undefined') return;

  ScrollTrigger.config({
    // Limit the number of times ScrollTrigger recalculates per second
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    // Ignore certain events that might cause unnecessary recalculations
    ignoreMobileResize: true,
  });

  // Set default values for all ScrollTriggers
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    markers: false, // Set to true for debugging
  });
};

/**
 * Optimize animations for performance
 * Disables animations on low-end devices
 */
export const optimizeForPerformance = () => {
  if (typeof window === 'undefined') return true;

  // Check for low-end device indicators
  const isLowEndDevice =
    navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  const isSlowConnection =
    'connection' in navigator &&
    (navigator as any).connection?.effectiveType === 'slow-2g';

  return !isLowEndDevice && !isSlowConnection;
};
