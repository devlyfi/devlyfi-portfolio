'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServiceCard from '@/components/services/ServiceCard'
import CommonHero from '@/components/shared/CommonHero'


// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Brand Identity',
    description: 'A well-designed brand isn’t just how it looks — it’s how it speaks, feels, and builds trust. We create timeless visual systems that align with your story and values.',
    imageUrl: 'https://framerusercontent.com/images/ud6hk50vfDmJQzASeI2ENEqYLBc.png?scale-down-to=1024',
    link: '/contact',
    details: {
      heading: 'Distinctive brand identities built with clarity and purpose.',
      features: [
        {
          title: 'Brand Strategy',
          description: 'We develop a custom brand strategy that aligns with your business goals and target audience.',
        },
        {
          title: 'Visual Design',
          description: 'Our team of designers creates visually stunning brand identities that reflect your brand values and personality.',
        },
        {
          title: 'Brand Guidelines',
          description: 'We develop brand guidelines that ensure consistency and professionalism across all touchpoints.',
        }
      ]
    }
  },
  {
    title: 'Brand Identity',
    description: 'A well-designed brand isn’t just how it looks — it’s how it speaks, feels, and builds trust. We create timeless visual systems that align with your story and values.',
    imageUrl: 'https://framerusercontent.com/images/ud6hk50vfDmJQzASeI2ENEqYLBc.png?scale-down-to=1024',
    link: '/contact',
    details: {
      heading: 'Distinctive brand identities built with clarity and purpose.',
      features: [
        {
          title: 'Brand Strategy',
          description: 'We develop a custom brand strategy that aligns with your business goals and target audience.',
        },
        {
          title: 'Visual Design',
          description: 'Our team of designers creates visually stunning brand identities that reflect your brand values and personality.',
        },
        {
          title: 'Brand Guidelines',
          description: 'We develop brand guidelines that ensure consistency and professionalism across all touchpoints.',
        }
      ]
    }
  },
  {
    title: 'Brand Identity',
    description: 'A well-designed brand isn’t just how it looks — it’s how it speaks, feels, and builds trust. We create timeless visual systems that align with your story and values.',
    imageUrl: 'https://framerusercontent.com/images/ud6hk50vfDmJQzASeI2ENEqYLBc.png?scale-down-to=1024',
    link: '/contact',
    details: {
      heading: 'Distinctive brand identities built with clarity and purpose.',
      features: [
        {
          title: 'Brand Strategy',
          description: 'We develop a custom brand strategy that aligns with your business goals and target audience.',
        },
        {
          title: 'Visual Design',
          description: 'Our team of designers creates visually stunning brand identities that reflect your brand values and personality.',
        },
        {
          title: 'Brand Guidelines',
          description: 'We develop brand guidelines that ensure consistency and professionalism across all touchpoints.',
        }
      ]
    }
  },
  
  
  // Add more services here following the same structure
]
function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const serviceCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the entire container entrance
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      })

      // Animate header section
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        })
      }

      // Animate badge with subtle scale
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.5,
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
      }

      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.9,
          ease: "power3.out",
          
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
      }

      // Stagger animation for service cards
      if (serviceCardsRef.current) {
        const cards = serviceCardsRef.current.children

        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: serviceCardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
      }

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className='min-h-screen px-4'>


      <CommonHero title={"What we offer — clear direction, thoughtful design."} subtitle={"From brand identity to digital interfaces, Osei helps creative businesses build clarity and presence. Each service is tailored, strategic, and designed to grow with you."}></CommonHero>

      <div ref={serviceCardsRef}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Services