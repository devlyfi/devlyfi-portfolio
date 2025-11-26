import { Metadata } from "next";
import { notFound } from "next/navigation";
import { works } from "@/lib/data/dummy";
import WorkDetails from "@/components/works/WorkDetail";

// Generate static params for all work slugs
export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${work.title} | Devlyfi Works`,
    description: work.description,
    keywords: [work.category, ...work.technologies],
    openGraph: {
      title: `${work.title} | Devlyfi Works`,
      description: work.description,
      type: "website",
      images: [
        {
          url: work.thumbnail,
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Devlyfi Works`,
      description: work.description,
      images: [work.thumbnail],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  // Handle 404 for invalid slugs
  if (!work) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devlyfi.com";

  // BreadcrumbList structured data schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Works",
        item: `${baseUrl}/works`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: work.title,
        item: `${baseUrl}/works/${work.slug}`,
      },
    ],
  };

  // CreativeWork structured data schema
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title,
    description: work.description,
    image: `${baseUrl}${work.thumbnail}`,
    creator: {
      "@type": "Organization",
      name: "Devlyfi",
      url: baseUrl,
    },
    dateCreated: `${work.year}-01-01`,
    genre: work.category,
    keywords: work.technologies.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />
      <WorkDetails work={work} />
    </>
  );
}
