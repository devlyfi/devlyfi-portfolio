"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { ArrowRight, Check, Phone } from "lucide-react";
import ShinyBadge from "../ui/shiny-badge";
import AnimatedButton from "../ui/AnimatedButton";

export function CTASection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    budget: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const budgetOptions = [
    "Less than $5K",
    "$5K - $10K",
    "$10K - $20K",
    "$20K - $50K",
    "More than $50K",
  ];

  return (
    <section className="relative py-20">
      <div className="relative overflow-hidden bg-[#2F6BE4] mx-4 rounded-[40px] text-white shadow-2xl my-20 py-20 lg:max-w-7xl lg:mx-auto">
        {/* Background subtle glow */}
        <div className="absolute inset-0 bg-white opacity-5"></div>

        
        {/* Top Center White Light Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-white/40 blur-[90px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column */}
              <div className="text-white">
                <div className="inline-block mb-8">
                  <ShinyBadge
                    text="Free Strategy Session Worth $799"
                    className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-medium"
                  ></ShinyBadge>
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
                  Transform Your Business with Custom Software
                  <span className="italic font-serif ml-3">At No Cost!</span>
                </h2>

                <div className="space-y-2 mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                    <p className="text-gray-100">
                      Get a response within 24 hours from our expert team
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                    <p className="text-gray-100">
                      We&apos;ll sign an NDA to protect your ideas and data
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                    <p className="text-gray-100">
                      Work with experienced developers and product specialists
                    </p>
                  </div>
                </div>

                {/* Profile Card */}
                <div className="bg-transparent rounded-2xl p-4 max-w-sm ">
                  <div className="mb-4">
                    <Image
                      src="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/571022156_2653897451638466_2939668280435083115_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dlJ_5c4xgtsQ7kNvwHVjhvP&_nc_oc=AdmbvCqQjhq8rtI2lWsUuTmILXD4yNR5U4s9nVQ5PAzd_Kp5RJdmts0eoArxxJbM5Js&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=L9HvsZDhphvsQhwd6JazCw&oh=00_Afj1MkXtQqcTWV3gN5T8Kl07DkpINffcIEgRfMAYRpmdfQ&oe=691C6DEA"
                      alt="Rasheduzzaman"
                      width={2000}
                      height={2000}
                      className="rounded-xl w-3/4"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Rasheduzzaman
                  </h3>
                  <p className="text-gray-200 mb-4">CEO & Co-founder</p>

                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-gray-100">
                      +1 (716) 503-6335
                    </span>
                  </div>

                  <a
                    href="#"
                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  >
                    Book a Call Directly
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-white font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
                      required
                    />
                  </div>

                  {/* Email and WhatsApp */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="yourmail@gmail.com"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="block text-white font-medium mb-2"
                      >
                        Whatsapp Number
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        placeholder="1 123 1234567"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* Project Budget */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Project Budget
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, budget: option })
                          }
                          className={`px-4 py-3 rounded-lg border transition-all ${
                            formData.budget === option
                              ? "bg-white/20 border-white/40 text-white shadow-lg"
                              : "bg-white/10 border-white/20 text-gray-200 hover:border-white/40 hover:bg-white/15"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="projectDetails"
                      className="block text-white font-medium mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDetails: e.target.value,
                        })
                      }
                      placeholder="I want to redesign my website.."
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all resize-none backdrop-blur-sm"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  {/* <button
                    type="submit"
                    className="w-full py-4 px-6 bg-white text-[#2F6BE4] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl"
                  >
                    Get Your Free Strategy Session
                  </button> */}
                  <div className="flex justify-center">
                    <AnimatedButton
                    text="Get Your Free Strategy Session"
                    className="flex justify-center items-center bg-transparent border-2 font-bold rounded-full "
                    textClass="text-white "
                  />  
                  </div>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}