"use client";

import Link from "next/link";
import { Service } from "@/lib/types";
import { generalFAQ, services } from "@/lib/data/dummy";
import { CTASection } from "@/components/home/CTASection";

import WhyChooseUsSection from "./WhyChoseUsSection";
import ServicesBanner from "./ServicesBanner";
import ServicesGrid from "./ServicesGrid";
import OurProcess from "./OurProcess";
import MinimalCard from "../shared/MinimalCard";
import ShinyBadge from "../ui/shiny-badge";
import FAQ from "../shared/Faq";

interface ServiceDetailNewProps {
  service: Service;
}

export default function ServiceDetailNew({ service }: ServiceDetailNewProps) {
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <ServicesBanner service={service}></ServicesBanner>

      {/* What We Offer - FULLY VISIBLE BENTO GRID */}
      <ServicesGrid service={service}></ServicesGrid>

      {/* <section>
        <WhyChooseUsSection></WhyChooseUsSection>
      </section> */}

      {/* Our Process - FULLY VISIBLE CARDS */}
      <div className="">
        <OurProcess service={service}></OurProcess>
      </div>
     

      {/* Related Services */}
      <section className=" ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="text-center lg:text-left my-14 md:my-20">
              <ShinyBadge
                text="More Services"
                className="inline-block px-5 py-2 rounded-full border uppercase text-2xl! tracking-wider"
              ></ShinyBadge>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {relatedServices.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="related-card group relative  rounded-2xl"
              >
                <MinimalCard service={s}></MinimalCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="min-h-screen my-14 md:my-24 lg:my-32">
        <FAQ theme="light" items={generalFAQ}></FAQ>
      </div>

      <CTASection />
    </div>
  );
}
