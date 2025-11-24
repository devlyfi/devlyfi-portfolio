"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function TextAnimate({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;

    const anim = gsap.from(el, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 50%",
        scrub: 1.2,
        // markers: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div ref={textRef} className="overflow-hidden">
      <h2 className={`${className}`}>{text}</h2>
    </div>
  );
}

export default TextAnimate;
