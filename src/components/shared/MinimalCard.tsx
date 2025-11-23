import { Service } from "@/lib/types";
import React from "react";

const MinimalCard = ({ service }: { service: Service }) => {
  return (
    <article
      className="relative overflow-hidden sm:rounded-3xl col-span-2 md:col-span-3 lg:col-span-4 min-h-[220px] sm:min-h-[280px] md:min-h-[500px] flex flex-col  bg-cover   rounded-2xl pt-5 pr-5 pb-5 pl-5 w-full max-w-lg"
      style={{
        backgroundImage: `url('${service?.cover}')`,
      }}
    >
      <div className="flex items-center justify-between text-zinc-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-lucide="arrow-down"
          className="lucide lucide-arrow-down w-4 h-4"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>

      <div className="mt-auto text-xl font-semibold text-gray-800">
        {service?.title}
      </div>
    </article>
  );
};

export default MinimalCard;
