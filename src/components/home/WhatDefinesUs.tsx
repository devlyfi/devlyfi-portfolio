"use client";

import React, { useRef, useEffect } from "react";
import {
  Users,
  Lightbulb,
  Rocket,
  Code,
  RefreshCw,
  Trophy,
} from "lucide-react";
import gsap from "gsap";
import ShinyBadge from "../ui/shiny-badge";

export default function WhatDefinesUs() {
  const values = [
    {
      icon: Users,
      title: "Client-focused solutions.",
      description:
        "We listen to your needs and build custom software solutions tailored specifically to your business goals.",
      hoverColor: "#000000", // Use full hex for consistency
    },
    {
      icon: Lightbulb,
      title: "Innovation-driven approach.",
      description:
        "Our team leverages cutting-edge technologies to create innovative solutions that give you a competitive edge.",
      hoverColor: "#000000",
    },
    {
      icon: Rocket,
      title: "Fast, agile delivery.",
      description:
        "We move quickly without compromising quality, delivering solutions that help you launch faster and scale better.",
      hoverColor: "#000000",
    },
    {
      icon: Code,
      title: "Technical excellence.",
      description:
        "Built by experienced developers who write clean, maintainable code that stands the test of time.",
      hoverColor: "#000000",
    },
    {
      icon: RefreshCw,
      title: "Continuous support.",
      description:
        "We don't just deliver and disappear. We provide ongoing support and iterate based on your feedback.",
      hoverColor: "#121315",
    },
    {
      icon: Trophy,
      title: "Measurable results.",
      description:
        "We focus on outcomes that matter—increased efficiency, better user experience, and real business growth.",
      hoverColor: "#121315",
    },
  ];

  const overlayRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    values.forEach((_, index) => {
      const overlay = overlayRefs.current[index];
      const titleEl = titleRefs.current[index];
      const descEl = descRefs.current[index];
      const card = overlay?.parentElement;

      if (!overlay || !titleEl || !descEl || !card) return;

      const iconEl = card.querySelector("svg");

      let enterAnim: gsap.core.Tween;
      let leaveAnim: gsap.core.Tween;

      const handleMouseEnter = () => {
        // Kill any running leave animation
        leaveAnim?.kill();

        // Set text and icon to white instantly
        gsap.set([titleEl, descEl, iconEl], { color: "#ffffff" });

        // Start enter animation
        enterAnim = gsap.fromTo(
          overlay,
          {
            clipPath: "circle(0% at 50% 0%)",
            backgroundColor: "#121315", // Ensure black background from start
          },
          {
            clipPath: "circle(150% at 50% 0%)",
            duration: 2,
            ease: "power3.out",
            backgroundColor: "#121315", // Explicitly set to black
          }
        );
      };

      const handleMouseLeave = () => {
        // Kill any running enter animation
        enterAnim?.kill();

        // Start leave animation immediately
        leaveAnim = gsap.fromTo(
          overlay,
          {
            clipPath: "circle(150% at 50% 0%)",
            backgroundColor: "#000000", // Ensure black background during animation
          },
          {
            clipPath: "circle(0% at 50% 100%)",
            duration: 1.0,
            ease: "power2.in",
            onStart: () => {
              // Keep text white during the animation
              gsap.set([titleEl, descEl, iconEl], { color: "#ffffff" });
            },
            onComplete: () => {
              // REMOVED: gsap.set(overlay, { backgroundColor: "transparent" });
              // Revert text colors only after animation completes
              gsap.set([titleEl, descEl, iconEl], { color: "" });
            },
          }
        );
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-10">
            <ShinyBadge
              text="Why Choose Devlyfi"
              className="p-4! text-lg! uppercase"
            ></ShinyBadge>
          </div>
          <h2 className="text-4xl md:text-5xl  font-thin! text-gray-900 max-w-3xl">
            Custom software solutions built around your unique business needs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative group p-6 rounded-2xl border border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Circular overlay */}
                <span
                  ref={(el) => (overlayRefs.current[index] = el)}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    clipPath: "circle(0% at 50% 0%)",
                    backgroundColor: "#000000", // Set initial black background
                  }}
                />
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Icon className="w-6 h-6  transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3
                        ref={(el) => (titleRefs.current[index] = el)}
                        className="text-xl font-thin text-gray-900 mb-2 transition-colors duration-300"
                      >
                        {value.title}
                      </h3>
                      <p
                        ref={(el) => (descRefs.current[index] = el)}
                        className="text-sm text-gray-600 leading-relaxed transition-colors duration-300"
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
