import { Service } from "@/lib/types";
import React from "react";
import TextMarquee from "../ui/text-marque";
import CustomButton from "../shared/CustomButton";
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
function ServicesBanner({ service }: { service: Service }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121315]">
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
  );
}

export default ServicesBanner;
