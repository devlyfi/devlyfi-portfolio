"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Calendar, TrendingUp } from "lucide-react";
import TextMarquee from "@/components/ui/text-marque";
import ShinyBadge from "../ui/shiny-badge";

export function OurExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Briefcase, value: 26, suffix: "+", label: "Projects Completed" },
    { icon: Users, value: 24, suffix: "+", label: "Happy Clients" },
    { icon: Calendar, value: 4, suffix: "+", label: "Years Experience" },
    { icon: TrendingUp, value: 99, suffix: "%", label: "Client Satisfaction" },
  ];

  const CountingNumber = ({
    value,
    suffix,
  }: {
    value: number;
    suffix: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-primary"
     
    >
      {/* Subtle grid pattern overlay */}
      {/* <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 2px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 2px, transparent 0)
          `,
          backgroundSize: "40px 40px, 80px 80px",
          backgroundPosition: "0 0, 20px 20px"
        }}
      ></div> */}

      {/* Alternative grid pattern (dotted grid) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 2px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 2px, transparent 1px)
          `,
          backgroundSize: "100px 100px"
        }}
      ></div>

      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-10">
            <ShinyBadge
              text="Our Experience"
              className="p-4! text-lg! uppercase bg-[#ffff]! "
              shineColor="#CAE16E"
            ></ShinyBadge>
          </div>

          <h2 className="text-white max-w-3xl mx-auto text-4xl md:text-5xl font-thin!">
            Proven Track Record of Excellence
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-white/20 backdrop-blur-sm transition-all duration-300 text-center hover:border-white/30 hover:bg-white/5"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                  <CountingNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-gray-200 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-thin text-white mb-3">
            Tech Stack
          </h3>
          <p className="text-base md:text-md text-gray-200 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build exceptional digital
            experiences
          </p>
        </div>

        {/* Tech Stack Marquee */}
        <TextMarquee
          marquee1={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "AWS",
          ]}
          marquee2={[
            "Vue.js",
            "Svelte",
            "GraphQL",
            "Docker",
            "Kubernetes",
            "Redis",
            "Python",
            "Go",
          ]}
        />
      </div>
    </section>
  );
}