import { Metadata } from 'next';


import { blogPosts } from '@/lib/data/dummy';
import CommonHero from "@/components/shared/CommonHero";
import MiniCTA from "@/components/shared/MiniCTA";
import BlogGrid from '@/components/blog/BlogGrid';

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
    <div className="min-h-screen max-w-7xl mx-auto">
      <CommonHero
        title="Blog & Insights"
        subtitle="Stay updated with the latest trends, best practices, and insights in software development. Our team shares knowledge on web development, mobile apps, cloud computing, AI, and more."
      />

      {/* Blog Grid with Filters */}
      <BlogGrid posts={blogPosts} />

      {/* CTA Section */}
      <MiniCTA />
    </div>
  );
}
