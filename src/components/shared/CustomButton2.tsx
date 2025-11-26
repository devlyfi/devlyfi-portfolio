"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface CustomButtonProps {
  text?: string;
  href?: string;
  borderColor?: string;
  textColor?: string;
  rippleColor?: string;
  className?: string;
  onClick?: () => void;
}

export default function CustomButton2({
  text = "View more",
  href,
  borderColor = "rgb(166, 212, 255)",
  textColor = "rgb(0, 0, 0)",
  rippleColor = "rgb(26, 26, 26)",
  className = "",
  onClick,
}: CustomButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);
  //   const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    // setIsHovered(true);
    if (!buttonRef.current || !bgRef.current || !textRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Set initial position for background
    gsap.set(bgRef.current, {
      x: `${x}%`,
      y: `${y}%`,
      scale: 0,
      opacity: 1,
    });

    // Animate background to fill entire button
    gsap.to(bgRef.current, {
      scale: 3, // Enough to cover entire button
      duration: 1,
      ease: "power2.out",
    });

    // Change text color
    gsap.to(textRef.current, {
      color: "#ffffff",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // setIsHovered(false);
    if (bgRef.current && textRef.current) {
      // Animate background out
      gsap.to(bgRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      // Change text color back
      gsap.to(textRef.current, {
        color: textColor,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const buttonContent = (
    <>
      <span className="btn-more-title relative z-10 overflow-hidden">
        <span
          ref={textRef}
          data-text={text}
          className="inline-block transition-colors duration-300"
          style={{ color: textColor }}
        >
          {text}
        </span>
      </span>

      {/* Background that expands from cursor position */}
      <span className="absolute inset-0 overflow-hidden rounded-inherit pointer-events-none">
        <span
          ref={bgRef}
          className="absolute rounded-full opacity-0"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: rippleColor,
            left: "-50%",
            top: "-50%",
          }}
        />
      </span>
    </>
  );

  const buttonClasses = `
    btn-more
    relative
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    font-medium
    border-2
    rounded-full
    overflow-hidden
    bg-transparent
    transition-all
    duration-300
    group
    ${className}
  `;

  const buttonStyle = {
    borderColor: borderColor,
  };

  if (href) {
    return (
      <div className="btn-container opacity-100 visible">
        <div className="btn-mouse-area">
          <Link
            ref={buttonRef as React.RefObject<HTMLAnchorElement>}
            href={href}
            className={buttonClasses}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
          >
            {buttonContent}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="btn-container opacity-100 visible">
      <div className="btn-mouse-area">
        <button
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
          className={buttonClasses}
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  );
}
