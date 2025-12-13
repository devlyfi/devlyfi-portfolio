"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { works } from "@/lib/data/dummy"
import Image from "next/image"
import { useRouter } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

export default function RecentWorkCard() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".who-card")

      gsap.fromTo(
        cards,
        {
          x: (i) => (cards[i].classList.contains("right-col") ? 200 : -200),
          opacity: 0,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1.5,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {works.map((item, index) => {
        const isRight = Number(item.id) % 2 === 0

        return (
          <div
            key={item.id}
            className={`
              who-card ${isRight ? "right-col" : "left-col"}
              relative flex flex-col justify-between
              p-8 rounded-4xl
              bg-secondary overflow-hidden cursor-pointer group
              h-[45vh]
              ${isRight ? "lg:col-start-2 lg:translate-y-20 rotate-30" : "lg:col-start-1 -rotate-30"}
            `}
            onClick={() => router.push(`/work/${item.slug}`)}
          >
            {/* Background Image - Full Cover */}
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover -z-10"
              priority={index < 4}
              quality={100}
            />

            {/* Dark overlay for perfect text readability */}
            {/* <div className="absolute inset-0 " /> */}

            {/* Content */}
            {/* <h2 className="">
              {index + 1}
            </h2> */}
            <p className="text-right text-lg sm:text-xl lg:text-2xl font-semibold font-custom text-white drop-shadow-xl relative z-10">
              {item.title}
            </p>
          </div>
        )
      })}
    </div>
  )
}