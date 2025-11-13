'use client';

import React, { useEffect, useRef } from 'react';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerFadeIn,
  parallaxEffect,
  setupScrollAnimation,
  revealOnScroll,
} from './gsap-animations';

export type AnimationType =
  | 'fadeInUp'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'parallax'
  | 'reveal'
  | 'custom';

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  parallaxSpeed?: number;
  revealDirection?: 'up' | 'down' | 'left' | 'right';
  revealDistance?: number;
  customAnimation?: {
    animationProps: gsap.TweenVars;
    scrollTriggerConfig?: ScrollTrigger.Vars;
  };
}

/**
 * AnimatedSection - A wrapper component that applies GSAP animations to its children
 * 
 * @param children - React children to be animated
 * @param animation - Type of animation to apply (default: 'fadeInUp')
 * @param delay - Delay before animation starts in seconds (default: 0)
 * @param className - Additional CSS classes
 * @param stagger - Whether to stagger child animations (default: false)
 * @param staggerDelay - Delay between staggered animations in seconds (default: 0.1)
 * @param parallaxSpeed - Speed multiplier for parallax effect (default: 0.5)
 * @param revealDirection - Direction for reveal animation (default: 'up')
 * @param revealDistance - Distance for reveal animation in pixels (default: 60)
 * @param customAnimation - Custom GSAP animation configuration
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  stagger = false,
  staggerDelay = 0.1,
  parallaxSpeed = 0.5,
  revealDirection = 'up',
  revealDistance = 60,
  customAnimation,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let animationInstance: gsap.core.Tween | gsap.core.Timeline | null = null;

    // Handle stagger animations for child elements
    if (stagger) {
      const children = Array.from(element.children) as HTMLElement[];
      if (children.length > 0) {
        animationInstance = staggerFadeIn(children, staggerDelay);
      }
    } else {
      // Apply animation based on type
      switch (animation) {
        case 'fadeInUp':
          animationInstance = fadeInUp(element, delay);
          break;
        case 'fadeInLeft':
          animationInstance = fadeInLeft(element, delay);
          break;
        case 'fadeInRight':
          animationInstance = fadeInRight(element, delay);
          break;
        case 'scaleIn':
          animationInstance = scaleIn(element, delay);
          break;
        case 'parallax':
          animationInstance = parallaxEffect(element, parallaxSpeed);
          break;
        case 'reveal':
          animationInstance = revealOnScroll(element, {
            direction: revealDirection,
            distance: revealDistance,
            delay,
          });
          break;
        case 'custom':
          if (customAnimation) {
            animationInstance = setupScrollAnimation(
              element,
              customAnimation.animationProps,
              customAnimation.scrollTriggerConfig
            );
          }
          break;
        default:
          animationInstance = fadeInUp(element, delay);
      }
    }

    // Cleanup function
    return () => {
      if (animationInstance) {
        animationInstance.kill();
      }
    };
  }, [animation, delay, stagger, staggerDelay, parallaxSpeed, revealDirection, revealDistance, customAnimation]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
