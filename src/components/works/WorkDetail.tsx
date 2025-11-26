"use client";

import { Work } from "@/lib/types";
import Image from "next/image";

export default function WorkDetails({ work }: { work: Work }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-color flex justify-center items-center px-4 sm:px-6 lg:px-8 ">
        <div className="text-white text-center w-full max-w-4xl">
          <h2 className="lg:text-6xl ">{work.title}</h2>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 p-4">
            <p className="text-base sm:text-lg">{work.category}</p>
            <p className="text-base sm:text-lg">{work.client}</p>
            <p className="text-base sm:text-lg">{work.year}</p>
          </div>
        </div>
      </section>

      {/* First Image Section */}
      <section className="max-w-7xl mx-auto my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <Image
            className="rounded-3xl sm:rounded-[40px] lg:rounded-[80px] w-full h-auto max-h-[80vh] object-cover"
            src={work.thumbnail}
            alt={work.title}
            width={4000}
            height={4000}
            priority
          />
        </div>
        <div className="my-12 sm:my-16 lg:my-20 space-y-6 lg:space-y-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            illum?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            expedita deleniti neque iste at iusto sit odit corporis placeat
            eveniet repudiandae quis veniam ut commodi, nihil perspiciatis eum
            earum consectetur.
          </p>
        </div>
      </section>

      {/* Two Images Section */}
      <section className="max-w-7xl mx-auto my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
          <Image
            className="rounded-3xl sm:rounded-[40px] lg:rounded-[80px] w-full lg:w-1/2 h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
            src={work.thumbnail}
            alt={work.title}
            width={4000}
            height={4000}
          />
          <Image
            className="rounded-3xl sm:rounded-[40px] lg:rounded-[80px] w-full lg:w-1/2 h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
            src={work.thumbnail}
            alt={work.title}
            width={4000}
            height={4000}
          />
        </div>
        <div className="my-12 sm:my-16 lg:my-20 space-y-6 lg:space-y-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            illum?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            expedita deleniti neque iste at iusto sit odit corporis placeat
            eveniet repudiandae quis veniam ut commodi, nihil perspiciatis eum
            earum consectetur.
          </p>
        </div>
      </section>

      {/* Image + Text Side by Side Section */}
      <section className="max-w-7xl mx-auto my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              className="rounded-3xl sm:rounded-[40px] lg:rounded-[80px] w-full h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
              src={work.thumbnail}
              alt={work.title}
              width={4000}
              height={4000}
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 ">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              illum?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              expedita deleniti neque iste at iusto sit odit corporis placeat
              eveniet repudiandae quis veniam ut commodi, nihil perspiciatis eum
              earum consectetur.
            </p>
          </div>
        </div>
      </section>

      {/* Staggered Images Section */}
      <section className="max-w-7xl mx-auto my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
          <Image
            className="rounded-3xl sm:rounded-[40px] lg:rounded-[80px] w-full lg:w-1/2 h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover"
            src={work.thumbnail}
            alt={work.title}
            width={4000}
            height={4000}
          />
          <Image
            className="rounded-3xl sm:rounded-[40px] lg:rounded-[80px] w-full lg:w-1/2 h-[50vh] sm:h-[40vw] lg:h-[35vw] object-cover lg:translate-y-12 xl:translate-y-16"
            src={work.thumbnail}
            alt={work.title}
            width={4000}
            height={4000}
          />
        </div>
        <div className="my-12 sm:my-16 lg:my-20 space-y-6 lg:space-y-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            illum?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            expedita deleniti neque iste at iusto sit odit corporis placeat
            eveniet repudiandae quis veniam ut commodi, nihil perspiciatis eum
            earum consectetur.
          </p>
        </div>
      </section>
    </div>
  );
}
