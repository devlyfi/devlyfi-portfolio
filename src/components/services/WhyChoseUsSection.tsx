// components/sections/WhyChooseUsSection.tsx
import { Check, ArrowRight } from "lucide-react";
import CustomButton from "../shared/CustomButton";
import Image from "next/image";
import ShinyBadge from "../ui/shiny-badge";

export default function WhyChooseUsSection() {
  const benefits = [
    "Skilled designers with proven expertise.",
    "Multiple custom design options to choose from.",
    "Responsive website design service for all devices.",
    "Fast turnaround time for your website’s launch.",
    "Personalized solutions that align with your business goals.",
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Image - Hidden on <lg, visible only on large screens */}
          <div className="hidden lg:flex lg:justify-end">
            <div className="relative max-w-lg">
              <Image
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/677d74e1cfd1183d8296f213_Mockups%20(3).avif"
                alt="Design Monks - Professional Website Design Mockups"
                width={4000}
                height={4000}
                className="rounded-2xl  object-cover w-full max-w-md lg:max-w-lg xl:max-w-xl hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right: Content - Full width on mobile & tablet */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="text-center lg:text-left">
              <ShinyBadge
                text="Why chose devlyfi"
                className="inline-block px-5 py-2 rounded-full border uppercase text-2xl! tracking-wider"
              >
                {/* Why Design Monks? */}
              </ShinyBadge>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-gray-900 leading-tight">
              We Don’t Just Design Websites; We Design Success
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed ">
              A well-designed website is non-negotiable for business success. At
              Design Monks, we offer professional website design services that
              make your brand unforgettable. Our team focuses on building
              personalized websites that drive meaningful engagement and growth.
            </p>

            {/* Benefits List */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group hover:translate-x-1 transition-all duration-300"
                >
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">
                    <span className="font-semibold font-normal text-gray-900">
                      {index + 1}.{" "}
                    </span>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <CustomButton
                text="Start Project"
                textColor="black"
                hoverColor="#171717"
                // icon={<ArrowRight className="ml-2 w-5 h-5" />}
                className=" text-white font-medium px-8 py-4 rounded-full border-2 border-[#171717] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
