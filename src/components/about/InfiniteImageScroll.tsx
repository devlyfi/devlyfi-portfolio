'use client';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function InfiniteImageScroll({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerHeight = 400;
  const widths = 300; // image width
  const heights = [containerHeight, containerHeight * 0.9, containerHeight * 0.75];

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    gsap.to(container, {
      xPercent: -50, // move left by half (because duplicated)
      ease: 'linear',
      duration: 50,
      repeat: -1,
    });
  }, [images]);

  const allImages = [...images, ...images, ...images];

  return (
    <div
      className="overflow-hidden relative"
      style={{ height: containerHeight }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 h-full w-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, white 0%, transparent 100%)',
        }}
      ></div>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 h-full w-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, white 0%, transparent 100%)',
        }}
      ></div>

      <div ref={containerRef} className="flex gap-8 items-center w-max">
        {allImages.map((image, index) => (
          <div
            key={index}
            className="shrink-0 relative rounded-4xl overflow-hidden"
            style={{
              width: widths,
              height: heights[index % heights.length],
            }}
          >
            <Image src={image} alt={`Image ${index}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteImageScroll;
