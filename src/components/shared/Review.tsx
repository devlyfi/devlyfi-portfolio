'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ShinyBadge from "../ui/shiny-badge";
import { gsap } from "gsap";

export default function TestimonialCard() {
    const reviews = [
        {
            text: "The AI agent they built saved our team hours every week and improved our response time. It feels like we hired a new team member who never sleeps!",
            name: "Windi Kulina",
            role: "CMO OF BIMA",
            avatar: "/avatar-placeholder.png"
        },
        {
            text: "The AII agent they built saved our team hours every week and improved our response time. It feels like we hired a new team member who never sleeps!",
            name: "John Carter",
            role: "HEAD OF OPERATIONS",
            avatar: "/avatar-placeholder.png"
        },
        {
            text: "The AIII agent they built saved our team hours every week and improved our response time. It feels like we hired a new team member who never sleeps!",
            name: "Lisa Anderson",
            role: "PRODUCT MANAGER",
            avatar: "/avatar-placeholder.png"
        }
    ];

    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const textRef = useRef<HTMLParagraphElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLImageElement>(null);
    const quoteRef = useRef<HTMLSpanElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);
    const prevIconRef = useRef<HTMLDivElement>(null);
    const nextIconRef = useRef<HTMLDivElement>(null);

    // Hover animations for buttons
    useEffect(() => {
        const setupButtonAnimation = (
            button: HTMLButtonElement | null,
            icon: HTMLDivElement | null
        ) => {
            if (!button || !icon) return;

            const handleMouseEnter = () => {
                gsap.to(button, { scale: 0.95, duration: 0.3, ease: "power2.out" });
                gsap.to(icon, {
                    y: -30,
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(icon, { y: 30, opacity: 0 });
                        gsap.to(icon, { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" });
                    }
                });
            };

            const handleMouseLeave = () => {
                gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
                gsap.to(icon, {
                    y: -30,
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(icon, { y: 30, opacity: 0 });
                        gsap.to(icon, { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" });
                    }
                });
            };

            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                button.removeEventListener("mouseenter", handleMouseEnter);
                button.removeEventListener("mouseleave", handleMouseLeave);
            };
        };

        const prevCleanup = setupButtonAnimation(prevButtonRef.current, prevIconRef.current);
        const nextCleanup = setupButtonAnimation(nextButtonRef.current, nextIconRef.current);

        return () => {
            prevCleanup && prevCleanup();
            nextCleanup && nextCleanup();
        };
    }, []);

    const animateOut = () => {
        setIsAnimating(true);

        gsap.to([textRef.current, nameRef.current, avatarRef.current], {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.1
        });

        gsap.to(quoteRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out"
        });

        if (prevIconRef.current && nextIconRef.current) {
            gsap.to([prevIconRef.current, nextIconRef.current], {
                y: -30,
                opacity: 0,
                duration: 0.25,
                ease: "power2.out",
                onComplete: () => {
                    gsap.set([prevIconRef.current, nextIconRef.current], { y: 30, opacity: 0 });
                }
            });
        }
    };

    const animateIn = () => {
        gsap.fromTo([textRef.current, nameRef.current, avatarRef.current],
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: 0.1 }
        );

        gsap.fromTo(quoteRef.current,
            { opacity: 0, scale: 1.2 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.1 }
        );

        gsap.to(avatarRef.current, {
            keyframes: {
                "0%": { rotate: "0deg" },
                "25%": { rotate: "2deg" },
                "75%": { rotate: "-2deg" },
                "100%": { rotate: "0deg" }
            },
            duration: 0.8,
            ease: "power2.inOut"
        });

        if (prevIconRef.current && nextIconRef.current) {
            setTimeout(() => {
                gsap.fromTo([prevIconRef.current, nextIconRef.current],
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
                );
            }, 100);
        }

        setIsAnimating(false);
    };

    const changeReview = (direction: 'next' | 'prev') => {
        if (isAnimating) return;

        animateOut();

        setTimeout(() => {
            setCurrent((prev) =>
                direction === 'next'
                    ? (prev === reviews.length - 1 ? 0 : prev + 1)
                    : (prev === 0 ? reviews.length - 1 : prev - 1)
            );

            setTimeout(() => {
                animateIn();
            }, 50);
        }, 300);
    };

    const prev = () => changeReview('prev');
    const next = () => changeReview('next');

    useEffect(() => {
        gsap.fromTo([textRef.current, nameRef.current, avatarRef.current, quoteRef.current],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15, delay: 0.2 }
        );

        setTimeout(() => {
            if (prevIconRef.current && nextIconRef.current) {
                gsap.fromTo([prevIconRef.current, nextIconRef.current],
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: 0.3 }
                );
            }
        }, 400);
    }, []);

    const item = reviews[current];

    return (
        <section className="bg-secondary my-40">
            <div className="w-full max-w-5xl mx-auto py-20 px-6">
                <div className="mb-10 flex justify-center">
                    <ShinyBadge text="Testimonials" className="p-4! text-lg! uppercase" />
                </div>

                <div className="relative">
                    <span ref={quoteRef} className="absolute -top-4 -left-2 text-[90px] text-primary leading-none select-none">"</span>
                    <p ref={textRef} className="text-3xl md:text-4xl max-w-4xl mx-auto pt-10">{item.text}</p>
                    
                </div>

                <div className="mt-12 border-t border-primary relative">
                    <div
                        className="absolute -top-1 left-0 w-30 h-[3px] bg-primary"
                        style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)" }}
                    ></div>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-3">
                        <Image
                            ref={avatarRef}
                            src={item.avatar}
                            alt="avatar"
                            width={50}
                            height={50}
                            className="rounded-md object-cover"
                        />
                        <div ref={nameRef}>
                            <p className="font-semibold text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.role}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            ref={prevButtonRef}
                            onClick={prev}
                            disabled={isAnimating}
                            className={`p-4 rounded-full overflow-hidden border cursor-pointer border-primary hover:bg-primary/10 transition-transform duration-300 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <div ref={prevIconRef} className="relative overflow-hidden">
                                <ArrowLeft className="text-primary" size={18} />
                            </div>
                        </button>
                        <button
                            ref={nextButtonRef}
                            onClick={next}
                            disabled={isAnimating}
                            className={`p-4 cursor-pointer overflow-hidden rounded-full border border-primary hover:bg-primary/10 transition-transform duration-300 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <div ref={nextIconRef} className="relative overflow-hidden">
                                <ArrowRight className="text-primary" size={18} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
