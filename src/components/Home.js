import React from 'react'
import NavBar from './NavBar'

export default function Home() {
  return (
    <div className='flex flex-col justify-center bg-background-home-mobile bg-cover text-white h-screen'>
        <NavBar />
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center my-16 px-6'>
                <div className='mb-8'>
                    <span className='text-center text-[#D0D6F9] font-barlow font-normal text-base block w-full'>SO, YOU WANT TO TRAVEL TO</span>
                    <h1 className='text-center mt-8 text-7xl font-bellefair'>SPACE</h1>
                </div>
                <p className='text-center text-[#D0D6F9] text-base leading-6 font-barlow font-normal'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <button className='bg-white p-4 h-32 w-32 rounded-full font-bellefair text-lg text-[#0B0D17] mb-16'>EXPLORE</button>
        </div>
    </div>
  )
}
