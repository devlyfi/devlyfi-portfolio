'use client';

import { Calendar } from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

interface Milestone {
  year: number;
  title: string;
  description: string;
}

interface MilestonesSectionProps {
  milestones: Milestone[];
}

export function MilestonesSection({ milestones }: MilestonesSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Key milestones that have shaped our growth and success over the years
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-4xl">
          <AnimatedSection stagger staggerDelay={0.2}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:left-1/2 md:-translate-x-1/2" />

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`relative flex items-center gap-8 ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-8 z-10 flex h-4 w-4 items-center justify-center -translate-x-1/2 md:left-1/2">
                        <div className="h-4 w-4 rounded-full border-4 border-background bg-primary shadow-lg" />
                      </div>

                      {/* Content */}
                      <div className="ml-20 flex-1 md:ml-0">
                        <div
                          className={`rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40 ${
                            isEven ? 'md:text-right' : 'md:text-left'
                          }`}
                        >
                          <div
                            className={`mb-3 flex items-center gap-2 text-primary ${
                              isEven ? 'md:justify-end' : 'md:justify-start'
                            }`}
                          >
                            <Calendar className="h-5 w-5" />
                            <span className="text-xl font-bold">{milestone.year}</span>
                          </div>
                          <h3 className="mb-2 text-xl font-semibold">
                            {milestone.title}
                          </h3>
                          <p className="leading-relaxed text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for desktop layout */}
                      <div className="hidden flex-1 md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
