import React from "react";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

const servicesColumn1 = [
  "Web Design",
  "Washow",
  "MVP Development",
  "Startup MVP",
  "SaaS Design",
  "MVP Web",
  "Mobile App",
  "Branding",
  "Logo Design",
  "Design System",
  "Graphic Design",
  "MVP App",
];

const servicesColumn2 = [
  "UI/UX Design",
  "UI/UX Consulting",
  "UX Audit",
  "UX Research",
  "UX Usability Testing",
  "Wireframe & Prototype",
  "Brand Identity",
  "Corporate Identity",
  "Brand Strategy",
  "Motion Graphics",
];

const quickLinks = [
  "Work",
  "About",
  "Contact",
  "Pricing",
  "Career",
  "Blog",
  "Sitemap",
  "Privacy Policy",
  "Terms & Condition",
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-[90vh] w-full bg-color overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 w-full h-full z-10 opacity-50">
        <iframe
          src="https://my.spline.design/worldplanet-inmHh7fVCul1jUFrNRYlotVU"
          frameBorder="0"
          width="100%"
          height="100%"
          className="scale-100"
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 md:px-12 py-12 md:py-16 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full ">
          {/* Left Section - Description */}
          <div className="flex-1 space-y-4 text-center ">
            <h2 className="text-white xl:text-6xl">About Devlyfi</h2>
            <p className="font-light text-gray-300">
              Devlyfi is a modern digital solutions company providing web,
              mobile, and SaaS design services to help startups and businesses
              grow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 justify-center">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex-1 space-y-4 text-center">
            <h3 className="text-white text-lg md:text-xl font-semibold pb-2">
              SERVICES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                {servicesColumn1.map((item, index) => (
                  <Link
                    href={item}
                    key={index}
                    className="text-gray-300 text-sm md:text-base font-light cursor-pointer hover:text-white transition-colors"
                  >
                    <p className="mb-2">{item}</p>
                  </Link>
                ))}
              </div>
              <div className="space-y-1.5">
                {servicesColumn2.map((item, index) => (
                  <Link
                    href={item}
                    key={index}
                    className="text-gray-300 text-sm md:text-base font-light cursor-pointer hover:text-white transition-colors"
                  >
                    <p className="mb-2">{item}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 space-y-4 text-center md:text-end">
            <h3 className="text-white text-lg md:text-xl font-semibold pb-2">
              QUICK LINK
            </h3>
            <div className="space-y-1.5!">
              {quickLinks.map((item, index) => (
                <Link
                  href={item}
                  key={index}
                  className="text-gray-300 text-sm md:text-base font-light cursor-pointer hover:text-white transition-colors "
                >
                  <p className="mb-2">{item}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-6">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {year} Devlyfi. All rights reserved.
          </p>
        </div>
      </div>

      {/* DEVLYFI Large Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 text-center pointer-events-none">
        <h1 className="text-white text-[15vw] md:text-[12vw] font-bold tracking-wide opacity-90">
          DEVLYFI
        </h1>
      </div>
    </div>
  );
}

export default Footer;
