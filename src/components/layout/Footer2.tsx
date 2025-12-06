// // app/components/BoldStartFooter.tsx
// 'use client';

// import Link from 'next/link';
// import { Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
// import AnimatedButton from '../ui/AnimatedButton';
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const createLinkId = (section: string, item: string) => `${section}-${item.toLowerCase().replace(/\s/g, '-')}`;

// export default function BoldStartFooter() {
//   const itemsRef = useRef<Map<string, HTMLDivElement>>(new Map());

//   useEffect(() => {
//     const elements = Array.from(itemsRef.current.values());
//     elements.forEach((item) => {
//       const letters = item.querySelectorAll(".char");

//       const onEnter = () => {
//         gsap.killTweensOf(letters);
//         gsap.to(letters, {
//           y: -20,
//           opacity: 0,
//           duration: 0.2,
//           stagger: 0.02,
//           ease: "power2.in",
//           onComplete: () => {
//             gsap.set(letters, { y: 20, opacity: 0 });
//             gsap.to(letters, {
//               y: 0,
//               opacity: 1,
//               duration: 0.3,
//               stagger: 0.03,
//               ease: "power3.out",
//             });
//           }
//         });
//       };

//       const onLeave = () => {
//         gsap.killTweensOf(letters);
//         gsap.to(letters, {
//           y: 0,
//           opacity: 1,
//           duration: 0.2,
//           ease: "power2.out",
//         });
//       };

//       item.addEventListener("mouseenter", onEnter);
//       item.addEventListener("mouseleave", onLeave);

//       return () => {
//         item.removeEventListener("mouseenter", onEnter);
//         item.removeEventListener("mouseleave", onLeave);
//       };
//     });
//   }, []);

//   const splitChars = (text: string) =>
//     text.split("").map((char, i) => (
//       <span key={i} className="char inline-block opacity-100">
//         {char === " " ? "\u00A0" : char}
//       </span>
//     ));

//   const pages = ["Home", "About", "Services", "Case Studies", "Blogs", "Reviews", "Pricing", "Career", "Contact"];
//   const services = [
//     "Business planning",
//     "Business setup",
//     "Market research",
//     "Branding & marketing",
//     "Financial guidance",
//     "Ongoing support"
//   ];

//   return (
//     <footer className="bg-white border-t">
//       {/* Top Lime Banner - Exact match */}
//       <div className="bg-secondary">
//         <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-black text-lg leading-relaxed">
//             Sometimes the hardest part is reaching out — but once you do, we’ll make the rest easy.
//           </p>
//           <AnimatedButton
//             text="Let's talk today"
//             textClass="text-black!"
//             className=" text-white!  px-8 h-14 rounded-none font-medium text-base"
//           />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
//         {/* Contact Info Bar */}
//         <div className="bg-gray-50 rounded-2xl p-10 mb-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
//           <div>
//             <h4 className="text-primary font-semibold mb-3 flex items-center gap-3">
//               <span className="w-3 h-3 bg-primary rounded-full"></span>
//               PHONE
//             </h4>
//             <p className="text-gray-600">(217) 555-0134</p>
//             <p className="text-gray-600">(217) 555-0142</p>
//           </div>

//           <div>
//             <h4 className="text-primary font-semibold mb-3 flex items-center gap-3">
//               <span className="w-3 h-3 bg-primary rounded-full"></span>
//               EMAIL
//             </h4>
//             <p className="text-gray-600">boldstart@email.com</p>
//             <p className="text-gray-600">boldstart.support@email.com</p>
//           </div>

//           <div>
//             <h4 className="text-primary font-semibold mb-3 flex items-center gap-3">
//               <span className="w-3 h-3 bg-primary rounded-full"></span>
//               ADDRESS
//             </h4>
//             <p className="text-gray-600">123 Main Street, Suite 200, Austin, TX 78701</p>
//           </div>

//           <div>
//             <h4 className="text-primary font-semibold mb-3 flex items-center gap-3">
//               <span className="w-3 h-3 bg-primary rounded-full"></span>
//               OPENING HOURS
//             </h4>
//             <p className="text-gray-600">Mon to Sat 9:00am – 8:30pm</p>
//             <p className="text-gray-600">Sun: Closed</p>
//             <p className="text-primary font-medium text-xs mt-2">● 10:30-19 AM</p>
//           </div>
//         </div>

//         {/* Navigation Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
//           {/* PAGES */}
//           <div className="md:col-span-4">
//             <h2 className="text-4xl font-light text-gray-900 mb-8 flex items-center gap-3">
//               <span className="w-3 h-3 bg-primary rounded-full"></span>
//               PAGES
//             </h2>
//             <ul className="space-y-5">
//               {pages.map((item) => (
//                 <li key={item}>
//                   <div
//                     ref={(el) => el && itemsRef.current.set(createLinkId('pages', item), el)}
//                     className="group cursor-pointer"
//                   >
//                     <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center overflow-hidden">
//                       {splitChars(item)}
//                       <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
//                     </Link>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div className="md:col-span-4">
//             <h2 className="text-4xl font-light text-gray-900 mb-8 flex items-center gap-3">
//               <span className="w-3 h-3 bg-primary rounded-full"></span>
//               SERVICES
//             </h2>
//             <ul className="space-y-5">
//               {services.map((item) => (
//                 <li key={item}>
//                   <div
//                     ref={(el) => el && itemsRef.current.set(createLinkId('services', item), el)}
//                     className="group cursor-pointer"
//                   >
//                     <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center overflow-hidden">
//                       {splitChars(item)}
//                       <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
//                     </Link>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SOCIALS */}
//           <div className="md:col-span-4">
//             <h2 className="text-4xl font-light text-gray-900 mb-8 flex items-center gap-3">
//               <span className="w-3 h-3 bg-primary rounded-full"></span>
//               SOCIALS
//             </h2>
//             <ul className="space-y-5">
//               {[
//                 { name: "Facebook", icon: Facebook },
//                 { name: "Linkedin", icon: Linkedin },
//                 { name: "Youtube", icon: Youtube },
//                 { name: "X / Twitter", icon: Twitter },
//               ].map(({ name, icon: Icon }) => (
//                 <li key={name}>
//                   <div
//                     ref={(el) => el && itemsRef.current.set(createLinkId('socials', name), el)}
//                     className="group cursor-pointer"
//                   >
//                     <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-4 overflow-hidden">
//                       <Icon size={20} />
//                       {splitChars(name)}
//                       <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
//                     </a>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <hr className="my-16 border-gray-200" />

//         {/* Bottom Bar - Same as your RevealFooter */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
//           <div className="text-center md:text-left">
//             <p>© 2025 BoldStart - All rights reserved</p>
//           </div>

//           <div className="flex items-center gap-6">
//             <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Facebook size={20} /></a>
//             <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Linkedin size={20} /></a>
//             <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Youtube size={20} /></a>
//             <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Twitter size={20} /></a>
//           </div>

//           <AnimatedButton
//             text="Get Started For Free"
//             className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }