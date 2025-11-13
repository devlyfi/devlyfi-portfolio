'use client';

import {
  Lightbulb,
  Award,
  Users,
  Shield,
  Star,
  Zap,
  LucideIcon,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

// Icon mapping for value icons
const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  award: Award,
  users: Users,
  shield: Shield,
  star: Star,
  zap: Zap,
};

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface ValuesSectionProps {
  values: Value[];
}

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container-custom">
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection stagger staggerDelay={0.15}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = iconMap[value.icon] || Star;
              return (
                <div
                  key={index}
                  className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/40"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
