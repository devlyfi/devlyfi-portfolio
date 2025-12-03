"use client";

import React, { useRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import { useWaveTextAnimation } from "@/lib/hooks/useWaveTextAnimation";


interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  textClass?: string;
  className?: string;
  arrow?: boolean; // optional arrow
}

/**
 * Reusable animated button
 */
export default function AnimatedButton({
  text,
  onClick,
  className = "",
  textClass = "",
  arrow = true,
}: AnimatedButtonProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  // Apply reusable animation hook
  useWaveTextAnimation(
    wrapperRef as React.RefObject<HTMLElement>,
    textRef as React.RefObject<HTMLElement>,
    // arrow ? (arrowRef as React.RefObject<HTMLElement>) : undefined
  );

  // Split text into individual word spans
  const splitTextToSpans = (text: string) =>
    text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-[6px]">
        {word}
      </span>
    ));

  return (
    <div
      ref={wrapperRef}
      className={`flex justify-between items-center h-14 bg-secondary rounded-full cursor-pointer select-none transform-gpu hover:scale-95 transition-transform duration-300 ${className}`}
      onClick={onClick}
    >
      {/* Animated Text */}
      <div ref={textRef} className={`px-6 text-primary font-semibold flex gap-0 overflow-hidden ${textClass}`}>
        {splitTextToSpans(text)}
      </div>
    </div>
  );
}
