'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ServicesPreviewProps } from '@/lib/types';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { staggerFadeIn, shouldReduceMotion } from '@/components/animations/gsap-animations';

export function ServicesPreview({ services, maxDisplay = 3 }: ServicesPreviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion() || !cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children) as HTMLElement[];
    if (cards.length > 0) {
      const animation = staggerFadeIn(cards, 0.15);
      
      return () => {
        if (animation) animation.kill();
      };
    }
  }, []);

  const displayedServices = services.slice(0, maxDisplay);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We offer comprehensive software development services to help your business thrive in the digital age
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="preview" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
