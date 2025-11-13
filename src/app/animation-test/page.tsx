'use client';

import { AnimatedSection } from '@/components/animations';

export default function AnimationTestPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">
          GSAP Animation Test
        </h1>

        {/* Fade In Up */}
        <AnimatedSection animation="fadeInUp" className="mb-20">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Fade In Up</h2>
            <p className="text-gray-600">
              This section animates with a fade in and slide up effect.
            </p>
          </div>
        </AnimatedSection>

        {/* Fade In Left */}
        <AnimatedSection animation="fadeInLeft" className="mb-20">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Fade In Left</h2>
            <p className="text-gray-600">
              This section animates from the left side.
            </p>
          </div>
        </AnimatedSection>

        {/* Fade In Right */}
        <AnimatedSection animation="fadeInRight" className="mb-20">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Fade In Right</h2>
            <p className="text-gray-600">
              This section animates from the right side.
            </p>
          </div>
        </AnimatedSection>

        {/* Scale In */}
        <AnimatedSection animation="scaleIn" className="mb-20">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Scale In</h2>
            <p className="text-gray-600">
              This section scales in with a bounce effect.
            </p>
          </div>
        </AnimatedSection>

        {/* Stagger Animation */}
        <AnimatedSection stagger staggerDelay={0.15} className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Stagger Animation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Card 1</h3>
              <p className="text-sm text-gray-600">Animates first</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Card 2</h3>
              <p className="text-sm text-gray-600">Animates second</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Card 3</h3>
              <p className="text-sm text-gray-600">Animates third</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Parallax Effect */}
        <div className="mb-20 h-96 relative overflow-hidden rounded-lg">
          <AnimatedSection animation="parallax" parallaxSpeed={0.3}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Parallax Effect</h2>
                <p className="text-gray-600">
                  This section moves at a different speed while scrolling
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Delayed Animation */}
        <AnimatedSection animation="fadeInUp" delay={0.3} className="mb-20">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Delayed Animation</h2>
            <p className="text-gray-600">
              This section has a 0.3 second delay before animating.
            </p>
          </div>
        </AnimatedSection>

        <div className="text-center text-gray-500 mt-20">
          <p>Scroll down to see the animations trigger</p>
          <p className="text-sm mt-2">
            Animations respect prefers-reduced-motion settings
          </p>
        </div>
      </div>
    </div>
  );
}
