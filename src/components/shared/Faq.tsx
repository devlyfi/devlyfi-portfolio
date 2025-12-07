"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import ShinyBadge from "../ui/shiny-badge";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
  theme?: "dark" | "light"; // NEW
}

/* ------------------ Single FAQ Item ------------------ */
const FAQSingleItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  theme: "dark" | "light";
}> = ({ item, isOpen, onToggle, theme }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const isDark = theme === "dark";

  const textColor = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-white/70" : "text-black/70";
  //   const borderColor = isDark ? "border-white/10" : "border-black/10";
  const hoverBg = isDark ? "hover:bg-secondary" : "hover:bg-primary/5";

  useEffect(() => {
    if (contentRef.current && iconRef.current) {
      if (isOpen) {
        gsap.set(contentRef.current, { height: "auto" });
        const autoHeight = contentRef.current.offsetHeight;
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          { height: autoHeight, opacity: 1, duration: 0.7, ease: "power3.out" }
        );
        gsap.to(iconRef.current, { rotation: 180, duration: 0.4 });
      } else {
        gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.4 });
        gsap.to(iconRef.current, { rotation: 0, duration: 0.4 });
      }
    }
  }, [isOpen]);

  return (
    <div className={` `}>
      <button
        onClick={onToggle}
        className={`w-full py-4 px-2 flex items-center justify-between group transition-colors duration-300 rounded-lg ${hoverBg}`}
      >
        <h3
          className={`text-lg sm:text-2xl font-thin transition-colors duration-300 pr-4 ${textColor}`}
        >
          {item.question}
        </h3>
        <div ref={iconRef}>
          <ChevronDown
            className={`w-5 h-5 ${isDark ? "text-white/60" : "text-black/60"}`}
          />
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="pb-6 pr-8 px-4 ">
          <p className={`${textSecondary} font-custom leading-relaxed text-lg`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ------------------ Main FAQ Component ------------------ */
const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know",
  items,
  className = "",
  theme = "dark", // default
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const isDark = theme === "dark";

  const bgColor = isDark ? "bg-[#121315]" : "bg-white";
  // const subtitleColor = isDark ? "text-white/60" : "text-black/60";
  const titleColor = isDark ? "text-white" : "text-black";

  return (
    <section
      className={`w-full  ${bgColor} ${className}`}
    >
      <div className="w-full px-4 md:max-w-6xl mx-auto font-custom">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 md:mb-24 max-w-96 md:max-w-3xl mx-auto">
          <div className="flex justify-center">
            <div className="text-center lg:text-left my-14 md:my-20 ">
              <ShinyBadge
                text={title}
                className="inline-block  py-2 rounded-full border uppercase text-lg! tracking-wider"
              >
                {/* Why Design Monks? */}
              </ShinyBadge>
            </div>
          </div>

          <h2
            className={`leading-tight ${titleColor} font-custom`}
          >
            {subtitle}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-10">
          {items.map((item) => (
            <FAQSingleItem
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
