'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { shouldReduceMotion } from './gsap-animations';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * PageTransition component that animates page content on route changes
 * Provides smooth fade-in animation when navigating between pages
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || shouldReduceMotion()) {
      return;
    }

    // Animate page entrance
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, [pathname]);

  return (
    <div ref={contentRef}>
      {children}
    </div>
  );
}
