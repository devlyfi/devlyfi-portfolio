'use client'

import AnimatedButton from '@/components/ui/AnimatedButton'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
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
    const imageRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const detailsRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement[]>([])

    // Add feature ref to array
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !featuresRef.current.includes(el)) {
            featuresRef.current.push(el)
        }
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered fade-in for main content
            gsap.fromTo(
                textRef.current?.children || [],
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Image reveal animation with scale
            gsap.fromTo(
                imageRef.current,
                {
                    scale: 0.85,
                    opacity: 0,
                    rotationY: index % 2 === 0 ? -5 : 5
                },
                {
                    scale: 1,
                    opacity: 1,
                    rotationY: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Service details section animation
            if (detailsRef.current) {
                gsap.fromTo(
                    detailsRef.current,
                    {
                        y: 40,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.3,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: detailsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )

                // Staggered animation for features
                if (featuresRef.current.length > 0) {
                    gsap.fromTo(
                        featuresRef.current,
                        {
                            x: index % 2 === 0 ? -30 : 30,
                            opacity: 0
                        },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            delay: 0.5,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: detailsRef.current,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    )
                }
            }

            // Hover animation for image
            // if (imageRef.current) {
            //     const image = imageRef.current.querySelector('img')
            //     if (image) {
            //         image.addEventListener('mouseenter', () => {
            //             gsap.to(image, {
            //                 scale: 1.05,
            //                 duration: 0.6,
            //                 ease: "power2.out"
            //             })
            //         })
                    
            //         image.addEventListener('mouseleave', () => {
            //             gsap.to(image, {
            //                 scale: 1,
            //                 duration: 0.6,
            //                 ease: "power2.out"
            //             })
            //         })
            //     }
            // }

            // Subtle floating animation for the entire card
            // gsap.to(cardRef.current, {
            //     y: -10,
            //     duration: 2,
            //     repeat: -1,
            //     yoyo: true,
            //     ease: "sine.inOut",
            //     delay: index * 0.2
            // })

        }, cardRef)

        // Cleanup
        return () => ctx.revert()
    }, [index])

    return (
        <section 
            ref={cardRef}
            className='grid md:grid-cols-2 gap-8 my-10 md:max-w-7xl mx-auto overflow-hidden'
        >
            {/* Text section */}
            <div 
                ref={textRef}
                className='md:max-w-96  mx-auto text-center space-y-6 md:flex md:flex-col md:justify-center'
            >
                <h2 className='sm:text-2xl md:text-4xl! opacity-0 transform'>{service.title}</h2>
                <p className='text-base text-gray-600 opacity-0 transform'>{service.description}</p>
                <div className='flex justify-center items-center opacity-0 transform'>
                    <Link href={service.link}>
                        <AnimatedButton
                            text="View Details"
                            className="bg-transparent font-medium rounded-full"
                            textClass='text-black! font-light! text-xl!'
                            onClick={() => console.log("Button clicked!")}
                        />
                    </Link>
                </div>
            </div>

            {/* Image section */}
            <div 
                ref={imageRef}
                className='opacity-0 transform perspective-1000'
            >
                <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={2000}
                    height={2000}
                    className='rounded-4xl w-full '
                />
            </div>

            {/* Service details */}
            {service.details && (
                <div 
                    ref={detailsRef}
                    className='md:col-span-2 grid md:grid-cols-2 mt-8 gap-8 opacity-0'
                >
                    {/* Empty left column */}
                    <div></div>

                    {/* Right column with content */}
                    <div className='space-y-6'>
                        <h2 className='text-2xl md:text-4xl'>{service.details.heading}</h2>
                        <div>
                            {service.details.features.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    ref={addToRefs}
                                    className='grid grid-cols-2 my-10 opacity-0 transform'
                                >
                                    <h3 className='text-xl font-light'>{item.title}</h3>
                                    <p className='text-base text-gray-600'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ServiceCard