import React, { useState } from 'react'
import NavBar from './NavBar'
import data from '../assets/data.json'

export default function Technology() {
    const [currentTech, setCurrentTech] = useState(0)

  return (
    <div className='bg-background-technology-mobile bg-cover text-[#D0D6F9] h-screen'>
        <NavBar />
        <div className='flex flex-col justify-start items-center pt-24 font-barlow'>
            <div className='mb-8'>
                <h2 className='text-white'><span className='mr-4 text-gray-400'>03</span> SPACE LAUNCH 101</h2>
            </div>
            <Terminology term={data.tech[currentTech]} currentTech={currentTech} setCurrentTech={setCurrentTech} />
        </div>
    </div>
  )
}

const Terminology = ({ 
    term,
    currentTech,
    setCurrentTech
}) => {
    return (
        <div>
            <div>
                <img className='h-44 w-full' src={term.img_url} alt={term.title} />
            </div>
            <div className='flex flex-row justify-center my-8'>
                <ul className='flex flex-row w-40 justify-between'>
                    {data.tech.map((tech, index) => {
                        return (
                            <li className={currentTech === index ? 'flex flex-row justify-center items-center h-10 w-10 rounded-full border-2 border-white bg-white text-black' : 'flex flex-row justify-center items-center h-10 w-10 rounded-full border-2 border-gray-600'} key={index}>
                                <button 
                                    className='w-full h-full'
                                    onClick={() => setCurrentTech(index)}
                                    >{index + 1}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='px-6'>
                <div className='mb-6 flex flex-col items-center'>
                    <span className='mb-2 text-lg font-bellefair'>The Terminology...</span>
                    <h2 className='text-white font-bellefair text-2xl'>{term.title.toUpperCase()}</h2>
                </div>
                <p className='text-center leading-6 text-base'>{term.description}</p>
            </div>
        </div>
    )
}
