"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ShinyBadge from "../ui/shiny-badge";
import { Plus } from "lucide-react";

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
  theme?: "dark" | "light";
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

  // Modern styling constants
  const borderColor = isDark ? "border-white/10" : "border-black/5";
  const questionColor = isDark 
    ? (isOpen ? "text-white" : "text-white/60") 
    : (isOpen ? "text-black" : "text-black/60");
  const answerColor = isDark ? "text-white/70" : "text-gray-600";
  const hoverColor = isDark ? "group-hover:text-white" : "group-hover:text-black";

  useEffect(() => {
    if (contentRef.current && iconRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, { 
            height: "auto", 
            opacity: 1, 
            duration: 0.5, 
            ease: "power2.out" 
        });
        gsap.to(iconRef.current, { 
            rotation: 45, 
            duration: 0.3, 
            ease: "back.out(1.7)" 
        });
      } else {
        gsap.to(contentRef.current, { 
            height: 0, 
            opacity: 0, 
            duration: 0.4, 
            ease: "power2.in" 
        });
        gsap.to(iconRef.current, { 
            rotation: 0, 
            duration: 0.3, 
            ease: "power2.inOut" 
        });
      }
    }
  }, [isOpen]);

  return (
    <div className={`border-b ${borderColor} last:border-none`}>
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-8 flex items-start justify-between group text-left focus:outline-none cursor-pointer"
      >
        <span
          className={`text-lg md:text-2xl font-light tracking-wide transition-colors duration-300 pr-8 ${questionColor} ${hoverColor}`}
        >
          {item.question}
        </span>
        
        <div 
            ref={iconRef} 
            className={`flex-shrink-0 mt-1 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}
        >
          <div className={`p-2 rounded-full border ${isDark ? "border-white/20" : "border-black/10"}`}>
             <Plus className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden h-0 opacity-0"
      >
        <div className="pb-8 max-w-3xl">
          <p className={`text-base md:text-lg leading-relaxed font-light ${answerColor}`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ------------------ Main FAQ Component ------------------ */
const FAQ: React.FC<FAQProps> = ({
  title = "FAQ",
  subtitle = "Common Queries",
  items,
  className = "",
  theme = "dark",
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Allow single open item for accordion effect (optional, but cleaner for large questions)
  // Or keep multiple open. Let's toggle.
  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.clear(); 
        updated.add(id);
      }
      return updated;
    });
  };

  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-[#111]" : "bg-white"; // Slightly lighter dark bg
  const titleColor = isDark ? "text-white" : "text-black";

  return (
    <section className={`w-full py-20 md:py-28 ${bgColor} ${className}`}>
      <div className="w-full px-4 md:max-w-7xl mx-auto font-sans">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-20 gap-6">
            <div className="space-y-4">
                <ShinyBadge text={title} className="bg-transparent border border-current opacity-60 inline-flex" />
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight ${titleColor}`}>
                    {subtitle}
                </h2>
            </div>
            <div className={`max-w-md ${isDark ? "text-white/60" : "text-black/60"}`}>
                <p className="text-base font-light leading-relaxed">
                    Have questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out to our team.
                </p>
            </div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
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
