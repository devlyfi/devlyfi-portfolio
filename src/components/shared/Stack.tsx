"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import ShinyBadge from "../ui/shiny-badge";
import TextAnimate from "../ui/TextAnimate";
import Image from "next/image";

const projects = [
    {
        title: "Client-focused solutions.",
        description:
            "We listen to your needs and build custom software solutions tailored specifically to your business goals.",
        src: "https://framerusercontent.com/images/HjrIbMlxQF2quPYpUhzfiIHgP8.png?width=1004&height=1004",
    },
    {
        title: "Innovation-driven approach.",
        description:
            "Our team leverages cutting-edge technologies to create innovative solutions that give you a competitive edge.",
        src: "https://framerusercontent.com/images/HjrIbMlxQF2quPYpUhzfiIHgP8.png?width=1004&height=1004",
    },
    {
        title: "Fast, agile delivery.",
        description:
            "We move quickly without compromising quality, delivering solutions that help you launch faster and scale better.",
        src: "/images/lummi/img10.png",
    },
    {
        title: "Technical excellence.",
        description:
            "Built by experienced developers who write clean, maintainable code that stands the test of time.",
        src: "/images/lummi/img15.png",
    },
    {
        title: "Continuous support.",
        description:
            "We don't just deliver and disappear. We provide ongoing support and iterate based on your feedback.",
        src: "/images/lummi/img12.png",
    },
    {
        title: "Measurable results.",
        description:
            "We focus on outcomes that matter—increased efficiency, better user experience, and real business growth.",
        src: "/images/lummi/img12.png",
    },
];

const StickyCard_001 = ({
    i,
    title,
    src,
    description,
    progress,
    range,
    targetScale,
}: {
    i: number;
    title: string;
    src: string;
    description: string;
    progress: any;
    range: [number, number];
    targetScale: number;
}) => {
    const container = useRef<HTMLDivElement>(null);

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="sticky top-0 flex items-center justify-center    w-full md:w-4/5 mx-auto"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 20 + 250}px)`,
                }}
                className="rounded-4xl relative -top-1/4 flex h-[400px] w-full bg-secondary origin-top flex-row items-center justify-center overflow-hidden "
            >
                <div className="w-1/2 mx-5 flex items-center justify-center ">
                    <Image
                        src={src}
                        alt={title}
                        width={1004}
                        height={1004}
                        className="w-full rounded-4xl object-cover"
                    />
                </div>
                <div className=" p-4">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </motion.div>
        </div>
    );
};

const Skiper16 = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
     
            <main
                ref={container}
                className="relative flex w-full flex-col items-center px-4 md:max-w-7xl md:mx-auto justify-center pb-[50vh]  "
            >
                <div className="absolute left-1/2 top-[12%] md:top-[15%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
                    <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
                        scroll down to see card stack
                    </span>
                </div>
                <div className="mb-16">
                    <div className="mb-10">
                        <ShinyBadge
                            text="Why Choose Devlyfi"
                            className="p-4! text-lg! uppercase"
                        ></ShinyBadge>
                    </div>
                </div>
                    <div className="w-full md:max-w-3xl mx-auto ">
                        <TextAnimate className="text-center" text="Custom software solutions built around your unique business needs."></TextAnimate>
                    </div>
                {projects.map((project, i) => {
                    const targetScale = Math.max(
                        0.5,
                        1 - (projects.length - i - 1) * 0.1,
                    );
                    return (
                        <StickyCard_001
                            key={`p_${i}`}
                            i={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </main>
        
    );
};

export { Skiper16, StickyCard_001 };

