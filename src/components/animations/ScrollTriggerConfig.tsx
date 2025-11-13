'use client';

import { useEffect } from 'react';
import { configureScrollTriggerDefaults, refreshScrollTriggers } from './gsap-animations';

/**
 * Component that configures ScrollTrigger defaults for optimal performance
 * Should be included once in the root layout
 */
export default function ScrollTriggerConfig() {
  useEffect(() => {
    // Configure ScrollTrigger defaults
    configureScrollTriggerDefaults();

    // Refresh ScrollTriggers on window resize (debounced)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        refreshScrollTriggers();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    // Refresh on orientation change
    window.addEventListener('orientationchange', () => {
      setTimeout(refreshScrollTriggers, 100);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return null;
}
