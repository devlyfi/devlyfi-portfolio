"use client";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import { works } from "@/lib/data/dummy";
import CustomButton from "../shared/CustomButton";

export default function RecentWorkCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    works.forEach((_, index) => {
      const card = containerRef.current?.querySelector(`.work-item-${index}`);
      // const image = containerRef.current?.querySelector(`.work-item-image-${index}`);
      // const text = containerRef.current?.querySelector(`.work-item-text-${index}`);

      if (!card ) return;

      const isEven = index % 2 === 0;

      // Dynamic trigger calculation based on viewport
      // const triggerStart = `top ${window.innerHeight * 0.85}`;
      // const triggerEnd = `top ${-window.innerHeight * 0.4}`;
     const triggerStart = `top ${window.innerHeight * 0.8}`;
      const triggerEnd = `top ${-window.innerHeight * 0.4}`;
      // Main parallax/scrub animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: triggerStart,
          end: triggerEnd,
          scrub: 1.2,
          // toggleActions: "play none none reverse",
        },
      });

      // Image: fly in from side with rotation
      tl.fromTo(
        `.work-item-image-${index}`,
        {
          x: isEven ? 400 : -400,
          rotate: isEven ? 30 : -30,
          opacity: 0,
          scale: 0.85,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
          ease: "back.out(1.2)",
          duration: 2,
        },
        0
      );

      // Text: slide up + slight horizontal offset
      tl.fromTo(
        `.work-item-text-${index}`,
        {
          y: 120,
          x: isEven ? -30 : 30,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
        },
        0.6
      );

      // Subtle scale when in viewport center - adjusted for mobile
      ScrollTrigger.create({
        trigger: card,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to(card, { scale: 1.02, duration: 0.6, ease: "power2.out" }),
        onLeave: () => gsap.to(card, { scale: 1, duration: 0.4 }),
        onEnterBack: () => gsap.to(card, { scale: 1.02, duration: 0.6, ease: "power2.out" }),
        onLeaveBack: () => gsap.to(card, { scale: 1, duration: 0.4 }),
      });
    });

    
    
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
   
  }, { scope: containerRef });

  // Handle initial render on mobile
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16"
    >
      {works.slice(0, 3).map((work, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={work.id}
            className={`work-item-${index} flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 md:gap-16 py-8 sm:py-12 md:py-24 relative`}
            style={{ minHeight: "clamp(50vh, 70vh, 80vh)" }}
          >
            {/* Text Content */}
            <div
              className={`work-item-text-${index} w-full md:w-2/5 shrink-0 z-10 ${
                isEven
                  ? "md:order-1 text-left"
                  : "md:order-2 md:text-right md:ml-auto"
              } order-2 mt-6 md:mt-0`}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-custom leading-tight font-thin">
                {work.title}
              </h3>

              <p className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {work.description}
              </p>

              <div className={`flex ${isEven ? "justify-start" : "md:justify-end"}`}>
                <CustomButton
                  textColor="black"
                  className="border border-black w-full sm:w-auto"
                  hoverColor="black"
                  text="View Details"
                />
              </div>
            </div>

            {/* Image */}
            <div
              className={`work-item-image-${index} w-full md:w-3/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl ${
                isEven ? "md:order-2" : "md:order-1"
              } order-1`}
            >
              <div className="relative w-full h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh]">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 67vw, 55vw"
                  quality={90}
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}