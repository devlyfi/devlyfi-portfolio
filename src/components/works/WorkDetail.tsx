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
  typeof window !== "undefined" ? useLayoutEffect : () => { };

export default function WorkDetails({ work }: { work: Work }) {
  const imageContainer = useRef(null);
  const imageWrapper = useRef(null);
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
    // Main image parallax animation
    if (imageWrapper.current) {
      gsap.fromTo(
        imageWrapper.current,
        { y: "-10%" },
        {
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: imageContainer.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }

    // All image parallax animations
    imageWrappers.current.forEach((wrapper, index) => {
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
            scrub: 1,
          },
        }
      );
    });

    // Text animations
    textElements.current.forEach((text, index) => {
      if (!text) return;

      gsap.fromTo(
        text,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Improved Video expansion animation with smooth expand/shrink
    if (videoContainer.current && videoSection.current && videoElement.current && videoPlayButton.current) {
      const video = videoElement.current;
      const playButton = videoPlayButton.current;

      // Store initial dimensions
      // Store initial dimensions
      const initialWidth = 192;
      const initialHeight = 192;
      const fixedBorderRadius = 32; // rounded-4xl = 32px

      // Set initial styles
      gsap.set(videoContainer.current, {
        width: initialWidth,
        height: initialHeight,
        borderRadius: fixedBorderRadius
      });

      const st = ScrollTrigger.create({
        trigger: videoSection.current,
        start: 'top bottom',
        end: 'bottom 60%',
        // markers: true,
        scrub: 1.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const container = videoContainer.current;

          if (container) {
            const vw = window.innerWidth;

            let endWidth = vw * 0.95;
            let endHeight = (endWidth * 9) / 16;

            endHeight = Math.min(endHeight, window.innerHeight * 0.8);

            const currentWidth = initialWidth + (endWidth - initialWidth) * progress;
            const currentHeight = initialHeight + (endHeight - initialHeight) * progress;

            container.style.width = currentWidth + 'px';
            container.style.height = currentHeight + 'px';

            // ❗ ALWAYS keep rounded-4xl
            container.style.borderRadius = fixedBorderRadius + 'px';

            // Play button logic
            if (progress > 0.1) {
              playButton.style.display = 'none';
            } else {
              playButton.style.display = 'flex';
            }

            // Auto play/pause logic
            // Always play video
            if (video.paused) {
              video.play().catch(() => { });
            }
          }
        },
      });

      // Handle video click for manual play/pause


      // Cleanup
      return () => {
        st.kill();

      };
    }

    // Reverse scroll animations for side-by-side images
    sideBySideImageContainers.current.forEach((container, index) => {
      if (!container) return;

      const children = Array.from(container.children);

      // Apply reverse movement to image wrappers only
      children.forEach((child, childIndex) => {
        const imageWrapper = child.querySelector("div[ref]") || child;

        if (childIndex % 2 === 0) {
          // Even index (left side) - moves upward
          gsap.fromTo(
            imageWrapper,
            { y: 0 },
            {
              y: -50,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        } else {
          // Odd index (right side) - moves downward
          gsap.fromTo(
            imageWrapper,
            { y: 0 },
            {
              y: 50,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-[40vh] md:min-h-[60vh] bg-color flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center w-full max-w-4xl">
          <h2 className="lg:text-6xl">
            {work.title}
          </h2>

          <div className="flex flex-row flex-wrap justify-center sm:justify-between items-center gap-4 mt-6">
            <p className="text-sm sm:text-base md:text-lg">{work.category}</p>
            <p className="text-sm sm:text-base md:text-lg">{work.client}</p>
            <p className="text-sm sm:text-base md:text-lg">{work.year}</p>
          </div>
        </div>
      </section>

      {/* First Image Section */}
      <section className="max-w-7xl mx-auto my-20 sm:my-32 lg:my-48 px-4 sm:px-6 lg:px-8">
        <div
          ref={imageContainer}
          className="w-full overflow-hidden rounded-3xl sm:rounded-[40px] lg:rounded-[80px]"
        >
          <div ref={imageWrapper}>
            <Image
              className="w-full h-auto max-h-[90vh] object-cover"
              src={work.thumbnail}
              alt={work.title}
              width={7000}
              height={7000}
              priority
            />
          </div>
        </div>

        <div
          ref={(el) => addToRefs(el, textElements)}
          className="my-16 sm:my-20 lg:my-24 space-y-6 lg:space-y-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>

      {/* Two Images Section */}
      <section className="max-w-7xl mx-auto my-20 sm:my-32 lg:my-48 px-4 sm:px-6 lg:px-8">
        <div
          ref={(el) => addToRefs(el, sideBySideImageContainers)}
          className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6"
        >
          {/* Left Image with Frame */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl sm:rounded-[40px] lg:rounded-[80px]">
            <div ref={(el) => addToRefs(el, imageWrappers)} className="h-full">
              <Image
                className="w-full h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
                src={work.thumbnail}
                alt={work.title}
                width={4000}
                height={4000}
              />
            </div>
          </div>

          {/* Right Image with Frame */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl sm:rounded-[40px] lg:rounded-[80px]">
            <div ref={(el) => addToRefs(el, imageWrappers)} className="h-full">
              <Image
                className="w-full h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
                src={work.thumbnail}
                alt={work.title}
                width={4000}
                height={4000}
              />
            </div>
          </div>
        </div>
        <div
          ref={(el) => addToRefs(el, textElements)}
          className="my-16 sm:my-20 lg:my-24 space-y-6 lg:space-y-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            illum?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            expedita deleniti neque iste at iusto sit odit corporis placeat
            eveniet repudiandae quis veniam ut commodi, nihil perspiciatis eum
            earum consectetur.
          </p>
        </div>
      </section>

      {/* Image + Text Side by Side Section */}
      <section className="max-w-7xl mx-auto my-20 sm:my-32 lg:my-48 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10 lg:gap-16">
          {/* Image with Frame */}
          <div
            ref={(el) => addToRefs(el, sideBySideImageContainers)}
            className="w-full lg:w-1/2 overflow-hidden rounded-3xl sm:rounded-[40px] lg:rounded-[80px]"
          >
            <div ref={(el) => addToRefs(el, imageWrappers)} className="h-full">
              <Image
                className="w-full h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
                src={work.thumbnail}
                alt={work.title}
                width={4000}
                height={4000}
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            ref={(el) => addToRefs(el, textElements)}
            className="w-full lg:w-1/2 space-y-6 lg:space-y-8"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              illum?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              expedita deleniti neque iste at iusto sit odit corporis placeat
              eveniet repudiandae quis veniam ut commodi, nihil perspiciatis eum
              earum consectetur.
            </p>
          </div>
        </div>
      </section>

      {/* Improved Video Section with Smooth Expand/Shrink */}
      <section
        ref={videoSection}
        className=" my-20 sm:my-32 lg:my-48 "
      >
        <div className="flex justify-center items-center">
          <div
            ref={videoContainer}
            className="overflow-hidden relative bg-black flex items-center justify-center cursor-pointer rounded-4xl"
           
          >
            <video
              ref={videoElement}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="https://trionn.com/assets/images/home/intro-video.mp4" type="video/mp4" />
              <source src="/videos/demo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Play button overlay */}
            <div
              ref={videoPlayButton}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20"
            >
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                <svg
                  className="w-6 h-6 text-black ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={(el) => addToRefs(el, textElements)}
          className="my-16 sm:my-20 lg:my-24 space-y-6 lg:space-y-8 text-center"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            Watch our process in action
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            expedita deleniti neque iste at iusto sit odit corporis placeat
            eveniet repudiandae.
          </p>
        </div>
      </section>

      {/* Staggered Images Section */}
      <section className="max-w-7xl mx-auto my-20 sm:my-32 lg:my-48 px-4 sm:px-6 lg:px-8">
        <div
          ref={(el) => addToRefs(el, sideBySideImageContainers)}
          className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6"
        >
          {/* Left Image with Frame */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl sm:rounded-[40px] lg:rounded-[80px]">
            <div ref={(el) => addToRefs(el, imageWrappers)} className="h-full">
              <Image
                className="w-full h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
                src={work.thumbnail}
                alt={work.title}
                width={4000}
                height={4000}
              />
            </div>
          </div>

          {/* Right Image with Frame and Offset */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl sm:rounded-[40px] lg:rounded-[80px]">
            <div ref={(el) => addToRefs(el, imageWrappers)} className="h-full">
              <Image
                className="w-full h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
                src={work.thumbnail}
                alt={work.title}
                width={4000}
                height={4000}
              />
            </div>
          </div>
        </div>
        <div
          ref={(el) => addToRefs(el, textElements)}
          className="my-16 sm:my-20 lg:my-24 space-y-6 lg:space-y-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            illum?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            expedita deleniti neque iste at iusto sit odit corporis placeat
            eveniet repudiandae quis veniam ut commodi, nihil perspiciatis eum
            earum consectetur.
          </p>
        </div>
      </section>

      <section className="my-20 sm:my-32 lg:my-48">
        <FAQ items={generalFAQ}></FAQ>
      </section>

      <section className="my-20 sm:my-32 lg:my-48">
        <CTASection></CTASection>
      </section>
    </div>
  );
}