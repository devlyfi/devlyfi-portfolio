"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type AnimatedTextProps = {
  text: string;
  animationType?:
    | "fade"
    | "slide"
    | "scale"
    | "zoom"
    | "random"
    | "scrollBlurUp"
    | "loadUp";
  className?: string;
  type?: "words" | "chars" | "lines";
  delay?: number;
  duration?: number;
  stagger?: number;
  distance?: number;
  scaleFrom?: number;
  rotationFrom?: number;
  slideFromX?: boolean;
  colorScroll?: boolean; // color changes based on scroll
  colorFrom?: string;
  colorTo?: string;
  textClassName?: string;
  triggerStart?: string; // ScrollTrigger start position
  triggerEnd?: string; // ScrollTrigger end position
  bidirectional?: boolean; // Whether animation works in both scroll directions
  startOnEvent?: string; // if provided and animationType==='loadUp', play on event
  startOnEventDelay?: number; // optional delay (seconds) after event before play
  startOnEventTimeout?: number; // fallback timeout (ms) to auto-play if event never fires
};

export default function AnimatedText({
  text,
  animationType = "fade",
  className = "",
  type = "words",
  delay = 0,
  duration = 1.5,
  stagger = 0.05,
  distance = 100,
  scaleFrom = 0.8,
  rotationFrom = 30,
  slideFromX = false,
  colorScroll = false,
  colorFrom = "#000000",
  colorTo = "#ff0000",
  textClassName = "",
  triggerStart = "top 80%",
  triggerEnd = "bottom 20%",
  bidirectional = false,
  startOnEvent,
  startOnEventDelay = 0,
  startOnEventTimeout = 0,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const element = textRef.current;

    // Split text into words/chars/lines
    const split = new SplitText(element, { type });
    const targets = split[type];

    const startX = slideFromX ? -window.innerWidth / 2 : 0;

    // Entrance animation scroll-linked
    let animationProps: gsap.TweenVars = {
      autoAlpha: 0,
      stagger: { amount: stagger * targets.length, from: "start" },
      duration,
      ease: "power3.out",
      x: startX,
    };

    switch (animationType) {
      case "fade":
        animationProps = { ...animationProps, x: startX, autoAlpha: 0 };
        break;
      case "slide":
        animationProps = {
          ...animationProps,
          x: startX,
          y: distance,
          autoAlpha: 0,
          rotation: rotationFrom,
          randomize: true,
        };
        break;
      case "scale":
        animationProps = {
          ...animationProps,
          scale: scaleFrom,
          x: startX,
          autoAlpha: 0,
        };
        break;
      case "zoom":
        animationProps = {
          ...animationProps,
          scale: scaleFrom + 0.2,
          x: startX,
          autoAlpha: 0,
        };
        break;
      case "random":
        animationProps = {
          ...animationProps,
          x: startX,
          y: `random(-${distance}, ${distance})`,
          rotation: `random(-${rotationFrom}, ${rotationFrom})`,
        };
        break;
      case "scrollBlurUp":
        // Scroll-linked reveal from below with blur
        animationProps = {
          ...animationProps,
          x: 0,
          y: distance,
          autoAlpha: 0,
          filter: "blur(12px)",
        };
        break;
      case "loadUp":
        // Page-load reveal from below, no ScrollTrigger
        animationProps = {
          ...animationProps,
          x: 0,
          y: distance,
          autoAlpha: 0,
        };
        break;
      default:
        animationProps = { ...animationProps, x: startX, autoAlpha: 0 };
        break;
    }

    const entranceAnim = gsap.from(targets, {
      ...animationProps,
      paused: true,
      delay,
    });

    if (animationType === "loadUp") {
      // Play on event if provided, otherwise immediately
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let handler: ((this: Window, ev: Event) => any) | null = null;
      let timeoutId: number | null = null;

      const playNow = () => {
        if (startOnEventDelay && startOnEventDelay > 0) {
          gsap.delayedCall(startOnEventDelay, () => entranceAnim.play());
        } else {
          entranceAnim.play();
        }
      };

      if (typeof window !== "undefined" && startOnEvent) {
        handler = () => {
          playNow();
          if (timeoutId) {
            window.clearTimeout(timeoutId);
            timeoutId = null;
          }
        };
        window.addEventListener(startOnEvent, handler, { once: true });

        if (startOnEventTimeout && startOnEventTimeout > 0) {
          timeoutId = window.setTimeout(() => {
            // Fallback: play if event didn’t arrive in time
            playNow();
          }, startOnEventTimeout);
        }
      } else {
        playNow();
      }

      // Cleanup event listener/timeout on unmount
      return () => {
        if (handler && startOnEvent) {
          window.removeEventListener(startOnEvent, handler);
        }
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
      };
    } else {
      ScrollTrigger.create({
        animation: entranceAnim,
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        ...(animationType === "scrollBlurUp"
          ? { scrub: true }
          : !bidirectional
          ? { toggleActions: "play reverse play reverse" }
          : { scrub: true }),
        onUpdate: (self) => {
          if (animationType === "scrollBlurUp") {
            // Reduce blur as scroll progresses
            const progress = self.progress;
            const blur = Math.max(0, 12 - 12 * progress);
            targets.forEach((t: Element) => {
              (t as HTMLElement).style.filter = `blur(${blur}px)`;
            });
          }
        },
      });
    }

    // Scroll-based color fill
    if (colorScroll) {
      element.style.background = `linear-gradient(to right, ${colorTo} 0%, ${colorFrom} 0%)`;
      element.style.webkitBackgroundClip = "text";
      element.style.webkitTextFillColor = "transparent";

      gsap.to(element, {
        backgroundPosition: "100% 0%",
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: triggerStart,
          end: triggerEnd,
          ...(bidirectional
            ? {
                toggleActions: "play reverse play reverse",
              }
            : {
                scrub: true,
              }),
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      split.revert();
    };
  }, [
    animationType,
    delay,
    duration,
    stagger,
    distance,
    scaleFrom,
    rotationFrom,
    type,
    slideFromX,
    colorScroll,
    colorFrom,
    colorTo,
    triggerStart,
    triggerEnd,
    bidirectional,
    startOnEvent,
    startOnEventDelay,
    startOnEventTimeout,
  ]);

  return (
    <div className={` ${className}`}>
      <h2 ref={textRef} className={` ${textClassName || ""}`}>
        {text}
      </h2>
    </div>
  );
}
