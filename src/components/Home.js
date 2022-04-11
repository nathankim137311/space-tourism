import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Home() {
  return (
    <div className='flex flex-col justify-center bg-background-home-mobile md:bg-background-home-tablet bg-cover text-white h-screen'>
        <NavBar />
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center my-16 px-6 max-w-md'>
                <div className='mb-8'>
                    <span className='text-center text-[#D0D6F9] font-barlow font-normal text-base block w-full sm:text-lg md:text-xl md:font-bold'>SO, YOU WANT TO TRAVEL TO</span>
                    <h1 className='text-center mt-8 text-7xl sm:text-8xl md:text-9xl font-bellefair'>SPACE</h1>
                </div>
                <p className='text-center text-[#D0D6F9] text-base leading-6 font-barlow font-normal md:font-bold'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to='/destination'>
              <button className='bg-white p-4 h-32 w-32 sm:h-44 sm:w-44 md:h-56 md:w-56 sm:mt-10 md:mt-20 sm:text-xl md:text-2xl rounded-full font-bellefair text-lg text-[#0B0D17] mb-16'>EXPLORE</button>
            </Link>
        </div>
    </div>
  )
}
