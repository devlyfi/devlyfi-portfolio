import { Metadata } from "next";
import { works } from "@/lib/data/dummy";
import WorkGrid from "@/components/works/WorksGrid";

export const metadata: Metadata = {
  title: "Recent Works",
  description:
    "Explore our portfolio of successful projects across various industries. From e-commerce platforms to mobile apps, healthcare solutions to fintech dashboards - see how we deliver innovative solutions that drive real business results.",
  keywords: [
    "portfolio",
    "case studies",
    "projects",
    "web applications",
    "mobile apps",
    "success stories",
  ],
  openGraph: {
    title: "Recent Works | Devlyfi",
    description:
      "Explore our portfolio of successful projects. See how we have helped businesses across various industries achieve their goals with cutting-edge technology solutions.",
    type: "website",
    url: "/works",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devlyfi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recent Works | Devlyfi",
    description:
      "Explore our portfolio of successful projects. See how we have helped businesses across various industries achieve their goals with cutting-edge technology solutions.",
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

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-color h-[50vh] flex justify-center items-center">
        <div className="">
          <h2 className="text-white">Designs That Speak Results that Matter</h2>
        </div>
      </section>
      <section className=" my-20">
        <WorkGrid works={works}></WorkGrid>
      </section>
    </div>
  );
}
