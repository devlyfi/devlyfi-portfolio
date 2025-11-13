'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { WorksPreviewProps } from '@/lib/types';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { staggerFadeIn, shouldReduceMotion } from '@/components/animations/gsap-animations';

export function WorksPreview({ works, maxDisplay = 6 }: WorksPreviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion() || !cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children) as HTMLElement[];
    if (cards.length > 0) {
      const animation = staggerFadeIn(cards, 0.1);
      
      return () => {
        if (animation) animation.kill();
      };
    }
  }, []);

  const displayedWorks = works.slice(0, maxDisplay);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Recent Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayedWorks.map((work) => (
            <ProjectCard key={work.id} project={work} variant="grid" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/works">
              View All Works
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
