import React from 'react'
import InfiniteImageScroll from './InfiniteImageScroll';
import { aboutPageData } from '@/lib/data/dummy';

function AboutUsHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className='min-h-screen px-4'>
      <div className='min-h-[30vh] md:min-h-[40vh] flex flex-col justify-end items-center my-25'>
        <div className='flex flex-col items-center'>

          <div className='md:max-w-3xl mx-auto text-center space-y-6'>
            <h2  className=''>
              What we offer — clear direction, thoughtful design.
            </h2>
            <p  className='text-base text-gray-600'>
              From brand identity to digital interfaces, Osei helps creative businesses build clarity and presence. Each service is tailored, strategic, and designed to grow with you.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <InfiniteImageScroll images={aboutPageData.images} />
      </div>

    </div>
  )
}

export default AboutUsHero