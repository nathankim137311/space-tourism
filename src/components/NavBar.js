import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hamburgerIcon from '../assets/shared/icon-hamburger.svg'
import logoIcon from '../assets/shared/logo.svg'
import closeIcon from '../assets/shared/icon-close.svg'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {isOpen && <SideBar className='absolute top-0 right-0' setIsOpen={setIsOpen} />}
        <header className='absolute top-0 w-full flex flex-row justify-between items-center p-6 z-10'>
            <img className='h-10 w-10' src={logoIcon} alt="Company logo" />
            <nav>
                {!isOpen && <button onClick={() => setIsOpen(true)}><img src={hamburgerIcon} alt="Hamburger menu for navigation" /></button>}
            </nav>
        </header>
    </>
  )
}

const SideBar = ({ setIsOpen }) => {
    return (
        <div className='absolute top-0 right-0'>
            <div className='relative bg-black w-64 h-screen shadow-md z-20'>
                <div className='flex w-full justify-end p-6'>
                    <button onClick={() => setIsOpen(false)}><img className='my-[10px]' src={closeIcon} alt="Close sidebar" /></button>
                </div>
                <ul className='font-barlow flex flex-col items-center px-6'>
                    <li className='w-full my-6'>
                        <Link to='home'><span className='font-extrabold mr-2'>00</span> HOME</Link>
                    </li>
                    <li className='w-full mb-6'>
                        <Link to='destination'><span className='font-extrabold mr-2'>01</span> DESTINATION</Link>
                    </li>
                    <li className='w-full mb-6'>
                        <Link to='crew'><span className='font-extrabold mr-2'>02</span> CREW</Link>
                    </li>
                    <li className='w-full mb-6'>
                        <Link to='technology'><span className='font-extrabold mr-2'>03</span> TECHNOLOGY</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

{/* <ul className='flex flex-row'>
    <li>
        <Link to='home'><span>00</span> HOME</Link>
    </li>
    <li>
        <Link to='destination'><span>01</span> DESTINATION</Link>
    </li>
    <li>
        <Link to='crew'><span>02</span> CREW</Link>
    </li>
    <li>
        <Link to='technology'><span>03</span> TECHNOLOGY</Link>
    </li>
</ul> */}
