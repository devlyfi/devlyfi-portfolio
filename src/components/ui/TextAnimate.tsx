"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin **once** at module level (outside the component)
gsap.registerPlugin(ScrollTrigger);

interface TextAnimateProps {
  text: string;
  className?: string;
  once?: boolean;        // optional: animate only once
  scrub?: boolean | number;
}

function TextAnimate({ 
  text, 
  className = "", 
  once = true, 
  scrub = false 
}: TextAnimateProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !innerRef.current) return;

    // Always kill previous animation/ScrollTrigger first (defensive)
    gsap.killTweensOf([wrapperRef.current, innerRef.current]);

    const ctx = gsap.context(() => {
      // Animate the inner heading, not the wrapper
      gsap.fromTo(
        innerRef.current,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: scrub ? 1 : 1.2,
          ease: "power3.out",
          immediateRender: true,           // crucial in StrictMode
          scrollTrigger: scrub
            ? {
                trigger: wrapperRef.current,
                start: "top 85%",
                end: "bottom 20%",
                scrub: typeof scrub === "number" ? scrub : 1.2,
                // markers: true,
              }
            : {
                trigger: wrapperRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
                once,                        // play only once if you want
              },
        }
      );
    }, wrapperRef); // ← scoping to the wrapper so revert() cleans everything

    return () => {
      ctx.revert(); // kills animation + ScrollTrigger perfectly
    };
  }, [text, scrub, once]); // re-run only if these props change

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <h2 ref={innerRef} className={`will-change-transform ${className}`}>
        {text}
      </h2>
    </div>
  );
}

export default TextAnimate;