'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WorkDetailProps } from '@/lib/types';
import { works } from '@/lib/data/dummy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import {
  ArrowRight,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

export default function WorkDetail({ work }: WorkDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get related projects (same category, exclude current work, limit to 3)
  const relatedProjects = works
    .filter((w) => w.id !== work.id && w.category === work.category)
    .slice(0, 3);

  // If not enough related projects from same category, add from other categories
  if (relatedProjects.length < 3) {
    const additionalProjects = works
      .filter((w) => w.id !== work.id && !relatedProjects.includes(w))
      .slice(0, 3 - relatedProjects.length);
    relatedProjects.push(...additionalProjects);
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? work.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === work.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Image Gallery */}
      <AnimatedSection animation="fadeInUp">
        <section className="relative bg-black">
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <Image
              src={work.images[currentImageIndex]}
              alt={`${work.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

            {/* Navigation Arrows */}
            {work.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {work.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {work.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="container-custom">
                <span className="mb-3 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium">
                  {work.category}
                </span>
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                  {work.title}
                </h1>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Project Overview */}
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-3xl font-bold">Project Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {work.description}
                </p>
              </div>

              {/* Metadata Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold">Project Details</h3>
                    <div className="space-y-4">
                      {work.client && (
                        <div className="flex items-start gap-3">
                          <User className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Client</p>
                            <p className="font-medium">{work.client}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Year</p>
                          <p className="font-medium">{work.year}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies */}
                {work.technologies && work.technologies.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="mb-4 font-semibold">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Challenge Section */}
      {work.challenge && (
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <section className="bg-muted/30 py-16 md:py-20">
            <div className="container-custom">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-6 text-3xl font-bold">The Challenge</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {work.challenge}
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Solution Section */}
      {work.solution && (
        <AnimatedSection animation="fadeInUp" delay={0.3}>
          <section className="py-16 md:py-20">
            <div className="container-custom">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-6 text-3xl font-bold">Our Solution</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {work.solution}
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Results Section */}
      {work.results && work.results.length > 0 && (
        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <section className="bg-muted/30 py-16 md:py-20">
            <div className="container-custom">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-8 text-3xl font-bold">Results & Impact</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {work.results.map((result, index) => (
                    <Card key={index} className="transition-all hover:shadow-lg">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          </div>
                          <p className="text-base font-medium">{result}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <AnimatedSection animation="fadeInUp" delay={0.5}>
          <section className="py-16 md:py-20">
            <div className="container-custom">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Related Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore more of our work
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <ProjectCard
                    key={relatedProject.id}
                    project={relatedProject}
                    variant="grid"
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/works">
                  <Button variant="outline" size="lg" className="group">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* CTA Section */}
      <AnimatedSection animation="fadeInUp" delay={0.6}>
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white md:py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Have a Project in Mind?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Let's work together to bring your vision to life. Contact us today to
                discuss your project and see how we can help you achieve your goals.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto group"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                  >
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
