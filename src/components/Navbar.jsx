import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '.'
import Cancel from '../assets/Cancel.png'
import Menu from '../assets/Menu.png'
import Border from '../assets/Border.png'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const router = useRouter()
  const handleClick = () => {
    router.push('/register')
  }
  return (
    <nav className='w-full p-2 border-b border-b-[rgba(255, 255, 255, 0.18);] flex items-center justify-between'>
      <div>
        <p className='font-bold text-2xl m-4'>
          <Link href={`/`}>
            get<span className='text-[#D434FE]'>linked</span>
          </Link>
        </p>
      </div>
      <ul className='md:flex w-[60%] hidden justify-between ml-auto items-center'>
        <li>
          <Link href={`/`}>Timeline</Link>
        </li>

        <li>
          <Link href={`/`}>Overview</Link>
        </li>

        <li>
          <Link href={`/`}>FAQs</Link>
        </li>

        <li>
          <Link href={`/contact`}>Contact</Link>
        </li>

        <div className=''>
          <Button text='Register' onClick={handleClick} />
        </div>
      </ul>
      <div className='flex relative m-4'>
        {toggleMenu ? (
          <Image
            alt=''
            src={Cancel}
            onClick={() => setToggleMenu(false)}
            className='md:hidden cursor-pointer'
          />
        ) : (
          <Image
            alt=''
            src={Menu}
            onClick={() => setToggleMenu(true)}
            className='md:hidden cursor-pointer'
          />
        )}
        {/**Mobile Menu */}
        {toggleMenu && (
          <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-[30.75rem] shadow-2xl md:hidden bg-[#150E28] border-rgba(255, 255, 255, 0.04)'>
            <li className='m-2 '>
              <div className='flex relative items-center rounded-full justify-center   w-[30px] h-[30px]  ml-auto m-4 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-500'>
                <div className='bg-black w-[25px] h-[25px] rounded-full flex items-center justify-center'>
                  <Image
                    src={Cancel}
                    className='cursor-pointer'
                    onClick={() => setToggleMenu(false)}
                  />
                </div>
              </div>
            </li>
            <li className='m-6'>
              <Link href={`/`}>Timeline</Link>
            </li>
            <li className='m-6'>
              <Link href={`/`}>Overview</Link>
            </li>
            <li className='m-6'>
              <Link href={`/`}>FAQs</Link>
            </li>
            <li className='m-6'>
              <Link href={`/contact`}>Contact</Link>
            </li>
            <li className='m-6'>
              <div className=''>
                <Button text='Register' onClick={handleClick} />
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
