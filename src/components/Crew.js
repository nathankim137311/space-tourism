import React, { useState } from 'react'
import NavBar from './NavBar'
import data from '../assets/data.json'

export default function Crew() {
    const [currentMember, setCurrentMember] = useState(0)

  return (
    <div className='bg-background-crew-mobile bg-cover text-[#D0D6F9] h-screen'>
        <NavBar />
        <div className='flex flex-col justify-start items-center pt-24 font-barlow px-6'>
            <div className='mb-8'>
                <h2 className='text-white'><span className='mr-4 text-gray-400'>02</span> MEET YOUR CREW</h2>
            </div>
            <CrewMember member={data.crew[currentMember]} currentMember={currentMember} setCurrentMember={setCurrentMember} />
        </div>
    </div>
  )
}

const CrewMember = ({ 
    member, 
    currentMember, 
    setCurrentMember 
}) => {
    return (
        <div>
            <div className='w-full flex flex-row justify-center border-b-[1px] border-gray-700'>
                <img className='h-56 w-auto' src={member.img_url} alt={member.name} />
            </div>
            <div className='w-full flex flex-row justify-center py-8'>
                <ul className='flex flex-row justify-between h-6 w-24'>
                    {data.crew.map((member, index) => {
                        return (
                            <li className='flex flex-row items-center' key={index}>
                                <button 
                                    className={currentMember === index ? 'h-3 w-3 rounded-full bg-white' : 'h-3 w-3 rounded-full bg-gray-700'}
                                    onClick={() => setCurrentMember(index)}
                                ></button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='mb-6 flex flex-col items-center'>
                <span className='mb-2 text-lg font-bellefair text-gray-400'>{member.role.toUpperCase()}</span>
                <h2 className='text-white font-bellefair text-2xl'>{member.name.toUpperCase()}</h2>
            </div>
            <p className='text-center leading-6 text-base'>{member.bio}</p>
        </div>
    )
}