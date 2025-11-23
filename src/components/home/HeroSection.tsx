"use client";

import TextMarquee from "../ui/text-marque";
import { brands } from "@/lib/data/dummy";
import ShinyBadge from "../ui/shiny-badge";
import CustomButton from "../shared/CustomButton";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* -------- Spline Background -------- */}
      <div className="spline-container  bg-[#121315] absolute top-0 left-0 w-full h-full -z-20">
        <iframe
          // src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/"
          src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs"
          frameBorder="0"
          width="100%"
          className="scale-142"
          height="100%"
          id="aura-spline"
        ></iframe>
      </div>

      {/* -------- Optional Gradient Overlay -------- */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/40 via-black/60 to-black/90 -z-10" />

      {/* -------- CONTENT -------- */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
          <div>
            <ShinyBadge text="Your Trusted Technology Partner" />
          </div>

          <h1 className="text-5xl font-thin leading-tight text-white md:text-6xl lg:text-6xl uppercase">
            Innovation You Can Trust. Results You Can Measure.
          </h1>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <CustomButton
              text="Book a call"
              className="bg-transparent border-2 border-white"
              hoverColor="white"
              hoverTextColor="#000"
              textColor="#fff"
            />
          </div>
        </div>

        {/* Increased gap between main content and trusted brands */}
        <div className="mt-16 lg:mt-20 w-full max-w-6xl ">
          <p className="text-center text-sm uppercase tracking-widest text-white  ">
            Trusted by top brands and 100,000+ creatives worldwide.
          </p>

          <TextMarquee marquee1={[...brands]} marquee2={[...brands]} />
        </div>
      </div>
    </div>
  );
}
