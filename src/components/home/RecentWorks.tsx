"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import CustomButton from "../shared/CustomButton";
import RecentWorkCards from "../ui/RecentWorkCards";
import ShinyBadge from "../ui/shiny-badge";

export default function RecentWorks() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Store original text content
      const originalRecentText = "Recent";
      const originalWorkText = "Works.";

      // Main animation for the entire section
      ScrollTrigger.create({
        trigger: ".recent-works",
        start: "top 60%",
        end: "bottom 30%",
        scrub: 1.2,
        invalidateOnRefresh: true,
        animation: gsap.from(".recent-works", {
          x: -100,
          opacity: 0,
          duration: 2,
          stagger: 0.1,
        }),
      });

      // Work text animation
      // ScrollTrigger.create({
      //   trigger: ".work",
      //   start: "top 70%",
      //   end: "bottom 40%",
      //   scrub: 1.2,
      //   // markers: true,
      //   invalidateOnRefresh: true,
      //   animation: gsap.from(".work", {
      //     x: -120,
      //     opacity: 0,
      //     duration: 2,
      //     stagger: 0.1,
      //   }),
      // });

      // Subtext animation
      ScrollTrigger.create({
        trigger: ".recent-work-subText",
        start: "top bottom",
        end: "bottom 30%",
        scrub: 1.2,
        invalidateOnRefresh: true,
        animation: gsap.from(".recent-work-subText", {
          y: 100,
          opacity: 0,
          duration: 2,
          stagger: 0.2,
        }),
      });

      // Color transition animation for "Recent"
      ScrollTrigger.create({
        trigger: ".recent-works",
        start: "top 80%",
        end: "bottom center",
        // markers: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const recentText = document.querySelector(".recent-text");

          if (recentText) {
            // Ensure we always work with the original text
            const chars = originalRecentText;
            let displayText = "";

            // When scroll is complete, show original text
            if (progress >= 0.99) {
              displayText = originalRecentText;
            } else {
              // During animation, apply the letter transitions
              displayText = chars
                .split("")
                .map((originalChar, index) => {
                  const charProgress = Math.max(
                    0,
                    (progress - index * 0.2) * 1.5
                  );

                  if (charProgress > 0.5) {
                    const colorProgress = (charProgress - 0.5) * 2;
                    if (colorProgress < 0.33)
                      return { char: "R", className: "char-r" };
                    else if (colorProgress < 0.66)
                      return { char: "S", className: "char-s" };
                    else return { char: "T", className: "char-t" };
                  }
                  return { char: originalChar, className: "" };
                })
                .map((item) =>
                  item.className
                    ? `<span class="${item.className}">${item.char}</span>`
                    : item.char
                )
                .join("");
            }

            recentText.innerHTML = displayText;
          }
        },
        onLeave: () => {
          // Ensure final text is correct when scroll ends
          const recentText = document.querySelector(".recent-text");
          if (recentText) {
            recentText.innerHTML = originalRecentText;
          }
        },
        onEnterBack: () => {
          // Reset when scrolling back up
          const recentText = document.querySelector(".recent-text");
          if (recentText) {
            recentText.innerHTML = originalRecentText;
          }
        },
      });

      // Color transition animation for "Works"
      ScrollTrigger.create({
        trigger: ".work",
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const workText = document.querySelector(".work-text");

          if (workText) {
            // Ensure we always work with the original text
            const chars = originalWorkText;
            let displayText = "";

            // When scroll is complete, show original text
            if (progress >= 0.99) {
              displayText = originalWorkText;
            } else {
              // During animation, apply the letter transitions
              displayText = chars
                .split("")
                .map((originalChar, index) => {
                  const charProgress = Math.max(
                    0,
                    (progress - index * 0.2) * 1.5
                  );

                  if (charProgress > 0.5) {
                    const colorProgress = (charProgress - 0.5) * 2;
                    if (colorProgress < 0.2)
                      return { char: "W", className: "char-w" };
                    else if (colorProgress < 0.4)
                      return { char: "X", className: "char-x" };
                    else if (colorProgress < 0.6)
                      return { char: "Y", className: "char-y" };
                    else if (colorProgress < 0.8)
                      return { char: "Z", className: "char-z" };
                    else return { char: "K", className: "char-k" };
                  }
                  return { char: originalChar, className: "" };
                })
                .map((item) =>
                  item.className
                    ? `<span class="${item.className}">${item.char}</span>`
                    : item.char
                )
                .join("");
            }

            workText.innerHTML = displayText;
          }
        },
        onLeave: () => {
          // Ensure final text is correct when scroll ends
          const workText = document.querySelector(".work-text");
          if (workText) {
            workText.innerHTML = originalWorkText;
          }
        },
        onEnterBack: () => {
          // Reset when scrolling back up
          const workText = document.querySelector(".work-text");
          if (workText) {
            workText.innerHTML = originalWorkText;
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="recent-works-responsive-margin w-full md:w-4/5 mx-auto relative px-4 sm:px-6 lg:px-8 "
      style={{
        clear: "both",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end my-14 md:my-24 lg:my-32 relative gap-8 lg:gap-0">
        <div className="w-full lg:w-auto">
          {/* <div className="font-bold recent-works">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl uppercase  recent-text leading-none">
              Recent
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl uppercase font-custom work work-text leading-none">
              Works.
            </p>
          </div> */}
          <div className="mb-10">
            <ShinyBadge
              text="Recent Works"
              className="p-4! text-lg! uppercase"
            ></ShinyBadge>
          </div>
          <div className="mt-3 sm:mt-4 lg:mt-5  recent-work-subText">
            <h2 className="  max-w-3xl mx-auto text-4xl md:text-5xl  font-thin! ">
              Proven Success in Every Industry
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:justify-end lg:items-end lg:h-full">
          <CustomButton
            text="Explore Work"
            className="font-custom border-2 border-[#121315] p-3 sm:p-4 rounded-full uppercase text-sm sm:text-base lg:text-lg transition-colors duration-300 whitespace-nowrap lg:self-end"
            textColor="black"
            hoverColor="#121315"
          ></CustomButton>
        </div>
      </div>
      <RecentWorkCards />
    </div>
  );
}
