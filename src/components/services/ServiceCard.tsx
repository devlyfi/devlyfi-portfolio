'use client'

import AnimatedButton from '@/components/ui/AnimatedButton'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins (safe check)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ServiceFeature {
    title: string
    description: string
}

interface ServiceDetails {
    heading: string
    features: ServiceFeature[]
}

interface Service {
    title: string
    description: string
    imageUrl: string
    link: string
    details: ServiceDetails
}

interface ServiceCardProps {
    service: Service
    index?: number
}

function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    const cardRef = useRef<HTMLElement>(null)
    const leftColRef = useRef<HTMLDivElement>(null)
    const rightColRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement[]>([])

    // Add feature ref to array
    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !featuresRef.current.includes(el)) {
            featuresRef.current.push(el)
        }
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Left Column Entrance (Title, Desc, Button)
            // Staggered reveal
            if (leftColRef.current) {
                const children = Array.from(leftColRef.current.children);
                gsap.fromTo(children, 
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // 2. Right Column Entrance (Whole Container)
            if (rightColRef.current) {
                 gsap.fromTo(rightColRef.current,
                    { opacity: 0, x: 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                             trigger: cardRef.current,
                             start: "top 80%",
                             toggleActions: "play none none reverse"
                        }
                    }
                 );
            }

            // 3. Image Parallax Effect
            // We animate the image INSIDE the wrapper
            const image = rightColRef.current?.querySelector('img');
            if (image) {
                gsap.fromTo(image,
                    { scale: 1.2, yPercent: -10 },
                    {
                        yPercent: 10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top bottom", // Start when card hits bottom of screen
                            end: "bottom top", // End when card leaves top of screen
                            scrub: true
                        }
                    }
                );
            }

            // 4. Features Staggered Entrance
            if (featuresRef.current.length > 0) {
                 featuresRef.current.forEach((feature) => {
                     gsap.fromTo(feature,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: feature,
                                start: "top 85%", 
                                toggleActions: "play none none reverse"
                            }
                        }
                     )
                 })
            }

        }, cardRef)

        return () => ctx.revert()
    }, [index])

    return (
        <section 
            ref={cardRef}
            className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 mb-16 lg:mb-24 md:max-w-7xl mx-auto p-8 md:p-12 lg:p-16 items-start rounded-[2.5rem] bg-[#F9FAFB] rounded-[2.5rem]'
        >
            {/* Left Column - Sticky Content */}
            <div className='w-full md:w-1/2 sticky top-32 z-10 self-start '>
                <div ref={leftColRef} className='space-y-6 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium'>{service.title}</h2>
                    <p className='text-lg text-gray-600 leading-relaxed font-light'>{service.description}</p>
                    <div className='pt-2'>
                        <Link href={service.link}>
                            <AnimatedButton
                                text="View Details"
                                className="bg-transparent font-medium rounded-full"
                                textClass='text-black! font-light! text-xl!'
                                onClick={() => {}}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Column - Scrollable Content */}
            <div ref={rightColRef} className='w-full md:w-1/2 flex flex-col gap-16 md:gap-24 bg-[#F9FAFB] rounded-[2.5rem] z-50'>
                {/* Image */}
                <div className='image-wrapper relative overflow-hidden rounded-[2rem] shadow-lg'>
                    <Image
                        src={service.imageUrl}
                        alt={service.title}
                        width={2000}
                        height={2000}
                        className='w-full h-auto object-cover hover:scale-105 transition-transform duration-700'
                    />
                </div>

                {/* Details Section */}
                {service.details && (
                    <div className='space-y-12 md:pl-8'>
                        <h3 className='text-3xl md:text-4xl font-light leading-tight'>
                            {service.details.heading}
                        </h3>
                        
                        <div className='space-y-12 border-t border-gray-200 pt-12'>
                            {service.details.features.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    ref={addToRefs}
                                    className='grid grid-cols-1 sm:grid-cols-2 gap-4'
                                >
                                    <h4 className='text-xl font-medium'>{item.title}</h4>
                                    <p className='text-lg text-gray-500 font-light leading-relaxed'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ServiceCard