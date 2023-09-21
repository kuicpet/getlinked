import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InstaImg from '../assets/Instagram.png'
import FacebookImg from '../assets/Facebook.png'
import XImg from '../assets/X.png'
import LinkedInImg from '../assets/LinkedIn.png'
import CallImg from '../assets/Call.png'
import LocationImg from '../assets/Location.png'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full p-4'>
      <div className='flex flex-col md:flex-row  w-full'>
        <div className='md:w-1/2'>
          <div>
            <p className='font-bold text-2xl m-4'>
              <Link href={`/`}>
                get<span className='text-[#D434FE]'>linked</span>
              </Link>
            </p>
          </div>
          <p className='m-4'>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <small className='ml-4'>
            Terms of Use <span className='text-[#D434FE]'>|</span> Privacy
            Policy
          </small>
        </div>
        <div className='md:w-1/2  grid md:grid-cols-2'>
          <div className='p-2 m-4'>
            <h3 className='text-[#D434FE]'>Useful Links</h3>
            <ul>
              <li className='text-[0.75rem] m-2'>Overview</li>
              <li className='text-[0.75rem] m-2'>Timeline</li>
              <li className='text-[0.75rem] m-2'>FAQs</li>
              <li className='text-[0.75rem] m-2'>
                <Link href={'/register'}>Register</Link>
              </li>
            </ul>
            <span className='flex items-center justify-between m-2'>
              <p className='text-[#D434FE] text-[0.75rem]'>Follow us</p>
              <Image src={InstaImg} alt='' />
              <Image src={XImg} alt='' />
              <Image src={FacebookImg} alt='' />
              <Image src={LinkedInImg} alt='' />
            </span>
          </div>
          <div className='p-2 m-4'>
            <h3 className='text-[#D434FE]'>Contact us</h3>
            <ul>
              <li className='flex items-center text-[0.75rem]'>
                <Image src={CallImg} alt='' className='mr-2 my-2' />
                +234 679 81819
              </li>
              <li className='flex items-start md:justify-center text-[0.75rem]'>
                <Image src={LocationImg} alt='' className='mr-2' />
                <span className='text-justify'>
                  {' '}
                  27,Alara Street Yaba 100012 Lagos State
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <small className='text-center'>
          All rights reserved. © getlinked Ltd.
        </small>
      </div>
    </footer>
  )
}

export default Footer
