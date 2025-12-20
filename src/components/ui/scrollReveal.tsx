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
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
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
    if (isMobile) {
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
      scrollTriggersRef.current = [];
      return;
    }

    const timer = setTimeout(() => {
      const pinTrigger = ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right-container",
        markers: false,
        invalidateOnRefresh: true,
      });
      scrollTriggersRef.current.push(pinTrigger);

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
      <div className="gallery w-full relative transition-colors duration-500">
        {/* Desktop/Tablet Layout */}
        {!isMobile ? (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              {/* LEFT SIDE - Responsive width */}
              <div className="left w-full lg:w-1/2">
                {services.map((section, index) => (
                  <div
                    key={index}
                    className={`left-item item-${index + 1
                      } min-h-screen flex items-center justify-start py-8 lg:py-0`}
                  >
                    <div className="w-full max-w-2xl">
                      <AnimatedText
                        bidirectional
                        animationType="scale"
                        type="words"
                        textClassName="font-light! text-left! 
                         text-3xl! sm:text-4xl! lg:text-5xl! xl:text-6xl!"
                        text={section.title}
                        stagger={0.2}
                        triggerStart="top 80%"
                      />
                      <AnimatedText
                        bidirectional
                        animationType="fade"
                        type="words"
                        className="my-4 sm:my-6"
                        textClassName="text-base! sm:text-lg! lg:text-xl! font-medium text-gray-800!"
                        text={section.description}
                        stagger={0.1}
                        triggerStart="top 90%"
                        triggerEnd="top 60%"
                      />
                      <Link
                        href={`/services/${section.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        <AnimatedButton
                          text="View More"
                          className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 flex justify-center border-2 border-gray-600 bg-inherit! mt-4 sm:mt-6"
                          textClass="text-gray-700!"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT SIDE - Smaller card that maintains aspect ratio */}
              <div className="right-container w-full lg:w-1/2 h-screen sticky top-0">
                <div className="flex items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8">
                  <div className="relative w-full max-w-2xl mx-auto aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10] rounded-3xl lg:rounded-4xl overflow-hidden">
                    {services.map((item, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) rightCardsRef.current[index] = el;
                        }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
                      >
                        <Image
                          src={item.cover}
                          className="object-contain w-full h-full"
                          height={1000}
                          width={1000}
                          alt={item.title}
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mobile Layout - Fixed image cropping */
          <div className="flex flex-col space-y-8 sm:space-y-12 py-6 sm:py-10 px-4 sm:px-6">
            {services.map((section, index) => (
              <div
                key={index}
                className="w-full rounded-3xl overflow-hidden shadow-lg bg-white"
              >
                {/* Image Section - Remove any bottom margin/padding */}
                <div className="w-full h-[40vh] sm:h-[45vh] overflow-hidden">
                  <Image
                    src={section.cover}
                    className="object-cover w-full h-full"
                    height={5000}
                    width={5000}
                    alt={section.title}
                    priority={index < 2}
                  />
                </div>

                {/* Content Section - Directly after image */}
                <div className="p-5 sm:p-6 pt-4 sm:pt-5">
                  <h2 className="font-light text-2xl sm:text-3xl mb-3 sm:mb-4">
                    {section.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4 sm:mb-5">
                    {section.description}
                  </p>

                  <div className="w-full flex justify-center items-center">
                    <Link
                      href={`/services/${section.title.replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex justify-center w-full"
                    >
                      <AnimatedButton
                        text="View More"
                        className="w-full sm:w-3/4 md:w-1/2 flex justify-center border-2 border-gray-600 bg-inherit!"
                        textClass="text-gray-700! text-sm! sm:text-base!"
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