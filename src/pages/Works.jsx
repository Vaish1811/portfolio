import React from 'react'
import img1 from '../assets/Mediaplayer.png'
import img2 from '../assets/ReduxCart.png'
import img3 from '../assets/Portfolio.png'
import img4 from '../assets/ProjectFair.png'  

function Works() {

  const works=[
    {name:"Project Fair App",description:"An app for store and manage b development based projects and explore through other projects also",link:"https://pf-client-jan25.vercel.app/",img:img4},
    {name:"ReduxCart",description:"A capston ecommerce app which mimic ekarts.Based on React Redux",link:"https://redux-cart-jan25.vercel.app/",img:img2},
    {name:"Mediaplayer",description:"A capston app which mimic multimedia management app using youtube videis.Developed using React.Js and json server",link:"https://media-player-jan25.vercel.app/",img:img1},
    {name:"Portfolio",description:"A portfolio site using react and tailwind css",link:"",img:img3},
  ]

  return (
    <>
      <div className='bg-black h-fit  ' id='works'>
        <h1 className='text-5xl font-bold text-white text-center py-20'>My Works</h1>
        <div className="grid grid-cols-2 py-10 sm:grid-cols-3 md:grid-cols-4 gap-6 md:py-15" style={{paddingTop:'50px'}}>
          {works.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-xl border-4 border-green-500 shadow-md text-white font-semibold text-lg transform transition duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <img src={item.img} alt="" height={'150px'} />
              <h1 className='text-blue-900'>{item.name}</h1>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-2">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Works