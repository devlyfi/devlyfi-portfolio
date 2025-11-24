import React from "react";
import CustomButton from "../shared/CustomButton";
import RecentWorkCards from "../ui/RecentWorkCards";
import ShinyBadge from "../ui/shiny-badge";
import TextAnimate from "../ui/TextAnimate";

export default function RecentWorks() {
  return (
    <div
      className="recent-works-responsive-margin w-full md:w-4/5 mx-auto relative px-4 sm:px-6 lg:px-8 "
      style={{
        clear: "both",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end my-14 md:my-24 lg:my-32 relative gap-8 lg:gap-0">
        <div className="w-full lg:w-auto">
          {/* <div className="font-bold recent-works">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl uppercase  recent-text leading-none">
              Recent
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl uppercase font-custom work work-text leading-none">
              Works.
            </p>
          </div> */}
          <div className="mb-10">
            <ShinyBadge
              text="Recent Works"
              className="p-4! text-lg! uppercase"
            ></ShinyBadge>
          </div>
          <div className="mt-3 sm:mt-4 lg:mt-5  ">
            {/* <h2 className="  max-w-3xl mx-auto text-4xl md:text-5xl  font-thin! ">
              Proven Success in Every Industry
            </h2> */}
            <TextAnimate text="Proven Success in Every Industry"></TextAnimate>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:justify-end lg:items-end lg:h-full">
          <CustomButton
            text="Explore Work"
            className="font-custom border-2 border-[#121315] p-3 sm:p-4 rounded-full uppercase text-sm sm:text-base lg:text-lg transition-colors duration-300 whitespace-nowrap lg:self-end"
            textColor="black"
            hoverColor="#121315"
          ></CustomButton>
        </div>
      </div>
      <RecentWorkCards />
    </div>
  );
}
