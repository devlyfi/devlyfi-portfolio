'use client';

import { Target, Eye } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

interface MissionVisionSectionProps {
  mission: string;
  vision: string;
}

export function MissionVisionSection({ mission, vision }: MissionVisionSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Mission */}
          <AnimatedSection animation="fadeInLeft" delay={0.2}>
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg md:p-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {mission}
              </p>
            </div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection animation="fadeInRight" delay={0.2}>
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg md:p-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Our Vision</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {vision}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
