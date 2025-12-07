import React from 'react'
import RecentWorkCards from './RecentWorksCard'
import ShinyBadge from '../ui/shiny-badge'

function RecentWorks() {
  return (
    <div 

      className=' md:max-w-7xl mx-auto min-h-screen my-40 flex flex-col justify-center' 
      
    > 
    <div className="text-center mb-16">
              <div className="mb-10">
                <ShinyBadge
                  text="Our Experience"
                  className="p-4! text-lg! uppercase bg-[#ffff]! "
                  shineColor="#CAE16E"
                ></ShinyBadge>
              </div>
    
              <h2 className=" max-w-3xl mx-auto text-4xl md:text-5xl font-thin!">
                Proven Track Record of Excellence
              </h2>
            </div>
    
      <RecentWorkCards />
    </div>
  )
}

export default RecentWorks