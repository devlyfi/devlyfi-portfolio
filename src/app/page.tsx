import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { homePageData, services, works } from '@/lib/data/dummy';

// Lazy load below-the-fold components
const CompanyIntro = dynamic(() => import('@/components/home/CompanyIntro').then(mod => ({ default: mod.CompanyIntro })), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />,
});

const ServicesPreview = dynamic(() => import('@/components/home/ServicesPreview').then(mod => ({ default: mod.ServicesPreview })), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />,
});

const WorksPreview = dynamic(() => import('@/components/home/WorksPreview').then(mod => ({ default: mod.WorksPreview })), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />,
});

const CTASection = dynamic(() => import('@/components/home/CTASection').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />,
});

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Devlyfi - Building Digital Excellence. We craft innovative software solutions that transform businesses and delight users.',
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'cloud solutions',
    'UI/UX design',
    'digital transformation',
  ],
  openGraph: {
    title: 'Devlyfi - Building Digital Excellence',
    description:
      'We craft innovative software solutions that transform businesses and delight users.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Devlyfi - Building Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devlyfi - Building Digital Excellence',
    description:
      'We craft innovative software solutions that transform businesses and delight users.',
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

export default function Home() {
  return (
    <main>
      <HeroSection
        title={homePageData.hero.title}
        subtitle={homePageData.hero.subtitle}
        ctaText={homePageData.hero.ctaText}
        ctaLink={homePageData.hero.ctaLink}
      />
      
      <CompanyIntro
        title={homePageData.about.title}
        description={homePageData.about.description}
        stats={homePageData.about.stats}
      />
      
      <ServicesPreview services={services} maxDisplay={3} />
      
      <WorksPreview works={works} maxDisplay={6} />
      
      <CTASection />
    </main>
  );
}
