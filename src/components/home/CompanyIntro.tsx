'use client';

import { useEffect, useRef } from 'react';
import { fadeInUp, fadeInLeft, shouldReduceMotion } from '@/components/animations/gsap-animations';

interface CompanyIntroProps {
  title: string;
  description: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export function CompanyIntro({ title, description, stats }: CompanyIntroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion()) return;

    const animations: (gsap.core.Tween | null)[] = [];

    if (titleRef.current) {
      animations.push(fadeInUp(titleRef.current, 0));
    }
    if (descriptionRef.current) {
      animations.push(fadeInUp(descriptionRef.current, 0.2));
    }
    if (statsRef.current) {
      animations.push(fadeInLeft(statsRef.current, 0.4));
    }

    return () => {
      animations.forEach((animation) => {
        if (animation) animation.kill();
      });
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2
              ref={titleRef}
              className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
            <p
              ref={descriptionRef}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {description}
            </p>
          </div>

          <div ref={statsRef}>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
