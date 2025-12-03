// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';

// export default function FizensLoader() {
//   const [isComplete, setIsComplete] = useState(false);
//   const loaderRef = useRef<HTMLDivElement>(null);
//   const progressRef = useRef<HTMLDivElement>(null);
//   const percentRef = useRef<HTMLSpanElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial setup
//       gsap.set([textRef.current, logoRef.current], {
//         opacity: 0,
//         y: 30
//       });

//       // Entrance animations
//       const tl = gsap.timeline();

//       // Fade in logo and text
//       tl.to([logoRef.current, textRef.current], {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: 'power3.out'
//       });

//       // Animate progress bar and counter
//       tl.to({}, {
//         duration: 3,
//         onUpdate: function() {
//           const progress = this.progress() * 100;
//           if (progressRef.current) {
//             progressRef.current.style.width = `${progress}%`;
//           }
//           if (percentRef.current) {
//             percentRef.current.textContent = Math.round(progress).toString();
//           }
//         }
//       }, '-=0.3');

//       // Exit animation
//       tl.to(loaderRef.current, {
//         opacity: 0,
//         duration: 0.6,
//         ease: 'power2.inOut',
//         onComplete: () => setIsComplete(true)
//       });

//     }, loaderRef);

//     return () => ctx.revert();
//   }, []);

//   if (isComplete) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center space-y-4 animate-fade-in">
//           <h1 className="text-5xl font-bold text-gray-900">Welcome to Fizens</h1>
//           <p className="text-xl text-gray-600">Your finance management journey starts here</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={loaderRef}
//       className="fixed inset-0 bg-white flex items-center justify-center z-50"
//     >
//       <div className="text-center space-y-12 px-6">
//         {/* Logo */}
//         <div ref={logoRef} className="space-y-4">
//           <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20 transform rotate-3">
//             <svg
//               className="w-12 h-12 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900">fizens</h2>
//         </div>

//         {/* Loading text */}
//         <div ref={textRef}>
//           <p className="text-gray-500 text-lg font-medium">Loading your financial dashboard</p>
//         </div>

//         {/* Progress bar */}
//         <div className="w-80 max-w-full mx-auto space-y-4">
//           <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
//             <div
//               ref={progressRef}
//               className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all"
//               style={{ width: '0%' }}
//             />
//           </div>

//           {/* Percentage counter */}
//           <div className="flex items-center justify-center gap-1">
//             <span ref={percentRef} className="text-3xl font-bold text-gray-900 tabular-nums">
//               0
//             </span>
//             <span className="text-3xl font-bold text-gray-900">%</span>
//           </div>
//         </div>

//         {/* Loading dots animation */}
//         <div className="flex items-center justify-center gap-2">
//           {[0, 1, 2].map((i) => (
//             <div
//               key={i}
//               className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
//               style={{
//                 animationDelay: `${i * 0.15}s`,
//                 animationDuration: '0.8s'
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }