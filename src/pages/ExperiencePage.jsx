import React from 'react'

export const ExperiencePage = () => {
  return (
    <div id = "Experience" className='text-white text-center mt-20 mb-20 px-4 max-w-screen-lg mx-auto'>

      {/* Responsive Grid: Switch to 1 column on smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        
        {/* Title */}
        <div className="text-4xl md:text-3xl text-pink-400 col-span-full mb-8">Experience</div>

        {/* Experience Entries */}
        <div className="flex flex-col items-center rounded-xl border-blue-400 border-2 w-full md:w-80 mx-auto p-4">
          <h2 className='text-4xl md:text-2xl text-blue-400 font-bold my-2'>2022</h2>
          <h3 className='text-lg md:text-base text-center'>IT SUPPORT ENGINEER | FORTITUDE NICSA GLOBAL</h3>
        </div>
        
        <div className="flex flex-col items-center rounded-xl border-blue-400 border-2 w-full md:w-80 mx-auto p-4">
          <h2 className='text-4xl md:text-2xl text-blue-400 font-bold my-2'>2021</h2>
          <h3 className='text-lg md:text-base text-center'>IT SUPPORT | MONASH UNIVERSITY</h3>
        </div>
        
        <div className="flex flex-col items-center rounded-xl border-blue-400 border-2 w-full md:w-80 mx-auto p-4">
          <h2 className='text-4xl md:text-2xl text-blue-400 font-bold my-2'>2019</h2>
          <h3 className='text-lg md:text-base text-center'>HELP DESK SUPPORT | MICROSOFT</h3>
        </div>
      </div>
    </div>
  )
}

