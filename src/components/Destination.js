import React from 'react'
import NavBar from './NavBar'
import moon from '../assets/destination/image-moon.png'

export default function Destination() {
  return (
    <div className='bg-background-destination-mobile bg-cover text-[#D0D6F9]'>
      <NavBar />
      <div className='flex flex-col justify-start items-center pt-24 font-barlow px-6'>
          <div>
            <h2 className='text-white'><span className='mr-4'>01</span> PICK YOUR DESTINATION</h2>
          </div>
          <div className='my-8'>
            <img className='w-44 h-44' src={moon} alt="Moon from outer space" />
          </div>
          <div>
            <ul className='flex flex-row text-sm'>
                <li className='mr-4'>
                    <button>MOON</button>
                </li>
                <li className='mr-4'>
                    <button>MARS</button>
                </li>
                <li className='mr-4'>
                    <button>EUROPA</button>
                </li>
                <li>
                    <button>TITAN</button>
                </li>
            </ul>
          </div>
          <div>
              <h1 className='font-bellefair text-center text-5xl mt-8 mb-4 text-white'>MOON</h1>
              <p className='text-center pb-8 border-b-[1px] text-sm leading-6'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          </div>
          <div className='w-full mb-10'>
              <div className='flex flex-col items-center w-full mb-4'>
                  <h3 className='text-sm mb-2 mt-6'>AVG. DISTANCE</h3>
                  <span className='text-2xl font-bellefair text-white'>384,400 KM</span>
              </div>
              <div className='flex flex-col items-center w-full'>
                  <h3 className='text-sm mb-2'>EST. TRAVEL TIME</h3>
                  <span className='text-2xl font-bellefair text-white'>3 DAYS</span>
              </div>
          </div>
      </div>
    </div>
  )
}
