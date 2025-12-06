'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import AnimatedButton from '../ui/AnimatedButton';

export default function MiniCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftImgRef = useRef<HTMLDivElement>(null);
    const rightImgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (x - centerX) * 0.05; // subtle motion
            const moveY = (y - centerY) * 0.05;

            // Left image motion
            gsap.to(leftImgRef.current, {
                x: moveX,
                y: moveY,
                duration: 0.6,
                ease: "power2.out",
            });

            // Right image motion
            gsap.to(rightImgRef.current, {
                x: moveX * 1.3,
                y: moveY * 1.3,
                duration: 0.6,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to([leftImgRef.current, rightImgRef.current], {
                x: 0,
                y: 0,
                duration: 1.2,
                ease: "elastic.out(1,0.3)",
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-linear-to-br bg-[#2F6BE4] mx-4 rounded-[40px] text-white shadow-2xl cursor-pointer my-20 py-30 lg:max-w-7xl lg:mx-auto"
        >
            {/* Background subtle glow */}
            <div className="absolute inset-0 bg-white opacity-5"></div>

                    {/* Left Image */}
                <div
            className="absolute translate-y-1/2 -translate-x-[50%] w-[350px] h-[400px] pointer-events-none -rotate-12"
        >
            <div ref={leftImgRef} className="relative">
                <img
                    src="https://framerusercontent.com/images/0ZLGh9qBnO3ruNsz6L77XPDlw0.png?scale-down-to=512&width=701&height=581"
                    className="w-full h-full object-contain opacity-80 mix-blend-screen"
                />
            </div>
        </div>

        {/* Right Image */}
        <div
            className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[30%] w-[350px] h-[350px] pointer-events-none rotate-12"
        >
            <div ref={rightImgRef} className="relative">
                <img
                    src="https://framerusercontent.com/images/0ZLGh9qBnO3ruNsz6L77XPDlw0.png?scale-down-to=512&width=701&height=581"
                    className="w-full h-full object-contain opacity-80 mix-blend-screen"
                />
            </div>
        </div>

            {/* White glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-white/40 blur-[90px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
                <h2 className="text-6xl">
                    Your First Step To
                    <br />
                    Financial Freedom Begins
                    <br />
                    Here
                </h2>

                <p className="text-base md:text-lg font-light text-blue-050 mb-12 max-w-2xl mx-auto">
                    Watch your money grow. Download the app now and start taking control of your money today.
                </p>

                <div className="flex justify-center items-center">
                    <AnimatedButton text="Download Now" className="w-1/4 flex justify-center" />
                </div>
            </div>
        </section>
    );
}
