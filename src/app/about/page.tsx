import type { Metadata } from 'next';
import { aboutPageData } from '@/lib/data/dummy';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import ValuesSection from '@/components/about/ValuesSection';
import Teams from '@/components/about/Teams';
import CommonHero from '@/components/shared/CommonHero';
import InfiniteImageScroll from '@/components/about/InfiniteImageScroll';
import FAQ from '@/components/shared/Faq';
import MiniCTA from '@/components/shared/MiniCTA';

  const images = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/20.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/21.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/19.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/1.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/2.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/3.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/4.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
  ];

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
    <main className="min-h-screen overflow-hidden">

      <CommonHero title={aboutPageData.hero.title} subtitle={aboutPageData.hero.subtitle}></CommonHero>
      <div className=''>
        <InfiniteImageScroll images={aboutPageData.images} />
      </div>
      {/* Mission & Vision Section */}
      <MissionVisionSection
        mission={aboutPageData.mission}
        vision={aboutPageData.vision}
      />
      {/* <HoverExpand_001 images={images}></HoverExpand_001> */}
      {/* Values Section */}
      <ValuesSection  />

      <Teams  />
      <FAQ theme='light' items={aboutPageData.faq}></FAQ>

      <MiniCTA/>
    </main>
  );
}
