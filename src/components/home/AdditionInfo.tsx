'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/lib/data/dummy';

gsap.registerPlugin(ScrollTrigger);

const additionalServices = services.slice(0, services.length-1);

function AdditionInfo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const featuresContainerRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);

  const addToCardsRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Feature cards animation (desktop only)
    if (featuresContainerRef.current && cardsRef.current.length > 0) {
      const cards = cardsRef.current;

      ScrollTrigger.create({
        trigger: featuresContainerRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)"
          });
        },
        onLeaveBack: () => {
          gsap.to(cards, {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in"
          });
        }
      });
    }

    // Hero section animations (desktop only)
    if (containerRef.current && window.innerWidth >= 768) {
      // Text animations
      if (leftTextRef.current && rightTextRef.current) {
        gsap.to(leftTextRef.current, {
          x: -150,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1.5,
          }
        });

        gsap.to(rightTextRef.current, {
          x: 150,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1.5,
          }
        });
      }

      // Image scale animation (desktop only)
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          {
            scale: 0.9,
            opacity: 0.8
          },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1.5,
            }
          }
        );
      }

      // Hero text animation (desktop only)
      if (heroTextRef.current) {
        gsap.fromTo(heroTextRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            }
          }
        );
      }
    }

    // Mobile image scale animation
    if (mobileImageRef.current && window.innerWidth < 768) {
      gsap.fromTo(mobileImageRef.current,
        {
          scale: 0.9,
          opacity: 0.8
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mobileImageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='min-h-screen container mx-auto'>
      <div className='flex justify-center items-center my-20 md:my-40'>
        <h2 className='text-black text-xl md:text-2xl lg:text-3xl'>....and more additional <span className='font-serif italic text-primary'>Services</span></h2>
      </div>

      <div
        ref={featuresContainerRef}
        className="flex flex-wrap justify-center gap-6 md:gap-8 px-4 md:px-0"
      >
        {additionalServices.map((item, index) => (
          <div
            key={index}
            ref={addToCardsRefs}
            className="flex flex-col sm:flex-row items-center bg-gray-50 p-4 rounded-2xl w-full sm:w-[45%] md:w-[40%] opacity-100 md:opacity-0 md:translate-y-[50px] md:scale-90"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 flex justify-center items-center bg-white rounded-lg md:rounded">
              <Image 
              src={item.cover}
              alt={item.title}
              width={1000}
              height={1000}
              className='rounded-xl md:rounded-2xl w-full h-full object-cover'
              ></Image>
            </div>
            <div className="px-4 mt-4 sm:mt-0">
              <h2 className="text-black text-lg md:text-xl lg:text-2xl">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="relative my-20 md:my-40">
        {/* Desktop version with background text */}
        <div className="hidden md:block md:w-3/4 mx-auto">
          <div ref={containerRef} className="relative min-h-[700px]">
            {/* Background texts - Hidden on mobile */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div ref={leftTextRef} className="absolute top-1/4 left-0 w-1/2 px-8">
                <h2 className="text-8xl lg:text-9xl font-bold text-secondary whitespace-nowrap">
                  MAKE
                </h2>
              </div>

              <div ref={rightTextRef} className="absolute top-1/3 right-0 w-1/2 px-8 text-right">
                <h2 className="text-8xl lg:text-9xl font-bold text-secondary whitespace-nowrap">
                  CHANGE
                </h2>
              </div>
            </div>

            {/* Image Container with scale animation */}
            <div className="relative flex justify-center items-center z-10">
              <div className="w-full max-w-lg mx-auto">
                <div ref={imageRef} className="relative w-full h-auto aspect-842/1817">
                  <Image
                    src="https://framerusercontent.com/images/yJLaUZwB3qYDuKfwXuJj6zQvge0.png?width=842&height=1817"
                    alt="Hero Image"
                    className="object-contain"
                    fill
                    sizes="(max-width: 1200px) 70vw, 60vw"
                    priority
                  />
                  <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent z-20"></div>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div ref={heroTextRef} className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
              <div className="text-center px-4 max-w-xl mx-auto">
                <h1 className="text-3xl lg:text-4xl font-bold text-black">
                  Your Hero Text Here
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only simplified image section WITH SCALE ANIMATION */}
        <div className="md:hidden px-4">
          <div className="relative w-full max-w-sm mx-auto">
            <div ref={mobileImageRef} className="relative w-full h-auto aspect-842/1817">
              <Image
                src="https://framerusercontent.com/images/yJLaUZwB3qYDuKfwXuJj6zQvge0.png?width=842&height=1817"
                alt="Hero Image"
                className="object-contain"
                fill
                sizes="90vw"
                priority
              />
            </div>
            {/* Simple text below image on mobile */}
            <div className="text-center mt-8">
              <h1 className="text-2xl font-bold text-black">
                Your Hero Text Here
              </h1>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AdditionInfo