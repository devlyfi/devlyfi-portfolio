import React from 'react'
import RecentWorkCards from './RecentWorksCard'

function RecentWorks() {
  return (
    <div 

      className=' w-full overflow-hidden  relative px-4 sm:px-6 lg:px-8 my-20 md:my-40' 
      style={{ 
        clear: 'both',
        position: 'relative',
        zIndex: 10
      }}
    > 
    
    
      <RecentWorkCards />
    </div>
  )
}

export default RecentWorks