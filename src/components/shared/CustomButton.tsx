"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface CustomButtonProps {
  text: string;
  className?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  textColor?: string;
}

export default function CustomButton({
  text,
  className,
  hoverColor = "#ffadad",
  hoverTextColor = "#ffffff",
  textColor = "#ffffff",
}: CustomButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  // Magnetic movement
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const move = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const reset = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    };

    button.addEventListener("mousemove", move);
    button.addEventListener("mouseleave", reset);

    return () => {
      button.removeEventListener("mousemove", move);
      button.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Hover start
  const handleMouseEnter = () => {
    const overlay = overlayRef.current;
    const textEl = textRef.current;
    if (!overlay || !textEl) return;

    gsap.set(overlay, { backgroundColor: hoverColor });

    gsap.fromTo(
      overlay,
      { clipPath: "circle(0% at 50% 0%)" },
      { clipPath: "circle(150% at 50% 0%)", duration: 1.4, ease: "power3.out" }
    );

    gsap.to(textEl, {
      color: hoverTextColor,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Hover end – RUN BACKGROUND FIRST → then text reset
  const handleMouseLeave = () => {
    const overlay = overlayRef.current;
    const textEl = textRef.current;
    if (!overlay || !textEl) return;

    // === 1) BACKGROUND ANIMATION FIRST ===
    gsap.fromTo(
      overlay,
      { clipPath: "circle(150% at 50% 0%)" },
      {
        clipPath: "circle(0% at 50% 100%)",
        duration: 0.7,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlay, { backgroundColor: "transparent" });

          // === 2) RESET TEXT COLOR AFTER BG FINISHES ===
          gsap.to(textEl, {
            color: textColor,
            duration: 0.25,
            ease: "power1.inOut",
          });
        },
      }
    );
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative px-8 py-3 rounded-full  font-semibold overflow-hidden  cursor-pointer ${className}`}
    >
      {/* Animated overlay */}
      <span
        ref={overlayRef}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ clipPath: "circle(0% at 50% 0%)" }}
      />

      {/* Button text */}
      <span
        ref={textRef}
        className={`relative z-10 `}
        style={{ color: textColor }}
      >
        {text}
      </span>
    </button>
  );
}
