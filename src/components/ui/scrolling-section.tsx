'use client'
import React, { useRef, useEffect, useCallback, useState } from 'react'
import gsap from 'gsap'
import { MoveDownRight } from 'lucide-react'
import Image from 'next/image'

export type ScrollingSectionData = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type ScrollingSectionProps = {
  data: ScrollingSectionData[]
  type: 'left' | 'right'
  velocity?: number
  backgroundColor?: string
  textColor?: string
  fontSize?: string
  itemWidth?: string
  itemHeight?: string
  gap?: string
  showArrows?: boolean
  className?: string
  textWrap?: boolean
  isImage?: boolean
}



export default function ScrollingSection({
  data,
  type,
  velocity = 1,
  backgroundColor = '#17181B',
  textColor = 'white',
  fontSize = 'text-4xl',
  itemWidth,
  itemHeight,
  gap = 'gap-2',
  showArrows = false,
  className = '',
  textWrap = false,
  isImage = false
}: ScrollingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween>(null)
  const arrowsRef = useRef<SVGSVGElement[]>([])
  const lastScrollTopRef = useRef<number>(0)
  
  const isLeft = type === 'left'

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const totalWidth = container.scrollWidth / 2 // Since we duplicate the array
    
    const baseDuration = 40
    const adjustedDuration = baseDuration / velocity

    // ✅ Perfect seamless loop using GSAP modifiers
    tweenRef.current = gsap.to(container, {
      x: isLeft ? -totalWidth : totalWidth,
      duration: adjustedDuration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => {
          const xNum = parseFloat(x)
          if (isLeft) {
            // For tech stack (left movement)
            return (xNum % totalWidth) + 'px'
          } else {
            // For core values (right movement)
            return (xNum % totalWidth - totalWidth) + 'px'
          }
        }
      }
    })

    // ✅ Initialize with correct direction based on current scroll position
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop
    const initialTimeScale = currentScrollTop === 0 ? -1 : 1
    tweenRef.current.timeScale(initialTimeScale)
    lastScrollTopRef.current = currentScrollTop

    // ✅ Scroll listener
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const lastScrollTop = lastScrollTopRef.current

      // Determine scroll direction with better handling for edge cases
      if (scrollTop > lastScrollTop && scrollTop > 0) {
        // Scrolling down
        tweenRef.current?.timeScale(1)
        if (showArrows) {
          const targetRotation = isLeft ? 90 : 0
          gsap.to(arrowsRef.current, { 
            rotate: targetRotation, 
            duration: 0.4, 
            ease: 'power2.out' 
          })
        }
      } else if (scrollTop < lastScrollTop || scrollTop === 0) {
        // Scrolling up or reached the top
        tweenRef.current?.timeScale(-1)
        if (showArrows) {
          const targetRotation = isLeft ? -90 : 180
          gsap.to(arrowsRef.current, { 
            rotate: targetRotation, 
            duration: 0.4, 
            ease: 'power2.out' 
          })
        }
      }

      // Always update the last scroll position
      lastScrollTopRef.current = Math.max(0, scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      tweenRef.current?.kill()
    }
  }, [isLeft, velocity, showArrows, data.length])

  // Double the data (modifiers handle the seamless loop)
  const duplicatedData = [...data, ...data]

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className} bg-transparent`}>
      <div 
        ref={containerRef} 
        className={`flex ${gap}`}
      >
        {duplicatedData.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className={`
              flex items-center justify-center 
              bg-[${backgroundColor}]
              text-${textColor}
              ${fontSize}
              font-bold font-custom
              text-xl 
              md:text-4xl 
              italic
              font-serif
              shrink-0  
              
              ${itemHeight} 
              ${itemWidth} 
              
              bg-black

              rounded-2xl
              md:rounded-4xl
              ${gap}
              ${textWrap ? 
                'whitespace-normal wrap-break-word overflow-hidden text-center' : 
                'whitespace-nowrap overflow-hidden'
              }
            `}
          >
            {!isImage && item.name}
            {isImage && (
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
            )}
            {showArrows && (
              <MoveDownRight
                size={48}
                ref={(el) => {
                  if (el) arrowsRef.current[index] = el
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}