"use client";

import React from "react";

const AnimatedButton = () => {
  return (
    <button
      className="
        group relative flex items-center gap-1 px-9 py-2 font-semibold
        text-white rounded-full cursor-pointer overflow-hidden
        border-2 border-transparent shadow-[0_0_0_2px_#fff]
        transition-[all_0.6s_cubic-bezier(0.23,1,0.32,1)]
        hover:shadow-[0_0_0_12px_transparent]
        hover:text-[#212121] hover:rounded-lg
        active:scale-[0.95]
      "
    >
      {/* LEFT ARROW */}
      <svg
        viewBox="0 0 24 24"
        className="
          absolute left-[-25%] w-6 fill-[#ffff] z-10
          transition-[all_0.8s_cubic-bezier(0.23,1,0.32,1)]
          group-hover:left-4
          group-hover:fill-[#212121]
        "
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>

      {/* BUTTON TEXT */}
      <span
        className="
          relative z-10 -translate-x-3
          transition-[all_0.8s_cubic-bezier(0.23,1,0.32,1)]
          group-hover:translate-x-3
        "
      >
        Let&apos;s Connect
      </span>

      {/* EXPANDING CIRCLE */}
      <span
        className="
          absolute top-1/2 left-1/2 w-5 h-5 opacity-0 rounded-[10%]
          bg-white -translate-x-1/2 -translate-y-1/2
          transition-[all_0.8s_cubic-bezier(0.23,1,0.32,1)]
          group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100
        "
      ></span>

      {/* RIGHT ARROW */}
      <svg
        viewBox="0 0 24 24"
        className="
          absolute right-4 w-6 fill-white z-10
          transition-[all_0.8s_cubic-bezier(0.23,1,0.32,1)]
          group-hover:right-[-25%]
          group-hover:fill-[#212121]
        "
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
};

export default AnimatedButton;
