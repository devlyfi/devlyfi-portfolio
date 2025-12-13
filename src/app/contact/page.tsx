"use client";

import { useEffect, useRef } from "react";
import ContactFormWrapper from "@/components/shared/ContactFormWrapper";
import CommonHero from "@/components/shared/CommonHero";
import { companyInfo } from "@/lib/data/dummy";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement[]>([]);
  const formSectionRef = useRef<HTMLDivElement>(null);

  // Add contact card to refs array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !contactCardsRef.current.includes(el)) {
      contactCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for contact cards
      if (contactCardsRef.current.length > 0) {
        gsap.fromTo(
          contactCardsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactCardsRef.current[0],
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Form section animation
      if (formSectionRef.current) {
        gsap.fromTo(
          formSectionRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <CommonHero
        title="Let's Build Something Amazing Together"
        subtitle="Have a project in mind or just want to say hello? We'd love to hear from you. Reach out and let's start a conversation."
      />

      {/* Contact Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email Card */}
            {/* <div
              ref={addToRefs}
              className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div> */}

            {/* Phone Card */}
            {/* <div
              ref={addToRefs}
              className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div> */}

            {/* Address Card */}
            {/* <div
              ref={addToRefs}
              className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 text-sm">{companyInfo.address}</p>
                </div>
              </div>
            </div> */}

            {/* Business Hours Card */}
            {/* <div
              ref={addToRefs}
              className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-gray-600 text-sm">
                    <p>Monday - Friday</p>
                    <p className="font-medium">9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 mt-2">Weekend: Closed</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formSectionRef} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className=" mb-4 text-3xl md:text-6xl">
              Send Us a <span className="font-serif italic  text-primary">Message</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl   p-8 md:p-12">
            <ContactFormWrapper />
          </div>
        </div>
      </section>
    </div>
  );
}


