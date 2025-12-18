"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CircularText from "../animations/CircularText";
import { workingProcess } from "@/lib/data/dummy";
import ShinyBadge from "../ui/shiny-badge";
import { Skiper16 } from "../shared/Stack";
import { ServiceDetailsSkipper } from "../shared/ServiceDetailsSkipper";
import { Service } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function OurProcess({service}: {service: Service}) {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div
      ref={containerRef}
      className="min-h-screen my-14 md:my-24 lg:my-32 md:max-w-7xl mx-auto px-4 md:px-0 py-20"
    >

      <div>
        <ServiceDetailsSkipper content={service}></ServiceDetailsSkipper>
      </div>
    </div>
  );
}

//white

