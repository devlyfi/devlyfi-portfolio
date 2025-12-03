"use client";

import React, { useEffect, useRef } from "react";
import { Linkedin, Twitter, Mail, BoltIcon, ChessKingIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ShinyBadge from "../ui/shiny-badge";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const team = [
  {
    id: 1,
    name: "Bayu Pratama",
    role: "CEO",
    image: "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWwIHT8kfbjtysF6rpUogsGtcmbR4X1moa1yZtHhfWaq4BICbo-Mi96fe1pF88erGxmmUex4VHPh8UoQhWPtAw&_nc_ohc=JCVUTvNqSGEQ7kNvwG8P8jA&_nc_oc=AdkjvUYEfviNQ8pXVuVsTrcQfNLQmWrWLZlIluEFn9BHamfnySPoeSj60KHS9rBzsXY&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=N5_T_tdO3nRlt9RBHMS7Pw&oh=00_AfjbqacnBPWkDN2Pf-kcxZGGNbLQFlnfN9tjmRDNdilrLA&oe=69330FAA",
    quote: "Building the future isn't about code — it's about vision and trust.",
  },
  {
    id: 2,
    name: "Putri Ananda",
    role: "CTO",
    image: "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWwIHT8kfbjtysF6rpUogsGtcmbR4X1moa1yZtHhfWaq4BICbo-Mi96fe1pF88erGxmmUex4VHPh8UoQhWPtAw&_nc_ohc=JCVUTvNqSGEQ7kNvwG8P8jA&_nc_oc=AdkjvUYEfviNQ8pXVuVsTrcQfNLQmWrWLZlIluEFn9BHamfnySPoeSj60KHS9rBzsXY&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=N5_T_tdO3nRlt9RBHMS7Pw&oh=00_AfjbqacnBPWkDN2Pf-kcxZGGNbLQFlnfN9tjmRDNdilrLA&oe=69330FAA",
    quote: "Great technology starts with empathy and ends with simplicity.",
  },
  {
    id: 3,
    name: "Gilang Nugroho",
    role: "VP of Engineering",
    image: "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWwIHT8kfbjtysF6rpUogsGtcmbR4X1moa1yZtHhfWaq4BICbo-Mi96fe1pF88erGxmmUex4VHPh8UoQhWPtAw&_nc_ohc=JCVUTvNqSGEQ7kNvwG8P8jA&_nc_oc=AdkjvUYEfviNQ8pXVuVsTrcQfNLQmWrWLZlIluEFn9BHamfnySPoeSj60KHS9rBzsXY&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=N5_T_tdO3nRlt9RBHMS7Pw&oh=00_AfjbqacnBPWkDN2Pf-kcxZGGNbLQFlnfN9tjmRDNdilrLA&oe=69330FAA",
    quote: "We don't just write code — we architect reliability.",
  },
  {
    id: 4,
    name: "Dinda Kumalasari",
    role: "VP of Design",
    image: "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWwIHT8kfbjtysF6rpUogsGtcmbR4X1moa1yZtHhfWaq4BICbo-Mi96fe1pF88erGxmmUex4VHPh8UoQhWPtAw&_nc_ohc=JCVUTvNqSGEQ7kNvwG8P8jA&_nc_oc=AdkjvUYEfviNQ8pXVuVsTrcQfNLQmWrWLZlIluEFn9BHamfnySPoeSj60KHS9rBzsXY&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=N5_T_tdO3nRlt9RBHMS7Pw&oh=00_AfjbqacnBPWkDN2Pf-kcxZGGNbLQFlnfN9tjmRDNdilrLA&oe=69330FAA",
    quote: "Design is how it works — beauty is just the beginning.",
  },
  {
    id: 5,
    name: "Kartika Sari",
    role: "Senior Designer",
    image: "https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWwIHT8kfbjtysF6rpUogsGtcmbR4X1moa1yZtHhfWaq4BICbo-Mi96fe1pF88erGxmmUex4VHPh8UoQhWPtAw&_nc_ohc=JCVUTvNqSGEQ7kNvwG8P8jA&_nc_oc=AdkjvUYEfviNQ8pXVuVsTrcQfNLQmWrWLZlIluEFn9BHamfnySPoeSj60KHS9rBzsXY&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=N5_T_tdO3nRlt9RBHMS7Pw&oh=00_AfjbqacnBPWkDN2Pf-kcxZGGNbLQFlnfN9tjmRDNdilrLA&oe=69330FAA",
    quote: "Every pixel has a purpose. Every interaction tells a story.",
  },
  {
    id: 6,
    name: "Ardhito Prayogo",
    role: "Senior Engineer",
    image: "/team/ardhito.jpg",
    quote: "Clean code today saves tomorrow.",
  },
  {
    id: 7,
    name: "Paramitha",
    role: "Social Media Specialist",
    image: "/team/paramitha.jpg",
    quote: "Your brand deserves a voice — loud, clear, and human.",
  },
  {
    id: 8,
    name: "Samsul Eka",
    role: "Partnerships Manager",
    image: "/team/samsul.jpg",
    quote: "Great partnerships are built on trust, timing, and shared ambition.",
  },
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Hover animation effect
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".team-card");
    if (!cards) return;

    cards.forEach((card) => {
      const overlay = card.querySelector(".overlay") as HTMLElement;
      const content = card.querySelector(".card-content") as HTMLElement;

      const enter = () => {
        gsap.to(overlay, { y: "0%", duration: 0.6, ease: "power3.out" });
        gsap.to(content, { opacity: 0, duration: 0.3 });
      };

      const leave = () => {
        gsap.to(overlay, { y: "100%", duration: 0.6, ease: "power3.in" });
        gsap.to(content, { opacity: 1, duration: 0.5, delay: 0.2 });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  // ScrollTrigger animation
  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !headerRef.current) return;

    // Animate header text
    const headerText = headerRef.current.querySelector("h2");
    if (headerText) {
      gsap.from(headerText, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate badge
    const badge = headerRef.current.querySelector(".shiny-badge");
    if (badge) {
      gsap.from(badge, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate team cards with stagger
    const cards = containerRef.current.querySelectorAll(".team-card");
    gsap.from(cards, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
<section ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    {/* Header with Badge */}
    <div ref={headerRef} className="mb-16 md:mb-24">
      <div className="flex justify-center mb-8">
        <ShinyBadge
          text="Meet the team"
          icon={<ChessKingIcon className="w-5 h-5" />}
          className="p-4! text-lg! text-primary!"
          iconClassName="text-blue-600"
        />
      </div>

      <div className="text-center my-20">
        <h2 className="">
          Humans behind <span className="text-blue-600 font-serif font-medium italic">AI</span>
        </h2>
      </div>
    </div>

    {/* Team Grid */}
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12"
    >
      {team.map((member) => (
        <div
          key={member.id}
          className="team-card group relative overflow-hidden cursor-pointer"
          style={{
            // Updated clipPath for 45-degree angle
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
          }}
        >
          {/* Default View */}
          <div className="card-content relative z-10">
            <div className="aspect-3/4 relative overflow-hidden">
              <Image
                src={
                  member.image ||
                  `https://via.placeholder.com/400x533/f3f4f6/1e293b?text=${member.name
                    .split(" ")[0]
                    .charAt(0)}`
                }
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Name & Role */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm opacity-90">{member.role}</p>
            </div>
          </div>

          {/* Hover Overlay – Slides Up with Secondary Color */}
          <div className="overlay absolute inset-0 bg-[#EFF4FF] z-20 translate-y-full">
            <div className="flex flex-col justify-end h-full p-8 text-primary">
              <p className="text-base font-medium leading-relaxed mb-8 italic">
                "{member.quote}"
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-primary/20 backdrop-blur-sm rounded-full hover:bg-primary/30 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-primary/20 backdrop-blur-sm rounded-full hover:bg-primary/30 transition"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-primary/20 backdrop-blur-sm rounded-full hover:bg-primary/30 transition"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Remove the square accent div since we're using clipPath */}
          {/* <div className="absolute top-0 right-0 w-3 h-3 bg-secondary z-30" /> */}
        </div>
      ))}
    </div>
  </div>
</section>
  );
}