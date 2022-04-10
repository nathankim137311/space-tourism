import React, { useState } from 'react'
import NavBar from './NavBar'
import data from '../assets/data.json'

export default function Destination() {
    const [currentDestination, setCurrentDestination] = useState(0);

    const switchTabs = (index) => {
        setCurrentDestination(index);
    }
    
  return (
    <div className='bg-background-destination-mobile bg-cover text-[#D0D6F9]'>
      <NavBar />
      <div className='flex flex-col justify-start items-center pt-24 font-barlow px-6'>
        <div>
            <h2 className='text-white'><span className='mr-4 text-gray-400'>01</span> PICK YOUR DESTINATION</h2>
        </div>
        <div className='mt-8'>
            <ul className='flex flex-row text-sm h-6'>
                {data.destinations.map((destination, index) => {
                    return (
                        <li key={index} className={index === data.destinations.length - 1 ? '' : 'mr-4'}>
                            <button 
                                className={currentDestination === index ? 'border-b-2 underline-offset-8 h-full' : 'h-full'}
                                onClick={() => switchTabs(index)}
                            >{destination.name.toUpperCase()}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        <DestinationInfo destination={data.destinations[currentDestination]} />
      </div>
    </div>
  )
}

const DestinationInfo = ({ destination }) => {
    return (
        <>
            <div className='my-8'>
                <img className='w-44 h-44' src={destination.img_url} alt="Moon from outer space" />
            </div>
            <div>
                <h1 className='font-bellefair text-center text-5xl mt-8 mb-4 text-white'>{destination.name.toUpperCase()}</h1>
                <p className='text-center pb-8 border-b-[1px] text-base leading-6'>{destination.description}</p>
            </div>
            <div className='w-full mb-10'>
                <div className='flex flex-col items-center w-full mb-4'>
                    <h3 className='text-sm mb-2 mt-6'>AVG. DISTANCE</h3>
                    <span className='text-2xl font-bellefair text-white'>{destination.distance}</span>
                </div>
                <div className='flex flex-col items-center w-full'>
                    <h3 className='text-sm mb-2'>EST. TRAVEL TIME</h3>
                    <span className='text-2xl font-bellefair text-white'>{destination.travel_time}</span>
                </div>
            </div>
        </>
    )
}
