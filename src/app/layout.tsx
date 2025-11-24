import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WebVitals from "@/components/shared/WebVitals";
import LoadingBar from "@/components/animations/LoadingBar";
import SmoothScrollInit from "@/components/animations/SmoothScrollInit";
import ScrollTriggerConfig from "@/components/animations/ScrollTriggerConfig";
import { companyInfo } from "@/lib/data/dummy";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://devlyfi.com"
  ),
  title: {
    default: `${companyInfo.name} - ${companyInfo.tagline}`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "cloud solutions",
    "UI/UX design",
    "AI integration",
    "blockchain development",
    "DevOps services",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: companyInfo.name,
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: companyInfo.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: companyInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: companyInfo.description,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization structured data schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://devlyfi.com",
    logo: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://devlyfi.com"
    }/logo.svg`,
    description: companyInfo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.split(",")[0],
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      contactType: "customer service",
      email: companyInfo.email,
      availableLanguage: "English",
    },
    sameAs: Object.values(companyInfo.socialMedia).filter(Boolean),
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <WebVitals />
        <LoadingBar />
        <SmoothScrollInit />
        <ScrollTriggerConfig />
        <Header />
        <main className="min-h-screen">
          {/* <PageTransition> */}
          {children}
          {/* </PageTransition> */}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
