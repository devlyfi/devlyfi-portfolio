import { Metadata } from "next";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { services } from "@/lib/data/dummy";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive range of software development services including web development, mobile apps, cloud solutions, UI/UX design, AI & ML, and more. Transform your business with cutting-edge technology solutions.",
  keywords: [
    "software development services",
    "web development",
    "mobile app development",
    "cloud solutions",
    "UI/UX design",
    "AI integration",
    "blockchain development",
    "DevOps services",
  ],
  openGraph: {
    title: "Our Services | Devlyfi",
    description:
      "Explore our comprehensive range of software development services. From web and mobile development to AI integration and cloud solutions.",
    type: "website",
    url: "/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devlyfi Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Devlyfi",
    description:
      "Explore our comprehensive range of software development services. From web and mobile development to AI integration and cloud solutions.",
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/5 to-transparent py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeInUp">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground sm:text-xl">
                We offer a comprehensive range of software development services
                to help your business thrive in the digital age. From concept to
                deployment, we deliver excellence at every step.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection stagger staggerDelay={0.1}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  variant="preview"
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-t from-primary/5 to-transparent py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeInUp">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Let's discuss how we can help bring your vision to life with our
                expert development services.
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
    </main>
  );
}
