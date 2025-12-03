import React from 'react'
import ShinyBadge from '../ui/shiny-badge';
import TextAnimate from '../ui/TextAnimate';
import Image from 'next/image';
import { ChessQueenIcon } from 'lucide-react';

function MissionVisionSection({ mission, vision }: { mission: string; vision: string }) {
  return (
    <div className="max-w-7xl mx-auto py-20 md:py-32 space-y-32 px-4">
      
      {/* Header */}
      <div>
        <div className="mb-10 flex justify-center">
          <ShinyBadge
            text="Mission & Vision"
            className="p-4! text-lg! uppercase text-primary!"
            iconClassName="w-6! h-6! text-primary! "
            icon={<ChessQueenIcon />}
          />
        </div>
        <TextAnimate
          text="Custom software solutions built around your unique business needs."
          className="text-primary text-center md:text-6xl! max-w-3xl mx-auto"
        />
      </div>

      {/* Mission Section */}
      <div className="flex flex-col justify-between items-center bg-primary/5 p-6 rounded-4xl gap-12 md:gap-20">
        
        {/* Text */}
        <div className="w-full  space-y-4">
          <h2 className="text-primary  ">Mission</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{mission}</p>
        </div>

        {/* Images */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex justify-end">
            <Image
              src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
              alt="Mission Image"
              width={2000}
              height={2000}
              className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full"
            />
          </div>

          <div className="flex justify-start mt-6 sm:mt-8 md:mt-12">
            <Image
              src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
              alt="Mission Image"
              width={2000}
              height={2000}
              className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col justify-between items-center bg-primary/5 p-6 rounded-4xl gap-12 md:gap-20">
        
        {/* Text */}
        <div className="w-full  space-y-4">
          <h2 className="text-primary  ">Vision</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{vision}</p>
        </div>

        {/* Images */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex justify-end mt-6 sm:mt-8 md:mt-12">
            <Image
              src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
              alt="Vision Image"
              width={2000}
              height={2000}
              className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full"
            />
          </div>

          <div className="flex justify-start ">
            <Image
              src="https://cdn.prod.website-files.com/67188059a65126f4c0d6213e/683ec9ebc0242f0cbf30c127_musemind-teamwork-collaboration.avif"
              alt="Vision Image"
              width={2000}
              height={2000}
              className="rounded-3xl object-cover h-[220px] sm:h-[260px] md:h-[300px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVisionSection
