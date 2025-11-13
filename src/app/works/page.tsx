import { Metadata } from 'next';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { WorksGrid } from '@/components/works/WorksGrid';
import { works } from '@/lib/data/dummy';

export const metadata: Metadata = {
  title: 'Recent Works',
  description:
    'Explore our portfolio of successful projects across various industries. From e-commerce platforms to mobile apps, healthcare solutions to fintech dashboards - see how we deliver innovative solutions that drive real business results.',
  keywords: [
    'portfolio',
    'case studies',
    'projects',
    'web applications',
    'mobile apps',
    'success stories',
  ],
  openGraph: {
    title: 'Recent Works | Devlyfi',
    description:
      'Explore our portfolio of successful projects. See how we have helped businesses across various industries achieve their goals with cutting-edge technology solutions.',
    type: 'website',
    url: '/works',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Devlyfi Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recent Works | Devlyfi',
    description:
      'Explore our portfolio of successful projects. See how we have helped businesses across various industries achieve their goals with cutting-edge technology solutions.',
    images: ['/og-image.jpg'],
    creator: '@devlyfi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeInUp">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Recent Works
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Explore our portfolio of successful projects across various industries. Each
                project showcases our commitment to delivering innovative solutions that drive
                real business results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Works Grid with Filter */}
      <WorksGrid works={works} />

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-primary/5 to-transparent py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeInUp">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Let's collaborate to bring your vision to life. Our team is ready to tackle
                your next challenge and deliver exceptional results.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get in Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
