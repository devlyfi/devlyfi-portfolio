"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import ShinyBadge from "../ui/shiny-badge";
import TextAnimate from "../ui/TextAnimate";
import Image, { StaticImageData } from "next/image";
import { Service } from "@/lib/types";
import { Badge } from "lucide-react";

type Process = {

    id: number;
    title: string;
    description: string;
    tasks: string[];
    icon:StaticImageData

};

const StickyCard_001 = ({
    i,
    content,
    progress,
    range,
    targetScale,
}: {
    i: number;
    content: Process;
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
                className="rounded-4xl relative -top-1/4 flex min-h-[400px] w-full  origin-top  overflow-hidden bg-secondary p-4 md:p-8 "
            >

                <div className="max-w-4/5  space-y-4 md:space-y-6">
                    {/* <Badge></Badge> */}
                    <div className="my-6">
                        <span className="bg-blue-600 md:font-light py-2 px-4 rounded-full text-white">Step {content.id}</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-light">{content.title}</h3>
                    <p className="md:text-md text-gray-800">{content.description}</p>
                    <div>
                        <h3 className="md:text-xl font-light">Tasks Involved</h3>
                        {/* <br /> */}
                       <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
                         {
                            content.tasks.map((task, i) => {
                                return <span className="px-4 rounded-full bg-primary/10 py-2 font-medium text-gray-800 text-xs " key={i}> {task}</span>;
                            })
                        }
                       </div>
                    </div>
                </div>
                <div className="md:flex flex-col items-center justify-center hidden absolute right-20 inset-y-0">
                   <Image
                   src={content.icon}
                   alt={content.title}
                   width={500}
                   height={500}
                   className="w-28 "
                //    fill
                   
                   >

                   </Image>
                </div>
            </motion.div>
        </div>
    );
};

const ServiceDetailsSkipper = ({ content }: { content: Service }) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (

        <main
            ref={container}
            className="relative  flex w-full flex-col items-center px-4 md:max-w-7xl md:mx-auto justify-center pb-[50vh]  bg-linear-to-b  "
        >
            <div className="absolute left-1/2 top-[12%] md:top-[15%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
                <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-linear-to-b  after:content-['']">
                    scroll down to see card stack
                </span>
            </div>
            <div className="mb-16">
                <div className="mb-10">
                    <ShinyBadge
                        text="Why Choose Devlyfi"
                        className="p-4! text-lg! uppercase "
                        shineColor="#FFFFFF"
                    ></ShinyBadge>
                </div>
            </div>
            <div className="w-full md:max-w-3xl mx-auto ">
                <TextAnimate className="text-center " text="Custom software solutions built around your unique business needs."></TextAnimate>
            </div>
            {content.process!.map((process, i) => {
                const targetScale = Math.max(
                    0.5,
                    1 - (content.process!.length - i - 1) * 0.1,
                );
                return (
                    <StickyCard_001
                        key={`p_${i}`}
                        i={i}
                        content={process}

                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </main>

    );
};

export { ServiceDetailsSkipper, StickyCard_001 };

