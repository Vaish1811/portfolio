import React from 'react'

function Home() {
  return (
    <>
      <div className='bg-black grid grid-cols-1 py-60 h-screen my-4 md:grid md:grid-cols-2 md:py-60 md:my-6 hover:border-3 hover:border-violet-600'>
        <div className='flex flex-col justify-center items-center text-center h-2/4'>
          <h1 className='text-5xl font-bold text-white'>Hi, I am <span className='text-violet-600'>Vaishnav</span></h1>
          <h3 className='text-3xl font-bold text-white py-5 hover:bg-amber-300 hover:text-shadow-2xs hover:text-shadow-amber-950'>A Fullstack Developer</h3>
          <h3 className='text-3xl font-bold text-white py-5 hover:bg-amber-400 hover:text-shadow-2xs hover:text-shadow-amber-950' >A Software Trainer</h3>
        </div>
        <div>
          <img className='h-3/4 w-3/4 mx-auto' src="https://cdni.iconscout.com/illustration/premium/thumb/developer-using-laptop-illustration-svg-download-png-11934879.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home