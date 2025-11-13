'use client';

import { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { Work } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface WorksGridProps {
  works: Work[];
}

export function WorksGrid({ works }: WorksGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories from works
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(works.map((work) => work.category)));
    return ['All', ...uniqueCategories.sort()];
  }, [works]);

  // Filter works based on selected category
  const filteredWorks = useMemo(() => {
    if (selectedCategory === 'All') {
      return works;
    }
    return works.filter((work) => work.category === selectedCategory);
  }, [selectedCategory, works]);

  return (
    <>
      {/* Category Filter Section */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm font-medium text-muted-foreground mr-2">
                Filter by:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Works Grid Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection stagger staggerDelay={0.1}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWorks.map((work) => (
                <ProjectCard key={work.id} project={work} variant="grid" />
              ))}
            </div>
          </AnimatedSection>

          {/* Empty State */}
          {filteredWorks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
