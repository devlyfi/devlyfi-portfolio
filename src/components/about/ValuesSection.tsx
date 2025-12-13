'use client'
import React, { useEffect, useRef } from "react";
import { BoltIcon } from "lucide-react";
import ShinyBadge from "../ui/shiny-badge";
import gsap from "gsap";
import AnimatedButton from "../ui/AnimatedButton";

const values = [
  { letter: "D", title: "Design-First", desc: "We prioritize intuitive, beautiful design in every product — from UI/UX to branding." },
  { letter: "E", title: "Excellence", desc: "High-quality code, robust systems, and reliable delivery at every stage." },
  { letter: "V", title: "Value-Driven", desc: "We build solutions that create measurable impact for your business." },
  { letter: "L", title: "Lean & Agile", desc: "Efficient, flexible development cycles to adapt quickly to changing needs." },
  { letter: "Y", title: "Your Partner", desc: "We treat clients as collaborators — supportive, transparent, and long-term." },
  { letter: "F", title: "Forward-Thinking", desc: "We leverage modern tech (AI, cloud, devops) to keep you ahead of the curve." },
  { letter: "I", title: "Impactful", desc: "Our work translates into real results — growth, performance, and business success." },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lettersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".badge", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });

      gsap.fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.3 });

      gsap.fromTo(".highlight-box", { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: "power4.out", delay: 0.9 });

      gsap.fromTo(lettersRef.current, { y: 120, opacity: 0, rotateX: -80 }, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.8)",
        delay: 1.3,
      });

      gsap.fromTo(".value-card", { opacity: 0, y: 60 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 1.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen   overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/placeholder-pattern.avif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Badge */}
        <div className="flex justify-center items-center mb-16 md:mb-20">
          <ShinyBadge
            text="Our Values"
            className="badge p-4!  text-lg! uppercase tracking-widest text-primary!"
            icon={<BoltIcon className="w-5 h-5" />}
            iconClassName="text-primary"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Hero Text */}
          <div className="space-y-10">
            <h2 ref={titleRef} className="">
              Scaling businesses
              <br />
              with values that actually
              <span className="relative inline-block ml-4 font-light text-white" >
                <span className="relative z-10">mean something</span>
                <div className="highlight-box absolute inset-0 bg-primary rotate-2 scale-110 -z-10 rounded-lg" />
              </span>
            </h2>

            <div className="space-y-6 text-gray-700 text-lg md:text-xl max-w-2xl leading-relaxed">
              <p>
                From the way we support clients to how we build strategies,
                our values guide us at every step.
              </p>
              <p>
                Together, they form{" "}
                <span className=" ">DEVLYFI</span>
                — because building the future of your business is what we live for.
              </p>
            </div>
          </div>

          {/* Right: DEVLYFI Vertical Stack */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-10 max-w-lg w-full">
              {values.map((value, index) => (
                <div
                  key={value.letter}
                  ref={(el) => { lettersRef.current[index] = el; }}
                  className="value-card flex gap-6 items-start group"
                >
                  {/* Big Neon Letter */}
                  <div className="shrink-0 w-20 h-30 bg-secondary text-primary flex items-center justify-center ">
                    <div className="text-6xl glow"> 
                      {value.letter}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 space-y-3 ">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-px bg-primary/40" />
                      <h4 className="text-sm uppercase tracking-widest text-primary font-medium">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}




// 'use client';

// import React, { useEffect, useRef, useState } from "react";
// import { BoltIcon } from "lucide-react";
// import ShinyBadge from "../ui/shiny-badge";
// import gsap from "gsap";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// const values = [
//   { letter: "D", title: "Design-First", desc: "We prioritize intuitive, beautiful design in every product — from UI/UX to branding." },
//   { letter: "E", title: "Excellence", desc: "High-quality code, robust systems, and reliable delivery at every stage." },
//   { letter: "V", title: "Value-Driven", desc: "We build solutions that create measurable impact for your business." },
//   { letter: "L", title: "Lean & Agile", desc: "Efficient, flexible development cycles to adapt quickly to changing needs." },
//   { letter: "Y", title: "Your Partner", desc: "We treat clients as collaborators — supportive, transparent, and long-term." },
//   { letter: "F", title: "Forward-Thinking", desc: "We leverage modern tech (AI, cloud, devops) to keep you ahead of the curve." },
//   { letter: "I", title: "Impactful", desc: "Our work translates into real results — growth, performance, and business success." },
// ];

// export default function ValuesSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const lettersRef = useRef<(HTMLDivElement | null)[]>([]);
//   const [isInView, setIsInView] = useState(false);

//   // Mobile: first card open by default | Desktop: start closed
//   const [activeIndex, setActiveIndex] = useState<number | null>(() => {
//     if (typeof window !== "undefined" && window.innerWidth < 768) {
//       return 0;
//     }
//     return null;
//   });

//   // Trigger animations only when section is in viewport
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // GSAP animations — only run when in view
//   useEffect(() => {
//     if (!isInView) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(".badge", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
//       gsap.fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.3 });
//       gsap.fromTo(".highlight-box", { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: "power4.out", delay: 0.9 });
//       gsap.fromTo(
//         lettersRef.current,
//         { y: 120, opacity: 0, rotateX: -80 },
//         {
//           y: 0,
//           opacity: 1,
//           rotateX: 0,
//           duration: 1,
//           stagger: 0.15,
//           ease: "back.out(1.8)",
//           delay: 1.3,
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [isInView]);

//   const handleCardClick = (index: number) => {
//     // On mobile: allow only one open at a time, toggle
//     if (window.innerWidth < 768) {
//       setActiveIndex(activeIndex === index ? null : index);
//     } else {
//       // Desktop: allow hover + click (click locks it)
//       setActiveIndex(activeIndex === index ? null : index);
//     }
//   };

//   return (
//     <section ref={sectionRef} className="relative min-h-screen bg-white py-24 md:py-32 overflow-hidden">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <img
//           src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/placeholder-pattern.avif"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         {/* Badge */}
//         <div className="flex justify-center items-center mb-16 md:mb-20">
//           <ShinyBadge
//             text="Our Values"
//             className="badge p-4! text-lg! uppercase tracking-widest text-primary!"
//             icon={<BoltIcon className="w-5 h-5" />}
//             iconClassName="text-primary"
//           />
//         </div>

//         {/* Hero Text */}
//         <div className="mb-20 lg:mb-24">
//           <div className="max-w-4xl mx-auto">
//             <h2 ref={titleRef} className="text-center text-4xl md:text-6xl font-bold leading-tight">
//               Scaling businesses
//               <br />
//               with values that actually
//               <span className="relative inline-block ml-4 font-light text-white">
//                 <span className="relative z-10">mean something</span>
//                 <div className="highlight-box absolute inset-0 bg-primary rotate-2 scale-110 -z-10 rounded-lg" />
//               </span>
//             </h2>
//             <div className="space-y-6 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto text-center mt-10 leading-relaxed">
//               <p>From the way we support clients to how we build strategies, our values guide us at every step.</p>
//               <p>
//                 Together, they form <span className="font-bold text-primary">DEVLYFI</span>
//                 — because building the future of your business is what we live for.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Interactive DEVLYFI Cards */}
//         <div className="flex justify-center">
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4">
//             {values.map((value, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <motion.div
//                   key={value.letter}
//                   ref={(el) => { if (el) lettersRef.current[index] = el; }}
//                   className="relative cursor-pointer select-none"
//                   onHoverStart={() => window.innerWidth >= 768 && setActiveIndex(index)}
//                   onHoverEnd={() => window.innerWidth >= 768 && !document.querySelector(':hover') && setActiveIndex(activeIndex === index ? activeIndex : null)}
//                   onClick={() => handleCardClick(index)}
//                   layout
//                   transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
//                 >
//                   <motion.div
//                     className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 to-primary/20 backdrop-blur-sm border border-primary/20 shadow-2xl"
//                     animate={{
//                       width: isActive ? "clamp(300px, 26vw, 380px)" : "clamp(90px, 7vw, 110px)",
//                       height: "460px",
//                     }}
//                     transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
//                   >
//                     {/* Giant Background Letter */}
//                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                       <span className="text-[14rem] md:text-[16rem] font-black text-primary/10 select-none">
//                         {value.letter}
//                       </span>
//                     </div>

//                     {/* Gradient Overlay */}
//                     <motion.div
//                       className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/40 to-transparent pointer-events-none"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: isActive ? 1 : 0 }}
//                       transition={{ duration: 0.4 }}
//                     />

//                     {/* Expanded Content */}
//                     <motion.div
//                       className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
//                       transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
//                     >
//                       <div className="space-y-5">
//                         <div className="flex items-center gap-4">
//                           <div className="w-16 h-1 bg-white/90 rounded-full" />
//                           <h3 className="text-2xl uppercase tracking-widest font-semibold">
//                             {value.title}
//                           </h3>
//                         </div>
//                         <p className="text-lg leading-relaxed max-w-xs">
//                           {value.desc}
//                         </p>
//                       </div>
//                     </motion.div>

                   

//                     {/* Vertical Title (collapsed) */}
//                     <motion.div
//                       className="absolute bottom-20 left-1/2 -translate-x-1/2"
//                       initial={{ opacity: 1 }}
//                       animate={{ opacity: isActive ? 0 : 1 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <p className="text-sm md:text-base uppercase tracking-widest text-primary font-bold whitespace-nowrap -rotate-90">
//                         {value.title}
//                       </p>
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile Hint */}
//         <div className="mt-16 text-center">
//           <p className="text-sm text-gray-500">
//             {activeIndex === null
//               ? "Tap a letter to reveal its meaning"
//               : "Tap again to close"}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }