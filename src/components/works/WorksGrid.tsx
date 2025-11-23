"use client";

import { Work } from "@/lib/types";
import Image from "next/image";
import CustomButton from "../shared/CustomButton";

// Reusable: Full-width alternating item
const FullWidthWorkItem = ({ work, index }: { work: Work; index: number }) => {
  const isImageOnLeft = (index / 2) % 2 === 0;

  return (
    <div className="md:max-w-7xl rounded-4xl bg-zinc-50 mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
      {isImageOnLeft ? (
        <>
          {/* Image Left */}
          <div className="w-full lg:w-1/2">
            <Image
              className="rounded-4xl w-full h-auto object-cover"
              src={work.thumbnail}
              height={2000}
              width={2000}
              alt={work.title}
            />
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-1/2 text-center lg:text-end px-6">
            <h2 className="">
              {work.title}{" "}
              <span className="text-gray-800 font-semibold text-lg align-text-top">
                {work.year}
              </span>
            </h2>
            <br />
            <h3 className="text-xl xl:text-2xl font-thin">{work.category}</h3>

            <div className="my-10 hidden xl:flex flex-wrap justify-center lg:justify-end gap-3">
              {work.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="border-2 rounded-full px-2 py-1 border-[#121315] text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="my-5">
              <CustomButton
                text="View Details"
                textColor="black"
                hoverColor="#121315"
                className="border-2 border-[#121315]"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text Left */}
          <div className="w-full lg:w-1/2 text-center lg:text-start px-6 order-2 lg:order-1">
            <h2 className="">
              {work.title}{" "}
              <span className="text-gray-800 font-semibold text-lg align-text-top">
                {work.year}
              </span>
            </h2>
            <br />
            <h3 className="text-xl xl:text-2xl font-thin">{work.category}</h3>

            <div className="my-10 hidden xl:flex flex-wrap justify-center lg:justify-start gap-3">
              {work.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="border-2 rounded-full px-2 py-1 border-[#121315] text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="my-5">
              <CustomButton
                text="View Details"
                textColor="black"
                hoverColor="#121315"
                className="border-2 border-[#121315]"
              />
            </div>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Image
              className="rounded-4xl w-full h-auto object-cover"
              src={work.thumbnail}
              height={2000}
              width={2000}
              alt={work.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

// Reusable: Single item in a paired row
const PairedWorkItem = ({
  work,
  reverse = false,
}: {
  work: Work;
  reverse?: boolean;
}) => (
  <div
    className={`w-full rounded-4xl bg-zinc-50 flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } justify-between items-center gap-8`}
  >
    <div className="w-full lg:w-1/2">
      <Image
        className="rounded-4xl w-full h-auto object-cover"
        src={work.thumbnail}
        height={2000}
        width={2000}
        alt={work.title}
      />
    </div>

    <div className="w-full lg:w-1/2 text-center lg:text-left p-4">
      <h3 className="text-2xl md:text-3xl font-thin">
        {work.title}{" "}
        <span className="text-gray-800 font-semibold text-lg align-text-top">
          {work.year}
        </span>
      </h3>
      <br />
      <h3 className="text-xl xl:text-2xl font-thin">{work.category}</h3>

      <div className="my-10 hidden xl:flex flex-wrap justify-center lg:justify-start gap-3">
        {work.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="border-2 rounded-full px-2 py-1 border-[#121315] text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="my-5">
        <CustomButton
          text="View Details"
          textColor="black"
          hoverColor="#121315"
          className="border-2 border-[#121315]"
        />
      </div>
    </div>
  </div>
);

interface WorkGridProps {
  works: Work[];
}

export default function WorkGrid({ works }: WorkGridProps) {
  return (
    <div className="space-y-40 p-4">
      {works.map((work, index) => {
        const isEvenIndex = index % 2 === 0;

        if (isEvenIndex) {
          // Full-width alternating row
          return (
            <FullWidthWorkItem
              key={work.id || index}
              work={work}
              index={index}
            />
          );
        }

        // Paired row: current (odd) + next (even) if exists
        const nextWork = works[index + 1];

        return (
          <div
            key={work.id || index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 p-4 md:px-8"
          >
            <PairedWorkItem work={work} />
            {nextWork ? (
              <PairedWorkItem work={nextWork} reverse={true} />
            ) : (
              <div />
            )}
          </div>
        );
      })}
    </div>
  );
}
