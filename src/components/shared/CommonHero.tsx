"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CommonHeroProps {
  title: string;
  subtitle: string;
  className?: string; // optional custom styling
}

export default function CommonHero({ title, subtitle, className = "" }: CommonHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in container
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // Title animation
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className=' px-4'>
      <section  className='min-h-[30vh] md:min-h-[40vh] flex flex-col justify-end items-center my-25'>
        <div className='flex flex-col items-center'>
         
          <div className='md:max-w-3xl mx-auto text-center space-y-6'>
            <h2 ref={titleRef} className=''>
              What we offer — clear direction, thoughtful design.
            </h2>
            <p ref={subtitleRef} className='text-base text-gray-600'>
              From brand identity to digital interfaces, Osei helps creative businesses build clarity and presence. Each service is tailored, strategic, and designed to grow with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
