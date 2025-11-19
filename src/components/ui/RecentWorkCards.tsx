"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import { works } from "@/lib/data/dummy";
import AnimatedText from "./AnimatedText";
import CustomButton from "../shared/CustomButton";

export default function RecentWorkCards() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      works.forEach((work, index) => {
        const cardElement = containerRef.current?.querySelector(
          `.work-item-${index}`
        );
        if (!cardElement) return;

        const isEven = index % 2 === 0;

        // Calculate dynamic trigger points based on card position and viewport
        const triggerStart = `top ${window.innerHeight * 0.9}`; // Start when 80% of viewport is left
        const triggerEnd = `top ${-window.innerHeight * 0.55}`; // End when card is 60% out of viewport

        // Master animation for the entire card with sequential elements
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: cardElement,
            start: triggerStart,
            end: triggerEnd,
            // markers: true,
            scrub: 1.2,
            // toggleActions: "play none none reverse", // Optional: reverse on scroll up
          },
        });

        // Image animation: direction based on index
        // Even indices (0, 2, 4...): come from right (original layout)
        // Odd indices (1, 3, 5...): come from left (reversed layout)
        cardTl.fromTo(
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
            duration: 2,
            ease: "power3.out", // Bouncy easing for more natural feel
          },
          0 // Start immediately
        );

        // Text animation: direction based on index
        // Even indices: come from left (text is on left)
        // Odd indices: come from right (text is on right)
        cardTl.fromTo(
          `.work-item-text-${index}`,
          {
            y: 120,
            opacity: 0,
            x: isEven ? -30 : 30,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          0.6 // Start 0.6 seconds after timeline begins
        );

        // Optional: Add a subtle scale animation when card is in center of viewport
        ScrollTrigger.create({
          trigger: cardElement,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            gsap.to(cardElement, {
              scale: 1.02,
              duration: 0.5,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(cardElement, { scale: 1, duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(cardElement, {
              scale: 1.02,
              duration: 0.5,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(cardElement, { scale: 1, duration: 0.3 });
          },
        });
      });

      // Refresh ScrollTrigger on resize to recalculate positions
      window.addEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full my-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 h-full space-y-24 font-custom"
    >
      {works.slice(0, 3).map((work, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={work.id}
            className={`work-item-${index} flex  flex-col md:flex-row justify-between items-start md:items-center py-16 md:py-24 gap-10 md:gap-16 relative`}
            style={{ minHeight: "70vh" }}
          >
            {/* Text Content */}
            <div
              className={`work-item-text-${index} w-full md:w-2/5 shrink-0 z-10 ${
                isEven
                  ? "order-2 md:order-1"
                  : "order-2 md:order-2 md:text-right"
              }`}
            >
              <h3 className="text-2xl md:text-3xl lg:text-5xl  font-custom  leading-tight font-thin">
                {work.title}
              </h3>
              {/* <AnimatedText
                textClassName="font-thin text-left
                       text-2xl md:text-3xl lg:text-5xl font-serif"
                text={work.title}
                type="chars"
                delay={0}
              /> */}
              <p className="my-4 text-md text-gray-800">{work.description}</p>

              <CustomButton
                textColor="black"
                className="border border-black"
                hoverColor="black"
                text="View Details"
              ></CustomButton>
              {/* <AnimatedText
                className=""
                text={work.description}
                textClassName=" 
                text-base leading-relaxed font-thin 
                "
                type="chars"
                delay={0}
              /> */}
            </div>

            {/* Image */}
            <div
              className={`work-item-image-${index} w-full md:w-3/5 h-[35vh] sm:h-[45vh] md:h-[65vh] lg:h-[75vh] bg-linear-to-br from-gray-200 to-gray-300 rounded-3xl shrink-0  overflow-hidden   ${
                isEven ? "order-1 md:order-2" : "order-1 md:order-1"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center  font-medium text-xl ">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  height="4000"
                  width="4000"
                  className="w-full! h-full! object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
