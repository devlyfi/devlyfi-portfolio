"use client";

import { Button } from "@/components/ui/button";
import TextMarquee from "../ui/text-marque";

import { brands } from "@/lib/data/dummy";
import ShinyBadge from "../ui/shiny-badge";
import CustomButton from "../shared/CustomButton";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/40 via-black to-black" />

      {/* --------------------------------------------------------------- */}
      {/* 1. Center the whole hero column (including marquee)           */}
      {/* --------------------------------------------------------------- */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        {/* --------------------------------------------------------------- */}
        {/* 2. Main content block – flex-col + gap replaces mb-* margins   */}
        {/* --------------------------------------------------------------- */}
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
          {/* ---- Badge --------------------------------------------------- */}
          <div>
            <ShinyBadge text="Your Trusted Technology Partner"></ShinyBadge>
          </div>

          {/* ---- Headline ------------------------------------------------ */}
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-6xl italic font-serif">
            Innovation You Can Trust. Results You Can Measure.
          </h1>

          {/* ---- Buttons ------------------------------------------------- */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <CustomButton
              text="Book  a call"
              className="bg-transparent border-2 border-white"
              hoverTextColor="#000"
              textColor="#ffff"
            ></CustomButton>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[180px] rounded-full border-2 border-blue-500/50 bg-transparent px-8 py-6 text-base font-semibold uppercase tracking-wider text-white hover:border-blue-400 hover:bg-blue-500/10"
            >
              About
            </Button>
          </div>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* 3. Marquee – keep the same spacing you already had            */}
        {/* --------------------------------------------------------------- */}
        <div className=" mt-5 w-full max-w-6xl">
          <p className=" text-center text-sm uppercase tracking-widest text-gray-400">
            Trusted by top brands and 100,000+ creatives worldwide.
          </p>

          <TextMarquee marquee1={[...brands]} marquee2={[...brands]} />
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------- */
