"use client";

import { Work } from "@/lib/types";
import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Reusable: Full-width alternating item
const FullWidthWorkItem = ({ work, index }: { work: Work; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const categoryRef = useRef<HTMLHeadingElement>(null);
  const techRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  const isImageOnLeft = (index / 2) % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([imageRef.current, textRef.current], { opacity: 0, y: 60 });
      gsap.set(titleRef.current, { opacity: 0, x: isImageOnLeft ? 40 : -40 });
      gsap.set(yearRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(categoryRef.current, { opacity: 0, y: 20 });
      gsap.set(techRefs.current, { opacity: 0, scale: 0.8 });
      gsap.set(buttonRef.current, { opacity: 0, y: 20 });

      // Create timeline with scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate image and text containers
      tl.to([imageRef.current, textRef.current], {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Animate title and year
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      tl.to(
        yearRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Animate category
      tl.to(
        categoryRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Animate technology tags with stagger
      tl.to(techRefs.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.08,
      });

      // Animate button
      tl.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Image hover animation
      if (imageRef.current) {
        imageRef.current.addEventListener("mouseenter", () => {
          gsap.to(imageRef.current, {
            scale: 1.03,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        imageRef.current.addEventListener("mouseleave", () => {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }

      // Tech tag hover animations
      techRefs.current.forEach((tech) => {
        if (!tech) return;

        tech.addEventListener("mouseenter", () => {
          gsap.to(tech, {
            y: -3,
            backgroundColor: "#121315",
            color: "white",
            duration: 0.2,
            ease: "power2.out",
          });
        });

        tech.addEventListener("mouseleave", () => {
          gsap.to(tech, {
            y: 0,
            backgroundColor: "transparent",
            color: "inherit",
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });

      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isImageOnLeft]);

  const addTechRef = (el: HTMLSpanElement | null, index: number) => {
    techRefs.current[index] = el;
  };

  return (
    <div
      ref={containerRef}
      className="md:max-w-7xl rounded-4xl bg-zinc-50 mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16"
    >
      {isImageOnLeft ? (
        <>
          {/* Image Left */}
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 overflow-hidden rounded-4xl"
          >
            <Image
              className="rounded-4xl w-full h-auto object-cover"
              src={work.thumbnail}
              height={2000}
              width={2000}
              alt={work.title}
            />
          </div>

          {/* Text Right */}
          <div
            ref={textRef}
            className="w-full lg:w-1/2 text-center lg:text-end px-6"
          >
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-light">
              {work.title}{" "}
              <span
                ref={yearRef}
                className="text-gray-800 font-semibold text-lg align-text-top"
              >
                {work.year}
              </span>
            </h2>
            <br />
            <h3 ref={categoryRef} className="text-xl xl:text-2xl font-thin">
              {work.category}
            </h3>

            <div className="my-10 hidden xl:flex flex-wrap justify-center lg:justify-end gap-3">
              {work.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  ref={(el) => addTechRef(el, idx)}
                  className="border-2 rounded-full px-3 py-1 border-[#121315] text-sm cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div ref={buttonRef} className="my-5">
              <CustomButton
                text="View Details"
                textColor="black"
                hoverColor="#121315"
                className="border-2 border-[#121315]"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text Left */}
          <div
            ref={textRef}
            className="w-full lg:w-1/2 text-center lg:text-start px-6 order-2 lg:order-1"
          >
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-light">
              {work.title}{" "}
              <span
                ref={yearRef}
                className="text-gray-800 font-semibold text-lg align-text-top"
              >
                {work.year}
              </span>
            </h2>
            <br />
            <h3 ref={categoryRef} className="text-xl xl:text-2xl font-thin">
              {work.category}
            </h3>

            <div className="my-10 hidden xl:flex flex-wrap justify-center lg:justify-start gap-3">
              {work.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  ref={(el) => addTechRef(el, idx)}
                  className="border-2 rounded-full px-3 py-1 border-[#121315] text-sm cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div ref={buttonRef} className="my-5">
              <CustomButton
                text="View Details"
                textColor="black"
                hoverColor="#121315"
                className="border-2 border-[#121315]"
              />
            </div>
          </div>

          {/* Image Right */}
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 order-1 lg:order-2 overflow-hidden rounded-4xl"
          >
            <Image
              className="rounded-4xl w-full h-auto object-cover"
              src={work.thumbnail}
              height={2000}
              width={2000}
              alt={work.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

// Reusable: Single item in a paired row
const PairedWorkItem = ({
  work,
  reverse = false,
}: {
  work: Work;
  reverse?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const categoryRef = useRef<HTMLHeadingElement>(null);
  const techRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([imageRef.current, textRef.current], { opacity: 0, y: 60 });
      gsap.set(titleRef.current, { opacity: 0, x: reverse ? 40 : -40 });
      gsap.set(yearRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(categoryRef.current, { opacity: 0, y: 20 });
      gsap.set(techRefs.current, { opacity: 0, scale: 0.8 });
      gsap.set(buttonRef.current, { opacity: 0, y: 20 });

      // Create timeline with scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate image and text containers
      tl.to([imageRef.current, textRef.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Animate title and year
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      tl.to(
        yearRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      // Animate category
      tl.to(
        categoryRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Animate technology tags with stagger
      tl.to(techRefs.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.06,
      });

      // Animate button
      tl.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Image hover animation
      if (imageRef.current) {
        imageRef.current.addEventListener("mouseenter", () => {
          gsap.to(imageRef.current, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        imageRef.current.addEventListener("mouseleave", () => {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Tech tag hover animations
      techRefs.current.forEach((tech) => {
        if (!tech) return;

        tech.addEventListener("mouseenter", () => {
          gsap.to(tech, {
            y: -2,
            backgroundColor: "#121315",
            color: "white",
            duration: 0.15,
            ease: "power2.out",
          });
        });

        tech.addEventListener("mouseleave", () => {
          gsap.to(tech, {
            y: 0,
            backgroundColor: "transparent",
            color: "inherit",
            duration: 0.15,
            ease: "power2.out",
          });
        });
      });

      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.15,
            ease: "power2.out",
          });
        });

        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.15,
            ease: "power2.out",
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reverse]);

  const addTechRef = (el: HTMLSpanElement | null, index: number) => {
    techRefs.current[index] = el;
  };

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-4xl bg-zinc-50 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-between items-center gap-8`}
    >
      <div
        ref={imageRef}
        className="w-full lg:w-1/2 overflow-hidden rounded-4xl"
      >
        <Image
          className="rounded-4xl w-full h-auto object-cover"
          src={work.thumbnail}
          height={2000}
          width={2000}
          alt={work.title}
        />
      </div>

      <div
        ref={textRef}
        className="w-full lg:w-1/2 text-center lg:text-left p-6"
      >
        <h3 ref={titleRef} className="text-2xl md:text-3xl font-light">
          {work.title}{" "}
          <span
            ref={yearRef}
            className="text-gray-800 font-semibold text-lg align-text-top"
          >
            {work.year}
          </span>
        </h3>
        <br />
        <h3 ref={categoryRef} className="text-xl xl:text-2xl font-thin">
          {work.category}
        </h3>

        <div className="my-8 hidden xl:flex flex-wrap justify-center lg:justify-start gap-3">
          {work.technologies.map((tech, idx) => (
            <span
              key={idx}
              ref={(el) => addTechRef(el, idx)}
              className="border-2 rounded-full px-3 py-1 border-[#121315] text-sm cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div ref={buttonRef} className="my-5">
          <CustomButton
            text="View Details"
            textColor="black"
            hoverColor="#121315"
            className="border-2 border-[#121315]"
          />
        </div>
      </div>
    </div>
  );
};

interface WorkGridProps {
  works: Work[];
}

export default function WorkGrid({ works }: WorkGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the entire container entrance
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-32 p-4">
      {works.map((work, index) => {
        const isEvenIndex = index % 2 === 0;

        if (isEvenIndex) {
          // Full-width alternating row
          return (
            <FullWidthWorkItem
              key={work.id || index}
              work={work}
              index={index}
            />
          );
        }

        // Paired row: current (odd) + next (even) if exists
        const nextWork = works[index + 1];

        return (
          <div
            key={work.id || index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:px-8"
          >
            <PairedWorkItem work={work} />
            {nextWork ? (
              <PairedWorkItem work={nextWork} reverse={true} />
            ) : (
              <div />
            )}
          </div>
        );
      })}
    </div>
  );
}
