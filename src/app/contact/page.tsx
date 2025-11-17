import { Metadata } from "next";
import ContactFormWrapper from "@/components/shared/ContactFormWrapper";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { companyInfo } from "@/lib/data/dummy";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Devlyfi. We're here to answer your questions and discuss your next project. Contact us for software development services, consultations, and partnerships.",
  keywords: [
    "contact devlyfi",
    "get in touch",
    "software development inquiry",
    "project consultation",
    "contact information",
  ],
  openGraph: {
    title: "Contact Us | Devlyfi",
    description:
      "Get in touch with Devlyfi. We're here to answer your questions and discuss your next project.",
    type: "website",
    url: "/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Devlyfi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Devlyfi",
    description:
      "Get in touch with Devlyfi. We're here to answer your questions and discuss your next project.",
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

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? We&apos;d love
                to hear from you. Fill out the form below and we&apos;ll get
                back to you as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="md:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Email
                        </h3>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Phone
                        </h3>
                        <a
                          href={`tel:${companyInfo.phone}`}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Address
                        </h3>
                        <p className="text-gray-600">{companyInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <ContactFormWrapper />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
