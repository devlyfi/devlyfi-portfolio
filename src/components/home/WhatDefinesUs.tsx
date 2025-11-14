'use client';

import { Users, Lightbulb, Rocket, Code, RefreshCw, Trophy, Target } from 'lucide-react';

export default function WhatDefinesUs() {
  const values = [
    {
      icon: Users,
      title: 'Client-focused solutions.',
      description: 'We listen to your needs and build custom software solutions tailored specifically to your business goals.',
      hoverColor: 'group-hover:bg-blue-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation-driven approach.',
      description: 'Our team leverages cutting-edge technologies to create innovative solutions that give you a competitive edge.',
      hoverColor: 'group-hover:bg-purple-600',
    },
    {
      icon: Rocket,
      title: 'Fast, agile delivery.',
      description: 'We move quickly without compromising quality, delivering solutions that help you launch faster and scale better.',
      hoverColor: 'group-hover:bg-indigo-600',
    },
    {
      icon: Code,
      title: 'Technical excellence.',
      description: 'Built by experienced developers who write clean, maintainable code that stands the test of time.',
      hoverColor: 'group-hover:bg-cyan-600',
    },
    {
      icon: RefreshCw,
      title: 'Continuous support.',
      description: 'We don\'t just deliver and disappear. We provide ongoing support and iterate based on your feedback.',
      hoverColor: 'group-hover:bg-teal-600',
    },
    {
      icon: Trophy,
      title: 'Measurable results.',
      description: 'We focus on outcomes that matter—increased efficiency, better user experience, and real business growth.',
      hoverColor: 'group-hover:bg-emerald-600',
    },
  ];

  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 mb-6">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Why Choose Devlyfi</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl">
            Custom software solutions built around your unique business needs.
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-gray-200 group-hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden group-hover:shadow-2xl"
              >
                {/* Background layers */}
                <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-radial from-blue-900/40 via-black to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content - removed transform to prevent shifting */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
