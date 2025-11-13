'use client';

import { useEffect } from 'react';
import { initSmoothScroll } from '@/lib/smooth-scroll';

/**
 * Component that initializes smooth scrolling for anchor links
 * Should be included once in the root layout
 */
export default function SmoothScrollInit() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return null;
}
