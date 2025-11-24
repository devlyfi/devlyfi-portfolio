"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CircularText from "../animations/CircularText";
import { workingProcess } from "@/lib/data/dummy";
import ShinyBadge from "../ui/shiny-badge";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Animate title + all text sections
      const textBlocks = gsap.utils.toArray<HTMLElement>(".scroll-text");
      textBlocks.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              // markers: true,
              // toggleActions: 'play none none reverse',
              // once: false,
            },
          }
        );
      });

      // ✅ Animate process cards sequentially
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      cards.forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 40%",
            // markers: true,
            toggleActions: "play none none reverse",
            once: false,
          },
        });

        // Card container animation
        tl.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          }
        );

        // Title animation with SplitText (line by line)
        const title = card.querySelector(".card-title");
        if (title) {
          const splitTitle = new SplitText(title, {
            type: "lines",
            linesClass: "lineChild",
          });

          tl.fromTo(
            splitTitle.lines,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.4"
          );
        }

        // Subtitle animation with SplitText (line by line)
        const subtitle = card.querySelector(".card-subtitle");
        if (subtitle) {
          const splitSubtitle = new SplitText(subtitle, {
            type: "lines",
            linesClass: "lineChild",
          });

          tl.fromTo(
            splitSubtitle.lines,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }

        // Problem text animation with SplitText (line by line)
        const problem = card.querySelector(".card-problem");
        if (problem) {
          const splitProblem = new SplitText(problem, {
            type: "lines",
            linesClass: "lineChild",
          });

          tl.fromTo(
            splitProblem.lines,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }

        // Approach text animation with SplitText (line by line)
        const approach = card.querySelector(".card-approach");
        if (approach) {
          const splitApproach = new SplitText(approach, {
            type: "lines",
            linesClass: "lineChild",
          });

          tl.fromTo(
            splitApproach.lines,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }

        // Circular text animation
        const circular = card.querySelector(".circular-text");
        if (circular) {
          tl.fromTo(
            circular,
            { scale: 0, opacity: 0, rotate: -45 },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.7,
              ease: "back.out(1.7)",
            },
            "-=0.5"
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen my-14 md:my-24 lg:my-32 md:max-w-7xl mx-auto px-4 md:px-0 overflow-hidden "
    >
      {/* Title */}
      <div className="">
        <div className="text-center lg:text-left my-14 md:my-20 ">
          <ShinyBadge
            text="Our Process"
            className="inline-block px-5 py-2 rounded-full border uppercase text-2xl! tracking-wider"
          >
            {/* Why Design Monks? */}
          </ShinyBadge>
        </div>
      </div>

      {/* Intro Texts */}
      <div>
        <div className="scroll-text flex items-start md:w-[70%] mb-10">
          <h2 className=" text-white  font-thin!  mb-6   leading-tight  font-custom">
            We&apos;re here to make tech businesses roar in the digital jungle,
            crafting
          </h2>
        </div>

        <div className="scroll-text flex items-end mt-10 md:w-[60%] justify-end ml-auto">
          <p className=" text-base md:text-lg lg:text-xl   text-gray-400">
            We follow a structured process to ensure we deliver the best results
            possible. We follow a structured process to ensure we deliver the
            best results possible. We follow a structured process to ensure we
            deliver the best results possible.
          </p>
        </div>
      </div>

      {/* Process Cards */}
      <div className="my-20 md:my-40">
        {workingProcess?.map((item, index) => (
          <div
            key={index}
            className="process-card relative flex flex-col md:flex-row justify-between rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden min-h-[60vh] mb-12 bg-[#17181B] border-x-2 border-gray-600"
          >
            {/* Left section */}
            <div className="card-title w-full md:w-1/3 flex flex-col justify-start  mr-5">
              <h2 className=" text-white font-light leading-tight">
                {item.title}
              </h2>

              <p className="card-subtitle mt-3 text-base sm:text-lg text-gray-300 font-custom leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            {/* Right section */}
            <div className="w-full md:w-2/3 flex flex-col justify-center mt-8 md:mt-0 text-left font-custom">
              <div className="space-y-8 md:space-y-12">
                <p className="card-problem text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed">
                  {item.problem}
                </p>

                <p className="card-approach text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                  {item.approach}
                </p>
              </div>
            </div>

            {/* Circular Text */}
            <div className="circular-text absolute -bottom-16 right-6 w-[90px] sm:w-[110px] md:w-[130px] hidden md:block opacity-50">
              <CircularText
                className="font-semibold text-white"
                text={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//white
//   <div className="my-20 md:my-40">
//     {workingProcess?.map((item, index) => (
//       <div
//         key={index}
//         className="process-card relative flex flex-col md:flex-row justify-between  rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden min-h-[60vh] mb-10 border "
//       >
//         {/* Left section */}
//         <div className="card-title w-full md:w-1/3 flex flex-col justify-start">
//           <h2 className="text-4xl! md:text-5xl!   font-thin!  mb-6   leading-tight">
//             {item.title}
//           </h2>
//           <p className="card-subtitle mt-4 text-base sm:text-lg text-gray-800 font-custom">
//             {item.subtitle}
//           </p>
//         </div>

//         {/* Right section */}
//         <div className="w-full flex flex-col justify-center mt-6 md:mt-0 text-end font-custom">
//           <div className="space-y-6 md:space-y-20">
//             <p className="card-problem text-base sm:text-lg md:text-2xl font-medium ">
//               {item.problem}
//             </p>
//             <p className="card-approach text-base sm:text-lg md:text-xl text-gray-800">
//               {item.approach}
//             </p>
//           </div>
//         </div>

//         {/* Circular Text */}
//         <div className="circular-text absolute -bottom-20 right-5 w-[80px] sm:w-[100px] md:w-[120px] hidden md:block">
//           <CircularText className="font-semibold! " text={item.title} />
//         </div>
//       </div>
//     ))}
//   </div>
