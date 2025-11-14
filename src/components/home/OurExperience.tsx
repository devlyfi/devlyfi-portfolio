 'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Calendar, TrendingUp } from 'lucide-react';
import TextMarquee from '@/components/ui/text-marque';

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
    { icon: Briefcase, value: 26, suffix: '+', label: 'Projects Completed' },
    { icon: Users, value: 24, suffix: '+', label: 'Happy Clients' },
    { icon: Calendar, value: 4, suffix: '+', label: 'Years Experience' },
    { icon: TrendingUp, value: 99, suffix: '%', label: 'Client Satisfaction' },
  ];

  const CountingNumber = ({ value, suffix }: { value: number; suffix: string }) => {
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
    }, [isVisible, value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="relative bg-black py-20 md:py-32 overflow-hidden">
      {/* Background gradient matching hero */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/40 via-black to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-white">Our Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
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
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  <CountingNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Tech Stack
          </h3>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Tech Stack Marquee */}
        <TextMarquee 
          marquee1={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS']}
          marquee2={['Vue.js', 'Svelte', 'GraphQL', 'Docker', 'Kubernetes', 'Redis', 'Python', 'Go']}
        />
      </div>
    </section>
  );
}
