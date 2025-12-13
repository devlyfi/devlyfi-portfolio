import { Service } from "@/lib/types";
import React from "react";

function ServicesGrid({ service }: { service: Service }) {
  return (
    <section className=" bg-secondary overflow-visible py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto md:max-w-3xl">
          <h2 className=" mb-6  leading-tight">
            Your Ideas, Our Expertise, Impactful Results
          </h2>
          <p className="text-md text-gray-700   leading-relaxed">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        {/* Bento Grid - 3x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[minmax(160px,auto)]">
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
                  <div className="relative z-10 h-full flex flex-col justify-center p-5 hover:bg-[#121315] hover:text-white transition duration-300">
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
  );
}

export default ServicesGrid;
