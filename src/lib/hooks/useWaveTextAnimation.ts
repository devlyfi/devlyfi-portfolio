"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";

/**
 * Custom hook for GSAP wave text + arrow animation
 * @param wrapperRef - container element reference
 * @param textRef - text element containing word spans
 * @param arrowRef - arrow icon reference (optional)
 */
export const useWaveTextAnimation = (
  wrapperRef: RefObject<HTMLElement>,
  textRef: RefObject<HTMLElement>,
  arrowRef?: RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!textRef.current || !wrapperRef.current) return;

    const words = textRef.current.querySelectorAll(".word");
    const wrapper = wrapperRef.current;

    const enter = () => {
      gsap.killTweensOf(words);

      gsap.to(words, {
        y: -20,
        opacity: 0,
        duration: 0.25,
        stagger: 0.02,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(words, { y: 20, opacity: 0 });
          gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.02,
            ease: "power3.out",
          });
        },
      });

      if (arrowRef?.current) {
        gsap.to(arrowRef.current, {
          rotate: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    const leave = () => {
      gsap.killTweensOf(words);

      gsap.to(words, {
        y: 20,
        opacity: 0,
        duration: 0.25,
        stagger: -0.02,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(words, { y: -20, opacity: 0 });
          gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: -0.02,
            ease: "power3.out",
          });
        },
      });

      if (arrowRef?.current) {
        gsap.to(arrowRef.current, {
          rotate: -45,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    };

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, [wrapperRef, textRef, arrowRef]);
};
