'use client'
import React, { useRef, useEffect } from 'react'
import ShinyBadge from '../ui/shiny-badge';
import TextAnimate from '../ui/TextAnimate';
import Image from 'next/image';
import { ChessQueenIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MissionVisionSection({ mission, vision }: { mission: string; vision: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create animations
    const ctx = gsap.context(() => {
      // Fade in entire section
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Mission section animation
      if (missionRef.current) {
        gsap.fromTo(missionRef.current.querySelector('.mission-text'),
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );

        // Mission images animation
        gsap.fromTo(missionRef.current.querySelectorAll('.mission-image'),
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Vision section animation
      if (visionRef.current) {
        gsap.fromTo(visionRef.current.querySelector('.vision-text'),
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );

        // Vision images animation
        gsap.fromTo(visionRef.current.querySelectorAll('.vision-image'),
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Image hover animations
      imagesRef.current.forEach((imgContainer, index) => {
        if (!imgContainer) return;
        
        const img = imgContainer.querySelector('img');
        if (!img) return;

        // Hover animation
        imgContainer.addEventListener('mouseenter', () => {
          gsap.to(img, {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        imgContainer.addEventListener('mouseleave', () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });

      // Subtle floating animation for images
      // gsap.to(".floating-image", {
      //   y: -10,
      //   duration: 3,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "sine.inOut"
      // });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto py-20 md:py-32 space-y-32 px-4">
      
      {/* Header */}
      <div>
        <div className="mb-10 flex justify-center">
          <ShinyBadge
            text="Mission & Vision"
            className="p-4! text-lg! uppercase text-primary!"
            iconClassName="w-6! h-6! text-primary! "
            icon={<ChessQueenIcon />}
          />
        </div>
        <TextAnimate
          text="Custom software solutions built around your unique business needs."
          className="text-primary text-center md:text-6xl! max-w-3xl mx-auto"
        />
      </div>

      <div className='bg-primary/5 rounded-4xl'>
        {/* Mission Section */}
        <div 
          ref={missionRef} 
          className="flex justify-between items-center p-6 rounded-4xl gap-12 md:gap-20"
        >
          
          {/* Text */}
          <div className="w-full space-y-4 mission-text">
            <h2 className="">Mission</h2>
            <p className="text-base md:text-md text-gray-700 leading-relaxed">{mission}</p>
          </div>

          {/* Images */}
          <div className="w-full grid grid-cols-2 gap-4">
            <div 
              ref={el => { imagesRef.current[0] = el; }}
              className="flex justify-end mission-image floating-image"
            >
              <Image
                src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
                alt="Mission Image"
                width={2000}
                height={2000}
                className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full transition-transform duration-500"
              />
            </div>

            <div 
              ref={el => { imagesRef.current[1] = el}}
              className="flex justify-start mt-6 sm:mt-8 md:mt-12 mission-image floating-image"
            >
              <Image
                src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
                alt="Mission Image"
                width={2000}
                height={2000}
                className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div 
          ref={visionRef}
          className="flex flex-row-reverse justify-between items-center p-6 rounded-4xl gap-12 md:gap-20"
        >
          
          {/* Text */}
          <div className="w-full space-y-4 vision-text">
            <h2 className="">Vision</h2>
            <p className="text-base md:text-md text-gray-700 leading-relaxed">{vision}</p>
          </div>

          {/* Images */}
          <div className="w-full grid grid-cols-2 gap-4">
            <div 
              ref={el => {imagesRef.current[2] = el}}
              className="flex justify-end mt-6 sm:mt-8 md:mt-12 vision-image floating-image"
            >
              <Image
                src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
                alt="Vision Image"
                width={2000}
                height={2000}
                className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full transition-transform duration-500"
              />
            </div>

            <div 
              ref={el => {imagesRef.current[3] = el}}
              className="flex justify-start vision-image floating-image"
            >
              <Image
                src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
                alt="Vision Image"
                width={2000}
                height={2000}
                className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVisionSection