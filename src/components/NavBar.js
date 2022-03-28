import React from 'react'
import { Link } from 'react-router-dom'
import hamburgerIcon from '../assets/shared/icon-hamburger.svg'
import logoIcon from '../assets/shared/logo.svg'

export default function NavBar() {
  return (
    <>
        <header className='absolute top-0 w-full flex flex-row justify-between items-center p-4'>
            <img className='h-10 w-10' src={logoIcon} alt="Company logo" />
            <nav>
                <button><img src={hamburgerIcon} alt="Hamburger menu for navigation" /></button>
            </nav>
        </header>
    </>
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
