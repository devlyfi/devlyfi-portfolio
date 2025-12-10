"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data/dummy";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const rightCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // Only run animations on non-mobile devices
    if (isMobile) {
      // Clean up any existing scroll triggers when switching to mobile
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
      scrollTriggersRef.current = [];

      // Add fade-in animation for mobile items
      const timer = setTimeout(() => {
        mobileItemsRef.current.forEach((item, index) => {
          if (!item) return;

          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Pin the right container
      const pinTrigger = ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right-container",
        markers: false,
        invalidateOnRefresh: true,
      });
      scrollTriggersRef.current.push(pinTrigger);

      // Animate each right card based on left section scroll
      services.forEach((_, index) => {
        const card = rightCardsRef.current[index];
        if (!card) return;

        const nextCardHeight =
          index < services.length - 1 ? card.offsetHeight : 0;

        const cardTimeline = gsap.fromTo(
          card,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: `.item-${index + 1}`,
              start: "top bottom",
              end: `bottom top+=${nextCardHeight + 1000}`,
              scrub: true,
            },
          }
        );
        if (cardTimeline.scrollTrigger) {
          scrollTriggersRef.current.push(cardTimeline.scrollTrigger);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill();
      });
      scrollTriggersRef.current = [];
    };
  }, [isMobile]);

  return (
    <div>
      <div className="gallery w-full relative">
        {/* Desktop/Tablet Layout */}
        {!isMobile ? (
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-0">
            <div className="flex">
              {/* LEFT SIDE – 1/2 width, text left-aligned */}
              <div className="left w-full md:w-1/3">
                {services.slice(0, 5).map((section, index) => (
                  <div
                    key={index}
                    className={`left-item item-${index + 1} min-h-screen flex items-center justify-start px-4 md:px-0`}
                  >
                    <div>
                      <AnimatedText
                        bidirectional
                        animationType="scale"
                        type="words"
                        textClassName="font-light! text-left! text-2xl! md:text-5xl! lg:text-7xl!"
                        text={section.title}
                        stagger={0.2}
                        triggerStart="top 80%"
                      ></AnimatedText>
                      <AnimatedText
                        bidirectional
                        animationType="fade"
                        type="words"
                        className="my-4 "
                        textClassName="text-lg! font-medium text-gray-800!"
                        text={section.description}
                        stagger={0.1}
                        triggerStart="top 90%"
                        triggerEnd="top 60%"
                      ></AnimatedText>
                      <Link
                        href={`/services/${section.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        {/* <CustomButton
                          className={`border-2 border-black mt-5`}
                          textColor="black"
                          text="View More"
                          hoverColor="black"
                        ></CustomButton> */}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE – takes the remaining 1/2, positioned at right corner */}
              <div
                className="right-container
                w-full md:w-1/2
                h-screen flex items-center justify-center
                fixed right-0 md:relative 
                md:flex md:items-center md:justify-start"
                style={{ 
                  width: isMobile ? '100%' : '50%',
                  right: isMobile ? 0 : undefined 
                }}
              >
                <div className="relative w-full min-h-[30vh] md:min-h-[40vh] lg:min-h-[60vh] max-w-4xl mx-auto">
                  {services.slice(0, 5).map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el) rightCardsRef.current[index] = el;
                      }}
                      className="absolute flex items-center justify-center
                      text-base md:text-lg lg:text-xl font-medium text-black
                      rounded-4xl border-none overflow-hidden w-[90%] h-[85%]"
                      // style={{ 
                      //   backgroundColor: item.color,
                      //   right: 0,
                      //   transform: 'translateY(-50%)',
                      //   top: '50%'
                      // }}
                    >
                      <Image
                        src={item.cover}
                        className="w-full h-full object-cover"
                        height={5000}
                        width={5000}
                        alt={item.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mobile Layout - No shadow, with fade-in animation */
          <div className="flex flex-col space-y-8 py-10 px-4">
            {services.slice(0, 5).map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) mobileItemsRef.current[index] = el;
                }}
                className="w-full rounded-3xl overflow-hidden bg-white"
                style={{ backgroundColor: section.color || 'white' }}
              >
                {/* Image Section */}
                <div className="w-full h-[40vh] rounded-3xl overflow-hidden">
                  <Image
                    src={section.cover}
                    className="w-full h-full object-cover"
                    height={5000}
                    width={5000}
                    alt={section.title}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h2 className="font-light text-3xl mb-4">
                    {section.title}
                  </h2>

                  <p className="my-4 text-md text-gray-900 leading-relaxed">
                    {section.description}
                  </p>

                  <div className="w-full flex justify-center items-center">
                    <Link
                      href={`/services/${section.title.replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex justify-center w-full"
                    >
                      <AnimatedButton
                        text="View More"
                        className="w-1/2 flex justify-center md:w-1/4 border-2 border-gray-600 bg-inherit!"
                        textClass="text-gray-700!"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}