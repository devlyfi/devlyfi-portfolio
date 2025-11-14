import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/data/dummy';
import ServiceDetailNew from '@/components/services/ServiceDetailNew';

// Generate static params for all service slugs
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Devlyfi Services`,
    description: service.description,
    keywords: [service.title, 'software development', ...service.features.slice(0, 3)],
    openGraph: {
      title: `${service.title} | Devlyfi Services`,
      description: service.description,
      type: 'website',
      url: `/services/${service.slug}`,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Devlyfi Services`,
      description: service.description,
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
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  // Handle 404 for invalid slugs
  if (!service) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devlyfi.com';

  // BreadcrumbList structured data schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${baseUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${baseUrl}/services/${service.slug}`,
      },
    ],
  };

  // Service structured data schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Devlyfi',
      url: baseUrl,
    },
    serviceType: service.title,
    areaServed: 'Worldwide',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailNew service={service} />
    </>
  );
}
