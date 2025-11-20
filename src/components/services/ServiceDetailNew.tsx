"use client";

import Link from "next/link";
import { Service } from "@/lib/types";
import { brands, services } from "@/lib/data/dummy";
import { CTASection } from "@/components/home/CTASection";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Target,
  Lightbulb,
  Code,
  Rocket,
  Users,
} from "lucide-react";
import TextMarquee from "../ui/text-marque";
import CustomButton from "../shared/CustomButton";
import WhyChooseUsSection from "./WhyChoseUsSection";

interface ServiceDetailNewProps {
  service: Service;
}

export default function ServiceDetailNew({ service }: ServiceDetailNewProps) {
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const tools = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Tailwind CSS",
  ];

  const processIcons = [CheckCircle, Target, Lightbulb, Code, Rocket, Users];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black" />
        <div className="banner-content relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="inline-block mb-6 px-4 py-2 rounded-full border border-blue-500/50 bg-blue-500/10">
              <span className="text-blue-500 font-medium">Our Services</span>
            </div> */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin text-white mb-6   leading-tight">
              {service.title}
            </h2>
            <p className="text-lg text-gray-400   leading-relaxed">
              {service.description}
            </p>
            <div className=" w-full max-w-6xl mt-15">
              <p className=" text-center text-lg uppercase tracking-widest text-gray-400">
                Tools & Technologies that We Use
              </p>

              <TextMarquee marquee1={[...tools]} marquee2={[...tools]} />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CustomButton
                text="Book a call"
                className="bg-transparent border-2 border-white"
                hoverColor="white"
                hoverTextColor="#000"
                textColor="#fff"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
      </section>

      {/* What We Offer - FULLY VISIBLE BENTO GRID */}
      <section className="py-16 md:py-24 bg-white overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl  lg:text-5xl font-thin text-black mb-6   leading-tight">
              Your Ideas, Our Expertise, Impactful Results
            </h2>
            <p className="text-center text-base uppercase tracking-widest text-gray-600">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          {/* Bento Grid - 3x3 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[minmax(160px,auto)]">
            {service.features?.map((feature, index) => {
              // Define grid span classes per breakpoint
              const gridClasses = (() => {
                if (index === 0) {
                  // Card 1: Big image - 2 rows × 1 col on md, 2x2 on lg
                  return "md:row-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2";
                }
                if (index === 1) {
                  // Card 2: Content - top right on lg
                  return "lg:col-span-1 lg:row-span-1";
                }
                if (index === 2) {
                  // Card 3: Second image - HIDDEN on md, shown only on lg (2 rows × 1 col)
                  return "hidden lg:block lg:col-span-1 lg:row-span-2";
                }
                if (index === 3) {
                  // Card 4: Content - bottom left area on md/lg
                  return "md:col-span-1 lg:col-span-1";
                }
                if (index === 4) {
                  // Card 5: Content - spans 2 columns on md, 1 col + 2 rows on lg
                  return "md:col-span-1 lg:col-span-1 lg:row-span-2";
                }
                if (index === 5) {
                  // Card 6: Last card - spans 2 columns on md, 2 columns on lg (full bottom row)
                  return "md:col-span-1 lg:col-span-2";
                }
                return "md:col-span-2 lg:col-span-2";
              })();

              const isImageOnly = index === 0 || index === 2;

              // Skip rendering index 2 entirely on md and below (optional, but cleaner)
              if (index === 2) {
                return null; // Or keep the div with hidden + lg:block as above
              }

              return (
                <div
                  key={index}
                  className={`offering-item group relative rounded-xl border-2 border-gray-200 transition-all duration-500 cursor-pointer bg-white overflow-hidden ${gridClasses}`}
                  style={{ minHeight: "160px" }}
                >
                  {/* Image-only cards */}
                  {isImageOnly ? (
                    <div className="relative z-10 h-full w-full">
                      {service.featureImages &&
                        service.featureImages[index === 0 ? 0 : 1] && (
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                            style={{
                              backgroundImage: `url(${
                                service.featureImages[index === 0 ? 0 : 1]
                              })`,
                            }}
                          />
                        )}
                    </div>
                  ) : (
                    /* Content cards */
                    <div className="relative z-10 h-full flex flex-col justify-center p-5 hover:bg-[#171717] hover:text-white transition duration-300">
                      <div className="space-y-2">
                        <h3 className="text-base lg:text-lg font-bold transition-colors duration-300">
                          {feature}
                        </h3>
                        <p className="text-xs lg:text-sm leading-relaxed transition-colors duration-300">
                          {index === 1
                            ? "Innovative solutions tailored to meet your specific business requirements and objectives."
                            : index === 3
                            ? "Comprehensive approach combining strategy, design, and technology for optimal results."
                            : index === 4
                            ? "End-to-end services ensuring seamless implementation and long-term success."
                            : "Strategic solutions designed to accelerate growth and maximize business value."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <WhyChooseUsSection></WhyChooseUsSection>
      </section>

      {/* Our Process - FULLY VISIBLE CARDS */}
      <section className="py-20 md:py-32 bg-[#171717] overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-400">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto auto-rows-auto pb-8">
            {service.process?.map((step, index) => {
              const IconComponent = processIcons[index] || CheckCircle;

              // Parse format: "Title: Description | Details"
              const parts = step.split("|");
              const titleAndDesc = parts[0].split(":");
              const stepTitle = titleAndDesc[0].trim();
              const stepDescription = titleAndDesc[1]?.trim() || "";
              const stepDetails = parts[1]?.trim() || stepDescription;

              return (
                <div
                  key={index}
                  className="process-step group relative overflow-hidden bg-linear-to-br from-[#171717] to-blue-900/10 border border-gray-700/50 hover:border-primary/50 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
                  style={{ minHeight: "400px", height: "auto" }}
                >
                  {/* Card Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 bg-linear-to-r from-blue-400 to-blue-500 text-black font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>

                    {/* Floating Icon - No background when not hovered */}
                    <div className="absolute -bottom-2 -right-2.5 z-10">
                      <div className="p-3  group-hover:scale-110 transition-transform duration-300  bg-linear-to-r from-blue-400 to-blue-500 rounded-full">
                        <IconComponent className="w-6 h-6  " />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col justify-center items-start h-full pt-8 space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                        {stepTitle}
                      </h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {stepDescription}
                      </p>

                      {/* Expanded details that appear on hover - slides up from bottom - ONLY SHOWS DETAILS */}
                      <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-linear-to-br from-primary/95 to-primary-600/95 rounded-2xl p-6 flex flex-col justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <IconComponent className="w-6 h-6 text-white" />
                            <span className="font-bold text-lg">
                              Step {index + 1}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed">
                            {stepDetails}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-primary-600/2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      {/* <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              We use industry-leading tools to build exceptional solutions
            </p>
          </div>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="tool-item px-6 py-3 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="text-gray-900 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Related Services */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Related Services
            </h2>
            <p className="text-xl text-gray-600">
              Explore our other service offerings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {relatedServices.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="related-card group relative p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500/50 transition-all duration-300 overflow-hidden bg-white hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-radial from-blue-900/40 via-black to-black opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 mb-4 leading-relaxed transition-colors">
                    {s.description}
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-400 font-medium transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
