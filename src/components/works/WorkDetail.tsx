"use client";

import { Work } from "@/lib/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import FAQ from "../shared/Faq";
import { generalFAQ } from "@/lib/data/dummy";
import { CTASection } from "../home/CTASection";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export default function WorkDetails({ work }: { work: Work }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null);
  const imageWrappers = useRef<(HTMLDivElement | null)[]>([]);
  const textElements = useRef<(HTMLDivElement | null)[]>([]);
  const sideBySideImageContainers = useRef<(HTMLDivElement | null)[]>([]);
  const videoContainer = useRef<HTMLDivElement>(null);
  const videoElement = useRef<HTMLVideoElement>(null);
  const videoSection = useRef<HTMLDivElement>(null);
  const videoPlayButton = useRef<HTMLDivElement>(null);

  // Add ref to array function
  const addToRefs = (
    ref: HTMLDivElement | null,
    refArray: React.MutableRefObject<(HTMLDivElement | null)[]>
  ) => {
    if (ref && !refArray.current.includes(ref)) {
      refArray.current.push(ref);
    }
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Parallax (Smoother)
      if (imageWrapper.current) {
        gsap.fromTo(
          imageWrapper.current,
          { y: "-10%" },
          {
            y: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapper.current.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true, // Smoother scrub
            },
          }
        );
      }

      // 2. Global Parallax for other images
      imageWrappers.current.forEach((wrapper) => {
        if (!wrapper) return;
        gsap.fromTo(
          wrapper,
          { y: "-15%" },
          {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: wrapper.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 3. Text Reveal Animations
      textElements.current.forEach((text) => {
        if (!text) return;
        gsap.fromTo(
          text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 4. Video Expansion
      if (videoContainer.current && videoSection.current && videoPlayButton.current) {
        // Initial state
        const initialWidth = 220; // Slightly larger initial
        const initialHeight = 220;
        
        // We'll use a tween for the width/height expansion instead of manual layout updates
        // This is often smoother and easier for ScrollTrigger to handle
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: videoSection.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          }
        });

        // Calculate target dimensions based on viewport
        const finalWidth = window.innerWidth * 0.95;
        const finalHeight = Math.min((finalWidth * 9) / 16, window.innerHeight * 0.8);

        // Animate from initial small circle/square to full width
        tl.fromTo(videoContainer.current, 
          { 
            width: initialWidth, 
            height: initialHeight, 
            borderRadius: 32 
          },
          {
            width: "95%", // Use percentage for responsiveness
            height: finalHeight, // Approximate aspect ratio height
            borderRadius: 32,
            ease: "power2.inOut"
          }
        );

        // Fade out play button
        tl.to(videoPlayButton.current, {
          opacity: 0,
          duration: 0.2,
          scale: 0.5
        }, 0.1); // Start early
      }

      // 5. Side-by-Side Parallax (Opposite directions)
      sideBySideImageContainers.current.forEach((container) => {
        if (!container) return;
        const children = Array.from(container.children) as HTMLElement[];
        
        children.forEach((child, i) => {
          const wrapper = child.querySelector("div[data-parallax-target]") || child;
          const yVal = i % 2 === 0 ? -50 : 50;
          
          gsap.fromTo(wrapper,
            { y: 0 },
            {
              y: yVal,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              }
            }
          );
        });
      });

    }, containerRef); // Scope to main container

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 bg-[#F5F5F7]">
        <div className="w-full max-w-6xl text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-gray-900">
            {work.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 text-sm sm:text-base md:text-xl font-medium uppercase tracking-wide text-gray-500">
            <span>{work.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span>{work.client}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span>{work.year}</span>
          </div>
        </div>
      </section>

      {/* Main Feature Image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-20 z-10 relative">
        <div
          className="max-w-[95%] mx-auto overflow-hidden rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] aspect-video relative shadow-2xl"
        >
          <div ref={imageWrapper} className="w-full h-[120%] -mt-[10%] relative">
             <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              className="object-cover"
              priority
              sizes="95vw"
            />
          </div>
        </div>

        <div
          ref={(el) => addToRefs(el, textElements)}
          className="max-w-4xl mx-auto my-32 sm:my-40 lg:my-56 space-y-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Redefining the digital landscape with precision and style.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed font-light">
            We focused on creating an immersive experience that bridges the gap between functionality and aesthetics using cutting-edge web technologies.
          </p>
        </div>
      </section>

      {/* Two Grid Section */}
      <section className="max-w-[90%] mx-auto my-32 sm:my-48 lg:my-64">
        <div
          ref={(el) => addToRefs(el, sideBySideImageContainers)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left */}
          <div className="w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] aspect-[4/5] relative bg-gray-100">
            <div ref={(el) => addToRefs(el, imageWrappers)} className="w-full h-[120%] -mt-[10%] relative" data-parallax-target>
              <Image
                src={work.thumbnail}
                alt="Detail view 1"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] aspect-[4/5] relative bg-gray-100 lg:mt-32">
            <div ref={(el) => addToRefs(el, imageWrappers)} className="w-full h-[120%] -mt-[10%] relative" data-parallax-target>
              <Image
                src={work.thumbnail}
                alt="Detail view 2"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24 lg:mt-32">
             <div className="hidden lg:block"/> {/* Spacer */}
             <div ref={(el) => addToRefs(el, textElements)} className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-medium">Concept & Strategy</h3>
                <p className="text-lg text-gray-600 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vel. 
                    Distinctio temporibus voluptas at, debitis, veritatis odio, 
                    nam nisi ipsum aliquid expedita ipsam necessitatibus!
                </p>
             </div>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="max-w-[90%] mx-auto my-32 sm:my-48 lg:my-64">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <div
            ref={(el) => addToRefs(el, textElements)}
            className="w-full lg:w-5/12 space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
             Seamless Interaction.
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed font-light">
              Every interaction was crafted with intention. From the micro-animations to the page transitions, no detail was too small to overlook in our pursuit of perfection.
            </p>
          </div>

          <div
            ref={(el) => addToRefs(el, sideBySideImageContainers)}
            className="w-full lg:w-7/12"
          >
             <div className="w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] aspect-[4/3] relative bg-gray-100">
                <div ref={(el) => addToRefs(el, imageWrappers)} className="w-full h-[120%] -mt-[10%] relative" data-parallax-target>
                  <Image
                    src={work.thumbnail}
                    alt="Interaction"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        ref={videoSection}
        className="py-32 sm:py-48 flex justify-center items-center bg-[#111] text-white my-32"
      >
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <div
            ref={videoContainer}
            className="overflow-hidden relative flex items-center justify-center cursor-pointer mx-auto bg-black border border-white/10"
            // Initial styles handled by GSAP
          >
            <video
              ref={videoElement}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              // autoPlay
              preload="auto"
            >
              <source src="https://trionn.com/assets/images/home/intro-video.mp4" type="video/mp4" />
              <source src="/videos/demo.webm" type="video/webm" />
            </video>

            {/* Play Button */}
            <div
              ref={videoPlayButton}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300">
                  <span className="sr-only">Play</span>
                   <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
             
             {/* Click handler overlay */}
             <div className="absolute inset-0 z-30" onClick={() => {
                 if (videoElement.current) {
                     videoElement.current.paused ? videoElement.current.play() : videoElement.current.pause();
                 }
             }}/>
          </div>

          <div
            ref={(el) => addToRefs(el, textElements)}
            className="mt-24 text-center max-w-2xl px-6"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">The Process</h2>
            <p className="text-lg text-gray-400 font-light">
              Behind the scenes of how we brought this vision to life through iteration and experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Parallax Grid */}
      <section className="max-w-[95%] mx-auto my-32 sm:my-48">
        <div
          ref={(el) => addToRefs(el, sideBySideImageContainers)}
          className="flex flex-col md:flex-row gap-8 lg:gap-16"
        >
          <div className="w-full md:w-1/2 mt-16 md:mt-0">
             <div className="overflow-hidden rounded-[2rem] aspect-[3/4] relative">
                 <div ref={(el) => addToRefs(el, imageWrappers)} className="w-full h-[120%] -mt-[10%] relative" data-parallax-target>
                    <Image
                        src={work.thumbnail}
                        alt="Gallery 1"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                 </div>
             </div>
          </div>
           <div className="w-full md:w-1/2 md:translate-y-32">
             <div className="overflow-hidden rounded-[2rem] aspect-[3/4] relative">
                 <div ref={(el) => addToRefs(el, imageWrappers)} className="w-full h-[120%] -mt-[10%] relative" data-parallax-target>
                    <Image
                        src={work.thumbnail}
                        alt="Gallery 2"
                        fill
                        className="object-cover"
                         sizes="(max-width: 768px) 100vw, 50vw"
                    />
                 </div>
             </div>
          </div>
        </div>
      </section>

      <section className="my-32 sm:my-48 max-w-5xl mx-auto px-6">
        <FAQ items={generalFAQ} />
      </section>

      <section className="my-32 sm:my-48 bg-black text-white py-20 rounded-[3rem] mx-4">
        <CTASection />
      </section>
    </div>
  );
}
