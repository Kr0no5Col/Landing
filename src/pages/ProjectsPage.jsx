import React from 'react'



export const PortafolioPage = () => {
  return (
    <>
    <h1 id = "Projects" className='text-center text-pink-400 text-4xl my-20'>Projects</h1>
    <div className='flex flex-row gap-10 justify-center'>
      <div className='w-80 h-80 bg-slate-900 rounded-2xl border-[0.1rem] '>
        <h1 className=' text-white text-center m-4 text-2xl font-semibold'>To Do list</h1>
        <img src="/Images/01todo.jpg" alt="imagen" className='w-auto rounded-b-xl' />
        <a href="https://github.com/Kr0no5Col/To-do-list"><img src="/Images/LogoGithuh.png" alt="" className='m-auto mt-4 hover:w-10' /></a>
      </div>

      <div className='w-80 h-80 bg-slate-900 rounded-2xl border-[0.1rem] '>
        <h1 className=' text-white text-center m-4 text-2xl font-semibold'>Landing Page</h1>
        <img src="/Images/02landing.jpg" alt="imagen" className='w-auto rounded-b-xl' />
        <a href="https://github.com/Kr0no5Col/Landing_Page"><img src="/Images/LogoGithuh.png" alt="" className='m-auto mt-4 hover:w-10' /></a>
      </div>

      <div className='w-80 h-80 bg-slate-900 rounded-2xl border-[0.1rem] '>
        <h1 className=' text-white text-center m-4 text-2xl font-semibold'>Weather Map</h1>
        <img src="/Images/03weather.jpg" alt="imagen" className='w-auto rounded-b-xl' />
        <a href="#"><img src="/Images/LogoGithuh.png" alt="" className='m-auto mt-4 hover:w-10' /></a>
      </div>
      
    </div>

    </>


  )
}