// lib/gsap-config.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Optional: Global GSAP settings
gsap.config({
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger };
