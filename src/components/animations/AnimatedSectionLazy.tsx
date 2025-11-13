'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import type { AnimatedSectionProps } from './AnimatedSection';

// Dynamically import AnimatedSection with no SSR
const AnimatedSection = dynamic(() => import('./AnimatedSection'), {
  ssr: false,
  loading: () => <div className="opacity-0">Loading...</div>,
});

/**
 * Lazy-loaded wrapper for AnimatedSection
 * Use this for below-the-fold content to reduce initial bundle size
 */
export const AnimatedSectionLazy: React.FC<AnimatedSectionProps> = (props) => {
  return <AnimatedSection {...props} />;
};

export default AnimatedSectionLazy;
