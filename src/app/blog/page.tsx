import { Metadata } from 'next';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { blogPosts } from '@/lib/data/dummy';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay updated with the latest insights, tutorials, and industry trends in software development. Explore articles on web development, mobile apps, cloud computing, AI, DevOps, and more from the Devlyfi team.',
  keywords: [
    'software development blog',
    'tech articles',
    'programming tutorials',
    'web development',
    'mobile development',
    'cloud computing',
    'AI',
    'DevOps',
  ],
  openGraph: {
    title: 'Blog | Devlyfi',
    description:
      'Stay updated with the latest insights, tutorials, and industry trends in software development. Expert articles on web development, mobile apps, cloud computing, and more.',
    type: 'website',
    url: '/blog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Devlyfi Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Devlyfi',
    description:
      'Stay updated with the latest insights, tutorials, and industry trends in software development. Expert articles on web development, mobile apps, cloud computing, and more.',
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

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeInUp">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Blog & Insights
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Stay updated with the latest trends, best practices, and insights in software
                development. Our team shares knowledge on web development, mobile apps, cloud
                computing, AI, and more.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid with Filters */}
      <BlogGrid posts={blogPosts} />

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-primary/5 to-transparent py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeInUp">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Want to Work With Us?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Have a project in mind? Let's discuss how we can help you achieve your goals
                with innovative technology solutions.
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
