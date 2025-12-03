import React from "react";
import CustomButton from "../shared/CustomButton";
import RecentWorkCards from "../ui/RecentWorkCards";
import ShinyBadge from "../ui/shiny-badge";
import TextAnimate from "../ui/TextAnimate";
import AnimatedButton from "../ui/AnimatedButton";
import { redirect } from "next/navigation";

export default function RecentWorks() {
  return (
    <div
      className=" w-full md:w-4/5 mx-auto relative px-4 sm:px-6 lg:px-8 my-20 md:my-40"
      style={{
        clear: "both",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="flex flex-col justify-center items-center text-center my-8 sm:my-12 md:my-24 lg:my-32 gap-6">
        {/* Badge */}
        <ShinyBadge
          text="Recent Works"
          className="p-4! text-lg! uppercase"
        />

        {/* Title */}
        <div className="max-w-3xl mx-auto px-4">
          <TextAnimate text="Proven Success in Every Industry" />
        </div>
      </div>

      {/* RecentWorkCards handles its own max-width */}
      <RecentWorkCards />
    </div>
  );
}


