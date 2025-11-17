"use client";

import React, { useRef, useEffect } from "react";
import {
  Users,
  Lightbulb,
  Rocket,
  Code,
  RefreshCw,
  Trophy,
  Target,
} from "lucide-react";
import gsap from "gsap";

export default function WhatDefinesUs() {
  const values = [
    {
      icon: Users,
      title: "Client-focused solutions.",
      description:
        "We listen to your needs and build custom software solutions tailored specifically to your business goals.",
      hoverColor: "#3b82f6",
    },
    {
      icon: Lightbulb,
      title: "Innovation-driven approach.",
      description:
        "Our team leverages cutting-edge technologies to create innovative solutions that give you a competitive edge.",
      hoverColor: "#8b5cf6",
    },
    {
      icon: Rocket,
      title: "Fast, agile delivery.",
      description:
        "We move quickly without compromising quality, delivering solutions that help you launch faster and scale better.",
      hoverColor: "#4f46e5",
    },
    {
      icon: Code,
      title: "Technical excellence.",
      description:
        "Built by experienced developers who write clean, maintainable code that stands the test of time.",
      hoverColor: "#06b6d4",
    },
    {
      icon: RefreshCw,
      title: "Continuous support.",
      description:
        "We don't just deliver and disappear. We provide ongoing support and iterate based on your feedback.",
      hoverColor: "#14b8a6",
    },
    {
      icon: Trophy,
      title: "Measurable results.",
      description:
        "We focus on outcomes that matter—increased efficiency, better user experience, and real business growth.",
      hoverColor: "#10b981",
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

      const handleMouseEnter = () => {
        gsap.set(overlay, { backgroundColor: values[index].hoverColor });

        // Overlay animation slower and smoother
        gsap.fromTo(
          overlay,
          { clipPath: "circle(0% at 50% 0%)" },
          {
            clipPath: "circle(150% at 50% 0%)",
            duration: 2,
            ease: "power3.out",
          }
        );

        // Text color changes immediately and smoothly
        gsap.to([titleEl, descEl], {
          color: "#ffffff",
          // duration: 0.5,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.fromTo(
          overlay,
          { clipPath: "circle(150% at 50% 0%)" },
          {
            clipPath: "circle(0% at 50% 100%)",
            duration: 2,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(overlay, { backgroundColor: "transparent" });
              gsap.to([titleEl, descEl], {
                color: "",
                // duration: 0.5,
                ease: "power1.inOut",
              });
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 mb-6">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Why Choose Devlyfi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl">
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
                  style={{ clipPath: "circle(0% at 50% 0%)" }}
                />
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-6 h-6 text-gray-700 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        ref={(el) => (titleRefs.current[index] = el)}
                        className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300"
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
