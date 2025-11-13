'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { HeroSectionProps } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { shouldReduceMotion } from '@/components/animations/gsap-animations';

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion()) return;

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      })
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5'
      )
      .from(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.4'
      );

    // Scroll indicator animation
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    return () => {
      timeline.kill();
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            ref={titleRef}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl"
          >
            {subtitle}
          </p>
          <div ref={ctaRef}>
            <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleScrollDown();
          }
        }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
      </div>
    </section>
  );
}
