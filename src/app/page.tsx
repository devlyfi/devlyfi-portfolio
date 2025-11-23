import { Metadata } from "next";
import dynamic from "next/dynamic";

import { generalFAQ, works } from "@/lib/data/dummy";
import HeroSection from "@/components/home/HeroSection";
import WhatDefinesUs from "@/components/home/WhatDefinesUs";

import ScrollReveal from "@/components/ui/scrollReveal";
import RecentWorks from "@/components/home/RecentWorks";
import FAQ from "@/components/shared/Faq";

// Lazy load below-the-fold components
const OurExperience = dynamic(
  () =>
    import("@/components/home/OurExperience").then((mod) => ({
      default: mod.OurExperience,
    })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

const CTASection = dynamic(
  () =>
    import("@/components/home/CTASection").then((mod) => ({
      default: mod.CTASection,
    })),
  {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
  }
);

export const metadata: Metadata = {
  title: "Home",
  description:
    "Devlyfi - Building Digital Excellence. We craft innovative software solutions that transform businesses and delight users.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "cloud solutions",
    "UI/UX design",
    "digital transformation",
  ],
  openGraph: {
    title: "Devlyfi - Building Digital Excellence",
    description:
      "We craft innovative software solutions that transform businesses and delight users.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devlyfi - Building Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlyfi - Building Digital Excellence",
    description:
      "We craft innovative software solutions that transform businesses and delight users.",
    images: ["/og-image.jpg"],
    creator: "@devlyfi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ScrollReveal></ScrollReveal>
      {/* <AnimationTestPage></AnimationTestPage> */}

      {/* <ScrollStack></ScrollStack> */}
      {/* <ScrollingSection></ScrollingSection> */}
      <WhatDefinesUs />

      <OurExperience />
      <div className="overflow-hidden">
        <RecentWorks />
      </div>

      <div className="min-h-screen">
        <FAQ items={generalFAQ} theme="light"></FAQ>
      </div>
      <CTASection />
    </main>
  );
}
