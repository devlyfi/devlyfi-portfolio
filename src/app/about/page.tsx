import type { Metadata } from 'next';
import { aboutPageData } from '@/lib/data/dummy';
import { MissionVisionSection } from '@/components/about/MissionVisionSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { MilestonesSection } from '@/components/about/MilestonesSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Devlyfi\'s mission, vision, values, and journey. We are committed to delivering innovative technology solutions that drive business growth.',
  keywords: [
    'about devlyfi',
    'software development company',
    'technology solutions',
    'company mission',
    'company values',
  ],
  openGraph: {
    title: 'About Us | Devlyfi',
    description:
      'Learn about Devlyfi\'s mission, vision, values, and journey. We are committed to delivering innovative technology solutions that drive business growth.',
    type: 'website',
    url: '/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Devlyfi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Devlyfi',
    description:
      'Learn about Devlyfi\'s mission, vision, values, and journey. We are committed to delivering innovative technology solutions that drive business growth.',
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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-background py-20 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              About <span className="text-primary">Devlyfi</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Transforming ideas into digital reality through innovation, expertise, and dedication
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVisionSection
        mission={aboutPageData.mission}
        vision={aboutPageData.vision}
      />

      {/* Values Section */}
      <ValuesSection values={aboutPageData.values} />

      {/* Milestones Section */}
      <MilestonesSection milestones={aboutPageData.milestones} />
    </main>
  );
}
