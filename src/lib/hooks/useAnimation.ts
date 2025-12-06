import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useStaggerAnimation = (
  selector: string,
  options = {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
  }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    gsap.fromTo(
      elements,
      {
        y: options.y,
        opacity: options.opacity
      },
      {
        y: 0,
        opacity: 1,
        duration: options.duration,
        stagger: options.stagger,
        ease: options.ease,
        scrollTrigger: {
          trigger: elements[0]?.parentElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, options]);
};

export const useParallax = (element: React.RefObject<HTMLElement>, speed = 0.3) => {
  useEffect(() => {
    if (!element.current) return;

    gsap.to(element.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element.current,
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [element, speed]);
};