// app/components/RevealFooter.tsx
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LiveClock from '../shared/LiveClock';
import Image from 'next/image';
import { ThreeDIcon } from '@/lib/image/image';

type FooterItemEl = HTMLDivElement | null;

// Create a unique ID for each link
const createLinkId = (section: string, item: string) => `${section}-${item}`;

export default function RevealFooter() {
  const itemsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    // Create an array of all elements from the Map
    const elements = Array.from(itemsRef.current.values());

    elements.forEach((item) => {
      const letters = item.querySelectorAll(".char");

      const onEnter = () => {
        gsap.killTweensOf(letters);

        // Animate out: characters move up and fade out
        gsap.to(letters, {
          y: -20,
          opacity: 0,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.in",
          onComplete: () => {
            // Reset position to bottom for entrance
            gsap.set(letters, { y: 20, opacity: 0 });

            // Animate in: characters move up from bottom with stagger
            gsap.to(letters, {
              y: 0,
              opacity: 1,
              duration: 0.3,
              stagger: 0.03,
              ease: "power3.out",
            });
          }
        });
      };

      const onLeave = () => {
        gsap.killTweensOf(letters);

        // Smooth reset to original position
        gsap.to(letters, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);

      return () => {
        item.removeEventListener("mouseenter", onEnter);
        item.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  const splitChars = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block opacity-100">
        {char}
      </span>
    ));

  return (
    <footer className="bg-white">

      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-lg leading-relaxed">
            Sometimes the hardest part is reaching out — but once you do, we’ll make the rest easy.
          </p>
          <AnimatedButton
            text="Let's talk today"
            textClass="text-black!"
            className=" text-white!  px-8 h-14 rounded-full font-medium text-base"
          // arrow={true}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">

        {/* Contact Info Bar */}
        <div className="bg-gray-50 rounded-2xl p-10 mb-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div>
            <h2 className="text-primary md:text-3xl mb-3 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              PHONE
            </h2>
            <p className="text-gray-600">(217) 555-0134</p>
            <p className="text-gray-600">(217) 555-0142</p>
          </div>

          <div>
            <h2 className="text-primary md:text-3xl mb-3 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              EMAIL
            </h2>
            <p className="text-gray-600">boldstart@email.com</p>
            <p className="text-gray-600">boldstart.support@email.com</p>
          </div>

          <div>
            <h2 className="text-primary md:text-3xl mb-3 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              ADDRESS
            </h2>
            <p className="text-gray-600">123 Main Street, Suite 200, Austin, TX 78701</p>
          </div>

          <div>
            <h2 className="text-primary md:text-3xl mb-3 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              OPENING HOURS
            </h2>
            <p className="text-gray-600">Mon to Sat 9:00am – 8:30pm</p>
            <p className="text-gray-600">Sun: Closed</p>
            <LiveClock />

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Newsletter */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-light">F</span>
              </div>
              <span className="text-2xl font-light text-gray-900">fizens</span>
            </div>

            <p className="text-gray-600 mb-6">Subscribe for our newsletter</p>

            <div className="relative w-full max-w-md mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 p-6 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <AnimatedButton
                text="Subscribe"
                textClass="text-white!"
                className="
                  bg-primary! text-white!
                  absolute top-1/2 -right-1
                  -translate-y-1/2
                  h-14!  
                  rounded-full
                  px-6!
                "
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          </div>


          {/* Main Pages */}
          <div className="md:col-span-2">
            <h2 className="md:text-4xl mb-4">Main Pages</h2>
            <p className="text-sm text-gray-500 mb-4">All pages included</p>
            <ul className="space-y-3">
              {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <div
                    ref={(el) => {
                      if (el) {
                        itemsRef.current.set(createLinkId('main', item), el);
                      } else {
                        itemsRef.current.delete(createLinkId('main', item));
                      }
                    }}
                    className="relative group cursor-pointer"
                  >
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition flex overflow-hidden"
                    >
                      {splitChars(item)}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div className="md:col-span-2">
            <h2 className="md:text-4xl mb-8">Other</h2>
            <ul className="space-y-3">
              {['About', 'Team Member', 'Job detail', 'Blog', '404 page'].map((item) => (
                <li key={item}>
                  <div
                    ref={(el) => {
                      if (el) {
                        itemsRef.current.set(createLinkId('other', item), el);
                      } else {
                        itemsRef.current.delete(createLinkId('other', item));
                      }
                    }}
                    className="relative group cursor-pointer"
                  >
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition flex overflow-hidden"
                    >
                      {splitChars(item)}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Utilities */}
          <div className="md:col-span-3">
            <h2 className="md:text-4xl mb-8">Legal & Utilities</h2>
            <ul className="space-y-3">
              {['Integration', 'Download', 'Changelog'].map((item) => (
                <li key={item}>
                  <div
                    ref={(el) => {
                      if (el) {
                        itemsRef.current.set(createLinkId('legal', item), el);
                      } else {
                        itemsRef.current.delete(createLinkId('legal', item));
                      }
                    }}
                    className="relative group cursor-pointer"
                  >
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition flex overflow-hidden"
                    >
                      {splitChars(item)}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <Image
          src={ThreeDIcon.foooter}
          alt='Footer'
          // fill
          width={2000}
          height={2000}
          className="f-ull w-full obejct-cover"
        ></Image>
        <br />
        <br />
        <br /> */}

        <Image
          src={ThreeDIcon.foooter2}
          alt='Footer'
          // fill
          width={2000}
          height={2000}
          className="f-ull w-full obejct-cover"
        ></Image>
        <hr className="my-12 border-gray-200" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 text-center md:text-left">
            <p>© 2025 Copyright - Devlyfi | Designed by Devlyfi |</p>
            <p>Devlyfi | Powered by Next.js</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition">
              <Linkedin size={20} />
            </a>
          </div>

          <AnimatedButton
            text="Get Started For Free"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition"
            onClick={() => console.log("Button clicked!")}
          />
        </div>
      </div>

    </footer>
  );
}