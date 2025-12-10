import { Service } from "@/lib/types";
import React from "react";
import TextMarquee from "../ui/text-marque";
import CustomButton from "../shared/CustomButton";
import AnimatedButton from "../ui/AnimatedButton";
import CommonHero from "../shared/CommonHero";
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
   
     <section>
      <CommonHero className="md:min-h-[70vh]!" tools={tools} title={service.title} subtitle={service.description}></CommonHero>
     </section>
  );
}

export default ServicesBanner;
