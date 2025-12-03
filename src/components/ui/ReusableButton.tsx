"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import gsap from "gsap";

interface ReusableButtonProps {
  text: string;
  onClick?: () => void;
}

export default function ReusableButton({ text, onClick }: ReusableButtonProps) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // ✅ Split text into individual WORD spans
  const splitTextToSpans = (text: string) =>
    text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-[6px]">
        {word}
      </span>
    ));

  useEffect(() => {
    if (!textRef.current || !wrapperRef.current) return;

    const words = textRef.current.querySelectorAll(".word");
    const wrapper = wrapperRef.current;

    const enter = () => {
      gsap.killTweensOf(words);

      gsap.to(words, {
        y: -20,
        opacity: 0,
        duration: 0.25,
        stagger: 0.020, // 🌊 WAVE EFFECT
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(words, { y: 20, opacity: 0 });

          gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.020,
            ease: "power3.out",
          });
        },
      });

      gsap.to(arrowRef.current, {
        rotate: 0,
        duration: 0.60,
        ease: "power3.out",
      });
    };

const leave = () => {
  gsap.killTweensOf(words);

  // 1️⃣ Animate words down & fade out (reverse wave)
  gsap.to(words, {
    y: 20,
    opacity: 0,
    duration: 0.25,
    stagger: -0.02, // ← reverse order wave
    ease: "power2.inOut",
    onComplete: () => {
      // 2️⃣ Reset above and fade in
      gsap.set(words, { y: -20, opacity: 0 });

      // 3️⃣ Animate back to natural position
      gsap.to(words, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: -0.02,
        ease: "power3.out",
      });
    },
  });

  // Arrow reverse rotation
  gsap.to(arrowRef.current, {
    rotate: -45,
    duration: 0.35,
    ease: "power3.out",
  });
};

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="
        flex justify-between items-center h-14 bg-secondary rounded-full cursor-pointer 
        select-none transform-gpu hover:scale-95 transition-transform duration-300
      "
      onClick={onClick}
    >
      {/* Animated Text */}
      <div
        ref={textRef}
        className="px-6 text-primary font-semibold flex gap-0 overflow-hidden"
      >
        {splitTextToSpans(text)}
      </div>

      {/* Arrow */}
      <div
        ref={arrowRef}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center"
        style={{ rotate: "-45deg" }}
      >
        <ArrowRightIcon className="text-white h-6 w-6" />
      </div>
    </div>
  );
}
