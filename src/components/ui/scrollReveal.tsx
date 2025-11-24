"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data/dummy";
import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const rightCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [bgColor, setBgColor] = useState("#FFFFFF");
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
      return;
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

      // Animate gallery background based on scroll
      services.forEach((section, index) => {
        const bgTrigger = ScrollTrigger.create({
          trigger: `.item-${index + 1}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setBgColor(section.bgColor!),
          onEnterBack: () => setBgColor(section.bgColor!),
        });
        scrollTriggersRef.current.push(bgTrigger);
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
      <div
        className="gallery w-full relative transition-colors duration-500 "
        style={{ backgroundColor: bgColor }}
      >
        {/* Desktop/Tablet Layout */}
        {!isMobile ? (
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex">
              {/* LEFT SIDE – 1/3 width, text left-aligned */}
              <div className="left w-full md:w-1/3">
                {services.map((section, index) => (
                  <div
                    key={index}
                    className={`left-item item-${
                      index + 1
                    } min-h-screen flex items-center justify-start 
                       px-4 md:px-6 lg:px-8`}
                  >
                    <div>
                      {/* <h2
                        className="font-thin text-left
                       text-2xl md:text-3xl lg:text-5xl "
                      >
                        {section.title} */}
                      {/* </h2> */}
                      <AnimatedText
                        bidirectional
                        animationType="scale"
                        type="words"
                        textClassName="font-light! text-left!
                       text-2xl! md:text-3xl! lg:text-5xl!"
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
                      {/* <p className="my-4 text-md text-gray-800">
                        {section.description}
                      </p> */}
                      <Link
                        href={`/services/${section.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        <CustomButton
                          className={`border-2 border-black mt-5`}
                          textColor="black"
                          text="View More"
                          hoverColor="black"
                        ></CustomButton>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE – takes the remaining 2/3 */}
              <div
                className="right-container
            w-full md:w-2/3
            h-screen flex items-center justify-center
           "
              >
                <div className="relative w-full min-h-[30vh] md:min-h-[40vh] lg:min-h-[60vh]">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el) rightCardsRef.current[index] = el;
                      }}
                      className="absolute inset-0 flex items-center justify-center
                text-base md:text-lg lg:text-xl font-medium text-black
                 rounded-4xl overflow-hidden"
                      style={{ backgroundColor: item.color }}
                    >
                      <Image
                        src={item.cover}
                        className="cover object-cover"
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
          /* Mobile Layout - No animation, sequential display */
          <div className="flex flex-col">
            {services.map((section, index) => (
              <div
                key={index}
                className="w-full"
                style={{ backgroundColor: section.color }} // <<< shared background
              >
                {/* Left section */}
                <div className="min-h-screen flex items-center justify-center text-2xl font-semibold px-4">
                  {section.title}
                </div>

                {/* Right section card */}
                <div
                  className="min-h-[50vh] flex items-center justify-center text-lg font-medium text-black rounded-2xl mx-4 my-8 p-6"
                  style={{ backgroundColor: services[index].color }} // <<< card color
                >
                  {services[index].title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
