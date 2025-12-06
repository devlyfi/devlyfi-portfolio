import React from 'react'
import InfiniteImageScroll from './InfiniteImageScroll';
import { aboutPageData } from '@/lib/data/dummy';

function AboutUsHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className=' min-h-screen overflow-hidden flex flex-col justify-center items-center space-y-10 md:space-y-20'>
     <div className=' '>
        <div className='max-w-3xl lg:max-w-7xl mx-auto  text-center'>
        <h2 className=" md:text-6xl">
        {title} 
      </h2>
      <br />
      <p className="text-base text-muted-foreground md:text-lg">
        {subtitle}
      </p>
      </div>
     </div>
     <div className=''>
      <InfiniteImageScroll images={aboutPageData.images} />
     </div>
      
    </div>
  )
}

export default AboutUsHero