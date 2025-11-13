'use client';

import Link from 'next/link';
import { ServiceDetailProps } from '@/lib/types';
import { services } from '@/lib/data/dummy';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  Brain,
  Briefcase,
  Link as LinkIcon,
  Settings,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

// Icon mapping for service icons
const iconMap: Record<string, LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
  brain: Brain,
  briefcase: Briefcase,
  link: LinkIcon,
  settings: Settings,
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = iconMap[service.icon] || Code;

  // Get related services (exclude current service, limit to 3)
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-background py-20 md:py-32">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-10 w-10" />
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                {service.description}
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <section className="py-20">
            <div className="container-custom">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  What We Offer
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive solutions tailored to your needs
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.features.map((feature, index) => (
                  <Card key={index} className="transition-all hover:shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-base">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Process Timeline Section */}
      {service.process && service.process.length > 0 && (
        <AnimatedSection animation="fadeInUp" delay={0.3}>
          <section className="bg-muted/30 py-20">
            <div className="container-custom">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Our Process
                </h2>
                <p className="text-lg text-muted-foreground">
                  A proven methodology for delivering exceptional results
                </p>
              </div>

              <div className="mx-auto max-w-3xl">
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <Card>
                          <CardContent className="pt-6">
                            <p className="text-base">{step}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <section className="py-20">
            <div className="container-custom">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Related Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore our other service offerings
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((relatedService) => (
                  <ServiceCard
                    key={relatedService.id}
                    service={relatedService}
                    variant="preview"
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/services">
                  <Button variant="outline" size="lg" className="group">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* CTA Section */}
      <AnimatedSection animation="fadeInUp" delay={0.5}>
        <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-white">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Let's discuss how our {service.title.toLowerCase()} services can help
                transform your business and achieve your goals.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto group"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                  >
                    View Our Work
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
